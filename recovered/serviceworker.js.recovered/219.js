var r = require("./75.js");
var o = require("./397.js");
var i = require("./398.js");
var s = require("./399.js");
var a = require("./400.js");
var c = require("./401.js");
function u(t) {
  var e = this.__data__ = new r(t);
  this.size = e.size;
}
u.prototype.clear = o;
u.prototype.delete = i;
u.prototype.get = s;
u.prototype.has = a;
u.prototype.set = c;
module.exports = u;