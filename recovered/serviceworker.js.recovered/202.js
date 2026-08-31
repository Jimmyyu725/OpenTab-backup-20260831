var r = require("./28.js");
var o = require("./110.js");
var i = require("./140.js");
var s = require("./183.js");
var a = require("./19.js");
var c = require("./60.js");
var u = require("./71.js");
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
  u(t, r.push, {
    that: r
  });
  a(n, "errors", r);
  return n;
}
f.prototype = s(Error.prototype, {
  constructor: c(5, f),
  message: c(5, ""),
  name: c(5, "AggregateError")
});
r({
  global: true
}, {
  AggregateError: f
});