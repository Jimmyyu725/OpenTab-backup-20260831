var r = require("./15.js");
var o = require("./25.js");
var i = require("./170.js");
module.exports = function (t, e) {
  r(t);
  if (o(e) && e.constructor === t) {
    return e;
  }
  var n = i.f(t);
  (0, n.resolve)(e);
  return n.promise;
};