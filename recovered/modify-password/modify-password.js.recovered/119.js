var r = require("./26.js");
module.exports = function (t, n, e) {
  for (var o in n) {
    r(t, o, n[o], e);
  }
  return t;
};