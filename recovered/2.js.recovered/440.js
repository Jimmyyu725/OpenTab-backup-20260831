var r = Function.prototype.toString;
module.exports = function (t) {
  if (t != null) {
    try {
      return r.call(t);
    } catch (t) {}
    try {
      return t + "";
    } catch (t) {}
  }
  return "";
};