var r = require("./28.js");
var o = require("./33.js");
var i = require("./44.js");
var s = require("./53.js");
var a = require("./73.js");
var c = require("./71.js");
r({
  target: "Promise",
  stat: true
}, {
  any: function (t) {
    var e = this;
    var n = s.f(e);
    var r = n.resolve;
    var u = n.reject;
    var f = a(function () {
      var n = o(e.resolve);
      var s = [];
      var a = 0;
      var f = 1;
      var l = false;
      c(t, function (t) {
        var o = a++;
        var c = false;
        s.push(undefined);
        f++;
        n.call(e, t).then(function (t) {
          if (!c && !l) {
            l = true;
            r(t);
          }
        }, function (t) {
          if (!c && !l) {
            c = true;
            s[o] = t;
            if (! --f) {
              u(new (i("AggregateError"))(s, "No one promise resolved"));
            }
          }
        });
      });
      if (! --f) {
        u(new (i("AggregateError"))(s, "No one promise resolved"));
      }
    });
    if (f.error) {
      u(f.value);
    }
    return n.promise;
  }
});