var r = require("./77.js");
var o = require("./56.js");
var i = require("./88.js");
var c = require("./9.js");
var u = require("./18.js");
var a = require("./89.js");
var s = require("./90.js");
var f = require("./26.js");
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