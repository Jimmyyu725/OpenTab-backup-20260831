var r = require("./31.js");
function o() {
  this.handlers = [];
}
o.prototype.use = function (e, t) {
  this.handlers.push({
    fulfilled: e,
    rejected: t
  });
  return this.handlers.length - 1;
};
o.prototype.eject = function (e) {
  this.handlers[e] &&= null;
};
o.prototype.forEach = function (e) {
  r.forEach(this.handlers, function (t) {
    if (t !== null) {
      e(t);
    }
  });
};
module.exports = o;