var r = require("./44.js");
var o = require("./140.js");
var i = require("./143.js");
var s = require("./195.js");
var a = require("./30.js");
var u = require("./95.js");
var c = require("./98.js");
function f(t, e) {
  var n = this;
  if (!(n instanceof f)) {
    return new f(t, e);
  }
  if (i) {
    n = i(new Error(undefined), o(n));
  }
  if (e !== undefined) {
    a(n, "message", String(e));
  }
  var r = [];
  c(t, r.push, {
    that: r
  });
  a(n, "errors", r);
  return n;
}
f.prototype = s(Error.prototype, {
  constructor: u(5, f),
  message: u(5, ""),
  name: u(5, "AggregateError")
});
r({
  global: true
}, {
  AggregateError: f
});