var r = require("./44.js");
var i = require("./52.js");
var o = require("./81.js");
var a = require("./100.js");
var s = require("./98.js");
r({
  target: "Promise",
  stat: true
}, {
  allSettled: function (t) {
    var e = this;
    var n = o.f(e);
    var r = n.resolve;
    var c = n.reject;
    var u = a(function () {
      var n = i(e.resolve);
      var o = [];
      var a = 0;
      var c = 1;
      s(t, function (t) {
        var i = a++;
        var s = false;
        o.push(undefined);
        c++;
        n.call(e, t).then(function (t) {
          if (!s) {
            s = true;
            o[i] = {
              status: "fulfilled",
              value: t
            };
            if (! --c) {
              r(o);
            }
          }
        }, function (t) {
          if (!s) {
            s = true;
            o[i] = {
              status: "rejected",
              reason: t
            };
            if (! --c) {
              r(o);
            }
          }
        });
      });
      if (! --c) {
        r(o);
      }
    });
    if (u.error) {
      c(u.value);
    }
    return n.promise;
  }
});