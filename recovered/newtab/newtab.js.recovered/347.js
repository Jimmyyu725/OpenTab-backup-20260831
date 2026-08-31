/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (t, e, n, r, i) {
  var o;
  var a;
  var s = i * 8 - r - 1;
  var c = (1 << s) - 1;
  var u = c >> 1;
  var l = -7;
  var f = n ? i - 1 : 0;
  var h = n ? -1 : 1;
  var p = t[e + f];
  f += h;
  o = p & (1 << -l) - 1;
  p >>= -l;
  l += s;
  for (; l > 0; l -= 8) {
    o = o * 256 + t[e + f];
    f += h;
  }
  a = o & (1 << -l) - 1;
  o >>= -l;
  l += r;
  for (; l > 0; l -= 8) {
    a = a * 256 + t[e + f];
    f += h;
  }
  if (o === 0) {
    o = 1 - u;
  } else {
    if (o === c) {
      if (a) {
        return NaN;
      } else {
        return (p ? -1 : 1) * Infinity;
      }
    }
    a += Math.pow(2, r);
    o -= u;
  }
  return (p ? -1 : 1) * a * Math.pow(2, o - r);
};
exports.write = function (t, e, n, r, i, o) {
  var a;
  var s;
  var c;
  var u = o * 8 - i - 1;
  var l = (1 << u) - 1;
  var f = l >> 1;
  var h = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  var p = r ? 0 : o - 1;
  var d = r ? 1 : -1;
  var m = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
  e = Math.abs(e);
  if (isNaN(e) || e === Infinity) {
    s = isNaN(e) ? 1 : 0;
    a = l;
  } else {
    a = Math.floor(Math.log(e) / Math.LN2);
    if (e * (c = Math.pow(2, -a)) < 1) {
      a--;
      c *= 2;
    }
    if ((e += a + f >= 1 ? h / c : h * Math.pow(2, 1 - f)) * c >= 2) {
      a++;
      c /= 2;
    }
    if (a + f >= l) {
      s = 0;
      a = l;
    } else if (a + f >= 1) {
      s = (e * c - 1) * Math.pow(2, i);
      a += f;
    } else {
      s = e * Math.pow(2, f - 1) * Math.pow(2, i);
      a = 0;
    }
  }
  for (; i >= 8; i -= 8) {
    t[n + p] = s & 255;
    p += d;
    s /= 256;
  }
  a = a << i | s;
  u += i;
  for (; u > 0; u -= 8) {
    t[n + p] = a & 255;
    p += d;
    a /= 256;
  }
  t[n + p - d] |= m * 128;
};