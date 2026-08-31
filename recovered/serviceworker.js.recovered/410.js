var r = require("./77.js");
var o = Object.prototype.hasOwnProperty;
module.exports = function (t) {
  var e = this.__data__;
  if (r) {
    var n = e[t];
    if (n === "__lodash_hash_undefined__") {
      return undefined;
    } else {
      return n;
    }
  }
  if (o.call(e, t)) {
    return e[t];
  } else {
    return undefined;
  }
};