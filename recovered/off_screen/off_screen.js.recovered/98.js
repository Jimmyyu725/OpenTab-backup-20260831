var r = require("./32.js");
var o = require("./279.js");
var i = require("./158.js");
var c = require("./139.js");
var u = require("./281.js");
var a = require("./282.js");
function s(t, n) {
  this.stopped = t;
  this.result = n;
}
module.exports = function (t, n, e) {
  var f;
  var l;
  var p;
  var v;
  var d;
  var h;
  var y;
  var g = e && e.that;
  var m = !!e && !!e.AS_ENTRIES;
  var x = !!e && !!e.IS_ITERATOR;
  var b = !!e && !!e.INTERRUPTED;
  var w = c(n, g, 1 + m + b);
  function O(t) {
    if (f) {
      a(f);
    }
    return new s(true, t);
  }
  function S(t) {
    if (m) {
      r(t);
      if (b) {
        return w(t[0], t[1], O);
      } else {
        return w(t[0], t[1]);
      }
    } else if (b) {
      return w(t, O);
    } else {
      return w(t);
    }
  }
  if (x) {
    f = t;
  } else {
    if (typeof (l = u(t)) != "function") {
      throw TypeError("Target is not iterable");
    }
    if (o(l)) {
      p = 0;
      v = i(t.length);
      for (; v > p; p++) {
        if ((d = S(t[p])) && d instanceof s) {
          return d;
        }
      }
      return new s(false);
    }
    f = l.call(t);
  }
  for (h = f.next; !(y = h.call(f)).done;) {
    try {
      d = S(y.value);
    } catch (t) {
      a(f);
      throw t;
    }
    if (typeof d == "object" && d && d instanceof s) {
      return d;
    }
  }
  return new s(false);
};