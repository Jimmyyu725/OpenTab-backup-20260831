var r = require("./44.js");
var o = require("./65.js");
var i = require("./200.js");
var c = require("./29.js");
var u = require("./62.js");
var a = require("./159.js");
var s = require("./204.js");
var f = require("./99.js");
r({
  target: "Promise",
  proto: true,
  real: true,
  forced: !!i && c(function () {
    i.prototype.finally.call({
      then: function () {}
    }, function () {});
  })
}, {
  finally: function (t) {
    var n = a(this, u("Promise"));
    var e = typeof t == "function";
    return this.then(e ? function (e) {
      return s(n, t()).then(function () {
        return e;
      });
    } : t, e ? function (e) {
      return s(n, t()).then(function () {
        throw e;
      });
    } : t);
  }
});
if (!o && typeof i == "function") {
  var l = u("Promise").prototype.finally;
  if (i.prototype.finally !== l) {
    f(i.prototype, "finally", l, {
      unsafe: true
    });
  }
}