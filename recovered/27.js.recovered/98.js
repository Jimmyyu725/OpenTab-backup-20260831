var e = require("./32.js");
var o = require("./279.js");
var i = require("./158.js");
var c = require("./139.js");
var u = require("./281.js");
var a = require("./282.js");
function f(t, n) {
  this.stopped = t;
  this.result = n;
}
module.exports = function (t, n, r) {
  var s;
  var p;
  var l;
  var v;
  var h;
  var y;
  var d;
  var g = r && r.that;
  var x = !!r && !!r.AS_ENTRIES;
  var m = !!r && !!r.IS_ITERATOR;
  var w = !!r && !!r.INTERRUPTED;
  var b = c(n, g, 1 + x + w);
  function S(t) {
    if (s) {
      a(s);
    }
    return new f(true, t);
  }
  function j(t) {
    if (x) {
      e(t);
      if (w) {
        return b(t[0], t[1], S);
      } else {
        return b(t[0], t[1]);
      }
    } else if (w) {
      return b(t, S);
    } else {
      return b(t);
    }
  }
  if (m) {
    s = t;
  } else {
    if (typeof (p = u(t)) != "function") {
      throw TypeError("Target is not iterable");
    }
    if (o(p)) {
      l = 0;
      v = i(t.length);
      for (; v > l; l++) {
        if ((h = j(t[l])) && h instanceof f) {
          return h;
        }
      }
      return new f(false);
    }
    s = p.call(t);
  }
  for (y = s.next; !(d = y.call(s)).done;) {
    try {
      h = j(d.value);
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