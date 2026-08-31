var n = Math.floor;
function r(t, e) {
  var s = t.length;
  var a = n(s / 2);
  if (s < 8) {
    return i(t, e);
  } else {
    return o(r(t.slice(0, a), e), r(t.slice(a), e), e);
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
  for (var r = t.length, i = e.length, o = 0, s = 0, a = []; o < r || s < i;) {
    if (o < r && s < i) {
      a.push(n(t[o], e[s]) <= 0 ? t[o++] : e[s++]);
    } else {
      a.push(o < r ? t[o++] : e[s++]);
    }
  }
  return a;
}
module.exports = r;