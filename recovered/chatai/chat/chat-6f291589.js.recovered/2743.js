export const Z = function (e, t) {
  for (var n = -1, i = e == null ? 0 : e.length, s = Array(i); ++n < i;) {
    s[n] = t(e[n], n, e);
  }
  return s;
};