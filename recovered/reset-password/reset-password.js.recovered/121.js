var r = require("./21.js").f;
var o = require("./11.js");
var i = require("./8.js")("toStringTag");
module.exports = function (t, n, e) {
  if (t && !o(t = e ? t : t.prototype, i)) {
    r(t, i, {
      configurable: true,
      value: n
    });
  }
};