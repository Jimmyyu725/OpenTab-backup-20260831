var i = require("./2334.js");
var s = require("./200.js");
var r = require("./4351.js");
var a = require("./5733.js");
var o = require("./481.js");
var u = i.Object;
module.exports = o ? function (e) {
  return typeof e == "symbol";
} : function (e) {
  var t = s("Symbol");
  return r(t) && a(t.prototype, u(e));
};