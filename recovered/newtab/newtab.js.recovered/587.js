const r = require("./211.js");
module.exports = (t, e, n) => {
  t = new r(t, n);
  e = new r(e, n);
  return t.intersects(e, n);
};