var r = require("./44.js");
var o = require("./213.js");
var i = require("./140.js");
var c = require("./143.js");
var u = require("./149.js");
var a = require("./30.js");
var s = require("./99.js");
var f = require("./17.js");
var l = require("./65.js");
var p = require("./63.js");
var v = require("./208.js");
var d = v.IteratorPrototype;
var h = v.BUGGY_SAFARI_ITERATORS;
var y = f("iterator");
function g() {
  return this;
}
module.exports = function (t, n, e, f, v, m, x) {
  o(e, n, f);
  var b;
  var w;
  var O;
  function S(t) {
    if (t === v && A) {
      return A;
    }
    if (!h && t in T) {
      return T[t];
    }
    switch (t) {
      case "keys":
      case "values":
      case "entries":
        return function () {
          return new e(this, t);
        };
    }
    return function () {
      return new e(this);
    };
  }
  var j = n + " Iterator";
  var E = false;
  var T = t.prototype;
  var _ = T[y] || T["@@iterator"] || v && T[v];
  var A = !h && _ || S(v);
  var P = n == "Array" && T.entries || _;
  if (P) {
    b = i(P.call(new t()));
    if (d !== Object.prototype && b.next) {
      if (!l && i(b) !== d) {
        if (c) {
          c(b, d);
        } else if (typeof b[y] != "function") {
          a(b, y, g);
        }
      }
      u(b, j, true, true);
      if (l) {
        p[j] = g;
      }
    }
  }
  if (v == "values" && _ && _.name !== "values") {
    E = true;
    A = function () {
      return _.call(this);
    };
  }
  if ((!l || !!x) && T[y] !== A) {
    a(T, y, A);
  }
  p[n] = A;
  if (v) {
    w = {
      values: S("values"),
      keys: m ? A : S("keys"),
      entries: S("entries")
    };
    if (x) {
      for (O in w) {
        if (h || E || !(O in T)) {
          s(T, O, w[O]);
        }
      }
    } else {
      r({
        target: n,
        proto: true,
        forced: h || E
      }, w);
    }
  }
  return w;
};