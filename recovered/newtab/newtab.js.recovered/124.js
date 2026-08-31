var r = require("./10.js");
var i = require("./125.js");
var o = require("./48.js");
var a = require("./71.js");
var s = require("./126.js");
var c = require("./128.js");
function u(t, e) {
  this.stopped = t;
  this.result = e;
}
module.exports = function (t, e, n) {
  var l;
  var f;
  var h;
  var p;
  var d;
  var m;
  var g;
  var y = n && n.that;
  var b = !!n && !!n.AS_ENTRIES;
  var w = !!n && !!n.IS_ITERATOR;
  var v = !!n && !!n.INTERRUPTED;
  var _ = a(e, y, 1 + b + v);
  function E(t) {
    if (l) {
      c(l);
    }
    return new u(true, t);
  }
  function x(t) {
    if (b) {
      r(t);
      if (v) {
        return _(t[0], t[1], E);
      } else {
        return _(t[0], t[1]);
      }
    } else if (v) {
      return _(t, E);
    } else {
      return _(t);
    }
  }
  if (w) {
    l = t;
  } else {
    if (typeof (f = s(t)) != "function") {
      throw TypeError("Target is not iterable");
    }
    if (i(f)) {
      h = 0;
      p = o(t.length);
      for (; p > h; h++) {
        if ((d = x(t[h])) && d instanceof u) {
          return d;
        }
      }
      return new u(false);
    }
    l = f.call(t);
  }
  for (m = l.next; !(g = m.call(l)).done;) {
    try {
      d = x(g.value);
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