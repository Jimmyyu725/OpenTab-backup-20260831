var r = require("./14.js");
var i = require("./188.js").f;
var o = require("./192.js");
var s = require("./104.js");
var a = require("./139.js");
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
  var h;
  var p;
  var f;
  var d;
  var g;
  var m;
  var y;
  var b = t.target;
  var v = t.global;
  var w = t.stat;
  var x = t.proto;
  var _ = v ? r : w ? r[b] : (r[b] || {}).prototype;
  var T = v ? s : s[b] ||= {};
  var E = T.prototype;
  for (p in e) {
    n = !o(v ? p : b + (w ? "." : "#") + p, t.forced) && _ && u(_, p);
    d = T[p];
    if (n) {
      g = t.noTargetGet ? (y = i(_, p)) && y.value : _[p];
    }
    f = n && g ? g : e[p];
    if (!n || typeof d != typeof f) {
      m = t.bind && n ? a(f, r) : t.wrap && n ? l(f) : x && typeof f == "function" ? a(Function.call, f) : f;
      if (t.sham || f && f.sham || d && d.sham) {
        c(m, "sham", true);
      }
      T[p] = m;
      if (x) {
        if (!u(s, h = b + "Prototype")) {
          c(s, h, {});
        }
        s[h][p] = f;
        if (t.real && E && !E[p]) {
          c(E, p, f);
        }
      }
    }
  }
};