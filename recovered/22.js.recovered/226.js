module.exports = function (t, e) {
  return function () {
    for (var n = new Array(arguments.length), r = 0; r < n.length; r++) {
      n[r] = arguments[r];
    }
    return t.apply(e, n);
  };
};