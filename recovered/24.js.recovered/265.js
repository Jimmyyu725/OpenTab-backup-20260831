var r = require(/*webcrack:missing*/"./78.js");
var o = Math.floor;
var i = "".replace;
var s = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var a = /\$([$&'`]|\d{1,2})/g;
module.exports = function (t, e, n, c, u, l) {
  var h = n + t.length;
  var p = c.length;
  var f = a;
  if (u !== undefined) {
    u = r(u);
    f = s;
  }
  return i.call(l, f, function (r, i) {
    var s;
    switch (i.charAt(0)) {
      case "$":
        return "$";
      case "&":
        return t;
      case "`":
        return e.slice(0, n);
      case "'":
        return e.slice(h);
      case "<":
        s = u[i.slice(1, -1)];
        break;
      default:
        var a = +i;
        if (a === 0) {
          return r;
        }
        if (a > p) {
          var l = o(a / 10);
          if (l === 0) {
            return r;
          } else if (l <= p) {
            if (c[l - 1] === undefined) {
              return i.charAt(1);
            } else {
              return c[l - 1] + i.charAt(1);
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