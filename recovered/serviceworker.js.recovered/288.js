var r = require("./18.js");
var o = require("./50.js");
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