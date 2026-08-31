var r = require("./10.js");
module.exports = function (t, e) {
  r.forEach(t, function (n, r) {
    if (r !== e && r.toUpperCase() === e.toUpperCase()) {
      t[e] = n;
      delete t[r];
    }
  });
};