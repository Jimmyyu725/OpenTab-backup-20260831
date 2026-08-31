var r = require("./11.js");
var o = require("./114.js");
var i = require("./38.js");
var c = require("./21.js");
module.exports = function (t, n) {
  for (var e = o(n), u = c.f, a = i.f, f = 0; f < e.length; f++) {
    var s = e[f];
    if (!r(t, s)) {
      u(t, s, a(n, s));
    }
  }
};