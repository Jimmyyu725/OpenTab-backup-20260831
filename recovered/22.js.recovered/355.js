module.exports = o;
var r = require("./245.js");
var i = Object.create(require("./108.js"));
function o(t) {
  if (!(this instanceof o)) {
    return new o(t);
  }
  r.call(this, t);
}
i.inherits = require("./91.js");
i.inherits(o, r);
o.prototype._transform = function (t, e, n) {
  n(null, t);
};