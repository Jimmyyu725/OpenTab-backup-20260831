var r = require(/*webcrack:missing*/"./11.js");
var o = require(/*webcrack:missing*/"./78.js");
var i = require(/*webcrack:missing*/"./79.js");
var s = require("./364.js");
var a = i("IE_PROTO");
var c = Object.prototype;
module.exports = s ? Object.getPrototypeOf : function (t) {
  t = o(t);
  if (r(t, a)) {
    return t[a];
  } else if (typeof t.constructor == "function" && t instanceof t.constructor) {
    return t.constructor.prototype;
  } else if (t instanceof Object) {
    return c;
  } else {
    return null;
  }
};