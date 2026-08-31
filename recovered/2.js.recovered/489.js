var n = require("./386.js");
module.exports = function (t) {
  var e = this.__data__;
  var r = n(e, t);
  if (r < 0) {
    return undefined;
  } else {
    return e[r][1];
  }
};