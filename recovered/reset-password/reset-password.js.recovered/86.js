var r = require("./11.js");
var o = require("./39.js");
var i = require("./116.js").indexOf;
var c = require("./55.js");
module.exports = function (t, n) {
  var e;
  var u = o(t);
  var a = 0;
  var f = [];
  for (e in u) {
    if (!r(c, e) && r(u, e)) {
      f.push(e);
    }
  }
  while (n.length > a) {
    if (r(u, e = n[a++])) {
      if (!~i(f, e)) {
        f.push(e);
      }
    }
  }
  return f;
};