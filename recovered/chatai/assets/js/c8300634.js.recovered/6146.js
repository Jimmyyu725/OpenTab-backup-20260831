export const Z = function (n, r, e, t) {
  for (var u = n.length, o = e + (t ? 1 : -1); t ? o-- : ++o < u;) {
    if (r(n[o], o, n)) {
      return o;
    }
  }
  return -1;
};