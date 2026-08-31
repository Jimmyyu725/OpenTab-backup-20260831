var e = require("./14.js");
var o = require("./188.js").f;
var i = require("./192.js");
var c = require("./104.js");
var u = require("./139.js");
var a = require("./30.js");
var f = require("./37.js");
function s(t) {
  function n(n, r, e) {
    if (this instanceof t) {
      switch (arguments.length) {
        case 0:
          return new t();
        case 1:
          return new t(n);
        case 2:
          return new t(n, r);
      }
      return new t(n, r, e);
    }
    return t.apply(this, arguments);
  }
  n.prototype = t.prototype;
  return n;
}
module.exports = function (t, n) {
  var r;
  var p;
  var l;
  var v;
  var h;
  var y;
  var d;
  var g;
  var x = t.target;
  var m = t.global;
  var w = t.stat;
  var b = t.proto;
  var S = m ? e : w ? e[x] : (e[x] || {}).prototype;
  var j = m ? c : c[x] ||= {};
  var O = j.prototype;
  for (l in n) {
    r = !i(m ? l : x + (w ? "." : "#") + l, t.forced) && S && f(S, l);
    h = j[l];
    if (r) {
      y = t.noTargetGet ? (g = o(S, l)) && g.value : S[l];
    }
    v = r && y ? y : n[l];
    if (!r || typeof h != typeof v) {
      d = t.bind && r ? u(v, e) : t.wrap && r ? s(v) : b && typeof v == "function" ? u(Function.call, v) : v;
      if (t.sham || v && v.sham || h && h.sham) {
        a(d, "sham", true);
      }
      j[l] = d;
      if (b) {
        if (!f(c, p = x + "Prototype")) {
          a(c, p, {});
        }
        c[p][l] = v;
        if (t.real && O && !O[l]) {
          a(O, l, v);
        }
      }
    }
  }
};