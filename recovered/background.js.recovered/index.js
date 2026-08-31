require("./7.js");
import * as r from "./248.js";
import * as o from "./465.js";
var i = o;
import * as s from "./466.js";
var a = s;
require("./19.js");
import * as u from "./214.js";
import * as c from "./0.js";
import * as f from "./50.js";
import * as l from "./215.js";
var h = l;
let p = null;
const d = (t, e, n) => {
  (async (t, e = null, n = {}) => {
    if (f.b === "serviceworker") {
      var r;
      if (!p) {
        throw new Error("no worker self");
      }
      const o = await h(r = p.clients).call(r, {
        includeUncontrolled: true,
        type: "window"
      });
      if (o == null ? undefined : o.length) {
        o.forEach(r => {
          if (n.ignoreId !== r.id) {
            r.postMessage({
              type: t,
              payload: e
            });
          }
        });
      }
    } else if (f.b === "background") {
      chrome.runtime.sendMessage({
        type: t,
        payload: e,
        ignoreId: n.ignoreId
      }, () => {
        if (chrome.runtime.lastError) {
          console.warn("sendMessage: ", chrome.runtime.lastError.message);
        }
      });
    }
  })("master:bordcast-message", {
    type: t,
    payload: e
  }, {
    ignoreId: n
  });
};
import * as y from "./315.js";
const m = new class {
  constructor() {
    this.taskScheduler = new y.a();
    this.created = async (t = null) => {
      if (f.b === "serviceworker") {
        p = t;
      }
    };
    this.execTasks = async (t, e, n) => {
      const {
        type: r,
        payload: o
      } = t;
      if (r == null ? undefined : r.startsWith("slave:")) {
        this.taskScheduler.execTask(r, o.data, e, n);
      }
    };
    this.listenTasks = async (t, e) => {
      this.taskScheduler.listenTask(t, e);
    };
    if (!f.a) {
      throw new Error("it's not bg");
    }
  }
  sendMessage(t, e = "", n) {
    d(t, e, n);
  }
}();
import * as g from "./166.js";
const v = new class {
  constructor() {
    this.hasRegistClick = false;
    this.noticeConf = {
      gmail: false,
      gmailVoice: false,
      gmailNumber: false
    };
    this.timer = null;
    this.lastIssuedTime = Date.now();
    this.instanceId = "gmc" + parseInt("" + Date.now() * Math.random(), 10);
    this.start = () => {
      clearInterval(this.timer);
      this.timer = null;
      const {
        gmail: t,
        gmailNumber: e
      } = this.noticeConf;
      if (t !== false || e !== false) {
        this.timer = setInterval(this.check, 60000);
        this.check();
      }
    };
    this.check = () => {
      r.a(this.instanceId).then(t => {
        this.setNotification(t);
        this.sendGmailNumber(t.count);
      }).catch(t => {
        console.log("gmail->err", t.message);
      });
    };
    this.sendGmailNumber = t => {
      if (this.noticeConf.gmailNumber) {
        m.sendMessage("master:gmail-number-updated", t);
      }
    };
    this.setNotification = t => {
      if (!this.noticeConf.gmail) {
        return;
      }
      if (!this.lastIssuedTime) {
        this.saveLastTime(t.lastIssuedTime);
        return;
      }
      const e = t.emails.filter(t => t.issued > this.lastIssuedTime);
      e.forEach(t => {
        if (c.r) {
          const e = new Notification(t.title, {
            body: t.authorName + "(" + t.authorEmail + ")"
          });
          e.onclick = async () => {
            chrome.tabs.create({
              active: true,
              url: t.link
            });
            e.close();
          };
        } else {
          var e;
          var n;
          var r;
          chrome.notifications.create((e = t.id, n = "link", r = t.link, e ||= Object(u.c)("notice"), e + "@infinity@" + n + "@infinity@" + r), {
            type: "basic",
            iconUrl: a,
            title: t.title,
            message: t.summary,
            contextMessage: t.authorName + "(" + t.authorEmail + ")"
          });
        }
      });
      if (this.noticeConf.gmailVoice && e.length > 0) {
        Object(g.b)(i);
      }
      this.saveLastTime(t.lastIssuedTime);
    };
    this.saveLastTime = t => {
      this.lastIssuedTime = t;
    };
  }
  registClick(t) {
    if (t) {
      if (!this.hasRegistClick) {
        chrome.notifications.onClicked.addListener(t => {
          const [e, n, r] = function (t) {
            return t.split("@infinity@");
          }(t);
          console.log(e);
          switch (n) {
            case "link":
              chrome.tabs.create({
                active: true,
                url: r
              });
          }
          chrome.notifications.clear(t);
        });
        this.hasRegistClick = true;
      }
    }
  }
  updateSetting(t) {
    if (typeof t == "object") {
      this.lastIssuedTime = Date.now();
      const {
        gmail: e,
        gmailVoice: n,
        gmailNumber: r
      } = t;
      this.noticeConf = {
        gmail: e,
        gmailVoice: n,
        gmailNumber: r
      };
      this.start();
    }
  }
}();
import * as b from "./454.js";
var w = b;
const _ = new class {
  constructor() {
    this._attached = false;
    this._throttleFn = w(this.onBookmarksChange, 300);
  }
  start() {
    chrome.permissions.contains({
      origins: [],
      permissions: ["bookmarks"]
    }, t => {
      if (!this._attached && t) {
        this._watchBookmarks();
      }
    });
  }
  _watchBookmarks() {
    this._attached = true;
    chrome.bookmarks.onCreated.addListener(this._throttleFn);
    chrome.bookmarks.onChanged.addListener(this._throttleFn);
    chrome.bookmarks.onMoved.addListener(this._throttleFn);
    chrome.bookmarks.onRemoved.addListener(this._throttleFn);
    if (!c.n) {
      chrome.bookmarks.onChildrenReordered.addListener(this._throttleFn);
    }
  }
  startWatchBookmarks() {
    this.start();
  }
  onBookmarksChange() {
    m.sendMessage("master:tabs-update-bookmarks");
  }
}();
const E = new class {
  async firefoxLogin(t) {
    m.sendMessage("master:login", t);
    if (c.n) {
      const t = await browser.tabs.query({});
      if (t == null ? undefined : t.length) {
        for (let e = 0; e < t.length; e++) {
          const n = t[e];
          const {
            url: r,
            id: o
          } = n;
          const i = c.x + "/on-login/";
          if (r.startsWith(c.y) || r.startsWith(i)) {
            browser.tabs.remove(o);
          }
        }
      }
    }
  }
  async cancelLogin() {
    m.sendMessage("master:cancelLogin");
  }
}();
import * as T from "./162.js";
var x = new class {
  start() {
    chrome.runtime.onMessage.addListener(({
      key: t,
      data: e,
      type: n,
      payload: r
    }, o, i) => {
      switch (t) {
        case "bg-notice-gmail-updated":
          v.updateSetting(e);
          break;
        case "bg-notice-gmail-permission":
          v.registClick(e);
          break;
        case "bg-run-start-watch-bookmarks":
          _.startWatchBookmarks();
          break;
        case "login":
          E.firefoxLogin(e);
          break;
        case "cancelLogin":
          E.cancelLogin();
          break;
        default:
          if (n && n.startsWith("slave:")) {
            m.execTasks({
              type: n,
              payload: r
            }, i, o.tab?.id);
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
          Object(T.e)();
          chrome.tabs.create({});
      }
    });
  }
}();
import * as O from "./6.js";
require("./482.js");
(async function () {
  window.i18n = O.i18n;
  x.start();
  if (!c.r) {
    _.start();
  }
  v.start();
  require.e(28).then(require.bind(null, 807));
  Object(T.b)();
})();