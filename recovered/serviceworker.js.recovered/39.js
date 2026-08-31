var r = require("./5.js");
var o = require("./37.js");
var i = require("./23.js");
var s = require("./93.js");
var a = require("./94.js");
var c = require("./96.js");
var u = c.get;
var f = c.enforce;
var l = String(String).split("String");
(module.exports = function (t, e, n, a) {
  var u = !!a && !!a.unsafe;
  var h = !!a && !!a.enumerable;
  var p = !!a && !!a.noTargetGet;
  if (typeof n == "function") {
    if (typeof e == "string" && !i(n, "name")) {
      o(n, "name", e);
    }
    f(n).source ||= l.join(typeof e == "string" ? e : "");
  }
  if (t !== r) {
    if (u) {
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
  return typeof this == "function" && u(this).source || a(this);
});