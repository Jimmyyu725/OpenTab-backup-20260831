var n = Math.floor;
function r(t, e) {
  var s = t.length;
  var a = n(s / 2);
  if (s < 8) {
    return o(t, e);
  } else {
    return i(r(t.slice(0, a), e), r(t.slice(a), e), e);
  }
}
function o(t, e) {
  var n;
  var r;
  for (var o = t.length, i = 1; i < o;) {
    r = i;
    n = t[i];
    while (r && e(t[r - 1], n) > 0) {
      t[r] = t[--r];
    }
    if (r !== i++) {
      t[r] = n;
    }
  }
  return t;
}
function i(t, e, n) {
  for (var r = t.length, o = e.length, i = 0, s = 0, a = []; i < r || s < o;) {
    if (i < r && s < o) {
      a.push(n(t[i], e[s]) <= 0 ? t[i++] : e[s++]);
    } else {
      a.push(i < r ? t[i++] : e[s++]);
    }
  }
  return a;
}
module.exports = r;