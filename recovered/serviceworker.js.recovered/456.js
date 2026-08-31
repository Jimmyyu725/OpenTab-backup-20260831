var r = require("./222.js");
var o = require("./457.js");
var i = require("./458.js");
function s(t) {
  var e = -1;
  var n = t == null ? 0 : t.length;
  for (this.__data__ = new r(); ++e < n;) {
    this.add(t[e]);
  }
}
s.prototype.add = s.prototype.push = o;
s.prototype.has = i;
module.exports = s;