module.exports = i;
var r = require("./245.js");
var o = Object.create(require("./108.js"));
function i(t) {
  if (!(this instanceof i)) {
    return new i(t);
  }
  r.call(this, t);
}
o.inherits = require("./91.js");
o.inherits(i, r);
i.prototype._transform = function (t, e, n) {
  n(null, t);
};