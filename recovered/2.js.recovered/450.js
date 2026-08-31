module.exports = function (t, e) {
  for (var r = -1, n = e.length, o = t.length; ++r < n;) {
    t[o + r] = e[r];
  }
  return t;
};