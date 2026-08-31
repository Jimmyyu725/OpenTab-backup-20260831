var t = require(/*webcrack:missing*/"./7990.js");
var u = require("./8424.js");
const o = function (n, r) {
  return !!(n == null ? 0 : n.length) && (0, u.Z)(n, r, 0) > -1;
};
const i = function (n, r, e) {
  for (var t = -1, u = n == null ? 0 : n.length; ++t < u;) {
    if (e(r, n[t])) {
      return true;
    }
  }
  return false;
};
var c = require(/*webcrack:missing*/"./8658.js");
var f = require(/*webcrack:missing*/"./7408.js");
const a = function () {};
var l = require(/*webcrack:missing*/"./1291.js");
const s = f.Z && 1 / (0, l.Z)(new f.Z([, -0]))[1] == Infinity ? function (n) {
  return new f.Z(n);
} : a;
const v = function (n, r, e) {
  var u = -1;
  var f = o;
  var a = n.length;
  var v = true;
  var d = [];
  var b = d;
  if (e) {
    v = false;
    f = i;
  } else if (a >= 200) {
    var h = r ? null : s(n);
    if (h) {
      return (0, l.Z)(h);
    }
    v = false;
    f = c.Z;
    b = new t.Z();
  } else {
    b = r ? [] : d;
  }
  n: while (++u < a) {
    var p = n[u];
    var m = r ? r(p) : p;
    p = e || p !== 0 ? p : 0;
    if (v && m == m) {
      for (var y = b.length; y--;) {
        if (b[y] === m) {
          continue n;
        }
      }
      if (r) {
        b.push(m);
      }
      d.push(p);
    } else if (!f(b, m, e)) {
      if (b !== d) {
        b.push(m);
      }
      d.push(p);
    }
  }
  return d;
};
export const Z = function (n) {
  if (n && n.length) {
    return v(n);
  } else {
    return [];
  }
};