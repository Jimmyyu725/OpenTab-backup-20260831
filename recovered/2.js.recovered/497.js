var n = require("./439.js");
var o = require("./498.js");
var c = require(/*webcrack:missing*/"./209.js");
var i = require("./440.js");
var a = /^\[object .+?Constructor\]$/;
var u = Function.prototype;
var s = Object.prototype;
var f = u.toString;
var p = s.hasOwnProperty;
var l = RegExp("^" + f.call(p).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
module.exports = function (t) {
  return !!c(t) && !o(t) && (n(t) ? l : a).test(i(t));
};