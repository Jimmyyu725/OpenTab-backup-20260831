var n = require("./387.js");
var o = Object.prototype.hasOwnProperty;
module.exports = function (t) {
  var e = this.__data__;
  if (n) {
    return e[t] !== undefined;
  } else {
    return o.call(e, t);
  }
};