var n = require("./385.js");
var o = require("./405.js");
var c = require("./501.js");
module.exports = function (t, e) {
  var r = this.__data__;
  if (r instanceof n) {
    var i = r.__data__;
    if (!o || i.length < 199) {
      i.push([t, e]);
      this.size = ++r.size;
      return this;
    }
    r = this.__data__ = new c(i);
  }
  r.set(t, e);
  this.size = r.size;
  return this;
};