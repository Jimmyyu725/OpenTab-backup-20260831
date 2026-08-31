var r = require("./62.js");
var i = require("./97.js");
var o = require("./17.js");
var a = require("./61.js");
var s = o("species");
module.exports = function (t) {
  var e = r(t);
  var n = i.f;
  if (a && e && !e[s]) {
    n(e, s, {
      configurable: true,
      get: function () {
        return this;
      }
    });
  }
};