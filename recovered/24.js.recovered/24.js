var r = require("./5.js");
var o = r;
require(/*webcrack:missing*/"./7.js");
require("./19.js");
require("./64.js");
require("./257.js");
var i = require("./0.js");
var s = require("./6.js");
var a = require("./85.js");
var c = require("./379.js");
var u = require("./214.js");
const l = t => {
  if (t) {
    if (i.s) {
      window.open(t, "_self");
    } else {
      window.chrome.tabs.getCurrent(e => window.chrome.tabs.update(e.id, {
        url: t
      }, () => {
        if (chrome.runtime.lastError) {
          if (t.startsWith("http")) {
            window.open(t, "_self");
          } else {
            window.chrome.tabs.create({
              url: t
            });
          }
        }
      }));
    }
  }
};
const h = {
  randomId: u.c,
  group: (t, e) => {
    const n = [];
    const r = Math.ceil(t.length / e);
    for (let o = 0; o < r; o++) {
      if (o === r - 1) {
        n.push(t.slice(o * e, t.length));
      } else {
        n.push(t.slice(o * e, (o + 1) * e));
      }
    }
    return n;
  },
  openUrl: (t, e = true, n) => {
    if (!n || n.button !== 1 && !h.ctrlKeyStatus(n)) {
      if (e) {
        if (i.s) {
          window.open(t, "_blank").focus();
        } else {
          window.chrome.tabs.create({
            url: t,
            active: true
          });
        }
      } else {
        l(t);
      }
    } else if (i.s) {
      window.open(t, "_blank");
    } else {
      window.chrome.tabs.create({
        url: t,
        active: false
      });
    }
  },
  openChromeApp: async (t, e = true, r) => {
    if (!(await a.a.has(["management"]))) {
      try {
        await a.a.request(["management"]);
      } catch (t) {
        const {
          message: e
        } = await Promise.all([require.e(0), require.e(1), require.e(2), require.e(6)]).then(require.bind(null, 106));
        e.error(i18n("no_permission_to_open_app", i.C.vendor));
        return;
      }
    }
    chrome.management.get(t, async ({
      type: o,
      launchType: s,
      enabled: a,
      appLaunchUrl: c
    } = {}) => {
      if (chrome.runtime.lastError) {
        const {
          message: t
        } = await Promise.all([require.e(0), require.e(1), require.e(2), require.e(6)]).then(require.bind(null, 106));
        t.error(i18n("target_chrome_app_not_installed", i.C.vendor));
      } else {
        const i = () => {
          if (!r || r.button !== 1 && !h.ctrlKeyStatus(r)) {
            if (e || o !== "hosted_app" || s !== "OPEN_AS_REGULAR_TAB") {
              chrome.management.launchApp(t);
            } else {
              l(c);
            }
          } else {
            chrome.management.launchApp(t);
          }
        };
        if (a) {
          i();
        } else {
          const {
            IConfirm: e
          } = await Promise.all([require.e(0), require.e(37)]).then(require.bind(null, 468));
          e.create().toShow({
            text: i18n("app_disabled_enable_first"),
            onConfirm: () => {
              window.chrome.management.setEnabled(t, true, () => {
                i();
              });
            }
          });
        }
      }
    });
  },
  send: async function ({
    key: t,
    data: e
  }) {
    if (!i.s) {
      window.chrome.runtime.sendMessage({
        key: t,
        data: e
      }, () => {
        if (chrome.runtime.lastError) {
          console.warn("sendMessage: ", chrome.runtime.lastError.message);
        }
      });
    }
  },
  downloadImg: function (t, e, n) {
    if (!e) {
      e = "infinity-" + Math.ceil(Date.now() * Math.random() / (Math.random() * 555555));
      if (t.startsWith("blob:")) {
        e = `${e}.${n || "png"}`;
      } else {
        const n = t.indexOf("?");
        let r = t;
        if (~n) {
          r = t.slice(0, n);
        }
        e = `${e}.${r.split("/").reverse()[0].split(".").reverse()[0]}`;
      }
    }
    const r = e;
    const o = document.createElement("a");
    let s = t;
    if (!t.startsWith("blob:")) {
      s = t.includes("?") ? `${t}&attname=${r}` : `${t}?attname=${r}`;
    }
    if (i.r) {
      window.open(s, "_blank");
    } else {
      if (i.n) {
        o.setAttribute("target", "_blank");
      }
      o.setAttribute("download", r);
      o.setAttribute("href", s);
      document.body.appendChild(o);
      o.click();
      document.body.removeChild(o);
    }
  },
  fmtTime: (t, e) => new Date(t).toLocaleString(i.C.lang, e || {
    year: "numeric",
    month: "long",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  }),
  getTimestamp: async function () {
    return Date.now();
  },
  parseJwt: t => {
    const e = t.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
    const n = decodeURIComponent(atob(e).split("").map(t => "%" + ("00" + t.charCodeAt(0).toString(16)).slice(-2)).join(""));
    return JSON.parse(n);
  },
  compress: (t, e = 10, n) => new o(r => {
    const o = new Image();
    const i = document.createElement("canvas");
    const s = i.getContext("2d");
    o.onload = () => {
      n = n || o.height * e / o.width;
      i.width = e;
      i.height = n;
      s.fillRect(0, 0, e, n);
      s.drawImage(o, 0, 0, e, n);
      i.toBlob(r, "image/jpeg");
    };
    o.src = t;
  }),
  mergeArray: function (t = [], e = [], n = "id", r = "updatetime") {
    if (!t || t.length === 0) {
      return {
        result: e || [],
        isLocalEffective: false
      };
    }
    const o = e.filter(t => !!t);
    const i = Object.create(null);
    e.forEach((t, e) => {
      if (t[n]) {
        const r = t[n];
        i[r] = e;
      }
    });
    let s = false;
    t.filter(t => t[r] !== 0).forEach(t => {
      const e = t[n];
      const a = i[e];
      if (a !== undefined) {
        if ((o[a][r] || 0) < (t[r] || 0)) {
          o[a] = t;
          s = true;
        }
      } else {
        s = true;
        o.push(t);
      }
    });
    return {
      result: o.filter(t => !!t),
      isLocalEffective: s
    };
  },
  throttle: function (t, e) {
    let n;
    return function (...r) {
      const o = this;
      n ||= setTimeout(() => {
        t.apply(o, r);
        n = null;
      }, e);
    };
  },
  debounce: function (t, e) {
    let n = null;
    return function () {
      const r = this;
      const o = arguments;
      if (n) {
        clearTimeout(n);
        n = null;
      }
      n = setTimeout(() => {
        t.apply(r, o);
      }, e);
    };
  },
  setStyle: function (t, e = document.body) {
    Object.keys(t).forEach(n => {
      e.style.setProperty(n, t[n]);
    });
  },
  isInputType: t => !!t && (t.tagName === "INPUT" && (!t.getAttribute("type") || t.getAttribute("type") === "text" || t.getAttribute("type") === "search") || t.tagName === "TEXTAREA" || !!t.getAttribute("contenteditable") || undefined),
  convertBase64ToBlob: t => {
    const e = t.split(",");
    let n = "";
    let r = "";
    if (e.length > 1) {
      r = e[1];
      n = e[0].substring(e[0].indexOf(":") + 1, e[0].indexOf(";"));
    }
    const o = atob(r);
    const i = new ArrayBuffer(o.length);
    const s = new Uint8Array(i);
    for (let t = 0; t < o.length; t++) {
      s[t] = o.charCodeAt(t);
    }
    return new Blob([i], {
      type: n
    });
  },
  isTouchScreendevice: () => !!("ontouchstart" in window) || !!navigator.maxTouchPoints,
  stopBubble(t) {
    t.stopPropagation();
  },
  hexColorDelta(t, e) {
    let n;
    let r;
    let o;
    let i;
    let s;
    let a;
    if (Array.isArray(t)) {
      [n, r, o] = t;
    } else {
      n = parseInt(t.substring(0, 2), 16);
      r = parseInt(t.substring(2, 4), 16);
      o = parseInt(t.substring(4, 6), 16);
    }
    if (Array.isArray(e)) {
      [i, s, a] = e;
    } else {
      i = parseInt(e.substring(0, 2), 16);
      s = parseInt(e.substring(2, 4), 16);
      a = parseInt(e.substring(4, 6), 16);
    }
    let c = 255 - Math.abs(n - i);
    let u = 255 - Math.abs(r - s);
    let l = 255 - Math.abs(o - a);
    c /= 255;
    u /= 255;
    l /= 255;
    return (c + u + l) / 3;
  },
  async getSimilarColor(t) {
    const e = window.URL.createObjectURL(t);
    const n = await new o(t => {
      const n = new Image();
      n.onload = () => t(n);
      n.src = e;
    });
    const r = new ColorThief().getColor(n);
    const i = window.__INFINITY__.color_list;
    const s = i.map(t => h.hexColorDelta(r, t));
    const a = Math.max.apply(null, s);
    const c = i[s.indexOf(a)];
    window.URL.revokeObjectURL(e);
    return c;
  },
  getPrivacyUrl() {
    const t = s.IS_ZH ? "zh" : "en";
    if (i.n) {
      return `/privacy/${t}/privacy.html`;
    } else {
      return `${i.u}/${t}/privacy.html`;
    }
  },
  sleep: (t = 0) => new o(e => {
    setTimeout(() => {
      e(null);
    }, t);
  }),
  checkImage() {
    let t;
    return [e => new o((n, r) => {
      t = new Image();
      t.onload = n;
      t.onerror = r;
      t.src = e;
    }), () => {
      if (t) {
        t.src = "";
      }
    }];
  },
  requestFirefoxThrottle(t, e, n = false) {
    if (i.n || n) {
      const n = "throttle-" + t;
      if (typeof e == "boolean") {
        localStorage.setItem(n, Date.now() + "");
      }
      if (typeof e == "number") {
        const t = localStorage.getItem(n);
        const r = Date.now();
        if (t && Number(t) < r && Number(t) + e > r) {
          return false;
        }
      }
    }
    return true;
  },
  chooseFile: (t, e) => {
    t = t || "image/jpg,image/jpeg,image/png,image/gif,image/bmp,image/webp,image/svg";
    e = e || "readAsDataURL";
    return new o(n => {
      try {
        document.querySelectorAll(".choose-file").forEach(t => {
          document.body.removeChild(t);
        });
      } catch (t) {}
      const r = document.createElement("input");
      r.setAttribute("type", "file");
      r.setAttribute("class", "choose-file");
      r.setAttribute("accept", t);
      r.style.opacity = "0";
      r.style.width = "0";
      r.style.height = "0";
      r.value = "";
      r.addEventListener("change", t => {
        const o = t.target.files[0];
        const i = new FileReader();
        i[e](o);
        i.onload = function (t) {
          const e = t.target.result;
          n(e);
          try {
            document.body.removeChild(r);
          } catch (t) {}
        };
      }, {
        once: true
      });
      document.body.appendChild(r);
      r.click();
    });
  },
  exportJsonFile(t, e) {
    const n = JSON.stringify(t);
    let r = "text/infinity";
    if (i.r) {
      r = "custom/infinity";
    }
    const o = new Blob([n], {
      type: r
    });
    const s = window.URL.createObjectURL(o);
    if (i.r) {
      window.open(s, "_blank");
    } else {
      const t = new Date();
      const n = t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate();
      const r = document.createElement("a");
      r.href = s;
      r.download = e + n + ".infinity";
      document.body.appendChild(r);
      r.click();
      document.body.removeChild(r);
    }
    URL.revokeObjectURL(s);
  },
  stopShowMenu(t) {
    if (!h.isInputType(t.target)) {
      t.stopPropagation();
      t.preventDefault();
      document.querySelector("i-menu").toHide();
      return false;
    }
  },
  ctrlKeyStatus: t => i.o ? t.metaKey : t.ctrlKey,
  getFavIconSrc: t => f(t) ? t : function (t) {
    try {
      return new c.a(t).host;
    } catch (e) {
      return t;
    }
  }(function (t) {
    if (function (t) {
      return /^(.+?):\/\//.test(t);
    }(t) || f(t)) {
      return t;
    }
    return "http://" + t;
  }(t)).replace("^www.", ""),
  getLastReqValue(t) {
    const e = [];
    const n = this;
    return async function (r, o, i) {
      const s = n.randomId("req");
      e.push(s);
      const a = await t(r, o, i);
      const c = e.findIndex(t => t === s);
      const u = e.length;
      e.splice(0, c + 1);
      if (c === u - 1) {
        return a;
      } else {
        return null;
      }
    };
  },
  isFirstDate(t) {
    const e = new Date("2013/11/30").toLocaleDateString(t);
    let n = "";
    e.replace(/(\d{1,4})\D+(\d{1,2})\D+(\d{1,4})/, (t, e) => {
      n = e;
      return "";
    });
    if (n === "2013") {
      return true;
    }
    const r = String(new Date("2013/11/30").getDate());
    return n === r;
  },
  internaDateToStan: u.a,
  getTargetLogDomain(t) {
    if (!t) {
      return "";
    }
    try {
      if (t.startsWith("http://") || t.startsWith("https://")) {
        const e = new URL(t);
        if (e.host) {
          return e.host;
        }
      }
      return t.split("?")[0];
    } catch (e) {
      return t;
    }
  }
};
const p = /^\w+:\w/;
function f(t) {
  return p.test(t);
}
exports.a = h;
const d = document.createElement("script");
d.src = "/vendor/color-thief.min.js";
document.head.appendChild(d);
d.onload = () => {
  d.remove();
};