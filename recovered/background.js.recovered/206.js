var r = require("./44.js");
var o = require("./52.js");
var i = require("./62.js");
var s = require("./81.js");
var a = require("./100.js");
var u = require("./98.js");
r({
  target: "Promise",
  stat: true
}, {
  any: function (t) {
    var e = this;
    var n = s.f(e);
    var r = n.resolve;
    var c = n.reject;
    var f = a(function () {
      var n = o(e.resolve);
      var s = [];
      var a = 0;
      var f = 1;
      var l = false;
      u(t, function (t) {
        var o = a++;
        var u = false;
        s.push(undefined);
        f++;
        n.call(e, t).then(function (t) {
          if (!u && !l) {
            l = true;
            r(t);
          }
        }, function (t) {
          if (!u && !l) {
            u = true;
            s[o] = t;
            if (! --f) {
              c(new (i("AggregateError"))(s, "No one promise resolved"));
            }
          }
        });
      });
      if (! --f) {
        c(new (i("AggregateError"))(s, "No one promise resolved"));
      }
    });
    if (f.error) {
      c(f.value);
    }
    return n.promise;
  }
});