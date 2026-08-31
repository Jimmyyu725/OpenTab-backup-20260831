function r(t) {
  this.message = t;
}
r.prototype.toString = function () {
  return "Cancel" + (this.message ? ": " + this.message : "");
};
r.prototype.__CANCEL__ = true;
module.exports = r;