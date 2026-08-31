const r = require("./152.js");
const i = require("./211.js");
const o = require("./392.js");
module.exports = (t, e) => {
  t = new i(t, e);
  let n = new r("0.0.0");
  if (t.test(n)) {
    return n;
  }
  n = new r("0.0.0-0");
  if (t.test(n)) {
    return n;
  }
  n = null;
  for (let e = 0; e < t.set.length; ++e) {
    const i = t.set[e];
    let a = null;
    i.forEach(t => {
      const e = new r(t.semver.version);
      switch (t.operator) {
        case ">":
          if (e.prerelease.length === 0) {
            e.patch++;
          } else {
            e.prerelease.push(0);
          }
          e.raw = e.format();
        case "":
        case ">=":
          if (!a || !!o(e, a)) {
            a = e;
          }
          break;
        case "<":
        case "<=":
          break;
        default:
          throw new Error("Unexpected operation: " + t.operator);
      }
    });
    if (!!a && (!n || !!o(n, a))) {
      n = a;
    }
  }
  if (n && t.test(n)) {
    return n;
  } else {
    return null;
  }
};