var r = require("./11.js");
var i = require("./114.js");
var o = require("./38.js");
var a = require("./21.js");
module.exports = function (t, e) {
  for (var n = i(e), s = a.f, c = o.f, u = 0; u < n.length; u++) {
    var l = n[u];
    if (!r(t, l)) {
      s(t, l, c(e, l));
    }
  }
};