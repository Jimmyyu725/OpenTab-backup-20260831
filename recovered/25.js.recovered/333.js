module.exports = function (t) {
  return function (e) {
    return t.apply(null, e);
  };
};