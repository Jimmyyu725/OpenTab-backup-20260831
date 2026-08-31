var r = require("./423.js");
var o = require("./35.js");
var i = Object.prototype;
var s = i.hasOwnProperty;
var a = i.propertyIsEnumerable;
var c = r(function () {
  return arguments;
}()) ? r : function (t) {
  return o(t) && s.call(t, "callee") && !a.call(t, "callee");
};
module.exports = c;