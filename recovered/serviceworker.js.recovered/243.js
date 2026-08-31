var r = require("./1.js");
require("./3.js");
const o = new class {
  constructor() {
    this.parseResponse = async t => {
      const e = t.headers.get("content-type");
      if (e.includes("application/json")) {
        return await t.json();
      } else if (e.includes("image")) {
        return await t.blob();
      } else {
        return await t.text();
      }
    };
    this.proxyFetch = async (t, e) => {
      const {
        url: n,
        request: r,
        option: o = {}
      } = t;
      fetch(n, r).then(async t => {
        if (o._proxyIgnoreRes) {
          return e({
            data: ""
          });
        }
        const n = await this.parseResponse(t);
        e({
          data: n
        });
      }).catch(t => {
        e({
          data: {
            code: 1000,
            data: null,
            message: t
          }
        });
      });
      return true;
    };
  }
  start() {
    r.a.listenTasks("slave:fetch", this.proxyFetch);
  }
}();
var i = require("./21.js");
var s = require("./87.js");
var _a = s;
var c = require("./47.js");
require("./27.js");
function u(t) {
  return t.split("@infinity@");
}
var f;
var l = require("./0.js");
var h = require("./6.js");
var p = h;
var d = require("./13.js");
var y = require("./22.js");
var m = y;
var g = require("./48.js");
async function v(t, e, n, r = false) {
  try {
    if (n === "idb") {
      await m.setItem(t, e);
    } else if (n === "localstorage") {
      let n = e;
      if (!r) {
        n = JSON.stringify(e);
      }
      if (l.f && d.a) {
        await Object(g.d)(t, n);
      } else {
        localStorage.setItem(t, n);
      }
    } else if (n === "storage.local") {
      await new p((n, r) => chrome.storage.local.set({
        [t]: e
      }, () => {
        const t = chrome.runtime.lastError;
        if (t) {
          r(t);
        }
        n(true);
      }));
    }
    return {
      data: true
    };
  } catch (t) {
    console.error("setStorage -> error", t);
    return {
      error: t
    };
  }
}
async function b(t, e) {
  try {
    if (e === "idb") {
      await m.removeItem(t);
    } else if (e === "localstorage") {
      if (l.f && d.a) {
        await Object(g.c)(t);
      } else {
        localStorage.removeItem(t);
      }
    } else if (e === "storage.local") {
      await new p((e, n) => chrome.storage.local.remove(t, () => {
        const t = chrome.runtime.lastError;
        if (t) {
          n(t);
        }
        e(null);
      }));
    }
    return {
      data: true
    };
  } catch (t) {
    console.error("clearStorage -> error", t);
    return {
      error: t
    };
  }
}
(function (t) {
  t.storeNote = "store-notes";
  t.storeSearch = "store-search";
  t.storeSetting = "store-setting";
  t.storeSite = "store-site";
  t.storeSync = "store-sync";
  t.storeTodo = "store-todo";
  t.storeUser = "store-user";
  t.storeWallpaper = "store-wallpaper";
  t.storeWeather = "store-weather";
  t.storeBookmarks = "store-bookmarks";
  t.storeGmail = "store-gmail";
  t.storePrivacy = "store-privacy";
  t.storeWallpaperAutoData = "store-wallpaper-auto-data";
  t.storeNotification = "store-notification";
})(f ||= {});
class w {
  constructor(t, e, n) {
    this.options = {
      ensureStringValue: false,
      keepWithLogout: false
    };
    this.key = t;
    this.type = e;
    this.options = Object.assign(Object.assign({}, this.options), n);
    this.setInstanceMapper();
  }
  static getInstanceFromKey(t) {
    if (this.instanceKeyMapper.has(t)) {
      return this.instanceKeyMapper.get(t);
    } else {
      return null;
    }
  }
  static async deleteAllForLogout() {
    const t = Array.from(this.instanceKeyMapper.values());
    let e;
    if ((await p.all(t.map(async t => await t.deleteForLogout()))).some(t => !!t.error && (e = t.error, true))) {
      return {
        error: e
      };
    } else {
      return {
        data: true
      };
    }
  }
  setInstanceMapper() {
    w.instanceKeyMapper.set(this.key, this);
  }
  async create(t) {
    return await v(this.key, t, this.type);
  }
  async read(t) {
    return await async function (t, e, n = false) {
      try {
        if (e === "idb") {
          return {
            data: await m.getItem(t)
          };
        }
        if (e === "localstorage") {
          let e;
          e = l.f && d.a ? await Object(g.a)(t) : localStorage.getItem(t);
          if (!n && e) {
            if (e === "undefined") {
              return {
                data: undefined
              };
            } else {
              return {
                data: JSON.parse(e)
              };
            }
          } else {
            return {
              data: e
            };
          }
        }
        if (e === "storage.local") {
          return {
            data: await new p((e, n) => chrome.storage.local.get(t, r => {
              const o = chrome.runtime.lastError;
              if (o) {
                n(o);
              }
              e(r == null ? undefined : r[t]);
            }))
          };
        }
      } catch (t) {
        console.error("getStorage -> error", t);
        return {
          error: t
        };
      }
    }(this.key, t || this.type);
  }
  async update(t) {
    const {
      data: e,
      error: n
    } = await this.read();
    if (n) {
      return {
        error: n
      };
    }
    if (e && typeof e == "object") {
      const n = Object.assign(Object.assign({}, e), t);
      return await this.create(n);
    }
    return {
      error: {
        data: e
      }
    };
  }
  async delete(t) {
    return await b(this.key, t || this.type);
  }
  async deleteWithRetain(...t) {
    if (t.length === 0) {
      return {
        error: {
          keys: t
        }
      };
    }
    const {
      data: e,
      error: n
    } = await this.read();
    if (n) {
      return {
        error: n
      };
    }
    if (e && typeof e == "object") {
      const n = {};
      t.forEach(t => {
        n[t] = e[t];
      });
      return await this.create(n);
    }
    return {
      error: {
        data: e
      }
    };
  }
  async deleteForLogout() {
    if (this.options.keepWithLogout) {
      return {
        data: true
      };
    } else {
      return await this.delete();
    }
  }
}
w.instanceKeyMapper = new Map();
new w(f.storeNote, "idb");
new class extends w {
  async create(t) {
    if (this.type !== "localstorage") {
      setTimeout(() => {
        v(this.key, t, "localstorage");
      }, 0);
    }
    return super.create(t);
  }
  async delete() {
    if (this.type !== "localstorage") {
      requestAnimationFrame(() => {
        b(this.key, "localstorage");
      });
    }
    return super.delete();
  }
  async deleteForLogout() {
    return await super.deleteWithRetain("ignoreSuggest");
  }
}(f.storeSearch, l.d ? "localstorage" : "idb");
const _ = new class extends w {
  async create(t) {
    if (this.type !== "localstorage") {
      setTimeout(() => {
        v(this.key, t, "localstorage");
      }, 0);
    }
    return super.create(t);
  }
  async delete() {
    if (this.type !== "localstorage") {
      requestAnimationFrame(() => {
        b(this.key, "localstorage");
      });
    }
    return super.delete();
  }
  async deleteForLogout() {
    return await super.deleteWithRetain("permission");
  }
}(f.storeSetting, l.d ? "localstorage" : "idb");
const x = new class extends w {
  async create(t) {
    if (this.type !== "localstorage") {
      setTimeout(() => {
        v(this.key, t, "localstorage");
      }, 0);
    }
    return super.create(t);
  }
  async delete() {
    if (this.type !== "localstorage") {
      requestAnimationFrame(() => {
        b(this.key, "localstorage");
      });
    }
    return super.delete();
  }
}(f.storeSite, l.d ? "localstorage" : "idb");
const T = new class extends w {
  constructor() {
    super(...arguments);
    this.userStore = null;
    this.sendTabsSync = t => {
      console.warn("SyncStorageManager ~ sync: need inject sendTabsSync", t);
    };
  }
  injectUserStore(t) {
    this.userStore = t;
  }
  injectSendTabsSync(t) {
    this.sendTabsSync = t;
  }
  async updateSyncPipe(t, e) {
    if (!this.userStore?.isLogin) {
      return {
        error: "isLogin false"
      };
    }
    const {
      data: r,
      error: o
    } = await this.read();
    if (o || !r) {
      return {
        error: "read error"
      };
    }
    if (!r.isOpenSync) {
      return {
        error: "isOpenSync false"
      };
    }
    const {
      autoBackupPipe: i
    } = r;
    i.data[t] = e;
    i.timestamp = Date.now();
    if (!i.websocketKeys.includes(t)) {
      i.websocketKeys.push(t);
    }
    const s = await this.update({
      autoBackupPipe: i
    });
    this.sendTabsSync(this.key);
    return s;
  }
}(f.storeSync, "idb");
const E = new w(f.storeTodo, "idb");
const O = new w(f.storeUser, l.d ? "localstorage" : "idb");
new w(f.storeWallpaper, "idb");
const S = new w(f.storeWeather, "idb");
new w(f.storeWallpaperAutoData, "idb");
new w(f.storeBookmarks, "localstorage", {
  keepWithLogout: true
});
new w(f.storeGmail, "localstorage", {
  keepWithLogout: true
});
new w(f.storePrivacy, "localstorage", {
  keepWithLogout: true
});
new w(f.storeNotification, "idb");
async function I(t, e) {
  try {
    if (e) {
      return await m.getItem(t);
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
async function A(t, e, n) {
  if (n) {
    await m.setItem(t, e);
  } else {
    localStorage.setItem(t, JSON.stringify(e));
  }
}
var N = require("./85.js");
var j = N;
var D = require("./242.js");
var C = D;
var P = require("./153.js");
var k = P;
const R = new class extends class {
  constructor() {
    this.initCompleted = false;
    this.initError = null;
    this.waitInitList = [];
  }
  initDone(t) {
    if (t) {
      this.initError = t;
    }
    this.initCompleted = true;
    while (this.waitInitList.length) {
      if (this.initError) {
        this.waitInitList.pop().reject(this.initError);
      } else {
        this.waitInitList.pop().resolve();
      }
    }
  }
  get initComplete() {
    return new p((t, e) => {
      if (this.initCompleted) {
        if (this.initError) {
          e(this.initError);
        } else {
          t();
        }
      } else {
        this.waitInitList.push({
          resolve: t,
          reject: e
        });
      }
    });
  }
} {
  constructor() {
    super();
    this.timer = null;
    this.timerItem = null;
    this.taskExecutors = {};
    this.allTasks = {};
    this.tasksQueue = [];
    this.save = j(() => A("alarms", this.allTasks, true), 20);
    this.updateQueue = () => {
      const t = [];
      Object.keys(this.allTasks).forEach(e => {
        const n = this.allTasks[e];
        if (n) {
          Object.keys(n).forEach(r => {
            const o = n[r];
            if (o) {
              t.push({
                type: e,
                taskId: r,
                options: o
              });
            }
          });
        }
      });
      this.tasksQueue = t.sort(({
        options: t
      }, {
        options: e
      }) => t.execTime - e.execTime);
    };
    this.init();
  }
  async init() {
    const t = await this.read();
    if (t) {
      this.allTasks = t;
    }
    this.updateQueue();
    this.setTimer();
    this.initDone();
  }
  read() {
    return I("alarms", true);
  }
  async tasksChanged() {
    this.updateQueue();
    this.setTimer();
    await this.save();
  }
  async setTimer() {
    if (this.tasksQueue.length === 0) {
      clearTimeout(this.timer);
      this.timer = null;
      return;
    }
    const t = this.tasksQueue[0];
    if (k(this.timerItem, t)) {
      return;
    }
    clearTimeout(this.timer);
    this.timerItem = C(t);
    const e = Date.now();
    const n = this.timerItem.options.execTime - e;
    this.timer = setTimeout(async () => {
      if (n > 0 || Math.abs(n) <= this.timerItem.options.expire) {
        await this.execTask(this.timerItem.type, this.timerItem.options);
      }
      this.removeTask(this.timerItem.type, this.timerItem.taskId, this.timerItem.options);
      this.setTimer();
    }, n > 1000 ? n : 1000);
  }
  async execTask(t, e) {
    const n = this.taskExecutors[t];
    if (!n) {
      console.warn("没有任务执行器");
      return "never";
    }
    try {
      await n(e.params);
      return "success";
    } catch (t) {
      console.error("Alarm ~ execTask ~ error", t);
      return "fail";
    }
  }
  register(t, e) {
    this.taskExecutors[t] = e;
  }
  async setTask(t, e, n) {
    await this.initComplete;
    if (this.allTasks[t]) {
      this.allTasks[t][e] = n;
    } else {
      this.allTasks[t] = {
        [e]: n
      };
    }
    await this.tasksChanged();
  }
  async resetTasks(t, e) {
    await this.initComplete;
    this.allTasks[t] = e;
    await this.tasksChanged();
  }
  async getTasks(t) {
    await this.initComplete;
    const e = this.allTasks[t];
    if (e && Object.keys(e).length > 0) {
      return Object.keys(e).map(t => ({
        taskId: t,
        options: e[t]
      }));
    } else {
      return [];
    }
  }
  async removeTask(t, e, n) {
    await this.initComplete;
    if (this.allTasks[t]) {
      if (e && n) {
        if (k(this.allTasks[t][e], n)) {
          delete this.allTasks[t][e];
          await this.tasksChanged();
        }
        return;
      }
      if (e) {
        if (this.allTasks[t][e]) {
          delete this.allTasks[t][e];
          await this.tasksChanged();
        }
        return;
      }
      delete this.allTasks[t];
      await this.tasksChanged();
    }
  }
}();
T.injectSendTabsSync(t => {
  r.a.sendMessage("tabs-sync", t);
});
const L = new class {
  constructor() {
    this.expire = 30000;
    this.hasRegistClick = false;
  }
  start() {
    R.register("todo-notification", async t => {
      const {
        data: e,
        error: n
      } = await E.read();
      if (n) {
        return;
      }
      if (!e || !e.todoList.length) {
        return;
      }
      const r = e.todoList.find(e => e.todoId === t.todoId);
      if (r) {
        await this.setNotification(r);
      }
    });
    this.initTasks();
    r.a.listenTasks("slave:change-todo", async t => {
      if (t) {
        this.resetTasks(t);
      }
    });
  }
  async initTasks() {
    const {
      data: t,
      error: e
    } = await E.read();
    if (!e) {
      if (t && t.todoList.length) {
        this.resetTasks(t.todoList.filter(t => !t.done && t.dueTimestamp > Date.now() - this.expire));
      }
    }
  }
  resetTasks(t) {
    const e = {};
    t.forEach(t => {
      e[t.todoId] = {
        execTime: t.dueTimestamp,
        expire: this.expire,
        params: {
          todoId: t.todoId
        }
      };
    });
    R.resetTasks("todo-notification", e);
  }
  convertInvalidDate(t) {
    return Object(c.a)(t);
  }
  setNotification(t) {
    {
      if (l.i) {
        self.registration.showNotification(Object(i.a)("have_todo_item"), {
          body: t.text,
          icon: _a,
          tag: t.todoId + t.dueTimestamp
        });
        self.onnotificationclick = async t => {
          const e = t.notification.tag;
          const {
            data: n,
            error: o
          } = await E.read();
          if (o) {
            return;
          }
          const i = n.todoList.map(t => t.todoId === e ? Object.assign(Object.assign({}, t), {
            done: true
          }) : t);
          const s = Object.assign({}, n, {
            todoList: i
          });
          await E.create(s);
          r.a.sendMessage("tabs-sync", E.key);
          const {
            data: a
          } = await O.read();
          T.injectUserStore(a);
          await T.updateSyncPipe("todo", {
            todoList: i
          });
        };
        return;
      }
      if (l.c || l.h) {
        const e = new Notification(Object(i.a)("have_todo_item"), {
          body: t.text,
          icon: _a,
          tag: t.todoId
        });
        e.onclick = async t => {
          const n = t.target.tag;
          const {
            data: o,
            error: i
          } = await E.read();
          if (i) {
            return;
          }
          const s = o.todoList.map(t => t.todoId === n ? Object.assign(Object.assign({}, t), {
            done: true
          }) : t);
          const a = Object.assign({}, o, {
            todoList: s
          });
          await E.create(a);
          r.a.sendMessage("tabs-sync", E.key);
          const {
            data: c
          } = await O.read();
          T.injectUserStore(c);
          await T.updateSyncPipe("todo", {
            todoList: s
          });
          e.close();
        };
        return;
      }
      const s = {
        type: "basic",
        iconUrl: _a,
        title: Object(i.a)("have_todo_item"),
        message: t.text
      };
      if (!l.g) {
        Object.assign(s, {
          buttons: [{
            title: Object(i.a)("no_more_reminder")
          }, {
            title: Object(i.a)("done")
          }]
        });
      }
      chrome.notifications.create((e = t.todoId, n = "todo", o = Math.random(), e ||= Object(c.b)("notice"), e + "@infinity@" + n + "@infinity@" + o), s);
      if (!this.hasRegistClick) {
        this.registClick();
        this.hasRegistClick = true;
      }
    }
    var e;
    var n;
    var o;
  }
  registClick() {
    chrome.notifications.onClicked.addListener(t => {
      const [, e] = u(t);
      if (e === "todo") {
        chrome.tabs.create({
          active: true
        }, () => {
          setTimeout(() => {}, 1000);
        });
      }
      chrome.notifications.clear(t);
    });
    chrome.notifications.onClosed.addListener(t => {
      chrome.notifications.clear(t);
    });
    chrome.notifications.onButtonClicked.addListener(async (t, e) => {
      const [n, o] = u(t);
      if (o !== "todo") {
        return;
      }
      const {
        data: i,
        error: s
      } = await E.read();
      if (s) {
        return;
      }
      const a = i.todoList;
      if (e === 0) {
        const t = a.map(t => t.todoId === n ? Object.assign(Object.assign({}, t), {
          noReminder: true
        }) : t);
        await E.create(Object.assign({}, i, {
          todoList: t
        }));
      }
      if (e === 1) {
        const t = a.map(t => t.todoId === n ? Object.assign(Object.assign({}, t), {
          done: true
        }) : t);
        const e = Object.assign({}, i, {
          todoList: t
        });
        await E.create(e);
        r.a.sendMessage("tabs-sync", E.key);
        const {
          data: o
        } = await O.read();
        T.injectUserStore(o);
        await T.updateSyncPipe("todo", {
          todoList: t
        });
      }
      chrome.notifications.clear(t);
    });
  }
}();
const M = new class {
  constructor() {
    this.timer = undefined;
    this.intervalTimer = undefined;
    this.setTimeTask = t => {
      const e = t => {
        this.timer = setTimeout(() => {
          this._timeToSwitchWallpaper();
        }, t);
      };
      this.stopRunAutoWallpaper();
      if (t) {
        e(t);
      }
    };
    this.stopRunAutoWallpaper = () => {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = undefined;
      }
    };
  }
  start() {
    r.a.listenTasks("slave:bg-run-timer-to-switch-wallpaper", this.setTimeTask);
    r.a.listenTasks("slave:bg-run-clear-wallpaper-timer-task", this.stopRunAutoWallpaper);
  }
  _timeToSwitchWallpaper() {
    r.a.sendMessage("tabs-time-to-switch-wallpaper");
  }
}();
const F = new class {
  start() {
    if (d.b === "serviceworker") {
      r.a.listenTasks("slave:bordcast-message", (t, e, n) => {
        r.a.sendMessage(t.type, t.payload, n);
      });
    }
  }
}();
const B = new class {
  constructor() {
    this.timer = null;
  }
  start() {
    clearInterval(this.timer);
    this.updateWeather();
    this.timer = setInterval(() => {
      this.updateWeather();
    }, 1800000);
  }
  check() {
    if (this.timer === null) {
      this.start();
    }
  }
  async getWeather() {
    const t = await fetch(`${l.m}/city/locate?lang=${l.o.lang}`);
    const e = await t.json();
    if (!(e == null ? undefined : e.city)) {
      return;
    }
    const {
      city: n
    } = e;
    const o = await fetch(`${l.m}/weather/forecast?lang=${l.o.lang}&cid=${n.cid}`);
    const i = await o.json();
    if (!(i == null ? undefined : i.forecast)) {
      return;
    }
    const {
      forecast: s
    } = i;
    s.name = n.city;
    const a = {
      localData: n,
      list: [s],
      lastUpdated: +new Date()
    };
    await S.create(a);
    r.a.sendMessage("tabs-sync", S.key);
  }
  async updateWeather() {
    const {
      data: e
    } = await S.read();
    const n = (e == null ? undefined : e.list) ?? [];
    if (!(n == null ? undefined : n.length)) {
      await this.getWeather();
      return;
    }
    for (const t in n) {
      const {
        cid: e,
        name: r
      } = n[t];
      const o = await fetch(`${l.m}/weather/forecast?lang=${l.o.lang}&cid=${e}`);
      const i = await o.json();
      let {
        forecast: s
      } = i;
      s ||= n[t];
      const a = Object.assign({}, s, {
        name: r
      });
      n[t] = a;
    }
    const o = {
      list: n,
      lastUpdated: +new Date()
    };
    const i = Object.assign({}, e, o);
    await S.create(i);
    r.a.sendMessage("tabs-sync", S.key);
  }
}();
const U = new class {
  start() {
    r.a.listenTasks("slave:master-init-i18n", async () => {
      console.log("service worker init i18n");
      await Object(i.b)();
    });
  }
}();
T.injectSendTabsSync(t => {
  r.a.sendMessage("tabs-sync", t);
});
const q = new class {
  constructor() {
    this.addIcon = async t => {
      const [{
        data: e,
        error: n
      }, {
        data: o,
        error: i
      }] = await p.all([x.read(), _.read()]);
      if (n || i) {
        return;
      }
      if (!e || !o) {
        return;
      }
      const {
        sites: s
      } = e;
      const {
        setting: a
      } = o;
      const c = s.length - 1;
      if (s.length === 0) {
        s.push([t]);
      } else if (s[c].length < a.layout.row * a.layout.col) {
        s[c].push(t);
      } else {
        s.push([t]);
      }
      await p.all([x.update({
        sites: s
      })]);
      const {
        data: u
      } = await O.read();
      T.injectUserStore(u);
      await T.updateSyncPipe("site", {
        sites: s
      });
      r.a.sendMessage("tabs-sync", x.key);
    };
  }
  start() {
    r.a.listenTasks("slave:add-icon", this.addIcon);
  }
}();
const W = new class {
  constructor() {
    this.prefetched = false;
  }
  start() {
    r.a.listenTasks("slave:prefetch", async (t, e) => {
      e(!this.prefetched);
      this.prefetched = true;
    });
  }
}();
export const a = (t = null) => {
  r.a.created(t);
  U.start();
  o.start();
  L.start();
  M.start();
  B.start();
  F.start();
  if (l.f) {
    q.start();
  }
  W.start();
};