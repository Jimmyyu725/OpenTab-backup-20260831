/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (t, e, n, r, i) {
  var o;
  var s;
  var a = i * 8 - r - 1;
  var c = (1 << a) - 1;
  var u = c >> 1;
  var l = -7;
  var h = n ? i - 1 : 0;
  var p = n ? -1 : 1;
  var d = t[e + h];
  h += p;
  o = d & (1 << -l) - 1;
  d >>= -l;
  l += a;
  for (; l > 0; l -= 8) {
    o = o * 256 + t[e + h];
    h += p;
  }
  s = o & (1 << -l) - 1;
  o >>= -l;
  l += r;
  for (; l > 0; l -= 8) {
    s = s * 256 + t[e + h];
    h += p;
  }
  if (o === 0) {
    o = 1 - u;
  } else {
    if (o === c) {
      if (s) {
        return NaN;
      } else {
        return (d ? -1 : 1) * Infinity;
      }
    }
    s += Math.pow(2, r);
    o -= u;
  }
  return (d ? -1 : 1) * s * Math.pow(2, o - r);
};
exports.write = function (t, e, n, r, i, o) {
  var s;
  var a;
  var c;
  var u = o * 8 - i - 1;
  var l = (1 << u) - 1;
  var h = l >> 1;
  var p = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  var d = r ? 0 : o - 1;
  var f = r ? 1 : -1;
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
      a = (e * c - 1) * Math.pow(2, i);
      s += h;
    } else {
      a = e * Math.pow(2, h - 1) * Math.pow(2, i);
      s = 0;
    }
  }
  for (; i >= 8; i -= 8) {
    t[n + d] = a & 255;
    d += f;
    a /= 256;
  }
  s = s << i | a;
  u += i;
  for (; u > 0; u -= 8) {
    t[n + d] = s & 255;
    d += f;
    s /= 256;
  }
  t[n + d - f] |= g * 128;
};