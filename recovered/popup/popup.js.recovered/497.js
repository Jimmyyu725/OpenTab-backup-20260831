var r = require("./439.js");
var i = require("./498.js");
var o = require("./209.js");
var s = require("./440.js");
var a = /^\[object .+?Constructor\]$/;
var c = Function.prototype;
var u = Object.prototype;
var l = c.toString;
var h = u.hasOwnProperty;
var p = RegExp("^" + l.call(h).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
module.exports = function (t) {
  return !!o(t) && !i(t) && (r(t) ? p : a).test(s(t));
};