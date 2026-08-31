var r = require("./10.js");
var o = require("./12.js");
var i = require("./74.js");
module.exports = function (t, n) {
  r(t);
  if (o(n) && n.constructor === t) {
    return n;
  }
  var e = i.f(t);
  (0, e.resolve)(n);
  return e.promise;
};