var e = require("./44.js");
var o = require("./81.js");
var i = require("./100.js");
e({
  target: "Promise",
  stat: true
}, {
  try: function (t) {
    var n = o.f(this);
    var r = i(t);
    (r.error ? n.reject : n.resolve)(r.value);
    return n.promise;
  }
});