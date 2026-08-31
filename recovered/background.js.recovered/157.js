var e = require("./94.js");
if (e === undefined || !e.version || e.version.indexOf("v0.") === 0 || e.version.indexOf("v1.") === 0 && e.version.indexOf("v1.8.") !== 0) {
  module.exports = {
    nextTick: function (t, n, r, o) {
      if (typeof t != "function") {
        throw new TypeError("\"callback\" argument must be a function");
      }
      var i;
      var s;
      var a = arguments.length;
      switch (a) {
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
            t.call(null, n, r, o);
          });
        default:
          i = new Array(a - 1);
          s = 0;
          while (s < i.length) {
            i[s++] = arguments[s];
          }
          return e.nextTick(function () {
            t.apply(null, i);
          });
      }
    }
  };
} else {
  module.exports = e;
}