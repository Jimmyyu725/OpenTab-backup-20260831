var r = require("./99.js");
module.exports = function (t, e, n) {
  for (var o in e) {
    if (n && n.unsafe && t[o]) {
      t[o] = e[o];
    } else {
      r(t, o, e[o], n);
    }
  }
  return t;
};