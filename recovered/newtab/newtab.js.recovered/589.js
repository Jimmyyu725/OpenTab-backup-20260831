const r = require("./211.js");
const i = require("./393.js");
const {
  ANY: o
} = i;
const a = require("./394.js");
const s = require("./210.js");
const c = [new i(">=0.0.0-0")];
const u = [new i(">=0.0.0")];
const l = (t, e, n) => {
  if (t === e) {
    return true;
  }
  if (t.length === 1 && t[0].semver === o) {
    if (e.length === 1 && e[0].semver === o) {
      return true;
    }
    t = n.includePrerelease ? c : u;
  }
  if (e.length === 1 && e[0].semver === o) {
    if (n.includePrerelease) {
      return true;
    }
    e = u;
  }
  const r = new Set();
  let i;
  let l;
  let p;
  let d;
  let m;
  let g;
  let y;
  for (const e of t) {
    if (e.operator === ">" || e.operator === ">=") {
      i = f(i, e, n);
    } else if (e.operator === "<" || e.operator === "<=") {
      l = h(l, e, n);
    } else {
      r.add(e.semver);
    }
  }
  if (r.size > 1) {
    return null;
  }
  if (i && l) {
    p = s(i.semver, l.semver, n);
    if (p > 0) {
      return null;
    }
    if (p === 0 && (i.operator !== ">=" || l.operator !== "<=")) {
      return null;
    }
  }
  for (const t of r) {
    if (i && !a(t, String(i), n)) {
      return null;
    }
    if (l && !a(t, String(l), n)) {
      return null;
    }
    for (const r of e) {
      if (!a(t, String(r), n)) {
        return false;
      }
    }
    return true;
  }
  let b = !!l && !n.includePrerelease && !!l.semver.prerelease.length && l.semver;
  let w = !!i && !n.includePrerelease && !!i.semver.prerelease.length && i.semver;
  if (b && b.prerelease.length === 1 && l.operator === "<" && b.prerelease[0] === 0) {
    b = false;
  }
  for (const t of e) {
    y = y || t.operator === ">" || t.operator === ">=";
    g = g || t.operator === "<" || t.operator === "<=";
    if (i) {
      if (w && t.semver.prerelease && t.semver.prerelease.length && t.semver.major === w.major && t.semver.minor === w.minor && t.semver.patch === w.patch) {
        w = false;
      }
      if (t.operator === ">" || t.operator === ">=") {
        d = f(i, t, n);
        if (d === t && d !== i) {
          return false;
        }
      } else if (i.operator === ">=" && !a(i.semver, String(t), n)) {
        return false;
      }
    }
    if (l) {
      if (b && t.semver.prerelease && t.semver.prerelease.length && t.semver.major === b.major && t.semver.minor === b.minor && t.semver.patch === b.patch) {
        b = false;
      }
      if (t.operator === "<" || t.operator === "<=") {
        m = h(l, t, n);
        if (m === t && m !== l) {
          return false;
        }
      } else if (l.operator === "<=" && !a(l.semver, String(t), n)) {
        return false;
      }
    }
    if (!t.operator && (l || i) && p !== 0) {
      return false;
    }
  }
  return (!i || !g || !!l || p === 0) && (!l || !y || !!i || p === 0) && !w && !b;
};
const f = (t, e, n) => {
  if (!t) {
    return e;
  }
  const r = s(t.semver, e.semver, n);
  if (r > 0) {
    return t;
  } else if (r < 0 || e.operator === ">" && t.operator === ">=") {
    return e;
  } else {
    return t;
  }
};
const h = (t, e, n) => {
  if (!t) {
    return e;
  }
  const r = s(t.semver, e.semver, n);
  if (r < 0) {
    return t;
  } else if (r > 0 || e.operator === "<" && t.operator === "<=") {
    return e;
  } else {
    return t;
  }
};
module.exports = (t, e, n = {}) => {
  if (t === e) {
    return true;
  }
  t = new r(t, n);
  e = new r(e, n);
  let i = false;
  t: for (const r of t.set) {
    for (const t of e.set) {
      const e = l(r, t, n);
      i = i || e !== null;
      if (e) {
        continue t;
      }
    }
    if (i) {
      return false;
    }
  }
  return true;
};