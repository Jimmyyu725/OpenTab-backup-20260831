require("./19.js");
var r = require("./26.js");
var i = require("./137.js");
var o = require("./9.js");
var a = require("./8.js");
var s = require("./20.js");
var c = a("species");
var u = RegExp.prototype;
module.exports = function (t, e, n, l) {
  var f = a(t);
  var h = !o(function () {
    var e = {
      [f]: function () {
        return 7;
      }
    };
    return ""[t](e) != 7;
  });
  var p = h && !o(function () {
    var e = false;
    var n = /a/;
    if (t === "split") {
      (n = {}).constructor = {};
      n.constructor[c] = function () {
        return n;
      };
      n.flags = "";
      n[f] = /./[f];
    }
    n.exec = function () {
      e = true;
      return null;
    };
    n[f]("");
    return !e;
  });
  if (!h || !p || n) {
    var d = /./[f];
    var m = e(f, ""[t], function (t, e, n, r, o) {
      var a = e.exec;
      if (a === i || a === u.exec) {
        if (h && !o) {
          return {
            done: true,
            value: d.call(e, n, r)
          };
        } else {
          return {
            done: true,
            value: t.call(n, e, r)
          };
        }
      } else {
        return {
          done: false
        };
      }
    });
    r(String.prototype, t, m[0]);
    r(u, f, m[1]);
  }
  if (l) {
    s(u[f], "sham", true);
  }
};