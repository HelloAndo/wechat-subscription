export const userAgent = (() => {
  var A = {}
    , t = window.navigator.userAgent
    , e = {
      Trident: t.indexOf("Trident") > -1 || t.indexOf("NET CLR") > -1,
      Presto: t.indexOf("Presto") > -1,
      WebKit: t.indexOf("AppleWebKit") > -1,
      Gecko: t.indexOf("Gecko/") > -1,
      Safari: t.match(/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i) || t.match(/version\/([\w\.]+).+?(mobile\s?safari|safari)/i),
      Chrome: t.indexOf("Chrome") > -1 || t.match(/((?:android.+)crmo|crios)\/([\w\.]+)/i),
      IE: t.match(/(?:ms|\()(ie)\s([\w\.]+)/i) || t.match(/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i),
      Edge: t.match(/(edge)\/((\d+)?[\w\.]+)/i),
      Firefox: t.indexOf("Firefox") > -1 || t.match(/fxios\/([\w\.-]+)/i),
      "Firefox Focus": t.indexOf("Focus") > -1,
      Chromium: t.indexOf("Chromium") > -1,
      Opera: t.indexOf("Opera") > -1 || t.match(/\s(opr)\/([\w\.]+)/i),
      Vivaldi: t.indexOf("Vivaldi") > -1,
      Yandex: t.match(/(yabrowser)\/([\w\.]+)/i),
      Kindle: t.match(/(kindle)\/([\w\.]+)/i),
      360: t.indexOf("360EE") > -1 || t.indexOf("360SE") > -1,
      UC: t.match(/(uc\s?browser)[\/\s]?([\w\.]+)/i) || t.match(/ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i) || t.match(/(ucbrowser)\/([\w\.]+)/i) || t.match(/juc.+(ucweb)[\/\s]?([\w\.]+)/i),
      QQBrowser: t.match(/m?(qqbrowser)[\/\s]?([\w\.]+)/i),
      Baidu: t.indexOf("Baidu") > -1 || t.indexOf("BIDUBrowser") > -1,
      Maxthon: t.indexOf("Maxthon") > -1,
      Sogou: t.indexOf("MetaSr") > -1 || t.indexOf("Sogou") > -1,
      LBBROWSER: t.indexOf("LBBROWSER") > -1,
      XiaoMi: t.match(/xiaomi\/miuibrowser\/([\w\.]+)/i),
      Wechat: t.match(/(micromessenger)\/([\w\.]+)/i),
      Taobao: t.indexOf("AliApp(TB") > -1,
      Alipay: t.indexOf("AliApp(AP") > -1,
      Weibo: t.match(/Weibo\s*\((.*?)\)/i),
      QQ: t.indexOf("QQ/") > -1,
      Windows: t.match(/microsoft\s(windows)\s(vista|xp)/i) || t.match(/(windows)\snt\s6\.2;\s(arm)/i),
      "Mac OS": t.match(/(mac\sos\sx)\s?([\w\s\.]+\w)*/i) || t.match(/(macintosh|mac(?=_powerpc)\s)/i),
      Android: t.indexOf("Android") > -1,
      "Windows Phone": t.indexOf("IEMobile") > -1,
      iOS: t.match(/(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i),
      Mobile: t.indexOf("Mobile") > -1 || t.indexOf("iPhone") > -1 || t.indexOf("480") > -1,
      Tablet: t.indexOf("Tablet") > -1 || t.indexOf("Pad") > -1 || t.indexOf("Nexus 7") > -1
  }
    , i = {
      engine: ["WebKit", "Trident", "Gecko", "Presto"],
      browser: ["Chrome", "Safari", "Edge", "IE", "Firefox", "Firefox Focus", "Chromium", "Opera", "Vivaldi", "Yandex", "Kindle", "360", "UC", "QQBrowser", "QQ", "Baidu", "Maxthon", "Sogou", "LBBROWSER", "XiaoMi", "Wechat", "Taobao", "Alipay", "Weibo"],
      os: ["Windows", "Mac OS", "Android", "iOS", "Windows Phone"],
      device: ["Mobile", "Tablet"]
  };
  A.device = "PC";
  for (var o in i)
      for (var n = 0; n < i[o].length; n += 1) {
          var r = i[o][n];
          r && e[r] && (A[o] = r)
      }
  var a = {
      Windows: function() {
          var A = t.replace(/^.*Windows NT ([\d.]+);.*$/, "$1");
          return {
              6.4: "10",
              6.3: "8.1",
              6.2: "8",
              6.1: "7",
              "6.0": "Vista",
              5.2: "XP",
              5.1: "XP",
              "5.0": "2000"
          }[A] || A
      },
      "Mac OS": function() {
          return t.replace(/^.*Mac OS X ([\d_]+).*$/, "$1").replace(/_/g, ".")
      },
      Android: function() {
          return t.replace(/^.*Android ([\d.]+);.*$/, "$1")
      },
      iOS: function() {
          return t.replace(/^.*OS ([\d_]+) like.*$/, "$1").replace(/_/g, ".")
      },
      "Windows Phone": function() {
          return t.replace(/^.*Windows Phone( OS)? ([\d.]+);.*$/, "$2")
      }
  };
  A.osVersion = "",
  a[A.os] && (A.osVersion = a[A.os](),
  A.osVersion === t && (A.osVersion = ""));
  var s = {
      Safari: function() {
          return t.replace(/^.*Version\/([\d.]+).*$/, "$1")
      },
      Chrome: function() {
          return t.replace(/^.*Chrome\/([\d.]+).*$/, "$1").replace(/^.*CriOS\/([\d.]+).*$/, "$1")
      },
      IE: function() {
          return t.replace(/^.*MSIE ([\d.]+).*$/, "$1").replace(/^.*rv:([\d.]+).*$/, "$1")
      },
      Edge: function() {
          return t.replace(/^.*Edge\/([\d.]+).*$/, "$1")
      },
      Firefox: function() {
          return t.replace(/^.*Firefox\/([\d.]+).*$/, "$1").replace(/^.*FxiOS\/([\d.]+).*$/, "$1")
      },
      "Firefox Focus": function() {
          return t.replace(/^.*Focus\/([\d.]+).*$/, "$1")
      },
      Chromium: function() {
          return t.replace(/^.*Chromium\/([\d.]+).*$/, "$1")
      },
      Opera: function() {
          return t.replace(/^.*Opera\/([\d.]+).*$/, "$1").replace(/^.*OPR\/([\d.]+).*$/, "$1")
      },
      Vivaldi: function() {
          return t.replace(/^.*Vivaldi\/([\d.]+).*$/, "$1")
      },
      Yandex: function() {
          return t.replace(/^.*YaBrowser\/([\d.]+).*$/, "$1")
      },
      Kindle: function() {
          return t.replace(/^.*Version\/([\d.]+).*$/, "$1")
      },
      Maxthon: function() {
          return t.replace(/^.*Maxthon\/([\d.]+).*$/, "$1")
      },
      QQBrowser: function() {
          return t.replace(/^.*QQBrowser\/([\d.]+).*$/, "$1")
      },
      Baidu: function() {
          return t.replace(/^.*BIDUBrowser[\s\/]([\d.]+).*$/, "$1")
      },
      UC: function() {
          return t.replace(/^.*UC?Browser\/([\d.]+).*$/, "$1").replace(/juc.+(ucweb)[\/\s]?([\w\.]+)/i, "$1")
      },
      Sogou: function() {
          return t.replace(/^.*SE ([\d.X]+).*$/, "$1").replace(/^.*SogouMobileBrowser\/([\d.]+).*$/, "$1")
      },
      XiaoMi: function() {
          return t.replace(/^.*MiuiBrowser\/([\d.]+).*$/, "$1")
      },
      Wechat: function() {
          return t.replace(/^.*MicroMessenger\/([\d.]+).*$/, "$1")
      },
      Taobao: function() {
          return t.replace(/^.*AliApp\(TB\/([\d.]+).*$/, "$1")
      },
      Alipay: function() {
          return t.replace(/^.*AliApp\(AP\/([\d.]+).*$/, "$1")
      },
      Weibo: function() {
          var A = t.match(/__weibo__(\d+?.\d+?.\d+)(_*\w*)*__(.+)?__/);
          return !A || !A.length || A.length < 2 ? "" : A[1]
      },
      QQ: function() {
          return t.replace(/^.*QQ\/([\d.]+).*$/, "$1")
      }
  };
  return A.version = "",
    s[A.browser] && (A.version = s[A.browser](),
    A.version === t && (A.version = "")),
    "Edge" === A.browser 
      ? A.engine = "EdgeHTML" 
      : "Chrome" === A.browser && parseInt(A.version, 10) > 27 
        ? A.engine = "Blink" 
        : "Opera" === A.browser && parseInt(A.version, 10) > 12 
          ? A.engine = "Blink" 
          : "Yandex" === A.browser && (A.engine = "Blink"),
    A.versionCompare = function(A, t) {
        for (var e = A.indexOf("_") > -1 ? A.split("_") : A.split("."), i = t.indexOf("_") > -1 ? t.split("_") : t.split("."), o = Math.max(e.length, i.length), n = 0; n < o; n += 1) {
            var r = Number(e[n]) || 0
              , a = Number(i[n]) || 0;
            if (r > a)
                return 1;
            if (a > r)
                return -1
        }
        return 0
    },
    A
})()