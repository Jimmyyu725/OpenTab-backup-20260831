var r = require("./21.js").f;
var i = require("./11.js");
var o = require("./8.js")("toStringTag");
module.exports = function (t, e, n) {
  if (t && !i(t = n ? t : t.prototype, o)) {
    r(t, o, {
      configurable: true,
      value: e
    });
  }
};