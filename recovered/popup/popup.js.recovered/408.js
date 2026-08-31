module.exports = function (t) {
  if (!t.webpackPolyfill) {
    t.deprecate = function () {};
    t.paths = [];
    t.children ||= [];
    Object.defineProperty(t, "loaded", {
      enumerable: true,
      get: function () {
        return t.l;
      }
    });
    Object.defineProperty(t, "id", {
      enumerable: true,
      get: function () {
        return t.i;
      }
    });
    t.webpackPolyfill = 1;
  }
  return t;
};