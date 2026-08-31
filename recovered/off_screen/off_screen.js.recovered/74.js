var r = require("./27.js");
function o(t) {
  var n;
  var e;
  this.promise = new t(function (t, r) {
    if (n !== undefined || e !== undefined) {
      throw TypeError("Bad Promise constructor");
    }
    n = t;
    e = r;
  });
  this.resolve = r(n);
  this.reject = r(e);
}
module.exports.f = function (t) {
  return new o(t);
};