var r = require("./77.js");
var o = require("./56.js");
var i = require("./88.js");
var s = require("./9.js");
var a = require("./18.js");
var u = require("./89.js");
var c = require("./90.js");
var f = require("./26.js");
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
    var e = u(this, a("Promise"));
    var n = typeof t == "function";
    return this.then(n ? function (n) {
      return c(e, t()).then(function () {
        return n;
      });
    } : t, n ? function (n) {
      return c(e, t()).then(function () {
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