var r = require("./220.js");
var o = require("./403.js");
var i = require("./31.js");
var s = require("./221.js");
var a = /^\[object .+?Constructor\]$/;
var c = Function.prototype;
var u = Object.prototype;
var f = c.toString;
var l = u.hasOwnProperty;
var h = RegExp("^" + f.call(l).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
module.exports = function (t) {
  return !!i(t) && !o(t) && (r(t) ? h : a).test(s(t));
};