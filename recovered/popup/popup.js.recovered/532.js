module.exports = function (t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, i = 0, o = []; ++n < r;) {
    var s = t[n];
    if (e(s, n, t)) {
      o[i++] = s;
    }
  }
  return o;
};