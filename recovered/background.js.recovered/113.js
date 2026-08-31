var r = require("./11.js");
var o = require("./114.js");
var i = require("./38.js");
var s = require("./21.js");
module.exports = function (t, e) {
  for (var n = o(e), a = s.f, u = i.f, c = 0; c < n.length; c++) {
    var f = n[c];
    if (!r(t, f)) {
      a(t, f, u(e, f));
    }
  }
};