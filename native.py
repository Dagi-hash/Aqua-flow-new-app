import os, glob, json, math, wave, struct
from PIL import Image, ImageDraw

# Runs in the repo root AFTER `npx cap add android` and BEFORE `npx cap sync android`.
# Turns the plain Capacitor project into AquaFlow: icon, black splash and bars, real background alarms,
# water-reminder notifications and the three home-screen widgets.

R = 'android/app/src/main/res/'
APP_ID = json.load(open('capacitor.config.json'))['appId']
JAVA_DIR = 'android/app/src/main/java/' + APP_ID.replace('.', '/') + '/'

def write(path, text):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(text)

# ---- black splash + dark launcher background ----
for f in glob.glob(R + '**/splash.png', recursive=True): os.remove(f)
write(R + 'drawable/splash.xml', '<?xml version="1.0" encoding="utf-8"?>\n<shape xmlns:android="http://schemas.android.com/apk/res/android"><solid android:color="#000000"/></shape>\n')
write(R + 'values/ic_launcher_background.xml', '<?xml version="1.0" encoding="utf-8"?>\n<resources>\n    <color name="ic_launcher_background">#090D16</color>\n</resources>\n')

# ---- theme: black status & navigation bars ----
p = R + 'values/styles.xml'; s = open(p).read()
assert '<item name="android:background">@null</item>' in s
s = s.replace('<item name="android:background">@null</item>', '<item name="android:background">@null</item>\n        <item name="android:statusBarColor">#000000</item>\n        <item name="android:navigationBarColor">#000000</item>\n        <item name="android:windowBackground">#000000</item>\n        <item name="android:windowLightStatusBar">false</item>')
open(p, 'w').write(s)

# ---- manifest: permissions, ring service, receivers, widgets ----
p = 'android/app/src/main/AndroidManifest.xml'; s = open(p).read()
s = s.replace('<uses-permission android:name="android.permission.INTERNET" />', '''<uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.POST_NOTIFICATIONS" />
    <uses-permission android:name="android.permission.VIBRATE" />
    <uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED" />
    <uses-permission android:name="android.permission.WAKE_LOCK" />
    <uses-permission android:name="android.permission.USE_EXACT_ALARM" />
    <uses-permission android:name="android.permission.SCHEDULE_EXACT_ALARM" android:maxSdkVersion="32" />
    <uses-permission android:name="android.permission.FOREGROUND_SERVICE" />
    <uses-permission android:name="android.permission.FOREGROUND_SERVICE_MEDIA_PLAYBACK" />
    <uses-permission android:name="android.permission.USE_FULL_SCREEN_INTENT" />
    <uses-permission android:name="android.permission.REQUEST_IGNORE_BATTERY_OPTIMIZATIONS" />''')

# let alarms wake the screen and show the app over the lock screen
assert '<activity' in s
s = s.replace('<activity', '<activity android:showWhenLocked="true" android:turnScreenOn="true"', 1)

def receiver(cls, label, info):
    return f'''
        <receiver android:name="{APP_ID}.{cls}" android:exported="true" android:label="{label}">
            <intent-filter>
                <action android:name="android.appwidget.action.APPWIDGET_UPDATE" />
            </intent-filter>
            <meta-data android:name="android.appwidget.provider" android:resource="@xml/{info}" />
        </receiver>
'''
alarm_xml = f'''
        <service android:name="{APP_ID}.AlarmService" android:exported="false" android:foregroundServiceType="mediaPlayback" />
        <receiver android:name="{APP_ID}.AlarmReceiver" android:exported="false" />
        <receiver android:name="{APP_ID}.BootReceiver" android:exported="true">
            <intent-filter>
                <action android:name="android.intent.action.BOOT_COMPLETED" />
                <action android:name="android.intent.action.MY_PACKAGE_REPLACED" />
            </intent-filter>
        </receiver>
'''
widgets_xml = alarm_xml + receiver('AnalogWidget', 'AquaFlow Analog', 'widget_analog_info') \
            + receiver('DigitalWidget', 'AquaFlow Digital', 'widget_digital_info') \
            + receiver('FlipWidget', 'AquaFlow Flip Clock', 'widget_flip_info')
assert '</application>' in s
s = s.replace('</application>', widgets_xml + '    </application>', 1)
open(p, 'w').write(s)

# ---- launcher icons from the app icon (made by icons.py) ----
src = Image.open('www/icons/icon-512.png').convert('RGB')
fg = Image.open('www/icons/maskable-512.png').convert('RGB')
for d, legacy, adaptive in [('mdpi',48,108),('hdpi',72,162),('xhdpi',96,216),('xxhdpi',144,324),('xxxhdpi',192,432)]:
    os.makedirs(f'{R}mipmap-{d}', exist_ok=True)
    a = src.resize((legacy, legacy), Image.LANCZOS)
    a.save(f'{R}mipmap-{d}/ic_launcher.png')
    m = Image.new('L', (legacy, legacy), 0); ImageDraw.Draw(m).ellipse([0,0,legacy-1,legacy-1], fill=255)
    r = a.copy(); r.putalpha(m); r.save(f'{R}mipmap-{d}/ic_launcher_round.png')
    fg.resize((adaptive, adaptive), Image.LANCZOS).save(f'{R}mipmap-{d}/ic_launcher_foreground.png')

# ---- sounds: 60 s looping alarm ringtone + short water chime ----
RATE = 16000
def tone(freq, dur, vol=0.8, decay=False):
    n = int(RATE * dur); out = []
    for i in range(n):
        env = min(1.0, i / (RATE * 0.008), (n - i) / (RATE * 0.02))
        if decay: env *= math.exp(-3.2 * i / n)
        out.append(vol * env * math.sin(2 * math.pi * freq * i / RATE))
    return out
def silence(dur): return [0.0] * int(RATE * dur)
def save_wav(path, samples):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with wave.open(path, 'wb') as w:
        w.setnchannels(1); w.setsampwidth(2); w.setframerate(RATE)
        w.writeframes(b''.join(struct.pack('<h', int(max(-1, min(1, v)) * 30000)) for v in samples))
unit = []
for _ in range(2):                       # beep-beep ... beep-beep
    unit += tone(1046.5, 0.14) + silence(0.07) + tone(1396.9, 0.14) + silence(0.07)
unit += silence(0.45)
samples = []
while len(samples) < RATE * 60: samples += unit
save_wav(R + 'raw/alarm_sound.wav', samples[:RATE * 60])
chime = []
for f in (880.0, 1108.7, 1318.5, 1760.0):  # rising water-drop arpeggio
    chime += tone(f, 0.45, 0.6, True)
save_wav(R + 'raw/aqua_chime.wav', chime + silence(0.3))

# ---- small notification icon, colours, widget drawables / layouts ----
write(R + 'values/aqua_colors.xml', '<?xml version="1.0" encoding="utf-8"?>\n<resources>\n    <color name="aqua_black">#000000</color>\n    <color name="aqua_icon_bg">#090D16</color>\n</resources>\n')
# ================= RESOURCES (home-screen widgets + notification icon) =================
write(R + 'drawable/clock_dial.xml', r"""<?xml version="1.0" encoding="utf-8"?>
<vector xmlns:android="http://schemas.android.com/apk/res/android"
    android:width="200dp"
    android:height="200dp"
    android:viewportWidth="200"
    android:viewportHeight="200">
    <path
        android:fillColor="#99000000"
        android:strokeColor="#00F2FE"
        android:strokeWidth="3"
        android:pathData="M100,100 m-94,0 a94,94 0 1,0 188,0 a94,94 0 1,0 -188,0" />
    <path
        android:strokeColor="#FFFFFF"
        android:strokeWidth="4"
        android:strokeLineCap="round"
        android:pathData="M100,12 L100,26 M188,100 L174,100 M100,188 L100,174 M12,100 L26,100" />
</vector>
""")
write(R + 'drawable/clock_hour.xml', r"""<?xml version="1.0" encoding="utf-8"?>
<vector xmlns:android="http://schemas.android.com/apk/res/android"
    android:width="200dp"
    android:height="200dp"
    android:viewportWidth="200"
    android:viewportHeight="200">
    <path
        android:strokeColor="#FFFFFF"
        android:strokeWidth="9"
        android:strokeLineCap="round"
        android:pathData="M100,100 L100,56" />
</vector>
""")
write(R + 'drawable/clock_minute.xml', r"""<?xml version="1.0" encoding="utf-8"?>
<vector xmlns:android="http://schemas.android.com/apk/res/android"
    android:width="200dp"
    android:height="200dp"
    android:viewportWidth="200"
    android:viewportHeight="200">
    <path
        android:strokeColor="#00F2FE"
        android:strokeWidth="6"
        android:strokeLineCap="round"
        android:pathData="M100,100 L100,30" />
</vector>
""")
write(R + 'drawable/flip_card_bg.xml', r"""<?xml version="1.0" encoding="utf-8"?>
<shape xmlns:android="http://schemas.android.com/apk/res/android" android:shape="rectangle">
    <solid android:color="#1F2535" />
    <corners android:radius="10dp" />
</shape>
""")
write(R + 'drawable/ic_stat_aqua.xml', r"""<?xml version="1.0" encoding="utf-8"?>
<vector xmlns:android="http://schemas.android.com/apk/res/android"
    android:width="24dp"
    android:height="24dp"
    android:viewportWidth="24"
    android:viewportHeight="24">
    <path
        android:fillColor="#FFFFFFFF"
        android:pathData="M12,2.5C12,2.5 5.5,9.6 5.5,14.5a6.5,6.5 0 0 0 13,0C18.5,9.6 12,2.5 12,2.5z" />
</vector>
""")
write(R + 'drawable/widget_bg.xml', r"""<?xml version="1.0" encoding="utf-8"?>
<shape xmlns:android="http://schemas.android.com/apk/res/android" android:shape="rectangle">
    <solid android:color="#F20B0F19" />
    <corners android:radius="24dp" />
    <stroke android:width="1dp" android:color="#33FFFFFF" />
</shape>
""")
write(R + 'drawable/widget_btn_bg.xml', r"""<?xml version="1.0" encoding="utf-8"?>
<shape xmlns:android="http://schemas.android.com/apk/res/android" android:shape="rectangle">
    <solid android:color="#00F2FE" />
    <corners android:radius="14dp" />
</shape>
""")
write(R + 'drawable/widget_progress.xml', r"""<?xml version="1.0" encoding="utf-8"?>
<layer-list xmlns:android="http://schemas.android.com/apk/res/android">
    <item android:id="@android:id/background">
        <shape android:shape="rectangle">
            <corners android:radius="4dp" />
            <solid android:color="#33FFFFFF" />
        </shape>
    </item>
    <item android:id="@android:id/progress">
        <clip>
            <shape android:shape="rectangle">
                <corners android:radius="4dp" />
                <solid android:color="#00F2FE" />
            </shape>
        </clip>
    </item>
</layer-list>
""")
write(R + 'layout/widget_analog.xml', r"""<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:id="@+id/w_root"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:background="@drawable/widget_bg"
    android:gravity="center"
    android:orientation="horizontal"
    android:padding="10dp">

    <FrameLayout
        android:layout_width="0dp"
        android:layout_height="match_parent"
        android:layout_weight="1">

        <AnalogClock
            android:layout_width="match_parent"
            android:layout_height="match_parent"
            android:dial="@drawable/clock_dial"
            android:hand_hour="@drawable/clock_hour"
            android:hand_minute="@drawable/clock_minute" />

        <TextClock
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_gravity="center_horizontal|bottom"
            android:layout_marginBottom="22dp"
            android:format12Hour="a"
            android:format24Hour="a"
            android:textColor="#FFFFFF"
            android:textSize="11sp"
            android:textStyle="bold" />
    </FrameLayout>

    <LinearLayout
        android:layout_width="0dp"
        android:layout_height="wrap_content"
        android:layout_marginStart="8dp"
        android:layout_weight="1"
        android:gravity="center_vertical"
        android:orientation="vertical">

        <TextView
            android:id="@+id/w_intake"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:gravity="center"
            android:textColor="#FFFFFF"
            android:textSize="13sp"
            android:textStyle="bold" />

        <ProgressBar
            android:id="@+id/w_progress"
            style="?android:attr/progressBarStyleHorizontal"
            android:layout_width="match_parent"
            android:layout_height="8dp"
            android:layout_marginTop="6dp"
            android:layout_marginBottom="8dp"
            android:max="2500"
            android:progress="0"
            android:progressDrawable="@drawable/widget_progress" />

        <TextView
            android:id="@+id/w_add"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:background="@drawable/widget_btn_bg"
            android:gravity="center"
            android:paddingTop="8dp"
            android:paddingBottom="8dp"
            android:text="+250 ml"
            android:textColor="#031A22"
            android:textSize="14sp"
            android:textStyle="bold" />
    </LinearLayout>
</LinearLayout>
""")
write(R + 'layout/widget_digital.xml', r"""<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:id="@+id/w_root"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:background="@drawable/widget_bg"
    android:gravity="center"
    android:orientation="vertical"
    android:padding="12dp">

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="NEXT GLASS IN"
        android:textColor="#99FFFFFF"
        android:textSize="10sp"
        android:textStyle="bold" />

    <Chronometer
        android:id="@+id/w_cd"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:textColor="#00F2FE"
        android:textSize="30sp"
        android:textStyle="bold" />

    <TextView
        android:id="@+id/w_intake"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginTop="2dp"
        android:textColor="#FFFFFF"
        android:textSize="13sp"
        android:textStyle="bold" />

    <ProgressBar
        android:id="@+id/w_progress"
        style="?android:attr/progressBarStyleHorizontal"
        android:layout_width="match_parent"
        android:layout_height="8dp"
        android:layout_marginTop="6dp"
        android:layout_marginBottom="8dp"
        android:max="2500"
        android:progress="0"
        android:progressDrawable="@drawable/widget_progress" />

    <TextView
        android:id="@+id/w_add"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:background="@drawable/widget_btn_bg"
        android:gravity="center"
        android:paddingTop="7dp"
        android:paddingBottom="7dp"
        android:text="+250 ml"
        android:textColor="#031A22"
        android:textSize="14sp"
        android:textStyle="bold" />
</LinearLayout>
""")
write(R + 'layout/widget_flip.xml', r"""<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:id="@+id/w_root"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:background="@drawable/widget_bg"
    android:gravity="center"
    android:orientation="vertical"
    android:padding="10dp">

    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:gravity="center"
        android:orientation="horizontal">

        <TextClock
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:background="@drawable/flip_card_bg"
            android:format12Hour="hh"
            android:format24Hour="HH"
            android:gravity="center"
            android:minWidth="52dp"
            android:paddingTop="6dp"
            android:paddingBottom="6dp"
            android:textColor="#FFFFFF"
            android:textSize="34sp"
            android:textStyle="bold" />

        <TextClock
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_marginStart="6dp"
            android:background="@drawable/flip_card_bg"
            android:format12Hour="mm"
            android:format24Hour="mm"
            android:gravity="center"
            android:minWidth="52dp"
            android:paddingTop="6dp"
            android:paddingBottom="6dp"
            android:textColor="#FFFFFF"
            android:textSize="34sp"
            android:textStyle="bold" />
    </LinearLayout>

    <TextClock
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginTop="4dp"
        android:format12Hour="a"
        android:format24Hour="EEE"
        android:textColor="#99FFFFFF"
        android:textSize="11sp"
        android:textStyle="bold" />

    <TextView
        android:id="@+id/w_intake"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginTop="2dp"
        android:textColor="#FFFFFF"
        android:textSize="12sp"
        android:textStyle="bold" />

    <ProgressBar
        android:id="@+id/w_progress"
        style="?android:attr/progressBarStyleHorizontal"
        android:layout_width="match_parent"
        android:layout_height="8dp"
        android:layout_marginTop="5dp"
        android:layout_marginBottom="6dp"
        android:max="2500"
        android:progress="0"
        android:progressDrawable="@drawable/widget_progress" />

    <TextView
        android:id="@+id/w_add"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:background="@drawable/widget_btn_bg"
        android:gravity="center"
        android:paddingTop="6dp"
        android:paddingBottom="6dp"
        android:text="+250 ml"
        android:textColor="#031A22"
        android:textSize="13sp"
        android:textStyle="bold" />
</LinearLayout>
""")
write(R + 'xml/widget_analog_info.xml', r"""<?xml version="1.0" encoding="utf-8"?>
<appwidget-provider xmlns:android="http://schemas.android.com/apk/res/android"
    android:initialLayout="@layout/widget_analog"
    android:minWidth="110dp"
    android:minHeight="110dp"
    android:minResizeWidth="110dp"
    android:minResizeHeight="90dp"
    android:previewLayout="@layout/widget_analog"
    android:resizeMode="horizontal|vertical"
    android:targetCellWidth="2"
    android:targetCellHeight="2"
    android:updatePeriodMillis="1800000"
    android:widgetCategory="home_screen" />
""")
write(R + 'xml/widget_digital_info.xml', r"""<?xml version="1.0" encoding="utf-8"?>
<appwidget-provider xmlns:android="http://schemas.android.com/apk/res/android"
    android:initialLayout="@layout/widget_digital"
    android:minWidth="110dp"
    android:minHeight="110dp"
    android:minResizeWidth="110dp"
    android:minResizeHeight="90dp"
    android:previewLayout="@layout/widget_digital"
    android:resizeMode="horizontal|vertical"
    android:targetCellWidth="2"
    android:targetCellHeight="2"
    android:updatePeriodMillis="1800000"
    android:widgetCategory="home_screen" />
""")
write(R + 'xml/widget_flip_info.xml', r"""<?xml version="1.0" encoding="utf-8"?>
<appwidget-provider xmlns:android="http://schemas.android.com/apk/res/android"
    android:initialLayout="@layout/widget_flip"
    android:minWidth="110dp"
    android:minHeight="110dp"
    android:minResizeWidth="110dp"
    android:minResizeHeight="90dp"
    android:previewLayout="@layout/widget_flip"
    android:resizeMode="horizontal|vertical"
    android:targetCellWidth="2"
    android:targetCellHeight="2"
    android:updatePeriodMillis="1800000"
    android:widgetCategory="home_screen" />
""")

# ================= JAVA: widgets, real alarm clock (AlarmManager.setAlarmClock + looping foreground service), JS bridge =================
def java(name, body):
    write(JAVA_DIR + name + '.java', body.replace('__PKG__', APP_ID))
java('BaseWidget', r"""package __PKG__;

import android.app.PendingIntent;
import android.appwidget.AppWidgetManager;
import android.appwidget.AppWidgetProvider;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.SystemClock;
import android.view.View;
import android.widget.RemoteViews;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

public abstract class BaseWidget extends AppWidgetProvider {
    public static final String PREFS = "aquaflow_widget";
    public static final String ACTION_ADD = "__PKG__.ADD_WATER";

    protected abstract int layoutId();

    @Override
    public void onUpdate(Context context, AppWidgetManager manager, int[] ids) {
        for (int i = 0; i < ids.length; i++) {
            manager.updateAppWidget(ids[i], build(context));
        }
    }

    @Override
    public void onReceive(Context context, Intent intent) {
        if (intent != null && ACTION_ADD.equals(intent.getAction())) {
            addWater(context, 250);
            updateAll(context);
        } else {
            super.onReceive(context, intent);
        }
    }

    private static String todayKey() {
        return new SimpleDateFormat("yyyy-MM-dd", Locale.US).format(new Date());
    }

    static void addWater(Context c, int ml) {
        SharedPreferences p = c.getSharedPreferences(PREFS, Context.MODE_PRIVATE);
        String today = todayKey();
        int intake = today.equals(p.getString("date", "")) ? p.getInt("intake", 0) : 0;
        String pending = p.getString("pending", "");
        SharedPreferences.Editor e = p.edit();
        e.putString("date", today);
        e.putInt("intake", intake + ml);
        e.putString("pending", pending + System.currentTimeMillis() + ":" + ml + ";");
        e.apply();
    }

    protected RemoteViews build(Context c) {
        SharedPreferences p = c.getSharedPreferences(PREFS, Context.MODE_PRIVATE);
        int intake = todayKey().equals(p.getString("date", "")) ? p.getInt("intake", 0) : 0;
        int goal = p.getInt("goal", 2500);
        if (goal <= 0) goal = 2500;
        long nextAt = p.getLong("nextAt", 0L);

        RemoteViews v = new RemoteViews(c.getPackageName(), layoutId());
        v.setTextViewText(R.id.w_intake, intake + " / " + goal + " ml");
        v.setProgressBar(R.id.w_progress, goal, Math.min(intake, goal), false);

        Intent add = new Intent(c, getClass());
        add.setAction(ACTION_ADD);
        PendingIntent addPi = PendingIntent.getBroadcast(c, 0, add,
                PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE);
        v.setOnClickPendingIntent(R.id.w_add, addPi);

        Intent open = c.getPackageManager().getLaunchIntentForPackage(c.getPackageName());
        if (open != null) {
            PendingIntent openPi = PendingIntent.getActivity(c, 1, open,
                    PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE);
            v.setOnClickPendingIntent(R.id.w_root, openPi);
        }
        extra(c, v, nextAt);
        return v;
    }

    protected void extra(Context c, RemoteViews v, long nextAt) {
    }

    protected static void countdown(RemoteViews v, int viewId, long nextAt) {
        long now = System.currentTimeMillis();
        if (nextAt > now) {
            long base = SystemClock.elapsedRealtime() + (nextAt - now);
            v.setViewVisibility(viewId, View.VISIBLE);
            v.setChronometerCountDown(viewId, true);
            v.setChronometer(viewId, base, null, true);
        } else {
            v.setChronometerCountDown(viewId, true);
            v.setChronometer(viewId, SystemClock.elapsedRealtime(), null, false);
        }
    }

    public static void updateAll(Context c) {
        AppWidgetManager m = AppWidgetManager.getInstance(c);
        refresh(c, m, new ComponentName(c, AnalogWidget.class), new AnalogWidget());
        refresh(c, m, new ComponentName(c, DigitalWidget.class), new DigitalWidget());
        refresh(c, m, new ComponentName(c, FlipWidget.class), new FlipWidget());
    }

    private static void refresh(Context c, AppWidgetManager m, ComponentName cn, BaseWidget w) {
        int[] ids = m.getAppWidgetIds(cn);
        if (ids == null) return;
        for (int i = 0; i < ids.length; i++) {
            m.updateAppWidget(ids[i], w.build(c));
        }
    }
}
""")

java('AnalogWidget', r"""package __PKG__;

import android.content.Context;
import android.widget.RemoteViews;

public class AnalogWidget extends BaseWidget {
    @Override
    protected int layoutId() {
        return R.layout.widget_analog;
    }

}
""")

java('DigitalWidget', r"""package __PKG__;

import android.content.Context;
import android.widget.RemoteViews;

public class DigitalWidget extends BaseWidget {
    @Override
    protected int layoutId() {
        return R.layout.widget_digital;
    }

    @Override
    protected void extra(Context c, RemoteViews v, long nextAt) {
        countdown(v, R.id.w_cd, nextAt);
    }
}
""")

java('FlipWidget', r"""package __PKG__;

import android.content.Context;
import android.widget.RemoteViews;

public class FlipWidget extends BaseWidget {
    @Override
    protected int layoutId() {
        return R.layout.widget_flip;
    }

}
""")

java('AlarmScheduler', r"""package __PKG__;

import android.app.AlarmManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.net.Uri;

import org.json.JSONArray;
import org.json.JSONObject;

import java.util.Calendar;

/** Registers alarms, water reminders and the timer with AlarmManager.setAlarmClock (exact, works in Doze, survives app close). */
public class AlarmScheduler {
    static final String PREFS = "aquaflow_alarm_prefs";
    static final String KEY_SPEC = "spec";
    static final String ACTION_FIRE = "__PKG__.ALARM_FIRE";
    static final String ACTION_DRANK = "__PKG__.ACTION_DRANK";
    static final String ACTION_SNOOZE = "__PKG__.ACTION_SNOOZE";
    static final int TEST_ID = 3;
    static final int SNOOZE_ID = 9;

    static Intent baseIntent(Context c, int id) {
        Intent i = new Intent(c, AlarmReceiver.class);
        i.setAction(ACTION_FIRE);
        i.setData(Uri.parse("aquaalarm://item/" + id));
        return i;
    }

    static int piFlags() {
        return PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE;
    }

    static void cancelAll(Context c, String spec) {
        if (spec == null) return;
        try {
            AlarmManager am = (AlarmManager) c.getSystemService(Context.ALARM_SERVICE);
            JSONArray items = new JSONObject(spec).optJSONArray("items");
            if (items == null) return;
            for (int k = 0; k < items.length(); k++) {
                int id = items.getJSONObject(k).getInt("id");
                PendingIntent pi = PendingIntent.getBroadcast(c, id, baseIntent(c, id), piFlags());
                am.cancel(pi);
                pi.cancel();
            }
        } catch (Exception ignored) {
        }
    }

    public static void apply(Context c, String newSpec) {
        SharedPreferences sp = c.getSharedPreferences(PREFS, Context.MODE_PRIVATE);
        cancelAll(c, sp.getString(KEY_SPEC, null));
        sp.edit().putString(KEY_SPEC, newSpec).apply();
        scheduleAll(c, newSpec);
    }

    public static void rescheduleFromPrefs(Context c) {
        SharedPreferences sp = c.getSharedPreferences(PREFS, Context.MODE_PRIVATE);
        String spec = sp.getString(KEY_SPEC, null);
        if (spec == null) return;
        cancelAll(c, spec);
        scheduleAll(c, spec);
    }

    static PendingIntent showIntent(Context c) {
        Intent launch = c.getPackageManager().getLaunchIntentForPackage(c.getPackageName());
        return PendingIntent.getActivity(c, 0, launch, piFlags());
    }

    static void putCommon(Intent i, String kind, String title, String body, boolean muted, int snoozeMin, JSONObject labels) {
        i.putExtra("kind", kind);
        i.putExtra("title", title);
        i.putExtra("body", body);
        i.putExtra("muted", muted);
        i.putExtra("snoozeMin", snoozeMin);
        if (labels != null) {
            i.putExtra("lDrank", labels.optString("drank", "Drank"));
            i.putExtra("lSnooze", labels.optString("snooze", "Snooze"));
            i.putExtra("lDismiss", labels.optString("dismiss", "Dismiss"));
        }
    }

    /** Rings once after delayMs (the "Test ring" button). */
    public static void scheduleTest(Context c, long delayMs, boolean muted) {
        AlarmManager am = (AlarmManager) c.getSystemService(Context.ALARM_SERVICE);
        Intent i = baseIntent(c, TEST_ID);
        putCommon(i, "alarm", "Test alarm", "Your alarm is working!", muted, 10, null);
        PendingIntent pi = PendingIntent.getBroadcast(c, TEST_ID, i, piFlags());
        am.setAlarmClock(new AlarmManager.AlarmClockInfo(System.currentTimeMillis() + delayMs, showIntent(c)), pi);
    }

    /** Rings again after the user pressed Snooze on a notification. */
    public static void scheduleSnooze(Context c, Intent from, int mins) {
        AlarmManager am = (AlarmManager) c.getSystemService(Context.ALARM_SERVICE);
        Intent i = baseIntent(c, SNOOZE_ID);
        i.putExtras(from.getExtras() == null ? new android.os.Bundle() : from.getExtras());
        i.setAction(ACTION_FIRE);
        PendingIntent pi = PendingIntent.getBroadcast(c, SNOOZE_ID, i, piFlags());
        am.setAlarmClock(new AlarmManager.AlarmClockInfo(System.currentTimeMillis() + mins * 60000L, showIntent(c)), pi);
    }

    static long nextTrigger(JSONObject item) throws Exception {
        long now = System.currentTimeMillis();
        if (item.has("at")) {
            long at = item.getLong("at");
            return at > now + 300 ? at : -1;
        }
        int weekday = item.optInt("weekday", 0);
        for (int d = 0; d < 8; d++) {
            Calendar cal = Calendar.getInstance();
            cal.add(Calendar.DAY_OF_YEAR, d);
            cal.set(Calendar.HOUR_OF_DAY, item.getInt("hour"));
            cal.set(Calendar.MINUTE, item.getInt("minute"));
            cal.set(Calendar.SECOND, 0);
            cal.set(Calendar.MILLISECOND, 0);
            if (cal.getTimeInMillis() <= now + 2000) continue;
            if (weekday > 0 && cal.get(Calendar.DAY_OF_WEEK) != weekday) continue;
            return cal.getTimeInMillis();
        }
        return -1;
    }

    static void scheduleAll(Context c, String spec) {
        try {
            AlarmManager am = (AlarmManager) c.getSystemService(Context.ALARM_SERVICE);
            JSONObject root = new JSONObject(spec);
            boolean muted = root.optBoolean("muted", false);
            int snoozeMin = root.optInt("snoozeMin", 10);
            JSONObject labels = root.optJSONObject("labels");
            JSONArray items = root.optJSONArray("items");
            if (items == null) return;
            PendingIntent show = showIntent(c);
            for (int k = 0; k < items.length(); k++) {
                JSONObject item = items.getJSONObject(k);
                long trigger = nextTrigger(item);
                if (trigger <= 0) continue;
                int id = item.getInt("id");
                Intent i = baseIntent(c, id);
                putCommon(i, item.optString("kind", "alarm"), item.optString("title", "Alarm"),
                        item.optString("body", ""), muted, snoozeMin, labels);
                PendingIntent pi = PendingIntent.getBroadcast(c, id, i, piFlags());
                am.setAlarmClock(new AlarmManager.AlarmClockInfo(trigger, show), pi);
            }
        } catch (Exception ignored) {
        }
    }
}
""")

java('AlarmReceiver', r"""package __PKG__;

import android.app.NotificationManager;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.os.Build;
import android.os.PowerManager;
import android.util.Log;

/** Fires at alarm time, and handles the Drank / Snooze buttons on notifications. */
public class AlarmReceiver extends BroadcastReceiver {
    private static final String TAG = "AquaFlowAlarm";

    @Override
    public void onReceive(Context context, Intent intent) {
        String action = intent.getAction();

        if (AlarmScheduler.ACTION_DRANK.equals(action)) {
            BaseWidget.addWater(context, 250);
            BaseWidget.updateAll(context);
            cancelNotifications(context);
            return;
        }
        if (AlarmScheduler.ACTION_SNOOZE.equals(action)) {
            cancelNotifications(context);
            AlarmScheduler.scheduleSnooze(context, intent, Math.max(1, intent.getIntExtra("snoozeMin", 10)));
            return;
        }

        try {
            PowerManager pm = (PowerManager) context.getSystemService(Context.POWER_SERVICE);
            PowerManager.WakeLock wl = pm.newWakeLock(PowerManager.PARTIAL_WAKE_LOCK, "aquaflow:receiver");
            wl.acquire(20000L);
        } catch (Exception e) {
            Log.e(TAG, "wake lock failed", e);
        }

        String kind = intent.getStringExtra("kind");
        if ("reminder".equals(kind)) {
            AlarmService.postReminder(context, intent);
        } else {
            try {
                Intent svc = new Intent(context, AlarmService.class);
                svc.putExtras(intent.getExtras());
                if (Build.VERSION.SDK_INT >= 26) {
                    context.startForegroundService(svc);
                } else {
                    context.startService(svc);
                }
            } catch (Exception e) {
                Log.e(TAG, "service start failed, using notification fallback", e);
                AlarmService.postFallback(context, intent);
            }
        }
        try {
            AlarmScheduler.rescheduleFromPrefs(context);
        } catch (Exception e) {
            Log.e(TAG, "reschedule failed", e);
        }
    }

    static void cancelNotifications(Context c) {
        try {
            NotificationManager nm = (NotificationManager) c.getSystemService(Context.NOTIFICATION_SERVICE);
            nm.cancel(AlarmService.REMINDER_NOTIF);
            nm.cancel(AlarmService.NOTIF_ID + 1);
            c.stopService(new Intent(c, AlarmService.class));
        } catch (Exception ignored) {
        }
    }
}
""")

java('BootReceiver', r"""package __PKG__;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;

/** Re-registers alarms after a reboot or an app update. */
public class BootReceiver extends BroadcastReceiver {
    @Override
    public void onReceive(Context context, Intent intent) {
        AlarmScheduler.rescheduleFromPrefs(context);
    }
}
""")

java('AlarmService', r"""package __PKG__;

import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.app.Service;
import android.content.Context;
import android.content.Intent;
import android.content.pm.ServiceInfo;
import android.media.AudioAttributes;
import android.media.AudioManager;
import android.media.MediaPlayer;
import android.net.Uri;
import android.os.Build;
import android.os.Handler;
import android.os.IBinder;
import android.os.Looper;
import android.os.PowerManager;
import android.os.VibrationEffect;
import android.os.Vibrator;
import android.util.Log;

import androidx.core.app.NotificationCompat;

/** Rings alarms and the timer (looping sound + vibration + full-screen notification) until dismissed. Also posts water-reminder notifications. */
public class AlarmService extends Service {
    static final String ACTION_STOP = "__PKG__.ALARM_STOP";
    static final String CHANNEL_ID = "aqua_alarm_ring";
    static final String FALLBACK_CHANNEL = "aqua_alarm_alert";
    static final String REMIND_CHANNEL = "aqua_reminder";
    static final String QUIET_CHANNEL = "aqua_reminder_quiet";
    static final int NOTIF_ID = 4242;
    static final int REMINDER_NOTIF = 5151;
    static final long MAX_RING_MS = 5 * 60 * 1000L;

    /** What is ringing right now (read by the app when it opens). */
    static volatile String ringKind = null, ringTitle = null, ringBody = null;

    private MediaPlayer player;
    private Vibrator vibrator;
    private PowerManager.WakeLock wakeLock;
    private final Handler handler = new Handler(Looper.getMainLooper());
    private final Runnable autoStop = new Runnable() {
        @Override
        public void run() {
            stopSelf();
        }
    };

    @Override
    public IBinder onBind(Intent intent) {
        return null;
    }

    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {
        if (intent != null && ACTION_STOP.equals(intent.getAction())) {
            stopSelf();
            return START_NOT_STICKY;
        }
        String title = intent != null ? intent.getStringExtra("title") : null;
        String body = intent != null ? intent.getStringExtra("body") : null;
        boolean muted = intent != null && intent.getBooleanExtra("muted", false);
        if (title == null || title.length() == 0) title = "Alarm";
        if (body == null) body = "";
        ringKind = intent != null ? intent.getStringExtra("kind") : "alarm";
        ringTitle = title;
        ringBody = body;

        createChannels(this);
        Notification notification = buildNotification(intent, title, body);
        boolean foreground = false;
        try {
            if (Build.VERSION.SDK_INT >= 29) {
                startForeground(NOTIF_ID, notification, ServiceInfo.FOREGROUND_SERVICE_TYPE_MEDIA_PLAYBACK);
            } else {
                startForeground(NOTIF_ID, notification);
            }
            foreground = true;
        } catch (Exception e) {
            Log.e("AquaFlowAlarm", "startForeground(type) failed", e);
        }
        if (!foreground) {
            try {
                startForeground(NOTIF_ID, notification);
                foreground = true;
            } catch (Exception e) {
                Log.e("AquaFlowAlarm", "startForeground failed", e);
            }
        }
        if (!foreground) {
            postFallback(this, intent);
            stopSelf();
            return START_NOT_STICKY;
        }

        stopRinging();
        startRinging(muted);
        handler.removeCallbacks(autoStop);
        handler.postDelayed(autoStop, MAX_RING_MS);
        return START_NOT_STICKY;
    }

    static Uri raw(Context c, int id) {
        return Uri.parse("android.resource://" + c.getPackageName() + "/" + id);
    }

    static void createChannels(Context c) {
        if (Build.VERSION.SDK_INT < 26) return;
        NotificationManager nm = (NotificationManager) c.getSystemService(Context.NOTIFICATION_SERVICE);
        if (nm.getNotificationChannel(CHANNEL_ID) == null) {
            NotificationChannel ch = new NotificationChannel(CHANNEL_ID, "Ringing alarms", NotificationManager.IMPORTANCE_HIGH);
            ch.setDescription("Shown while an alarm or timer is ringing");
            ch.setSound(null, null);
            ch.enableVibration(false);
            ch.setLockscreenVisibility(Notification.VISIBILITY_PUBLIC);
            nm.createNotificationChannel(ch);
        }
        if (nm.getNotificationChannel(REMIND_CHANNEL) == null) {
            NotificationChannel ch = new NotificationChannel(REMIND_CHANNEL, "Water reminders", NotificationManager.IMPORTANCE_HIGH);
            AudioAttributes aa = new AudioAttributes.Builder()
                    .setUsage(AudioAttributes.USAGE_NOTIFICATION)
                    .setContentType(AudioAttributes.CONTENT_TYPE_SONIFICATION)
                    .build();
            ch.setSound(raw(c, R.raw.aqua_chime), aa);
            ch.enableVibration(true);
            ch.setVibrationPattern(new long[]{0, 300, 150, 300});
            ch.setLockscreenVisibility(Notification.VISIBILITY_PUBLIC);
            nm.createNotificationChannel(ch);
        }
        if (nm.getNotificationChannel(QUIET_CHANNEL) == null) {
            NotificationChannel ch = new NotificationChannel(QUIET_CHANNEL, "Water reminders (silent)", NotificationManager.IMPORTANCE_DEFAULT);
            ch.setSound(null, null);
            ch.enableVibration(false);
            nm.createNotificationChannel(ch);
        }
        if (nm.getNotificationChannel(FALLBACK_CHANNEL) == null) {
            NotificationChannel ch = new NotificationChannel(FALLBACK_CHANNEL, "Alarm alerts", NotificationManager.IMPORTANCE_HIGH);
            AudioAttributes aa = new AudioAttributes.Builder()
                    .setUsage(AudioAttributes.USAGE_ALARM)
                    .setContentType(AudioAttributes.CONTENT_TYPE_SONIFICATION)
                    .build();
            ch.setSound(raw(c, R.raw.alarm_sound), aa);
            ch.enableVibration(true);
            ch.setVibrationPattern(new long[]{0, 600, 400, 600, 400, 600});
            ch.setLockscreenVisibility(Notification.VISIBILITY_PUBLIC);
            nm.createNotificationChannel(ch);
        }
    }

    static PendingIntent openApp(Context c, int req) {
        Intent open = c.getPackageManager().getLaunchIntentForPackage(c.getPackageName());
        return PendingIntent.getActivity(c, req, open, PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE);
    }

    static PendingIntent actionIntent(Context c, String action, Intent from, int req) {
        Intent i = new Intent(c, AlarmReceiver.class);
        i.setAction(action);
        i.setData(Uri.parse("aquaalarm://action/" + action.hashCode()));
        if (from != null && from.getExtras() != null) i.putExtras(from.getExtras());
        return PendingIntent.getBroadcast(c, req, i, PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE);
    }

    static String extra(Intent i, String k, String d) {
        String v = i == null ? null : i.getStringExtra(k);
        return v == null ? d : v;
    }

    /** Water reminder: chime notification with Drank / Snooze buttons. */
    static void postReminder(Context c, Intent from) {
        try {
            createChannels(c);
            boolean muted = from.getBooleanExtra("muted", false);
            NotificationManager nm = (NotificationManager) c.getSystemService(Context.NOTIFICATION_SERVICE);
            NotificationCompat.Builder b = new NotificationCompat.Builder(c, muted ? QUIET_CHANNEL : REMIND_CHANNEL)
                    .setSmallIcon(R.drawable.ic_stat_aqua)
                    .setColor(0xFF00F2FE)
                    .setContentTitle(extra(from, "title", "Water time"))
                    .setContentText(extra(from, "body", ""))
                    .setCategory(NotificationCompat.CATEGORY_REMINDER)
                    .setPriority(NotificationCompat.PRIORITY_HIGH)
                    .setVisibility(NotificationCompat.VISIBILITY_PUBLIC)
                    .setAutoCancel(true)
                    .setContentIntent(openApp(c, 6))
                    .addAction(0, extra(from, "lDrank", "Drank"), actionIntent(c, AlarmScheduler.ACTION_DRANK, from, 7))
                    .addAction(0, extra(from, "lSnooze", "Snooze"), actionIntent(c, AlarmScheduler.ACTION_SNOOZE, from, 8));
            if (Build.VERSION.SDK_INT < 26) {
                if (!muted) b.setSound(raw(c, R.raw.aqua_chime), AudioManager.STREAM_NOTIFICATION);
                b.setVibrate(new long[]{0, 300, 150, 300});
            }
            nm.notify(REMINDER_NOTIF, b.build());
        } catch (Exception e) {
            Log.e("AquaFlowAlarm", "reminder failed", e);
        }
    }

    /** Loud alarm notification used only if the ringing service cannot be started on this phone. */
    static void postFallback(Context c, Intent from) {
        try {
            createChannels(c);
            boolean muted = from != null && from.getBooleanExtra("muted", false);
            NotificationManager nm = (NotificationManager) c.getSystemService(Context.NOTIFICATION_SERVICE);
            PendingIntent pi = openApp(c, 5);
            NotificationCompat.Builder b = new NotificationCompat.Builder(c, FALLBACK_CHANNEL)
                    .setSmallIcon(R.drawable.ic_stat_aqua)
                    .setContentTitle(extra(from, "title", "Alarm"))
                    .setContentText(extra(from, "body", ""))
                    .setCategory(NotificationCompat.CATEGORY_ALARM)
                    .setPriority(NotificationCompat.PRIORITY_MAX)
                    .setVisibility(NotificationCompat.VISIBILITY_PUBLIC)
                    .setAutoCancel(true)
                    .setFullScreenIntent(pi, true)
                    .setContentIntent(pi);
            if (Build.VERSION.SDK_INT < 26) {
                if (!muted) b.setSound(raw(c, R.raw.alarm_sound), AudioManager.STREAM_ALARM);
                b.setVibrate(new long[]{0, 600, 400, 600, 400, 600});
            }
            nm.notify(NOTIF_ID + 1, b.build());
        } catch (Exception e) {
            Log.e("AquaFlowAlarm", "fallback notification failed", e);
        }
    }

    private Notification buildNotification(Intent from, String title, String body) {
        int piFlags = PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE;
        Intent stop = new Intent(this, AlarmService.class);
        stop.setAction(ACTION_STOP);
        PendingIntent stopPi = PendingIntent.getService(this, 4, stop, piFlags);

        NotificationCompat.Builder b = new NotificationCompat.Builder(this, CHANNEL_ID)
                .setSmallIcon(R.drawable.ic_stat_aqua)
                .setContentTitle(title)
                .setContentText(body)
                .setCategory(NotificationCompat.CATEGORY_ALARM)
                .setPriority(NotificationCompat.PRIORITY_MAX)
                .setVisibility(NotificationCompat.VISIBILITY_PUBLIC)
                .setOngoing(true)
                .setAutoCancel(false)
                .setFullScreenIntent(openApp(this, 2), true)
                .setContentIntent(openApp(this, 3))
                .addAction(0, extra(from, "lSnooze", "Snooze"), actionIntent(this, AlarmScheduler.ACTION_SNOOZE, from, 9))
                .addAction(0, extra(from, "lDismiss", "Dismiss"), stopPi);
        return b.build();
    }

    @SuppressWarnings("deprecation")
    private void startRinging(boolean muted) {
        try {
            PowerManager pm = (PowerManager) getSystemService(Context.POWER_SERVICE);
            wakeLock = pm.newWakeLock(PowerManager.PARTIAL_WAKE_LOCK, "aquaflow:alarm");
            wakeLock.acquire(MAX_RING_MS);
        } catch (Exception ignored) {
        }

        if (!muted) {
            try {
                AudioAttributes attrs = new AudioAttributes.Builder()
                        .setUsage(AudioAttributes.USAGE_ALARM)
                        .setContentType(AudioAttributes.CONTENT_TYPE_SONIFICATION)
                        .build();
                player = MediaPlayer.create(this, R.raw.alarm_sound, attrs, AudioManager.AUDIO_SESSION_ID_GENERATE);
                if (player != null) {
                    player.setLooping(true);
                    player.start();
                }
            } catch (Exception e) {
                player = null;
            }
        }

        try {
            vibrator = (Vibrator) getSystemService(Context.VIBRATOR_SERVICE);
            if (vibrator != null) {
                long[] pattern = new long[]{0, 600, 400};
                if (Build.VERSION.SDK_INT >= 26) {
                    vibrator.vibrate(VibrationEffect.createWaveform(pattern, 0));
                } else {
                    vibrator.vibrate(pattern, 0);
                }
            }
        } catch (Exception ignored) {
        }
    }

    private void stopRinging() {
        try {
            if (player != null) {
                player.stop();
                player.release();
            }
        } catch (Exception ignored) {
        }
        player = null;
        try {
            if (vibrator != null) vibrator.cancel();
        } catch (Exception ignored) {
        }
        try {
            if (wakeLock != null && wakeLock.isHeld()) wakeLock.release();
        } catch (Exception ignored) {
        }
        wakeLock = null;
    }

    @SuppressWarnings("deprecation")
    @Override
    public void onDestroy() {
        handler.removeCallbacks(autoStop);
        stopRinging();
        ringKind = null; ringTitle = null; ringBody = null;
        stopForeground(true);
        super.onDestroy();
    }
}
""")

java('AlarmRingerPlugin', r"""package __PKG__;

import android.app.Activity;
import android.app.AlarmManager;
import android.app.NotificationManager;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.net.Uri;
import android.os.Build;
import android.os.PowerManager;
import android.provider.Settings;

import androidx.core.app.NotificationManagerCompat;

import com.getcapacitor.JSArray;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

/** JS bridge: AlarmRinger.sync / stop / status / testRing / openSettings / getRing / setWidgetData / consumePending. */
@CapacitorPlugin(name = "AlarmRinger")
public class AlarmRingerPlugin extends Plugin {

    @PluginMethod
    public void sync(PluginCall call) {
        try {
            JSObject data = call.getData();
            AlarmScheduler.apply(getContext(), data.toString());
            call.resolve();
        } catch (Exception e) {
            call.reject("sync failed: " + e.getMessage());
        }
    }

    /** Reports what the phone currently allows. */
    @PluginMethod
    public void status(PluginCall call) {
        try {
            Context c = getContext();
            JSObject o = new JSObject();
            o.put("notifications", NotificationManagerCompat.from(c).areNotificationsEnabled());
            boolean battery = true;
            if (Build.VERSION.SDK_INT >= 23) {
                PowerManager pm = (PowerManager) c.getSystemService(Context.POWER_SERVICE);
                battery = pm.isIgnoringBatteryOptimizations(c.getPackageName());
            }
            o.put("battery", battery);
            boolean exact = true;
            if (Build.VERSION.SDK_INT >= 31) {
                AlarmManager am = (AlarmManager) c.getSystemService(Context.ALARM_SERVICE);
                exact = am.canScheduleExactAlarms();
            }
            o.put("exact", exact);
            call.resolve(o);
        } catch (Exception e) {
            call.reject("status failed: " + e.getMessage());
        }
    }

    /** Rings once after a short delay so the user can lock the phone and verify background ringing. */
    @PluginMethod
    public void testRing(PluginCall call) {
        try {
            int delay = call.getInt("delay", 10);
            boolean muted = Boolean.TRUE.equals(call.getBoolean("muted", false));
            AlarmScheduler.scheduleTest(getContext(), delay * 1000L, muted);
            call.resolve();
        } catch (Exception e) {
            call.reject("test failed: " + e.getMessage());
        }
    }

    /** Is an alarm / timer ringing right now? (the app shows its pop-up for it) */
    @PluginMethod
    public void getRing(PluginCall call) {
        JSObject o = new JSObject();
        String kind = AlarmService.ringKind;
        o.put("ringing", kind != null);
        if (kind != null) {
            o.put("kind", kind);
            o.put("title", AlarmService.ringTitle);
            o.put("body", AlarmService.ringBody);
        }
        call.resolve(o);
    }

    /** Opens the phone settings page that controls background ringing: notifications, battery, autostart. */
    @PluginMethod
    public void openSettings(PluginCall call) {
        String type = call.getString("type", "app");
        Activity a = getActivity();
        String pkg = getContext().getPackageName();
        boolean done = false;
        try {
            if ("notifications".equals(type)) {
                Intent i;
                if (Build.VERSION.SDK_INT >= 26) {
                    i = new Intent(Settings.ACTION_APP_NOTIFICATION_SETTINGS);
                    i.putExtra(Settings.EXTRA_APP_PACKAGE, pkg);
                } else {
                    i = new Intent(Settings.ACTION_APPLICATION_DETAILS_SETTINGS);
                    i.setData(Uri.parse("package:" + pkg));
                }
                a.startActivity(i);
                done = true;
            } else if ("battery".equals(type)) {
                if (Build.VERSION.SDK_INT >= 23) {
                    try {
                        Intent i = new Intent(Settings.ACTION_REQUEST_IGNORE_BATTERY_OPTIMIZATIONS);
                        i.setData(Uri.parse("package:" + pkg));
                        a.startActivity(i);
                        done = true;
                    } catch (Exception e) {
                        a.startActivity(new Intent(Settings.ACTION_IGNORE_BATTERY_OPTIMIZATION_SETTINGS));
                        done = true;
                    }
                }
            } else if ("autostart".equals(type)) {
                done = openAutostart(a, pkg);
            }
            if (!done) {
                Intent i = new Intent(Settings.ACTION_APPLICATION_DETAILS_SETTINGS);
                i.setData(Uri.parse("package:" + pkg));
                a.startActivity(i);
            }
            call.resolve();
        } catch (Exception e) {
            call.reject("open failed: " + e.getMessage());
        }
    }

    private boolean openAutostart(Activity a, String pkg) {
        String[][] targets = new String[][]{
                {"com.miui.securitycenter", "com.miui.permcenter.autostart.AutoStartManagementActivity"},
                {"com.miui.powerkeeper", "com.miui.powerkeeper.ui.HiddenAppsConfigActivity"},
                {"com.huawei.systemmanager", "com.huawei.systemmanager.startupmgr.ui.StartupNormalAppListActivity"},
                {"com.huawei.systemmanager", "com.huawei.systemmanager.optimize.process.ProtectActivity"},
                {"com.coloros.safecenter", "com.coloros.safecenter.permission.startup.StartupAppListActivity"},
                {"com.oppo.safe", "com.oppo.safe.permission.startup.StartupAppListActivity"},
                {"com.coloros.oppoguardelf", "com.coloros.powermanager.fuelgaue.PowerUsageModelActivity"},
                {"com.vivo.permissionmanager", "com.vivo.permissionmanager.activity.BgStartUpManagerActivity"},
                {"com.iqoo.secure", "com.iqoo.secure.ui.phoneoptimize.AddWhiteListActivity"},
                {"com.samsung.android.lool", "com.samsung.android.sm.ui.battery.BatteryActivity"},
                {"com.transsion.phonemaster", "com.cyin.himgr.autostart.AutoStartActivity"},
                {"com.asus.mobilemanager", "com.asus.mobilemanager.autostart.AutoStartActivity"}
        };
        for (String[] t : targets) {
            try {
                Intent i = new Intent();
                i.setComponent(new ComponentName(t[0], t[1]));
                i.putExtra("package_name", pkg);
                i.putExtra("package_label", "AquaFlow");
                a.startActivity(i);
                return true;
            } catch (Exception ignored) {
            }
        }
        return false;
    }

    /** Silences a ringing alarm / timer and clears the water-reminder notification. */
    @PluginMethod
    public void stop(PluginCall call) {
        try {
            Context c = getContext();
            c.stopService(new Intent(c, AlarmService.class));
            NotificationManager nm = (NotificationManager) c.getSystemService(Context.NOTIFICATION_SERVICE);
            nm.cancel(AlarmService.REMINDER_NOTIF);
            nm.cancel(AlarmService.NOTIF_ID + 1);
            call.resolve();
        } catch (Exception e) {
            call.reject("stop failed: " + e.getMessage());
        }
    }

    /* ---------------- home-screen widgets ---------------- */

    @PluginMethod
    public void setWidgetData(PluginCall call) {
        Context c = getContext();
        SharedPreferences.Editor e = c.getSharedPreferences(BaseWidget.PREFS, Context.MODE_PRIVATE).edit();
        Integer intake = call.getInt("intake", 0);
        Integer goal = call.getInt("goal", 2500);
        Double next = call.getDouble("nextAt", 0.0);
        e.putString("date", call.getString("date", ""));
        e.putInt("intake", intake == null ? 0 : intake.intValue());
        e.putInt("goal", goal == null ? 2500 : goal.intValue());
        e.putLong("nextAt", next == null ? 0L : next.longValue());
        e.apply();
        BaseWidget.updateAll(c);
        call.resolve();
    }

    /** Water added from a widget button or a notification's Drank button while the app was closed. */
    @PluginMethod
    public void consumePending(PluginCall call) {
        Context c = getContext();
        SharedPreferences p = c.getSharedPreferences(BaseWidget.PREFS, Context.MODE_PRIVATE);
        String raw = p.getString("pending", "");
        p.edit().putString("pending", "").apply();
        JSArray entries = new JSArray();
        int total = 0;
        if (raw != null && raw.length() > 0) {
            for (String part : raw.split(";")) {
                if (part.length() == 0) continue;
                String[] kv = part.split(":");
                if (kv.length != 2) continue;
                try {
                    JSObject o = new JSObject();
                    o.put("t", Long.parseLong(kv[0]));
                    int ml = Integer.parseInt(kv[1]);
                    o.put("ml", ml);
                    entries.put(o);
                    total += ml;
                } catch (NumberFormatException ex) {
                    // ignore malformed entry
                }
            }
        }
        JSObject ret = new JSObject();
        ret.put("ml", total);
        ret.put("entries", entries);
        call.resolve(ret);
    }
}
""")

java('MainActivity', r"""package __PKG__;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        registerPlugin(AlarmRingerPlugin.class);
        super.onCreate(savedInstanceState);
    }
}
""")

print('native.py: done')
