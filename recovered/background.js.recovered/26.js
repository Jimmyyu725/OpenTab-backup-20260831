var r = require("./4.js");
var o = require("./20.js");
var i = require("./11.js");
var s = require("./40.js");
var a = require("./41.js");
var u = require("./49.js");
var c = u.get;
var f = u.enforce;
var l = String(String).split("String");
(module.exports = function (t, e, n, a) {
  var c = !!a && !!a.unsafe;
  var h = !!a && !!a.enumerable;
  var p = !!a && !!a.noTargetGet;
  if (typeof n == "function") {
    if (typeof e == "string" && !i(n, "name")) {
      o(n, "name", e);
    }
    f(n).source ||= l.join(typeof e == "string" ? e : "");
  }
  if (t !== r) {
    if (c) {
      if (!p && t[e]) {
        h = true;
      }
    } else {
      delete t[e];
    }
    if (h) {
      t[e] = n;
    } else {
      o(t, e, n);
    }
  } else if (h) {
    t[e] = n;
  } else {
    s(e, n);
  }
})(Function.prototype, "toString", function () {
  return typeof this == "function" && c(this).source || a(this);
});