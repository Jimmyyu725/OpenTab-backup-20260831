var n = require("./25.js");
function e(t) {
  return t && t.Math == Math && t;
}
module.exports = e(typeof globalThis == "object" && globalThis) || e(typeof window == "object" && window) || e(typeof self == "object" && self) || e(typeof n == "object" && n) || function () {
  return this;
}() || Function("return this")();