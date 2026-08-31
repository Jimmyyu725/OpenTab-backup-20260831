var r = require("./148.js");
var i = require("./97.js").f;
var o = require("./30.js");
var a = require("./37.js");
var s = require("./286.js");
var c = require("./17.js")("toStringTag");
module.exports = function (t, e, n, u) {
  if (t) {
    var l = n ? t : t.prototype;
    if (!a(l, c)) {
      i(l, c, {
        configurable: true,
        value: e
      });
    }
    if (u && !r) {
      o(l, "toString", s);
    }
  }
};