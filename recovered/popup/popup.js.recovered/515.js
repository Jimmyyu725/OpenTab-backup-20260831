var r = require("./305.js");
var i = function () {
  try {
    var t = r(Object, "defineProperty");
    t({}, "", {});
    return t;
  } catch (t) {}
}();
module.exports = i;