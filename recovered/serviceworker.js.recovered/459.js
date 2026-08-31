module.exports = function (t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r;) {
    if (e(t[n], n, t)) {
      return true;
    }
  }
  return false;
};