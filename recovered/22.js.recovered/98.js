var r = require("./32.js");
var i = require("./279.js");
var o = require("./158.js");
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
  var m;
  var y = n && n.that;
  var b = !!n && !!n.AS_ENTRIES;
  var v = !!n && !!n.IS_ITERATOR;
  var w = !!n && !!n.INTERRUPTED;
  var x = s(e, y, 1 + b + w);
  function _(t) {
    if (l) {
      c(l);
    }
    return new u(true, t);
  }
  function T(t) {
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
      f = o(t.length);
      for (; f > p; p++) {
        if ((d = T(t[p])) && d instanceof u) {
          return d;
        }
      }
      return new u(false);
    }
    l = h.call(t);
  }
  for (g = l.next; !(m = g.call(l)).done;) {
    try {
      d = T(m.value);
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