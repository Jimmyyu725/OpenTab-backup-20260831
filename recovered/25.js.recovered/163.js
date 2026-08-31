var r = require("./5.js");
var o = r;
require(/*webcrack:missing*/"./7.js");
var i = require("./0.js");
var s = require("./23.js");
var _a = s;
export function c(t, e) {
  if (i.l) {
    t = window.chrome.runtime.getURL(t);
    if (e == null ? undefined : e.isNewTab) {
      return window.chrome.tabs.create({
        url: t
      });
    }
    window.chrome.tabs.getCurrent(e => window.chrome.tabs.update(e.id, {
      url: t
    }, () => {
      if (chrome.runtime.lastError && t) {
        if (t.startsWith("http")) {
          window.open(t, "_self");
        } else {
          window.chrome.tabs.create({
            url: t
          });
        }
      }
    }));
  } else {
    if (e == null ? undefined : e.isNewTab) {
      return window.open(t);
    }
    window.open(t, "_self");
  }
}
export async function d() {
  if (i.l) {
    const {
      slave: t
    } = await require.e(9).then(require.bind(null, 161));
    window.chrome.tabs.getCurrent(e => {
      t.sendMessage("tabs-reload");
      setTimeout(() => {
        window.chrome.tabs.remove(e.id);
      }, 16);
    });
  } else {
    setTimeout(() => {
      c("/");
    }, 16);
  }
}
export async function b(t, e) {
  try {
    if (e) {
      return await _a.getItem(t);
    }
    {
      const e = localStorage.getItem(t);
      if (e) {
        if (typeof e == "string") {
          return JSON.parse(e);
        } else {
          return e;
        }
      }
    }
  } catch (t) {
    throw new Error(t);
  }
}
export async function a() {
  const t = await new o(t => chrome.bookmarks.getTree(t));
  if (i.n) {
    const e = t[0].children.findIndex(t => t.id === "unfiled_____");
    const n = t[0].children.findIndex(t => t.id === "toolbar_____");
    if (e !== -1 && n !== -1) {
      if (e > n) {
        const [r] = t[0].children.splice(e, 1);
        const [o] = t[0].children.splice(n, 1);
        t[0].children.unshift(o, r);
      } else {
        const [r] = t[0].children.splice(n, 1);
        const [o] = t[0].children.splice(e, 1);
        t[0].children.unshift(r, o);
      }
    }
  }
  return t;
}