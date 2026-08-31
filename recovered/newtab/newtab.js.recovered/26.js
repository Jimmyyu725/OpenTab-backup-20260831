var r = require("./4.js");
var i = require("./20.js");
var o = require("./11.js");
var a = require("./40.js");
var s = require("./41.js");
var c = require("./49.js");
var u = c.get;
var l = c.enforce;
var f = String(String).split("String");
(module.exports = function (t, e, n, s) {
  var u = !!s && !!s.unsafe;
  var h = !!s && !!s.enumerable;
  var p = !!s && !!s.noTargetGet;
  if (typeof n == "function") {
    if (typeof e == "string" && !o(n, "name")) {
      i(n, "name", e);
    }
    l(n).source ||= f.join(typeof e == "string" ? e : "");
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
      i(t, e, n);
    }
  } else if (h) {
    t[e] = n;
  } else {
    a(e, n);
  }
})(Function.prototype, "toString", function () {
  return typeof this == "function" && u(this).source || s(this);
});