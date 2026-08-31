var r = require("./44.js");
var i = require("./81.js");
var o = require("./100.js");
r({
  target: "Promise",
  stat: true
}, {
  try: function (t) {
    var e = i.f(this);
    var n = o(t);
    (n.error ? e.reject : e.resolve)(n.value);
    return e.promise;
  }
});