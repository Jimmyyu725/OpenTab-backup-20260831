var r = require("./39.js");
module.exports = function (t, e, n) {
  for (var o in e) {
    r(t, o, e[o], n);
  }
  return t;
};