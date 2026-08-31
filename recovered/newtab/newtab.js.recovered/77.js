var r = require("./4.js");
var i = require("./38.js").f;
var o = require("./20.js");
var a = require("./26.js");
var s = require("./40.js");
var c = require("./113.js");
var u = require("./60.js");
module.exports = function (t, e) {
  var n;
  var l;
  var f;
  var h;
  var p;
  var d = t.target;
  var m = t.global;
  var g = t.stat;
  if (n = m ? r : g ? r[d] || s(d, {}) : (r[d] || {}).prototype) {
    for (l in e) {
      h = e[l];
      f = t.noTargetGet ? (p = i(n, l)) && p.value : n[l];
      if (!u(m ? l : d + (g ? "." : "#") + l, t.forced) && f !== undefined) {
        if (typeof h == typeof f) {
          continue;
        }
        c(h, f);
      }
      if (t.sham || f && f.sham) {
        o(h, "sham", true);
      }
      a(n, l, h, t);
    }
  }
};