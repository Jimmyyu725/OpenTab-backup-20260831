var r = require("./4.js");
var o = require("./38.js").f;
var i = require("./20.js");
var c = require("./26.js");
var u = require("./40.js");
var a = require("./113.js");
var s = require("./60.js");
module.exports = function (t, n) {
  var e;
  var f;
  var l;
  var p;
  var v;
  var d = t.target;
  var h = t.global;
  var y = t.stat;
  if (e = h ? r : y ? r[d] || u(d, {}) : (r[d] || {}).prototype) {
    for (f in n) {
      p = n[f];
      l = t.noTargetGet ? (v = o(e, f)) && v.value : e[f];
      if (!s(h ? f : d + (y ? "." : "#") + f, t.forced) && l !== undefined) {
        if (typeof p == typeof l) {
          continue;
        }
        a(p, l);
      }
      if (t.sham || l && l.sham) {
        i(p, "sham", true);
      }
      c(e, f, p, t);
    }
  }
};