var r = require("./118.js");
var o = require("./64.js").f;
var i = require("./19.js");
var s = require("./30.js");
var a = require("./297.js");
var c = require("./9.js")("toStringTag");
module.exports = function (t, e, n, u) {
  if (t) {
    var f = n ? t : t.prototype;
    if (!s(f, c)) {
      o(f, c, {
        configurable: true,
        value: e
      });
    }
    if (u && !r) {
      i(f, "toString", a);
    }
  }
};