var r = require("./32.js");
var o = require("./279.js");
var i = require("./158.js");
var s = require("./139.js");
var a = require("./281.js");
var c = require("./282.js");
function u(t, e) {
  this.stopped = t;
  this.result = e;
}
module.exports = function (t, e, n) {
  var l;
  var h;
  var p;
  var f;
  var d;
  var g;
  var y;
  var m = n && n.that;
  var b = !!n && !!n.AS_ENTRIES;
  var w = !!n && !!n.IS_ITERATOR;
  var v = !!n && !!n.INTERRUPTED;
  var _ = s(e, m, 1 + b + v);
  function T(t) {
    if (l) {
      c(l);
    }
    return new u(true, t);
  }
  function E(t) {
    if (b) {
      r(t);
      if (v) {
        return _(t[0], t[1], T);
      } else {
        return _(t[0], t[1]);
      }
    } else if (v) {
      return _(t, T);
    } else {
      return _(t);
    }
  }
  if (w) {
    l = t;
  } else {
    if (typeof (h = a(t)) != "function") {
      throw TypeError("Target is not iterable");
    }
    if (o(h)) {
      p = 0;
      f = i(t.length);
      for (; f > p; p++) {
        if ((d = E(t[p])) && d instanceof u) {
          return d;
        }
      }
      return new u(false);
    }
    l = h.call(t);
  }
  for (g = l.next; !(y = g.call(l)).done;) {
    try {
      d = E(y.value);
    } catch (t) {
      c(l);
      throw t;
    }
    if (typeof d == "object" && d && d instanceof u) {
      return d;
    }
  }
  return new u(false);
};