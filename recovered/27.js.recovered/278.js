var e = require("./144.js");
var o = Math.max;
var i = Math.min;
module.exports = function (t, n) {
  var r = e(t);
  if (r < 0) {
    return o(r + n, 0);
  } else {
    return i(r, n);
  }
};