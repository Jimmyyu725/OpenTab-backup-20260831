var r = require("./5.js");
var i = r;
require("./7.js");
require("./19.js");
require("./64.js");
require("./257.js");
var o = require("./0.js");
var s = require("./6.js");
var a = require("./85.js");
var c = require("./379.js");
var u = require("./214.js");
const l = t => {
  if (t) {
    if (o.s) {
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
    for (let i = 0; i < r; i++) {
      if (i === r - 1) {
        n.push(t.slice(i * e, t.length));
      } else {
        n.push(t.slice(i * e, (i + 1) * e));
      }
    }
    return n;
  },
  openUrl: (t, e = true, n) => {
    if (!n || n.button !== 1 && !h.ctrlKeyStatus(n)) {
      if (e) {
        if (o.s) {
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
    } else if (o.s) {
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
        e.error(i18n("no_permission_to_open_app", o.C.vendor));
        return;
      }
    }
    chrome.management.get(t, async ({
      type: i,
      launchType: s,
      enabled: a,
      appLaunchUrl: c
    } = {}) => {
      if (chrome.runtime.lastError) {
        const {
          message: t
        } = await Promise.all([require.e(0), require.e(1), require.e(2), require.e(6)]).then(require.bind(null, 106));
        t.error(i18n("target_chrome_app_not_installed", o.C.vendor));
      } else {
        const o = () => {
          if (!r || r.button !== 1 && !h.ctrlKeyStatus(r)) {
            if (e || i !== "hosted_app" || s !== "OPEN_AS_REGULAR_TAB") {
              chrome.management.launchApp(t);
            } else {
              l(c);
            }
          } else {
            chrome.management.launchApp(t);
          }
        };
        if (a) {
          o();
        } else {
          const {
            IConfirm: e
          } = await Promise.all([require.e(0), require.e(37)]).then(require.bind(null, 468));
          e.create().toShow({
            text: i18n("app_disabled_enable_first"),
            onConfirm: () => {
              window.chrome.management.setEnabled(t, true, () => {
                o();
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
    if (!o.s) {
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
    const i = document.createElement("a");
    let s = t;
    if (!t.startsWith("blob:")) {
      s = t.includes("?") ? `${t}&attname=${r}` : `${t}?attname=${r}`;
    }
    if (o.r) {
      window.open(s, "_blank");
    } else {
      if (o.n) {
        i.setAttribute("target", "_blank");
      }
      i.setAttribute("download", r);
      i.setAttribute("href", s);
      document.body.appendChild(i);
      i.click();
      document.body.removeChild(i);
    }
  },
  fmtTime: (t, e) => new Date(t).toLocaleString(o.C.lang, e || {
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
  compress: (t, e = 10, n) => new i(r => {
    const i = new Image();
    const o = document.createElement("canvas");
    const s = o.getContext("2d");
    i.onload = () => {
      n = n || i.height * e / i.width;
      o.width = e;
      o.height = n;
      s.fillRect(0, 0, e, n);
      s.drawImage(i, 0, 0, e, n);
      o.toBlob(r, "image/jpeg");
    };
    i.src = t;
  }),
  mergeArray: function (t = [], e = [], n = "id", r = "updatetime") {
    if (!t || t.length === 0) {
      return {
        result: e || [],
        isLocalEffective: false
      };
    }
    const i = e.filter(t => !!t);
    const o = Object.create(null);
    e.forEach((t, e) => {
      if (t[n]) {
        const r = t[n];
        o[r] = e;
      }
    });
    let s = false;
    t.filter(t => t[r] !== 0).forEach(t => {
      const e = t[n];
      const a = o[e];
      if (a !== undefined) {
        if ((i[a][r] || 0) < (t[r] || 0)) {
          i[a] = t;
          s = true;
        }
      } else {
        s = true;
        i.push(t);
      }
    });
    return {
      result: i.filter(t => !!t),
      isLocalEffective: s
    };
  },
  throttle: function (t, e) {
    let n;
    return function (...r) {
      const i = this;
      n ||= setTimeout(() => {
        t.apply(i, r);
        n = null;
      }, e);
    };
  },
  debounce: function (t, e) {
    let n = null;
    return function () {
      const r = this;
      const i = arguments;
      if (n) {
        clearTimeout(n);
        n = null;
      }
      n = setTimeout(() => {
        t.apply(r, i);
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
    const i = atob(r);
    const o = new ArrayBuffer(i.length);
    const s = new Uint8Array(o);
    for (let t = 0; t < i.length; t++) {
      s[t] = i.charCodeAt(t);
    }
    return new Blob([o], {
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
    let i;
    let o;
    let s;
    let a;
    if (Array.isArray(t)) {
      [n, r, i] = t;
    } else {
      n = parseInt(t.substring(0, 2), 16);
      r = parseInt(t.substring(2, 4), 16);
      i = parseInt(t.substring(4, 6), 16);
    }
    if (Array.isArray(e)) {
      [o, s, a] = e;
    } else {
      o = parseInt(e.substring(0, 2), 16);
      s = parseInt(e.substring(2, 4), 16);
      a = parseInt(e.substring(4, 6), 16);
    }
    let c = 255 - Math.abs(n - o);
    let u = 255 - Math.abs(r - s);
    let l = 255 - Math.abs(i - a);
    c /= 255;
    u /= 255;
    l /= 255;
    return (c + u + l) / 3;
  },
  async getSimilarColor(t) {
    const e = window.URL.createObjectURL(t);
    const n = await new i(t => {
      const n = new Image();
      n.onload = () => t(n);
      n.src = e;
    });
    const r = new ColorThief().getColor(n);
    const o = window.__INFINITY__.color_list;
    const s = o.map(t => h.hexColorDelta(r, t));
    const a = Math.max.apply(null, s);
    const c = o[s.indexOf(a)];
    window.URL.revokeObjectURL(e);
    return c;
  },
  getPrivacyUrl() {
    const t = s.IS_ZH ? "zh" : "en";
    if (o.n) {
      return `/privacy/${t}/privacy.html`;
    } else {
      return `${o.u}/${t}/privacy.html`;
    }
  },
  sleep: (t = 0) => new i(e => {
    setTimeout(() => {
      e(null);
    }, t);
  }),
  checkImage() {
    let t;
    return [e => new i((n, r) => {
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
    if (o.n || n) {
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
    return new i(n => {
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
        const i = t.target.files[0];
        const o = new FileReader();
        o[e](i);
        o.onload = function (t) {
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
    if (o.r) {
      r = "custom/infinity";
    }
    const i = new Blob([n], {
      type: r
    });
    const s = window.URL.createObjectURL(i);
    if (o.r) {
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
  ctrlKeyStatus: t => o.o ? t.metaKey : t.ctrlKey,
  getFavIconSrc: t => d(t) ? t : function (t) {
    try {
      return new c.a(t).host;
    } catch (e) {
      return t;
    }
  }(function (t) {
    if (function (t) {
      return /^(.+?):\/\//.test(t);
    }(t) || d(t)) {
      return t;
    }
    return "http://" + t;
  }(t)).replace("^www.", ""),
  getLastReqValue(t) {
    const e = [];
    const n = this;
    return async function (r, i, o) {
      const s = n.randomId("req");
      e.push(s);
      const a = await t(r, i, o);
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
function d(t) {
  return p.test(t);
}
exports.a = h;
const f = document.createElement("script");
f.src = "/vendor/color-thief.min.js";
document.head.appendChild(f);
f.onload = () => {
  f.remove();
};