var r = require("./1.js");
var o = require("./83.js");
var i = require("./82.js");
require("./3.js");
var s = require("./0.js");
const a = new class {
  async firefoxLogin(t) {
    r.a.sendMessage("master:login", t);
    if (s.g) {
      const t = await browser.tabs.query({});
      if (t == null ? undefined : t.length) {
        for (let e = 0; e < t.length; e++) {
          const n = t[e];
          const {
            url: r,
            id: o
          } = n;
          const i = s.k + "/on-login/";
          if (r.startsWith(s.l) || r.startsWith(i)) {
            browser.tabs.remove(o);
          }
        }
      }
    }
  }
  async cancelLogin() {
    r.a.sendMessage("master:cancelLogin");
  }
}();
var c = require("./86.js");
exports.a = new class {
  start() {
    chrome.runtime.onMessage.addListener(({
      key: t,
      data: e,
      type: n,
      payload: s
    }, c, u) => {
      switch (t) {
        case "bg-notice-gmail-updated":
          o.a.updateSetting(e);
          break;
        case "bg-notice-gmail-permission":
          o.a.registClick(e);
          break;
        case "bg-run-start-watch-bookmarks":
          i.a.startWatchBookmarks();
          break;
        case "login":
          a.firefoxLogin(e);
          break;
        case "cancelLogin":
          a.cancelLogin();
          break;
        default:
          if (n && n.startsWith("slave:")) {
            r.a.execTasks({
              type: n,
              payload: s
            }, u, c.tab?.id);
            return true;
          }
      }
    });
    chrome.runtime.onInstalled.addListener(async ({
      reason: t
    }) => {
      chrome.storage.local.set({
        onInstalled: t
      });
      switch (t) {
        case "install":
          Object(c.b)();
          chrome.tabs.create({});
      }
    });
  }
}();