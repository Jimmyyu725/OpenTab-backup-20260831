var e = require("./94.js");
if (e === undefined || !e.version || e.version.indexOf("v0.") === 0 || e.version.indexOf("v1.") === 0 && e.version.indexOf("v1.8.") !== 0) {
  module.exports = {
    nextTick: function (t, n, r, i) {
      if (typeof t != "function") {
        throw new TypeError("\"callback\" argument must be a function");
      }
      var o;
      var a;
      var s = arguments.length;
      switch (s) {
        case 0:
        case 1:
          return e.nextTick(t);
        case 2:
          return e.nextTick(function () {
            t.call(null, n);
          });
        case 3:
          return e.nextTick(function () {
            t.call(null, n, r);
          });
        case 4:
          return e.nextTick(function () {
            t.call(null, n, r, i);
          });
        default:
          o = new Array(s - 1);
          a = 0;
          while (a < o.length) {
            o[a++] = arguments[a];
          }
          return e.nextTick(function () {
            t.apply(null, o);
          });
      }
    }
  };
} else {
  module.exports = e;
}