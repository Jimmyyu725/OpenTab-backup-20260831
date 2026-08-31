var r = require("./148.js");
var o = require("./84.js");
var i = require("./17.js")("toStringTag");
var s = o(function () {
  return arguments;
}()) == "Arguments";
module.exports = r ? o : function (t) {
  var e;
  var n;
  var r;
  if (t === undefined) {
    return "Undefined";
  } else if (t === null) {
    return "Null";
  } else if (typeof (n = function (t, e) {
    try {
      return t[e];
    } catch (t) {}
  }(e = Object(t), i)) == "string") {
    return n;
  } else if (s) {
    return o(e);
  } else if ((r = o(e)) == "Object" && typeof e.callee == "function") {
    return "Arguments";
  } else {
    return r;
  }
};