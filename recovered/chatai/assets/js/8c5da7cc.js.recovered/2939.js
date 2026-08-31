export const Z = function (e, t) {
  for (var r = -1, n = t.length, o = e.length; ++r < n;) {
    e[o + r] = t[r];
  }
  return e;
};