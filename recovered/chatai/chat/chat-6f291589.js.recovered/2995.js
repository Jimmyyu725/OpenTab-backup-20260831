var i = require("./7871.js");
var s = 0;
var r = Math.random();
var a = i(1 .toString);
module.exports = function (e) {
  return "Symbol(" + (e === undefined ? "" : e) + ")_" + a(++s + r, 36);
};