require("./19.js");
var r = require("./26.js");
var o = require("./137.js");
var i = require("./9.js");
var c = require("./8.js");
var u = require("./20.js");
var a = c("species");
var s = RegExp.prototype;
module.exports = function (t, n, e, f) {
  var l = c(t);
  var p = !i(function () {
    var n = {
      [l]: function () {
        return 7;
      }
    };
    return ""[t](n) != 7;
  });
  var v = p && !i(function () {
    var n = false;
    var e = /a/;
    if (t === "split") {
      (e = {}).constructor = {};
      e.constructor[a] = function () {
        return e;
      };
      e.flags = "";
      e[l] = /./[l];
    }
    e.exec = function () {
      n = true;
      return null;
    };
    e[l]("");
    return !n;
  });
  if (!p || !v || e) {
    var d = /./[l];
    var h = n(l, ""[t], function (t, n, e, r, i) {
      var c = n.exec;
      if (c === o || c === s.exec) {
        if (p && !i) {
          return {
            done: true,
            value: d.call(n, e, r)
          };
        } else {
          return {
            done: true,
            value: t.call(e, n, r)
          };
        }
      } else {
        return {
          done: false
        };
      }
    });
    r(String.prototype, t, h[0]);
    r(s, l, h[1]);
  }
  if (f) {
    u(s[l], "sham", true);
  }
};