var r = require("./148.js");
var o = require("./97.js").f;
var i = require("./30.js");
var s = require("./37.js");
var a = require("./286.js");
var u = require("./17.js")("toStringTag");
module.exports = function (t, e, n, c) {
  if (t) {
    var f = n ? t : t.prototype;
    if (!s(f, u)) {
      o(f, u, {
        configurable: true,
        value: e
      });
    }
    if (c && !r) {
      i(f, "toString", a);
    }
  }
};