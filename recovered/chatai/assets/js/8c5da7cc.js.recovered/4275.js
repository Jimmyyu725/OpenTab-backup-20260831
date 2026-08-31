var n = require("./4287.js");
var o = require("./7990.js");
const a = function (e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n;) {
    if (t(e[r], r, e)) {
      return true;
    }
  }
  return false;
};
var i = require("./8658.js");
const c = function (e, t, r, n, c, s) {
  var l = r & 1;
  var u = e.length;
  var f = t.length;
  if (u != f && (!l || !(f > u))) {
    return false;
  }
  var d = s.get(e);
  var h = s.get(t);
  if (d && h) {
    return d == t && h == e;
  }
  var p = -1;
  var g = true;
  var y = r & 2 ? new o.Z() : undefined;
  s.set(e, t);
  s.set(t, e);
  while (++p < u) {
    var v = e[p];
    var b = t[p];
    if (n) {
      var m = l ? n(b, v, p, t, e, s) : n(v, b, p, e, t, s);
    }
    if (m !== undefined) {
      if (m) {
        continue;
      }
      g = false;
      break;
    }
    if (y) {
      if (!a(t, function (e, t) {
        if (!(0, i.Z)(y, t) && (v === e || c(v, e, r, n, s))) {
          return y.push(t);
        }
      })) {
        g = false;
        break;
      }
    } else if (v !== b && !c(v, b, r, n, s)) {
      g = false;
      break;
    }
  }
  s.delete(e);
  s.delete(t);
  return g;
};
var s = require(/*webcrack:missing*/"./6604.js");
var l = require("./7771.js");
var u = require("./7422.js");
const f = function (e) {
  var t = -1;
  var r = Array(e.size);
  e.forEach(function (e, n) {
    r[++t] = [n, e];
  });
  return r;
};
var d = require("./1291.js");
var h = s.Z ? s.Z.prototype : undefined;
var p = h ? h.valueOf : undefined;
const g = function (e, t, r, n, o, a, i) {
  switch (r) {
    case "[object DataView]":
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) {
        return false;
      }
      e = e.buffer;
      t = t.buffer;
    case "[object ArrayBuffer]":
      return e.byteLength == t.byteLength && !!a(new l.Z(e), new l.Z(t));
    case "[object Boolean]":
    case "[object Date]":
    case "[object Number]":
      return (0, u.Z)(+e, +t);
    case "[object Error]":
      return e.name == t.name && e.message == t.message;
    case "[object RegExp]":
    case "[object String]":
      return e == t + "";
    case "[object Map]":
      var s = f;
    case "[object Set]":
      var h = n & 1;
      s ||= d.Z;
      if (e.size != t.size && !h) {
        return false;
      }
      var g = i.get(e);
      if (g) {
        return g == t;
      }
      n |= 2;
      i.set(e, t);
      var y = c(s(e), s(t), n, o, a, i);
      i.delete(e);
      return y;
    case "[object Symbol]":
      if (p) {
        return p.call(e) == p.call(t);
      }
  }
  return false;
};
var y = require("./6224.js");
var v = Object.prototype.hasOwnProperty;
const b = function (e, t, r, n, o, a) {
  var i = r & 1;
  var c = (0, y.Z)(e);
  var s = c.length;
  if (s != (0, y.Z)(t).length && !i) {
    return false;
  }
  for (var l = s; l--;) {
    var u = c[l];
    if (!(i ? u in t : v.call(t, u))) {
      return false;
    }
  }
  var f = a.get(e);
  var d = a.get(t);
  if (f && d) {
    return f == t && d == e;
  }
  var h = true;
  a.set(e, t);
  a.set(t, e);
  var p = i;
  for (; ++l < s;) {
    var g = e[u = c[l]];
    var b = t[u];
    if (n) {
      var m = i ? n(b, g, u, t, e, a) : n(g, b, u, e, t, a);
    }
    if (!(m === undefined ? g === b || o(g, b, r, n, a) : m)) {
      h = false;
      break;
    }
    p ||= u == "constructor";
  }
  if (h && !p) {
    var w = e.constructor;
    var _ = t.constructor;
    if (w != _ && !!("constructor" in e) && !!("constructor" in t) && (typeof w != "function" || !(w instanceof w) || typeof _ != "function" || !(_ instanceof _))) {
      h = false;
    }
  }
  a.delete(e);
  a.delete(t);
  return h;
};
var m = require("./1506.js");
var w = require(/*webcrack:missing*/"./3829.js");
var _ = require("./8637.js");
var k = require("./2787.js");
var A = "[object Arguments]";
var E = "[object Array]";
var C = "[object Object]";
var x = Object.prototype.hasOwnProperty;
const S = function (e, t, r, o, a, i) {
  var s = (0, w.Z)(e);
  var l = (0, w.Z)(t);
  var u = s ? E : (0, m.Z)(e);
  var f = l ? E : (0, m.Z)(t);
  var d = (u = u == A ? C : u) == C;
  var h = (f = f == A ? C : f) == C;
  var p = u == f;
  if (p && (0, _.Z)(e)) {
    if (!(0, _.Z)(t)) {
      return false;
    }
    s = true;
    d = false;
  }
  if (p && !d) {
    i ||= new n.Z();
    if (s || (0, k.Z)(e)) {
      return c(e, t, r, o, a, i);
    } else {
      return g(e, t, u, r, o, a, i);
    }
  }
  if (!(r & 1)) {
    var y = d && x.call(e, "__wrapped__");
    var v = h && x.call(t, "__wrapped__");
    if (y || v) {
      var S = y ? e.value() : e;
      var O = v ? t.value() : t;
      i ||= new n.Z();
      return a(S, O, r, o, i);
    }
  }
  return !!p && (i ||= new n.Z(), b(e, t, r, o, a, i));
};
var O = require(/*webcrack:missing*/"./365.js");
const B = function e(t, r, n, o, a) {
  return t === r || (t == null || r == null || !(0, O.Z)(t) && !(0, O.Z)(r) ? t != t && r != r : S(t, r, n, o, e, a));
};
const j = function (e, t, r, o) {
  var a = r.length;
  var i = a;
  var c = !o;
  if (e == null) {
    return !i;
  }
  for (e = Object(e); a--;) {
    var s = r[a];
    if (c && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) {
      return false;
    }
  }
  while (++a < i) {
    var l = (s = r[a])[0];
    var u = e[l];
    var f = s[1];
    if (c && s[2]) {
      if (u === undefined && !(l in e)) {
        return false;
      }
    } else {
      var d = new n.Z();
      if (o) {
        var h = o(u, f, l, e, t, d);
      }
      if (!(h === undefined ? B(f, u, 3, o, d) : h)) {
        return false;
      }
    }
  }
  return true;
};
var D = require(/*webcrack:missing*/"./9860.js");
const F = function (e) {
  return e == e && !(0, D.Z)(e);
};
var P = require("./4348.js");
const M = function (e) {
  var t = (0, P.Z)(e);
  for (var r = t.length; r--;) {
    var n = t[r];
    var o = e[n];
    t[r] = [n, o, F(o)];
  }
  return t;
};
const T = function (e, t) {
  return function (r) {
    return r != null && r[e] === t && (t !== undefined || e in Object(r));
  };
};
const I = function (e) {
  var t = M(e);
  if (t.length == 1 && t[0][2]) {
    return T(t[0][0], t[0][1]);
  } else {
    return function (r) {
      return r === e || j(r, e, t);
    };
  }
};
var L = require("./3682.js");
const _Z = function (e, t, r) {
  var n = e == null ? undefined : (0, L.Z)(e, t);
  if (n === undefined) {
    return r;
  } else {
    return n;
  }
};
var U = require("./5031.js");
var R = require("./7796.js");
var z = require("./6147.js");
const H = function (e, t) {
  if ((0, R.Z)(e) && F(t)) {
    return T((0, z.Z)(e), t);
  } else {
    return function (r) {
      var n = _Z(r, e);
      if (n === undefined && n === t) {
        return (0, U.Z)(r, e);
      } else {
        return B(t, n, 3);
      }
    };
  }
};
var N = require("./4084.js");
const W = function (e) {
  return function (t) {
    if (t == null) {
      return undefined;
    } else {
      return t[e];
    }
  };
};
const $ = function (e) {
  return function (t) {
    return (0, L.Z)(t, e);
  };
};
const q = function (e) {
  if ((0, R.Z)(e)) {
    return W((0, z.Z)(e));
  } else {
    return $(e);
  }
};
export const Z = function (e) {
  if (typeof e == "function") {
    return e;
  } else if (e == null) {
    return N.Z;
  } else if (typeof e == "object") {
    if ((0, w.Z)(e)) {
      return H(e[0], e[1]);
    } else {
      return I(e);
    }
  } else {
    return q(e);
  }
};