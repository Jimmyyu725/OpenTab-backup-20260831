var r = require("./44.js");
var o = require("./52.js");
var i = require("./81.js");
var c = require("./100.js");
var u = require("./98.js");
r({
  target: "Promise",
  stat: true
}, {
  allSettled: function (t) {
    var n = this;
    var e = i.f(n);
    var r = e.resolve;
    var a = e.reject;
    var s = c(function () {
      var e = o(n.resolve);
      var i = [];
      var c = 0;
      var a = 1;
      u(t, function (t) {
        var o = c++;
        var u = false;
        i.push(undefined);
        a++;
        e.call(n, t).then(function (t) {
          if (!u) {
            u = true;
            i[o] = {
              status: "fulfilled",
              value: t
            };
            if (! --a) {
              r(i);
            }
          }
        }, function (t) {
          if (!u) {
            u = true;
            i[o] = {
              status: "rejected",
              reason: t
            };
            if (! --a) {
              r(i);
            }
          }
        });
      });
      if (! --a) {
        r(i);
      }
    });
    if (s.error) {
      a(s.value);
    }
    return e.promise;
  }
});