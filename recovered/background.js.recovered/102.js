var r = require("./18.js");
var o = require("./21.js");
var i = require("./8.js");
var s = require("./16.js");
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