var e = require("./44.js");
var o = require("./140.js");
var i = require("./143.js");
var c = require("./195.js");
var u = require("./30.js");
var a = require("./95.js");
var f = require("./98.js");
function s(t, n) {
  var r = this;
  if (!(r instanceof s)) {
    return new s(t, n);
  }
  if (i) {
    r = i(new Error(undefined), o(r));
  }
  if (n !== undefined) {
    u(r, "message", String(n));
  }
  var e = [];
  f(t, e.push, {
    that: e
  });
  u(r, "errors", e);
  return r;
}
s.prototype = c(Error.prototype, {
  constructor: a(5, s),
  message: a(5, ""),
  name: a(5, "AggregateError")
});
e({
  global: true
}, {
  AggregateError: s
});