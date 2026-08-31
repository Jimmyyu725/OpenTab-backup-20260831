var n = Object.prototype;
export const Z = function (e) {
  var t = e && e.constructor;
  return e === (typeof t == "function" && t.prototype || n);
};