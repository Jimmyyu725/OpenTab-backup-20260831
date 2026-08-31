var r = require("./10.js");
var o = require("./125.js");
var i = require("./48.js");
var c = require("./71.js");
var u = require("./126.js");
var a = require("./128.js");
function f(t, n) {
  this.stopped = t;
  this.result = n;
}
module.exports = function (t, n, e) {
  var s;
  var p;
  var l;
  var v;
  var h;
  var d;
  var y;
  var m = e && e.that;
  var g = !!e && !!e.AS_ENTRIES;
  var x = !!e && !!e.IS_ITERATOR;
  var b = !!e && !!e.INTERRUPTED;
  var w = c(n, m, 1 + g + b);
  function j(t) {
    if (s) {
      a(s);
    }
    return new f(true, t);
  }
  function O(t) {
    if (g) {
      r(t);
      if (b) {
        return w(t[0], t[1], j);
      } else {
        return w(t[0], t[1]);
      }
    } else if (b) {
      return w(t, j);
    } else {
      return w(t);
    }
  }
  if (x) {
    s = t;
  } else {
    if (typeof (p = u(t)) != "function") {
      throw TypeError("Target is not iterable");
    }
    if (o(p)) {
      l = 0;
      v = i(t.length);
      for (; v > l; l++) {
        if ((h = O(t[l])) && h instanceof f) {
          return h;
        }
      }
      return new f(false);
    }
    s = p.call(t);
  }
  for (d = s.next; !(y = d.call(s)).done;) {
    try {
      h = O(y.value);
    } catch (t) {
      a(s);
      throw t;
    }
    if (typeof h == "object" && h && h instanceof f) {
      return h;
    }
  }
  return new f(false);
};