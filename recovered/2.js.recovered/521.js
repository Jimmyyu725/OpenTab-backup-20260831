var r = /^(?:0|[1-9]\d*)$/;
module.exports = function (t, e) {
  var n = typeof t;
  return !!(e = e == null ? 9007199254740991 : e) && (n == "number" || n != "symbol" && r.test(t)) && t > -1 && t % 1 == 0 && t < e;
};