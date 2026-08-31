var e = 0;
var r = Math.random();
module.exports = function (t) {
  return "Symbol(" + String(t === undefined ? "" : t) + ")_" + (++e + r).toString(36);
};