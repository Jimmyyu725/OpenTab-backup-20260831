var r = require("./44.js");
var o = require("./65.js");
var i = require("./200.js");
var s = require("./29.js");
var a = require("./62.js");
var c = require("./159.js");
var u = require("./204.js");
var l = require("./99.js");
r({
  target: "Promise",
  proto: true,
  real: true,
  forced: !!i && s(function () {
    i.prototype.finally.call({
      then: function () {}
    }, function () {});
  })
}, {
  finally: function (t) {
    var e = c(this, a("Promise"));
    var n = typeof t == "function";
    return this.then(n ? function (n) {
      return u(e, t()).then(function () {
        return n;
      });
    } : t, n ? function (n) {
      return u(e, t()).then(function () {
        throw n;
      });
    } : t);
  }
});
if (!o && typeof i == "function") {
  var h = a("Promise").prototype.finally;
  if (i.prototype.finally !== h) {
    l(i.prototype, "finally", h, {
      unsafe: true
    });
  }
}