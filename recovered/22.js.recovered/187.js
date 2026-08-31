var r = require("./44.js");
var i = require("./140.js");
var o = require("./143.js");
var s = require("./195.js");
var a = require("./30.js");
var c = require("./95.js");
var u = require("./98.js");
function l(t, e) {
  var n = this;
  if (!(n instanceof l)) {
    return new l(t, e);
  }
  if (o) {
    n = o(new Error(undefined), i(n));
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
l.prototype = s(Error.prototype, {
  constructor: c(5, l),
  message: c(5, ""),
  name: c(5, "AggregateError")
});
r({
  global: true
}, {
  AggregateError: l
});