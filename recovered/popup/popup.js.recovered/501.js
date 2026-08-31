var r = require("./502.js");
var i = require("./509.js");
var o = require("./511.js");
var s = require("./512.js");
var a = require("./513.js");
function c(t) {
  var e = -1;
  var n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n;) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
c.prototype.clear = r;
c.prototype.delete = i;
c.prototype.get = o;
c.prototype.has = s;
c.prototype.set = a;
module.exports = c;