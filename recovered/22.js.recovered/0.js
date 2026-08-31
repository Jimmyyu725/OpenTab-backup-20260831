require("./19.js");
require("./64.js");
export const t = typeof window != "object";
export const j = false;
export const q = true;
export const s = false;
export const h = false;
export const i = true;
export const n = false;
export const k = false;
export const r = false;
export const e = "pro";
export const c = "chrome";
export const z = "11.0.41";
export const d = "1783058950124";
export const l = i || n || k || h || r;
export const m = (i || n || k || r) && !h;
export const o = navigator.platform.indexOf("Mac") >= 0;
export const p = false;
export const v = q ? "jiaocheng.inftab.com" : "qzeuoq1yf.hn-bkt.clouddn.com";
export const a = "https://infinityicon.infinitynewtab.com/assets";
export const y = q ? "https://api.inftab.com/v2" : "https://api-infinitynewtab-com.test690.com/v2";
export const w = q ? "https://api.inftab.com" : "https://api-infinitynewtab-com.test690.com";
export const u = "https://privacy.inftab.com/privacy";
export const x = "https://infinity-api.infinitynewtab.com";
export const B = s ? location.origin : q ? "https://inftab.com" : "https://test.inftab.com";
export const A = "https://weatheroffer.com/api/extfans";
export const f = "https://mail.google.com";
export const b = "https://suggestion.baidu.com";
export const g = "https://google.com";
const _j = ["cs", "da", "de", "el", "en", "en-GB", "en-US", "es", "es-419", "fi", "fr", "hi", "hu", "id", "it", "ja", "ko", "ms", "nl", "no", "pl", "pt-BR", "pt-PT", "ro", "ru", "sk", "sv", "th", "tr", "uk", "vi", "zh-CN", "zh-TW"];
export const G = !!globalThis.chrome?.abp;
export function F(t = "", e = "_") {
  const n = t.split(e);
  if (n.length === 2) {
    n[0] = n[0].toLowerCase();
    n[1] = n[1].toUpperCase();
    return n.join(e);
  } else {
    return t;
  }
}
function L(t) {
  const e = F(t.replace("_", "-"), "-");
  if (_j.includes(e)) {
    return e;
  } else if (t === "zh" || e.indexOf("zh-") === 0) {
    return "zh-CN";
  } else {
    return "en-US";
  }
}
export const C = {
  get lang() {
    if (s) {
      return function () {
        if (!t) {
          const t = localStorage.getItem("langCode");
          if (localStorage.getItem("setLangCode") !== null && t !== null) {
            return t;
          }
        }
        return L(navigator.language || "en-us");
      }();
    } else {
      return L(chrome.i18n.getUILanguage());
    }
  },
  get extVersion() {
    if (s) {
      return "web";
    } else {
      return chrome.runtime.getManifest().version;
    }
  },
  get extId() {
    if (s) {
      return "web";
    } else {
      return chrome.runtime.id;
    }
  },
  get platform() {
    if (s) {
      return "web";
    } else {
      return "chrome";
    }
  },
  get supportCookie() {
    return !r && this.runtimePlatform !== "safari";
  },
  get runtimePlatform() {
    if (G) {
      return "360";
    } else {
      return M().broswer;
    }
  },
  get platformVersion() {
    return M().version;
  },
  get isZh() {
    return C.lang === "zh-CN";
  },
  get isEn() {
    return /^(en|en-GB|en-US)$/.test(C.lang);
  },
  get isWindows() {
    return /windows|win32/i.test(navigator.userAgent);
  },
  get isMac() {
    return navigator.platform.toLowerCase().indexOf("mac") !== -1;
  },
  get vendor() {
    let t = c;
    if (c === "web") {
      t = M().broswer;
    }
    return t.charAt(0).toUpperCase() + t.slice(1);
  }
};
function M() {
  const t = {};
  const e = navigator.userAgent.toLowerCase();
  let n;
  if (n = e.match(/edg\/([\d.]+)/i)) {
    t.edge = n[1];
  } else if ((n = e.match(/rv:([\d.]+)\) like gecko/)) || (n = e.match(/msie ([\d.]+)/))) {
    t.ie = n[1];
  } else if (n = e.match(/firefox\/([\d.]+)/)) {
    t.firefox = n[1];
  } else if (n = e.match(/chrome\/([\d.]+)/)) {
    t.chrome = n[1];
  } else if (n = e.match(/opera.([\d.]+)/)) {
    t.opera = n[1];
  } else if (n = e.match(/version\/([\d.]+).*safari/)) {
    t.safari = n[1];
  }
  if (t.edge) {
    return {
      broswer: "edge",
      version: t.edge
    };
  } else if (t.ie) {
    return {
      broswer: "ie",
      version: t.ie
    };
  } else if (t.firefox) {
    return {
      broswer: "firefox",
      version: t.firefox
    };
  } else if (t.chrome) {
    return {
      broswer: "chrome",
      version: t.chrome
    };
  } else if (t.opera) {
    return {
      broswer: "opera",
      version: t.opera
    };
  } else if (t.safari) {
    return {
      broswer: "safari",
      version: t.safari
    };
  } else {
    return {
      broswer: "none",
      version: "0"
    };
  }
}
export const D = "10.0.107";
export const E = "10.0.109";