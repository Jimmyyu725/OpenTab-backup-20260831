var e = require("./44.js");
var o = require("./52.js");
var i = require("./81.js");
var c = require("./100.js");
var u = require("./98.js");
e({
  target: "Promise",
  stat: true
}, {
  allSettled: function (t) {
    var n = this;
    var r = i.f(n);
    var e = r.resolve;
    var a = r.reject;
    var f = c(function () {
      var r = o(n.resolve);
      var i = [];
      var c = 0;
      var a = 1;
      u(t, function (t) {
        var o = c++;
        var u = false;
        i.push(undefined);
        a++;
        r.call(n, t).then(function (t) {
          if (!u) {
            u = true;
            i[o] = {
              status: "fulfilled",
              value: t
            };
            if (! --a) {
              e(i);
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
              e(i);
            }
          }
        });
      });
      if (! --a) {
        e(i);
      }
    });
    if (f.error) {
      a(f.value);
    }
    return r.promise;
  }
});