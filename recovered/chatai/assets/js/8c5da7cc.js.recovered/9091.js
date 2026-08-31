var n = require(/*webcrack:missing*/"./6080.js");
var o = require(/*webcrack:missing*/"./365.js");
const a = function (e) {
  return (0, o.Z)(e) && (0, n.Z)(e) == "[object Arguments]";
};
var i = Object.prototype;
var c = i.hasOwnProperty;
var s = i.propertyIsEnumerable;
export const Z = a(function () {
  return arguments;
}()) ? a : function (e) {
  return (0, o.Z)(e) && c.call(e, "callee") && !s.call(e, "callee");
};