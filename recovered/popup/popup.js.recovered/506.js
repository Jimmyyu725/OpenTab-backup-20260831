var r = require("./387.js");
var i = Object.prototype.hasOwnProperty;
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
  if (i.call(e, t)) {
    return e[t];
  } else {
    return undefined;
  }
};