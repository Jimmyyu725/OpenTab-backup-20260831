var r = require("./386.js");
var i = Array.prototype.splice;
module.exports = function (t) {
  var e = this.__data__;
  var n = r(e, t);
  return !(n < 0) && (n == e.length - 1 ? e.pop() : i.call(e, n, 1), --this.size, true);
};