var r = require("./148.js");
var o = require("./97.js").f;
var i = require("./30.js");
var c = require("./37.js");
var u = require("./286.js");
var a = require("./17.js")("toStringTag");
module.exports = function (t, n, e, s) {
  if (t) {
    var f = e ? t : t.prototype;
    if (!c(f, a)) {
      o(f, a, {
        configurable: true,
        value: n
      });
    }
    if (s && !r) {
      i(f, "toString", u);
    }
  }
};