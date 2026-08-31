var r = require("./77.js");
var o = Object.prototype.hasOwnProperty;
module.exports = function (t) {
  var e = this.__data__;
  if (r) {
    return e[t] !== undefined;
  } else {
    return o.call(e, t);
  }
};