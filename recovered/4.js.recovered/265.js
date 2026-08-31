var r = require(/*webcrack:missing*/"./78.js");
var o = Math.floor;
var i = "".replace;
var a = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var u = /\$([$&'`]|\d{1,2})/g;
module.exports = function (e, t, n, c, s, f) {
  var l = n + e.length;
  var d = c.length;
  var h = u;
  if (s !== undefined) {
    s = r(s);
    h = a;
  }
  return i.call(f, h, function (r, i) {
    var a;
    switch (i.charAt(0)) {
      case "$":
        return "$";
      case "&":
        return e;
      case "`":
        return t.slice(0, n);
      case "'":
        return t.slice(l);
      case "<":
        a = s[i.slice(1, -1)];
        break;
      default:
        var u = +i;
        if (u === 0) {
          return r;
        }
        if (u > d) {
          var f = o(u / 10);
          if (f === 0) {
            return r;
          } else if (f <= d) {
            if (c[f - 1] === undefined) {
              return i.charAt(1);
            } else {
              return c[f - 1] + i.charAt(1);
            }
          } else {
            return r;
          }
        }
        a = c[u - 1];
    }
    if (a === undefined) {
      return "";
    } else {
      return a;
    }
  });
};