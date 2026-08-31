var e = require("./37.js");
var o = require("./190.js");
var i = require("./141.js");
var c = require("./272.js");
var u = i("IE_PROTO");
var a = Object.prototype;
module.exports = c ? Object.getPrototypeOf : function (t) {
  t = o(t);
  if (e(t, u)) {
    return t[u];
  } else if (typeof t.constructor == "function" && t instanceof t.constructor) {
    return t.constructor.prototype;
  } else if (t instanceof Object) {
    return a;
  } else {
    return null;
  }
};