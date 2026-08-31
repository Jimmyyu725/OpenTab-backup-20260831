var e = require("./148.js");
var o = require("./84.js");
var i = require("./17.js")("toStringTag");
var c = o(function () {
  return arguments;
}()) == "Arguments";
module.exports = e ? o : function (t) {
  var n;
  var r;
  var e;
  if (t === undefined) {
    return "Undefined";
  } else if (t === null) {
    return "Null";
  } else if (typeof (r = function (t, n) {
    try {
      return t[n];
    } catch (t) {}
  }(n = Object(t), i)) == "string") {
    return r;
  } else if (c) {
    return o(n);
  } else if ((e = o(n)) == "Object" && typeof n.callee == "function") {
    return "Arguments";
  } else {
    return e;
  }
};