module.exports = i;
var r = require("./200.js");
var o = Object.create(require("./52.js"));
function i(t) {
  if (!(this instanceof i)) {
    return new i(t);
  }
  r.call(this, t);
}
o.inherits = require("./46.js");
o.inherits(i, r);
i.prototype._transform = function (t, e, n) {
  n(null, t);
};