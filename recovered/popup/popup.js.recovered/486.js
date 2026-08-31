var r = require("./385.js");
var i = require("./492.js");
var o = require("./493.js");
var s = require("./494.js");
var a = require("./495.js");
var c = require("./496.js");
function u(t) {
  var e = this.__data__ = new r(t);
  this.size = e.size;
}
u.prototype.clear = i;
u.prototype.delete = o;
u.prototype.get = s;
u.prototype.has = a;
u.prototype.set = c;
module.exports = u;