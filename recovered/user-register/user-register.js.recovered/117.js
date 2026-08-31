var r = require("./47.js");
var o = Math.max;
var i = Math.min;
module.exports = function (t, n) {
  var e = r(t);
  if (e < 0) {
    return o(e + n, 0);
  } else {
    return i(e, n);
  }
};