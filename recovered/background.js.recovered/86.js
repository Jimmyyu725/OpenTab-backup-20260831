var r = require("./11.js");
var o = require("./39.js");
var i = require("./116.js").indexOf;
var s = require("./55.js");
module.exports = function (t, e) {
  var n;
  var a = o(t);
  var u = 0;
  var c = [];
  for (n in a) {
    if (!r(s, n) && r(a, n)) {
      c.push(n);
    }
  }
  while (e.length > u) {
    if (r(a, n = e[u++])) {
      if (!~i(c, n)) {
        c.push(n);
      }
    }
  }
  return c;
};