var r = require("./78.js");
var i = Math.floor;
var o = "".replace;
var s = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var a = /\$([$&'`]|\d{1,2})/g;
module.exports = function (t, e, n, c, u, l) {
  var h = n + t.length;
  var p = c.length;
  var d = a;
  if (u !== undefined) {
    u = r(u);
    d = s;
  }
  return o.call(l, d, function (r, o) {
    var s;
    switch (o.charAt(0)) {
      case "$":
        return "$";
      case "&":
        return t;
      case "`":
        return e.slice(0, n);
      case "'":
        return e.slice(h);
      case "<":
        s = u[o.slice(1, -1)];
        break;
      default:
        var a = +o;
        if (a === 0) {
          return r;
        }
        if (a > p) {
          var l = i(a / 10);
          if (l === 0) {
            return r;
          } else if (l <= p) {
            if (c[l - 1] === undefined) {
              return o.charAt(1);
            } else {
              return c[l - 1] + o.charAt(1);
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