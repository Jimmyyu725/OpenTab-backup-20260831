var r = require("./32.js");
var o = require("./45.js");
var i = require("./81.js");
module.exports = function (t, n) {
  r(t);
  if (o(n) && n.constructor === t) {
    return n;
  }
  var e = i.f(t);
  (0, e.resolve)(n);
  return e.promise;
};