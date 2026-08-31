var e = require("./44.js");
var o = require("./52.js");
var i = require("./62.js");
var c = require("./81.js");
var u = require("./100.js");
var a = require("./98.js");
e({
  target: "Promise",
  stat: true
}, {
  any: function (t) {
    var n = this;
    var r = c.f(n);
    var e = r.resolve;
    var f = r.reject;
    var s = u(function () {
      var r = o(n.resolve);
      var c = [];
      var u = 0;
      var s = 1;
      var p = false;
      a(t, function (t) {
        var o = u++;
        var a = false;
        c.push(undefined);
        s++;
        r.call(n, t).then(function (t) {
          if (!a && !p) {
            p = true;
            e(t);
          }
        }, function (t) {
          if (!a && !p) {
            a = true;
            c[o] = t;
            if (! --s) {
              f(new (i("AggregateError"))(c, "No one promise resolved"));
            }
          }
        });
      });
      if (! --s) {
        f(new (i("AggregateError"))(c, "No one promise resolved"));
      }
    });
    if (s.error) {
      f(s.value);
    }
    return r.promise;
  }
});