var r = require("./14.js");
var o = require("./188.js").f;
var i = require("./192.js");
var c = require("./104.js");
var u = require("./139.js");
var a = require("./30.js");
var s = require("./37.js");
function f(t) {
  function n(n, e, r) {
    if (this instanceof t) {
      switch (arguments.length) {
        case 0:
          return new t();
        case 1:
          return new t(n);
        case 2:
          return new t(n, e);
      }
      return new t(n, e, r);
    }
    return t.apply(this, arguments);
  }
  n.prototype = t.prototype;
  return n;
}
module.exports = function (t, n) {
  var e;
  var l;
  var p;
  var v;
  var d;
  var h;
  var y;
  var g;
  var m = t.target;
  var x = t.global;
  var b = t.stat;
  var w = t.proto;
  var O = x ? r : b ? r[m] : (r[m] || {}).prototype;
  var S = x ? c : c[m] ||= {};
  var j = S.prototype;
  for (p in n) {
    e = !i(x ? p : m + (b ? "." : "#") + p, t.forced) && O && s(O, p);
    d = S[p];
    if (e) {
      h = t.noTargetGet ? (g = o(O, p)) && g.value : O[p];
    }
    v = e && h ? h : n[p];
    if (!e || typeof d != typeof v) {
      y = t.bind && e ? u(v, r) : t.wrap && e ? f(v) : w && typeof v == "function" ? u(Function.call, v) : v;
      if (t.sham || v && v.sham || d && d.sham) {
        a(y, "sham", true);
      }
      S[p] = y;
      if (w) {
        if (!s(c, l = m + "Prototype")) {
          a(c, l, {});
        }
        c[l][p] = v;
        if (t.real && j && !j[p]) {
          a(j, p, v);
        }
      }
    }
  }
};