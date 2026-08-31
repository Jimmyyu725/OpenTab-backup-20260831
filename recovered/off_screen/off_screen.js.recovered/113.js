var r = require("./11.js");
var o = require("./114.js");
var i = require("./38.js");
var c = require("./21.js");
module.exports = function (t, n) {
  for (var e = o(n), u = c.f, a = i.f, s = 0; s < e.length; s++) {
    var f = e[s];
    if (!r(t, f)) {
      u(t, f, a(n, f));
    }
  }
};