var r = require("./157.js");
var o = require("./102.js").concat("length", "prototype");
exports.f = Object.getOwnPropertyNames || function (t) {
  return r(t, o);
};