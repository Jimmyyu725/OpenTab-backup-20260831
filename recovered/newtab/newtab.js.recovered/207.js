var r = require("./44.js");
var i = require("./213.js");
var o = require("./140.js");
var a = require("./143.js");
var s = require("./149.js");
var c = require("./30.js");
var u = require("./99.js");
var l = require("./17.js");
var f = require("./65.js");
var h = require("./63.js");
var p = require("./208.js");
var d = p.IteratorPrototype;
var m = p.BUGGY_SAFARI_ITERATORS;
var g = l("iterator");
function y() {
  return this;
}
module.exports = function (t, e, n, l, p, b, w) {
  i(n, e, l);
  var v;
  var _;
  var E;
  function x(t) {
    if (t === p && A) {
      return A;
    }
    if (!m && t in O) {
      return O[t];
    }
    switch (t) {
      case "keys":
      case "values":
      case "entries":
        return function () {
          return new n(this, t);
        };
    }
    return function () {
      return new n(this);
    };
  }
  var T = e + " Iterator";
  var I = false;
  var O = t.prototype;
  var S = O[g] || O["@@iterator"] || p && O[p];
  var A = !m && S || x(p);
  var N = e == "Array" && O.entries || S;
  if (N) {
    v = o(N.call(new t()));
    if (d !== Object.prototype && v.next) {
      if (!f && o(v) !== d) {
        if (a) {
          a(v, d);
        } else if (typeof v[g] != "function") {
          c(v, g, y);
        }
      }
      s(v, T, true, true);
      if (f) {
        h[T] = y;
      }
    }
  }
  if (p == "values" && S && S.name !== "values") {
    I = true;
    A = function () {
      return S.call(this);
    };
  }
  if ((!f || !!w) && O[g] !== A) {
    c(O, g, A);
  }
  h[e] = A;
  if (p) {
    _ = {
      values: x("values"),
      keys: b ? A : x("keys"),
      entries: x("entries")
    };
    if (w) {
      for (E in _) {
        if (m || I || !(E in O)) {
          u(O, E, _[E]);
        }
      }
    } else {
      r({
        target: e,
        proto: true,
        forced: m || I
      }, _);
    }
  }
  return _;
};