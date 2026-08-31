var r = require("./10.js");
var i = require("./12.js");
var o = require("./74.js");
module.exports = function (t, e) {
  r(t);
  if (i(e) && e.constructor === t) {
    return e;
  }
  var n = o.f(t);
  (0, n.resolve)(e);
  return n.promise;
};