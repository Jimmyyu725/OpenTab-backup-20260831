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
  var d;
  var f;
  var g;
  var y;
  var m;
  var b = t.target;
  var v = t.global;
  var w = t.stat;
  var x = t.proto;
  var _ = v ? r : w ? r[b] : (r[b] || {}).prototype;
  var O = v ? s : s[b] ||= {};
  var T = O.prototype;
  for (p in e) {
    n = !o(v ? p : b + (w ? "." : "#") + p, t.forced) && _ && u(_, p);
    f = O[p];
    if (n) {
      g = t.noTargetGet ? (m = i(_, p)) && m.value : _[p];
    }
    d = n && g ? g : e[p];
    if (!n || typeof f != typeof d) {
      y = t.bind && n ? a(d, r) : t.wrap && n ? l(d) : x && typeof d == "function" ? a(Function.call, d) : d;
      if (t.sham || d && d.sham || f && f.sham) {
        c(y, "sham", true);
      }
      O[p] = y;
      if (x) {
        if (!u(s, h = b + "Prototype")) {
          c(s, h, {});
        }
        s[h][p] = d;
        if (t.real && T && !T[p]) {
          c(T, p, d);
        }
      }
    }
  }
};