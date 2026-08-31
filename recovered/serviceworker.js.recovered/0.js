require("./27.js");
require("./107.js");
export const j = typeof window != "object";
export const e = false;
export const i = false;
export const c = false;
export const d = true;
export const g = false;
export const h = false;
export const a = "chrome";
export const f = d || g || c || h;
navigator.platform.indexOf("Mac");
export const l = "https://api.inftab.com/v2";
export const k = "https://infinity-api.infinitynewtab.com";
export const n = i ? location.origin : "https://inftab.com";
export const m = "https://weatheroffer.com/api/extfans";
export const b = "https://mail.google.com";
const v = ["cs", "da", "de", "el", "en", "en-GB", "en-US", "es", "es-419", "fi", "fr", "hi", "hu", "id", "it", "ja", "ko", "ms", "nl", "no", "pl", "pt-BR", "pt-PT", "ro", "ru", "sk", "sv", "th", "tr", "uk", "vi", "zh-CN", "zh-TW"];
const _b = !!globalThis.chrome?.abp;
export function p(t = "", e = "_") {
  const n = t.split(e);
  if (n.length === 2) {
    n[0] = n[0].toLowerCase();
    n[1] = n[1].toUpperCase();
    return n.join(e);
  } else {
    return t;
  }
}
function _(t) {
  const e = p(t.replace("_", "-"), "-");
  if (v.includes(e)) {
    return e;
  } else if (t === "zh" || e.indexOf("zh-") === 0) {
    return "zh-CN";
  } else {
    return "en-US";
  }
}
export const o = {
  get lang() {
    if (i) {
      return function () {
        if (!j) {
          const t = localStorage.getItem("langCode");
          if (localStorage.getItem("setLangCode") !== null && t !== null) {
            return t;
          }
        }
        return _(navigator.language || "en-us");
      }();
    } else {
      return _(chrome.i18n.getUILanguage());
    }
  },
  get extVersion() {
    if (i) {
      return "web";
    } else {
      return chrome.runtime.getManifest().version;
    }
  },
  get extId() {
    if (i) {
      return "web";
    } else {
      return chrome.runtime.id;
    }
  },
  get platform() {
    if (i) {
      return "web";
    } else {
      return "chrome";
    }
  },
  get supportCookie() {
    return !h && this.runtimePlatform !== "safari";
  },
  get runtimePlatform() {
    if (_b) {
      return "360";
    } else {
      return T().broswer;
    }
  },
  get platformVersion() {
    return T().version;
  },
  get isZh() {
    return o.lang === "zh-CN";
  },
  get isEn() {
    return /^(en|en-GB|en-US)$/.test(o.lang);
  },
  get isWindows() {
    return /windows|win32/i.test(navigator.userAgent);
  },
  get isMac() {
    return navigator.platform.toLowerCase().indexOf("mac") !== -1;
  },
  get vendor() {
    let t = a;
    if (a === "web") {
      t = T().broswer;
    }
    return t.charAt(0).toUpperCase() + t.slice(1);
  }
};
function T() {
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