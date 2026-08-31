module.exports = function (t, e, n) {
  var r = -1;
  var i = t.length;
  if (e < 0) {
    e = -e > i ? 0 : i + e;
  }
  if ((n = n > i ? i : n) < 0) {
    n += i;
  }
  i = e > n ? 0 : n - e >>> 0;
  e >>>= 0;
  var o = Array(i);
  while (++r < i) {
    o[r] = t[r + e];
  }
  return o;
};