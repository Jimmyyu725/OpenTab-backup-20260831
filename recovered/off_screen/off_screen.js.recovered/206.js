var r = require("./44.js");
var o = require("./52.js");
var i = require("./62.js");
var c = require("./81.js");
var u = require("./100.js");
var a = require("./98.js");
r({
  target: "Promise",
  stat: true
}, {
  any: function (t) {
    var n = this;
    var e = c.f(n);
    var r = e.resolve;
    var s = e.reject;
    var f = u(function () {
      var e = o(n.resolve);
      var c = [];
      var u = 0;
      var f = 1;
      var l = false;
      a(t, function (t) {
        var o = u++;
        var a = false;
        c.push(undefined);
        f++;
        e.call(n, t).then(function (t) {
          if (!a && !l) {
            l = true;
            r(t);
          }
        }, function (t) {
          if (!a && !l) {
            a = true;
            c[o] = t;
            if (! --f) {
              s(new (i("AggregateError"))(c, "No one promise resolved"));
            }
          }
        });
      });
      if (! --f) {
        s(new (i("AggregateError"))(c, "No one promise resolved"));
      }
    });
    if (f.error) {
      s(f.value);
    }
    return e.promise;
  }
});