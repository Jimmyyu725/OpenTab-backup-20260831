var r = require("./62.js");
var o = require("./97.js");
var i = require("./17.js");
var c = require("./61.js");
var u = i("species");
module.exports = function (t) {
  var n = r(t);
  var e = o.f;
  if (c && n && !n[u]) {
    e(n, u, {
      configurable: true,
      get: function () {
        return this;
      }
    });
  }
};