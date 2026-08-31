var r = require("./28.js");
var o = require("./53.js");
var i = require("./73.js");
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