var e = require("./44.js");
var o = require("./213.js");
var i = require("./140.js");
var c = require("./143.js");
var u = require("./149.js");
var a = require("./30.js");
var f = require("./99.js");
var s = require("./17.js");
var p = require("./65.js");
var l = require("./63.js");
var v = require("./208.js");
var h = v.IteratorPrototype;
var y = v.BUGGY_SAFARI_ITERATORS;
var d = s("iterator");
function g() {
  return this;
}
module.exports = function (t, n, r, s, v, x, m) {
  o(r, n, s);
  var w;
  var b;
  var S;
  function j(t) {
    if (t === v && A) {
      return A;
    }
    if (!y && t in E) {
      return E[t];
    }
    switch (t) {
      case "keys":
      case "values":
      case "entries":
        return function () {
          return new r(this, t);
        };
    }
    return function () {
      return new r(this);
    };
  }
  var O = n + " Iterator";
  var T = false;
  var E = t.prototype;
  var P = E[d] || E["@@iterator"] || v && E[v];
  var A = !y && P || j(v);
  var L = n == "Array" && E.entries || P;
  if (L) {
    w = i(L.call(new t()));
    if (h !== Object.prototype && w.next) {
      if (!p && i(w) !== h) {
        if (c) {
          c(w, h);
        } else if (typeof w[d] != "function") {
          a(w, d, g);
        }
      }
      u(w, O, true, true);
      if (p) {
        l[O] = g;
      }
    }
  }
  if (v == "values" && P && P.name !== "values") {
    T = true;
    A = function () {
      return P.call(this);
    };
  }
  if ((!p || !!m) && E[d] !== A) {
    a(E, d, A);
  }
  l[n] = A;
  if (v) {
    b = {
      values: j("values"),
      keys: x ? A : j("keys"),
      entries: j("entries")
    };
    if (m) {
      for (S in b) {
        if (y || T || !(S in E)) {
          f(E, S, b[S]);
        }
      }
    } else {
      e({
        target: n,
        proto: true,
        forced: y || T
      }, b);
    }
  }
  return b;
};