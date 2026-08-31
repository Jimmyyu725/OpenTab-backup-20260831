var n = Function.prototype.toString;
module.exports = function (t) {
  if (t != null) {
    try {
      return n.call(t);
    } catch (t) {}
    try {
      return t + "";
    } catch (t) {}
  }
  return "";
};