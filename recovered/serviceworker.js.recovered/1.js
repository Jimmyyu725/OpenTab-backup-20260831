require("./3.js");
var r = require("./13.js");
var o = require("./84.js");
var i = o;
let s = null;
const _a = (t, e, n) => {
  (async (t, e = null, n = {}) => {
    if (r.b === "serviceworker") {
      var o;
      if (!s) {
        throw new Error("no worker self");
      }
      const r = await i(o = s.clients).call(o, {
        includeUncontrolled: true,
        type: "window"
      });
      if (r == null ? undefined : r.length) {
        r.forEach(r => {
          if (n.ignoreId !== r.id) {
            r.postMessage({
              type: t,
              payload: e
            });
          }
        });
      }
    } else if (r.b === "background") {
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
var c = require("./188.js");
export const a = new class {
  constructor() {
    this.taskScheduler = new c.a();
    this.created = async (t = null) => {
      if (r.b === "serviceworker") {
        s = t;
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
    if (!r.a) {
      throw new Error("it's not bg");
    }
  }
  sendMessage(t, e = "", n) {
    _a(t, e, n);
  }
}();