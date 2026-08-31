var r = require("./23.js");
var o = require("./250.js");
var i = require("./89.js");
var s = require("./38.js");
module.exports = function (t, e) {
  for (var n = o(e), a = s.f, c = i.f, u = 0; u < n.length; u++) {
    var f = n[u];
    if (!r(t, f)) {
      a(t, f, c(e, f));
    }
  }
};