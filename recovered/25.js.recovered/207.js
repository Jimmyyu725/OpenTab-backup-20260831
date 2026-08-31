var r = require("./44.js");
var o = require("./213.js");
var i = require("./140.js");
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
var y = l("iterator");
function m() {
  return this;
}
module.exports = function (t, e, n, l, f, b, w) {
  o(n, e, l);
  var v;
  var _;
  var T;
  function E(t) {
    if (t === f && A) {
      return A;
    }
    if (!g && t in O) {
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
  var x = e + " Iterator";
  var S = false;
  var O = t.prototype;
  var I = O[y] || O["@@iterator"] || f && O[f];
  var A = !g && I || E(f);
  var k = e == "Array" && O.entries || I;
  if (k) {
    v = i(k.call(new t()));
    if (d !== Object.prototype && v.next) {
      if (!h && i(v) !== d) {
        if (s) {
          s(v, d);
        } else if (typeof v[y] != "function") {
          c(v, y, m);
        }
      }
      a(v, x, true, true);
      if (h) {
        p[x] = m;
      }
    }
  }
  if (f == "values" && I && I.name !== "values") {
    S = true;
    A = function () {
      return I.call(this);
    };
  }
  if ((!h || !!w) && O[y] !== A) {
    c(O, y, A);
  }
  p[e] = A;
  if (f) {
    _ = {
      values: E("values"),
      keys: b ? A : E("keys"),
      entries: E("entries")
    };
    if (w) {
      for (T in _) {
        if (g || S || !(T in O)) {
          u(O, T, _[T]);
        }
      }
    } else {
      r({
        target: e,
        proto: true,
        forced: g || S
      }, _);
    }
  }
  return _;
};