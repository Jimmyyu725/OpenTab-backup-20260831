var r = require("./37.js");
var o = require("./190.js");
var i = require("./141.js");
var s = require("./272.js");
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