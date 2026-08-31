var r = require("./78.js");
var i = Math.floor;
var o = "".replace;
var a = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var s = /\$([$&'`]|\d{1,2})/g;
module.exports = function (t, e, n, c, u, l) {
  var f = n + t.length;
  var h = c.length;
  var p = s;
  if (u !== undefined) {
    u = r(u);
    p = a;
  }
  return o.call(l, p, function (r, o) {
    var a;
    switch (o.charAt(0)) {
      case "$":
        return "$";
      case "&":
        return t;
      case "`":
        return e.slice(0, n);
      case "'":
        return e.slice(f);
      case "<":
        a = u[o.slice(1, -1)];
        break;
      default:
        var s = +o;
        if (s === 0) {
          return r;
        }
        if (s > h) {
          var l = i(s / 10);
          if (l === 0) {
            return r;
          } else if (l <= h) {
            if (c[l - 1] === undefined) {
              return o.charAt(1);
            } else {
              return c[l - 1] + o.charAt(1);
            }
          } else {
            return r;
          }
        }
        a = c[s - 1];
    }
    if (a === undefined) {
      return "";
    } else {
      return a;
    }
  });
};