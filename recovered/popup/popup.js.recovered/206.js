var r = require("./44.js");
var i = require("./52.js");
var o = require("./62.js");
var s = require("./81.js");
var a = require("./100.js");
var c = require("./98.js");
r({
  target: "Promise",
  stat: true
}, {
  any: function (t) {
    var e = this;
    var n = s.f(e);
    var r = n.resolve;
    var u = n.reject;
    var l = a(function () {
      var n = i(e.resolve);
      var s = [];
      var a = 0;
      var l = 1;
      var h = false;
      c(t, function (t) {
        var i = a++;
        var c = false;
        s.push(undefined);
        l++;
        n.call(e, t).then(function (t) {
          if (!c && !h) {
            h = true;
            r(t);
          }
        }, function (t) {
          if (!c && !h) {
            c = true;
            s[i] = t;
            if (! --l) {
              u(new (o("AggregateError"))(s, "No one promise resolved"));
            }
          }
        });
      });
      if (! --l) {
        u(new (o("AggregateError"))(s, "No one promise resolved"));
      }
    });
    if (l.error) {
      u(l.value);
    }
    return n.promise;
  }
});