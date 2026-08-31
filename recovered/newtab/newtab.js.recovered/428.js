const r = require("./152.js");
const i = require("./393.js");
const {
  ANY: o
} = i;
const a = require("./211.js");
const s = require("./394.js");
const c = require("./392.js");
const u = require("./425.js");
const l = require("./427.js");
const f = require("./426.js");
module.exports = (t, e, n, h) => {
  let p;
  let d;
  let m;
  let g;
  let y;
  t = new r(t, h);
  e = new a(e, h);
  switch (n) {
    case ">":
      p = c;
      d = l;
      m = u;
      g = ">";
      y = ">=";
      break;
    case "<":
      p = u;
      d = f;
      m = c;
      g = "<";
      y = "<=";
      break;
    default:
      throw new TypeError("Must provide a hilo val of \"<\" or \">\"");
  }
  if (s(t, e, h)) {
    return false;
  }
  for (let n = 0; n < e.set.length; ++n) {
    const r = e.set[n];
    let a = null;
    let s = null;
    r.forEach(t => {
      if (t.semver === o) {
        t = new i(">=0.0.0");
      }
      a = a || t;
      s = s || t;
      if (p(t.semver, a.semver, h)) {
        a = t;
      } else if (m(t.semver, s.semver, h)) {
        s = t;
      }
    });
    if (a.operator === g || a.operator === y) {
      return false;
    }
    if ((!s.operator || s.operator === g) && d(t, s.semver)) {
      return false;
    }
    if (s.operator === y && m(t, s.semver)) {
      return false;
    }
  }
  return true;
};