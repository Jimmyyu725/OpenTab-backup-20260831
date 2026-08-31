var r = require("./18.js");
var i = require("./21.js");
var o = require("./8.js");
var a = require("./16.js");
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