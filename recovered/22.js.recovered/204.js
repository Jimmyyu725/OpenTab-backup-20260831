var r = require("./32.js");
var i = require("./45.js");
var o = require("./81.js");
module.exports = function (t, e) {
  r(t);
  if (i(e) && e.constructor === t) {
    return e;
  }
  var n = o.f(t);
  (0, n.resolve)(e);
  return n.promise;
};