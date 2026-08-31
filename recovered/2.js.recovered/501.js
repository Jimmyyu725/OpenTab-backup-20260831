var n = require("./502.js");
var o = require("./509.js");
var c = require("./511.js");
var i = require("./512.js");
var a = require("./513.js");
function u(t) {
  var e = -1;
  var r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r;) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
u.prototype.clear = n;
u.prototype.delete = o;
u.prototype.get = c;
u.prototype.has = i;
u.prototype.set = a;
module.exports = u;