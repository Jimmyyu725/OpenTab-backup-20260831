module.exports = function (t, e) {
  var n = -1;
  var r = t.length;
  for (e ||= Array(r); ++n < r;) {
    e[n] = t[n];
  }
  return e;
};