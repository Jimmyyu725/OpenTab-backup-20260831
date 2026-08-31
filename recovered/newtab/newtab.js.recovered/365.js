var n = Math.floor;
function r(t, e) {
  var a = t.length;
  var s = n(a / 2);
  if (a < 8) {
    return i(t, e);
  } else {
    return o(r(t.slice(0, s), e), r(t.slice(s), e), e);
  }
}
function i(t, e) {
  var n;
  var r;
  for (var i = t.length, o = 1; o < i;) {
    r = o;
    n = t[o];
    while (r && e(t[r - 1], n) > 0) {
      t[r] = t[--r];
    }
    if (r !== o++) {
      t[r] = n;
    }
  }
  return t;
}
function o(t, e, n) {
  for (var r = t.length, i = e.length, o = 0, a = 0, s = []; o < r || a < i;) {
    if (o < r && a < i) {
      s.push(n(t[o], e[a]) <= 0 ? t[o++] : e[a++]);
    } else {
      s.push(o < r ? t[o++] : e[a++]);
    }
  }
  return s;
}
module.exports = r;