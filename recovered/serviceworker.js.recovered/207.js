var r = require("./28.js");
var o = require("./33.js");
var i = require("./53.js");
var s = require("./73.js");
var a = require("./71.js");
r({
  target: "Promise",
  stat: true
}, {
  allSettled: function (t) {
    var e = this;
    var n = i.f(e);
    var r = n.resolve;
    var c = n.reject;
    var u = s(function () {
      var n = o(e.resolve);
      var i = [];
      var s = 0;
      var c = 1;
      a(t, function (t) {
        var o = s++;
        var a = false;
        i.push(undefined);
        c++;
        n.call(e, t).then(function (t) {
          if (!a) {
            a = true;
            i[o] = {
              status: "fulfilled",
              value: t
            };
            if (! --c) {
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
            if (! --c) {
              r(i);
            }
          }
        });
      });
      if (! --c) {
        r(i);
      }
    });
    if (u.error) {
      c(u.value);
    }
    return n.promise;
  }
});