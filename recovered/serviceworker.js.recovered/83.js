require("./3.js");
require("./27.js");
var r = require("./0.js");
var o = require("./238.js");
function i(t) {
  return fetch(function (t) {
    return r.b + "/mail/feed/atom?zx=" + encodeURIComponent(t);
  }(t)).then(t => {
    if (!t.ok) {
      throw new Error("response not ok");
    }
    return t.text();
  }).then(async t => {
    const e = (await o.parseStringPromise(t)).feed;
    let n = e.title[0];
    if (n) {
      try {
        n = /(\w+)@(\w+\.\w+)/.exec(n)[0];
      } catch (t) {}
    }
    const r = parseInt(e.fullcount, 10);
    const i = e.entry || [];
    const s = [];
    let a = -1;
    i.forEach(t => {
      const e = {
        id: t.id[0],
        issued: t.issued[0],
        title: t.title[0],
        summary: t.summary[0],
        link: t.link[0].$.href,
        authorName: t.author[0].name[0],
        authorEmail: t.author[0].email[0]
      };
      if (e.issued) {
        e.issued = new Date(e.issued).valueOf();
        a = Math.max(a, e.issued);
      }
      s.push(e);
    });
    return {
      count: r,
      account: n,
      lastIssuedTime: a,
      emails: s
    };
  }).catch(t => {
    throw t;
  });
}
var s = require("./239.js");
var _a = s;
var c = require("./240.js");
var u = c;
var f = require("./47.js");
var l = require("./1.js");
var h = require("./48.js");
export const a = new class {
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
      i(this.instanceId).then(t => {
        this.setNotification(t);
        this.sendGmailNumber(t.count);
      }).catch(t => {
        console.log("gmail->err", t.message);
      });
    };
    this.sendGmailNumber = t => {
      if (this.noticeConf.gmailNumber) {
        l.a.sendMessage("master:gmail-number-updated", t);
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
        if (r.h) {
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
          var o;
          chrome.notifications.create((e = t.id, n = "link", o = t.link, e ||= Object(f.b)("notice"), e + "@infinity@" + n + "@infinity@" + o), {
            type: "basic",
            iconUrl: u,
            title: t.title,
            message: t.summary,
            contextMessage: t.authorName + "(" + t.authorEmail + ")"
          });
        }
      });
      if (this.noticeConf.gmailVoice && e.length > 0) {
        Object(h.b)(_a);
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