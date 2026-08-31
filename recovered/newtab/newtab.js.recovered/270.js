var r = require("./29.js");
var i = require("./84.js");
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