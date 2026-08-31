module.exports = function (t, e) {
  for (var n = -1, r = e.length, o = t.length; ++n < r;) {
    t[o + n] = e[n];
  }
  return t;
};