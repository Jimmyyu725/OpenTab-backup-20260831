var r = require("./30.js");
module.exports = function (t, e, n, i) {
  if (i && i.enumerable) {
    t[e] = n;
  } else {
    r(t, e, n);
  }
};