var n = require("./4287.js");
const o = function (e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== false;);
  return e;
};
var a = require("./1074.js");
var i = require("./4365.js");
const c = function (e, t, r, n) {
  var o = !r;
  r ||= {};
  for (var c = -1, s = t.length; ++c < s;) {
    var l = t[c];
    var u = n ? n(r[l], e[l], l, r, e) : undefined;
    if (u === undefined) {
      u = e[l];
    }
    if (o) {
      (0, i.Z)(r, l, u);
    } else {
      (0, a.Z)(r, l, u);
    }
  }
  return r;
};
var s = require("./4348.js");
const l = function (e, t) {
  return e && c(t, (0, s.Z)(t), e);
};
var u = require("./2198.js");
const f = function (e, t) {
  return e && c(t, (0, u.Z)(t), e);
};
var d = require(/*webcrack:missing*/"./6247.js");
var h = typeof exports == "object" && exports && !exports.nodeType && exports;
var p = h && typeof module == "object" && module && !module.nodeType && module;
var g = p && p.exports === h ? d.Z.Buffer : undefined;
var y = g ? g.allocUnsafe : undefined;
const v = function (e, t) {
  if (t) {
    return e.slice();
  }
  var r = e.length;
  var n = y ? y(r) : new e.constructor(r);
  e.copy(n);
  return n;
};
var b = require("./8039.js");
var m = require("./9455.js");
const w = function (e, t) {
  return c(e, (0, m.Z)(e), t);
};
var _ = require("./9806.js");
const k = function (e, t) {
  return c(e, (0, _.Z)(e), t);
};
var A = require("./6224.js");
var E = require("./1579.js");
var C = require("./1506.js");
var x = Object.prototype.hasOwnProperty;
const S = function (e) {
  var t = e.length;
  var r = new e.constructor(t);
  if (t && typeof e[0] == "string" && x.call(e, "index")) {
    r.index = e.index;
    r.input = e.input;
  }
  return r;
};
var O = require("./7771.js");
const B = function (e) {
  var t = new e.constructor(e.byteLength);
  new O.Z(t).set(new O.Z(e));
  return t;
};
const j = function (e, t) {
  var r = t ? B(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
};
var D = /\w*$/;
const F = function (e) {
  var t = new e.constructor(e.source, D.exec(e));
  t.lastIndex = e.lastIndex;
  return t;
};
var P = require(/*webcrack:missing*/"./6604.js");
var M = P.Z ? P.Z.prototype : undefined;
var T = M ? M.valueOf : undefined;
const I = function (e) {
  if (T) {
    return Object(T.call(e));
  } else {
    return {};
  }
};
const L = function (e, t) {
  var r = t ? B(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
};
const _Z = function (e, t, r) {
  var n = e.constructor;
  switch (t) {
    case "[object ArrayBuffer]":
      return B(e);
    case "[object Boolean]":
    case "[object Date]":
      return new n(+e);
    case "[object DataView]":
      return j(e, r);
    case "[object Float32Array]":
    case "[object Float64Array]":
    case "[object Int8Array]":
    case "[object Int16Array]":
    case "[object Int32Array]":
    case "[object Uint8Array]":
    case "[object Uint8ClampedArray]":
    case "[object Uint16Array]":
    case "[object Uint32Array]":
      return L(e, r);
    case "[object Map]":
    case "[object Set]":
      return new n();
    case "[object Number]":
    case "[object String]":
      return new n(e);
    case "[object RegExp]":
      return F(e);
    case "[object Symbol]":
      return I(e);
  }
};
var U = require(/*webcrack:missing*/"./9860.js");
var R = Object.create;
const z = function () {
  function e() {}
  return function (t) {
    if (!(0, U.Z)(t)) {
      return {};
    }
    if (R) {
      return R(t);
    }
    e.prototype = t;
    var r = new e();
    e.prototype = undefined;
    return r;
  };
}();
var H = require("./6408.js");
var N = require("./9114.js");
const W = function (e) {
  if (typeof e.constructor != "function" || (0, N.Z)(e)) {
    return {};
  } else {
    return z((0, H.Z)(e));
  }
};
var $ = require(/*webcrack:missing*/"./3829.js");
var q = require("./8637.js");
var Y = require(/*webcrack:missing*/"./365.js");
const Q = function (e) {
  return (0, Y.Z)(e) && (0, C.Z)(e) == "[object Map]";
};
var V = require("./4054.js");
var G = require("./876.js");
var K = G.Z && G.Z.isMap;
const J = K ? (0, V.Z)(K) : Q;
const X = function (e) {
  return (0, Y.Z)(e) && (0, C.Z)(e) == "[object Set]";
};
var ee = G.Z && G.Z.isSet;
const te = ee ? (0, V.Z)(ee) : X;
var re = "[object Arguments]";
var ne = "[object Function]";
var oe = "[object Object]";
var ae = {};
ae[re] = ae["[object Array]"] = ae["[object ArrayBuffer]"] = ae["[object DataView]"] = ae["[object Boolean]"] = ae["[object Date]"] = ae["[object Float32Array]"] = ae["[object Float64Array]"] = ae["[object Int8Array]"] = ae["[object Int16Array]"] = ae["[object Int32Array]"] = ae["[object Map]"] = ae["[object Number]"] = ae[oe] = ae["[object RegExp]"] = ae["[object Set]"] = ae["[object String]"] = ae["[object Symbol]"] = ae["[object Uint8Array]"] = ae["[object Uint8ClampedArray]"] = ae["[object Uint16Array]"] = ae["[object Uint32Array]"] = true;
ae["[object Error]"] = ae[ne] = ae["[object WeakMap]"] = false;
const ie = function e(t, r, i, c, d, h) {
  var p;
  var g = r & 1;
  var y = r & 2;
  var m = r & 4;
  if (i) {
    p = d ? i(t, c, d, h) : i(t);
  }
  if (p !== undefined) {
    return p;
  }
  if (!(0, U.Z)(t)) {
    return t;
  }
  var _ = (0, $.Z)(t);
  if (_) {
    p = S(t);
    if (!g) {
      return (0, b.Z)(t, p);
    }
  } else {
    var x = (0, C.Z)(t);
    var O = x == ne || x == "[object GeneratorFunction]";
    if ((0, q.Z)(t)) {
      return v(t, g);
    }
    if (x == oe || x == re || O && !d) {
      p = y || O ? {} : W(t);
      if (!g) {
        if (y) {
          return k(t, f(p, t));
        } else {
          return w(t, l(p, t));
        }
      }
    } else {
      if (!ae[x]) {
        if (d) {
          return t;
        } else {
          return {};
        }
      }
      p = _Z(t, x, g);
    }
  }
  h ||= new n.Z();
  var B = h.get(t);
  if (B) {
    return B;
  }
  h.set(t, p);
  if (te(t)) {
    t.forEach(function (n) {
      p.add(e(n, r, i, n, t, h));
    });
  } else if (J(t)) {
    t.forEach(function (n, o) {
      p.set(o, e(n, r, i, o, t, h));
    });
  }
  var j = m ? y ? E.Z : A.Z : y ? u.Z : s.Z;
  var D = _ ? undefined : j(t);
  o(D || t, function (n, o) {
    if (D) {
      n = t[o = n];
    }
    (0, a.Z)(p, o, e(n, r, i, o, t, h));
  });
  return p;
};
export const Z = function (e) {
  return ie(e, 5);
};