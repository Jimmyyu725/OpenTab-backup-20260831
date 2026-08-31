var r = require("./47.js");
var i = Math.max;
var o = Math.min;
module.exports = function (t, e) {
  var n = r(t);
  if (n < 0) {
    return i(n + e, 0);
  } else {
    return o(n, e);
  }
};