var r = require("./44.js");
var o = require("./81.js");
var i = require("./100.js");
r({
  target: "Promise",
  stat: true
}, {
  try: function (t) {
    var n = o.f(this);
    var e = i(t);
    (e.error ? n.reject : n.resolve)(e.value);
    return n.promise;
  }
});