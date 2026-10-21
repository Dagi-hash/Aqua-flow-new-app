/* English / Amharic strings */
(function () {
  var AF = (window.AF = window.AF || {});

  AF.STR = {
    en: {
      nav_home: 'Home', nav_clock: 'Clock', nav_alarms: 'Alarms', nav_timer: 'Timer', nav_schedule: 'Schedule',
      streak: '{n} Days', streak1: '{n} Day',
      ml: 'ml', goal: 'Goal', of: 'of',
      small: 'Small glass', standard: 'Glass', large: 'Bottle', custom: 'Custom',
      drank: 'Drank {n} ml', snooze: 'Snooze', dismiss: 'Dismiss', ok: 'OK',
      water_time: 'Time to drink water 💧', water_body: 'Have a glass of water to stay on track.',
      pace_ok: 'On track — next {n} ml in {t}', pace_behind: 'Behind schedule — drink a glass now',
      pace_goal: 'Daily goal reached! 🎉', pace_quiet: 'Quiet hours — see you in the morning',
      pace_off: 'Reminders are off', pace_first: 'Next {n} ml at {t}',
      behind_badge: '{n} behind',
      today_sips: "Today's sips", no_sips: 'Nothing logged yet',
      h_m: '{h}h {m}m', m_only: '{m} min', s_only: '{s}s',
      added: '+{n} ml added', undo: 'Undo', removed: 'Removed',
      current_time: 'CURRENT TIME', flip: 'Flip', digital: 'Digital', analog: 'Analog',
      h24: '24H', h12: '12H', sound: 'Sound',
      no_alarms: 'No active alarms', next_alarm: 'Next alarm {t}', next_glass: 'Next glass in',
      am: 'AM', pm: 'PM',
      alarms: 'Alarms', add_alarm: 'Add alarm', edit_alarm: 'Edit alarm', alarm_default: 'Alarm',
      label: 'Label', every_day: 'Every day', delete: 'Delete', save: 'Save', cancel: 'Cancel',
      alarm_empty: 'No alarms yet. Add one and it will ring even when the app is closed.',
      alarm_ring: 'Alarm', alarm_set: 'Alarm set for {t}',
      timer: 'Timer', start: 'Start', pause: 'Pause', resume: 'Resume', reset: 'Reset',
      timer_done: 'Timer finished', timer_done_body: 'Your timer has reached zero.',
      custom_timer: 'Custom timer', hydration_timer: 'Hydration timer', no_reminder: 'No reminder scheduled',
      min5: '5 min', min10: '10 min', min15: '15 min', min30: '30 min', min45: '45 min',
      schedule: 'Hydration schedule', weekly: 'Weekly', monthly: 'Monthly', add_day: 'Add day',
      add_water: 'Add water', daily_target: 'Daily target', reminder: 'Reminder', add: 'Add',
      today: 'Today', reminders_n: '{n} reminders', reminder_1: '1 reminder',
      del_title: 'Delete day', del_logs: 'Delete only the water logs & reminders in this day (reset to 0 ml)',
      del_box: 'Delete and remove the whole day box from my schedule', del_confirm: 'Delete',
      del_hide: 'Delete and hide this date from my schedule',
      pick_day: 'Pick a day to add', no_days_left: 'All days are already in your schedule',
      week1: 'First Week', week2: 'Second Week', week3: 'Third Week', week4: 'Fourth Week',
      days_n: '{n} days', day_1: '1 day', no_days_week: 'No active days',
      tap_hint: 'Tap a day to add water, set a target or add a reminder',
      settings: 'Settings', weight: 'Body weight (kg)', daily_goal: 'Daily goal',
      auto_goal: 'Auto (weight × 35 ml)', wake_start: 'Wake-up time', wake_end: 'Bedtime',
      reminders: 'Water reminders', snooze_len: 'Snooze length', test_alarm: 'Test ring in 10 seconds',
      test_title: 'AquaFlow test', test_body: 'If you can hear this, alarms work with the app closed.',
      test_set: 'Test scheduled — lock your phone and wait 10 seconds',
      quiet_note: 'Quiet hours: no water reminders between bedtime and wake-up. Alarms still ring.',
      enter_amount: 'Enter amount', enter_time: 'Enter time', enter_duration: 'Enter duration', done: 'Done',
      invalid_time: 'Please enter a valid time', invalid_amount: 'Please enter an amount',
      perm_needed: 'Allow notifications so alarms can ring',
      lang_name: 'English', theme_dark: 'Dark mode', theme_light: 'Light mode',
      bg_title: 'Background ringing', bg_service: 'Alarm service', bg_notif: 'Notifications', bg_batt: 'Battery: Unrestricted', bg_auto: 'Autostart / background apps (Xiaomi, Oppo, Vivo, Huawei, Samsung)',
      bg_note: 'Press the test button, then lock the phone. If it does not ring, switch on every item above for this app.',
      glass_goal: 'Goal {n} ml', percent: '{n}%',
      snoozed: 'Snoozed for {n} min', dismissed: 'Dismissed', logged: 'Logged'
    },
    am: {
      nav_home: 'መነሻ', nav_clock: 'ሰዓት', nav_alarms: 'ማንቂያ', nav_timer: 'ቆጣሪ', nav_schedule: 'መርሐ ግብር',
      streak: '{n} ቀናት', streak1: '{n} ቀን',
      ml: 'ሚ.ሊ', goal: 'ግብ', of: 'ከ',
      small: 'ትንሽ ብርጭቆ', standard: 'ብርጭቆ', large: 'ጠርሙስ', custom: 'ሌላ መጠን',
      drank: '{n} ሚ.ሊ ጠጣሁ', snooze: 'አሸልብ', dismiss: 'ዝጋ', ok: 'እሺ',
      water_time: 'ውሃ የሚጠጡበት ጊዜ ነው 💧', water_body: 'ግብዎ ላይ ለመድረስ አንድ ብርጭቆ ውሃ ይጠጡ።',
      pace_ok: 'በጥሩ ሁኔታ ላይ ነዎት — ቀጣዩ {n} ሚ.ሊ በ{t} ውስጥ', pace_behind: 'ከዕቅድ ወደኋላ ቀርተዋል — አሁን አንድ ብርጭቆ ይጠጡ',
      pace_goal: 'የዕለቱን ግብ አሳክተዋል! 🎉', pace_quiet: 'የዕረፍት ሰዓት — ጠዋት እንገናኛለን',
      pace_off: 'ማስታወሻዎች ጠፍተዋል', pace_first: 'ቀጣዩ {n} ሚ.ሊ በ{t}',
      behind_badge: '{n} ቀርቷል',
      today_sips: 'የዛሬ መጠጦች', no_sips: 'ገና ምንም አልተመዘገበም',
      h_m: '{h}ሰ {m}ደ', m_only: '{m} ደቂቃ', s_only: '{s} ሰከንድ',
      added: '+{n} ሚ.ሊ ተጨምሯል', undo: 'ቀልብስ', removed: 'ተወግዷል',
      current_time: 'አሁን ሰዓት', flip: 'ፍሊፕ', digital: 'ዲጂታል', analog: 'አናሎግ',
      h24: '24ሰ', h12: '12ሰ', sound: 'ድምፅ',
      no_alarms: 'ንቁ ማንቂያ የለም', next_alarm: 'ቀጣይ ማንቂያ {t}', next_glass: 'ቀጣዩ ብርጭቆ በ',
      am: 'ጠዋት', pm: 'ከሰዓት',
      alarms: 'ማንቂያዎች', add_alarm: 'ማንቂያ ጨምር', edit_alarm: 'ማንቂያ አርም', alarm_default: 'ማንቂያ',
      label: 'መለያ', every_day: 'በየቀኑ', delete: 'ሰርዝ', save: 'አስቀምጥ', cancel: 'ተው',
      alarm_empty: 'ገና ማንቂያ የለም። አንድ ጨምሩ፤ መተግበሪያው ተዘግቶም ይደውላል።',
      alarm_ring: 'ማንቂያ', alarm_set: 'ማንቂያ ለ{t} ተዘጋጅቷል',
      timer: 'ቆጣሪ', start: 'ጀምር', pause: 'ለአፍታ አቁም', resume: 'ቀጥል', reset: 'ዳግም አስጀምር',
      timer_done: 'ቆጣሪው ተጠናቋል', timer_done_body: 'ቆጣሪዎ ዜሮ ደርሷል።',
      custom_timer: 'ብጁ ቆጣሪ', hydration_timer: 'የውሃ ቆጣሪ', no_reminder: 'የተዘጋጀ ማስታወሻ የለም',
      min5: '5 ደቂቃ', min10: '10 ደቂቃ', min15: '15 ደቂቃ', min30: '30 ደቂቃ', min45: '45 ደቂቃ',
      schedule: 'የውሃ መርሐ ግብር', weekly: 'ሳምንታዊ', monthly: 'ወርሃዊ', add_day: 'ቀን ጨምር',
      add_water: 'ውሃ ጨምር', daily_target: 'የዕለት ግብ', reminder: 'ማስታወሻ', add: 'ጨምር',
      today: 'ዛሬ', reminders_n: '{n} ማስታወሻዎች', reminder_1: '1 ማስታወሻ',
      del_title: 'ቀን ሰርዝ', del_logs: 'በዚህ ቀን ያሉትን የውሃ መዝገቦች እና ማስታወሻዎች ብቻ ሰርዝ (ወደ 0 ሚ.ሊ ይመለሳል)',
      del_box: 'ቀኑን ከመርሐ ግብሬ ሙሉ በሙሉ ሰርዝ እና አስወግድ', del_confirm: 'ሰርዝ',
      del_hide: 'ሰርዝ እና ይህን ቀን ከመርሐ ግብሬ ደብቅ',
      pick_day: 'ለመጨመር ቀን ይምረጡ', no_days_left: 'ሁሉም ቀናት አስቀድመው በመርሐ ግብርዎ ውስጥ አሉ',
      week1: 'የመጀመሪያ ሳምንት', week2: 'ሁለተኛ ሳምንት', week3: 'ሦስተኛ ሳምንት', week4: 'አራተኛ ሳምንት',
      days_n: '{n} ቀናት', day_1: '1 ቀን', no_days_week: 'ንቁ ቀን የለም',
      tap_hint: 'ውሃ ለመጨመር፣ ግብ ለማስቀመጥ ወይም ማስታወሻ ለመጨመር ቀኑን ይንኩ',
      settings: 'ቅንብሮች', weight: 'የሰውነት ክብደት (ኪ.ግ)', daily_goal: 'የዕለት ግብ',
      auto_goal: 'ራስ-ሰር (ክብደት × 35 ሚ.ሊ)', wake_start: 'የመነሳት ሰዓት', wake_end: 'የመኝታ ሰዓት',
      reminders: 'የውሃ ማስታወሻዎች', snooze_len: 'የማሸለቢያ ጊዜ', test_alarm: 'ደውል በ10 ሰከንድ ሞክር',
      test_title: 'የአኳፍሎው ሙከራ', test_body: 'ይህን ከሰሙ፣ መተግበሪያው ተዘግቶም ማንቂያ ይሰራል።',
      test_set: 'ሙከራ ተዘጋጅቷል — ስልክዎን ቆልፈው 10 ሰከንድ ይጠብቁ',
      quiet_note: 'የዕረፍት ሰዓት፦ ከመኝታ እስከ መነሳት ድረስ የውሃ ማስታወሻ የለም። ማንቂያዎች አሁንም ይደውላሉ።',
      enter_amount: 'መጠን ያስገቡ', enter_time: 'ሰዓት ያስገቡ', enter_duration: 'የጊዜ ርዝመት ያስገቡ', done: 'ተከናውኗል',
      invalid_time: 'እባክዎ ትክክለኛ ሰዓት ያስገቡ', invalid_amount: 'እባክዎ መጠን ያስገቡ',
      perm_needed: 'ማንቂያዎች እንዲደውሉ ማሳወቂያዎችን ይፍቀዱ',
      lang_name: 'አማርኛ', theme_dark: 'ጨለማ ገጽታ', theme_light: 'ብሩህ ገጽታ',
      bg_title: 'በጀርባ መደወል', bg_service: 'የማንቂያ አገልግሎት', bg_notif: 'ማሳወቂያዎች', bg_batt: 'ባትሪ፦ ያልተገደበ', bg_auto: 'ራስ-ጀምር / የጀርባ መተግበሪያዎች (ሻዮሚ፣ ኦፖ፣ ቪቮ፣ ሁዋዌ፣ ሳምሰንግ)',
      bg_note: 'የሙከራ ቁልፉን ይጫኑ፣ ከዚያ ስልኩን ይቆልፉ። ካልደወለ ከላይ ያሉትን ሁሉ ለዚህ መተግበሪያ ያብሩ።',
      glass_goal: 'ግብ {n} ሚ.ሊ', percent: '{n}%',
      snoozed: 'ለ{n} ደቂቃ ተሸልቧል', dismissed: 'ተዘግቷል', logged: 'ተመዝግቧል'
    }
  };

  AF.DAYS = {
    en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    enShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    am: ['እሁድ', 'ሰኞ', 'ማክሰኞ', 'ረቡዕ', 'ሐሙስ', 'ዓርብ', 'ቅዳሜ']
  };
  AF.MONTHS = {
    en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    enShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    am: ['መስከረም', 'ጥቅምት', 'ኅዳር', 'ታኅሣሥ', 'ጥር', 'የካቲት', 'መጋቢት', 'ሚያዝያ', 'ግንቦት', 'ሰኔ', 'ሐምሌ', 'ነሐሴ', 'ጳጉሜን']
  };
})();

/* Gregorian <-> Ethiopian (Amete Mihret) calendar conversion */
(function () {
  var AF = (window.AF = window.AF || {});
  var EPOCH = 1723856;

  function gregToJDN(y, m, d) {
    var a = Math.floor((14 - m) / 12);
    var yy = y + 4800 - a;
    var mm = m + 12 * a - 3;
    return d + Math.floor((153 * mm + 2) / 5) + 365 * yy + Math.floor(yy / 4) - Math.floor(yy / 100) + Math.floor(yy / 400) - 32045;
  }
  function jdnToGreg(jd) {
    var a = jd + 32044;
    var b = Math.floor((4 * a + 3) / 146097);
    var c = a - Math.floor((146097 * b) / 4);
    var d = Math.floor((4 * c + 3) / 1461);
    var e = c - Math.floor((1461 * d) / 4);
    var m = Math.floor((5 * e + 2) / 153);
    return {
      d: e - Math.floor((153 * m + 2) / 5) + 1,
      m: m + 3 - 12 * Math.floor(m / 10),
      y: 100 * b + d - 4800 + Math.floor(m / 10)
    };
  }
  function jdnToEth(jd) {
    var r = (jd - EPOCH) % 1461;
    var n = (r % 365) + 365 * Math.floor(r / 1460);
    return {
      y: 4 * Math.floor((jd - EPOCH) / 1461) + Math.floor(r / 365) - Math.floor(r / 1460),
      m: Math.floor(n / 30) + 1,
      d: (n % 30) + 1
    };
  }
  function ethToJDN(y, m, d) {
    return EPOCH + 365 + 365 * (y - 1) + Math.floor(y / 4) + 30 * m + d - 31;
  }

  AF.toEth = function (date) {
    return jdnToEth(gregToJDN(date.getFullYear(), date.getMonth() + 1, date.getDate()));
  };
  AF.ethToDate = function (y, m, d) {
    var g = jdnToGreg(ethToJDN(y, m, d));
    return new Date(g.y, g.m - 1, g.d, 12, 0, 0);
  };
  AF.ethMonthLen = function (y, m) {
    if (m < 13) return 30;
    return y % 4 === 3 ? 6 : 5;
  };
})();

/* AquaFlow core: state, dates, hydration maths, reminder planning */
(function () {
  var AF = (window.AF = window.AF || {});
  var KEY = 'aquaflow.v1';

  function defaults() {
    return {
      theme: 'dark', lang: 'en',
      weight: 70, goalAuto: true, goalMl: 2500,
      wakeStart: '08:00', wakeEnd: '22:00', remind: true, snoozeMin: 10,
      clockMode: 'flip', h24: false, sound: true,
      logs: {}, hidden: {},
      days: { 1: { target: null, rem: [] }, 2: { target: null, rem: [] }, 3: { target: null, rem: [] }, 4: { target: null, rem: [] }, 5: { target: null, rem: [] } },
      alarms: [], nidSeq: 1001,
      timer: { dur: 600, endsAt: null, left: null },
      snooze: null
    };
  }

  function load() {
    var s = defaults();
    try {
      var raw = localStorage.getItem(KEY);
      if (raw) {
        var p = JSON.parse(raw);
        for (var k in p) s[k] = p[k];
      }
    } catch (e) {}
    return s;
  }

  AF.S = load();
  AF.save = function () {
    try { localStorage.setItem(KEY, JSON.stringify(AF.S)); } catch (e) {}
  };

  /* ---------- i18n helpers ---------- */
  AF.t = function (key, p) {
    var tab = AF.STR[AF.S.lang] || AF.STR.en;
    var s = tab[key];
    if (s === undefined) s = AF.STR.en[key];
    if (s === undefined) s = key;
    if (p) for (var k in p) s = s.split('{' + k + '}').join(p[k]);
    return s;
  };
  AF.isAm = function () { return AF.S.lang === 'am'; };
  AF.n = function (x) { return Math.round(x).toLocaleString('en-US'); };
  AF.pad = function (x, n) { x = String(x); while (x.length < (n || 2)) x = '0' + x; return x; };

  /* ---------- dates ---------- */
  AF.iso = function (d) { return d.getFullYear() + '-' + AF.pad(d.getMonth() + 1) + '-' + AF.pad(d.getDate()); };
  AF.fromISO = function (s) { var p = s.split('-'); return new Date(+p[0], +p[1] - 1, +p[2], 12, 0, 0); };
  AF.addDays = function (d, n) { var x = new Date(d.getFullYear(), d.getMonth(), d.getDate() + n, 12, 0, 0); return x; };
  AF.today = function () { var d = new Date(); return new Date(d.getFullYear(), d.getMonth(), d.getDate(), 12, 0, 0); };
  AF.parseHM = function (s) { var p = s.split(':'); return (+p[0]) * 60 + (+p[1]); };
  AF.hm = function (min) { return AF.pad(Math.floor(min / 60) % 24) + ':' + AF.pad(min % 60); };
  AF.at = function (day, minutes) { return new Date(day.getFullYear(), day.getMonth(), day.getDate(), 0, minutes, 0, 0).getTime(); };

  AF.dayName = function (dow, short) {
    if (AF.isAm()) return AF.DAYS.am[dow];
    return short ? AF.DAYS.enShort[dow] : AF.DAYS.en[dow];
  };
  /* mode: 'short' => "Wed, Oct 21" ; 'long' => "WEDNESDAY, OCT 21, 2026" ; 'day' => "Oct 21" */
  AF.fmtDate = function (d, mode) {
    var dn;
    if (AF.isAm()) {
      var e = AF.toEth(d);
      dn = AF.DAYS.am[d.getDay()];
      if (mode === 'day') return AF.MONTHS.am[e.m - 1] + ' ' + e.d;
      if (mode === 'long') return dn + '፣ ' + AF.MONTHS.am[e.m - 1] + ' ' + e.d + ' ቀን ' + e.y + ' ዓ.ም';
      return dn + '፣ ' + AF.MONTHS.am[e.m - 1] + ' ' + e.d;
    }
    dn = AF.DAYS.en[d.getDay()];
    if (mode === 'day') return AF.MONTHS.enShort[d.getMonth()] + ' ' + d.getDate();
    if (mode === 'long') return dn.toUpperCase() + ', ' + AF.MONTHS.enShort[d.getMonth()].toUpperCase() + ' ' + d.getDate() + ', ' + d.getFullYear();
    return AF.DAYS.enShort[d.getDay()] + ', ' + AF.MONTHS.enShort[d.getMonth()] + ' ' + d.getDate();
  };
  /* "7:05 AM" / "07:05" ; hh,mm are 0-23 */
  AF.fmtTime = function (hh, mm) {
    if (AF.S.h24) return AF.pad(hh) + ':' + AF.pad(mm);
    var ap = hh >= 12 ? AF.t('pm') : AF.t('am');
    var h = hh % 12; if (h === 0) h = 12;
    return h + ':' + AF.pad(mm) + ' ' + ap;
  };
  AF.fmtTs = function (ts) { var d = new Date(ts); return AF.fmtTime(d.getHours(), d.getMinutes()); };
  AF.fmtDur = function (min) {
    min = Math.max(1, Math.round(min));
    if (min >= 60) return AF.t('h_m', { h: Math.floor(min / 60), m: min % 60 });
    return AF.t('m_only', { m: min });
  };

  /* ---------- water maths ---------- */
  AF.goal = function () {
    var S = AF.S;
    if (S.goalAuto) return Math.max(500, Math.round((S.weight * 35) / 50) * 50);
    return Math.max(250, S.goalMl);
  };
  AF.targetFor = function (date) {
    var d = AF.S.days[date.getDay()];
    return d && d.target ? d.target : AF.goal();
  };
  AF.entries = function (isoStr) { return AF.S.logs[isoStr] || []; };
  AF.sum = function (isoStr) {
    var a = AF.entries(isoStr), s = 0;
    for (var i = 0; i < a.length; i++) s += a[i].ml;
    return s;
  };
  AF.addWater = function (ml, date, ts) {
    var d = date || new Date();
    var key = AF.iso(d);
    if (!AF.S.logs[key]) AF.S.logs[key] = [];
    var entry = { t: ts || Date.now(), ml: ml };
    AF.S.logs[key].push(entry);
    AF.save();
    return { key: key, entry: entry };
  };
  AF.removeEntry = function (key, entry) {
    var a = AF.S.logs[key] || [];
    var i = a.indexOf(entry);
    if (i >= 0) a.splice(i, 1);
    if (!a.length) delete AF.S.logs[key];
    AF.save();
  };

  AF.streak = function () {
    var d = AF.today(), n = 0;
    var tk = AF.iso(d);
    if (AF.sum(tk) >= AF.targetFor(d)) n++;
    for (var i = 1; i < 400; i++) {
      var x = AF.addDays(d, -i);
      if (AF.sum(AF.iso(x)) >= AF.targetFor(x)) n++; else break;
    }
    return n;
  };

  var GLASS = 250;
  AF.GLASS = GLASS;

  /* Reminder interval in minutes, derived from goal and waking hours */
  AF.interval = function () {
    var G = AF.goal();
    var ws = AF.parseHM(AF.S.wakeStart), we = AF.parseHM(AF.S.wakeEnd);
    var span = Math.max(60, we - ws);
    var n = Math.max(1, Math.ceil(G / GLASS));
    return Math.max(30, Math.floor(span / n));
  };

  /* Times (ms) of upcoming hydration reminders: rest of today + next 3 days */
  AF.hydrationTimes = function (nowMs) {
    var S = AF.S;
    if (!S.remind) return [];
    var res = [];
    var now = new Date(nowMs);
    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 0, 0);
    var ws = AF.parseHM(S.wakeStart), we = AF.parseHM(S.wakeEnd);
    var iv = AF.interval();
    var G = AF.targetFor(today);
    var tKey = AF.iso(today);
    var remaining = Math.max(0, G - AF.sum(tKey));

    if (remaining > 0) {
      var ents = AF.entries(tKey);
      var last = ents.length ? ents[ents.length - 1].t : null;
      var wsToday = AF.at(today, ws), weToday = AF.at(today, we);
      var start;
      if (nowMs < wsToday) start = wsToday;
      else start = Math.max(nowMs + 60000, (last || nowMs) + iv * 60000);
      var count = Math.ceil(remaining / GLASS);
      for (var k = 0; k < count; k++) {
        var tt = start + k * iv * 60000;
        if (tt > weToday) break;
        res.push(tt);
      }
    }
    for (var d = 1; d <= 3; d++) {
      var day = AF.addDays(today, d);
      var n = Math.ceil(AF.targetFor(day) / GLASS);
      for (var j = 0; j < n; j++) {
        var m = ws + j * iv;
        if (m > we) break;
        res.push(AF.at(day, m));
      }
    }
    return res.slice(0, 60);
  };

  /* All triggers the OS should hold for us */
  AF.buildTriggers = function (nowMs) {
    var S = AF.S, out = [], i;
    nowMs = nowMs || Date.now();

    for (i = 0; i < S.alarms.length; i++) {
      var a = S.alarms[i];
      if (!a.on) continue;
      out.push({
        id: a.nid, kind: 'alarm', aid: a.id,
        title: '⏰ ' + (a.label || AF.t('alarm_default')),
        body: AF.fmtTime(a.h, a.m),
        on: { hour: a.h, minute: a.m }
      });
    }

    var times = AF.hydrationTimes(nowMs);
    for (i = 0; i < times.length; i++) {
      out.push({ id: 2000 + i, kind: 'reminder', title: AF.t('water_time'), body: AF.t('water_body'), at: times[i] });
    }

    var ds = Object.keys(S.days);
    for (i = 0; i < ds.length; i++) {
      var dow = +ds[i], rem = S.days[dow].rem || [];
      for (var r = 0; r < rem.length && r < 9; r++) {
        var mm = AF.parseHM(rem[r]);
        out.push({
          id: 4000 + dow * 10 + r, kind: 'reminder',
          title: AF.t('water_time'), body: AF.t('water_body'),
          on: { weekday: dow + 1, hour: Math.floor(mm / 60), minute: mm % 60 }
        });
      }
    }

    if (S.timer.endsAt && S.timer.endsAt > nowMs) {
      out.push({ id: 1, kind: 'timer', title: '⏳ ' + AF.t('timer_done'), body: AF.t('timer_done_body'), at: S.timer.endsAt });
    }
    if (S.snooze && S.snooze.at > nowMs) {
      out.push({ id: 2, kind: S.snooze.kind, aid: S.snooze.aid, title: S.snooze.title, body: S.snooze.body, at: S.snooze.at });
    } else if (S.snooze) {
      S.snooze = null; AF.save();
    }
    return out;
  };

  /* Next time (ms) after `from` that an `on` rule fires */
  AF.nextOn = function (on, from) {
    var base = new Date(from);
    for (var i = 0; i < 8; i++) {
      var d = new Date(base.getFullYear(), base.getMonth(), base.getDate() + i, on.hour, on.minute, 0, 0);
      if (d.getTime() <= from) continue;
      if (on.weekday && d.getDay() + 1 !== on.weekday) continue;
      return d.getTime();
    }
    return null;
  };

  AF.nextReminderAt = function (nowMs) {
    nowMs = nowMs || Date.now();
    var best = null, S = AF.S;
    var times = AF.hydrationTimes(nowMs);
    for (var i = 0; i < times.length; i++) if (times[i] > nowMs && (best === null || times[i] < best)) best = times[i];
    if (S.snooze && S.snooze.kind === 'reminder' && S.snooze.at > nowMs && (best === null || S.snooze.at < best)) best = S.snooze.at;
    return best;
  };
  AF.nextAlarmAt = function (nowMs) {
    nowMs = nowMs || Date.now();
    var best = null;
    AF.S.alarms.forEach(function (a) {
      if (!a.on) return;
      var t = AF.nextOn({ hour: a.h, minute: a.m }, nowMs);
      if (t && (best === null || t < best.t)) best = { t: t, a: a };
    });
    return best;
  };

  /* Pace status for the home screen */
  AF.pacing = function (nowMs) {
    nowMs = nowMs || Date.now();
    var S = AF.S, today = AF.today();
    var G = AF.targetFor(today), taken = AF.sum(AF.iso(today));
    var now = new Date(nowMs);
    var minNow = now.getHours() * 60 + now.getMinutes();
    var ws = AF.parseHM(S.wakeStart), we = AF.parseHM(S.wakeEnd);
    var expected = minNow <= ws ? 0 : minNow >= we ? G : (G * (minNow - ws)) / (we - ws);
    var behind = Math.floor((expected - taken) / GLASS);
    if (taken >= G) return { state: 'goal', behind: 0 };
    var next = AF.nextReminderAt(nowMs);
    if (behind >= 1) return { state: 'behind', behind: behind, next: next };
    if (!S.remind) return { state: 'off', behind: 0 };
    if (minNow >= we || minNow < ws) return { state: 'quiet', behind: 0, next: next };
    return { state: 'ok', behind: 0, next: next };
  };

  AF.timerLeftSec = function (nowMs) {
    var T = AF.S.timer;
    nowMs = nowMs || Date.now();
    if (T.endsAt) return Math.max(0, Math.ceil((T.endsAt - nowMs) / 1000));
    if (T.left != null) return Math.max(0, Math.ceil(T.left / 1000));
    return T.dur;
  };
})();

/* AquaFlow native layer: real alarm-clock behaviour on Android.
   Alarms, water reminders and the timer are registered with Android's AlarmManager through the
   AlarmRinger plugin (written by native.py). A foreground service rings alarms / timers in a loop,
   water reminders post a chime notification with "Drank" and "Snooze" buttons - all of it works with
   the app closed or the phone locked. In a normal browser everything falls back to in-page timers. */
(function () {
  var AF = (window.AF = window.AF || {});

  AF.isNative = false;
  try {
    AF.isNative = !!(window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform());
  } catch (e) {}

  function plugin(name) {
    try {
      var C = window.Capacitor;
      if (C && typeof C.registerPlugin === 'function') return C.registerPlugin(name);
      return C && C.Plugins ? C.Plugins[name] : null;
    } catch (e) { return null; }
  }
  var AR = AF.isNative ? plugin('AlarmRinger') : null;
  var LN = AF.isNative ? plugin('LocalNotifications') : null; // only used to ask for the notification permission
  AF.AR = AR;
  AF.nativeOK = false;
  AF.nativeError = '';

  /* ---------- in-app chime (browser fallback only) ---------- */
  var actx = null, chimeTimer = null;
  AF.playChime = function () {
    try {
      if (!actx) actx = new (window.AudioContext || window.webkitAudioContext)();
      if (actx.state === 'suspended') actx.resume();
      [880, 1108.7, 1318.5, 1760].forEach(function (f, i) {
        var o = actx.createOscillator(), g = actx.createGain();
        o.type = 'sine'; o.frequency.value = f;
        var t0 = actx.currentTime + i * 0.16;
        g.gain.setValueAtTime(0.0001, t0);
        g.gain.exponentialRampToValueAtTime(0.25, t0 + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.9);
        o.connect(g); g.connect(actx.destination);
        o.start(t0); o.stop(t0 + 1);
      });
    } catch (e) {}
  };
  AF.startChimeLoop = function () {
    AF.stopChimeLoop();
    if (!AF.S.sound) return;
    AF.playChime();
    chimeTimer = setInterval(AF.playChime, 3000);
  };
  AF.stopChimeLoop = function () { if (chimeTimer) { clearInterval(chimeTimer); chimeTimer = null; } };
  AF.vibrate = function (p) { try { if (AF.S.sound && navigator.vibrate) navigator.vibrate(p); } catch (e) {} };

  /* ---------- permissions ---------- */
  AF.nativeInit = async function () {
    if (!AR) return;
    if (LN) {
      try {
        var p = await LN.checkPermissions();
        if (p.display !== 'granted') p = await LN.requestPermissions();
        if (p.display !== 'granted') AF.toast({ text: AF.t('perm_needed') });
      } catch (e) {}
    }
  };
  AF.registerActions = function () {};

  /* ---------- scheduling ---------- */
  var fb = {};            // in-page timers: used for the pop-up banner while the app is open
  var pending = null, running = false, again = false;

  AF.reschedule = function () {
    if (pending) clearTimeout(pending);
    pending = setTimeout(doReschedule, 150);
  };

  async function doReschedule() {
    pending = null;
    if (running) { again = true; return; }
    running = true;
    var trigs = [];
    try {
      trigs = AF.buildTriggers(Date.now());
      AF.lastTriggers = trigs;
      scheduleFallback(trigs);
      if (AR) {
        var items = trigs.map(function (t) {
          var it = { id: t.id, kind: t.kind, title: t.title, body: t.body };
          if (t.at) it.at = t.at;
          else { it.hour = t.on.hour; it.minute = t.on.minute; if (t.on.weekday) it.weekday = t.on.weekday; }
          return it;
        });
        await AR.sync({
          muted: !AF.S.sound, snoozeMin: AF.S.snoozeMin,
          labels: { drank: AF.t('drank', { n: AF.GLASS }), snooze: AF.t('snooze'), dismiss: AF.t('dismiss') },
          items: items
        });
        AF.nativeOK = true; AF.nativeError = '';
      }
    } catch (e) {
      AF.nativeOK = false; AF.nativeError = String((e && e.message) || e);
      try { console.warn('native sync failed', e); } catch (_) {}
    }
    running = false;
    AF.syncWidget();
    if (again) { again = false; doReschedule(); }
  }

  function scheduleFallback(trigs) {
    var now = Date.now();
    fb = {};
    trigs.forEach(function (t) {
      var next = t.at ? t.at : AF.nextOn(t.on, now);
      if (next && next > now) fb[t.id] = { t: t, next: next };
    });
  }

  AF.fallbackTick = function (nowMs) {
    Object.keys(fb).forEach(function (k) {
      var e = fb[k];
      if (e.next <= nowMs) {
        if (e.t.on) e.next = AF.nextOn(e.t.on, nowMs + 1000); else delete fb[k];
        AF.fire(e.t.kind, e.t.title, e.t.body, e.t.aid);
      }
    });
  };

  /* rings in 10 seconds so the user can lock the phone and listen */
  AF.testRing = async function () {
    if (AR) {
      try { await AR.testRing({ delay: 10, muted: !AF.S.sound }); } catch (e) { AF.toast({ text: 'Test failed: ' + ((e && e.message) || e) }); return; }
    } else {
      fb[3] = { t: { kind: 'alarm', title: '⏰ ' + AF.t('test_title'), body: AF.t('test_body') }, next: Date.now() + 10000 };
    }
    AF.toast({ text: AF.t('test_set') });
  };

  /* silences a ringing alarm / timer and clears a reminder notification */
  AF.clearDelivered = function () {
    if (!AR) return;
    try { AR.stop().catch(function () {}); } catch (e) {}
  };

  /* alarm / timer ringing in the background right now? show the pop-up so it can be dismissed or snoozed */
  AF.checkRing = async function () {
    if (!AR) return;
    try {
      var r = await AR.getRing();
      if (r && r.ringing) AF.fire(r.kind || 'alarm', r.title, r.body, null, true);
    } catch (e) {}
  };

  AF.bgStatus = async function () {
    if (!AR) return null;
    try { return await AR.status(); } catch (e) { return null; }
  };
  AF.openBg = function (type) {
    if (!AR) return;
    AR.openSettings({ type: type }).catch(function () { AF.toast({ text: 'Could not open that settings page' }); });
  };

  /* ---------- widget bridge + things done from notification / widget buttons ---------- */
  AF.syncWidget = function () {
    if (!AR) return;
    try {
      var today = AF.today();
      AR.setWidgetData({
        date: AF.iso(today), intake: AF.sum(AF.iso(today)), goal: AF.targetFor(today),
        nextAt: AF.nextReminderAt(Date.now()) || 0
      }).catch(function () {});
    } catch (e) {}
  };
  AF.consumeWidgetPending = async function () {
    if (!AR) return 0;
    try {
      var r = await AR.consumePending();
      var total = (r && r.ml) || 0;
      if (total > 0) {
        var a = r.entries || [];
        if (a.length) a.forEach(function (e) { AF.addWater(e.ml, new Date(e.t), e.t); });
        else AF.addWater(total);
      }
      return total;
    } catch (e) { return 0; }
  };
})();

/* AquaFlow UI building blocks: icons, header, nav, toasts, modals, keypad, bounce scroll */
(function () {
  var AF = (window.AF = window.AF || {});
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  AF.$ = $; AF.$$ = $$;
  AF.esc = function (s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };
  AF.ic = function (name, cls) { return '<svg class="ic ' + (cls || '') + (name === 'play' ? ' fill' : '') + '" viewBox="0 0 24 24"><use href="#i-' + name + '"/></svg>'; };

  AF.PAGES = ['home', 'clock', 'alarms', 'timer', 'schedule'];
  AF.NAV_ICONS = { home: 'home', clock: 'clock', alarms: 'bell', timer: 'hourglass', schedule: 'calendar' };
  AF.page = 'home';
  AF.ui = { monthOff: 0, openWeeks: {}, schedTab: 'weekly' };

  /* ---------- theme ---------- */
  AF.applyTheme = function () {
    document.documentElement.setAttribute('data-theme', AF.S.theme);
    document.documentElement.setAttribute('lang', AF.S.lang === 'am' ? 'am' : 'en');
  };

  /* ---------- header ---------- */
  AF.renderHeader = function () {
    var S = AF.S, today = AF.today();
    var st = AF.streak();
    var p = AF.pacing();
    var stTxt = st === 1 ? AF.t('streak1', { n: st }) : AF.t('streak', { n: st });
    var behind = p.behind > 0 ? '<span class="chip warn" title="' + AF.esc(AF.t('behind_badge', { n: p.behind })) + '">💧 ' + p.behind + '</span>' : '';
    $('#hdr').innerHTML =
      '<div class="hd-l"><div class="hd-date">' + AF.esc(AF.fmtDate(today, 'short')) + '</div>' +
      '<div class="hd-sub"><span class="flame">🔥 ' + AF.esc(stTxt) + '</span>' + behind + '</div></div>' +
      '<div class="hd-r">' +
      '<button class="theme-sw" data-act="theme" aria-label="Theme"><span class="knob">' + AF.ic(S.theme === 'dark' ? 'moon' : 'sun') + '</span>' +
      '<span class="sw-ic l">' + AF.ic('sun') + '</span><span class="sw-ic r">' + AF.ic('moon') + '</span></button>' +
      '<button class="lang-sw ' + S.lang + '" data-act="lang" aria-label="Language"><span class="pill"></span><span class="fl">🇺🇸</span><span class="fl">🇪🇹</span></button>' +
      '<button class="icon-btn" data-act="settings" aria-label="Settings">' + AF.ic('gear') + '</button>' +
      '</div>';
  };

  /* ---------- nav ---------- */
  AF.renderNav = function () {
    var html = AF.PAGES.map(function (p) {
      return '<button class="nav-b' + (p === AF.page ? ' active' : '') + '" data-act="nav" data-page="' + p + '" aria-label="' + p + '">' +
        AF.ic(AF.NAV_ICONS[p]) + '<span>' + AF.esc(AF.t('nav_' + p)) + '</span></button>';
    }).join('');
    $('#nav').innerHTML = html;
  };

  AF.go = function (page) {
    if (page === AF.page) return;
    var from = AF.PAGES.indexOf(AF.page), to = AF.PAGES.indexOf(page);
    AF.page = page;
    AF.PAGES.forEach(function (p, i) {
      var el = $('#p-' + p);
      el.classList.remove('active', 'before', 'after');
      if (p === page) el.classList.add('active');
      else el.classList.add(i < to ? 'before' : 'after');
    });
    $$('.nav-b').forEach(function (b) { b.classList.toggle('active', b.dataset.page === page); });
    var el = $('#p-' + page); el.scrollTop = 0;
    if (AF.onPageShown) AF.onPageShown(page);
  };

  /* ---------- toasts (swipe left/right to dismiss) ---------- */
  AF.toast = function (o) {
    var root = $('#toasts');
    if (!o.ring && !o.persist) $$('.toast:not(.ring)', root).forEach(function (x) { x.remove(); });
    var el = document.createElement('div');
    el.className = 'toast' + (o.ring ? ' ring' : '');
    var acts = '';
    if (o.actions && o.actions.length) {
      acts = '<div class="t-acts">' + o.actions.map(function (a, i) {
        return '<button class="t-btn ' + (a.cls || '') + '" data-i="' + i + '">' + AF.esc(a.label) + '</button>';
      }).join('') + '</div>';
    }
    el.innerHTML = '<div class="t-main">' + (o.icon ? '<div class="t-ic">' + o.icon + '</div>' : '') +
      '<div class="t-body"><b>' + AF.esc(o.title || o.text || '') + '</b>' + (o.body ? '<span>' + AF.esc(o.body) + '</span>' : '') + '</div></div>' + acts;
    root.appendChild(el);
    requestAnimationFrame(function () { el.classList.add('in'); });

    var closed = false, timer = null;
    function close() {
      if (closed) return; closed = true;
      if (timer) clearTimeout(timer);
      el.classList.remove('in'); el.classList.add('out');
      setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 260);
      if (o.onClose) o.onClose();
    }
    if (!o.persist) timer = setTimeout(close, o.ms || 3800);

    $$('.t-btn', el).forEach(function (b) {
      b.addEventListener('click', function (e) {
        e.stopPropagation();
        var a = o.actions[+b.dataset.i];
        close();
        if (a && a.fn) a.fn();
      });
    });

    var sx = 0, dx = 0, drag = false;
    el.addEventListener('pointerdown', function (e) {
      if (e.target.closest('button')) return;
      drag = true; sx = e.clientX; dx = 0;
      try { el.setPointerCapture(e.pointerId); } catch (_) {}
      el.style.transition = 'none';
      if (timer) { clearTimeout(timer); timer = null; }
    });
    el.addEventListener('pointermove', function (e) {
      if (!drag) return;
      dx = e.clientX - sx;
      el.style.transform = 'translateX(' + dx + 'px)';
      el.style.opacity = String(1 - Math.min(1, Math.abs(dx) / 260));
    });
    function end() {
      if (!drag) return; drag = false;
      el.style.transition = '';
      if (Math.abs(dx) > 80) {
        el.style.transform = 'translateX(' + (dx > 0 ? '120%' : '-120%') + ')';
        el.style.opacity = '0';
        if (o.onSwipe) o.onSwipe();
        setTimeout(close, 200);
      } else {
        el.style.transform = ''; el.style.opacity = '';
        if (!o.persist && !closed) timer = setTimeout(close, 2500);
      }
    }
    el.addEventListener('pointerup', end);
    el.addEventListener('pointercancel', end);
    return { el: el, close: close };
  };

  /* ---------- modal ---------- */
  AF.modal = function (html, opts) {
    opts = opts || {};
    var root = $('#modal-root');
    var bd = document.createElement('div');
    bd.className = 'backdrop';
    bd.innerHTML = '<div class="sheet ' + (opts.cls || '') + '">' + html + '</div>';
    root.appendChild(bd);
    requestAnimationFrame(function () { bd.classList.add('in'); });
    var closed = false;
    var api = {
      el: bd, sheet: bd.firstChild,
      set: function (h) { api.sheet.innerHTML = h; },
      close: function () {
        if (closed) return; closed = true;
        bd.classList.remove('in');
        setTimeout(function () { if (bd.parentNode) bd.parentNode.removeChild(bd); }, 240);
        if (opts.onClose) opts.onClose();
      }
    };
    bd.addEventListener('click', function (e) { if (e.target === bd) api.close(); });
    return api;
  };

  /* ---------- frosted keypad ---------- */
  var LIMIT = { ml: 5, int: 3, time: 4, dur: 6 };
  function fmtDisplay(tab, digits, ap) {
    var d = digits || '';
    if (tab.mode === 'ml') return '<b>' + AF.n(parseInt(d || '0', 10)) + '</b><i>' + AF.t('ml') + '</i>';
    if (tab.mode === 'int') return '<b>' + (d || '0') + '</b><i>' + AF.esc(tab.unit || '') + '</i>';
    if (tab.mode === 'time') {
      var p = AF.pad(d, 4);
      var h = '<b>' + p.slice(0, 2) + ':' + p.slice(2) + '</b>';
      return h;
    }
    var q = AF.pad(d, 6);
    return '<b>' + q.slice(0, 2) + ':' + q.slice(2, 4) + ':' + q.slice(4) + '</b>';
  }
  AF.keypadValue = function (tab, digits, ap) {
    var d = digits || '';
    if (tab.mode === 'ml' || tab.mode === 'int') return parseInt(d || '0', 10);
    if (tab.mode === 'time') {
      var p = AF.pad(d, 4), hh = parseInt(p.slice(0, 2), 10), mm = parseInt(p.slice(2), 10);
      if (mm > 59) return null;
      if (AF.S.h24) { if (hh > 23) return null; return { h: hh, m: mm }; }
      if (hh < 1 || hh > 12) return null;
      var h24 = hh % 12 + (ap === 'pm' ? 12 : 0);
      return { h: h24, m: mm };
    }
    var q = AF.pad(d, 6);
    var s = parseInt(q.slice(0, 2), 10) * 3600 + parseInt(q.slice(2, 4), 10) * 60 + parseInt(q.slice(4), 10);
    return s;
  };

  /* cfg: {title, tabs:[{id,label,mode,init,ap,quick,unit,okLabel,ok(value),extra(),onExtra(el,api)}], tab:0} */
  AF.keypad = function (cfg) {
    var cur = cfg.tab || 0;
    var digits = {}, aps = {};
    cfg.tabs.forEach(function (t) {
      digits[t.id] = t.init || '';
      aps[t.id] = t.ap || 'am';
    });
    var m;

    function draw() {
      var t = cfg.tabs[cur];
      var tabsHtml = cfg.tabs.length > 1 ? '<div class="seg kp-tabs">' + cfg.tabs.map(function (x, i) {
        return '<button class="' + (i === cur ? 'on' : '') + '" data-kt="' + i + '">' + AF.esc(x.label) + '</button>';
      }).join('') + '</div>' : '';
      var prompt = t.mode === 'time' ? AF.t('enter_time') : t.mode === 'dur' ? AF.t('enter_duration') : t.mode === 'ml' ? AF.t('enter_amount') : (t.prompt || AF.t('enter_amount'));
      var ap = '';
      if (t.mode === 'time' && !AF.S.h24) {
        ap = '<div class="seg ap"><button class="' + (aps[t.id] === 'am' ? 'on' : '') + '" data-ap="am">' + AF.t('am') + '</button><button class="' + (aps[t.id] === 'pm' ? 'on' : '') + '" data-ap="pm">' + AF.t('pm') + '</button></div>';
      }
      var quick = '';
      if (t.quick && t.quick.length) {
        quick = '<div class="quick">' + t.quick.map(function (q) { return '<button data-q="' + q + '">' + (t.mode === 'ml' ? '+' + q : q) + '</button>'; }).join('') + '</div>';
      }
      var keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'C', '0', 'B'].map(function (k) {
        var lbl = k === 'B' ? AF.ic('backspace') : k === 'C' ? 'C' : k;
        return '<button class="key ' + (k === 'B' || k === 'C' ? 'alt' : '') + '" data-k="' + k + '">' + lbl + '</button>';
      }).join('');
      m.set(
        '<div class="sheet-h"><h3>' + AF.esc(cfg.title || '') + '</h3><button class="icon-btn sm" data-x="1" aria-label="Close">' + AF.ic('x') + '</button></div>' +
        tabsHtml +
        '<div class="kp-prompt">' + AF.esc(prompt) + '</div>' +
        '<div class="kp-display">' + fmtDisplay(t, digits[t.id], aps[t.id]) + '</div>' + ap + quick +
        (t.extra ? '<div class="kp-extra">' + t.extra() + '</div>' : '') +
        '<div class="keys">' + keys + '</div>' +
        '<button class="btn primary wide" data-ok="1">' + AF.esc(t.okLabel || AF.t('done')) + '</button>'
      );
    }

    m = AF.modal('', { cls: 'kp' });
    var api = { draw: draw, sheet: m.sheet, close: function () { m.close(); }, digits: digits, aps: aps, tab: function () { return cfg.tabs[cur]; } };
    m.sheet.addEventListener('click', function (e) {
      var el = e.target.closest('button, [data-extra]');
      if (!el) return;
      var t = cfg.tabs[cur];
      if (el.dataset.x) return m.close();
      if (el.dataset.kt) { cur = +el.dataset.kt; draw(); return; }
      if (el.dataset.ap) { aps[t.id] = el.dataset.ap; draw(); return; }
      if (el.dataset.q) { digits[t.id] = String(parseInt(el.dataset.q, 10)); draw(); return; }
      if (el.dataset.k) {
        var k = el.dataset.k, d = digits[t.id] || '';
        if (k === 'B') d = d.slice(0, -1);
        else if (k === 'C') d = '';
        else if (d.length < LIMIT[t.mode]) { d = (d === '0' && (t.mode === 'ml' || t.mode === 'int')) ? k : d + k; }
        digits[t.id] = d; draw(); AF.vibrate(8); return;
      }
      if (el.dataset.ok) {
        var v = AF.keypadValue(t, digits[t.id], aps[t.id]);
        if (v === null || (t.mode === 'time' && !v)) { AF.toast({ text: AF.t('invalid_time') }); return; }
        if ((t.mode === 'ml' || t.mode === 'int') && !v && !t.allowZero) { AF.toast({ text: AF.t('invalid_amount') }); return; }
        if (t.mode === 'dur' && !v) { AF.toast({ text: AF.t('invalid_amount') }); return; }
        var r = t.ok ? t.ok(v, api) : undefined;
        if (r !== false) m.close();
        return;
      }
      if (el.dataset.extra !== undefined && t.onExtra) t.onExtra(el, api);
    });
    draw();
    return api;
  };

  /* ---------- elastic overscroll ---------- */
  AF.bounce = function (scroller, inner) {
    var lastY = 0, off = 0, pulling = false, startedEdge = 0;
    function rubber(x) { return Math.sign(x) * Math.pow(Math.abs(x), 0.82) * 0.9; }
    scroller.addEventListener('touchstart', function (e) {
      lastY = e.touches[0].clientY; off = 0; pulling = false;
      inner.style.transition = 'none';
    }, { passive: true });
    scroller.addEventListener('touchmove', function (e) {
      var y = e.touches[0].clientY, step = y - lastY; lastY = y;
      var atTop = scroller.scrollTop <= 0;
      var atBot = scroller.scrollTop + scroller.clientHeight >= scroller.scrollHeight - 1;
      if (!pulling) {
        if ((atTop && step > 0) || (atBot && step < 0)) { pulling = true; off = 0; }
      }
      if (pulling) {
        off += step;
        if ((atTop && !atBot && off < 0) || (atBot && !atTop && off > 0)) { pulling = false; off = 0; inner.style.transform = ''; return; }
        inner.style.transform = 'translate3d(0,' + rubber(off) + 'px,0)';
        if (e.cancelable) e.preventDefault();
      }
    }, { passive: false });
    function end() {
      if (!pulling && !off) return;
      pulling = false; off = 0;
      inner.style.transition = 'transform .55s cubic-bezier(.34,1.56,.64,1)';
      inner.style.transform = '';
    }
    scroller.addEventListener('touchend', end, { passive: true });
    scroller.addEventListener('touchcancel', end, { passive: true });
  };
})();

/* Flip / Digital / Analog clock and countdown renderers */
(function () {
  var AF = (window.AF = window.AF || {});
  var $ = AF.$;

  function card(p) {
    return '<div class="fwrap"><div class="fc" data-p="' + p + '">' +
      '<div class="fc-top"><i>00</i></div><div class="fc-bot"><i>00</i></div>' +
      '<div class="fc-ft"><i>00</i></div><div class="fc-fb"><i>00</i></div></div>' +
      (p === 'h' ? '<div class="ampm below" data-ampm></div>' : '') + '</div>';
  }
  function setFlip(el, val) {
    var old = el.dataset.v;
    if (old === val) return;
    function q(s) { return el.querySelector(s); }
    el.dataset.v = val;
    if (old === undefined) {
      ['.fc-top', '.fc-bot', '.fc-ft', '.fc-fb'].forEach(function (s) { q(s + ' i').textContent = val; });
      return;
    }
    q('.fc-top i').textContent = val;
    q('.fc-ft i').textContent = old;
    q('.fc-fb i').textContent = val;
    q('.fc-bot i').textContent = old;
    el.classList.remove('go'); void el.offsetWidth; el.classList.add('go');
    clearTimeout(el._t);
    el._t = setTimeout(function () { q('.fc-bot i').textContent = val; el.classList.remove('go'); }, 620);
  }

  /* ----- analog clock face ----- */
  function analogSvg(id) {
    var s = '<svg class="analog" id="' + id + '" viewBox="-150 -150 300 300">' +
      '<defs><filter id="' + id + '-glow" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="4"/></filter></defs>';
    for (var i = 0; i < 60; i++) {
      var a = (i * 6 - 90) * Math.PI / 180, big = i % 5 === 0;
      var r = 136;
      s += '<circle cx="' + (Math.cos(a) * r).toFixed(2) + '" cy="' + (Math.sin(a) * r).toFixed(2) + '" r="' + (big ? 3.1 : 1.6) + '" class="' + (big ? 'tk big' : 'tk') + '"/>';
    }
    for (var j = 0; j < 12; j++) {
      var b = (j * 30 - 90) * Math.PI / 180;
      s += '<text x="' + (Math.cos(b) * 113).toFixed(2) + '" y="' + (Math.sin(b) * 113 + 3.5).toFixed(2) + '" class="mnum">' + (j * 5) + '</text>';
      var n = j === 0 ? 12 : j;
      s += '<text x="' + (Math.cos(b) * 80).toFixed(2) + '" y="' + (Math.sin(b) * 80 + 12).toFixed(2) + '" class="hnum">' + n + '</text>';
    }
    s += '<g class="ap-pill" data-ap-g><rect x="-22" y="30" width="44" height="20" rx="10"/><text x="0" y="44" data-ampm-svg>PM</text></g>';
    s += '<g data-h><line x1="0" y1="8" x2="0" y2="-46" class="hand hh"/></g>' +
      '<g data-m><line x1="0" y1="10" x2="0" y2="-78" class="hand mm"/></g>' +
      '<g data-s><line x1="0" y1="14" x2="0" y2="-130" class="hand ss"/>' +
      '<circle cx="0" cy="-136" r="8" class="sglow" filter="url(#' + id + '-glow)"/><circle cx="0" cy="-136" r="5" class="sdot"/></g>' +
      '<circle r="8" class="hub"/><circle r="3.2" class="hub2"/></svg>';
    return s;
  }

  /* ----- countdown ring ----- */
  function ringSvg(id) {
    var s = '<svg class="ring" id="' + id + '" viewBox="-150 -150 300 300"><defs>' +
      '<linearGradient id="' + id + '-g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="var(--acc)"/><stop offset="1" stop-color="var(--acc2)"/></linearGradient></defs>';
    for (var i = 0; i < 60; i++) {
      var a = (i * 6 - 90) * Math.PI / 180, big = i % 5 === 0, r = 136;
      s += '<circle cx="' + (Math.cos(a) * r).toFixed(2) + '" cy="' + (Math.sin(a) * r).toFixed(2) + '" r="' + (big ? 3.1 : 1.6) + '" class="' + (big ? 'tk big' : 'tk') + '"/>';
    }
    s += '<circle r="108" class="rtrack"/><circle r="108" class="rprog" data-prog stroke="url(#' + id + '-g)" transform="rotate(-90)"/>' +
      '<text x="0" y="14" class="rtime" data-rt>00:00</text></svg>';
    return s;
  }

  var HOUR12 = function (d) { var h = d.getHours() % 12; return h === 0 ? 12 : h; };

  /* mode: flip | digital | analog */
  AF.clockView = function (id, mode) {
    if (mode === 'flip') {
      return '<div class="flip-row" id="' + id + '">' + card('h') + '<div class="colon"></div>' + card('m') + '<div class="colon"></div>' + card('s') + '</div>';
    }
    if (mode === 'digital') {
      return '<div class="digital" id="' + id + '"><span class="dg-time">--:--:--</span><span class="ampm dg" data-ampm></span></div>';
    }
    return '<div class="analog-wrap" id="' + id + '-w">' + analogSvg(id) + '</div>';
  };

  AF.clockUpdate = function (id, mode, now) {
    var root = document.getElementById(id);
    if (!root) return;
    var h24 = AF.S.h24;
    var hh = h24 ? now.getHours() : HOUR12(now);
    var ap = now.getHours() >= 12 ? AF.t('pm') : AF.t('am');
    if (mode === 'flip') {
      setFlip(root.querySelector('[data-p=h]'), AF.pad(hh));
      setFlip(root.querySelector('[data-p=m]'), AF.pad(now.getMinutes()));
      setFlip(root.querySelector('[data-p=s]'), AF.pad(now.getSeconds()));
      var a = root.querySelector('[data-ampm]'); a.style.visibility = h24 ? 'hidden' : 'visible'; a.textContent = ap;
    } else if (mode === 'digital') {
      root.querySelector('.dg-time').textContent = AF.pad(hh) + ':' + AF.pad(now.getMinutes()) + ':' + AF.pad(now.getSeconds());
      var b = root.querySelector('[data-ampm]'); b.style.display = h24 ? 'none' : ''; b.textContent = ap;
    } else {
      var s = now.getSeconds() + now.getMilliseconds() / 1000, m = now.getMinutes() + s / 60, h = (now.getHours() % 12) + m / 60;
      root.querySelector('[data-h]').setAttribute('transform', 'rotate(' + (h * 30).toFixed(2) + ')');
      root.querySelector('[data-m]').setAttribute('transform', 'rotate(' + (m * 6).toFixed(2) + ')');
      root.querySelector('[data-s]').setAttribute('transform', 'rotate(' + (s * 6).toFixed(2) + ')');
      var g = root.querySelector('[data-ap-g]'); g.style.display = h24 ? 'none' : '';
      root.querySelector('[data-ampm-svg]').textContent = ap;
    }
  };

  function hms(sec) {
    var h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60), s = sec % 60;
    return { h: AF.pad(h), m: AF.pad(m), s: AF.pad(s), all: AF.pad(h) + ':' + AF.pad(m) + ':' + AF.pad(s) };
  }

  AF.cdView = function (id, mode) {
    if (mode === 'flip') {
      return '<div class="flip-row cd" id="' + id + '">' + card('h').replace(/<div class="ampm[^]*?<\/div>/, '') + '<div class="colon"></div>' + card('m') + '<div class="colon"></div>' + card('s') + '</div>';
    }
    if (mode === 'digital') {
      return '<div class="digital" id="' + id + '"><span class="dg-time">00:00:00</span></div>';
    }
    return '<div class="analog-wrap small" id="' + id + '-w">' + ringSvg(id) + '</div>';
  };
  AF.cdUpdate = function (id, mode, sec, total) {
    var root = document.getElementById(id);
    if (!root) return;
    var t = hms(sec);
    if (mode === 'flip') {
      setFlip(root.querySelector('[data-p=h]'), t.h);
      setFlip(root.querySelector('[data-p=m]'), t.m);
      setFlip(root.querySelector('[data-p=s]'), t.s);
    } else if (mode === 'digital') {
      root.querySelector('.dg-time').textContent = t.all;
    } else {
      var C = 2 * Math.PI * 108;
      var frac = total > 0 ? Math.max(0, Math.min(1, sec / total)) : 0;
      var pr = root.querySelector('[data-prog]');
      pr.setAttribute('stroke-dasharray', C.toFixed(1));
      pr.setAttribute('stroke-dashoffset', (C * (1 - frac)).toFixed(1));
      root.querySelector('[data-rt]').textContent = sec >= 3600 ? t.all : t.m + ':' + t.s;
    }
  };
})();

/* AquaFlow pages: Home, Clock, Alarms, Timer, Schedule, Settings, Ring */
(function () {
  var AF = (window.AF = window.AF || {});
  var $ = AF.$, $$ = AF.$$, esc = AF.esc, ic = AF.ic, t = AF.t;
  function inner(p) { return $('#p-' + p + ' .page-in'); }

  /* =====================================================================
     HOME
     ===================================================================== */
  var GLASS_PATH = 'M50 20 L210 20 L190 266 Q188 280 174 280 L86 280 Q72 280 70 266 Z';
  function wavePath() {
    var s = 'M0 20 q27.5 -11 55 0';
    for (var i = 0; i < 7; i++) s += ' t55 0';
    return s + ' V330 H0 Z';
  }
  function iconSmall() { return '<svg viewBox="0 0 40 48" class="dk-ic"><path d="M7 6h26l-3 34a3 3 0 0 1-3 3H13a3 3 0 0 1-3-3z" class="o"/><path d="M9 26h22l-1.4 14a3 3 0 0 1-3 3H13.4a3 3 0 0 1-3-3z" class="w"/></svg>'; }
  function iconStd() { return '<svg viewBox="0 0 40 48" class="dk-ic"><path d="M7 6h26l-3 34a3 3 0 0 1-3 3H13a3 3 0 0 1-3-3z" class="o"/><path d="M8.4 14h23.2l-1.6 26a3 3 0 0 1-3 3H13a3 3 0 0 1-3-3z" class="w"/></svg>'; }
  function iconBottle() { return '<svg viewBox="0 0 40 48" class="dk-ic"><path d="M16 3h8v5h-8z" class="o"/><path d="M15 8h10l3 6v26a4 4 0 0 1-4 4H16a4 4 0 0 1-4-4V14z" class="o"/><path d="M12 22h16v18a4 4 0 0 1-4 4H16a4 4 0 0 1-4-4z" class="w"/></svg>'; }

  AF.buildHome = function () {
    var G = AF.targetFor(AF.today());
    var ticks = '';
    for (var ml = 500; ml < G; ml += 500) {
      var y = 280 - 260 * (ml / G);
      var ex = 210 - (20 * (y - 20)) / 246;
      ticks += '<line x1="' + (ex + 2).toFixed(1) + '" y1="' + y.toFixed(1) + '" x2="' + (ex + 11).toFixed(1) + '" y2="' + y.toFixed(1) + '" class="g-tick"/>' +
        '<text x="' + (ex + 14).toFixed(1) + '" y="' + (y + 3.5).toFixed(1) + '" class="g-tl">' + AF.n(ml) + ' ' + esc(t('ml')) + '</text>';
    }
    inner('home').innerHTML =
      '<div class="glass-wrap" id="glass-wrap">' +
      '<svg class="glass" viewBox="0 0 260 300" id="glass"><defs>' +
      '<clipPath id="gclip"><path d="' + GLASS_PATH + '"/></clipPath>' +
      '<linearGradient id="wg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--w1)"/><stop offset="1" style="stop-color:var(--w2)"/></linearGradient>' +
      '<linearGradient id="gs" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#fff" stop-opacity=".55"/><stop offset=".18" stop-color="#fff" stop-opacity=".08"/><stop offset=".8" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#fff" stop-opacity=".18"/></linearGradient>' +
      '</defs>' +
      '<path d="' + GLASS_PATH + '" class="g-body"/>' +
      '<g clip-path="url(#gclip)"><g id="water" class="water">' +
      '<g class="wave w2"><path d="' + wavePath() + '" fill="url(#wg)" opacity=".5"/></g>' +
      '<g class="wave w1"><path d="' + wavePath() + '" fill="url(#wg)"/></g></g>' +
      '<path d="' + GLASS_PATH + '" fill="url(#gs)"/></g>' +
      '<path d="M58 28 L74 262" class="g-hl"/><path d="M200 34 L186 150" class="g-hl2"/>' +
      '<ellipse cx="130" cy="20" rx="80" ry="6.5" class="g-rim"/>' +
      '<path d="' + GLASS_PATH + '" class="g-edge"/>' + ticks + '</svg>' +
      '<div class="bubbles" id="bubbles"></div>' +
      '<div class="g-chip" id="g-chip"><div class="g-int"><b id="g-int">0</b><i>' + esc(t('ml')) + '</i></div><div class="g-line"></div>' +
      '<div class="g-goal" id="g-goal"></div><div class="g-pct" id="g-pct">0%</div></div></div>' +
      '<p class="pace" id="pace"></p>' +
      '<div class="dock">' +
      '<button class="dk" data-act="drink" data-ml="150">' + iconSmall() + '<b>+150</b><span>' + esc(t('small')) + '</span></button>' +
      '<button class="dk primary" data-act="drink" data-ml="250">' + iconStd() + '<b>+250</b><span>' + esc(t('standard')) + '</span></button>' +
      '<button class="dk" data-act="drink" data-ml="500">' + iconBottle() + '<b>+500</b><span>' + esc(t('large')) + '</span></button></div>' +
      '<button class="btn ghost wide" data-act="custom-water">' + ic('plus') + ' ' + esc(t('custom')) + '</button>' +
      '<h4 class="sec">' + esc(t('today_sips')) + '</h4><div id="sips" class="card sips"></div>';
    AF.updateHome();
  };

  AF.updateHome = function () {
    if (!$('#water')) return;
    var today = AF.today(), key = AF.iso(today);
    var G = AF.targetFor(today), taken = AF.sum(key);
    var lvl = Math.max(0, Math.min(1, taken / G));
    var ty = 260 * (1 - lvl) + (lvl < 0.02 ? 12 : 0);
    $('#water').style.transform = 'translateY(' + ty.toFixed(1) + 'px)';
    $('#g-int').textContent = AF.n(taken);
    $('#g-goal').textContent = AF.n(G) + ' ' + t('ml');
    var pct = Math.round((taken / G) * 100);
    var p = AF.pacing();
    var pe = $('#g-pct');
    pe.textContent = pct + '%';
    pe.className = 'g-pct' + (p.state === 'goal' ? ' ok' : p.state === 'behind' ? ' warn' : '');
    var msg = '';
    var now = Date.now();
    if (p.state === 'goal') msg = t('pace_goal');
    else if (p.state === 'behind') msg = t('pace_behind');
    else if (p.state === 'quiet') msg = t('pace_quiet');
    else if (p.state === 'off') msg = t('pace_off');
    else if (p.next) {
      var mins = (p.next - now) / 60000;
      msg = mins > 720 ? t('pace_first', { n: AF.GLASS, t: AF.fmtTs(p.next) }) : t('pace_ok', { n: AF.GLASS, t: AF.fmtDur(Math.max(1, mins)) });
    }
    var pc = $('#pace'); pc.textContent = msg; pc.className = 'pace ' + p.state;

    var ents = AF.entries(key).slice().reverse().slice(0, 6);
    $('#sips').innerHTML = ents.length ? ents.map(function (e) {
      var i = AF.entries(key).indexOf(e);
      return '<div class="sip"><span class="s-t">' + esc(AF.fmtTs(e.t)) + '</span><b>+' + AF.n(e.ml) + ' ' + esc(t('ml')) + '</b>' +
        '<button class="icon-btn sm" data-act="sip-del" data-i="' + i + '" aria-label="Remove">' + ic('x') + '</button></div>';
    }).join('') : '<div class="empty">' + esc(t('no_sips')) + '</div>';
  };

  AF.bubbles = function () {
    var wrap = $('#bubbles'), svg = $('#glass');
    if (!wrap || !svg) return;
    svg.classList.add('fast'); setTimeout(function () { svg.classList.remove('fast'); }, 1500);
    var h = wrap.clientHeight || 280;
    for (var i = 0; i < 16; i++) {
      (function (i) {
        var b = document.createElement('i');
        var sz = 4 + Math.random() * 7;
        b.style.cssText = 'left:' + (36 + Math.random() * 28).toFixed(1) + '%;width:' + sz.toFixed(1) + 'px;height:' + sz.toFixed(1) +
          'px;--dist:' + (-(h * (0.35 + Math.random() * 0.4))).toFixed(0) + 'px;animation-delay:' + (i * 55) + 'ms;--dx:' + ((Math.random() - 0.5) * 24).toFixed(0) + 'px';
        wrap.appendChild(b);
        setTimeout(function () { if (b.parentNode) b.parentNode.removeChild(b); }, 1700 + i * 55);
      })(i);
    }
  };

  AF.drink = function (ml, silent) {
    var r = AF.addWater(ml);
    AF.vibrate(35);
    var before = r.key;
    AF.updateHome(); AF.renderHeader(); AF.bubbles();
    AF.reschedule();
    if (!silent) {
      AF.toast({
        icon: '💧', title: t('added', { n: ml }),
        actions: [{ label: t('undo'), fn: function () { AF.removeEntry(r.key, r.entry); AF.updateHome(); AF.renderHeader(); AF.reschedule(); } }]
      });
    }
    var today = AF.today();
    if (AF.sum(AF.iso(today)) >= AF.targetFor(today) && AF.sum(AF.iso(today)) - ml < AF.targetFor(today)) {
      setTimeout(function () { AF.toast({ icon: '🎉', title: t('pace_goal') }); }, 700);
    }
  };
  AF.doDrank = function () { AF.drink(AF.GLASS); };

  /* =====================================================================
     CLOCK
     ===================================================================== */
  function modeSeg(cls) {
    return '<div class="seg modes ' + (cls || '') + '">' + ['flip', 'digital', 'analog'].map(function (m) {
      return '<button class="' + (AF.S.clockMode === m ? 'on' : '') + '" data-act="mode" data-mode="' + m + '">' + esc(t(m)) + '</button>';
    }).join('') + '</div>';
  }

  AF.buildClock = function () {
    var S = AF.S;
    inner('clock').innerHTML =
      '<div class="clk-top"><span class="dot"></span><span class="lbl">' + esc(t('current_time')) + '</span><div class="clk-btns">' +
      '<button class="icon-btn" data-act="sound" aria-label="Sound">' + ic(S.sound ? 'volume' : 'volume-off') + '</button>' +
      '<button class="icon-btn txt" data-act="h24">' + esc(S.h24 ? t('h24') : t('h12')) + '</button></div></div>' +
      modeSeg() +
      '<div class="clk-stage ' + S.clockMode + '">' + AF.clockView('clk', S.clockMode) + '</div>' +
      '<div class="clk-date" id="clk-date"></div>' +
      '<div class="pill-info" id="clk-alarm"></div>' +
      '<div class="card next-glass"><span>' + esc(t('next_glass')) + '</span><b id="clk-next">--:--:--</b></div>';
    AF.updateClockText();
  };
  AF.updateClockText = function () {
    var d = $('#clk-date'); if (!d) return;
    d.textContent = AF.fmtDate(new Date(), 'long');
    var na = AF.nextAlarmAt();
    $('#clk-alarm').textContent = na ? t('next_alarm', { t: AF.fmtTs(na.t) }) : t('no_alarms');
  };

  /* =====================================================================
     ALARMS
     ===================================================================== */
  AF.buildAlarms = function () {
    var list = AF.S.alarms.slice().sort(function (a, b) { return a.h * 60 + a.m - (b.h * 60 + b.m); });
    inner('alarms').innerHTML =
      '<div class="page-h"><h2>' + esc(t('alarms')) + '</h2><button class="btn primary sm" data-act="alarm-add">' + ic('plus') + ' ' + esc(t('add_alarm')) + '</button></div>' +
      (list.length ? list.map(function (a) {
        var tm = AF.fmtTime(a.h, a.m);
        var parts = tm.split(' ');
        return '<div class="card alarm ' + (a.on ? 'on' : 'off') + '" data-act="alarm-edit" data-id="' + a.id + '">' +
          '<div class="a-time">' + esc(parts[0]) + (parts[1] ? '<small>' + esc(parts[1]) + '</small>' : '') + '</div>' +
          '<div class="a-meta">' + esc(a.label || t('alarm_default')) + ' · ' + esc(t('every_day')) + '</div>' +
          '<button class="switch ' + (a.on ? 'on' : '') + '" data-act="alarm-toggle" data-id="' + a.id + '" aria-label="Toggle"><i></i></button></div>';
      }).join('') : '<div class="card empty-card">' + ic('bell') + '<p>' + esc(t('alarm_empty')) + '</p></div>');
  };

  AF.openAlarm = function (id) {
    var a = null;
    if (id) a = AF.S.alarms.filter(function (x) { return x.id === id; })[0];
    var label = a ? a.label || '' : '';
    var init = a ? AF.pad(a.h, 2) + '' + AF.pad(a.m, 2) : '0700';
    var ap = 'am', initDigits = init;
    if (a && !AF.S.h24) {
      ap = a.h >= 12 ? 'pm' : 'am';
      var h12 = a.h % 12 === 0 ? 12 : a.h % 12;
      initDigits = AF.pad(h12, 2) + AF.pad(a.m, 2);
    } else if (!a && !AF.S.h24) { initDigits = '0700'; }
    var api = AF.keypad({
      title: a ? t('edit_alarm') : t('add_alarm'),
      tabs: [{
        id: 'a', mode: 'time', init: initDigits.replace(/^0+(?=\d)/, ''), ap: ap, okLabel: t('save'),
        extra: function () {
          return '<input class="inp" id="alarm-label" maxlength="30" placeholder="' + esc(t('label')) + '" value="' + esc(label) + '">' +
            (a ? '<button class="btn danger sm" data-extra="del">' + ic('trash') + ' ' + esc(t('delete')) + '</button>' : '');
        },
        onExtra: function (el, ap2) {
          if (el.dataset.extra === 'del' && a) {
            AF.S.alarms = AF.S.alarms.filter(function (x) { return x.id !== a.id; });
            AF.save(); AF.buildAlarms(); AF.updateClockText(); AF.reschedule(); ap2.close();
          }
        },
        ok: function (v) {
          var lbl = label.trim();
          if (a) { a.h = v.h; a.m = v.m; a.label = lbl; a.on = true; }
          else {
            var nid = AF.S.nidSeq++; if (AF.S.nidSeq > 1990) AF.S.nidSeq = 1001;
            AF.S.alarms.push({ id: 'a' + Date.now().toString(36), nid: nid, h: v.h, m: v.m, label: lbl, on: true });
          }
          AF.save(); AF.buildAlarms(); AF.updateClockText(); AF.reschedule();
          AF.toast({ icon: '⏰', title: t('alarm_set', { t: AF.fmtTime(v.h, v.m) }) });
        }
      }]
    });
    api.sheet.addEventListener('input', function (e) { if (e.target.id === 'alarm-label') label = e.target.value; });
  };

  /* =====================================================================
     TIMER
     ===================================================================== */
  AF.buildTimer = function () {
    var S = AF.S, T = S.timer, running = !!T.endsAt, paused = !running && T.left != null;
    var presets = [5, 10, 15, 30, 45];
    inner('timer').innerHTML =
      modeSeg('small') +
      '<div class="card timer-card"><div class="tc-h"><span>' + esc(t('hydration_timer')) + '</span><em id="hyd-at"></em></div>' +
      '<div class="tc-label">' + esc(t('next_glass')) + '</div>' + AF.cdView('cd-h', S.clockMode) + '</div>' +
      '<div class="card timer-card"><div class="tc-h"><span>' + esc(t('custom_timer')) + '</span></div>' + AF.cdView('cd-t', S.clockMode) +
      '<div class="chips">' + presets.map(function (m) {
        return '<button class="chip-b ' + (T.dur === m * 60 ? 'on' : '') + '" data-act="timer-preset" data-m="' + m + '">' + esc(t('min' + m)) + '</button>';
      }).join('') + '<button class="chip-b" data-act="timer-custom">' + ic('plus') + ' ' + esc(t('custom')) + '</button></div>' +
      '<div class="t-ctrl"><button class="btn primary grow" data-act="timer-toggle">' + ic(running ? 'pause' : 'play') + ' ' + esc(running ? t('pause') : paused ? t('resume') : t('start')) + '</button>' +
      '<button class="btn ghost" data-act="timer-reset">' + ic('reset') + ' ' + esc(t('reset')) + '</button></div></div>';
    AF.updateTimers();
  };
  AF.updateTimers = function () {
    if (!$('#cd-h') && !$('#cd-h-w')) return;
    var now = Date.now(), S = AF.S, mode = S.clockMode;
    var nx = AF.nextReminderAt(now);
    var hs = nx ? Math.max(0, Math.ceil((nx - now) / 1000)) : 0;
    AF.cdUpdate('cd-h', mode, hs, AF.interval() * 60);
    var at = $('#hyd-at'); if (at) at.textContent = nx ? AF.fmtTs(nx) : t('no_reminder');
    AF.cdUpdate('cd-t', mode, AF.timerLeftSec(now), S.timer.dur);
    var cl = $('#clk-next'); if (cl) {
      var x = AF.pad(Math.floor(hs / 3600)) + ':' + AF.pad(Math.floor((hs % 3600) / 60)) + ':' + AF.pad(hs % 60);
      cl.textContent = nx ? x : '--:--:--';
    }
  };

  /* =====================================================================
     SCHEDULE
     ===================================================================== */
  function activeDows() {
    return Object.keys(AF.S.days).map(Number).sort(function (a, b) { return ((a + 6) % 7) - ((b + 6) % 7); });
  }
  function dayCard(date, ctx) {
    var iso = AF.iso(date), dow = date.getDay(), cfg = AF.S.days[dow] || { rem: [] };
    var logged = AF.sum(iso), target = AF.targetFor(date), pct = Math.min(100, (logged / target) * 100);
    var isToday = iso === AF.iso(AF.today());
    var rem = (cfg.rem || []).length;
    return '<div class="card day' + (isToday ? ' today' : '') + (logged >= target ? ' done' : '') + '" data-act="day-open" data-iso="' + iso + '">' +
      '<div class="d-top"><div><div class="d-name">' + esc(AF.dayName(dow)) + (isToday ? '<em>' + esc(t('today')) + '</em>' : '') + '</div>' +
      '<div class="d-date">' + esc(AF.fmtDate(date, 'day')) + '</div></div>' +
      '<button class="icon-btn sm del" data-act="day-del" data-iso="' + iso + '" data-ctx="' + ctx + '" aria-label="Delete">' + ic('trash') + '</button></div>' +
      '<div class="d-bar"><i style="width:' + pct.toFixed(1) + '%"></i></div>' +
      '<div class="d-meta"><span><b>' + AF.n(logged) + '</b> / ' + AF.n(target) + ' ' + esc(t('ml')) + '</span>' +
      (rem ? '<span class="rem">🔔 ' + (rem === 1 ? esc(t('reminder_1')) : esc(t('reminders_n', { n: rem }))) + '</span>' : '') + '</div></div>';
  }

  function weeklyDates() {
    var today = AF.today(), tk = (today.getDay() + 6) % 7;
    return activeDows().map(function (dow) {
      var k = (dow + 6) % 7;
      return { dow: dow, off: (k - tk + 7) % 7 };
    }).sort(function (a, b) { return a.off - b.off; }).map(function (x) { return AF.addDays(today, x.off); });
  }

  function monthModel() {
    var today = AF.today(), days = [], title;
    if (AF.isAm()) {
      var e = AF.toEth(today);
      var idx = e.y * 13 + (e.m - 1) + AF.ui.monthOff;
      var y = Math.floor(idx / 13), m = (idx % 13 + 13) % 13 + 1;
      var len = AF.ethMonthLen(y, m);
      for (var d = 1; d <= len; d++) days.push({ date: AF.ethToDate(y, m, d), n: d });
      title = AF.MONTHS.am[m - 1] + ' ' + y;
    } else {
      var base = new Date(today.getFullYear(), today.getMonth() + AF.ui.monthOff, 1, 12, 0, 0);
      var last = new Date(base.getFullYear(), base.getMonth() + 1, 0).getDate();
      for (var g = 1; g <= last; g++) days.push({ date: new Date(base.getFullYear(), base.getMonth(), g, 12, 0, 0), n: g });
      title = AF.MONTHS.en[base.getMonth()] + ' ' + base.getFullYear();
    }
    var weeks = [[0, 7], [7, 14], [14, 21], [21, days.length]].map(function (r) { return days.slice(r[0], r[1]); });
    return { title: title, weeks: weeks };
  }

  AF.buildSchedule = function () {
    var tab = AF.ui.schedTab, html = '';
    html += '<div class="page-h"><h2>' + esc(t('schedule')) + '</h2></div>' +
      '<div class="seg"><button class="' + (tab === 'weekly' ? 'on' : '') + '" data-act="sched-tab" data-tab="weekly">' + esc(t('weekly')) + '</button>' +
      '<button class="' + (tab === 'monthly' ? 'on' : '') + '" data-act="sched-tab" data-tab="monthly">' + esc(t('monthly')) + '</button></div>' +
      '<p class="hint">' + esc(t('tap_hint')) + '</p>';
    if (tab === 'weekly') {
      html += weeklyDates().map(function (d) { return dayCard(d, 'weekly'); }).join('');
      html += '<button class="btn ghost wide add-day" data-act="add-day">' + ic('plus') + ' ' + esc(t('add_day')) + '</button>';
    } else {
      var mm = monthModel(), names = ['week1', 'week2', 'week3', 'week4'];
      html += '<div class="month-nav"><button class="icon-btn" data-act="month" data-d="-1">' + ic('chev-l') + '</button><b>' + esc(mm.title) + '</b><button class="icon-btn" data-act="month" data-d="1">' + ic('chev-r') + '</button></div>';
      mm.weeks.forEach(function (w, i) {
        if (!w.length) return;
        var act = w.filter(function (x) { return AF.S.days[x.date.getDay()] && !AF.S.hidden[AF.iso(x.date)]; });
        var sumL = 0, sumT = 0;
        act.forEach(function (x) { sumL += AF.sum(AF.iso(x.date)); sumT += AF.targetFor(x.date); });
        var pct = sumT ? Math.min(100, (sumL / sumT) * 100) : 0;
        var open = !!AF.ui.openWeeks[mm.title + i];
        html += '<div class="card week' + (open ? ' open' : '') + '" data-key="' + esc(mm.title + i) + '">' +
          '<div class="w-head" data-act="week-toggle"><div><b>' + esc(t(names[i])) + '</b><span>' + esc(AF.fmtDate(w[0].date, 'day')) + ' – ' + esc(AF.fmtDate(w[w.length - 1].date, 'day')) + ' · ' +
          esc(act.length === 1 ? t('day_1') : t('days_n', { n: act.length })) + '</span></div>' +
          '<div class="w-sum"><b>' + AF.n(sumL) + '</b> / ' + AF.n(sumT) + '<small>' + esc(t('ml')) + '</small></div><span class="chev">' + ic('chev-d') + '</span></div>' +
          '<div class="d-bar"><i style="width:' + pct.toFixed(1) + '%"></i></div>' +
          '<div class="w-body"><div class="w-inner">' +
          (act.length ? act.map(function (x) { return dayCard(x.date, 'monthly'); }).join('') : '<div class="empty">' + esc(t('no_days_week')) + '</div>') +
          '</div></div></div>';
      });
    }
    inner('schedule').innerHTML = html;
  };

  AF.openDay = function (iso) {
    var date = AF.fromISO(iso), dow = date.getDay();
    var cfg = AF.S.days[dow] || (AF.S.days[dow] = { target: null, rem: [] });
    var name = AF.dayName(dow) + ' · ' + AF.fmtDate(date, 'day');
    AF.keypad({
      title: name,
      tabs: [
        {
          id: 'add', label: t('add_water'), mode: 'ml', quick: [150, 250, 500], okLabel: t('add'),
          ok: function (v) {
            var ts = iso === AF.iso(new Date()) ? Date.now() : new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12, 0, 0).getTime();
            AF.addWater(v, date, ts); AF.afterScheduleChange();
            AF.toast({ icon: '💧', title: t('added', { n: v }) });
          }
        },
        {
          id: 'target', label: t('daily_target'), mode: 'ml', init: String(AF.targetFor(date)), okLabel: t('save'),
          ok: function (v) { cfg.target = v === AF.goal() ? null : v; AF.save(); AF.afterScheduleChange(); }
        },
        {
          id: 'rem', label: t('reminder'), mode: 'time', init: '', okLabel: t('add'),
          extra: function () {
            var r = cfg.rem || [];
            return r.length ? '<div class="rem-list">' + r.map(function (x, i) {
              var mm = AF.parseHM(x);
              return '<button class="chip-b rem-chip" data-extra="' + i + '">🔔 ' + esc(AF.fmtTime(Math.floor(mm / 60), mm % 60)) + ' ' + ic('x') + '</button>';
            }).join('') + '</div>' : '';
          },
          onExtra: function (el, api) {
            cfg.rem.splice(+el.dataset.extra, 1); AF.save(); AF.afterScheduleChange(); api.draw();
          },
          ok: function (v) {
            var s = AF.hm(v.h * 60 + v.m);
            if (!cfg.rem) cfg.rem = [];
            if (cfg.rem.indexOf(s) < 0 && cfg.rem.length < 9) cfg.rem.push(s);
            cfg.rem.sort(); AF.save(); AF.afterScheduleChange();
          }
        }
      ]
    });
  };

  AF.afterScheduleChange = function () {
    AF.buildSchedule(); AF.updateHome(); AF.renderHeader(); AF.reschedule();
    var p = AF.page; if (p === 'home') AF.buildHome();
  };

  AF.openDelete = function (iso, ctx) {
    var date = AF.fromISO(iso), dow = date.getDay();
    var choice = null;
    var m = AF.modal('', { cls: 'del' });
    function draw() {
      m.set('<div class="sheet-h"><h3>' + esc(t('del_title')) + ' · ' + esc(AF.dayName(dow)) + '</h3><button class="icon-btn sm" data-x="1">' + ic('x') + '</button></div>' +
        '<label class="check ' + (choice === 'logs' ? 'on' : '') + '" data-c="logs"><i>' + ic('check') + '</i><span>' + esc(t('del_logs')) + '</span></label>' +
        '<label class="check ' + (choice === 'box' ? 'on' : '') + '" data-c="box"><i>' + ic('check') + '</i><span>' + esc(ctx === 'monthly' ? t('del_hide') : t('del_box')) + '</span></label>' +
        '<div class="row"><button class="btn ghost grow" data-x="1">' + esc(t('cancel')) + '</button><button class="btn danger grow" data-ok="1" ' + (choice ? '' : 'disabled') + '>' + esc(t('del_confirm')) + '</button></div>');
    }
    draw();
    m.sheet.addEventListener('click', function (e) {
      var el = e.target.closest('[data-c],[data-x],[data-ok]');
      if (!el) return;
      if (el.dataset.x) return m.close();
      if (el.dataset.c) { choice = el.dataset.c; draw(); return; }
      if (el.dataset.ok && choice) {
        if (choice === 'logs') {
          delete AF.S.logs[iso];
          if (AF.S.days[dow]) AF.S.days[dow].rem = [];
        } else if (ctx === 'monthly') {
          AF.S.hidden[iso] = true; delete AF.S.logs[iso];
        } else {
          delete AF.S.days[dow]; delete AF.S.logs[iso];
        }
        AF.save(); m.close(); AF.afterScheduleChange();
      }
    });
  };

  AF.openAddDay = function () {
    var free = [1, 2, 3, 4, 5, 6, 0].filter(function (d) { return !AF.S.days[d]; });
    var m = AF.modal('<div class="sheet-h"><h3>' + esc(free.length ? t('pick_day') : t('add_day')) + '</h3><button class="icon-btn sm" data-x="1">' + ic('x') + '</button></div>' +
      (free.length ? '<div class="day-pick">' + free.map(function (d) { return '<button class="btn ghost" data-d="' + d + '">' + esc(AF.dayName(d)) + '</button>'; }).join('') + '</div>'
        : '<p class="hint">' + esc(t('no_days_left')) + '</p>'), { cls: 'del' });
    m.sheet.addEventListener('click', function (e) {
      var el = e.target.closest('[data-d],[data-x]');
      if (!el) return;
      if (el.dataset.x) return m.close();
      AF.S.days[+el.dataset.d] = { target: null, rem: [] };
      Object.keys(AF.S.hidden).forEach(function (k) { if (AF.fromISO(k).getDay() === +el.dataset.d) delete AF.S.hidden[k]; });
      AF.save(); m.close(); AF.afterScheduleChange();
    });
  };

  /* =====================================================================
     SETTINGS
     ===================================================================== */
  AF.openSettings = function () {
    var m = AF.modal('', { cls: 'settings' });
    function row(label, val, act, extra) {
      return '<button class="set-row" data-s="' + act + '"><span>' + esc(label) + '</span><b>' + val + '</b></button>' + (extra || '');
    }
    function tm(s) { var mm = AF.parseHM(s); return esc(AF.fmtTime(Math.floor(mm / 60), mm % 60)); }
    var bg = null;
    function pill(ok, txt) { return '<span class="bg-pill' + (ok ? ' ok' : '') + '">' + (ok ? '&#10003;' : '!') + ' ' + esc(txt) + '</span>'; }
    function bgCard() {
      var native = !!AF.AR;
      return '<div class="bg-card"><h4>' + esc(t('bg_title')) + '</h4>' +
        (native ? '<div class="bg-status">' + pill(AF.nativeOK, t('bg_service')) + (bg ? pill(bg.notifications, t('bg_notif')) + pill(bg.battery, t('bg_batt')) : '') + '</div>' : '') +
        '<div class="bg-btns"><button class="btn primary full" data-s="test">' + ic('bell') + ' ' + esc(t('test_alarm')) + '</button>' +
        (native ? '<button class="btn ghost" data-s="bgn">' + esc(t('bg_notif')) + '</button><button class="btn ghost" data-s="bgb">' + esc(t('bg_batt')) + '</button>' +
        '<button class="btn ghost full" data-s="bga">' + esc(t('bg_auto')) + '</button>' : '') + '</div>' +
        '<p class="bg-note">' + esc(t('bg_note')) + '</p></div>';
    }
    function refreshBg() { AF.bgStatus().then(function (st) { bg = st; draw(); }); }
    function draw() {
      var S = AF.S;
      m.set('<div class="sheet-h"><h3>' + esc(t('settings')) + '</h3><button class="icon-btn sm" data-x="1">' + ic('x') + '</button></div>' +
        row(t('weight'), S.weight + ' kg', 'weight') +
        '<div class="set-row static"><span>' + esc(t('daily_goal')) + '</span><div class="seg tiny"><button class="' + (S.goalAuto ? 'on' : '') + '" data-s="goalauto">' + esc(t('auto_goal')) + '</button></div></div>' +
        row(S.goalAuto ? t('goal') + ' (auto)' : t('goal'), AF.n(AF.goal()) + ' ' + esc(t('ml')), 'goal') +
        row(t('wake_start'), tm(S.wakeStart), 'wake') + row(t('wake_end'), tm(S.wakeEnd), 'bed') +
        '<div class="set-row static"><span>' + esc(t('reminders')) + '</span><button class="switch ' + (S.remind ? 'on' : '') + '" data-s="remind"><i></i></button></div>' +
        '<div class="set-row static"><span>' + esc(t('snooze_len')) + '</span><div class="seg tiny">' + [5, 10, 15].map(function (x) {
          return '<button class="' + (S.snoozeMin === x ? 'on' : '') + '" data-s="snz" data-v="' + x + '">' + x + '</button>';
        }).join('') + '</div></div>' +
        '<p class="hint">' + esc(t('quiet_note')) + '</p>' + bgCard());
    }
    draw(); refreshBg();
    function changed() { AF.save(); AF.renderAll(); AF.reschedule(); draw(); }
    function timeInit(s) {
      var mm = AF.parseHM(s), h = Math.floor(mm / 60), min = mm % 60;
      if (AF.S.h24) return String(h * 100 + min);
      var h12 = h % 12 === 0 ? 12 : h % 12;
      return String(h12 * 100 + min);
    }
    function pickTime(key, title) {
      var mm = AF.parseHM(AF.S[key]);
      AF.keypad({
        title: title, tabs: [{
          id: 'x', mode: 'time', init: timeInit(AF.S[key]), ap: Math.floor(mm / 60) >= 12 ? 'pm' : 'am', okLabel: t('save'),
          ok: function (v) { AF.S[key] = AF.hm(v.h * 60 + v.m); changed(); }
        }]
      });
    }
    m.sheet.addEventListener('click', function (e) {
      var el = e.target.closest('[data-s],[data-x]');
      if (!el) return;
      if (el.dataset.x) return m.close();
      var S = AF.S;
      switch (el.dataset.s) {
        case 'weight': AF.keypad({ title: t('weight'), tabs: [{ id: 'w', mode: 'int', unit: 'kg', prompt: t('weight'), init: String(S.weight), okLabel: t('save'), ok: function (v) { S.weight = Math.min(250, Math.max(20, v)); changed(); } }] }); break;
        case 'goalauto': S.goalAuto = !S.goalAuto; if (!S.goalAuto) S.goalMl = AF.goal(); changed(); break;
        case 'goal':
          if (S.goalAuto) { S.goalAuto = false; S.goalMl = AF.goal(); }
          AF.keypad({ title: t('daily_goal'), tabs: [{ id: 'g', mode: 'ml', init: String(AF.goal()), okLabel: t('save'), ok: function (v) { S.goalMl = Math.min(8000, Math.max(500, v)); S.goalAuto = false; changed(); } }] });
          break;
        case 'wake': pickTime('wakeStart', t('wake_start')); break;
        case 'bed': pickTime('wakeEnd', t('wake_end')); break;
        case 'remind': S.remind = !S.remind; changed(); break;
        case 'snz': S.snoozeMin = +el.dataset.v; changed(); break;
        case 'test': AF.testRing(); m.close(); break;
        case 'bgn': AF.openBg('notifications'); break;
        case 'bgb': AF.openBg('battery'); break;
        case 'bga': AF.openBg('autostart'); break;
      }
    });
  };

  /* =====================================================================
     RING (reminder / alarm / timer popup)
     ===================================================================== */
  var ringHandle = null;
  AF.doSnooze = function (kind, aid, title, body) {
    var mins = AF.S.snoozeMin;
    AF.S.snooze = { at: Date.now() + mins * 60000, kind: kind === 'timer' ? 'alarm' : kind, aid: aid || null, title: title || t('water_time'), body: body || '' };
    AF.save(); AF.reschedule();
    AF.toast({ icon: '💤', title: t('snoozed', { n: mins }) });
  };
  AF.fire = function (kind, title, body, aid, fromOS) {
    if (ringHandle) { try { ringHandle.close(); } catch (e) {} ringHandle = null; }
    AF.lastRing = { kind: kind, ts: Date.now() };
    if (!AF.isNative) AF.startChimeLoop();
    AF.vibrate([300, 100, 300, 100, 400]);
    var icon = kind === 'alarm' ? '⏰' : kind === 'timer' ? '⏳' : '💧';
    var actions;
    if (kind === 'reminder') {
      actions = [
        { label: '🥛 ' + t('drank', { n: AF.GLASS }), cls: 'primary', fn: function () { AF.stopChimeLoop(); AF.clearDelivered(); AF.doDrank(); } },
        { label: '💤 ' + t('snooze'), fn: function () { AF.stopChimeLoop(); AF.clearDelivered(); AF.doSnooze(kind, aid, title, body); } }
      ];
    } else if (kind === 'alarm') {
      actions = [
        { label: '💤 ' + t('snooze'), fn: function () { AF.stopChimeLoop(); AF.clearDelivered(); AF.doSnooze(kind, aid, title, body); } },
        { label: t('dismiss'), cls: 'primary', fn: function () { AF.stopChimeLoop(); AF.clearDelivered(); } }
      ];
    } else {
      actions = [{ label: t('ok'), cls: 'primary', fn: function () { AF.stopChimeLoop(); AF.clearDelivered(); AF.buildTimer(); } }];
    }
    ringHandle = AF.toast({
      ring: true, persist: true, icon: icon, title: title, body: body, actions: actions,
      onClose: function () { AF.stopChimeLoop(); },
      onSwipe: function () { AF.clearDelivered(); }
    });
    if (kind === 'timer') { AF.buildTimer(); }
  };

  /* =====================================================================
     ACTIONS
     ===================================================================== */
  AF.act = {
    nav: function (el) { AF.go(el.dataset.page); },
    theme: function () { AF.S.theme = AF.S.theme === 'dark' ? 'light' : 'dark'; AF.save(); AF.applyTheme(); AF.renderHeader(); },
    lang: function () { AF.S.lang = AF.S.lang === 'en' ? 'am' : 'en'; AF.save(); AF.registerActions(); AF.renderAll(); AF.reschedule(); },
    settings: function () { AF.openSettings(); },
    drink: function (el) { AF.drink(+el.dataset.ml); },
    'custom-water': function () {
      AF.keypad({ title: t('custom'), tabs: [{ id: 'c', mode: 'ml', quick: [150, 250, 330, 500], okLabel: t('add'), ok: function (v) { AF.drink(v); } }] });
    },
    'sip-del': function (el) {
      var key = AF.iso(AF.today()), e = AF.entries(key)[+el.dataset.i];
      if (e) { AF.removeEntry(key, e); AF.updateHome(); AF.renderHeader(); AF.reschedule(); }
    },
    mode: function (el) { AF.S.clockMode = el.dataset.mode; AF.save(); AF.buildClock(); AF.buildTimer(); },
    sound: function () { AF.S.sound = !AF.S.sound; AF.save(); AF.buildClock(); if (!AF.S.sound) AF.stopChimeLoop(); },
    h24: function () { AF.S.h24 = !AF.S.h24; AF.save(); AF.buildClock(); AF.buildAlarms(); AF.reschedule(); },
    'alarm-add': function () { AF.openAlarm(null); },
    'alarm-edit': function (el) { AF.openAlarm(el.dataset.id); },
    'alarm-toggle': function (el) {
      var a = AF.S.alarms.filter(function (x) { return x.id === el.dataset.id; })[0];
      if (a) { a.on = !a.on; AF.save(); AF.buildAlarms(); AF.updateClockText(); AF.reschedule(); }
    },
    'timer-preset': function (el) { var T = AF.S.timer; T.dur = +el.dataset.m * 60; T.endsAt = null; T.left = null; AF.save(); AF.reschedule(); AF.buildTimer(); },
    'timer-custom': function () {
      var d = AF.S.timer.dur, init = String(Math.floor(d / 3600) * 10000 + Math.floor((d % 3600) / 60) * 100 + (d % 60));
      AF.keypad({ title: t('custom_timer'), tabs: [{ id: 'd', mode: 'dur', init: init === '0' ? '' : init, okLabel: t('save'), ok: function (v) { var T = AF.S.timer; T.dur = v; T.endsAt = null; T.left = null; AF.save(); AF.reschedule(); AF.buildTimer(); } }] });
    },
    'timer-toggle': function () {
      var T = AF.S.timer, now = Date.now();
      if (T.endsAt) { T.left = Math.max(0, T.endsAt - now); T.endsAt = null; }
      else { T.endsAt = now + (T.left != null ? T.left : T.dur * 1000); T.left = null; }
      AF.save(); AF.reschedule(); AF.buildTimer();
    },
    'timer-reset': function () { var T = AF.S.timer; T.endsAt = null; T.left = null; AF.save(); AF.reschedule(); AF.buildTimer(); },
    'sched-tab': function (el) { AF.ui.schedTab = el.dataset.tab; AF.buildSchedule(); },
    month: function (el) { AF.ui.monthOff += +el.dataset.d; AF.buildSchedule(); },
    'week-toggle': function (el) {
      var card = el.closest('.week'); card.classList.toggle('open');
      AF.ui.openWeeks[card.dataset.key] = card.classList.contains('open');
    },
    'day-open': function (el) { AF.openDay(el.dataset.iso); },
    'day-del': function (el) { AF.openDelete(el.dataset.iso, el.dataset.ctx); },
    'add-day': function () { AF.openAddDay(); }
  };
})();

/* AquaFlow bootstrap */
(function () {
  var AF = (window.AF = window.AF || {});
  var $ = AF.$;
  var lastIso = '', lastMin = -1, lastPace = 0;

  AF.renderAll = function () {
    AF.applyTheme();
    AF.renderHeader();
    AF.renderNav();
    AF.buildHome();
    AF.buildClock();
    AF.buildAlarms();
    AF.buildTimer();
    AF.buildSchedule();
  };
  AF.refresh = function () {
    AF.renderHeader(); AF.updateHome(); AF.buildAlarms(); AF.buildTimer(); AF.updateClockText();
  };
  AF.onPageShown = function (p) {
    if (p === 'home') AF.updateHome();
    if (p === 'clock') AF.updateClockText();
    if (p === 'timer') AF.buildTimer();
    if (p === 'schedule') AF.buildSchedule();
  };

  function tick() {
    var now = Date.now(), d = new Date(now), S = AF.S, T = S.timer;

    AF.fallbackTick(now);

    if (T.endsAt && now >= T.endsAt) {
      var endedAt = T.endsAt;
      T.endsAt = null; T.left = null; AF.save();
      AF.buildTimer();
      setTimeout(function () {
        if (!AF.lastRing || AF.lastRing.kind !== 'timer' || AF.lastRing.ts < endedAt - 1000) {
          AF.fire('timer', '⏳ ' + AF.t('timer_done'), AF.t('timer_done_body'), null);
        }
      }, 2500);
    }

    var iso = AF.iso(d);
    if (lastIso && iso !== lastIso) { AF.renderAll(); AF.reschedule(); }
    lastIso = iso;

    if (d.getMinutes() !== lastMin) {
      lastMin = d.getMinutes();
      AF.renderHeader();
      if (AF.page === 'clock') AF.updateClockText();
    }
    if (now - lastPace > 20000) { lastPace = now; AF.updateHome(); }

    if (AF.page === 'clock' && S.clockMode !== 'analog') AF.clockUpdate('clk', S.clockMode, d);
    if (AF.page === 'clock' || AF.page === 'timer') AF.updateTimers();
  }

  function frame() {
    if (AF.page === 'clock' && AF.S.clockMode === 'analog' && !document.hidden) AF.clockUpdate('clk', 'analog', new Date());
    requestAnimationFrame(frame);
  }

  async function onResume() {
    if (document.hidden) return;
    var added = await AF.consumeWidgetPending();
    AF.checkRing();
    var T = AF.S.timer;
    if (T.endsAt && T.endsAt <= Date.now()) { T.endsAt = null; T.left = null; AF.save(); }
    AF.renderAll();
    AF.reschedule();
    if (added > 0) AF.toast({ icon: '💧', title: AF.t('added', { n: added }) });
  }

  function init() {
    AF.applyTheme();
    AF.renderAll();

    AF.PAGES.forEach(function (p) {
      var el = $('#p-' + p);
      el.classList.add(p === AF.page ? 'active' : 'after');
      AF.bounce(el, el.querySelector('.page-in'));
    });

    document.addEventListener('click', function (e) {
      var el = e.target.closest('[data-act]');
      if (!el) return;
      var fn = AF.act[el.dataset.act];
      if (fn) fn(el, e);
    });
    document.addEventListener('contextmenu', function (e) { e.preventDefault(); });

    document.addEventListener('visibilitychange', onResume);
    window.addEventListener('focus', onResume);

    setInterval(tick, 250);
    requestAnimationFrame(frame);

    (async function () {
      try { await AF.nativeInit(); } catch (e) {}
      await AF.consumeWidgetPending();
      AF.checkRing();
      AF.renderAll();
      AF.reschedule();
    })();
  }

  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { requestAnimationFrame(init); });
  else if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
