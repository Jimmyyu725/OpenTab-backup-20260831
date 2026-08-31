var r = require("./387.js");
var i = Object.prototype.hasOwnProperty;
module.exports = function (t) {
  var e = this.__data__;
  if (r) {
    return e[t] !== undefined;
  } else {
    return i.call(e, t);
  }
};