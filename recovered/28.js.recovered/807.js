require(/*webcrack:missing*/"./7.js");
import * as r from /*webcrack:missing*/"./5.js";
var a = r;
function o(e) {
  return new a(t => {
    const n = new Image();
    n.onload = function () {
      n.onload = null;
      t(n);
    };
    n.src = e;
  });
}
import * as i from "./13.js";
import * as s from "./51.js";
import * as c from /*webcrack:missing*/"./0.js";
require(/*webcrack:missing*/"./19.js");
require(/*webcrack:missing*/"./64.js");
require("./397.js");
const u = function () {
  function e(e) {
    if (/cpu (?:iphone )?os (\d+_\d+)/.test(e)) {
      return parseFloat(RegExp.$1.replace("_", "."));
    } else {
      return 2;
    }
  }
  const t = {
    result: "Chrome",
    details: {
      Chrome: 5,
      Chromium: 0,
      _360SE: 0,
      _360EE: 0
    },
    sorted: ["Chrome", "360SE", "360EE", "Chromium"],
    exec: function (e) {
      const t = {
        Chrome: 5,
        Chromium: 0,
        _360SE: 0,
        _360EE: 0
      };
      const n = window.navigator.userAgent;
      if (/Chrome\/([\d.])+\sSafari\/([\d.])+$/.test(n)) {
        if (window.navigator.platform == "Win32") {
          if (!window.clientInformation.languages) {
            t._360SE += 8;
          }
          if (/zh/i.test(navigator.language)) {
            t._360SE += 3;
            t._360EE += 3;
          }
          if (window.clientInformation.languages) {
            const e = window.clientInformation.languages.length;
            if (e >= 3) {
              t.Chrome += 10;
              t.Chromium += 6;
            } else if (e == 2) {
              t.Chrome += 3;
              t.Chromium += 6;
              t._360EE += 6;
            } else if (e == 1) {
              t.Chrome += 4;
              t.Chromium += 4;
            }
          }
          for (var r in window.navigator.plugins) {
            if (window.navigator.plugins[r].filename == "np-mswmp.dll") {
              t._360SE += 20;
              t._360EE += 20;
            }
          }
          if (window.chrome.webstore) {
            if (Object.keys(window.chrome.webstore).length <= 1) {
              t._360SE += 7;
            } else if (Object.keys(window.chrome.webstore).length == 2) {
              t._360SE += 4;
              t.Chromium += 3;
            }
          } else {
            t._360SE += 20;
            t._360EE += 20;
          }
          if (window.navigator.plugins.length >= 30) {
            t._360EE += 7;
            t._360SE += 7;
            t.Chrome += 7;
          } else if (window.navigator.plugins.length < 30 && window.navigator.plugins.length > 10) {
            t._360EE += 3;
            t._360SE += 3;
            t.Chrome += 3;
          } else if (window.navigator.plugins.length <= 10) {
            t.Chromium += 6;
          }
        } else {
          t._360SE -= 50;
          t._360EE -= 50;
          if (/Linux/i.test(window.navigator.userAgent)) {
            t.Chromium += 5;
          }
        }
        let e;
        let n = 0;
        for (var r in window.navigator.plugins) {
          if (e = /^(.+) PDF Viewer$/.exec(window.navigator.plugins[r].name)) {
            if (e[1] == "Chrome") {
              t.Chrome += 6;
              t._360SE += 6;
              n = 1;
              break;
            }
            if (e[1] == "Chromium") {
              t.Chromium += 10;
              t._360EE += 6;
              n = 1;
              break;
            }
          }
        }
        if (!n) {
          t.Chromium += 9;
        }
      }
      const a = new Object();
      a.Chrome = t.Chrome;
      a.Chromium = t.Chromium;
      a["360SE"] = t._360SE;
      a["360EE"] = t._360EE;
      const o = [];
      for (const e in a) {
        o.push([e, a[e]]);
      }
      o.sort((e, t) => t[1] - e[1]);
      this.sorted = o;
      this.details = t;
      this.result = o[0][0];
      if (e == "result") {
        return o[0][0];
      } else if (e == "details") {
        return a;
      } else if (e == "sorted") {
        return o;
      } else {
        return undefined;
      }
    }
  };
  function n(e) {
    if (window.scrollMaxX !== undefined) {
      return "";
    }
    document.createElement("track");
    const n = window.navigator.appVersion;
    const r = window.external;
    if (r && "SEVersion" in r) {
      return "sougou";
    }
    if (r && "LiebaoGetVersion" in r) {
      return "liebao";
    }
    if (/QQBrowser/.test(n)) {
      return "qq";
    }
    if (/Maxthon/.test(n)) {
      return "maxthon";
    }
    if (/TaoBrowser/.test(n)) {
      return "taobao";
    }
    if (/BIDUBrowser/.test(n)) {
      return "baidu";
    }
    if (/UBrowser/.test(n)) {
      return "uc";
    }
    if (/\sOPR\//.test(n) || /Opera/.test(n) || window.navigator.vendor && window.navigator.vendor.indexOf("Opera") === 0) {
      return "opera";
    }
    const a = navigator.platform.toLowerCase();
    if (a.indexOf("mac") == 0 || a.indexOf("linux") == 0 || parseInt(e) > 86) {
      return "chrome";
    } else {
      return function () {
        const e = window.navigator.userAgent;
        try {
          t.exec();
          if (/Chrome\/([\d.])+\sSafari\/([\d.])+$/.test(e)) {
            return t.result;
          }
        } catch (e) {
          console.warn(e);
        }
      }() || "chrome";
    }
  }
  return function () {
    const t = {};
    const r = navigator.userAgent.toLowerCase();
    let a;
    if (a = r.match(/rv:([\d.]+)\) like gecko/)) {
      t.name = "ie";
      t.ie = a[1];
    } else if (a = r.match(/msie ([\d.]+)/)) {
      t.name = "ie";
      t.ie = a[1];
    } else if (a = r.match(/edg\/([\d.]+)/)) {
      t.name = "edge";
      t.edge = a[1];
    } else if (a = r.match(/firefox\/([\d.]+)/)) {
      t.name = "firefox";
      t.firefox = a[1];
    } else if (a = r.match(/chrome\/([\d.]+)/)) {
      t.name = "chrome";
      t.chrome = a[1];
      const e = n(t.chrome);
      if (e) {
        t.chrome += "(" + e + ")";
      }
    } else if (a = r.match(/opera.([\d.]+)/)) {
      t.name = "opera";
      t.opera = a[1];
    } else if (a = r.match(/version\/([\d.]+).*safari/)) {
      t.name = "safari";
      t.safari = a[1];
    } else {
      t.name = "unknown";
      t.unknow = 0;
    }
    const o = {};
    if (r.indexOf("iphone") > -1) {
      o.name = "iphone";
      o.iphone = e(r);
    } else if (r.indexOf("ipod") > -1) {
      o.name = "ipod";
      o.ipod = e(r);
    } else if (r.indexOf("ipad") > -1) {
      o.name = "ipad";
      o.ipad = e(r);
    } else if (r.indexOf("nokia") > -1) {
      o.name = "nokia";
      o.nokia = true;
    } else if (/android (\d+\.\d+)/.test(r)) {
      o.name = "android";
      o.android = parseFloat(RegExp.$1);
    } else if (r.indexOf("win") > -1) {
      o.name = "win";
      if (/win(?:dows )?([^do]{2})\s?(\d+\.\d+)?/.test(r)) {
        if (RegExp.$1 == "nt") {
          switch (RegExp.$2) {
            case "5.0":
              o.win = "2000";
              break;
            case "5.1":
              o.win = "XP";
              break;
            case "6.0":
              o.win = "Vista";
              break;
            case "6.1":
              o.win = "7";
              break;
            case "6.2":
              o.win = "8";
              break;
            case "6.3":
              o.win = "8.1";
              break;
            case "10.0":
              o.win = "10";
              break;
            default:
              o.win = "NT";
          }
        } else if (RegExp.$1 == "9x") {
          o.win = "ME";
        } else {
          o.win = RegExp.$1;
        }
      }
    } else if (r.indexOf("mac") > -1) {
      o.name = "mac";
    } else if (r.indexOf("linux") > -1) {
      o.name = "linux";
    }
    const i = o.name + (o[o.name] || "") + "|" + t.name + t[t.name];
    return {
      browser: t,
      system: o,
      isMobile: o.android || o.iphone || o.ios || o.ipad || o.ipod || o.nokia,
      string: i
    };
  }();
}();
let l = u.browser.name;
if (l === "chrome") {
  const e = u.browser.chrome;
  if (e.includes("(qq")) {
    l = "qq";
  } else if (e.includes("(sougou)")) {
    l = "sogou";
  } else if (c.G) {
    l = "360p";
  } else if (e.includes("(360EE")) {
    l = "360safe";
  }
}
import * as d from /*webcrack:missing*/"./162.js";
const g = [async function () {
  const {
    data: e,
    error: t
  } = await i.o.read();
  if (t || !e) {
    return;
  }
  const {
    list: n
  } = e;
  const r = [];
  if (!(n == null ? undefined : n.length)) {
    return;
  }
  n.map(e => r.push(...e.items));
  let s = r.map(e => e.conditionCode);
  s = [...new Set(s)];
  await a.all(s.map(e => o(`https://infinityicon.infinitynewtab.com/assets/weather/code_${Number(e)}.png`)));
}, async function () {
  try {
    const {
      data: e,
      error: t
    } = await i.g.read();
    if (t || !e) {
      return;
    }
    const n = e.list;
    await a.all(n.map(({
      logo: e
    }) => o(Object(s.b)(e))));
  } catch (e) {}
}, async function () {
  try {
    const {
      data: e,
      error: t
    } = await i.d.read();
    if (t || !e) {
      return;
    }
    const n = e.list;
    const r = [];
    n.forEach(({
      content: e
    }) => {
      const t = document.createElement("div");
      t.innerHTML = e;
      t.querySelectorAll("img").forEach(e => {
        r.push(o(e.getAttribute("src")));
      });
    });
    await a.all(r);
  } catch (e) {}
}, async function () {
  const e = ["error.png", "loading.png", "network-error.png", "success.png"].map(e => Object(s.a)(e, false));
  try {
    const t = [];
    t.push(...e.map(e => o(e)));
    await a.all(t);
  } catch (e) {}
}, async function () {
  const t = Object(s.a)("syncing.png", false);
  const n = Object(s.a)("sync_failed.png", false);
  const r = Object(s.a)("add_engine.gif", false);
  const u = Object(s.a)("setting/animate-default.png");
  const g = Object(s.a)("setting/animate-default-active.png");
  const f = Object(s.a)("setting/animate-bounce.png");
  const p = Object(s.a)("setting/animate-bounce-active.png");
  const m = Object(s.a)("setting/animate-easin.png");
  const h = Object(s.a)("setting/animate-easin-active.png");
  const w = Object(s.a)("setting/edit.svg", false);
  const y = Object(s.a)("back.svg", false);
  const b = Object(s.b)("https://infinityicon.infinitynewtab.com/assets/background_image/login-bg.png");
  let v = [];
  if (["360p", "360safe"].includes(l)) {
    v = [];
  } else if (["360safe", "qq", "sogou", "chrome", "safari", "edge", "firefox"].includes(l)) {
    v = [1, 2];
  }
  if (!c.C.isZh && ["360safe", "qq", "sogou"].includes(l)) {
    v = [];
  }
  if (v.length) {
    v = v.map(e => Object(s.b)(`https://infinityicon.infinitynewtab.com/assets/set_homepage/browser/${l}/${c.C.lang}-${e}.jpg`));
  }
  try {
    const {
      data: s,
      error: c
    } = await i.l.read();
    if (c) {
      return;
    }
    const l = (s == null ? undefined : s.userInfo)?.avatar || d.g;
    await a.all([l, t, n, r, u, f, m, y, g, p, h, w, b, ...v].filter(Boolean).map(e => o(e)));
  } catch (e) {}
}];
(function e() {
  requestIdleCallback(async t => {
    while (t.timeRemaining() > 0 && g.length > 0) {
      await g.pop()();
    }
    if (g.length > 0) {
      e();
    }
  });
})();