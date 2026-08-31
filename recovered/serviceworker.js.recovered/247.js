var r = require("./8.js");
var o = require("./55.js");
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