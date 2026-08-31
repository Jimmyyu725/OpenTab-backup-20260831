var r = require("./78.js");
module.exports = function (t, e) {
  var n = r(this, t);
  var o = n.size;
  n.set(t, e);
  this.size += n.size == o ? 0 : 1;
  return this;
};