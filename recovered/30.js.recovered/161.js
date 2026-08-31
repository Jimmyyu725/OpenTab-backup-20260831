require(/*webcrack:missing*/"./7.js");
import * as n from /*webcrack:missing*/"./5.js";
var s = n;
import * as a from "./315.js";
import * as o from /*webcrack:missing*/"./50.js";
export const slave = new class {
  constructor() {
    this.channel = null;
    this.initResolve = [];
    this.initReject = [];
    this.messageScheduler = new a.a();
    this.initChannel = () => {
      if (o.b === "serviceworker") {
        this.initServiceworker();
      } else if (o.b === "background") {
        this.initBackground();
      }
    };
    this.awaitChannel = () => new s(async (t, e) => {
      if (o.b === "serviceworker") {
        if (this.channel) {
          await this.channel.active;
          await this.channel.controlling;
          t(null);
        } else {
          this.initResolve.push(t);
          this.initReject.push(e);
        }
      } else if (o.b === "background") {
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
            payload: i = {}
          } = t.data;
          if (e === "master:bordcast-message") {
            this.messageScheduler.execTask(i.type, i.payload);
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
        postTask: t => new s((e, i) => {
          chrome.runtime.sendMessage(t, t => {
            if (chrome.runtime.lastError) {
              i(chrome.runtime.lastError);
            }
            e(t);
          });
        })
      };
      chrome.runtime.onMessage.addListener(({
        type: t,
        payload: e,
        ignoreId: i
      }) => {
        if (t === "master:bordcast-message") {
          chrome.tabs.getCurrent(t => {
            if (t && i !== t.id) {
              this.messageScheduler.execTask(e.type, e.payload);
            }
          });
        } else if (t === "slave:bordcast-message") {
          this.messageScheduler.execTask(e.data.type, e.data.payload);
        }
      });
    };
    if (o.a) {
      throw new Error("it's not page");
    }
    this.initChannel();
  }
  postTask(t, e, i) {
    return new s(async (n, s) => {
      let a = false;
      await this.awaitChannel();
      const r = Object.assign(Object.assign(Object.assign({}, o.d), {
        taskId: Object(o.c)()
      }), i);
      if (r.timeout) {
        setTimeout(() => {
          if (!a) {
            n({
              error: "timeout"
            });
          }
        }, r.timeout);
      }
      try {
        const i = await this.channel.postTask({
          type: t,
          payload: Object.assign({
            data: e
          }, r)
        });
        a = true;
        n(i);
      } catch (t) {
        n({
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