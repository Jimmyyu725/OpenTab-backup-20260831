var r = require("./14.js");
var i = require("./188.js").f;
var o = require("./192.js");
var a = require("./104.js");
var s = require("./139.js");
var c = require("./30.js");
var u = require("./37.js");
function l(t) {
  function e(e, n, r) {
    if (this instanceof t) {
      switch (arguments.length) {
        case 0:
          return new t();
        case 1:
          return new t(e);
        case 2:
          return new t(e, n);
      }
      return new t(e, n, r);
    }
    return t.apply(this, arguments);
  }
  e.prototype = t.prototype;
  return e;
}
module.exports = function (t, e) {
  var n;
  var f;
  var h;
  var p;
  var d;
  var m;
  var g;
  var y;
  var b = t.target;
  var w = t.global;
  var v = t.stat;
  var _ = t.proto;
  var E = w ? r : v ? r[b] : (r[b] || {}).prototype;
  var x = w ? a : a[b] ||= {};
  var T = x.prototype;
  for (h in e) {
    n = !o(w ? h : b + (v ? "." : "#") + h, t.forced) && E && u(E, h);
    d = x[h];
    if (n) {
      m = t.noTargetGet ? (y = i(E, h)) && y.value : E[h];
    }
    p = n && m ? m : e[h];
    if (!n || typeof d != typeof p) {
      g = t.bind && n ? s(p, r) : t.wrap && n ? l(p) : _ && typeof p == "function" ? s(Function.call, p) : p;
      if (t.sham || p && p.sham || d && d.sham) {
        c(g, "sham", true);
      }
      x[h] = g;
      if (_) {
        if (!u(a, f = b + "Prototype")) {
          c(a, f, {});
        }
        a[f][h] = p;
        if (t.real && T && !T[h]) {
          c(T, h, p);
        }
      }
    }
  }
};