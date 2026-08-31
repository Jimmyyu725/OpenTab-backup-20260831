var r = require("./40.js");
var o = require("./38.js");
var i = require("./11.js");
var s = require("./32.js");
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