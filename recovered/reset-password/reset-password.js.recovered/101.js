var r = require("./86.js");
var o = require("./76.js").concat("length", "prototype");
exports.f = Object.getOwnPropertyNames || function (t) {
  return r(t, o);
};