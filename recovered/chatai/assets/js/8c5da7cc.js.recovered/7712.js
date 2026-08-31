export const Z = function (e) {
  for (var t = -1, r = e == null ? 0 : e.length, n = 0, o = []; ++t < r;) {
    var a = e[t];
    if (a) {
      o[n++] = a;
    }
  }
  return o;
};