var r = require("./10.js");
function o() {
  this.handlers = [];
}
o.prototype.use = function (t, e) {
  this.handlers.push({
    fulfilled: t,
    rejected: e
  });
  return this.handlers.length - 1;
};
o.prototype.eject = function (t) {
  this.handlers[t] &&= null;
};
o.prototype.forEach = function (t) {
  r.forEach(this.handlers, function (e) {
    if (e !== null) {
      t(e);
    }
  });
};
module.exports = o;