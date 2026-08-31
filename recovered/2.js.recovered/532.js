module.exports = function (t, e) {
  for (var r = -1, n = t == null ? 0 : t.length, o = 0, c = []; ++r < n;) {
    var i = t[r];
    if (e(i, r, t)) {
      c[o++] = i;
    }
  }
  return c;
};