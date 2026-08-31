var e = require("./62.js");
var o = require("./97.js");
var i = require("./17.js");
var c = require("./61.js");
var u = i("species");
module.exports = function (t) {
  var n = e(t);
  var r = o.f;
  if (c && n && !n[u]) {
    r(n, u, {
      configurable: true,
      get: function () {
        return this;
      }
    });
  }
};