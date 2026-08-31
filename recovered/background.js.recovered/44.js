var r = require("./14.js");
var o = require("./188.js").f;
var i = require("./192.js");
var s = require("./104.js");
var a = require("./139.js");
var u = require("./30.js");
var c = require("./37.js");
function f(t) {
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
  var l;
  var h;
  var p;
  var d;
  var y;
  var m;
  var g;
  var v = t.target;
  var b = t.global;
  var w = t.stat;
  var _ = t.proto;
  var E = b ? r : w ? r[v] : (r[v] || {}).prototype;
  var T = b ? s : s[v] ||= {};
  var x = T.prototype;
  for (h in e) {
    n = !i(b ? h : v + (w ? "." : "#") + h, t.forced) && E && c(E, h);
    d = T[h];
    if (n) {
      y = t.noTargetGet ? (g = o(E, h)) && g.value : E[h];
    }
    p = n && y ? y : e[h];
    if (!n || typeof d != typeof p) {
      m = t.bind && n ? a(p, r) : t.wrap && n ? f(p) : _ && typeof p == "function" ? a(Function.call, p) : p;
      if (t.sham || p && p.sham || d && d.sham) {
        u(m, "sham", true);
      }
      T[h] = m;
      if (_) {
        if (!c(s, l = v + "Prototype")) {
          u(s, l, {});
        }
        s[l][h] = p;
        if (t.real && x && !x[h]) {
          u(x, h, p);
        }
      }
    }
  }
};