var n = require("./305.js");
var o = function () {
  try {
    var t = n(Object, "defineProperty");
    t({}, "", {});
    return t;
  } catch (t) {}
}();
module.exports = o;