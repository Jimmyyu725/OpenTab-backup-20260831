var r = require("./78.js");
var o = Math.floor;
var i = "".replace;
var c = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var u = /\$([$&'`]|\d{1,2})/g;
module.exports = function (t, n, e, a, s, f) {
  var l = e + t.length;
  var p = a.length;
  var v = u;
  if (s !== undefined) {
    s = r(s);
    v = c;
  }
  return i.call(f, v, function (r, i) {
    var c;
    switch (i.charAt(0)) {
      case "$":
        return "$";
      case "&":
        return t;
      case "`":
        return n.slice(0, e);
      case "'":
        return n.slice(l);
      case "<":
        c = s[i.slice(1, -1)];
        break;
      default:
        var u = +i;
        if (u === 0) {
          return r;
        }
        if (u > p) {
          var f = o(u / 10);
          if (f === 0) {
            return r;
          } else if (f <= p) {
            if (a[f - 1] === undefined) {
              return i.charAt(1);
            } else {
              return a[f - 1] + i.charAt(1);
            }
          } else {
            return r;
          }
        }
        c = a[u - 1];
    }
    if (c === undefined) {
      return "";
    } else {
      return c;
    }
  });
};