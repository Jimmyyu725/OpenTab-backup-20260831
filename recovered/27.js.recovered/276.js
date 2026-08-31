var e = require("./37.js");
var o = require("./96.js");
var i = require("./277.js").indexOf;
var c = require("./145.js");
module.exports = function (t, n) {
  var r;
  var u = o(t);
  var a = 0;
  var f = [];
  for (r in u) {
    if (!e(c, r) && e(u, r)) {
      f.push(r);
    }
  }
  while (n.length > a) {
    if (e(u, r = n[a++])) {
      if (!~i(f, r)) {
        f.push(r);
      }
    }
  }
  return f;
};