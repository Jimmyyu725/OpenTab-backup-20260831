var r = require(/*webcrack:missing*/"./12.js");
var a = require(/*webcrack:missing*/"./83.js");
module.exports = function (e, t, n) {
  var o;
  var i;
  if (a && typeof (o = t.constructor) == "function" && o !== n && r(i = o.prototype) && i !== n.prototype) {
    a(e, i);
  }
  return e;
};