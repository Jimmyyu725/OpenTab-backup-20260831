var r = require("./18.js");
var i = require("./21.js");
var o = require("./8.js");
var s = require("./16.js");
var a = o("species");
module.exports = function (t) {
  var e = r(t);
  var n = i.f;
  if (s && e && !e[a]) {
    n(e, a, {
      configurable: true,
      get: function () {
        return this;
      }
    });
  }
};