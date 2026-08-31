var r = require("./18.js");
var o = require("./21.js");
var i = require("./8.js");
var c = require("./16.js");
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