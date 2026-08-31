var e = require("./32.js");
var o = require("./45.js");
var i = require("./81.js");
module.exports = function (t, n) {
  e(t);
  if (o(n) && n.constructor === t) {
    return n;
  }
  var r = i.f(t);
  (0, r.resolve)(n);
  return r.promise;
};