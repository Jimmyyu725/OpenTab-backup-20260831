var n = require("./386.js");
var o = Array.prototype.splice;
module.exports = function (t) {
  var e = this.__data__;
  var r = n(e, t);
  return !(r < 0) && (r == e.length - 1 ? e.pop() : o.call(e, r, 1), --this.size, true);
};