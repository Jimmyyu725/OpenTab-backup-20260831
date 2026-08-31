var r = require("./33.js");
function o(t) {
  var e;
  var n;
  this.promise = new t(function (t, r) {
    if (e !== undefined || n !== undefined) {
      throw TypeError("Bad Promise constructor");
    }
    e = t;
    n = r;
  });
  this.resolve = r(e);
  this.reject = r(n);
}
module.exports.f = function (t) {
  return new o(t);
};