module.exports = function (t) {
  if (t == null) {
    throw TypeError("Can't call method on " + t);
  }
  return t;
};