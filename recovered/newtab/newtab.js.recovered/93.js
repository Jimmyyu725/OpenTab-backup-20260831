var r = require("./127.js");
var i = require("./33.js");
var o = require("./8.js")("toStringTag");
var a = i(function () {
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
  } else if (a) {
    return i(e);
  } else if ((r = i(e)) == "Object" && typeof e.callee == "function") {
    return "Arguments";
  } else {
    return r;
  }
};