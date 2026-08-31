var n = require("./388.js");
module.exports = function (t) {
  var e = n(this, t).delete(t);
  this.size -= e ? 1 : 0;
  return e;
};