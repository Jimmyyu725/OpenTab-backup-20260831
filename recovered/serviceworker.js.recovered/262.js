var r = require("./15.js");
var o = require("./263.js");
var i = require("./57.js");
var s = require("./163.js");
var a = require("./264.js");
var c = require("./266.js");
function u(t, e) {
  this.stopped = t;
  this.result = e;
}
module.exports = function (t, e, n) {
  var f;
  var l;
  var h;
  var p;
  var d;
  var y;
  var m;
  var g = n && n.that;
  var v = !!n && !!n.AS_ENTRIES;
  var b = !!n && !!n.IS_ITERATOR;
  var w = !!n && !!n.INTERRUPTED;
  var _ = s(e, g, 1 + v + w);
  function x(t) {
    if (f) {
      c(f);
    }
    return new u(true, t);
  }
  function T(t) {
    if (v) {
      r(t);
      if (w) {
        return _(t[0], t[1], x);
      } else {
        return _(t[0], t[1]);
      }
    } else if (w) {
      return _(t, x);
    } else {
      return _(t);
    }
  }
  if (b) {
    f = t;
  } else {
    if (typeof (l = a(t)) != "function") {
      throw TypeError("Target is not iterable");
    }
    if (o(l)) {
      h = 0;
      p = i(t.length);
      for (; p > h; h++) {
        if ((d = T(t[h])) && d instanceof u) {
          return d;
        }
      }
      return new u(false);
    }
    f = l.call(t);
  }
  for (y = f.next; !(m = y.call(f)).done;) {
    try {
      d = T(m.value);
    } catch (t) {
      c(f);
      throw t;
    }
    if (typeof d == "object" && d && d instanceof u) {
      return d;
    }
  }
  return new u(false);
};