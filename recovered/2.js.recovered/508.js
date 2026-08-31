var n = require("./387.js");
module.exports = function (t, e) {
  var r = this.__data__;
  this.size += this.has(t) ? 0 : 1;
  r[t] = n && e === undefined ? "__lodash_hash_undefined__" : e;
  return this;
};