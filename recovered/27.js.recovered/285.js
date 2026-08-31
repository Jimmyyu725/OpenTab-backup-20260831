var e = require("./99.js");
module.exports = function (t, n, r) {
  for (var o in n) {
    if (r && r.unsafe && t[o]) {
      t[o] = n[o];
    } else {
      e(t, o, n[o], r);
    }
  }
  return t;
};