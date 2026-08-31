var r = require("./408.js");
var o = require("./409.js");
var i = require("./410.js");
var s = require("./411.js");
var a = require("./412.js");
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