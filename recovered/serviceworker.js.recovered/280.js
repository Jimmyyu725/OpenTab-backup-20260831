require("./27.js");
var r = require("./39.js");
var o = require("./106.js");
var i = require("./8.js");
var s = require("./11.js");
var a = require("./37.js");
var c = s("species");
var u = RegExp.prototype;
module.exports = function (t, e, n, f) {
  var l = s(t);
  var h = !i(function () {
    var e = {
      [l]: function () {
        return 7;
      }
    };
    return ""[t](e) != 7;
  });
  var p = h && !i(function () {
    var e = false;
    var n = /a/;
    if (t === "split") {
      (n = {}).constructor = {};
      n.constructor[c] = function () {
        return n;
      };
      n.flags = "";
      n[l] = /./[l];
    }
    n.exec = function () {
      e = true;
      return null;
    };
    n[l]("");
    return !e;
  });
  if (!h || !p || n) {
    var d = /./[l];
    var y = e(l, ""[t], function (t, e, n, r, i) {
      var s = e.exec;
      if (s === o || s === u.exec) {
        if (h && !i) {
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
    r(String.prototype, t, y[0]);
    r(u, l, y[1]);
  }
  if (f) {
    a(u[l], "sham", true);
  }
};