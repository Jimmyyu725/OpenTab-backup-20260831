var r = require("./148.js");
var o = require("./97.js").f;
var i = require("./30.js");
var s = require("./37.js");
var a = require("./286.js");
var c = require("./17.js")("toStringTag");
module.exports = function (t, e, n, u) {
  if (t) {
    var l = n ? t : t.prototype;
    if (!s(l, c)) {
      o(l, c, {
        configurable: true,
        value: e
      });
    }
    if (u && !r) {
      i(l, "toString", a);
    }
  }
};