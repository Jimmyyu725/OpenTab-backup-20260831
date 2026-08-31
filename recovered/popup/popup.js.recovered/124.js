var r = require("./10.js");
var i = require("./125.js");
var o = require("./48.js");
var s = require("./71.js");
var a = require("./126.js");
var c = require("./128.js");
function u(t, e) {
  this.stopped = t;
  this.result = e;
}
module.exports = function (t, e, n) {
  var l;
  var h;
  var p;
  var d;
  var f;
  var g;
  var y;
  var m = n && n.that;
  var b = !!n && !!n.AS_ENTRIES;
  var v = !!n && !!n.IS_ITERATOR;
  var w = !!n && !!n.INTERRUPTED;
  var x = s(e, m, 1 + b + w);
  function _(t) {
    if (l) {
      c(l);
    }
    return new u(true, t);
  }
  function O(t) {
    if (b) {
      r(t);
      if (w) {
        return x(t[0], t[1], _);
      } else {
        return x(t[0], t[1]);
      }
    } else if (w) {
      return x(t, _);
    } else {
      return x(t);
    }
  }
  if (v) {
    l = t;
  } else {
    if (typeof (h = a(t)) != "function") {
      throw TypeError("Target is not iterable");
    }
    if (i(h)) {
      p = 0;
      d = o(t.length);
      for (; d > p; p++) {
        if ((f = O(t[p])) && f instanceof u) {
          return f;
        }
      }
      return new u(false);
    }
    l = h.call(t);
  }
  for (g = l.next; !(y = g.call(l)).done;) {
    try {
      f = O(y.value);
    } catch (t) {
      c(l);
      throw t;
    }
    if (typeof f == "object" && f && f instanceof u) {
      return f;
    }
  }
  return new u(false);
};