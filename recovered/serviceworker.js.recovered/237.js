var r = require("./456.js");
var o = require("./459.js");
var i = require("./460.js");
module.exports = function (t, e, n, s, a, c) {
  var u = n & 1;
  var f = t.length;
  var l = e.length;
  if (f != l && (!u || !(l > f))) {
    return false;
  }
  var h = c.get(t);
  var p = c.get(e);
  if (h && p) {
    return h == e && p == t;
  }
  var d = -1;
  var y = true;
  var m = n & 2 ? new r() : undefined;
  c.set(t, e);
  c.set(e, t);
  while (++d < f) {
    var g = t[d];
    var v = e[d];
    if (s) {
      var b = u ? s(v, g, d, e, t, c) : s(g, v, d, t, e, c);
    }
    if (b !== undefined) {
      if (b) {
        continue;
      }
      y = false;
      break;
    }
    if (m) {
      if (!o(e, function (t, e) {
        if (!i(m, e) && (g === t || a(g, t, n, s, c))) {
          return m.push(e);
        }
      })) {
        y = false;
        break;
      }
    } else if (g !== v && !a(g, v, n, s, c)) {
      y = false;
      break;
    }
  }
  c.delete(t);
  c.delete(e);
  return y;
};