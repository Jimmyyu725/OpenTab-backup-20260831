var n = require(/*webcrack:missing*/"./25.js");
function r(t) {
  return t && t.Math == Math && t;
}
module.exports = r(typeof globalThis == "object" && globalThis) || r(typeof window == "object" && window) || r(typeof self == "object" && self) || r(typeof n == "object" && n) || function () {
  return this;
}() || Function("return this")();