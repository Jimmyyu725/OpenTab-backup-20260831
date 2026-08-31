var r = require("./99.js");
module.exports = function (t, e, n) {
  for (var i in e) {
    if (n && n.unsafe && t[i]) {
      t[i] = e[i];
    } else {
      r(t, i, e[i], n);
    }
  }
  return t;
};