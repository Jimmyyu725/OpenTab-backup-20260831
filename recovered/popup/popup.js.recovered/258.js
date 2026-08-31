var r = require("./77.js");
var i = require("./56.js");
var o = require("./88.js");
var s = require("./9.js");
var a = require("./18.js");
var c = require("./89.js");
var u = require("./90.js");
var l = require("./26.js");
r({
  target: "Promise",
  proto: true,
  real: true,
  forced: !!o && s(function () {
    o.prototype.finally.call({
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
if (!i && typeof o == "function") {
  var h = a("Promise").prototype.finally;
  if (o.prototype.finally !== h) {
    l(o.prototype, "finally", h, {
      unsafe: true
    });
  }
}