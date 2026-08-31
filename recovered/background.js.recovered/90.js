var r = require("./10.js");
var o = require("./12.js");
var i = require("./74.js");
module.exports = function (t, e) {
  r(t);
  if (o(e) && e.constructor === t) {
    return e;
  }
  var n = i.f(t);
  (0, n.resolve)(e);
  return n.promise;
};