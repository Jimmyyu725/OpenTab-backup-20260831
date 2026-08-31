module.exports = function (t) {
  var e = -1;
  var n = Array(t.size);
  t.forEach(function (t, r) {
    n[++e] = [r, t];
  });
  return n;
};