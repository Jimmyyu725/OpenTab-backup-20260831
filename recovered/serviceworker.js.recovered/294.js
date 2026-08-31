var r = require("./30.js");
var o = require("./61.js");
var i = require("./295.js").indexOf;
var s = require("./116.js");
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