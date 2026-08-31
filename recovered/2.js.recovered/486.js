var n = require("./385.js");
var o = require("./492.js");
var c = require("./493.js");
var i = require("./494.js");
var a = require("./495.js");
var u = require("./496.js");
function s(t) {
  var e = this.__data__ = new n(t);
  this.size = e.size;
}
s.prototype.clear = o;
s.prototype.delete = c;
s.prototype.get = i;
s.prototype.has = a;
s.prototype.set = u;
module.exports = s;