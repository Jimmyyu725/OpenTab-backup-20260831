module.exports = function (t) {
  var e = [];
  if (t != null) {
    for (var n in Object(t)) {
      e.push(n);
    }
  }
  return e;
};