export const Z = function (e, t) {
  var r = -1;
  var n = e.length;
  for (t ||= Array(n); ++r < n;) {
    t[r] = e[r];
  }
  return t;
};