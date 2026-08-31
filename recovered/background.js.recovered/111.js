var r = require("./9.js");
var o = require("./33.js");
var i = "".split;
module.exports = r(function () {
  return !Object("z").propertyIsEnumerable(0);
}) ? function (t) {
  if (o(t) == "String") {
    return i.call(t, "");
  } else {
    return Object(t);
  }
} : Object;