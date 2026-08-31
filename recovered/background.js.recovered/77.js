var r = require("./4.js");
var o = require("./38.js").f;
var i = require("./20.js");
var s = require("./26.js");
var a = require("./40.js");
var u = require("./113.js");
var c = require("./60.js");
module.exports = function (t, e) {
  var n;
  var f;
  var l;
  var h;
  var p;
  var d = t.target;
  var y = t.global;
  var m = t.stat;
  if (n = y ? r : m ? r[d] || a(d, {}) : (r[d] || {}).prototype) {
    for (f in e) {
      h = e[f];
      l = t.noTargetGet ? (p = o(n, f)) && p.value : n[f];
      if (!c(y ? f : d + (m ? "." : "#") + f, t.forced) && l !== undefined) {
        if (typeof h == typeof l) {
          continue;
        }
        u(h, l);
      }
      if (t.sham || l && l.sham) {
        i(h, "sham", true);
      }
      s(n, f, h, t);
    }
  }
};