var r = require("./91.js");
var o = Math.floor;
var i = "".replace;
var s = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var a = /\$([$&'`]|\d{1,2})/g;
module.exports = function (t, e, n, c, u, f) {
  var l = n + t.length;
  var h = c.length;
  var p = a;
  if (u !== undefined) {
    u = r(u);
    p = s;
  }
  return i.call(f, p, function (r, i) {
    var s;
    switch (i.charAt(0)) {
      case "$":
        return "$";
      case "&":
        return t;
      case "`":
        return e.slice(0, n);
      case "'":
        return e.slice(l);
      case "<":
        s = u[i.slice(1, -1)];
        break;
      default:
        var a = +i;
        if (a === 0) {
          return r;
        }
        if (a > h) {
          var f = o(a / 10);
          if (f === 0) {
            return r;
          } else if (f <= h) {
            if (c[f - 1] === undefined) {
              return i.charAt(1);
            } else {
              return c[f - 1] + i.charAt(1);
            }
          } else {
            return r;
          }
        }
        s = c[a - 1];
    }
    if (s === undefined) {
      return "";
    } else {
      return s;
    }
  });
};