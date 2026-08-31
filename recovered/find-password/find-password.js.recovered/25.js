var e;
e = function () {
  return this;
}();
try {
  e = e || new Function("return this")();
} catch (t) {
  if (typeof window == "object") {
    e = window;
  }
}
module.exports = e;