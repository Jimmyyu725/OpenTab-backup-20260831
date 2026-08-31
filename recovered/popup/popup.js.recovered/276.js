var r = require("./37.js");
var i = require("./96.js");
var o = require("./277.js").indexOf;
var s = require("./145.js");
module.exports = function (t, e) {
  var n;
  var a = i(t);
  var c = 0;
  var u = [];
  for (n in a) {
    if (!r(s, n) && r(a, n)) {
      u.push(n);
    }
  }
  while (e.length > c) {
    if (r(a, n = e[c++])) {
      if (!~o(u, n)) {
        u.push(n);
      }
    }
  }
  return u;
};