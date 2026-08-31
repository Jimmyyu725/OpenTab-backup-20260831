var r = require("./77.js");
module.exports = function (t, e) {
  var n = this.__data__;
  this.size += this.has(t) ? 0 : 1;
  n[t] = r && e === undefined ? "__lodash_hash_undefined__" : e;
  return this;
};