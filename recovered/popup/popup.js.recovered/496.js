var r = require("./385.js");
var i = require("./405.js");
var o = require("./501.js");
module.exports = function (t, e) {
  var n = this.__data__;
  if (n instanceof r) {
    var s = n.__data__;
    if (!i || s.length < 199) {
      s.push([t, e]);
      this.size = ++n.size;
      return this;
    }
    n = this.__data__ = new o(s);
  }
  n.set(t, e);
  this.size = n.size;
  return this;
};