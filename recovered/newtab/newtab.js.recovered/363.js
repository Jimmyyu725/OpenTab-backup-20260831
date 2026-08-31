var r = require("./11.js");
var i = require("./78.js");
var o = require("./79.js");
var a = require("./364.js");
var s = o("IE_PROTO");
var c = Object.prototype;
module.exports = a ? Object.getPrototypeOf : function (t) {
  t = i(t);
  if (r(t, s)) {
    return t[s];
  } else if (typeof t.constructor == "function" && t instanceof t.constructor) {
    return t.constructor.prototype;
  } else if (t instanceof Object) {
    return c;
  } else {
    return null;
  }
};