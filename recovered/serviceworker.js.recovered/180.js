var n = 0;
var r = Math.random();
module.exports = function (t) {
  return "Symbol(" + String(t === undefined ? "" : t) + ")_" + (++n + r).toString(36);
};