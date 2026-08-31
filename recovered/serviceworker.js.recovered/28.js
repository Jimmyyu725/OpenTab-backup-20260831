var r = require("./7.js");
var o = require("./172.js").f;
var i = require("./176.js");
var s = require("./63.js");
var a = require("./109.js");
var c = require("./19.js");
var u = require("./30.js");
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
  var x = b ? r : w ? r[v] : (r[v] || {}).prototype;
  var T = b ? s : s[v] ||= {};
  var E = T.prototype;
  for (h in e) {
    n = !i(b ? h : v + (w ? "." : "#") + h, t.forced) && x && u(x, h);
    d = T[h];
    if (n) {
      y = t.noTargetGet ? (g = o(x, h)) && g.value : x[h];
    }
    p = n && y ? y : e[h];
    if (!n || typeof d != typeof p) {
      m = t.bind && n ? a(p, r) : t.wrap && n ? f(p) : _ && typeof p == "function" ? a(Function.call, p) : p;
      if (t.sham || p && p.sham || d && d.sham) {
        c(m, "sham", true);
      }
      T[h] = m;
      if (_) {
        if (!u(s, l = v + "Prototype")) {
          c(s, l, {});
        }
        s[l][h] = p;
        if (t.real && E && !E[h]) {
          c(E, h, p);
        }
      }
    }
  }
};