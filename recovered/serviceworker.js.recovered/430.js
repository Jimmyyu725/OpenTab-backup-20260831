var r = require("./31.js");
var o = require("./149.js");
var i = require("./431.js");
var s = Object.prototype.hasOwnProperty;
module.exports = function (t) {
  if (!r(t)) {
    return i(t);
  }
  var e = o(t);
  var n = [];
  for (var a in t) {
    if (a != "constructor" || !e && s.call(t, a)) {
      n.push(a);
    }
  }
  return n;
};