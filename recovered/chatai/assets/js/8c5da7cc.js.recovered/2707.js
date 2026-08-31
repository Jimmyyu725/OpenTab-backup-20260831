const n = function (e, t, r) {
  switch (r.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, r[0]);
    case 2:
      return e.call(t, r[0], r[1]);
    case 3:
      return e.call(t, r[0], r[1], r[2]);
  }
  return e.apply(t, r);
};
var o = Math.max;
export const Z = function (e, t, r) {
  t = o(t === undefined ? e.length - 1 : t, 0);
  return function () {
    var a = arguments;
    for (var i = -1, c = o(a.length - t, 0), s = Array(c); ++i < c;) {
      s[i] = a[t + i];
    }
    i = -1;
    var l = Array(t + 1);
    for (; ++i < t;) {
      l[i] = a[i];
    }
    l[t] = r(s);
    return n(e, this, l);
  };
};