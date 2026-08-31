var r = require("./5.js");
var i = r;
require("./7.js");
var o = require("./0.js");
var _a = require("./23.js");
var s = _a;
export function c(t, e) {
  if (o.l) {
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
  if (o.l) {
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
      return await s.getItem(t);
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
  const t = await new i(t => chrome.bookmarks.getTree(t));
  if (o.n) {
    const e = t[0].children.findIndex(t => t.id === "unfiled_____");
    const n = t[0].children.findIndex(t => t.id === "toolbar_____");
    if (e !== -1 && n !== -1) {
      if (e > n) {
        const [r] = t[0].children.splice(e, 1);
        const [i] = t[0].children.splice(n, 1);
        t[0].children.unshift(i, r);
      } else {
        const [r] = t[0].children.splice(n, 1);
        const [i] = t[0].children.splice(e, 1);
        t[0].children.unshift(r, i);
      }
    }
  }
  return t;
}