var e = require("./29.js");
var o = require("./84.js");
var i = "".split;
module.exports = e(function () {
  return !Object("z").propertyIsEnumerable(0);
}) ? function (t) {
  if (o(t) == "String") {
    return i.call(t, "");
  } else {
    return Object(t);
  }
} : Object;