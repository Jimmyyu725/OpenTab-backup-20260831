var r = require("./44.js");
var o = require("./52.js");
var i = require("./81.js");
var s = require("./100.js");
var a = require("./98.js");
r({
  target: "Promise",
  stat: true
}, {
  allSettled: function (t) {
    var e = this;
    var n = i.f(e);
    var r = n.resolve;
    var u = n.reject;
    var c = s(function () {
      var n = o(e.resolve);
      var i = [];
      var s = 0;
      var u = 1;
      a(t, function (t) {
        var o = s++;
        var a = false;
        i.push(undefined);
        u++;
        n.call(e, t).then(function (t) {
          if (!a) {
            a = true;
            i[o] = {
              status: "fulfilled",
              value: t
            };
            if (! --u) {
              r(i);
            }
          }
        }, function (t) {
          if (!a) {
            a = true;
            i[o] = {
              status: "rejected",
              reason: t
            };
            if (! --u) {
              r(i);
            }
          }
        });
      });
      if (! --u) {
        r(i);
      }
    });
    if (c.error) {
      u(c.value);
    }
    return n.promise;
  }
});