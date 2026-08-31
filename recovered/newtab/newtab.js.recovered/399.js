var r = require("./12.js");
var i = require("./83.js");
module.exports = function (t, e, n) {
  var o;
  var a;
  if (i && typeof (o = e.constructor) == "function" && o !== n && r(a = o.prototype) && a !== n.prototype) {
    i(t, a);
  }
  return t;
};