var n = require("./387.js");
var o = Object.prototype.hasOwnProperty;
module.exports = function (t) {
  var e = this.__data__;
  if (n) {
    var r = e[t];
    if (r === "__lodash_hash_undefined__") {
      return undefined;
    } else {
      return r;
    }
  }
  if (o.call(e, t)) {
    return e[t];
  } else {
    return undefined;
  }
};