var r = require("./504.js");
var i = require("./505.js");
var o = require("./506.js");
var s = require("./507.js");
var a = require("./508.js");
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