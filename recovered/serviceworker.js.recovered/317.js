/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (t, e, n, r, o) {
  var i;
  var s;
  var a = o * 8 - r - 1;
  var c = (1 << a) - 1;
  var u = c >> 1;
  var f = -7;
  var l = n ? o - 1 : 0;
  var h = n ? -1 : 1;
  var p = t[e + l];
  l += h;
  i = p & (1 << -f) - 1;
  p >>= -f;
  f += a;
  for (; f > 0; f -= 8) {
    i = i * 256 + t[e + l];
    l += h;
  }
  s = i & (1 << -f) - 1;
  i >>= -f;
  f += r;
  for (; f > 0; f -= 8) {
    s = s * 256 + t[e + l];
    l += h;
  }
  if (i === 0) {
    i = 1 - u;
  } else {
    if (i === c) {
      if (s) {
        return NaN;
      } else {
        return (p ? -1 : 1) * Infinity;
      }
    }
    s += Math.pow(2, r);
    i -= u;
  }
  return (p ? -1 : 1) * s * Math.pow(2, i - r);
};
exports.write = function (t, e, n, r, o, i) {
  var s;
  var a;
  var c;
  var u = i * 8 - o - 1;
  var f = (1 << u) - 1;
  var l = f >> 1;
  var h = o === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  var p = r ? 0 : i - 1;
  var d = r ? 1 : -1;
  var y = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
  e = Math.abs(e);
  if (isNaN(e) || e === Infinity) {
    a = isNaN(e) ? 1 : 0;
    s = f;
  } else {
    s = Math.floor(Math.log(e) / Math.LN2);
    if (e * (c = Math.pow(2, -s)) < 1) {
      s--;
      c *= 2;
    }
    if ((e += s + l >= 1 ? h / c : h * Math.pow(2, 1 - l)) * c >= 2) {
      s++;
      c /= 2;
    }
    if (s + l >= f) {
      a = 0;
      s = f;
    } else if (s + l >= 1) {
      a = (e * c - 1) * Math.pow(2, o);
      s += l;
    } else {
      a = e * Math.pow(2, l - 1) * Math.pow(2, o);
      s = 0;
    }
  }
  for (; o >= 8; o -= 8) {
    t[n + p] = a & 255;
    p += d;
    a /= 256;
  }
  s = s << o | a;
  u += o;
  for (; u > 0; u -= 8) {
    t[n + p] = s & 255;
    p += d;
    s /= 256;
  }
  t[n + p - d] |= y * 128;
};