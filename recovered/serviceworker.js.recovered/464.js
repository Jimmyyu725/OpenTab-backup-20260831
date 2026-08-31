var r = require("./234.js");
var o = Object.prototype.hasOwnProperty;
module.exports = function (t, e, n, i, s, a) {
  var c = n & 1;
  var u = r(t);
  var f = u.length;
  if (f != r(e).length && !c) {
    return false;
  }
  for (var l = f; l--;) {
    var h = u[l];
    if (!(c ? h in e : o.call(e, h))) {
      return false;
    }
  }
  var p = a.get(t);
  var d = a.get(e);
  if (p && d) {
    return p == e && d == t;
  }
  var y = true;
  a.set(t, e);
  a.set(e, t);
  var m = c;
  while (++l < f) {
    var g = t[h = u[l]];
    var v = e[h];
    if (i) {
      var b = c ? i(v, g, h, e, t, a) : i(g, v, h, t, e, a);
    }
    if (!(b === undefined ? g === v || s(g, v, n, i, a) : b)) {
      y = false;
      break;
    }
    m ||= h == "constructor";
  }
  if (y && !m) {
    var w = t.constructor;
    var _ = e.constructor;
    if (w != _ && !!("constructor" in t) && !!("constructor" in e) && (typeof w != "function" || !(w instanceof w) || typeof _ != "function" || !(_ instanceof _))) {
      y = false;
    }
  }
  a.delete(t);
  a.delete(e);
  return y;
};