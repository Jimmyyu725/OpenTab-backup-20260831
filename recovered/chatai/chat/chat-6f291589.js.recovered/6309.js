var i = require("./2334.js");
var s = require("./3067.js");
var r = require("./4351.js");
var a = require("./7799.js");
var o = require("./2226.js")("toStringTag");
var u = i.Object;
var g = a(function () {
  return arguments;
}()) == "Arguments";
module.exports = s ? a : function (e) {
  var t;
  var n;
  var i;
  if (e === undefined) {
    return "Undefined";
  } else if (e === null) {
    return "Null";
  } else if (typeof (n = function (e, t) {
    try {
      return e[t];
    } catch (e) {}
  }(t = u(e), o)) == "string") {
    return n;
  } else if (g) {
    return a(t);
  } else if ((i = a(t)) == "Object" && r(t.callee)) {
    return "Arguments";
  } else {
    return i;
  }
};