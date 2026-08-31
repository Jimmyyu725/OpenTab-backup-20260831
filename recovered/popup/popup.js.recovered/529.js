var t = require("./408.js")(module);
var r = require("./151.js");
var i = exports && !exports.nodeType && exports;
var o = i && typeof t == "object" && t && !t.nodeType && t;
var s = o && o.exports === i ? r.Buffer : undefined;
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