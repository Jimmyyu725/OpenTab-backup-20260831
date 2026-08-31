var r = require("./99.js");
module.exports = function (t, n, e) {
  for (var o in n) {
    if (e && e.unsafe && t[o]) {
      t[o] = n[o];
    } else {
      r(t, o, n[o], e);
    }
  }
  return t;
};