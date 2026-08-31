const n = require("./3779.js");
const o = require("./5090.js");
const a = {};
Object.keys(n).forEach(e => {
  a[e] = {};
  Object.defineProperty(a[e], "channels", {
    value: n[e].channels
  });
  Object.defineProperty(a[e], "labels", {
    value: n[e].labels
  });
  const t = o(e);
  Object.keys(t).forEach(r => {
    const n = t[r];
    a[e][r] = function (e) {
      const t = function (...t) {
        const r = t[0];
        if (r == null) {
          return r;
        }
        if (r.length > 1) {
          t = r;
        }
        const n = e(t);
        if (typeof n == "object") {
          for (let e = n.length, t = 0; t < e; t++) {
            n[t] = Math.round(n[t]);
          }
        }
        return n;
      };
      if ("conversion" in e) {
        t.conversion = e.conversion;
      }
      return t;
    }(n);
    a[e][r].raw = function (e) {
      const t = function (...t) {
        const r = t[0];
        if (r == null) {
          return r;
        } else {
          if (r.length > 1) {
            t = r;
          }
          return e(t);
        }
      };
      if ("conversion" in e) {
        t.conversion = e.conversion;
      }
      return t;
    }(n);
  });
});
module.exports = a;