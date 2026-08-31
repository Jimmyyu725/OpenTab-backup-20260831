var r = require("./30.js");
module.exports = function (t, n, e, o) {
  if (o && o.enumerable) {
    t[n] = e;
  } else {
    r(t, n, e);
  }
};