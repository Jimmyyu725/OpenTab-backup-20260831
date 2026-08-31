var r = require("./4.js");
var o = require("./20.js");
var i = require("./11.js");
var c = require("./40.js");
var u = require("./41.js");
var a = require("./49.js");
var f = a.get;
var s = a.enforce;
var p = String(String).split("String");
(module.exports = function (t, n, e, u) {
  var f = !!u && !!u.unsafe;
  var l = !!u && !!u.enumerable;
  var v = !!u && !!u.noTargetGet;
  if (typeof e == "function") {
    if (typeof n == "string" && !i(e, "name")) {
      o(e, "name", n);
    }
    s(e).source ||= p.join(typeof n == "string" ? n : "");
  }
  if (t !== r) {
    if (f) {
      if (!v && t[n]) {
        l = true;
      }
    } else {
      delete t[n];
    }
    if (l) {
      t[n] = e;
    } else {
      o(t, n, e);
    }
  } else if (l) {
    t[n] = e;
  } else {
    c(n, e);
  }
})(Function.prototype, "toString", function () {
  return typeof this == "function" && f(this).source || u(this);
});