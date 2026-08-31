var r = require("./4.js");
var i = require("./20.js");
var o = require("./11.js");
var s = require("./40.js");
var a = require("./41.js");
var c = require("./49.js");
var u = c.get;
var l = c.enforce;
var h = String(String).split("String");
(module.exports = function (t, e, n, a) {
  var u = !!a && !!a.unsafe;
  var p = !!a && !!a.enumerable;
  var d = !!a && !!a.noTargetGet;
  if (typeof n == "function") {
    if (typeof e == "string" && !o(n, "name")) {
      i(n, "name", e);
    }
    l(n).source ||= h.join(typeof e == "string" ? e : "");
  }
  if (t !== r) {
    if (u) {
      if (!d && t[e]) {
        p = true;
      }
    } else {
      delete t[e];
    }
    if (p) {
      t[e] = n;
    } else {
      i(t, e, n);
    }
  } else if (p) {
    t[e] = n;
  } else {
    s(e, n);
  }
})(Function.prototype, "toString", function () {
  return typeof this == "function" && u(this).source || a(this);
});