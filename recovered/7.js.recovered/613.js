require(/*webcrack:missing*/"./7.js");
var n = require(/*webcrack:missing*/"./2.js");
var s = require(/*webcrack:missing*/"./309.js");
var _a = require("./251.js");
var o = require(/*webcrack:missing*/"./24.js");
var c = require(/*webcrack:missing*/"./22.js");
var r = require(/*webcrack:missing*/"./0.js");
var l = require(/*webcrack:missing*/"./429.js");
var d = require(/*webcrack:missing*/"./13.js");
function u(e, t, i, n) {
  var s;
  var a = arguments.length;
  var o = a < 3 ? t : n === null ? n = Object.getOwnPropertyDescriptor(t, i) : n;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
    o = Reflect.decorate(e, t, i, n);
  } else {
    for (var c = e.length - 1; c >= 0; c--) {
      if (s = e[c]) {
        o = (a < 3 ? s(o) : a > 3 ? s(t, i, o) : s(t, i)) || o;
      }
    }
  }
  if (a > 3 && o) {
    Object.defineProperty(t, i, o);
  }
  return o;
}
class p extends s.a {
  constructor() {
    super(...arguments);
    this.list = [];
    this.defaultSearch = _a.j;
    this.listHash = "";
    this.version = "";
    this.lang = "";
    this.ignoreSuggest = false;
    this.searchEngine = {
      custom: [],
      addList: [],
      current: Object(_a.l)(),
      all: []
    };
    this.convertBackupEquals = e => {
      let n = (e == null ? undefined : e.searchEngine)?.all;
      let s = (e == null ? undefined : e.searchEngine)?.current;
      n &&= e.searchEngine.all.map(e => e.uuid);
      s &&= e.searchEngine.current.uuid;
      if (n || s) {
        const t = Object.assign(Object.assign({}, e.searchEngine), {
          all: n,
          current: s
        });
        return Object.assign(Object.assign({}, e), {
          searchEngine: t
        });
      }
      return e;
    };
    this.mergeAddArray = (e = [], t = []) => {
      const i = "uuid";
      if (!e || e.length === 0) {
        return {
          result: t || [],
          isLocalEffective: false
        };
      }
      const n = t.filter(e => !!e);
      const s = e => {
        if (typeof e == "object") {
          return Object.keys(e).filter(e => e !== "uuid" && e !== "updatetime").sort().reduce((t, i) => t + e[i], "");
        }
      };
      const a = (e => {
        const t = Object.create(null);
        e.forEach(e => {
          const i = s(e);
          t[i] = true;
        });
        return t;
      })(t);
      const o = Object.create(null);
      t.forEach((e, t) => {
        if (e[i]) {
          const n = e[i];
          o[n] = t;
        }
      });
      let c = false;
      e.filter(e => e.updatetime !== 0).forEach(e => {
        const t = s(e);
        if (a[t]) {
          return;
        }
        const r = e[i];
        const l = o[r];
        if (l !== undefined) {
          if ((n[l].updatetime || 0) < (e.updatetime || 0)) {
            n[l] = e;
            c = true;
          }
        } else {
          c = true;
          n.push(e);
        }
      });
      return {
        result: n.filter(e => !!e),
        isLocalEffective: c
      };
    };
  }
  get allItems() {
    return [this.defaultSearch, ...this.searchEngine.all];
  }
  get baiduSearch() {
    const e = this.list.find(e => e.uuid === _a.a.uuid);
    if (e) {
      return e.types[0].url;
    } else {
      return "";
    }
  }
  get isCurrentInfinity() {
    return this.searchEngine.current.uuid === _a.j.uuid;
  }
  diffRemote(e) {
    const n = e.searchEngine || {};
    if (JSON.stringify(n.addList || {}) !== JSON.stringify(this.searchEngine.addList)) {
      return true;
    }
    if (JSON.stringify(n.custom || {}) !== JSON.stringify(this.searchEngine.custom)) {
      return true;
    }
    if (n.current?.uuid !== this.searchEngine.current.uuid) {
      return true;
    }
    if (n.all?.length !== this.searchEngine.all.length) {
      return true;
    }
    return this.searchEngine.all.some((e, t) => {
      return n.all?.[t]?.uuid !== e.uuid;
    });
  }
  mergeRemote(e, t) {
    if (e.searchEngine) {
      if (t) {
        this.searchEngine = this.transformSearchI18n(e.searchEngine);
      } else {
        const t = this.searchEngine.custom;
        const i = e.searchEngine.custom;
        const {
          result: n
        } = o.a.mergeArray(t, i, "uuid");
        const s = this.searchEngine.addList;
        const a = e.searchEngine.addList;
        const {
          result: c
        } = this.mergeAddArray(s, a);
        const r = this.searchEngine.all;
        const l = e.searchEngine.all;
        const {
          result: d
        } = o.a.mergeArray(r, l, "uuid");
        this.searchEngine = this.transformSearchI18n({
          custom: n,
          addList: c,
          current: e.searchEngine.current,
          all: d
        });
      }
    }
  }
  transformSearchI18n(e) {
    const t = Object.create(null);
    this.list.forEach(e => {
      t[e.uuid] = e;
    });
    const i = e => t[e.uuid] ? Object.assign(Object.assign({}, e), t[e.uuid]) : e;
    return {
      custom: e.custom,
      addList: e.addList,
      current: i(e.current),
      all: e.all.map(e => i(e))
    };
  }
  setActive(e) {
    this.searchEngine.current = this.allItems[e];
  }
  closeSuggestTips() {
    this.ignoreSuggest = true;
  }
  delShortcut(e) {
    const t = this.searchEngine.all.findIndex(t => t.uuid === e);
    if (t > -1) {
      this.searchEngine.all.splice(t, 1);
    }
  }
  updateShortcut(e) {
    if (e) {
      if (!this.searchEngine.all.some((t, i) => t.uuid === e.uuid && (this.searchEngine.all[i] = e, true))) {
        this.searchEngine.all.push(e);
      }
      const t = this.searchEngine.current.uuid;
      if (e.uuid === t) {
        this.searchEngine.current = e;
      }
    }
  }
  createEngine(e, t = null) {
    if (t === null) {
      const t = o.a.randomId("custom-search-");
      const i = Object.assign(Object.assign({}, e), {
        uuid: t
      });
      this.searchEngine.custom.push(i);
      return i;
    }
    this.searchEngine.custom[t] = Object.assign(Object.assign({}, this.searchEngine.custom[t]), e);
    return this.searchEngine.custom[t];
  }
  delEngine(e) {
    const {
      uuid: t
    } = this.searchEngine.custom[e];
    return t !== this.searchEngine.current.uuid && (this.delShortcut(t), this.searchEngine.custom.splice(e, 1), true);
  }
  createEngineAdd(e, t = null) {
    if (t === null) {
      const t = o.a.randomId("add-search-");
      const i = Object.assign(Object.assign({}, e), {
        uuid: t
      });
      this.searchEngine.addList.push(Object.assign(Object.assign({}, e), {
        uuid: t
      }));
      return i;
    }
    this.searchEngine.addList[t] = Object.assign(Object.assign({}, this.searchEngine.addList[t]), e);
    return this.searchEngine.addList[t];
  }
  delEngineAdd(e) {
    this.searchEngine.addList.splice(e, 1);
    return true;
  }
  transformSearchList(e) {
    const t = {};
    e.forEach(e => {
      if (e.searchParams) {
        t[e.uuid] = e.searchParams;
      }
    });
    return this.list.map(e => {
      if (t[e.uuid]) {
        const i = e.types[0].url;
        const n = t[e.uuid];
        let s = i;
        try {
          const e = new URL(i);
          const [t, a] = [...e.searchParams].pop() || [""];
          if (a === "") {
            e.searchParams.delete(t);
          }
          Object.keys(n).forEach(t => {
            if (n[t] === null) {
              e.searchParams.delete(t);
            } else {
              e.searchParams.set(t, n[t]);
            }
          });
          if (a === "") {
            e.searchParams.append(t, a);
          }
          s = e.toString();
        } catch (e) {}
        return Object.assign(Object.assign({}, e), {
          types: e.types.map((e, t) => t === 0 ? Object.assign(Object.assign({}, e), {
            url: s
          }) : e)
        });
      }
      return e;
    });
  }
  async getEnginesList() {
    let e = this.version;
    if (this.lang !== r.C.lang) {
      e = "";
    }
    const {
      data: t,
      error: i
    } = await c.c.getEnginesList(e);
    if (!i && (Object(n.i)(() => {
      this.version = t.meta?.version;
      this.lang = r.C.lang;
    }), t.hash !== this.listHash)) {
      const e = this.transformSearchList(t.list);
      if (l.userStore.isLogin) {
        this.updateEngines({
          list: e,
          listHash: t.hash
        });
      } else {
        this.stopAutoBackupReaction();
        try {
          this.updateEngines({
            list: e,
            listHash: t.hash
          });
        } catch (i) {}
        this.restartAutoBackupReaction();
      }
    }
  }
  updateEngines({
    list: e,
    listHash: t
  }) {
    this.list = e;
    this.listHash = t;
    const i = {};
    e.forEach(e => {
      i[e.uuid] = e;
    });
    const n = this.searchEngine.current.uuid;
    if (i[n]) {
      this.searchEngine.current = i[n];
    }
    const s = this.defaultSearch.uuid;
    if (i[s]) {
      this.defaultSearch = i[s];
    }
    const a = [];
    this.searchEngine.all.forEach(e => {
      const t = e.uuid;
      if (i[t]) {
        if (e.updatetime === 0) {
          a.push(Object.assign(Object.assign({}, i[t]), {
            updatetime: 0
          }));
        } else {
          a.push(Object.assign({}, i[t]));
        }
      } else {
        a.push(e);
      }
    });
    this.searchEngine.all = a;
  }
  sortShortcut(e, t) {
    if (e === t) {
      return;
    }
    const i = [...this.searchEngine.all];
    const n = i.findIndex(t => t.uuid === e);
    if (n !== -1) {
      if (t === "all") {
        const [e] = i.splice(n, 1);
        i.push(e);
      } else {
        const e = i.findIndex(e => e.uuid === t);
        if (e === -1) {
          return;
        }
        const [s] = i.splice(n, 1);
        i.splice(e, 0, s);
      }
      this.searchEngine.all = i;
    }
  }
}
u([n.g], p.prototype, "list", undefined);
u([n.g], p.prototype, "defaultSearch", undefined);
u([n.g], p.prototype, "listHash", undefined);
u([n.g], p.prototype, "version", undefined);
u([n.g], p.prototype, "lang", undefined);
u([n.g], p.prototype, "ignoreSuggest", undefined);
u([n.g], p.prototype, "searchEngine", undefined);
u([n.e], p.prototype, "allItems", null);
u([n.e], p.prototype, "baiduSearch", null);
u([n.e], p.prototype, "isCurrentInfinity", null);
u([n.b], p.prototype, "mergeRemote", null);
u([n.b], p.prototype, "setActive", null);
u([n.b], p.prototype, "closeSuggestTips", null);
u([n.b], p.prototype, "delShortcut", null);
u([n.b], p.prototype, "updateShortcut", null);
u([n.b], p.prototype, "createEngine", null);
u([n.b], p.prototype, "delEngine", null);
u([n.b], p.prototype, "createEngineAdd", null);
u([n.b], p.prototype, "delEngineAdd", null);
u([n.b], p.prototype, "getEnginesList", null);
u([n.b], p.prototype, "updateEngines", null);
u([n.b], p.prototype, "sortShortcut", null);
export const a = new p();
a.initSyncStore(d.g, ["searchEngine", "list", "listHash", "ignoreSuggest", "version", "lang"], {
  list: _a.n,
  searchEngine: {
    custom: [],
    addList: [],
    current: Object(_a.l)(),
    all: Object(_a.k)()
  }
});
a.initAutoBackup("searcher", ["searchEngine"]);
Object(n.c)(() => {
  if (a.firstSync) {
    a.getEnginesList();
  }
});