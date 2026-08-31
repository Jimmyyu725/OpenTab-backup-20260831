var r = require("./38.js").f;
var o = require("./23.js");
var i = require("./11.js")("toStringTag");
module.exports = function (t, e, n) {
  if (t && !o(t = n ? t : t.prototype, i)) {
    r(t, i, {
      configurable: true,
      value: e
    });
  }
};