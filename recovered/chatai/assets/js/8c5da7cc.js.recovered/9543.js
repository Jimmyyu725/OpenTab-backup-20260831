module.exports = function () {
  "use strict";

  var e = function (e, t = 0, r = 1) {
    if (e < t) {
      return t;
    } else if (e > r) {
      return r;
    } else {
      return e;
    }
  };
  var t = e;
  var r = function (e) {
    e._clipped = false;
    e._unclipped = e.slice(0);
    for (var r = 0; r <= 3; r++) {
      if (r < 3) {
        if (e[r] < 0 || e[r] > 255) {
          e._clipped = true;
        }
        e[r] = t(e[r], 0, 255);
      } else if (r === 3) {
        e[r] = t(e[r], 0, 1);
      }
    }
    return e;
  };
  var n = {};
  for (var o = 0, a = ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Undefined", "Null"]; o < a.length; o += 1) {
    var i = a[o];
    n["[object " + i + "]"] = i.toLowerCase();
  }
  function c(e) {
    return n[Object.prototype.toString.call(e)] || "object";
  }
  var s = c;
  function l(e, t = null) {
    if (e.length >= 3) {
      return Array.prototype.slice.call(e);
    } else if (s(e[0]) == "object" && t) {
      return t.split("").filter(function (t) {
        return e[0][t] !== undefined;
      }).map(function (t) {
        return e[0][t];
      });
    } else {
      return e[0];
    }
  }
  var u = c;
  function f(e) {
    if (e.length < 2) {
      return null;
    }
    var t = e.length - 1;
    if (u(e[t]) == "string") {
      return e[t].toLowerCase();
    } else {
      return null;
    }
  }
  var d = Math.PI;
  var h = {
    clip_rgb: r,
    limit: e,
    type: c,
    unpack: l,
    last: f,
    PI: d,
    TWOPI: d * 2,
    PITHIRD: d / 3,
    DEG2RAD: d / 180,
    RAD2DEG: 180 / d
  };
  var p = {
    format: {},
    autodetect: []
  };
  var g = h.last;
  var y = h.clip_rgb;
  var v = h.type;
  var b = p;
  function m() {
    var e = [];
    for (var t = arguments.length; t--;) {
      e[t] = arguments[t];
    }
    var r = this;
    if (v(e[0]) === "object" && e[0].constructor && e[0].constructor === this.constructor) {
      return e[0];
    }
    var n = g(e);
    var o = false;
    if (!n) {
      o = true;
      if (!b.sorted) {
        b.autodetect = b.autodetect.sort(function (e, t) {
          return t.p - e.p;
        });
        b.sorted = true;
      }
      for (var a = 0, i = b.autodetect; a < i.length; a += 1) {
        var c = i[a];
        if (n = c.test.apply(c, e)) {
          break;
        }
      }
    }
    if (!b.format[n]) {
      throw new Error("unknown format: " + e);
    }
    var s = b.format[n].apply(null, o ? e : e.slice(0, -1));
    r._rgb = y(s);
    if (r._rgb.length === 3) {
      r._rgb.push(1);
    }
  }
  m.prototype.toString = function () {
    if (v(this.hex) == "function") {
      return this.hex();
    } else {
      return "[" + this._rgb.join(",") + "]";
    }
  };
  var w = m;
  function _() {
    var e = [];
    for (var t = arguments.length; t--;) {
      e[t] = arguments[t];
    }
    return new (Function.prototype.bind.apply(_.Color, [null].concat(e)))();
  }
  _.Color = w;
  _.version = "2.4.2";
  var k = _;
  var A = h.unpack;
  var E = Math.max;
  function C() {
    var e = [];
    for (var t = arguments.length; t--;) {
      e[t] = arguments[t];
    }
    var r = A(e, "rgb");
    var n = r[0];
    var o = r[1];
    var a = r[2];
    var i = 1 - E(n /= 255, E(o /= 255, a /= 255));
    var c = i < 1 ? 1 / (1 - i) : 0;
    return [(1 - n - i) * c, (1 - o - i) * c, (1 - a - i) * c, i];
  }
  var x = C;
  var S = h.unpack;
  function O() {
    var e = [];
    for (var t = arguments.length; t--;) {
      e[t] = arguments[t];
    }
    var r = (e = S(e, "cmyk"))[0];
    var n = e[1];
    var o = e[2];
    var a = e[3];
    var i = e.length > 4 ? e[4] : 1;
    if (a === 1) {
      return [0, 0, 0, i];
    } else {
      return [r >= 1 ? 0 : (1 - r) * 255 * (1 - a), n >= 1 ? 0 : (1 - n) * 255 * (1 - a), o >= 1 ? 0 : (1 - o) * 255 * (1 - a), i];
    }
  }
  var B = O;
  var j = k;
  var D = w;
  var F = p;
  var P = h.unpack;
  var M = h.type;
  var T = x;
  D.prototype.cmyk = function () {
    return T(this._rgb);
  };
  j.cmyk = function () {
    var e = [];
    for (var t = arguments.length; t--;) {
      e[t] = arguments[t];
    }
    return new (Function.prototype.bind.apply(D, [null].concat(e, ["cmyk"])))();
  };
  F.format.cmyk = B;
  F.autodetect.push({
    p: 2,
    test: function () {
      var e = [];
      for (var t = arguments.length; t--;) {
        e[t] = arguments[t];
      }
      e = P(e, "cmyk");
      if (M(e) === "array" && e.length === 4) {
        return "cmyk";
      }
    }
  });
  var I = h.unpack;
  var L = h.last;
  function Z(e) {
    return Math.round(e * 100) / 100;
  }
  function U() {
    var e = [];
    for (var t = arguments.length; t--;) {
      e[t] = arguments[t];
    }
    var r = I(e, "hsla");
    var n = L(e) || "lsa";
    r[0] = Z(r[0] || 0);
    r[1] = Z(r[1] * 100) + "%";
    r[2] = Z(r[2] * 100) + "%";
    if (n === "hsla" || r.length > 3 && r[3] < 1) {
      r[3] = r.length > 3 ? r[3] : 1;
      n = "hsla";
    } else {
      r.length = 3;
    }
    return n + "(" + r.join(",") + ")";
  }
  var R = U;
  var z = h.unpack;
  function H() {
    var e = [];
    for (var t = arguments.length; t--;) {
      e[t] = arguments[t];
    }
    var r = (e = z(e, "rgba"))[0];
    var n = e[1];
    var o = e[2];
    r /= 255;
    n /= 255;
    o /= 255;
    var a;
    var i;
    var c = Math.min(r, n, o);
    var s = Math.max(r, n, o);
    var l = (s + c) / 2;
    if (s === c) {
      a = 0;
      i = Number.NaN;
    } else {
      a = l < 0.5 ? (s - c) / (s + c) : (s - c) / (2 - s - c);
    }
    if (r == s) {
      i = (n - o) / (s - c);
    } else if (n == s) {
      i = 2 + (o - r) / (s - c);
    } else if (o == s) {
      i = 4 + (r - n) / (s - c);
    }
    if ((i *= 60) < 0) {
      i += 360;
    }
    if (e.length > 3 && e[3] !== undefined) {
      return [i, a, l, e[3]];
    } else {
      return [i, a, l];
    }
  }
  var N = H;
  var W = h.unpack;
  var $ = h.last;
  var q = R;
  var Y = N;
  var Q = Math.round;
  function V() {
    var e = [];
    for (var t = arguments.length; t--;) {
      e[t] = arguments[t];
    }
    var r = W(e, "rgba");
    var n = $(e) || "rgb";
    if (n.substr(0, 3) == "hsl") {
      return q(Y(r), n);
    } else {
      r[0] = Q(r[0]);
      r[1] = Q(r[1]);
      r[2] = Q(r[2]);
      if (n === "rgba" || r.length > 3 && r[3] < 1) {
        r[3] = r.length > 3 ? r[3] : 1;
        n = "rgba";
      }
      return n + "(" + r.slice(0, n === "rgb" ? 3 : 4).join(",") + ")";
    }
  }
  var G = V;
  var K = h.unpack;
  var J = Math.round;
  function X() {
    var e;
    var t = [];
    for (var r = arguments.length; r--;) {
      t[r] = arguments[r];
    }
    var n;
    var o;
    var a;
    var i = (t = K(t, "hsl"))[0];
    var c = t[1];
    var s = t[2];
    if (c === 0) {
      n = o = a = s * 255;
    } else {
      var l = [0, 0, 0];
      var u = [0, 0, 0];
      var f = s < 0.5 ? s * (1 + c) : s + c - s * c;
      var d = s * 2 - f;
      var h = i / 360;
      l[0] = h + 1 / 3;
      l[1] = h;
      l[2] = h - 1 / 3;
      for (var p = 0; p < 3; p++) {
        if (l[p] < 0) {
          l[p] += 1;
        }
        if (l[p] > 1) {
          l[p] -= 1;
        }
        if (l[p] * 6 < 1) {
          u[p] = d + (f - d) * 6 * l[p];
        } else if (l[p] * 2 < 1) {
          u[p] = f;
        } else if (l[p] * 3 < 2) {
          u[p] = d + (f - d) * (2 / 3 - l[p]) * 6;
        } else {
          u[p] = d;
        }
      }
      n = (e = [J(u[0] * 255), J(u[1] * 255), J(u[2] * 255)])[0];
      o = e[1];
      a = e[2];
    }
    if (t.length > 3) {
      return [n, o, a, t[3]];
    } else {
      return [n, o, a, 1];
    }
  }
  var ee = X;
  var te = ee;
  var re = p;
  var ne = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/;
  var oe = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/;
  var ae = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/;
  var ie = /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/;
  var ce = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/;
  var se = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/;
  var le = Math.round;
  function ue(e) {
    var t;
    e = e.toLowerCase().trim();
    if (re.format.named) {
      try {
        return re.format.named(e);
      } catch (e) {}
    }
    if (t = e.match(ne)) {
      var r = t.slice(1, 4);
      for (var n = 0; n < 3; n++) {
        r[n] = +r[n];
      }
      r[3] = 1;
      return r;
    }
    if (t = e.match(oe)) {
      var o = t.slice(1, 5);
      for (var a = 0; a < 4; a++) {
        o[a] = +o[a];
      }
      return o;
    }
    if (t = e.match(ae)) {
      var i = t.slice(1, 4);
      for (var c = 0; c < 3; c++) {
        i[c] = le(i[c] * 2.55);
      }
      i[3] = 1;
      return i;
    }
    if (t = e.match(ie)) {
      var s = t.slice(1, 5);
      for (var l = 0; l < 3; l++) {
        s[l] = le(s[l] * 2.55);
      }
      s[3] = +s[3];
      return s;
    }
    if (t = e.match(ce)) {
      var u = t.slice(1, 4);
      u[1] *= 0.01;
      u[2] *= 0.01;
      var f = te(u);
      f[3] = 1;
      return f;
    }
    if (t = e.match(se)) {
      var d = t.slice(1, 4);
      d[1] *= 0.01;
      d[2] *= 0.01;
      var h = te(d);
      h[3] = +t[4];
      return h;
    }
  }
  ue.test = function (e) {
    return ne.test(e) || oe.test(e) || ae.test(e) || ie.test(e) || ce.test(e) || se.test(e);
  };
  var fe = ue;
  var de = k;
  var he = w;
  var pe = p;
  var ge = h.type;
  var ye = G;
  var ve = fe;
  he.prototype.css = function (e) {
    return ye(this._rgb, e);
  };
  de.css = function () {
    var e = [];
    for (var t = arguments.length; t--;) {
      e[t] = arguments[t];
    }
    return new (Function.prototype.bind.apply(he, [null].concat(e, ["css"])))();
  };
  pe.format.css = ve;
  pe.autodetect.push({
    p: 5,
    test: function (e) {
      var t = [];
      for (var r = arguments.length - 1; r-- > 0;) {
        t[r] = arguments[r + 1];
      }
      if (!t.length && ge(e) === "string" && ve.test(e)) {
        return "css";
      }
    }
  });
  var be = w;
  var me = k;
  var we = p;
  var _e = h.unpack;
  we.format.gl = function () {
    var e = [];
    for (var t = arguments.length; t--;) {
      e[t] = arguments[t];
    }
    var r = _e(e, "rgba");
    r[0] *= 255;
    r[1] *= 255;
    r[2] *= 255;
    return r;
  };
  me.gl = function () {
    var e = [];
    for (var t = arguments.length; t--;) {
      e[t] = arguments[t];
    }
    return new (Function.prototype.bind.apply(be, [null].concat(e, ["gl"])))();
  };
  be.prototype.gl = function () {
    var e = this._rgb;
    return [e[0] / 255, e[1] / 255, e[2] / 255, e[3]];
  };
  var ke = h.unpack;
  function Ae() {
    var e = [];
    for (var t = arguments.length; t--;) {
      e[t] = arguments[t];
    }
    var r;
    var n = ke(e, "rgb");
    var o = n[0];
    var a = n[1];
    var i = n[2];
    var c = Math.min(o, a, i);
    var s = Math.max(o, a, i);
    var l = s - c;
    var u = l * 100 / 255;
    var f = c / (255 - l) * 100;
    if (l === 0) {
      r = Number.NaN;
    } else {
      if (o === s) {
        r = (a - i) / l;
      }
      if (a === s) {
        r = 2 + (i - o) / l;
      }
      if (i === s) {
        r = 4 + (o - a) / l;
      }
      if ((r *= 60) < 0) {
        r += 360;
      }
    }
    return [r, u, f];
  }
  var Ee = Ae;
  var Ce = h.unpack;
  var xe = Math.floor;
  function Se() {
    var e;
    var t;
    var r;
    var n;
    var o;
    var a;
    var i = [];
    for (var c = arguments.length; c--;) {
      i[c] = arguments[c];
    }
    var s;
    var l;
    var u;
    var f = (i = Ce(i, "hcg"))[0];
    var d = i[1];
    var h = i[2];
    h *= 255;
    var p = d * 255;
    if (d === 0) {
      s = l = u = h;
    } else {
      if (f === 360) {
        f = 0;
      }
      if (f > 360) {
        f -= 360;
      }
      if (f < 0) {
        f += 360;
      }
      var g = xe(f /= 60);
      var y = f - g;
      var v = h * (1 - d);
      var b = v + p * (1 - y);
      var m = v + p * y;
      var w = v + p;
      switch (g) {
        case 0:
          s = (e = [w, m, v])[0];
          l = e[1];
          u = e[2];
          break;
        case 1:
          s = (t = [b, w, v])[0];
          l = t[1];
          u = t[2];
          break;
        case 2:
          s = (r = [v, w, m])[0];
          l = r[1];
          u = r[2];
          break;
        case 3:
          s = (n = [v, b, w])[0];
          l = n[1];
          u = n[2];
          break;
        case 4:
          s = (o = [m, v, w])[0];
          l = o[1];
          u = o[2];
          break;
        case 5:
          s = (a = [w, v, b])[0];
          l = a[1];
          u = a[2];
      }
    }
    return [s, l, u, i.length > 3 ? i[3] : 1];
  }
  var Oe = Se;
  var Be = h.unpack;
  var je = h.type;
  var De = k;
  var Fe = w;
  var Pe = p;
  var Me = Ee;
  Fe.prototype.hcg = function () {
    return Me(this._rgb);
  };
  De.hcg = function () {
    var e = [];
    for (var t = arguments.length; t--;) {
      e[t] = arguments[t];
    }
    return new (Function.prototype.bind.apply(Fe, [null].concat(e, ["hcg"])))();
  };
  Pe.format.hcg = Oe;
  Pe.autodetect.push({
    p: 1,
    test: function () {
      var e = [];
      for (var t = arguments.length; t--;) {
        e[t] = arguments[t];
      }
      e = Be(e, "hcg");
      if (je(e) === "array" && e.length === 3) {
        return "hcg";
      }
    }
  });
  var Te = h.unpack;
  var Ie = h.last;
  var Le = Math.round;
  function Ze() {
    var e = [];
    for (var t = arguments.length; t--;) {
      e[t] = arguments[t];
    }
    var r = Te(e, "rgba");
    var n = r[0];
    var o = r[1];
    var a = r[2];
    var i = r[3];
    var c = Ie(e) || "auto";
    if (i === undefined) {
      i = 1;
    }
    if (c === "auto") {
      c = i < 1 ? "rgba" : "rgb";
    }
    var s = "000000" + ((n = Le(n)) << 16 | (o = Le(o)) << 8 | (a = Le(a))).toString(16);
    s = s.substr(s.length - 6);
    var l = "0" + Le(i * 255).toString(16);
    l = l.substr(l.length - 2);
    switch (c.toLowerCase()) {
      case "rgba":
        return "#" + s + l;
      case "argb":
        return "#" + l + s;
      default:
        return "#" + s;
    }
  }
  var Ue = Ze;
  var Re = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  var ze = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/;
  function He(e) {
    if (e.match(Re)) {
      if (e.length === 4 || e.length === 7) {
        e = e.substr(1);
      }
      if (e.length === 3) {
        e = (e = e.split(""))[0] + e[0] + e[1] + e[1] + e[2] + e[2];
      }
      var t = parseInt(e, 16);
      return [t >> 16, t >> 8 & 255, t & 255, 1];
    }
    if (e.match(ze)) {
      if (e.length === 5 || e.length === 9) {
        e = e.substr(1);
      }
      if (e.length === 4) {
        e = (e = e.split(""))[0] + e[0] + e[1] + e[1] + e[2] + e[2] + e[3] + e[3];
      }
      var r = parseInt(e, 16);
      return [r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, Math.round((r & 255) / 255 * 100) / 100];
    }
    throw new Error("unknown hex color: " + e);
  }
  var Ne = k;
  var We = w;
  var $e = h.type;
  var qe = p;
  var Ye = Ue;
  We.prototype.hex = function (e) {
    return Ye(this._rgb, e);
  };
  Ne.hex = function () {
    var e = [];
    for (var t = arguments.length; t--;) {
      e[t] = arguments[t];
    }
    return new (Function.prototype.bind.apply(We, [null].concat(e, ["hex"])))();
  };
  qe.format.hex = He;
  qe.autodetect.push({
    p: 4,
    test: function (e) {
      var t = [];
      for (var r = arguments.length - 1; r-- > 0;) {
        t[r] = arguments[r + 1];
      }
      if (!t.length && $e(e) === "string" && [3, 4, 5, 6, 7, 8, 9].indexOf(e.length) >= 0) {
        return "hex";
      }
    }
  });
  var Qe = h.unpack;
  var Ve = h.TWOPI;
  var Ge = Math.min;
  var Ke = Math.sqrt;
  var Je = Math.acos;
  function Xe() {
    var e = [];
    for (var t = arguments.length; t--;) {
      e[t] = arguments[t];
    }
    var r;
    var n = Qe(e, "rgb");
    var o = n[0];
    var a = n[1];
    var i = n[2];
    var c = Ge(o /= 255, a /= 255, i /= 255);
    var s = (o + a + i) / 3;
    var l = s > 0 ? 1 - c / s : 0;
    if (l === 0) {
      r = NaN;
    } else {
      r = (o - a + (o - i)) / 2;
      r /= Ke((o - a) * (o - a) + (o - i) * (a - i));
      r = Je(r);
      if (i > a) {
        r = Ve - r;
      }
      r /= Ve;
    }
    return [r * 360, l, s];
  }
  var et = Xe;
  var tt = h.unpack;
  var rt = h.limit;
  var nt = h.TWOPI;
  var ot = h.PITHIRD;
  var at = Math.cos;
  function it() {
    var e = [];
    for (var t = arguments.length; t--;) {
      e[t] = arguments[t];
    }
    var r;
    var n;
    var o;
    var a = (e = tt(e, "hsi"))[0];
    var i = e[1];
    var c = e[2];
    if (isNaN(a)) {
      a = 0;
    }
    if (isNaN(i)) {
      i = 0;
    }
    if (a > 360) {
      a -= 360;
    }
    if (a < 0) {
      a += 360;
    }
    if ((a /= 360) < 1 / 3) {
      n = 1 - ((o = (1 - i) / 3) + (r = (1 + i * at(nt * a) / at(ot - nt * a)) / 3));
    } else if (a < 2 / 3) {
      o = 1 - ((r = (1 - i) / 3) + (n = (1 + i * at(nt * (a -= 1 / 3)) / at(ot - nt * a)) / 3));
    } else {
      r = 1 - ((n = (1 - i) / 3) + (o = (1 + i * at(nt * (a -= 2 / 3)) / at(ot - nt * a)) / 3));
    }
    return [(r = rt(c * r * 3)) * 255, (n = rt(c * n * 3)) * 255, (o = rt(c * o * 3)) * 255, e.length > 3 ? e[3] : 1];
  }
  var ct = it;
  var st = h.unpack;
  var lt = h.type;
  var ut = k;
  var ft = w;
  var dt = p;
  var ht = et;
  ft.prototype.hsi = function () {
    return ht(this._rgb);
  };
  ut.hsi = function () {
    var e = [];
    for (var t = arguments.length; t--;) {
      e[t] = arguments[t];
    }
    return new (Function.prototype.bind.apply(ft, [null].concat(e, ["hsi"])))();
  };
  dt.format.hsi = ct;
  dt.autodetect.push({
    p: 2,
    test: function () {
      var e = [];
      for (var t = arguments.length; t--;) {
        e[t] = arguments[t];
      }
      e = st(e, "hsi");
      if (lt(e) === "array" && e.length === 3) {
        return "hsi";
      }
    }
  });
  var pt = h.unpack;
  var gt = h.type;
  var yt = k;
  var vt = w;
  var bt = p;
  var mt = N;
  vt.prototype.hsl = function () {
    return mt(this._rgb);
  };
  yt.hsl = function () {
    var e = [];
    for (var t = arguments.length; t--;) {
      e[t] = arguments[t];
    }
    return new (Function.prototype.bind.apply(vt, [null].concat(e, ["hsl"])))();
  };
  bt.format.hsl = ee;
  bt.autodetect.push({
    p: 2,
    test: function () {
      var e = [];
      for (var t = arguments.length; t--;) {
        e[t] = arguments[t];
      }
      e = pt(e, "hsl");
      if (gt(e) === "array" && e.length === 3) {
        return "hsl";
      }
    }
  });
  var wt = h.unpack;
  var _t = Math.min;
  var kt = Math.max;
  function At() {
    var e = [];
    for (var t = arguments.length; t--;) {
      e[t] = arguments[t];
    }
    var r;
    var n;
    var o;
    var a = (e = wt(e, "rgb"))[0];
    var i = e[1];
    var c = e[2];
    var s = _t(a, i, c);
    var l = kt(a, i, c);
    var u = l - s;
    o = l / 255;
    if (l === 0) {
      r = Number.NaN;
      n = 0;
    } else {
      n = u / l;
      if (a === l) {
        r = (i - c) / u;
      }
      if (i === l) {
        r = 2 + (c - a) / u;
      }
      if (c === l) {
        r = 4 + (a - i) / u;
      }
      if ((r *= 60) < 0) {
        r += 360;
      }
    }
    return [r, n, o];
  }
  var Et = At;
  var Ct = h.unpack;
  var xt = Math.floor;
  function St() {
    var e;
    var t;
    var r;
    var n;
    var o;
    var a;
    var i = [];
    for (var c = arguments.length; c--;) {
      i[c] = arguments[c];
    }
    var s;
    var l;
    var u;
    var f = (i = Ct(i, "hsv"))[0];
    var d = i[1];
    var h = i[2];
    h *= 255;
    if (d === 0) {
      s = l = u = h;
    } else {
      if (f === 360) {
        f = 0;
      }
      if (f > 360) {
        f -= 360;
      }
      if (f < 0) {
        f += 360;
      }
      var p = xt(f /= 60);
      var g = f - p;
      var y = h * (1 - d);
      var v = h * (1 - d * g);
      var b = h * (1 - d * (1 - g));
      switch (p) {
        case 0:
          s = (e = [h, b, y])[0];
          l = e[1];
          u = e[2];
          break;
        case 1:
          s = (t = [v, h, y])[0];
          l = t[1];
          u = t[2];
          break;
        case 2:
          s = (r = [y, h, b])[0];
          l = r[1];
          u = r[2];
          break;
        case 3:
          s = (n = [y, v, h])[0];
          l = n[1];
          u = n[2];
          break;
        case 4:
          s = (o = [b, y, h])[0];
          l = o[1];
          u = o[2];
          break;
        case 5:
          s = (a = [h, y, v])[0];
          l = a[1];
          u = a[2];
      }
    }
    return [s, l, u, i.length > 3 ? i[3] : 1];
  }
  var Ot = St;
  var Bt = h.unpack;
  var jt = h.type;
  var Dt = k;
  var Ft = w;
  var Pt = p;
  var Mt = Et;
  Ft.prototype.hsv = function () {
    return Mt(this._rgb);
  };
  Dt.hsv = function () {
    var e = [];
    for (var t = arguments.length; t--;) {
      e[t] = arguments[t];
    }
    return new (Function.prototype.bind.apply(Ft, [null].concat(e, ["hsv"])))();
  };
  Pt.format.hsv = Ot;
  Pt.autodetect.push({
    p: 2,
    test: function () {
      var e = [];
      for (var t = arguments.length; t--;) {
        e[t] = arguments[t];
      }
      e = Bt(e, "hsv");
      if (jt(e) === "array" && e.length === 3) {
        return "hsv";
      }
    }
  });
  var Tt = {
    Kn: 18,
    Xn: 0.95047,
    Yn: 1,
    Zn: 1.08883,
    t0: 0.137931034,
    t1: 0.206896552,
    t2: 0.12841855,
    t3: 0.008856452
  };
  var It = Tt;
  var Lt = h.unpack;
  var Zt = Math.pow;
  function Ut() {
    var e = [];
    for (var t = arguments.length; t--;) {
      e[t] = arguments[t];
    }
    var r = Lt(e, "rgb");
    var n = r[0];
    var o = r[1];
    var a = r[2];
    var i = Ht(n, o, a);
    var c = i[0];
    var s = i[1];
    var l = s * 116 - 16;
    return [l < 0 ? 0 : l, (c - s) * 500, (s - i[2]) * 200];
  }
  function Rt(e) {
    if ((e /= 255) <= 0.04045) {
      return e / 12.92;
    } else {
      return Zt((e + 0.055) / 1.055, 2.4);
    }
  }
  function zt(e) {
    if (e > It.t3) {
      return Zt(e, 1 / 3);
    } else {
      return e / It.t2 + It.t0;
    }
  }
  function Ht(e, t, r) {
    e = Rt(e);
    t = Rt(t);
    r = Rt(r);
    return [zt((e * 0.4124564 + t * 0.3575761 + r * 0.1804375) / It.Xn), zt((e * 0.2126729 + t * 0.7151522 + r * 0.072175) / It.Yn), zt((e * 0.0193339 + t * 0.119192 + r * 0.9503041) / It.Zn)];
  }
  var Nt = Ut;
  var Wt = Tt;
  var $t = h.unpack;
  var qt = Math.pow;
  function Yt() {
    var e = [];
    for (var t = arguments.length; t--;) {
      e[t] = arguments[t];
    }
    var r;
    var n;
    var o;
    var a = (e = $t(e, "lab"))[0];
    var i = e[1];
    var c = e[2];
    n = (a + 16) / 116;
    r = isNaN(i) ? n : n + i / 500;
    o = isNaN(c) ? n : n - c / 200;
    n = Wt.Yn * Vt(n);
    r = Wt.Xn * Vt(r);
    o = Wt.Zn * Vt(o);
    return [Qt(r * 3.2404542 - n * 1.5371385 - o * 0.4985314), Qt(r * -0.969266 + n * 1.8760108 + o * 0.041556), Qt(r * 0.0556434 - n * 0.2040259 + o * 1.0572252), e.length > 3 ? e[3] : 1];
  }
  function Qt(e) {
    return (e <= 0.00304 ? e * 12.92 : qt(e, 1 / 2.4) * 1.055 - 0.055) * 255;
  }
  function Vt(e) {
    if (e > Wt.t1) {
      return e * e * e;
    } else {
      return Wt.t2 * (e - Wt.t0);
    }
  }
  var Gt = Yt;
  var Kt = h.unpack;
  var Jt = h.type;
  var Xt = k;
  var er = w;
  var tr = p;
  var rr = Nt;
  er.prototype.lab = function () {
    return rr(this._rgb);
  };
  Xt.lab = function () {
    var e = [];
    for (var t = arguments.length; t--;) {
      e[t] = arguments[t];
    }
    return new (Function.prototype.bind.apply(er, [null].concat(e, ["lab"])))();
  };
  tr.format.lab = Gt;
  tr.autodetect.push({
    p: 2,
    test: function () {
      var e = [];
      for (var t = arguments.length; t--;) {
        e[t] = arguments[t];
      }
      e = Kt(e, "lab");
      if (Jt(e) === "array" && e.length === 3) {
        return "lab";
      }
    }
  });
  var nr = h.unpack;
  var or = h.RAD2DEG;
  var ar = Math.sqrt;
  var ir = Math.atan2;
  var cr = Math.round;
  function sr() {
    var e = [];
    for (var t = arguments.length; t--;) {
      e[t] = arguments[t];
    }
    var r = nr(e, "lab");
    var n = r[0];
    var o = r[1];
    var a = r[2];
    var i = ar(o * o + a * a);
    var c = (ir(a, o) * or + 360) % 360;
    if (cr(i * 10000) === 0) {
      c = Number.NaN;
    }
    return [n, i, c];
  }
  var lr = sr;
  var ur = h.unpack;
  var fr = Nt;
  var dr = lr;
  function hr() {
    var e = [];
    for (var t = arguments.length; t--;) {
      e[t] = arguments[t];
    }
    var r = ur(e, "rgb");
    var n = r[0];
    var o = r[1];
    var a = r[2];
    var i = fr(n, o, a);
    var c = i[0];
    var s = i[1];
    var l = i[2];
    return dr(c, s, l);
  }
  var pr = hr;
  var gr = h.unpack;
  var yr = h.DEG2RAD;
  var vr = Math.sin;
  var br = Math.cos;
  function mr() {
    var e = [];
    for (var t = arguments.length; t--;) {
      e[t] = arguments[t];
    }
    var r = gr(e, "lch");
    var n = r[0];
    var o = r[1];
    var a = r[2];
    if (isNaN(a)) {
      a = 0;
    }
    return [n, br(a *= yr) * o, vr(a) * o];
  }
  var wr = mr;
  var _r = h.unpack;
  var kr = wr;
  var Ar = Gt;
  function Er() {
    var e = [];
    for (var t = arguments.length; t--;) {
      e[t] = arguments[t];
    }
    var r = (e = _r(e, "lch"))[0];
    var n = e[1];
    var o = e[2];
    var a = kr(r, n, o);
    var i = a[0];
    var c = a[1];
    var s = a[2];
    var l = Ar(i, c, s);
    return [l[0], l[1], l[2], e.length > 3 ? e[3] : 1];
  }
  var Cr = Er;
  var xr = h.unpack;
  var Sr = Cr;
  function Or() {
    var e = [];
    for (var t = arguments.length; t--;) {
      e[t] = arguments[t];
    }
    var r = xr(e, "hcl").reverse();
    return Sr.apply(undefined, r);
  }
  var Br = Or;
  var jr = h.unpack;
  var Dr = h.type;
  var Fr = k;
  var Pr = w;
  var Mr = p;
  var Tr = pr;
  Pr.prototype.lch = function () {
    return Tr(this._rgb);
  };
  Pr.prototype.hcl = function () {
    return Tr(this._rgb).reverse();
  };
  Fr.lch = function () {
    var e = [];
    for (var t = arguments.length; t--;) {
      e[t] = arguments[t];
    }
    return new (Function.prototype.bind.apply(Pr, [null].concat(e, ["lch"])))();
  };
  Fr.hcl = function () {
    var e = [];
    for (var t = arguments.length; t--;) {
      e[t] = arguments[t];
    }
    return new (Function.prototype.bind.apply(Pr, [null].concat(e, ["hcl"])))();
  };
  Mr.format.lch = Cr;
  Mr.format.hcl = Br;
  ["lch", "hcl"].forEach(function (e) {
    return Mr.autodetect.push({
      p: 2,
      test: function () {
        var t = [];
        for (var r = arguments.length; r--;) {
          t[r] = arguments[r];
        }
        t = jr(t, e);
        if (Dr(t) === "array" && t.length === 3) {
          return e;
        }
      }
    });
  });
  var Ir = {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflower: "#6495ed",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    laserlemon: "#ffff54",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrod: "#fafad2",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    maroon2: "#7f0000",
    maroon3: "#b03060",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    purple2: "#7f007f",
    purple3: "#a020f0",
    rebeccapurple: "#663399",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
  };
  var Lr = w;
  var Zr = p;
  var Ur = h.type;
  var Rr = Ir;
  var zr = He;
  var Hr = Ue;
  Lr.prototype.name = function () {
    var e = Hr(this._rgb, "rgb");
    for (var t = 0, r = Object.keys(Rr); t < r.length; t += 1) {
      var n = r[t];
      if (Rr[n] === e) {
        return n.toLowerCase();
      }
    }
    return e;
  };
  Zr.format.named = function (e) {
    e = e.toLowerCase();
    if (Rr[e]) {
      return zr(Rr[e]);
    }
    throw new Error("unknown color name: " + e);
  };
  Zr.autodetect.push({
    p: 5,
    test: function (e) {
      var t = [];
      for (var r = arguments.length - 1; r-- > 0;) {
        t[r] = arguments[r + 1];
      }
      if (!t.length && Ur(e) === "string" && Rr[e.toLowerCase()]) {
        return "named";
      }
    }
  });
  var Nr = h.unpack;
  function Wr() {
    var e = [];
    for (var t = arguments.length; t--;) {
      e[t] = arguments[t];
    }
    var r = Nr(e, "rgb");
    return (r[0] << 16) + (r[1] << 8) + r[2];
  }
  var $r = Wr;
  var qr = h.type;
  function Yr(e) {
    if (qr(e) == "number" && e >= 0 && e <= 16777215) {
      return [e >> 16, e >> 8 & 255, e & 255, 1];
    }
    throw new Error("unknown num color: " + e);
  }
  var Qr = Yr;
  var Vr = k;
  var Gr = w;
  var Kr = p;
  var Jr = h.type;
  var Xr = $r;
  Gr.prototype.num = function () {
    return Xr(this._rgb);
  };
  Vr.num = function () {
    var e = [];
    for (var t = arguments.length; t--;) {
      e[t] = arguments[t];
    }
    return new (Function.prototype.bind.apply(Gr, [null].concat(e, ["num"])))();
  };
  Kr.format.num = Qr;
  Kr.autodetect.push({
    p: 5,
    test: function () {
      var e = [];
      for (var t = arguments.length; t--;) {
        e[t] = arguments[t];
      }
      if (e.length === 1 && Jr(e[0]) === "number" && e[0] >= 0 && e[0] <= 16777215) {
        return "num";
      }
    }
  });
  var en = k;
  var tn = w;
  var rn = p;
  var nn = h.unpack;
  var on = h.type;
  var an = Math.round;
  tn.prototype.rgb = function (e = true) {
    if (e === false) {
      return this._rgb.slice(0, 3);
    } else {
      return this._rgb.slice(0, 3).map(an);
    }
  };
  tn.prototype.rgba = function (e = true) {
    return this._rgb.slice(0, 4).map(function (t, r) {
      if (r < 3) {
        if (e === false) {
          return t;
        } else {
          return an(t);
        }
      } else {
        return t;
      }
    });
  };
  en.rgb = function () {
    var e = [];
    for (var t = arguments.length; t--;) {
      e[t] = arguments[t];
    }
    return new (Function.prototype.bind.apply(tn, [null].concat(e, ["rgb"])))();
  };
  rn.format.rgb = function () {
    var e = [];
    for (var t = arguments.length; t--;) {
      e[t] = arguments[t];
    }
    var r = nn(e, "rgba");
    if (r[3] === undefined) {
      r[3] = 1;
    }
    return r;
  };
  rn.autodetect.push({
    p: 3,
    test: function () {
      var e = [];
      for (var t = arguments.length; t--;) {
        e[t] = arguments[t];
      }
      e = nn(e, "rgba");
      if (on(e) === "array" && (e.length === 3 || e.length === 4 && on(e[3]) == "number" && e[3] >= 0 && e[3] <= 1)) {
        return "rgb";
      }
    }
  });
  var cn = Math.log;
  function sn(e) {
    var t;
    var r;
    var n;
    var o = e / 100;
    if (o < 66) {
      t = 255;
      r = o < 6 ? 0 : -155.25485562709179 - (r = o - 2) * 0.44596950469579133 + cn(r) * 104.49216199393888;
      n = o < 20 ? 0 : (n = o - 10) * 0.8274096064007395 - 254.76935184120902 + cn(n) * 115.67994401066147;
    } else {
      t = 351.97690566805693 + (t = o - 55) * 0.114206453784165 - cn(t) * 40.25366309332127;
      r = 325.4494125711974 + (r = o - 50) * 0.07943456536662342 - cn(r) * 28.0852963507957;
      n = 255;
    }
    return [t, r, n, 1];
  }
  var ln = sn;
  var un = h.unpack;
  var fn = Math.round;
  function dn() {
    var e = [];
    for (var t = arguments.length; t--;) {
      e[t] = arguments[t];
    }
    var r;
    var n = un(e, "rgb");
    var o = n[0];
    var a = n[2];
    for (var i = 1000, c = 40000, s = 0.4; c - i > s;) {
      var l = ln(r = (c + i) * 0.5);
      if (l[2] / l[0] >= a / o) {
        c = r;
      } else {
        i = r;
      }
    }
    return fn(r);
  }
  var hn = k;
  var pn = w;
  var gn = p;
  var yn = dn;
  pn.prototype.temp = pn.prototype.kelvin = pn.prototype.temperature = function () {
    return yn(this._rgb);
  };
  hn.temp = hn.kelvin = hn.temperature = function () {
    var e = [];
    for (var t = arguments.length; t--;) {
      e[t] = arguments[t];
    }
    return new (Function.prototype.bind.apply(pn, [null].concat(e, ["temp"])))();
  };
  gn.format.temp = gn.format.kelvin = gn.format.temperature = sn;
  var vn = h.unpack;
  var bn = Math.cbrt;
  var mn = Math.pow;
  var wn = Math.sign;
  function _n() {
    var e = [];
    for (var t = arguments.length; t--;) {
      e[t] = arguments[t];
    }
    var r = vn(e, "rgb");
    var n = r[0];
    var o = r[1];
    var a = r[2];
    var i = [An(n / 255), An(o / 255), An(a / 255)];
    var c = i[0];
    var s = i[1];
    var l = i[2];
    var u = bn(c * 0.4122214708 + s * 0.5363325363 + l * 0.0514459929);
    var f = bn(c * 0.2119034982 + s * 0.6806995451 + l * 0.1073969566);
    var d = bn(c * 0.0883024619 + s * 0.2817188376 + l * 0.6299787005);
    return [u * 0.2104542553 + f * 0.793617785 - d * 0.0040720468, u * 1.9779984951 - f * 2.428592205 + d * 0.4505937099, u * 0.0259040371 + f * 0.7827717662 - d * 0.808675766];
  }
  var kn = _n;
  function An(e) {
    var t = Math.abs(e);
    if (t < 0.04045) {
      return e / 12.92;
    } else {
      return (wn(e) || 1) * mn((t + 0.055) / 1.055, 2.4);
    }
  }
  var En = h.unpack;
  var Cn = Math.pow;
  var xn = Math.sign;
  function Sn() {
    var e = [];
    for (var t = arguments.length; t--;) {
      e[t] = arguments[t];
    }
    var r = (e = En(e, "lab"))[0];
    var n = e[1];
    var o = e[2];
    var a = Cn(r + n * 0.3963377774 + o * 0.2158037573, 3);
    var i = Cn(r - n * 0.1055613458 - o * 0.0638541728, 3);
    var c = Cn(r - n * 0.0894841775 - o * 1.291485548, 3);
    return [Bn(a * 4.0767416621 - i * 3.3077115913 + c * 0.2309699292) * 255, Bn(a * -1.2684380046 + i * 2.6097574011 - c * 0.3413193965) * 255, Bn(a * -0.0041960863 - i * 0.7034186147 + c * 1.707614701) * 255, e.length > 3 ? e[3] : 1];
  }
  var On = Sn;
  function Bn(e) {
    var t = Math.abs(e);
    if (t > 0.0031308) {
      return (xn(e) || 1) * (Cn(t, 1 / 2.4) * 1.055 - 0.055);
    } else {
      return e * 12.92;
    }
  }
  var jn = h.unpack;
  var Dn = h.type;
  var Fn = k;
  var Pn = w;
  var Mn = p;
  var Tn = kn;
  Pn.prototype.oklab = function () {
    return Tn(this._rgb);
  };
  Fn.oklab = function () {
    var e = [];
    for (var t = arguments.length; t--;) {
      e[t] = arguments[t];
    }
    return new (Function.prototype.bind.apply(Pn, [null].concat(e, ["oklab"])))();
  };
  Mn.format.oklab = On;
  Mn.autodetect.push({
    p: 3,
    test: function () {
      var e = [];
      for (var t = arguments.length; t--;) {
        e[t] = arguments[t];
      }
      e = jn(e, "oklab");
      if (Dn(e) === "array" && e.length === 3) {
        return "oklab";
      }
    }
  });
  var In = h.unpack;
  var Ln = kn;
  var Zn = lr;
  function Un() {
    var e = [];
    for (var t = arguments.length; t--;) {
      e[t] = arguments[t];
    }
    var r = In(e, "rgb");
    var n = r[0];
    var o = r[1];
    var a = r[2];
    var i = Ln(n, o, a);
    var c = i[0];
    var s = i[1];
    var l = i[2];
    return Zn(c, s, l);
  }
  var Rn = Un;
  var zn = h.unpack;
  var Hn = wr;
  var Nn = On;
  function Wn() {
    var e = [];
    for (var t = arguments.length; t--;) {
      e[t] = arguments[t];
    }
    var r = (e = zn(e, "lch"))[0];
    var n = e[1];
    var o = e[2];
    var a = Hn(r, n, o);
    var i = a[0];
    var c = a[1];
    var s = a[2];
    var l = Nn(i, c, s);
    return [l[0], l[1], l[2], e.length > 3 ? e[3] : 1];
  }
  var $n = Wn;
  var qn = h.unpack;
  var Yn = h.type;
  var Qn = k;
  var Vn = w;
  var Gn = p;
  var Kn = Rn;
  Vn.prototype.oklch = function () {
    return Kn(this._rgb);
  };
  Qn.oklch = function () {
    var e = [];
    for (var t = arguments.length; t--;) {
      e[t] = arguments[t];
    }
    return new (Function.prototype.bind.apply(Vn, [null].concat(e, ["oklch"])))();
  };
  Gn.format.oklch = $n;
  Gn.autodetect.push({
    p: 3,
    test: function () {
      var e = [];
      for (var t = arguments.length; t--;) {
        e[t] = arguments[t];
      }
      e = qn(e, "oklch");
      if (Yn(e) === "array" && e.length === 3) {
        return "oklch";
      }
    }
  });
  var Jn = w;
  var Xn = h.type;
  Jn.prototype.alpha = function (e, t = false) {
    if (e !== undefined && Xn(e) === "number") {
      if (t) {
        this._rgb[3] = e;
        return this;
      } else {
        return new Jn([this._rgb[0], this._rgb[1], this._rgb[2], e], "rgb");
      }
    } else {
      return this._rgb[3];
    }
  };
  w.prototype.clipped = function () {
    return this._rgb._clipped || false;
  };
  var eo = w;
  var to = Tt;
  eo.prototype.darken = function (e = 1) {
    var t = this;
    var r = t.lab();
    r[0] -= to.Kn * e;
    return new eo(r, "lab").alpha(t.alpha(), true);
  };
  eo.prototype.brighten = function (e = 1) {
    return this.darken(-e);
  };
  eo.prototype.darker = eo.prototype.darken;
  eo.prototype.brighter = eo.prototype.brighten;
  w.prototype.get = function (e) {
    var t = e.split(".");
    var r = t[0];
    var n = t[1];
    var o = this[r]();
    if (n) {
      var a = r.indexOf(n) - (r.substr(0, 2) === "ok" ? 2 : 0);
      if (a > -1) {
        return o[a];
      }
      throw new Error("unknown channel " + n + " in mode " + r);
    }
    return o;
  };
  var ro = w;
  var no = h.type;
  var oo = Math.pow;
  var ao = 1e-7;
  var io = 20;
  ro.prototype.luminance = function (e) {
    if (e !== undefined && no(e) === "number") {
      if (e === 0) {
        return new ro([0, 0, 0, this._rgb[3]], "rgb");
      }
      if (e === 1) {
        return new ro([255, 255, 255, this._rgb[3]], "rgb");
      }
      var t = this.luminance();
      var r = "rgb";
      var n = io;
      function o(t, a) {
        var i = t.interpolate(a, 0.5, r);
        var c = i.luminance();
        if (Math.abs(e - c) < ao || !n--) {
          return i;
        } else if (c > e) {
          return o(t, i);
        } else {
          return o(i, a);
        }
      }
      var a = (t > e ? o(new ro([0, 0, 0]), this) : o(this, new ro([255, 255, 255]))).rgb();
      return new ro(a.concat([this._rgb[3]]));
    }
    return co.apply(undefined, this._rgb.slice(0, 3));
  };
  function co(e, t, r) {
    return (e = so(e)) * 0.2126 + (t = so(t)) * 0.7152 + (r = so(r)) * 0.0722;
  }
  function so(e) {
    if ((e /= 255) <= 0.03928) {
      return e / 12.92;
    } else {
      return oo((e + 0.055) / 1.055, 2.4);
    }
  }
  var lo = {};
  var uo = w;
  var fo = h.type;
  var ho = lo;
  function po(e, t, r = 0.5) {
    var n = [];
    for (var o = arguments.length - 3; o-- > 0;) {
      n[o] = arguments[o + 3];
    }
    var a = n[0] || "lrgb";
    if (!ho[a] && !n.length) {
      a = Object.keys(ho)[0];
    }
    if (!ho[a]) {
      throw new Error("interpolation mode " + a + " is not defined");
    }
    if (fo(e) !== "object") {
      e = new uo(e);
    }
    if (fo(t) !== "object") {
      t = new uo(t);
    }
    return ho[a](e, t, r).alpha(e.alpha() + r * (t.alpha() - e.alpha()));
  }
  var go = w;
  var yo = po;
  go.prototype.mix = go.prototype.interpolate = function (e, t = 0.5) {
    var r = [];
    for (var n = arguments.length - 2; n-- > 0;) {
      r[n] = arguments[n + 2];
    }
    return yo.apply(undefined, [this, e, t].concat(r));
  };
  var vo = w;
  vo.prototype.premultiply = function (e = false) {
    var t = this._rgb;
    var r = t[3];
    if (e) {
      this._rgb = [t[0] * r, t[1] * r, t[2] * r, r];
      return this;
    } else {
      return new vo([t[0] * r, t[1] * r, t[2] * r, r], "rgb");
    }
  };
  var bo = w;
  var mo = Tt;
  bo.prototype.saturate = function (e = 1) {
    var t = this;
    var r = t.lch();
    r[1] += mo.Kn * e;
    if (r[1] < 0) {
      r[1] = 0;
    }
    return new bo(r, "lch").alpha(t.alpha(), true);
  };
  bo.prototype.desaturate = function (e = 1) {
    return this.saturate(-e);
  };
  var wo = w;
  var _o = h.type;
  wo.prototype.set = function (e, t, r = false) {
    var n = e.split(".");
    var o = n[0];
    var a = n[1];
    var i = this[o]();
    if (a) {
      var c = o.indexOf(a) - (o.substr(0, 2) === "ok" ? 2 : 0);
      if (c > -1) {
        if (_o(t) == "string") {
          switch (t.charAt(0)) {
            case "+":
            case "-":
              i[c] += +t;
              break;
            case "*":
              i[c] *= +t.substr(1);
              break;
            case "/":
              i[c] /= +t.substr(1);
              break;
            default:
              i[c] = +t;
          }
        } else {
          if (_o(t) !== "number") {
            throw new Error("unsupported value for Color.set");
          }
          i[c] = t;
        }
        var s = new wo(i, o);
        if (r) {
          this._rgb = s._rgb;
          return this;
        } else {
          return s;
        }
      }
      throw new Error("unknown channel " + a + " in mode " + o);
    }
    return i;
  };
  var ko = w;
  function Ao(e, t, r) {
    var n = e._rgb;
    var o = t._rgb;
    return new ko(n[0] + r * (o[0] - n[0]), n[1] + r * (o[1] - n[1]), n[2] + r * (o[2] - n[2]), "rgb");
  }
  lo.rgb = Ao;
  var Eo = w;
  var Co = Math.sqrt;
  var xo = Math.pow;
  function So(e, t, r) {
    var n = e._rgb;
    var o = n[0];
    var a = n[1];
    var i = n[2];
    var c = t._rgb;
    var s = c[0];
    var l = c[1];
    var u = c[2];
    return new Eo(Co(xo(o, 2) * (1 - r) + xo(s, 2) * r), Co(xo(a, 2) * (1 - r) + xo(l, 2) * r), Co(xo(i, 2) * (1 - r) + xo(u, 2) * r), "rgb");
  }
  lo.lrgb = So;
  var Oo = w;
  function Bo(e, t, r) {
    var n = e.lab();
    var o = t.lab();
    return new Oo(n[0] + r * (o[0] - n[0]), n[1] + r * (o[1] - n[1]), n[2] + r * (o[2] - n[2]), "lab");
  }
  lo.lab = Bo;
  var jo = w;
  function Do(e, t, r, n) {
    var o;
    var a;
    var i;
    var c;
    var s;
    var l;
    var u;
    var f;
    var d;
    var h;
    var p;
    var g;
    var y;
    if (n === "hsl") {
      i = e.hsl();
      c = t.hsl();
    } else if (n === "hsv") {
      i = e.hsv();
      c = t.hsv();
    } else if (n === "hcg") {
      i = e.hcg();
      c = t.hcg();
    } else if (n === "hsi") {
      i = e.hsi();
      c = t.hsi();
    } else if (n === "lch" || n === "hcl") {
      n = "hcl";
      i = e.hcl();
      c = t.hcl();
    } else if (n === "oklch") {
      i = e.oklch().reverse();
      c = t.oklch().reverse();
    }
    if (n.substr(0, 1) === "h" || n === "oklch") {
      s = (o = i)[0];
      u = o[1];
      d = o[2];
      l = (a = c)[0];
      f = a[1];
      h = a[2];
    }
    if (isNaN(s) || isNaN(l)) {
      if (isNaN(s)) {
        if (isNaN(l)) {
          g = Number.NaN;
        } else {
          g = l;
          if ((d == 1 || d == 0) && n != "hsv") {
            p = f;
          }
        }
      } else {
        g = s;
        if ((h == 1 || h == 0) && n != "hsv") {
          p = u;
        }
      }
    } else {
      g = s + r * (l > s && l - s > 180 ? l - (s + 360) : l < s && s - l > 180 ? l + 360 - s : l - s);
    }
    if (p === undefined) {
      p = u + r * (f - u);
    }
    y = d + r * (h - d);
    return new jo(n === "oklch" ? [y, p, g] : [g, p, y], n);
  }
  var Fo = Do;
  function Po(e, t, r) {
    return Fo(e, t, r, "lch");
  }
  lo.lch = Po;
  lo.hcl = Po;
  var Mo = w;
  function To(e, t, r) {
    var n = e.num();
    var o = t.num();
    return new Mo(n + r * (o - n), "num");
  }
  lo.num = To;
  var Io = Do;
  function Lo(e, t, r) {
    return Io(e, t, r, "hcg");
  }
  lo.hcg = Lo;
  var Zo = Do;
  function Uo(e, t, r) {
    return Zo(e, t, r, "hsi");
  }
  lo.hsi = Uo;
  var Ro = Do;
  function zo(e, t, r) {
    return Ro(e, t, r, "hsl");
  }
  lo.hsl = zo;
  var Ho = Do;
  function No(e, t, r) {
    return Ho(e, t, r, "hsv");
  }
  lo.hsv = No;
  var Wo = w;
  function $o(e, t, r) {
    var n = e.oklab();
    var o = t.oklab();
    return new Wo(n[0] + r * (o[0] - n[0]), n[1] + r * (o[1] - n[1]), n[2] + r * (o[2] - n[2]), "oklab");
  }
  lo.oklab = $o;
  var qo = Do;
  function Yo(e, t, r) {
    return qo(e, t, r, "oklch");
  }
  lo.oklch = Yo;
  var Qo = w;
  var Vo = h.clip_rgb;
  var Go = Math.pow;
  var Ko = Math.sqrt;
  var Jo = Math.PI;
  var Xo = Math.cos;
  var ea = Math.sin;
  var ta = Math.atan2;
  function ra(e, t = "lrgb", r = null) {
    var n = e.length;
    r ||= Array.from(new Array(n)).map(function () {
      return 1;
    });
    var o = n / r.reduce(function (e, t) {
      return e + t;
    });
    r.forEach(function (e, t) {
      r[t] *= o;
    });
    e = e.map(function (e) {
      return new Qo(e);
    });
    if (t === "lrgb") {
      return na(e, r);
    }
    var a = e.shift();
    for (var i = a.get(t), c = [], s = 0, l = 0, u = 0; u < i.length; u++) {
      i[u] = (i[u] || 0) * r[0];
      c.push(isNaN(i[u]) ? 0 : r[0]);
      if (t.charAt(u) === "h" && !isNaN(i[u])) {
        var f = i[u] / 180 * Jo;
        s += Xo(f) * r[0];
        l += ea(f) * r[0];
      }
    }
    var d = a.alpha() * r[0];
    e.forEach(function (e, n) {
      var o = e.get(t);
      d += e.alpha() * r[n + 1];
      for (var a = 0; a < i.length; a++) {
        if (!isNaN(o[a])) {
          c[a] += r[n + 1];
          if (t.charAt(a) === "h") {
            var u = o[a] / 180 * Jo;
            s += Xo(u) * r[n + 1];
            l += ea(u) * r[n + 1];
          } else {
            i[a] += o[a] * r[n + 1];
          }
        }
      }
    });
    for (var h = 0; h < i.length; h++) {
      if (t.charAt(h) === "h") {
        for (var p = ta(l / c[h], s / c[h]) / Jo * 180; p < 0;) {
          p += 360;
        }
        while (p >= 360) {
          p -= 360;
        }
        i[h] = p;
      } else {
        i[h] = i[h] / c[h];
      }
    }
    d /= n;
    return new Qo(i, t).alpha(d > 0.99999 ? 1 : d, true);
  }
  function na(e, t) {
    var r = e.length;
    var n = [0, 0, 0, 0];
    for (var o = 0; o < e.length; o++) {
      var a = e[o];
      var i = t[o] / r;
      var c = a._rgb;
      n[0] += Go(c[0], 2) * i;
      n[1] += Go(c[1], 2) * i;
      n[2] += Go(c[2], 2) * i;
      n[3] += c[3] * i;
    }
    n[0] = Ko(n[0]);
    n[1] = Ko(n[1]);
    n[2] = Ko(n[2]);
    if (n[3] > 0.9999999) {
      n[3] = 1;
    }
    return new Qo(Vo(n));
  }
  var oa = k;
  var aa = h.type;
  var ia = Math.pow;
  function ca(e) {
    var t = "rgb";
    var r = oa("#ccc");
    var n = 0;
    var o = [0, 1];
    var a = [];
    var i = [0, 0];
    var c = false;
    var s = [];
    var l = false;
    var u = 0;
    var f = 1;
    var d = false;
    var h = {};
    var p = true;
    var g = 1;
    function y(e) {
      if ((e = e || ["#fff", "#000"]) && aa(e) === "string" && oa.brewer && oa.brewer[e.toLowerCase()]) {
        e = oa.brewer[e.toLowerCase()];
      }
      if (aa(e) === "array") {
        if (e.length === 1) {
          e = [e[0], e[0]];
        }
        e = e.slice(0);
        for (var t = 0; t < e.length; t++) {
          e[t] = oa(e[t]);
        }
        a.length = 0;
        for (var r = 0; r < e.length; r++) {
          a.push(r / (e.length - 1));
        }
      }
      _();
      return s = e;
    }
    function v(e) {
      if (c != null) {
        for (var t = c.length - 1, r = 0; r < t && e >= c[r];) {
          r++;
        }
        return r - 1;
      }
      return 0;
    }
    function b(e) {
      return e;
    }
    function m(e) {
      return e;
    }
    function w(e, n) {
      var o;
      var l;
      if (n == null) {
        n = false;
      }
      if (isNaN(e) || e === null) {
        return r;
      }
      l = n ? e : c && c.length > 2 ? v(e) / (c.length - 2) : f !== u ? (e - u) / (f - u) : 1;
      l = m(l);
      if (!n) {
        l = b(l);
      }
      if (g !== 1) {
        l = ia(l, g);
      }
      l = i[0] + l * (1 - i[0] - i[1]);
      l = Math.min(1, Math.max(0, l));
      var d = Math.floor(l * 10000);
      if (p && h[d]) {
        o = h[d];
      } else {
        if (aa(s) === "array") {
          for (var y = 0; y < a.length; y++) {
            var w = a[y];
            if (l <= w) {
              o = s[y];
              break;
            }
            if (l >= w && y === a.length - 1) {
              o = s[y];
              break;
            }
            if (l > w && l < a[y + 1]) {
              l = (l - w) / (a[y + 1] - w);
              o = oa.interpolate(s[y], s[y + 1], l, t);
              break;
            }
          }
        } else if (aa(s) === "function") {
          o = s(l);
        }
        if (p) {
          h[d] = o;
        }
      }
      return o;
    }
    function _() {
      return h = {};
    }
    y(e);
    function k(e) {
      var t = oa(w(e));
      if (l && t[l]) {
        return t[l]();
      } else {
        return t;
      }
    }
    k.classes = function (e) {
      if (e != null) {
        if (aa(e) === "array") {
          c = e;
          o = [e[0], e[e.length - 1]];
        } else {
          var t = oa.analyze(o);
          c = e === 0 ? [t.min, t.max] : oa.limits(t, "e", e);
        }
        return k;
      }
      return c;
    };
    k.domain = function (e) {
      if (!arguments.length) {
        return o;
      }
      u = e[0];
      f = e[e.length - 1];
      a = [];
      var t = s.length;
      if (e.length === t && u !== f) {
        for (var r = 0, n = Array.from(e); r < n.length; r += 1) {
          var i = n[r];
          a.push((i - u) / (f - u));
        }
      } else {
        for (var c = 0; c < t; c++) {
          a.push(c / (t - 1));
        }
        if (e.length > 2) {
          var l = e.map(function (t, r) {
            return r / (e.length - 1);
          });
          var d = e.map(function (e) {
            return (e - u) / (f - u);
          });
          if (!d.every(function (e, t) {
            return l[t] === e;
          })) {
            m = function (e) {
              if (e <= 0 || e >= 1) {
                return e;
              }
              for (var t = 0; e >= d[t + 1];) {
                t++;
              }
              var r = (e - d[t]) / (d[t + 1] - d[t]);
              return l[t] + r * (l[t + 1] - l[t]);
            };
          }
        }
      }
      o = [u, f];
      return k;
    };
    k.mode = function (e) {
      if (arguments.length) {
        t = e;
        _();
        return k;
      } else {
        return t;
      }
    };
    k.range = function (e, t) {
      y(e);
      return k;
    };
    k.out = function (e) {
      l = e;
      return k;
    };
    k.spread = function (e) {
      if (arguments.length) {
        n = e;
        return k;
      } else {
        return n;
      }
    };
    k.correctLightness = function (e) {
      if (e == null) {
        e = true;
      }
      d = e;
      _();
      b = d ? function (e) {
        var t = w(0, true).lab()[0];
        var r = w(1, true).lab()[0];
        var n = t > r;
        var o = w(e, true).lab()[0];
        var a = t + (r - t) * e;
        for (var i = o - a, c = 0, s = 1, l = 20; Math.abs(i) > 0.01 && l-- > 0;) {
          if (n) {
            i *= -1;
          }
          if (i < 0) {
            c = e;
            e += (s - e) * 0.5;
          } else {
            s = e;
            e += (c - e) * 0.5;
          }
          o = w(e, true).lab()[0];
          i = o - a;
        }
        return e;
      } : function (e) {
        return e;
      };
      return k;
    };
    k.padding = function (e) {
      if (e != null) {
        if (aa(e) === "number") {
          e = [e, e];
        }
        i = e;
        return k;
      } else {
        return i;
      }
    };
    k.colors = function (t, r) {
      if (arguments.length < 2) {
        r = "hex";
      }
      var n = [];
      if (arguments.length === 0) {
        n = s.slice(0);
      } else if (t === 1) {
        n = [k(0.5)];
      } else if (t > 1) {
        var a = o[0];
        var i = o[1] - a;
        n = sa(0, t, false).map(function (e) {
          return k(a + e / (t - 1) * i);
        });
      } else {
        e = [];
        var l = [];
        if (c && c.length > 2) {
          for (var u = 1, f = c.length, d = f >= 1; d ? u < f : u > f; d ? u++ : u--) {
            l.push((c[u - 1] + c[u]) * 0.5);
          }
        } else {
          l = o;
        }
        n = l.map(function (e) {
          return k(e);
        });
      }
      if (oa[r]) {
        n = n.map(function (e) {
          return e[r]();
        });
      }
      return n;
    };
    k.cache = function (e) {
      if (e != null) {
        p = e;
        return k;
      } else {
        return p;
      }
    };
    k.gamma = function (e) {
      if (e != null) {
        g = e;
        return k;
      } else {
        return g;
      }
    };
    k.nodata = function (e) {
      if (e != null) {
        r = oa(e);
        return k;
      } else {
        return r;
      }
    };
    return k;
  }
  function sa(e, t, r) {
    var n = [];
    for (var o = e < t, a = r ? o ? t + 1 : t - 1 : t, i = e; o ? i < a : i > a; o ? i++ : i--) {
      n.push(i);
    }
    return n;
  }
  var la = w;
  var ua = ca;
  function fa(e) {
    var t = [1, 1];
    for (var r = 1; r < e; r++) {
      var n = [1];
      for (var o = 1; o <= t.length; o++) {
        n[o] = (t[o] || 0) + t[o - 1];
      }
      t = n;
    }
    return t;
  }
  function da(e) {
    var t;
    var r;
    var n;
    var o;
    var a;
    var i;
    var c;
    if ((e = e.map(function (e) {
      return new la(e);
    })).length === 2) {
      t = e.map(function (e) {
        return e.lab();
      });
      a = t[0];
      i = t[1];
      o = function (e) {
        var t = [0, 1, 2].map(function (t) {
          return a[t] + e * (i[t] - a[t]);
        });
        return new la(t, "lab");
      };
    } else if (e.length === 3) {
      r = e.map(function (e) {
        return e.lab();
      });
      a = r[0];
      i = r[1];
      c = r[2];
      o = function (e) {
        var t = [0, 1, 2].map(function (t) {
          return (1 - e) * (1 - e) * a[t] + (1 - e) * 2 * e * i[t] + e * e * c[t];
        });
        return new la(t, "lab");
      };
    } else if (e.length === 4) {
      var s;
      n = e.map(function (e) {
        return e.lab();
      });
      a = n[0];
      i = n[1];
      c = n[2];
      s = n[3];
      o = function (e) {
        var t = [0, 1, 2].map(function (t) {
          return (1 - e) * (1 - e) * (1 - e) * a[t] + (1 - e) * 3 * (1 - e) * e * i[t] + (1 - e) * 3 * e * e * c[t] + e * e * e * s[t];
        });
        return new la(t, "lab");
      };
    } else {
      if (!(e.length >= 5)) {
        throw new RangeError("No point in running bezier with only one color.");
      }
      var l;
      var u;
      var f;
      l = e.map(function (e) {
        return e.lab();
      });
      f = e.length - 1;
      u = fa(f);
      o = function (e) {
        var t = 1 - e;
        var r = [0, 1, 2].map(function (r) {
          return l.reduce(function (n, o, a) {
            return n + u[a] * Math.pow(t, f - a) * Math.pow(e, a) * o[r];
          }, 0);
        });
        return new la(r, "lab");
      };
    }
    return o;
  }
  function ha(e) {
    var t = da(e);
    t.scale = function () {
      return ua(t);
    };
    return t;
  }
  var pa = k;
  function ga(e, t, r) {
    if (!ga[r]) {
      throw new Error("unknown blend mode " + r);
    }
    return ga[r](e, t);
  }
  function ya(e) {
    return function (t, r) {
      var n = pa(r).rgb();
      var o = pa(t).rgb();
      return pa.rgb(e(n, o));
    };
  }
  function va(e) {
    return function (t, r) {
      var n = [];
      n[0] = e(t[0], r[0]);
      n[1] = e(t[1], r[1]);
      n[2] = e(t[2], r[2]);
      return n;
    };
  }
  function ba(e) {
    return e;
  }
  function ma(e, t) {
    return e * t / 255;
  }
  function wa(e, t) {
    if (e > t) {
      return t;
    } else {
      return e;
    }
  }
  function _a(e, t) {
    if (e > t) {
      return e;
    } else {
      return t;
    }
  }
  function ka(e, t) {
    return (1 - (1 - e / 255) * (1 - t / 255)) * 255;
  }
  function Aa(e, t) {
    if (t < 128) {
      return e * 2 * t / 255;
    } else {
      return (1 - (1 - e / 255) * 2 * (1 - t / 255)) * 255;
    }
  }
  function Ea(e, t) {
    return (1 - (1 - t / 255) / (e / 255)) * 255;
  }
  function Ca(e, t) {
    if (e === 255 || (e = t / 255 * 255 / (1 - e / 255)) > 255) {
      return 255;
    } else {
      return e;
    }
  }
  ga.normal = ya(va(ba));
  ga.multiply = ya(va(ma));
  ga.screen = ya(va(ka));
  ga.overlay = ya(va(Aa));
  ga.darken = ya(va(wa));
  ga.lighten = ya(va(_a));
  ga.dodge = ya(va(Ca));
  ga.burn = ya(va(Ea));
  var xa = ga;
  var Sa = h.type;
  var Oa = h.clip_rgb;
  var Ba = h.TWOPI;
  var ja = Math.pow;
  var Da = Math.sin;
  var Fa = Math.cos;
  var Pa = k;
  var Ma = function (e = 300, t = -1.5, r = 1, n = 1, o = [0, 1]) {
    var a;
    var i = 0;
    if (Sa(o) === "array") {
      a = o[1] - o[0];
    } else {
      a = 0;
      o = [o, o];
    }
    function c(c) {
      var s = Ba * ((e + 120) / 360 + t * c);
      var l = ja(o[0] + a * c, n);
      var u = (i !== 0 ? r[0] + c * i : r) * l * (1 - l) / 2;
      var f = Fa(s);
      var d = Da(s);
      return Pa(Oa([(l + u * (f * -0.14861 + d * 1.78277)) * 255, (l + u * (f * -0.29227 - d * 0.90649)) * 255, (l + u * (f * 1.97294)) * 255, 1]));
    }
    c.start = function (t) {
      if (t == null) {
        return e;
      } else {
        e = t;
        return c;
      }
    };
    c.rotations = function (e) {
      if (e == null) {
        return t;
      } else {
        t = e;
        return c;
      }
    };
    c.gamma = function (e) {
      if (e == null) {
        return n;
      } else {
        n = e;
        return c;
      }
    };
    c.hue = function (e) {
      if (e == null) {
        return r;
      } else {
        if (Sa(r = e) === "array") {
          if ((i = r[1] - r[0]) == 0) {
            r = r[1];
          }
        } else {
          i = 0;
        }
        return c;
      }
    };
    c.lightness = function (e) {
      if (e == null) {
        return o;
      } else {
        if (Sa(e) === "array") {
          o = e;
          a = e[1] - e[0];
        } else {
          o = [e, e];
          a = 0;
        }
        return c;
      }
    };
    c.scale = function () {
      return Pa.scale(c);
    };
    c.hue(r);
    return c;
  };
  var Ta = w;
  var Ia = "0123456789abcdef";
  var La = Math.floor;
  var Za = Math.random;
  var Ua = function () {
    var e = "#";
    for (var t = 0; t < 6; t++) {
      e += Ia.charAt(La(Za() * 16));
    }
    return new Ta(e, "hex");
  };
  var Ra = c;
  var za = Math.log;
  var Ha = Math.pow;
  var Na = Math.floor;
  var Wa = Math.abs;
  var $a = function (e, t = null) {
    var r = {
      min: Number.MAX_VALUE,
      max: Number.MAX_VALUE * -1,
      sum: 0,
      values: [],
      count: 0
    };
    if (Ra(e) === "object") {
      e = Object.values(e);
    }
    e.forEach(function (e) {
      if (t && Ra(e) === "object") {
        e = e[t];
      }
      if (e != null && !isNaN(e)) {
        r.values.push(e);
        r.sum += e;
        if (e < r.min) {
          r.min = e;
        }
        if (e > r.max) {
          r.max = e;
        }
        r.count += 1;
      }
    });
    r.domain = [r.min, r.max];
    r.limits = function (e, t) {
      return qa(r, e, t);
    };
    return r;
  };
  var qa = function (e, t = "equal", r = 7) {
    if (Ra(e) == "array") {
      e = $a(e);
    }
    var n = e.min;
    var o = e.max;
    var a = e.values.sort(function (e, t) {
      return e - t;
    });
    if (r === 1) {
      return [n, o];
    }
    var i = [];
    if (t.substr(0, 1) === "c") {
      i.push(n);
      i.push(o);
    }
    if (t.substr(0, 1) === "e") {
      i.push(n);
      for (var c = 1; c < r; c++) {
        i.push(n + c / r * (o - n));
      }
      i.push(o);
    } else if (t.substr(0, 1) === "l") {
      if (n <= 0) {
        throw new Error("Logarithmic scales are only possible for values > 0");
      }
      var s = Math.LOG10E * za(n);
      var l = Math.LOG10E * za(o);
      i.push(n);
      for (var u = 1; u < r; u++) {
        i.push(Ha(10, s + u / r * (l - s)));
      }
      i.push(o);
    } else if (t.substr(0, 1) === "q") {
      i.push(n);
      for (var f = 1; f < r; f++) {
        var d = (a.length - 1) * f / r;
        var h = Na(d);
        if (h === d) {
          i.push(a[h]);
        } else {
          var p = d - h;
          i.push(a[h] * (1 - p) + a[h + 1] * p);
        }
      }
      i.push(o);
    } else if (t.substr(0, 1) === "k") {
      var g;
      var y = a.length;
      var v = new Array(y);
      var b = new Array(r);
      var m = true;
      var w = 0;
      var _ = null;
      (_ = []).push(n);
      for (var k = 1; k < r; k++) {
        _.push(n + k / r * (o - n));
      }
      for (_.push(o); m;) {
        for (var A = 0; A < r; A++) {
          b[A] = 0;
        }
        for (var E = 0; E < y; E++) {
          var C = a[E];
          var x = Number.MAX_VALUE;
          var S = undefined;
          for (var O = 0; O < r; O++) {
            var B = Wa(_[O] - C);
            if (B < x) {
              x = B;
              S = O;
            }
            b[S]++;
            v[E] = S;
          }
        }
        var j = new Array(r);
        for (var D = 0; D < r; D++) {
          j[D] = null;
        }
        for (var F = 0; F < y; F++) {
          if (j[g = v[F]] === null) {
            j[g] = a[F];
          } else {
            j[g] += a[F];
          }
        }
        for (var P = 0; P < r; P++) {
          j[P] *= 1 / b[P];
        }
        m = false;
        for (var M = 0; M < r; M++) {
          if (j[M] !== _[M]) {
            m = true;
            break;
          }
        }
        _ = j;
        if (++w > 200) {
          m = false;
        }
      }
      var T = {};
      for (var I = 0; I < r; I++) {
        T[I] = [];
      }
      for (var L = 0; L < y; L++) {
        T[g = v[L]].push(a[L]);
      }
      var Z = [];
      for (var U = 0; U < r; U++) {
        Z.push(T[U][0]);
        Z.push(T[U][T[U].length - 1]);
      }
      Z = Z.sort(function (e, t) {
        return e - t;
      });
      i.push(Z[0]);
      for (var R = 1; R < Z.length; R += 2) {
        var z = Z[R];
        if (!isNaN(z) && i.indexOf(z) === -1) {
          i.push(z);
        }
      }
    }
    return i;
  };
  var Ya = {
    analyze: $a,
    limits: qa
  };
  var Qa = w;
  var Va = function (e, t) {
    e = new Qa(e);
    t = new Qa(t);
    var r = e.luminance();
    var n = t.luminance();
    if (r > n) {
      return (r + 0.05) / (n + 0.05);
    } else {
      return (n + 0.05) / (r + 0.05);
    }
  };
  var Ga = w;
  var Ka = Math.sqrt;
  var Ja = Math.pow;
  var Xa = Math.min;
  var ei = Math.max;
  var ti = Math.atan2;
  var ri = Math.abs;
  var ni = Math.cos;
  var oi = Math.sin;
  var ai = Math.exp;
  var ii = Math.PI;
  var ci = function (e, t, r = 1, n = 1, o = 1) {
    function a(e) {
      return e * 360 / (ii * 2);
    }
    function i(e) {
      return ii * 2 * e / 360;
    }
    e = new Ga(e);
    t = new Ga(t);
    var c = Array.from(e.lab());
    var s = c[0];
    var l = c[1];
    var u = c[2];
    var f = Array.from(t.lab());
    var d = f[0];
    var h = f[1];
    var p = f[2];
    var g = (s + d) / 2;
    var y = (Ka(Ja(l, 2) + Ja(u, 2)) + Ka(Ja(h, 2) + Ja(p, 2))) / 2;
    var v = (1 - Ka(Ja(y, 7) / (Ja(y, 7) + Ja(25, 7)))) * 0.5;
    var b = l * (1 + v);
    var m = h * (1 + v);
    var w = Ka(Ja(b, 2) + Ja(u, 2));
    var _ = Ka(Ja(m, 2) + Ja(p, 2));
    var k = (w + _) / 2;
    var A = a(ti(u, b));
    var E = a(ti(p, m));
    var C = A >= 0 ? A : A + 360;
    var x = E >= 0 ? E : E + 360;
    var S = ri(C - x) > 180 ? (C + x + 360) / 2 : (C + x) / 2;
    var O = 1 - ni(i(S - 30)) * 0.17 + ni(i(S * 2)) * 0.24 + ni(i(S * 3 + 6)) * 0.32 - ni(i(S * 4 - 63)) * 0.2;
    var B = x - C;
    B = ri(B) <= 180 ? B : x <= C ? B + 360 : B - 360;
    B = Ka(w * _) * 2 * oi(i(B) / 2);
    var j = d - s;
    var D = _ - w;
    var F = 1 + Ja(g - 50, 2) * 0.015 / Ka(20 + Ja(g - 50, 2));
    var P = 1 + k * 0.045;
    var M = 1 + k * 0.015 * O;
    var T = ai(-Ja((S - 275) / 25, 2)) * 30;
    var I = Ka(Ja(k, 7) / (Ja(k, 7) + Ja(25, 7))) * -2 * oi(i(T) * 2);
    var L = Ka(Ja(j / (r * F), 2) + Ja(D / (n * P), 2) + Ja(B / (o * M), 2) + I * (D / (n * P)) * (B / (o * M)));
    return ei(0, Xa(100, L));
  };
  var si = w;
  var li = function (e, t, r = "lab") {
    e = new si(e);
    t = new si(t);
    var n = e.get(r);
    var o = t.get(r);
    var a = 0;
    for (var i in n) {
      var c = (n[i] || 0) - (o[i] || 0);
      a += c * c;
    }
    return Math.sqrt(a);
  };
  var ui = w;
  var fi = function () {
    var e = [];
    for (var t = arguments.length; t--;) {
      e[t] = arguments[t];
    }
    try {
      new (Function.prototype.bind.apply(ui, [null].concat(e)))();
      return true;
    } catch (e) {
      return false;
    }
  };
  var di = k;
  var hi = ca;
  var pi = {
    cool: function () {
      return hi([di.hsl(180, 1, 0.9), di.hsl(250, 0.7, 0.4)]);
    },
    hot: function () {
      return hi(["#000", "#f00", "#ff0", "#fff"]).mode("rgb");
    }
  };
  var gi = {
    OrRd: ["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"],
    PuBu: ["#fff7fb", "#ece7f2", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#045a8d", "#023858"],
    BuPu: ["#f7fcfd", "#e0ecf4", "#bfd3e6", "#9ebcda", "#8c96c6", "#8c6bb1", "#88419d", "#810f7c", "#4d004b"],
    Oranges: ["#fff5eb", "#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#a63603", "#7f2704"],
    BuGn: ["#f7fcfd", "#e5f5f9", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#006d2c", "#00441b"],
    YlOrBr: ["#ffffe5", "#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"],
    YlGn: ["#ffffe5", "#f7fcb9", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443", "#006837", "#004529"],
    Reds: ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d"],
    RdPu: ["#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177", "#49006a"],
    Greens: ["#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#006d2c", "#00441b"],
    YlGnBu: ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494", "#081d58"],
    Purples: ["#fcfbfd", "#efedf5", "#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3", "#54278f", "#3f007d"],
    GnBu: ["#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#0868ac", "#084081"],
    Greys: ["#ffffff", "#f0f0f0", "#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525", "#000000"],
    YlOrRd: ["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026"],
    PuRd: ["#f7f4f9", "#e7e1ef", "#d4b9da", "#c994c7", "#df65b0", "#e7298a", "#ce1256", "#980043", "#67001f"],
    Blues: ["#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b"],
    PuBuGn: ["#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016c59", "#014636"],
    Viridis: ["#440154", "#482777", "#3f4a8a", "#31678e", "#26838f", "#1f9d8a", "#6cce5a", "#b6de2b", "#fee825"],
    Spectral: ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"],
    RdYlGn: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837"],
    RdBu: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#f7f7f7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac", "#053061"],
    PiYG: ["#8e0152", "#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#f7f7f7", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221", "#276419"],
    PRGn: ["#40004b", "#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837", "#00441b"],
    RdYlBu: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee090", "#ffffbf", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4", "#313695"],
    BrBG: ["#543005", "#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#f5f5f5", "#c7eae5", "#80cdc1", "#35978f", "#01665e", "#003c30"],
    RdGy: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#ffffff", "#e0e0e0", "#bababa", "#878787", "#4d4d4d", "#1a1a1a"],
    PuOr: ["#7f3b08", "#b35806", "#e08214", "#fdb863", "#fee0b6", "#f7f7f7", "#d8daeb", "#b2abd2", "#8073ac", "#542788", "#2d004b"],
    Set2: ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3"],
    Accent: ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f", "#bf5b17", "#666666"],
    Set1: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf", "#999999"],
    Set3: ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9", "#bc80bd", "#ccebc5", "#ffed6f"],
    Dark2: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666"],
    Paired: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99", "#b15928"],
    Pastel2: ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9", "#fff2ae", "#f1e2cc", "#cccccc"],
    Pastel1: ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc", "#e5d8bd", "#fddaec", "#f2f2f2"]
  };
  for (var yi = 0, vi = Object.keys(gi); yi < vi.length; yi += 1) {
    var bi = vi[yi];
    gi[bi.toLowerCase()] = gi[bi];
  }
  var mi = gi;
  var wi = k;
  wi.average = ra;
  wi.bezier = ha;
  wi.blend = xa;
  wi.cubehelix = Ma;
  wi.mix = wi.interpolate = po;
  wi.random = Ua;
  wi.scale = ca;
  wi.analyze = Ya.analyze;
  wi.contrast = Va;
  wi.deltaE = ci;
  wi.distance = li;
  wi.limits = Ya.limits;
  wi.valid = fi;
  wi.scales = pi;
  wi.colors = Ir;
  wi.brewer = mi;
  return wi;
}();