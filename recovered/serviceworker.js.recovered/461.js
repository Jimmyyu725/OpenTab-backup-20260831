var r = require("./74.js");
var o = require("./236.js");
var i = require("./142.js");
var s = require("./237.js");
var a = require("./462.js");
var c = require("./463.js");
var u = r ? r.prototype : undefined;
var f = u ? u.valueOf : undefined;
module.exports = function (t, e, n, r, u, l, h) {
  switch (n) {
    case "[object DataView]":
      if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) {
        return false;
      }
      t = t.buffer;
      e = e.buffer;
    case "[object ArrayBuffer]":
      return t.byteLength == e.byteLength && !!l(new o(t), new o(e));
    case "[object Boolean]":
    case "[object Date]":
    case "[object Number]":
      return i(+t, +e);
    case "[object Error]":
      return t.name == e.name && t.message == e.message;
    case "[object RegExp]":
    case "[object String]":
      return t == e + "";
    case "[object Map]":
      var p = a;
    case "[object Set]":
      var d = r & 1;
      p ||= c;
      if (t.size != e.size && !d) {
        return false;
      }
      var y = h.get(t);
      if (y) {
        return y == e;
      }
      r |= 2;
      h.set(t, e);
      var m = s(p(t), p(e), r, u, l, h);
      h.delete(t);
      return m;
    case "[object Symbol]":
      if (f) {
        return f.call(t) == f.call(e);
      }
  }
  return false;
};