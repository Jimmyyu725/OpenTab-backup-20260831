var e = require("./148.js");
var o = require("./97.js").f;
var i = require("./30.js");
var c = require("./37.js");
var u = require("./286.js");
var a = require("./17.js")("toStringTag");
module.exports = function (t, n, r, f) {
  if (t) {
    var s = r ? t : t.prototype;
    if (!c(s, a)) {
      o(s, a, {
        configurable: true,
        value: n
      });
    }
    if (f && !e) {
      i(s, "toString", u);
    }
  }
};