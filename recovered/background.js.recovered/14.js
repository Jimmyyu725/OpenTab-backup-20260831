var e = require("./25.js");
function n(t) {
  return t && t.Math == Math && t;
}
module.exports = n(typeof globalThis == "object" && globalThis) || n(typeof window == "object" && window) || n(typeof self == "object" && self) || n(typeof e == "object" && e) || function () {
  return this;
}() || Function("return this")();