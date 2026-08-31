var r = require("./36.js");
var o = function () {
  try {
    var t = r(Object, "defineProperty");
    t({}, "", {});
    return t;
  } catch (t) {}
}();
module.exports = o;