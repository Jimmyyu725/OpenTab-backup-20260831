var n = require(/*webcrack:missing*/"./9860.js");
var o = require(/*webcrack:missing*/"./6247.js");
const a = function () {
  return o.Z.Date.now();
};
var i = require(/*webcrack:missing*/"./1774.js");
var c = Math.max;
var s = Math.min;
export const Z = function (e, t, r) {
  var o;
  var l;
  var u;
  var f;
  var d;
  var h;
  var p = 0;
  var g = false;
  var y = false;
  var v = true;
  if (typeof e != "function") {
    throw new TypeError("Expected a function");
  }
  function b(t) {
    var r = o;
    var n = l;
    o = l = undefined;
    p = t;
    return f = e.apply(n, r);
  }
  function m(e) {
    p = e;
    d = setTimeout(_, t);
    if (g) {
      return b(e);
    } else {
      return f;
    }
  }
  function w(e) {
    var r = e - h;
    return h === undefined || r >= t || r < 0 || y && e - p >= u;
  }
  function _() {
    var e = a();
    if (w(e)) {
      return k(e);
    }
    d = setTimeout(_, function (e) {
      var r = t - (e - h);
      if (y) {
        return s(r, u - (e - p));
      } else {
        return r;
      }
    }(e));
  }
  function k(e) {
    d = undefined;
    if (v && o) {
      return b(e);
    } else {
      o = l = undefined;
      return f;
    }
  }
  function A() {
    var e = a();
    var r = w(e);
    o = arguments;
    l = this;
    h = e;
    if (r) {
      if (d === undefined) {
        return m(h);
      }
      if (y) {
        clearTimeout(d);
        d = setTimeout(_, t);
        return b(h);
      }
    }
    if (d === undefined) {
      d = setTimeout(_, t);
    }
    return f;
  }
  t = (0, i.Z)(t) || 0;
  if ((0, n.Z)(r)) {
    g = !!r.leading;
    u = (y = "maxWait" in r) ? c((0, i.Z)(r.maxWait) || 0, t) : u;
    v = "trailing" in r ? !!r.trailing : v;
  }
  A.cancel = function () {
    if (d !== undefined) {
      clearTimeout(d);
    }
    p = 0;
    o = h = l = d = undefined;
  };
  A.flush = function () {
    if (d === undefined) {
      return f;
    } else {
      return k(a());
    }
  };
  return A;
};