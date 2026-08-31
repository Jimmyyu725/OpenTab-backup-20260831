var r = require("./519.js");
var i = require("./221.js");
var o = Object.prototype;
var s = o.hasOwnProperty;
var a = o.propertyIsEnumerable;
var c = r(function () {
  return arguments;
}()) ? r : function (t) {
  return i(t) && s.call(t, "callee") && !a.call(t, "callee");
};
module.exports = c;