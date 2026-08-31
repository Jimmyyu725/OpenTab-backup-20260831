var r = require("./148.js");
var i = require("./84.js");
var o = require("./17.js")("toStringTag");
var s = i(function () {
  return arguments;
}()) == "Arguments";
module.exports = r ? i : function (t) {
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
  }(e = Object(t), o)) == "string") {
    return n;
  } else if (s) {
    return i(e);
  } else if ((r = i(e)) == "Object" && typeof e.callee == "function") {
    return "Arguments";
  } else {
    return r;
  }
};