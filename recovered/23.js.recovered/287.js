var r = require("./62.js");
var o = require("./97.js");
var i = require("./17.js");
var s = require("./61.js");
var a = i("species");
module.exports = function (t) {
  var e = r(t);
  var n = o.f;
  if (s && e && !e[a]) {
    n(e, a, {
      configurable: true,
      get: function () {
        return this;
      }
    });
  }
};