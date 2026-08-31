var r = require("./32.js");
var o = require("./45.js");
var i = require("./81.js");
module.exports = function (t, e) {
  r(t);
  if (o(e) && e.constructor === t) {
    return e;
  }
  var n = i.f(t);
  (0, n.resolve)(e);
  return n.promise;
};