var n = require("./7132.js");
const o = function (e) {
  this.__data__.set(e, "__lodash_hash_undefined__");
  return this;
};
const a = function (e) {
  return this.__data__.has(e);
};
function i(e) {
  var t = -1;
  var r = e == null ? 0 : e.length;
  for (this.__data__ = new n.Z(); ++t < r;) {
    this.add(e[t]);
  }
}
i.prototype.add = i.prototype.push = o;
i.prototype.has = a;
export const Z = i;