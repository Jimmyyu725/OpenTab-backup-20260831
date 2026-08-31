var r = require(/*webcrack:missing*/"./12.js");
var o = require(/*webcrack:missing*/"./83.js");
module.exports = function (t, e, n) {
  var i;
  var s;
  if (o && typeof (i = e.constructor) == "function" && i !== n && r(s = i.prototype) && s !== n.prototype) {
    o(t, s);
  }
  return t;
};