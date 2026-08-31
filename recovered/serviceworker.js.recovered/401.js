var r = require("./75.js");
var o = require("./143.js");
var i = require("./222.js");
module.exports = function (t, e) {
  var n = this.__data__;
  if (n instanceof r) {
    var s = n.__data__;
    if (!o || s.length < 199) {
      s.push([t, e]);
      this.size = ++n.size;
      return this;
    }
    n = this.__data__ = new i(s);
  }
  n.set(t, e);
  this.size = n.size;
  return this;
};