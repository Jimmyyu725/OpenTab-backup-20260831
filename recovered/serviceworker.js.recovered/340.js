var r = require("./44.js");
var o = require("./64.js");
var i = require("./9.js");
var s = require("./42.js");
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