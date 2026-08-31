var n = Function.prototype.toString;
export const Z = function (e) {
  if (e != null) {
    try {
      return n.call(e);
    } catch (e) {}
    try {
      return e + "";
    } catch (e) {}
  }
  return "";
};