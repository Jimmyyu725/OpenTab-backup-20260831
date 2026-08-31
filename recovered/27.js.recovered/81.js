var e = require("./52.js");
function o(t) {
  var n;
  var r;
  this.promise = new t(function (t, e) {
    if (n !== undefined || r !== undefined) {
      throw TypeError("Bad Promise constructor");
    }
    n = t;
    r = e;
  });
  this.resolve = e(n);
  this.reject = e(r);
}
module.exports.f = function (t) {
  return new o(t);
};