var t = require("./408.js")(module);
var n = require(/*webcrack:missing*/"./151.js");
var o = exports && !exports.nodeType && exports;
var c = o && typeof t == "object" && t && !t.nodeType && t;
var i = c && c.exports === o ? n.Buffer : undefined;
var a = i ? i.allocUnsafe : undefined;
t.exports = function (t, e) {
  if (e) {
    return t.slice();
  }
  var r = t.length;
  var n = a ? a(r) : new t.constructor(r);
  t.copy(n);
  return n;
};