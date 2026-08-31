var r = require("./26.js");
module.exports = function (t, e, n) {
  for (var i in e) {
    r(t, i, e[i], n);
  }
  return t;
};