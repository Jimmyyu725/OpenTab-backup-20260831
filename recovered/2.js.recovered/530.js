module.exports = function (t, e) {
  var r = -1;
  var n = t.length;
  for (e ||= Array(n); ++r < n;) {
    e[r] = t[r];
  }
  return e;
};