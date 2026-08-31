var n = /^(?:0|[1-9]\d*)$/;
export const Z = function (e, t) {
  var r = typeof e;
  return !!(t = t == null ? 9007199254740991 : t) && (r == "number" || r != "symbol" && n.test(e)) && e > -1 && e % 1 == 0 && e < t;
};