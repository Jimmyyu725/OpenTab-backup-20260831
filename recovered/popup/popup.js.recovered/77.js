var r = require("./4.js");
var i = require("./38.js").f;
var o = require("./20.js");
var s = require("./26.js");
var a = require("./40.js");
var c = require("./113.js");
var u = require("./60.js");
module.exports = function (t, e) {
  var n;
  var l;
  var h;
  var p;
  var d;
  var f = t.target;
  var g = t.global;
  var y = t.stat;
  if (n = g ? r : y ? r[f] || a(f, {}) : (r[f] || {}).prototype) {
    for (l in e) {
      p = e[l];
      h = t.noTargetGet ? (d = i(n, l)) && d.value : n[l];
      if (!u(g ? l : f + (y ? "." : "#") + l, t.forced) && h !== undefined) {
        if (typeof p == typeof h) {
          continue;
        }
        c(p, h);
      }
      if (t.sham || h && h.sham) {
        o(p, "sham", true);
      }
      s(n, l, p, t);
    }
  }
};