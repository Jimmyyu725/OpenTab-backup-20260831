var r = 0;
var e = Math.random();
module.exports = function (t) {
  return "Symbol(" + String(t === undefined ? "" : t) + ")_" + (++r + e).toString(36);
};