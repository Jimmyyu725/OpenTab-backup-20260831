function i(e) {
  return e && e.Math == Math && e;
}
module.exports = i(typeof globalThis == "object" && globalThis) || i(typeof window == "object" && window) || i(typeof self == "object" && self) || i(typeof require.g == "object" && require.g) || function () {
  return this;
}() || Function("return this")();