var i = require("./2334.js");
var s = require("./2469.js");
var r = require("./4351.js");
var a = require("./9562.js");
var o = require("./7376.js");
var u = require("./1681.js");
var g = o("IE_PROTO");
var h = i.Object;
var c = h.prototype;
module.exports = u ? h.getPrototypeOf : function (e) {
  var t = a(e);
  if (s(t, g)) {
    return t[g];
  }
  var n = t.constructor;
  if (r(n) && t instanceof n) {
    return n.prototype;
  } else if (t instanceof h) {
    return c;
  } else {
    return null;
  }
};