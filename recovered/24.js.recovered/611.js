require("./19.js");
export const b = {
  isNonEmpty: (t, e) => t === "" ? e : undefined,
  minLength: (t, e, n) => t.length < e ? n : undefined,
  isEmail: (t, e) => /^\w+([+-.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(t) ? undefined : e,
  isPhone: (t, e) => /^1[3456789]\d{9}$/.test(t) ? undefined : e
};
exports.a = class {
  constructor() {
    this.cache = [];
  }
  add(t, e) {
    for (const n of e) {
      const e = n.strategy.split(":");
      const o = n.errorMsg;
      this.cache.push(() => {
        const n = e.shift();
        e.unshift(t);
        e.push(o);
        return b[n].apply(null, e);
      });
    }
  }
  start() {
    for (const t of this.cache) {
      const e = t();
      if (e) {
        return e;
      }
    }
  }
};