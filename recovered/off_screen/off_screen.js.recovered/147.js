var r = require("./148.js");
var o = require("./84.js");
var i = require("./17.js")("toStringTag");
var c = o(function () {
  return arguments;
}()) == "Arguments";
module.exports = r ? o : function (t) {
  var n;
  var e;
  var r;
  if (t === undefined) {
    return "Undefined";
  } else if (t === null) {
    return "Null";
  } else if (typeof (e = function (t, n) {
    try {
      return t[n];
    } catch (t) {}
  }(n = Object(t), i)) == "string") {
    return e;
  } else if (c) {
    return o(n);
  } else if ((r = o(n)) == "Object" && typeof n.callee == "function") {
    return "Arguments";
  } else {
    return r;
  }
};