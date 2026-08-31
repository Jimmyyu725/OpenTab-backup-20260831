var r = require("./44.js");
var o = require("./81.js");
var i = require("./100.js");
r({
  target: "Promise",
  stat: true
}, {
  try: function (t) {
    var e = o.f(this);
    var n = i(t);
    (n.error ? e.reject : e.resolve)(n.value);
    return e.promise;
  }
});