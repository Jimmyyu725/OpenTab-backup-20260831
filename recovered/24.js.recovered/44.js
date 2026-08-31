var r = require("./14.js");
var o = require("./188.js").f;
var i = require("./192.js");
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
  var y;
  var m;
  var b = t.target;
  var w = t.global;
  var v = t.stat;
  var _ = t.proto;
  var T = w ? r : v ? r[b] : (r[b] || {}).prototype;
  var E = w ? s : s[b] ||= {};
  var x = E.prototype;
  for (p in e) {
    n = !i(w ? p : b + (v ? "." : "#") + p, t.forced) && T && u(T, p);
    d = E[p];
    if (n) {
      g = t.noTargetGet ? (m = o(T, p)) && m.value : T[p];
    }
    f = n && g ? g : e[p];
    if (!n || typeof d != typeof f) {
      y = t.bind && n ? a(f, r) : t.wrap && n ? l(f) : _ && typeof f == "function" ? a(Function.call, f) : f;
      if (t.sham || f && f.sham || d && d.sham) {
        c(y, "sham", true);
      }
      E[p] = y;
      if (_) {
        if (!u(s, h = b + "Prototype")) {
          c(s, h, {});
        }
        s[h][p] = f;
        if (t.real && x && !x[p]) {
          c(x, p, f);
        }
      }
    }
  }
};