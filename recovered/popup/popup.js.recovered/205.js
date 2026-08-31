var r = require("./44.js");
var i = require("./52.js");
var o = require("./81.js");
var s = require("./100.js");
var a = require("./98.js");
r({
  target: "Promise",
  stat: true
}, {
  allSettled: function (t) {
    var e = this;
    var n = o.f(e);
    var r = n.resolve;
    var c = n.reject;
    var u = s(function () {
      var n = i(e.resolve);
      var o = [];
      var s = 0;
      var c = 1;
      a(t, function (t) {
        var i = s++;
        var a = false;
        o.push(undefined);
        c++;
        n.call(e, t).then(function (t) {
          if (!a) {
            a = true;
            o[i] = {
              status: "fulfilled",
              value: t
            };
            if (! --c) {
              r(o);
            }
          }
        }, function (t) {
          if (!a) {
            a = true;
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