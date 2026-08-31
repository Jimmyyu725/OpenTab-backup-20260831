/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (t, e, n, r, o) {
  var i;
  var s;
  var a = o * 8 - r - 1;
  var c = (1 << a) - 1;
  var u = c >> 1;
  var l = -7;
  var h = n ? o - 1 : 0;
  var p = n ? -1 : 1;
  var f = t[e + h];
  h += p;
  i = f & (1 << -l) - 1;
  f >>= -l;
  l += a;
  for (; l > 0; l -= 8) {
    i = i * 256 + t[e + h];
    h += p;
  }
  s = i & (1 << -l) - 1;
  i >>= -l;
  l += r;
  for (; l > 0; l -= 8) {
    s = s * 256 + t[e + h];
    h += p;
  }
  if (i === 0) {
    i = 1 - u;
  } else {
    if (i === c) {
      if (s) {
        return NaN;
      } else {
        return (f ? -1 : 1) * Infinity;
      }
    }
    s += Math.pow(2, r);
    i -= u;
  }
  return (f ? -1 : 1) * s * Math.pow(2, i - r);
};
exports.write = function (t, e, n, r, o, i) {
  var s;
  var a;
  var c;
  var u = i * 8 - o - 1;
  var l = (1 << u) - 1;
  var h = l >> 1;
  var p = o === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  var f = r ? 0 : i - 1;
  var d = r ? 1 : -1;
  var g = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
  e = Math.abs(e);
  if (isNaN(e) || e === Infinity) {
    a = isNaN(e) ? 1 : 0;
    s = l;
  } else {
    s = Math.floor(Math.log(e) / Math.LN2);
    if (e * (c = Math.pow(2, -s)) < 1) {
      s--;
      c *= 2;
    }
    if ((e += s + h >= 1 ? p / c : p * Math.pow(2, 1 - h)) * c >= 2) {
      s++;
      c /= 2;
    }
    if (s + h >= l) {
      a = 0;
      s = l;
    } else if (s + h >= 1) {
      a = (e * c - 1) * Math.pow(2, o);
      s += h;
    } else {
      a = e * Math.pow(2, h - 1) * Math.pow(2, o);
      s = 0;
    }
  }
  for (; o >= 8; o -= 8) {
    t[n + f] = a & 255;
    f += d;
    a /= 256;
  }
  s = s << o | a;
  u += o;
  for (; u > 0; u -= 8) {
    t[n + f] = s & 255;
    f += d;
    s /= 256;
  }
  t[n + f - d] |= g * 128;
};