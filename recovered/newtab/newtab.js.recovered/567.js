const r = require("./314.js");
module.exports = (t, e) => {
  const n = r(t, null, true);
  const i = r(e, null, true);
  const o = n.compare(i);
  if (o === 0) {
    return null;
  }
  const a = o > 0;
  const s = a ? n : i;
  const c = a ? i : n;
  const u = !!s.prerelease.length;
  if (!!c.prerelease.length && !u) {
    if (c.patch || c.minor) {
      if (s.patch) {
        return "patch";
      } else if (s.minor) {
        return "minor";
      } else {
        return "major";
      }
    } else {
      return "major";
    }
  }
  const l = u ? "pre" : "";
  if (n.major !== i.major) {
    return l + "major";
  } else if (n.minor !== i.minor) {
    return l + "minor";
  } else if (n.patch !== i.patch) {
    return l + "patch";
  } else {
    return "prerelease";
  }
};