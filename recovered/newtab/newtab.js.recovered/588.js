const r = require("./394.js");
const i = require("./210.js");
module.exports = (t, e, n) => {
  const o = [];
  let a = null;
  let s = null;
  const c = t.sort((t, e) => i(t, e, n));
  for (const t of c) {
    if (r(t, e, n)) {
      s = t;
      a ||= t;
    } else {
      if (s) {
        o.push([a, s]);
      }
      s = null;
      a = null;
    }
  }
  if (a) {
    o.push([a, null]);
  }
  const u = [];
  for (const [t, e] of o) {
    if (t === e) {
      u.push(t);
    } else if (e || t !== c[0]) {
      if (e) {
        if (t === c[0]) {
          u.push("<=" + e);
        } else {
          u.push(`${t} - ${e}`);
        }
      } else {
        u.push(">=" + t);
      }
    } else {
      u.push("*");
    }
  }
  const l = u.join(" || ");
  const f = typeof e.raw == "string" ? e.raw : String(e);
  if (l.length < f.length) {
    return l;
  } else {
    return e;
  }
};