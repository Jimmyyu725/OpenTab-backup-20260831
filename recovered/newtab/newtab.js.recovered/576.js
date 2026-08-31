const r = require("./152.js");
const i = require("./314.js");
const {
  safeRe: o,
  t: a
} = require("./381.js");
module.exports = (t, e) => {
  if (t instanceof r) {
    return t;
  }
  if (typeof t == "number") {
    t = String(t);
  }
  if (typeof t != "string") {
    return null;
  }
  let n = null;
  if ((e = e || {}).rtl) {
    const r = e.includePrerelease ? o[a.COERCERTLFULL] : o[a.COERCERTL];
    let i;
    while ((i = r.exec(t)) && (!n || n.index + n[0].length !== t.length)) {
      if (!n || i.index + i[0].length !== n.index + n[0].length) {
        n = i;
      }
      r.lastIndex = i.index + i[1].length + i[2].length;
    }
    r.lastIndex = -1;
  } else {
    n = t.match(e.includePrerelease ? o[a.COERCEFULL] : o[a.COERCE]);
  }
  if (n === null) {
    return null;
  }
  const s = n[2];
  const c = n[3] || "0";
  const u = n[4] || "0";
  const l = e.includePrerelease && n[5] ? "-" + n[5] : "";
  const f = e.includePrerelease && n[6] ? "+" + n[6] : "";
  return i(`${s}.${c}.${u}${l}${f}`, e);
};