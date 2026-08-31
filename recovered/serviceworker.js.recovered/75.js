var r = require("./392.js");
var o = require("./393.js");
var i = require("./394.js");
var s = require("./395.js");
var a = require("./396.js");
function c(t) {
  var e = -1;
  var n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n;) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
c.prototype.clear = r;
c.prototype.delete = o;
c.prototype.get = i;
c.prototype.has = s;
c.prototype.set = a;
module.exports = c;