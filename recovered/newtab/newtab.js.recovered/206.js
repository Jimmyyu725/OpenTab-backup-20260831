var r = require("./44.js");
var i = require("./52.js");
var o = require("./62.js");
var a = require("./81.js");
var s = require("./100.js");
var c = require("./98.js");
r({
  target: "Promise",
  stat: true
}, {
  any: function (t) {
    var e = this;
    var n = a.f(e);
    var r = n.resolve;
    var u = n.reject;
    var l = s(function () {
      var n = i(e.resolve);
      var a = [];
      var s = 0;
      var l = 1;
      var f = false;
      c(t, function (t) {
        var i = s++;
        var c = false;
        a.push(undefined);
        l++;
        n.call(e, t).then(function (t) {
          if (!c && !f) {
            f = true;
            r(t);
          }
        }, function (t) {
          if (!c && !f) {
            c = true;
            a[i] = t;
            if (! --l) {
              u(new (o("AggregateError"))(a, "No one promise resolved"));
            }
          }
        });
      });
      if (! --l) {
        u(new (o("AggregateError"))(a, "No one promise resolved"));
      }
    });
    if (l.error) {
      u(l.value);
    }
    return n.promise;
  }
});