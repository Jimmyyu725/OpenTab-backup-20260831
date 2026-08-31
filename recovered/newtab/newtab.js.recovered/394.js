const r = require("./211.js");
module.exports = (t, e, n) => {
  try {
    e = new r(e, n);
  } catch (t) {
    return false;
  }
  return e.test(t);
};