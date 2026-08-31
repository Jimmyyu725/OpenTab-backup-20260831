var r = require(/*webcrack:missing*/"./77.js");
var o = require(/*webcrack:missing*/"./56.js");
var i = require(/*webcrack:missing*/"./88.js");
var s = require(/*webcrack:missing*/"./9.js");
var a = require(/*webcrack:missing*/"./18.js");
var c = require(/*webcrack:missing*/"./89.js");
var u = require(/*webcrack:missing*/"./90.js");
var l = require(/*webcrack:missing*/"./26.js");
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