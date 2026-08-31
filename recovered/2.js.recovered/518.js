var n = require("./519.js");
var o = require(/*webcrack:missing*/"./221.js");
var c = Object.prototype;
var i = c.hasOwnProperty;
var a = c.propertyIsEnumerable;
var u = n(function () {
  return arguments;
}()) ? n : function (t) {
  return o(t) && i.call(t, "callee") && !a.call(t, "callee");
};
module.exports = u;