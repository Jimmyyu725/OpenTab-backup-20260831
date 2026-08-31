var r = require("./21.js").f;
var o = require("./11.js");
var i = require("./8.js")("toStringTag");
module.exports = function (t, e, n) {
  if (t && !o(t = n ? t : t.prototype, i)) {
    r(t, i, {
      configurable: true,
      value: e
    });
  }
};