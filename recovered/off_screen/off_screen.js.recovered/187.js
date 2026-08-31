var r = require("./44.js");
var o = require("./140.js");
var i = require("./143.js");
var c = require("./195.js");
var u = require("./30.js");
var a = require("./95.js");
var s = require("./98.js");
function f(t, n) {
  var e = this;
  if (!(e instanceof f)) {
    return new f(t, n);
  }
  if (i) {
    e = i(new Error(undefined), o(e));
  }
  if (n !== undefined) {
    u(e, "message", String(n));
  }
  var r = [];
  s(t, r.push, {
    that: r
  });
  u(e, "errors", r);
  return e;
}
f.prototype = c(Error.prototype, {
  constructor: a(5, f),
  message: a(5, ""),
  name: a(5, "AggregateError")
});
r({
  global: true
}, {
  AggregateError: f
});