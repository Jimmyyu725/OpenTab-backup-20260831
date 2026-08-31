var r = require("./23.js");
var o = require("./90.js");
var i = require("./253.js").indexOf;
var s = require("./101.js");
module.exports = function (t, e) {
  var n;
  var a = o(t);
  var c = 0;
  var u = [];
  for (n in a) {
    if (!r(s, n) && r(a, n)) {
      u.push(n);
    }
  }
  while (e.length > c) {
    if (r(a, n = e[c++])) {
      if (!~i(u, n)) {
        u.push(n);
      }
    }
  }
  return u;
};