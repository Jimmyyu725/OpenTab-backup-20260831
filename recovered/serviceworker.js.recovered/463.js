module.exports = function (t) {
  var e = -1;
  var n = Array(t.size);
  t.forEach(function (t) {
    n[++e] = t;
  });
  return n;
};