require(/*webcrack:missing*/"./19.js");
require(/*webcrack:missing*/"./64.js");
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
const U = ["cs", "da", "de", "el", "en", "en-GB", "en-US", "es", "es-419", "fi", "fr", "hi", "hu", "id", "it", "ja", "ko", "ms", "nl", "no", "pl", "pt-BR", "pt-PT", "ro", "ru", "sk", "sv", "th", "tr", "uk", "vi", "zh-CN", "zh-TW"];
export const G = !!globalThis.chrome?.abp;
export function F(n = "", t = "_") {
  const e = n.split(t);
  if (e.length === 2) {
    e[0] = e[0].toLowerCase();
    e[1] = e[1].toUpperCase();
    return e.join(t);
  } else {
    return n;
  }
}
function N(n) {
  const t = F(n.replace("_", "-"), "-");
  if (U.includes(t)) {
    return t;
  } else if (n === "zh" || t.indexOf("zh-") === 0) {
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
          const n = localStorage.getItem("langCode");
          if (localStorage.getItem("setLangCode") !== null && n !== null) {
            return n;
          }
        }
        return N(navigator.language || "en-us");
      }();
    } else {
      return N(chrome.i18n.getUILanguage());
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
      return $().broswer;
    }
  },
  get platformVersion() {
    return $().version;
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
    let n = c;
    if (c === "web") {
      n = $().broswer;
    }
    return n.charAt(0).toUpperCase() + n.slice(1);
  }
};
function $() {
  const n = {};
  const t = navigator.userAgent.toLowerCase();
  let e;
  if (e = t.match(/edg\/([\d.]+)/i)) {
    n.edge = e[1];
  } else if ((e = t.match(/rv:([\d.]+)\) like gecko/)) || (e = t.match(/msie ([\d.]+)/))) {
    n.ie = e[1];
  } else if (e = t.match(/firefox\/([\d.]+)/)) {
    n.firefox = e[1];
  } else if (e = t.match(/chrome\/([\d.]+)/)) {
    n.chrome = e[1];
  } else if (e = t.match(/opera.([\d.]+)/)) {
    n.opera = e[1];
  } else if (e = t.match(/version\/([\d.]+).*safari/)) {
    n.safari = e[1];
  }
  if (n.edge) {
    return {
      broswer: "edge",
      version: n.edge
    };
  } else if (n.ie) {
    return {
      broswer: "ie",
      version: n.ie
    };
  } else if (n.firefox) {
    return {
      broswer: "firefox",
      version: n.firefox
    };
  } else if (n.chrome) {
    return {
      broswer: "chrome",
      version: n.chrome
    };
  } else if (n.opera) {
    return {
      broswer: "opera",
      version: n.opera
    };
  } else if (n.safari) {
    return {
      broswer: "safari",
      version: n.safari
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