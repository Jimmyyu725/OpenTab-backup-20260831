var r = require("./28.js");
var o = require("./177.js");
var i = require("./110.js");
var s = require("./140.js");
var a = require("./117.js");
var c = require("./19.js");
var u = require("./72.js");
var f = require("./9.js");
var l = require("./43.js");
var h = require("./45.js");
var p = require("./178.js");
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
  var x;
  function T(t) {
    if (t === p && A) {
      return A;
    }
    if (!y && t in S) {
      return S[t];
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
  var E = e + " Iterator";
  var O = false;
  var S = t.prototype;
  var I = S[m] || S["@@iterator"] || p && S[p];
  var A = !y && I || T(p);
  var N = e == "Array" && S.entries || I;
  if (N) {
    w = i(N.call(new t()));
    if (d !== Object.prototype && w.next) {
      if (!l && i(w) !== d) {
        if (s) {
          s(w, d);
        } else if (typeof w[m] != "function") {
          c(w, m, g);
        }
      }
      a(w, E, true, true);
      if (l) {
        h[E] = g;
      }
    }
  }
  if (p == "values" && I && I.name !== "values") {
    O = true;
    A = function () {
      return I.call(this);
    };
  }
  if ((!l || !!b) && S[m] !== A) {
    c(S, m, A);
  }
  h[e] = A;
  if (p) {
    _ = {
      values: T("values"),
      keys: v ? A : T("keys"),
      entries: T("entries")
    };
    if (b) {
      for (x in _) {
        if (y || O || !(x in S)) {
          u(S, x, _[x]);
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