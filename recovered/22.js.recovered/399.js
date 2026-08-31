var r = require(/*webcrack:missing*/"./12.js");
var i = require(/*webcrack:missing*/"./83.js");
module.exports = function (t, e, n) {
  var o;
  var s;
  if (i && typeof (o = e.constructor) == "function" && o !== n && r(s = o.prototype) && s !== n.prototype) {
    i(t, s);
  }
  return t;
};