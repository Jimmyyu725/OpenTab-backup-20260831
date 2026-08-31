var t = require("./146.js")(module);
var r = require("./17.js");
var o = exports && !exports.nodeType && exports;
var i = o && typeof t == "object" && t && !t.nodeType && t;
var s = i && i.exports === o ? r.Buffer : undefined;
var a = s ? s.allocUnsafe : undefined;
t.exports = function (t, e) {
  if (e) {
    return t.slice();
  }
  var n = t.length;
  var r = a ? a(n) : new t.constructor(n);
  t.copy(r);
  return r;
};