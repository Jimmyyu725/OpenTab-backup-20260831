var n = require("./388.js");
module.exports = function (t, e) {
  var r = n(this, t);
  var o = r.size;
  r.set(t, e);
  this.size += r.size == o ? 0 : 1;
  return this;
};