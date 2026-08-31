var r = require("./11.js");
var o = require("./78.js");
var i = require("./79.js");
var s = require("./364.js");
var a = i("IE_PROTO");
var u = Object.prototype;
module.exports = s ? Object.getPrototypeOf : function (t) {
  t = o(t);
  if (r(t, a)) {
    return t[a];
  } else if (typeof t.constructor == "function" && t instanceof t.constructor) {
    return t.constructor.prototype;
  } else if (t instanceof Object) {
    return u;
  } else {
    return null;
  }
};