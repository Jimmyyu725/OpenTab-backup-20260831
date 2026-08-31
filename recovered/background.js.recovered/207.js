var r = require("./44.js");
var o = require("./213.js");
var i = require("./140.js");
var s = require("./143.js");
var a = require("./149.js");
var u = require("./30.js");
var c = require("./99.js");
var f = require("./17.js");
var l = require("./65.js");
var h = require("./63.js");
var p = require("./208.js");
var d = p.IteratorPrototype;
var y = p.BUGGY_SAFARI_ITERATORS;
var m = f("iterator");
function g() {
  return this;
}
module.exports = function (t, e, n, f, p, v, b) {
  o(n, e, f);
  var w;
  var _;
  var E;
  function T(t) {
    if (t === p && A) {
      return A;
    }
    if (!y && t in I) {
      return I[t];
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
  var x = e + " Iterator";
  var O = false;
  var I = t.prototype;
  var S = I[m] || I["@@iterator"] || p && I[p];
  var A = !y && S || T(p);
  var D = e == "Array" && I.entries || S;
  if (D) {
    w = i(D.call(new t()));
    if (d !== Object.prototype && w.next) {
      if (!l && i(w) !== d) {
        if (s) {
          s(w, d);
        } else if (typeof w[m] != "function") {
          u(w, m, g);
        }
      }
      a(w, x, true, true);
      if (l) {
        h[x] = g;
      }
    }
  }
  if (p == "values" && S && S.name !== "values") {
    O = true;
    A = function () {
      return S.call(this);
    };
  }
  if ((!l || !!b) && I[m] !== A) {
    u(I, m, A);
  }
  h[e] = A;
  if (p) {
    _ = {
      values: T("values"),
      keys: v ? A : T("keys"),
      entries: T("entries")
    };
    if (b) {
      for (E in _) {
        if (y || O || !(E in I)) {
          c(I, E, _[E]);
        }
      }
    } else {
      r({
        target: e,
        proto: true,
        forced: y || O
      }, _);
    }
  }
  return _;
};