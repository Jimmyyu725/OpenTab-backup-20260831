var n = require(/*webcrack:missing*/"./209.js");
var o = require("./411.js");
var c = require("./528.js");
var i = Object.prototype.hasOwnProperty;
module.exports = function (t) {
  if (!n(t)) {
    return c(t);
  }
  var e = o(t);
  var r = [];
  for (var a in t) {
    if (a != "constructor" || !e && i.call(t, a)) {
      r.push(a);
    }
  }
  return r;
};