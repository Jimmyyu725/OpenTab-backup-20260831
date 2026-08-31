var r = require("./386.js");
module.exports = function (t) {
  var e = this.__data__;
  var n = r(e, t);
  if (n < 0) {
    return undefined;
  } else {
    return e[n][1];
  }
};