var r = require("./388.js");
module.exports = function (t, e) {
  var n = r(this, t);
  var i = n.size;
  n.set(t, e);
  this.size += n.size == i ? 0 : 1;
  return this;
};