var r = require("./209.js");
var i = require("./411.js");
var o = require("./528.js");
var s = Object.prototype.hasOwnProperty;
module.exports = function (t) {
  if (!r(t)) {
    return o(t);
  }
  var e = i(t);
  var n = [];
  for (var a in t) {
    if (a != "constructor" || !e && s.call(t, a)) {
      n.push(a);
    }
  }
  return n;
};