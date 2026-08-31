require("./19.js");
var r = require(/*webcrack:missing*/"./26.js");
var i = require("./137.js");
var o = require(/*webcrack:missing*/"./9.js");
var s = require(/*webcrack:missing*/"./8.js");
var a = require(/*webcrack:missing*/"./20.js");
var c = s("species");
var u = RegExp.prototype;
module.exports = function (t, e, n, l) {
  var h = s(t);
  var p = !o(function () {
    var e = {
      [h]: function () {
        return 7;
      }
    };
    return ""[t](e) != 7;
  });
  var f = p && !o(function () {
    var e = false;
    var n = /a/;
    if (t === "split") {
      (n = {}).constructor = {};
      n.constructor[c] = function () {
        return n;
      };
      n.flags = "";
      n[h] = /./[h];
    }
    n.exec = function () {
      e = true;
      return null;
    };
    n[h]("");
    return !e;
  });
  if (!p || !f || n) {
    var d = /./[h];
    var g = e(h, ""[t], function (t, e, n, r, o) {
      var s = e.exec;
      if (s === i || s === u.exec) {
        if (p && !o) {
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
    r(String.prototype, t, g[0]);
    r(u, h, g[1]);
  }
  if (l) {
    a(u[h], "sham", true);
  }
};