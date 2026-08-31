var r = require("./487.js");
var i = require("./488.js");
var o = require("./489.js");
var s = require("./490.js");
var a = require("./491.js");
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