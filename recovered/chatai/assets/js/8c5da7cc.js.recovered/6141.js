var n = require(/*webcrack:missing*/"./4522.js");
var o = require("./5844.js");
export const S = [n.BU.wallpaper, n.BU.icon, n.BU.search, n.BU.setting, n.BU.note, n.BU.todo, n.BU.timerBirthday, n.BU.timerFestival, n.BU.timerYear, n.BU.weather, n.BU.hotsearch, n.BU.calculator, n.BU.worldcup, n.BU.exchangeRate, n.BU.habit, n.BU.stock, n.BU.game, n.BU.movie, n.BU.book, n.BU.play, n.BU.clock, n.BU.worldClock, n.BU.hotApp, n.BU.nba, n.BU.chatgpt, n.BU.pageTurning];
export const b = (e, t) => {
  e = (e => {
    const t = (0, o.Z)(e);
    Object.keys(t).forEach(e => {
      const r = t[e];
      if (Array.isArray(r) && r[0]) {
        const n = r[0];
        if (typeof n == "object" && n.id && typeof n.updateTime == "number") {
          if (Array.isArray(n.children)) {
            r.forEach(e => {
              e.children = e.children.filter(e => e.updateTime !== 0);
            });
            t[e] = r.filter(e => !!e.updateTime && !!e.children.length);
          } else {
            t[e] = r.filter(e => !!e.updateTime);
          }
        }
      }
    });
    return t;
  })(e);
  let r = t;
  let n = e;
  if (e.updateCloudTime && t.updateCloudTime < e.updateCloudTime) {
    r = e;
    n = t;
  }
  const a = {
    ...n,
    ...r
  };
  Object.keys(a).forEach(e => {
    const t = n[e];
    const o = r[e];
    if (Array.isArray(o) && Array.isArray(t)) {
      const r = o[0] ? o[0] : t[0];
      if (typeof r == "string") {
        a[e] = ((e, t) => [...new Set([...t, ...e])])(t, o);
      } else if (typeof r == "object" && r.id) {
        if (Array.isArray(r.children)) {
          a[e] = ((e, t) => {
            const r = new Map();
            const n = new Map();
            t.forEach(e => {
              r.set(e.id, e);
              if (Array.isArray(e.children)) {
                e.children.forEach(t => {
                  if (Array.isArray(t.children)) {
                    n.set(t.id, {
                      parent: e.id,
                      item: {
                        ...t,
                        children: []
                      }
                    });
                    t.children.forEach(r => {
                      n.set(r.id, {
                        parent: t.id,
                        cateId: e.id,
                        item: r
                      });
                    });
                  } else {
                    n.set(t.id, {
                      parent: e.id,
                      item: t
                    });
                  }
                });
              }
            });
            e.forEach(e => {
              const t = r.get(e.id);
              if (t) {
                if (t.updateTime < e.updateTime) {
                  r.set(e.id, e);
                }
              } else {
                r.set(e.id, e);
              }
              if (Array.isArray(e.children)) {
                e.children.forEach(t => {
                  if (Array.isArray(t.children)) {
                    if (!n.get(t.id)) {
                      n.set(t.id, {
                        parent: e.id,
                        item: {
                          ...t,
                          children: []
                        }
                      });
                    }
                    t.children.forEach(r => {
                      const o = n.get(r.id);
                      if (o) {
                        if (o.item.updateTime < r.updateTime) {
                          n.set(r.id, {
                            parent: o.parent,
                            cateId: e.id,
                            item: r
                          });
                        }
                      } else {
                        n.set(r.id, {
                          parent: t.id,
                          cateId: e.id,
                          item: r
                        });
                      }
                    });
                  } else {
                    const r = n.get(t.id);
                    if (r) {
                      if (r.item.updateTime < t.updateTime) {
                        n.set(t.id, {
                          parent: r.parent,
                          item: t
                        });
                      }
                    } else {
                      n.set(t.id, {
                        parent: e.id,
                        item: t
                      });
                    }
                  }
                });
              }
            });
            const o = t.map(e => {
              const t = r.get(e.id);
              r.delete(e.id);
              return t;
            });
            if (r.size > 0) {
              r.forEach(e => {
                o.push(e);
              });
            }
            o.forEach(e => {
              e.children = e.children.map(e => {
                const t = n.get(e.id);
                n.delete(e.id);
                if (t == null) {
                  return undefined;
                } else {
                  return t.item;
                }
              }).filter(e => !!e);
            });
            if (n.size > 0) {
              n.forEach(e => {
                const t = o.find(t => t.id === e.parent);
                if (t) {
                  t.children.push(e.item);
                  n.delete(e.item.id);
                }
              });
            }
            if (n.size > 0) {
              n.forEach(e => {
                const t = o.find(t => t.id === e.cateId);
                if (t) {
                  const n = t.children.find(t => t.id === e.parent);
                  var r;
                  if (n) {
                    if ((r = n.children) !== null && r !== undefined) {
                      r.push(e.item);
                    }
                  }
                }
              });
            }
            o.forEach(e => {
              if (Array.isArray(e.children)) {
                e.children = e.children.map(e => Array.isArray(e.children) && e.children.length < 1 ? null : e).filter(e => !!e);
              }
            });
            return o;
          })(t, o);
        } else {
          a[e] = ((e, t) => {
            const r = new Map();
            t.forEach(e => {
              r.set(e.id, e);
            });
            e.forEach(e => {
              const t = r.get(e.id);
              if (t) {
                if (t.updateTime < e.updateTime) {
                  r.set(e.id, e);
                }
              } else {
                r.set(e.id, e);
              }
            });
            const n = t.map(e => {
              const t = r.get(e.id);
              r.delete(e.id);
              return t;
            }).filter(e => !!e);
            if (r.size > 0) {
              r.forEach(e => {
                n.push(e);
              });
            }
            return n;
          })(t, o);
        }
      }
    }
  });
  return a;
};