var r = require("./44.js");
var i = require("./213.js");
var o = require("./140.js");
var s = require("./143.js");
var a = require("./149.js");
var c = require("./30.js");
var u = require("./99.js");
var l = require("./17.js");
var h = require("./65.js");
var p = require("./63.js");
var f = require("./208.js");
var d = f.IteratorPrototype;
var g = f.BUGGY_SAFARI_ITERATORS;
var m = l("iterator");
function y() {
  return this;
}
module.exports = function (t, e, n, l, f, b, v) {
  i(n, e, l);
  var w;
  var x;
  var _;
  function T(t) {
    if (t === f && A) {
      return A;
    }
    if (!g && t in S) {
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
  var I = S[m] || S["@@iterator"] || f && S[f];
  var A = !g && I || T(f);
  var k = e == "Array" && S.entries || I;
  if (k) {
    w = o(k.call(new t()));
    if (d !== Object.prototype && w.next) {
      if (!h && o(w) !== d) {
        if (s) {
          s(w, d);
        } else if (typeof w[m] != "function") {
          c(w, m, y);
        }
      }
      a(w, E, true, true);
      if (h) {
        p[E] = y;
      }
    }
  }
  if (f == "values" && I && I.name !== "values") {
    O = true;
    A = function () {
      return I.call(this);
    };
  }
  if ((!h || !!v) && S[m] !== A) {
    c(S, m, A);
  }
  p[e] = A;
  if (f) {
    x = {
      values: T("values"),
      keys: b ? A : T("keys"),
      entries: T("entries")
    };
    if (v) {
      for (_ in x) {
        if (g || O || !(_ in S)) {
          u(S, _, x[_]);
        }
      }
    } else {
      r({
        target: e,
        proto: true,
        forced: g || O
      }, x);
    }
  }
  return x;
};