const r = require("./152.js");
const i = require("./211.js");
module.exports = (t, e, n) => {
  let o = null;
  let a = null;
  let s = null;
  try {
    s = new i(e, n);
  } catch (t) {
    return null;
  }
  t.forEach(t => {
    if (s.test(t)) {
      if (!o || a.compare(t) === 1) {
        o = t;
        a = new r(o, n);
      }
    }
  });
  return o;
};