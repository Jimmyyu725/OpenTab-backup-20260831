var n = /^(?:0|[1-9]\d*)$/;
module.exports = function (t, e) {
  var r = typeof t;
  return !!(e = e == null ? 9007199254740991 : e) && (r == "number" || r != "symbol" && n.test(t)) && t > -1 && t % 1 == 0 && t < e;
};