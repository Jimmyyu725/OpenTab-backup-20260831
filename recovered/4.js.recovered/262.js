require("./19.js");
var r = require(/*webcrack:missing*/"./26.js");
var o = require("./137.js");
var i = require(/*webcrack:missing*/"./9.js");
var a = require(/*webcrack:missing*/"./8.js");
var u = require(/*webcrack:missing*/"./20.js");
var c = a("species");
var s = RegExp.prototype;
module.exports = function (e, t, n, f) {
  var l = a(e);
  var d = !i(function () {
    var t = {
      [l]: function () {
        return 7;
      }
    };
    return ""[e](t) != 7;
  });
  var h = d && !i(function () {
    var t = false;
    var n = /a/;
    if (e === "split") {
      (n = {}).constructor = {};
      n.constructor[c] = function () {
        return n;
      };
      n.flags = "";
      n[l] = /./[l];
    }
    n.exec = function () {
      t = true;
      return null;
    };
    n[l]("");
    return !t;
  });
  if (!d || !h || n) {
    var p = /./[l];
    var v = t(l, ""[e], function (e, t, n, r, i) {
      var a = t.exec;
      if (a === o || a === s.exec) {
        if (d && !i) {
          return {
            done: true,
            value: p.call(t, n, r)
          };
        } else {
          return {
            done: true,
            value: e.call(n, t, r)
          };
        }
      } else {
        return {
          done: false
        };
      }
    });
    r(String.prototype, e, v[0]);
    r(s, l, v[1]);
  }
  if (f) {
    u(s[l], "sham", true);
  }
};