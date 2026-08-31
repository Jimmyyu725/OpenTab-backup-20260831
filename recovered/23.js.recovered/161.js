require(/*webcrack:missing*/"./7.js");
import * as r from "./5.js";
var o = r;
import * as i from "./315.js";
import * as s from "./50.js";
export const slave = new class {
  constructor() {
    this.channel = null;
    this.initResolve = [];
    this.initReject = [];
    this.messageScheduler = new i.a();
    this.initChannel = () => {
      if (s.b === "serviceworker") {
        this.initServiceworker();
      } else if (s.b === "background") {
        this.initBackground();
      }
    };
    this.awaitChannel = () => new o(async (t, e) => {
      if (s.b === "serviceworker") {
        if (this.channel) {
          await this.channel.active;
          await this.channel.controlling;
          t(null);
        } else {
          this.initResolve.push(t);
          this.initReject.push(e);
        }
      } else if (s.b === "background") {
        t(null);
      }
    });
    this.initServiceworker = async () => {
      try {
        const {
          createWorkBox: t
        } = await require.e(10).then(require.bind(null, 603));
        const e = await t();
        if (!e) {
          return;
        }
        e.addEventListener("message", t => {
          const {
            type: e,
            payload: n = {}
          } = t.data;
          if (e === "master:bordcast-message") {
            this.messageScheduler.execTask(n.type, n.payload);
          }
        });
        await e.active;
        await e.controlling;
        this.channel = e;
        this.initResolve.forEach(t => {
          t();
        });
        this.channel.postTask = this.channel.messageSW;
      } catch (t) {
        console.log("slave初始化错误：", t);
        this.initReject.forEach(t => {
          t();
        });
      }
    };
    this.initBackground = () => {
      this.channel = {
        postTask: t => new o((e, n) => {
          chrome.runtime.sendMessage(t, t => {
            if (chrome.runtime.lastError) {
              n(chrome.runtime.lastError);
            }
            e(t);
          });
        })
      };
      chrome.runtime.onMessage.addListener(({
        type: t,
        payload: e,
        ignoreId: n
      }) => {
        if (t === "master:bordcast-message") {
          chrome.tabs.getCurrent(t => {
            if (t && n !== t.id) {
              this.messageScheduler.execTask(e.type, e.payload);
            }
          });
        } else if (t === "slave:bordcast-message") {
          this.messageScheduler.execTask(e.data.type, e.data.payload);
        }
      });
    };
    if (s.a) {
      throw new Error("it's not page");
    }
    this.initChannel();
  }
  postTask(t, e, n) {
    return new o(async (r, o) => {
      let i = false;
      await this.awaitChannel();
      const a = Object.assign(Object.assign(Object.assign({}, s.d), {
        taskId: Object(s.c)()
      }), n);
      if (a.timeout) {
        setTimeout(() => {
          if (!i) {
            r({
              error: "timeout"
            });
          }
        }, a.timeout);
      }
      try {
        const n = await this.channel.postTask({
          type: t,
          payload: Object.assign({
            data: e
          }, a)
        });
        i = true;
        r(n);
      } catch (t) {
        r({
          error: t
        });
      }
    });
  }
  listenMessage(t, e) {
    this.messageScheduler.listenTask(t, e);
  }
  sendMessage(t, e = "") {
    this.postTask("slave:bordcast-message", {
      type: t,
      payload: e
    });
  }
}();