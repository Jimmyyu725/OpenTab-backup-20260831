const r = require("./314.js");
module.exports = (t, e) => {
  const n = r(t.trim().replace(/^[=v]+/, ""), e);
  if (n) {
    return n.version;
  } else {
    return null;
  }
};