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
var d = require("./208.js");
var f = d.IteratorPrototype;
var g = d.BUGGY_SAFARI_ITERATORS;
var y = l("iterator");
function m() {
  return this;
}
module.exports = function (t, e, n, l, d, b, v) {
  i(n, e, l);
  var w;
  var x;
  var _;
  function O(t) {
    if (t === d && k) {
      return k;
    }
    if (!g && t in E) {
      return E[t];
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
  var S = false;
  var E = t.prototype;
  var j = E[y] || E["@@iterator"] || d && E[d];
  var k = !g && j || O(d);
  var A = e == "Array" && E.entries || j;
  if (A) {
    w = o(A.call(new t()));
    if (f !== Object.prototype && w.next) {
      if (!h && o(w) !== f) {
        if (s) {
          s(w, f);
        } else if (typeof w[y] != "function") {
          c(w, y, m);
        }
      }
      a(w, T, true, true);
      if (h) {
        p[T] = m;
      }
    }
  }
  if (d == "values" && j && j.name !== "values") {
    S = true;
    k = function () {
      return j.call(this);
    };
  }
  if ((!h || !!v) && E[y] !== k) {
    c(E, y, k);
  }
  p[e] = k;
  if (d) {
    x = {
      values: O("values"),
      keys: b ? k : O("keys"),
      entries: O("entries")
    };
    if (v) {
      for (_ in x) {
        if (g || S || !(_ in E)) {
          u(E, _, x[_]);
        }
      }
    } else {
      r({
        target: e,
        proto: true,
        forced: g || S
      }, x);
    }
  }
  return x;
};