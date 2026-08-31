const r = require("./152.js");
module.exports = (t, e, n) => {
  const i = new r(t, n);
  const o = new r(e, n);
  return i.compare(o) || i.compareBuild(o);
};