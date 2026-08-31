var r = require("./11.js");
var i = require("./39.js");
var o = require("./116.js").indexOf;
var a = require("./55.js");
module.exports = function (t, e) {
  var n;
  var s = i(t);
  var c = 0;
  var u = [];
  for (n in s) {
    if (!r(a, n) && r(s, n)) {
      u.push(n);
    }
  }
  while (e.length > c) {
    if (r(s, n = e[c++])) {
      if (!~o(u, n)) {
        u.push(n);
      }
    }
  }
  return u;
};