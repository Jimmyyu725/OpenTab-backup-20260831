var r = require("./31.js");
function i() {
  this.handlers = [];
}
i.prototype.use = function (t, e) {
  this.handlers.push({
    fulfilled: t,
    rejected: e
  });
  return this.handlers.length - 1;
};
i.prototype.eject = function (t) {
  this.handlers[t] &&= null;
};
i.prototype.forEach = function (t) {
  r.forEach(this.handlers, function (e) {
    if (e !== null) {
      t(e);
    }
  });
};
module.exports = i;