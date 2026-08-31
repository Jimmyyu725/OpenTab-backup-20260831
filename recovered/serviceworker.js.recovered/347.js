var r = require("./28.js");
var o = require("./43.js");
var i = require("./203.js");
var s = require("./18.js");
var a = require("./44.js");
var c = require("./120.js");
var u = require("./206.js");
var f = require("./72.js");
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