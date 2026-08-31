const r = require("./314.js");
module.exports = (t, e) => {
  const n = r(t, e);
  if (n && n.prerelease.length) {
    return n.prerelease;
  } else {
    return null;
  }
};