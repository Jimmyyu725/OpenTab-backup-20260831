var r = require("./58.js");
var o = Math.max;
var i = Math.min;
module.exports = function (t, e) {
  var n = r(t);
  if (n < 0) {
    return o(n + e, 0);
  } else {
    return i(n, e);
  }
};