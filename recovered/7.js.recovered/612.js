require(/*webcrack:missing*/"./7.js");
var n = require(/*webcrack:missing*/"./2.js");
var s = require(/*webcrack:missing*/"./403.js");
var _a = s;
var o = require(/*webcrack:missing*/"./309.js");
var c = require(/*webcrack:missing*/"./430.js");
var r = require(/*webcrack:missing*/"./24.js");
var l = require(/*webcrack:missing*/"./0.js");
var d = require("./251.js");
var u = require(/*webcrack:missing*/"./431.js");
var p = require("./610.js");
var h = require(/*webcrack:missing*/"./13.js");
function g(e, t, i, n) {
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
class b extends o.a {
  constructor() {
    super(...arguments);
    this.sites = [];
    this.editingId = null;
    this.currentPageIndex = 0;
    this.redirectVersion = "";
    this.updatedIconVersion = "";
    this.mergeSiteArray = (e, t, i) => {
      const n = e => {
        if (typeof e == "object") {
          if (e.target === d.p.target) {
            return ["target", "uuid"].reduce((t, i) => t + e[i], "");
          }
          return Object.keys(e).filter(e => e !== "id" && e !== "updatetime").sort().reduce((t, i) => t + e[i], "");
        }
      };
      const s = (e => {
        const t = Object.create(null);
        const i = e => {
          e.forEach(e => {
            if (Array.isArray(e)) {
              i(e);
            } else if (e && e.id) {
              const s = e.id;
              t[s] = e;
              if (e.children?.length > 0) {
                i(e.children);
              }
            }
          });
        };
        i(e);
        return t;
      })(t);
      const a = (e => {
        const t = Object.create(null);
        const i = e => {
          e.forEach(e => {
            if (Array.isArray(e)) {
              i(e);
            } else if (typeof e == "object") {
              if (e.children?.length > 0) {
                i(e.children);
              } else {
                const i = n(e);
                t[i] = true;
              }
            }
          });
        };
        i(e);
        return t;
      })(t);
      let o = false;
      e.forEach((t, i) => {
        e[i] = t.filter(e => {
          const i = s[e.id];
          const c = e.updatetime || 0;
          if (e.children?.length > 0) {
            if (i) {
              if (c > (i.updatetime || 0)) {
                o = true;
                i.name = e.name;
              }
              e.children.forEach(e => {
                if (s[e.id]) {
                  const t = s[e.id].updatetime || 0;
                  if ((e.updatetime || 0) > t) {
                    o = true;
                    Object.assign(s[e.id], e);
                  }
                } else {
                  o = true;
                  i.children.push(e);
                }
              });
              return false;
            }
            e.children = e.children.filter(e => {
              if (s[e.id]) {
                const t = s[e.id].updatetime || 0;
                if ((e.updatetime || 0) > t) {
                  o = true;
                  Object.assign(s[e.id], e);
                }
                return false;
              }
              return true;
            });
            return e.children.length !== 0 && (e.children.length === 1 && (Object.assign(e, e.children[0]), delete e.children), true);
          }
          {
            if (!e.updatetime) {
              return false;
            }
            const t = n(e);
            if (a[t]) {
              return false;
            }
            if (i) {
              if (c > (i.updatetime || 0)) {
                o = true;
                Object.assign(s[e.id], e);
              }
              return false;
            }
            return true;
          }
        });
      });
      const c = [];
      e.forEach(e => {
        e.forEach(e => {
          c.push(e);
        });
      });
      if (c.length > 0 && t.length > 0) {
        o = true;
        let e = t.length - 1;
        c.forEach(n => {
          if (t[e].length < i) {
            t[e].push(n);
          } else {
            e += 1;
            t[e] = [n];
          }
        });
      }
      return {
        result: t,
        isLocalEffective: o
      };
    };
    this.convertBackupEquals = e => {
      const {
        sites: t
      } = e;
      if (t == null ? undefined : t.length) {
        t.forEach(e => {
          if (e == null ? undefined : e.length) {
            e.forEach(e => {
              if ((e == null ? undefined : e.uuid) === d.p.uuid) {
                e.name = undefined;
                e.bgColor = undefined;
                e.bgImage = undefined;
              } else if (e == null ? undefined : e.children) {
                e.children.forEach(e => {
                  if ((e == null ? undefined : e.uuid) === d.p.uuid) {
                    e.name = undefined;
                    e.bgColor = undefined;
                    e.bgImage = undefined;
                  }
                });
              }
            });
          }
        });
      }
      return e;
    };
    this.reSortTimer = null;
    this.reSort = (e, t) => {
      clearTimeout(this.reSortTimer);
      this.reSortTimer = setTimeout(() => {
        const i = e * t;
        const s = this.sites.reduce((e, t) => e.concat(t), []);
        const a = Array(Math.ceil(s.length / i)).fill(null);
        Object(n.i)(() => {
          this.sites = a.map((e, t) => s.slice(t * i, (t + 1) * i));
        });
      }, 0);
    };
  }
  get uids() {
    const e = new Set();
    if (u.pluginStore.pluginViews.includes("infinity://chatai") || u.pluginStore.pluginViews.includes("infinity://settings") || u.pluginStore.pluginViews.includes("profile")) {
      this.sites.forEach(t => {
        t.filter(e => e).forEach(t => {
          if (t.children) {
            t.children.forEach(t => {
              e.add(t.uuid + "#" + t.target);
            });
          } else {
            e.add(t.uuid + "#" + t.target);
          }
        });
      });
    }
    return e;
  }
  changeCurrentPage(e) {
    this.currentPageIndex = e;
  }
  diffRemote(e) {
    const t = e => {
      if ((e == null ? undefined : e.target) === d.p.target) {
        const t = {
          name: undefined,
          bgColor: undefined,
          bgImage: undefined
        };
        return Object.assign(Object.assign({}, e), t);
      }
    };
    const i = _a(e.sites || [], t);
    const s = _a(Object(n.j)(this.sites), t);
    return !n.d.structural(i, s);
  }
  mergeRemote(e, t) {
    if (!e.sites) {
      return;
    }
    const i = Object(p.getCurrentWeather)();
    if (t) {
      this.setWeatherIcon(e.sites, i);
      this.sites = e.sites;
    } else {
      const {
        col: t,
        row: s
      } = c.b.setting.layout;
      const a = t * s;
      const {
        result: o
      } = this.mergeSiteArray(Object(n.j)(this.sites), e.sites, a);
      this.setWeatherIcon(o, i);
      this.sites = o;
    }
    if (this.sites.length) {
      if (this.sites.length - 1 < this.currentPageIndex) {
        document.querySelector("newtab-main").toPage(this.sites.length - 1);
      }
    } else {
      this.currentPageIndex = 0;
    }
  }
  clearEditSite() {
    this.editingId = null;
  }
  setEditSite(e) {
    this.editingId = e;
  }
  delSites(e = [], t = true) {
    var n;
    const [a, o, c] = e;
    let r;
    let l = null;
    if (e.length === 2) {
      r = this.sites[a].splice(o, 1);
    } else if (e.length === 3) {
      r = (n = this.sites[a][o]?.children) === null || n === undefined ? undefined : n.splice(c, 1);
    }
    if (t) {
      this.finishingSites(e[0]);
    }
    if (e.length === 2 && this.sites[a]?.length === 0) {
      l = a;
    }
    return {
      data: r,
      clearPageIndex: l
    };
  }
  insertSite(e = [], t) {
    var n;
    const [s, a, o] = e;
    if (e.length === 2) {
      if (s !== this.sites.length || this.sites[s]) {
        this.sites[s].splice(a, 0, t);
      } else {
        this.sites.push([t]);
      }
    } else if (e.length === 3) {
      if ((n = this.sites[s][a]?.children) !== null && n !== undefined) {
        n.splice(o, 0, t);
      }
    }
  }
  handelStatus(e, t, i, n, s) {
    const [a] = e;
    let [o] = t;
    if (s !== null && s < o) {
      o -= 1;
      document.querySelector("newtab-main")._toPrevPage(true);
    }
    if (e.length === 3 && i.children.length < 2) {
      const e = this.findIndex(a, i.id);
      this.destroyFolder(e);
      o -= 1;
    }
    const c = s !== null ? Math.min(s, o) : o;
    this.finishingSites(Math.max(c, 0));
    return this.findIndex(o, n.id);
  }
  findIndex(e, t) {
    const i = [];
    for (let n = Math.max(e || 0, 0); n < this.sites.length; n++) {
      const e = this.sites[n];
      i[0] = n;
      if (e.find((e, n) => e.id === t ? (i[1] = n, true) : !!e.children && e.children.find((e, s) => e.id === t && (i[1] = n, i[2] = s, true)))) {
        return i;
      }
    }
  }
  findIcon(e, t) {
    let i = {};
    for (let n = Math.max(e || 0, 0); n < this.sites.length; n++) {
      if (this.sites[n].some(e => e.id === t ? (i = e, true) : !!e.children && e.children.some(e => e.id === t && (i = e, true)))) {
        return i;
      }
    }
    return i;
  }
  destroyFolder(e) {
    const [t, i] = e;
    const n = this.sites[t][i].children;
    if (n.length === 0) {
      this.sites[t].splice(i, 1);
    } else {
      this.sites[t][i] = n.shift();
      if (n.length > 0) {
        this.sites[t].push(...n);
      }
    }
  }
  manualDestroyFolder(e) {
    const [t, i] = e;
    const n = this.sites[t][i].children;
    this.sites[t].splice(i, 1);
    const {
      col: s,
      row: a
    } = c.b.setting.layout;
    const o = s * a - this.sites[t].length;
    if (o >= n.length) {
      this.sites[t].push(...n);
    } else {
      const e = n.splice(0, o);
      this.sites[t].push(...e);
      const i = this.sites.length - 1;
      this.sites[i].push(...n);
      this.finishingSites(i);
    }
  }
  finishingSites(e = 0) {
    const {
      col: t,
      row: i
    } = c.b.setting.layout;
    const n = t * i;
    const s = e => {
      if (this.sites.length <= e) {
        return;
      }
      const t = this.sites[e].length;
      if (t > n) {
        const i = e + 1;
        const a = this.sites[e].splice(n, t - n);
        if (this.sites.length > i) {
          this.sites[i].unshift(...a);
        } else {
          this.sites.push(a);
        }
        s(i);
      } else if (t === 0) {
        if (e && e === this.sites.length - 1) {
          document.querySelector("newtab-main").toPage(e - 1);
        }
        this.sites.splice(e, 1);
        s(e);
      } else {
        s(e + 1);
      }
    };
    s(e);
    for (let e = 0; e < this.sites.length;) {
      const t = this.sites[e];
      if (!t || !t.length) {
        this.sites.splice(e, 1);
        e -= 1;
      }
      e += 1;
    }
  }
  addSite(e, t = 0) {
    if (this.sites.length > t) {
      const {
        col: i,
        row: n
      } = c.b.setting.layout;
      const s = i * n;
      if (this.sites[t].length < s) {
        this.sites[t].push(e);
        return t;
      } else {
        return this.addSite(e, t + 1);
      }
    }
    this.sites[t] = [e];
    return t;
  }
  isIcon(e, t) {
    return !this.findIcon(e, t).children;
  }
  changeFolderName(e, t) {
    const [i, n] = e;
    this.sites[i][n].name = t;
    this.sites[i][n].updatetime = Date.now();
  }
  setWeatherIcon(e, t) {
    e.forEach(e => {
      if (e) {
        e.forEach(e => {
          if (e.target === d.p.target) {
            e.name = t.name || d.p.name;
            e.bgColor = t.bgColor || d.p.bgColor;
            e.bgImage = t.bgImg || d.p.bgImage;
          }
          if (e.children) {
            e.children.forEach(e => {
              if (e.target === d.p.target) {
                e.name = t.name || d.p.name;
                e.bgColor = t.bgColor || d.p.bgColor;
                e.bgImage = t.bgImg || d.p.bgImage;
              }
            });
          }
        });
      }
    });
  }
  async submitSite(e) {
    if (e.bgType === "color") {
      delete e.bgImage;
    } else if (e.bgType === "image") {
      delete e.bgFont;
      delete e.bgText;
      delete e.bgColorImage;
      if (e.bgColor === "transparent") {
        e.bgColor = undefined;
      }
    }
    e.updatetime = await r.a.getTimestamp();
    if (this.editingId) {
      const t = document.querySelector("newtab-main").iconSearchShow;
      const i = this.findIcon(t ? 0 : this.currentPageIndex, this.editingId);
      let s = {};
      Object(n.i)(() => {
        s = Object.assign(i, e);
        if (s.target === d.p.target) {
          const e = Object(p.getCurrentWeather)();
          this.setWeatherIcon(a.sites, e);
        }
      });
    } else {
      const t = Object.assign({
        uuid: r.a.randomId("site-"),
        id: r.a.randomId("siteId-"),
        type: "web"
      }, e);
      const i = a.addSite(t, this.currentPageIndex);
      if (t.target === d.p.target) {
        const e = Object(p.getCurrentWeather)();
        this.setWeatherIcon(a.sites, e);
      }
      document.querySelector("newtab-main").toPage(i);
    }
    return null;
  }
  setRedirectVersion(e) {
    this.redirectVersion = e;
  }
  updateIconData() {
    if (!l.j && this.updatedIconVersion === "11.0.39") {
      return;
    }
    const e = {
      [d.g]: {
        oldTarget: d.f,
        newTarget: d.e
      },
      [d.d]: {
        oldTarget: d.c,
        newTarget: d.b
      }
    };
    this.sites.forEach(t => {
      t.forEach(t => {
        if (t.children?.length) {
          t.children.forEach(t => {
            if (e[t.uuid] && t.target === e[t.uuid].oldTarget) {
              t.target = e[t.uuid].newTarget;
            }
          });
        } else if (e[t.uuid] && t.target === e[t.uuid].oldTarget) {
          t.target = e[t.uuid].newTarget;
        }
      });
    });
    this.sites = [...this.sites];
    this.updatedIconVersion = "11.0.39";
  }
}
g([n.g], b.prototype, "sites", undefined);
g([n.g], b.prototype, "editingId", undefined);
g([n.g], b.prototype, "currentPageIndex", undefined);
g([n.g], b.prototype, "redirectVersion", undefined);
g([n.g], b.prototype, "updatedIconVersion", undefined);
g([n.e], b.prototype, "uids", null);
g([n.b], b.prototype, "changeCurrentPage", null);
g([n.b], b.prototype, "mergeRemote", null);
g([n.b], b.prototype, "clearEditSite", null);
g([n.b], b.prototype, "setEditSite", null);
g([n.b], b.prototype, "delSites", null);
g([n.b], b.prototype, "insertSite", null);
g([n.b], b.prototype, "destroyFolder", null);
g([n.b], b.prototype, "manualDestroyFolder", null);
g([n.b], b.prototype, "finishingSites", null);
g([n.b], b.prototype, "reSort", undefined);
g([n.b], b.prototype, "addSite", null);
g([n.b], b.prototype, "changeFolderName", null);
g([n.b], b.prototype, "setWeatherIcon", null);
g([n.b], b.prototype, "submitSite", null);
g([n.b], b.prototype, "setRedirectVersion", null);
g([n.b], b.prototype, "updateIconData", null);
export const a = new b();
a.initSyncStore(h.i, ["sites", "redirectVersion", "updatedIconVersion"], {
  sites: Object(d.m)(l.C.lang)
});
a.initAutoBackup("site", ["sites"]);
Object(n.h)(() => [c.b.setting.layout.col, c.b.setting.layout.row].join(","), () => {
  if (a.firstSync) {
    setTimeout(() => {
      Object(c.a)(false);
    }, 0);
  }
}, {
  delay: 0
});
const m = () => {
  requestIdleCallback(() => {
    if (a.firstSync) {
      a.sites.forEach((e, t) => {
        if (!e || e.length === 0) {
          Object(n.i)(() => {
            a.sites.splice(t, 1);
          });
        }
      });
      a.sites.forEach((e, t) => {
        e.forEach((e, i) => {
          if (!e) {
            Object(n.i)(() => {
              a.sites[t].splice(i, 1);
            });
          }
        });
      });
    } else {
      m();
    }
  });
};
setTimeout(() => {
  m();
}, 60);
Object(n.c)(() => {
  if (p.weatherStore.firstSync) {
    const e = Object(p.getCurrentWeather)();
    a.setWeatherIcon(a.sites, e);
  }
}, {
  delay: 20
});
Object(n.c)(() => {
  if (a.firstSync) {
    requestIdleCallback(() => {
      a.updateIconData();
    });
  }
}, {
  delay: 20
});
c.b.changeLayout(a.reSort);