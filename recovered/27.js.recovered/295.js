var e = require("./44.js");
var o = require("./65.js");
var i = require("./200.js");
var c = require("./29.js");
var u = require("./62.js");
var a = require("./159.js");
var f = require("./204.js");
var s = require("./99.js");
e({
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
    var r = typeof t == "function";
    return this.then(r ? function (r) {
      return f(n, t()).then(function () {
        return r;
      });
    } : t, r ? function (r) {
      return f(n, t()).then(function () {
        throw r;
      });
    } : t);
  }
});
if (!o && typeof i == "function") {
  var p = u("Promise").prototype.finally;
  if (i.prototype.finally !== p) {
    s(i.prototype, "finally", p, {
      unsafe: true
    });
  }
}