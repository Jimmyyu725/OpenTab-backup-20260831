var r = require("./9.js");
var i = require("./33.js");
var o = "".split;
module.exports = r(function () {
  return !Object("z").propertyIsEnumerable(0);
}) ? function (t) {
  if (i(t) == "String") {
    return o.call(t, "");
  } else {
    return Object(t);
  }
} : Object;