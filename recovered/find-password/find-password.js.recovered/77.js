var r = require("./4.js");
var o = require("./38.js").f;
var i = require("./20.js");
var c = require("./26.js");
var u = require("./40.js");
var a = require("./113.js");
var f = require("./60.js");
module.exports = function (t, n) {
  var e;
  var s;
  var p;
  var l;
  var v;
  var h = t.target;
  var d = t.global;
  var y = t.stat;
  if (e = d ? r : y ? r[h] || u(h, {}) : (r[h] || {}).prototype) {
    for (s in n) {
      l = n[s];
      p = t.noTargetGet ? (v = o(e, s)) && v.value : e[s];
      if (!f(d ? s : h + (y ? "." : "#") + s, t.forced) && p !== undefined) {
        if (typeof l == typeof p) {
          continue;
        }
        a(l, p);
      }
      if (t.sham || p && p.sham) {
        i(l, "sham", true);
      }
      c(e, s, l, t);
    }
  }
};