require(/*webcrack:missing*/"./7.js");
import * as a from /*webcrack:missing*/"./5.js";
var n = a;
import * as i from "./315.js";
import * as r from /*webcrack:missing*/"./50.js";
export const slave = new class {
  constructor() {
    this.channel = null;
    this.initResolve = [];
    this.initReject = [];
    this.messageScheduler = new i.a();
    this.initChannel = () => {
      if (r.b === "serviceworker") {
        this.initServiceworker();
      } else if (r.b === "background") {
        this.initBackground();
      }
    };
    this.awaitChannel = () => new n(async (e, t) => {
      if (r.b === "serviceworker") {
        if (this.channel) {
          await this.channel.active;
          await this.channel.controlling;
          e(null);
        } else {
          this.initResolve.push(e);
          this.initReject.push(t);
        }
      } else if (r.b === "background") {
        e(null);
      }
    });
    this.initServiceworker = async () => {
      try {
        const {
          createWorkBox: e
        } = await require.e(10).then(require.bind(null, 603));
        const t = await e();
        if (!t) {
          return;
        }
        t.addEventListener("message", e => {
          const {
            type: t,
            payload: s = {}
          } = e.data;
          if (t === "master:bordcast-message") {
            this.messageScheduler.execTask(s.type, s.payload);
          }
        });
        await t.active;
        await t.controlling;
        this.channel = t;
        this.initResolve.forEach(e => {
          e();
        });
        this.channel.postTask = this.channel.messageSW;
      } catch (e) {
        console.log("slave初始化错误：", e);
        this.initReject.forEach(e => {
          e();
        });
      }
    };
    this.initBackground = () => {
      this.channel = {
        postTask: e => new n((t, s) => {
          chrome.runtime.sendMessage(e, e => {
            if (chrome.runtime.lastError) {
              s(chrome.runtime.lastError);
            }
            t(e);
          });
        })
      };
      chrome.runtime.onMessage.addListener(({
        type: e,
        payload: t,
        ignoreId: s
      }) => {
        if (e === "master:bordcast-message") {
          chrome.tabs.getCurrent(e => {
            if (e && s !== e.id) {
              this.messageScheduler.execTask(t.type, t.payload);
            }
          });
        } else if (e === "slave:bordcast-message") {
          this.messageScheduler.execTask(t.data.type, t.data.payload);
        }
      });
    };
    if (r.a) {
      throw new Error("it's not page");
    }
    this.initChannel();
  }
  postTask(e, t, s) {
    return new n(async (a, n) => {
      let i = false;
      await this.awaitChannel();
      const c = Object.assign(Object.assign(Object.assign({}, r.d), {
        taskId: Object(r.c)()
      }), s);
      if (c.timeout) {
        setTimeout(() => {
          if (!i) {
            a({
              error: "timeout"
            });
          }
        }, c.timeout);
      }
      try {
        const s = await this.channel.postTask({
          type: e,
          payload: Object.assign({
            data: t
          }, c)
        });
        i = true;
        a(s);
      } catch (e) {
        a({
          error: e
        });
      }
    });
  }
  listenMessage(e, t) {
    this.messageScheduler.listenTask(e, t);
  }
  sendMessage(e, t = "") {
    this.postTask("slave:bordcast-message", {
      type: e,
      payload: t
    });
  }
}();