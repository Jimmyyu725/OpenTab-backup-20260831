var r = require("./88.js");
var o = require("./99.js");
var i = require("./159.js");
var s = require("./8.js");
var a = require("./40.js");
var c = require("./165.js");
var u = require("./169.js");
var f = require("./39.js");
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
  var l = a("Promise").prototype.finally;
  if (i.prototype.finally !== l) {
    f(i.prototype, "finally", l, {
      unsafe: true
    });
  }
}