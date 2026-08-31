var r = require("./4.js");
var o = require("./20.js");
var i = require("./11.js");
var c = require("./40.js");
var u = require("./41.js");
var a = require("./49.js");
var s = a.get;
var f = a.enforce;
var l = String(String).split("String");
(module.exports = function (t, n, e, u) {
  var s = !!u && !!u.unsafe;
  var p = !!u && !!u.enumerable;
  var v = !!u && !!u.noTargetGet;
  if (typeof e == "function") {
    if (typeof n == "string" && !i(e, "name")) {
      o(e, "name", n);
    }
    f(e).source ||= l.join(typeof n == "string" ? n : "");
  }
  if (t !== r) {
    if (s) {
      if (!v && t[n]) {
        p = true;
      }
    } else {
      delete t[n];
    }
    if (p) {
      t[n] = e;
    } else {
      o(t, n, e);
    }
  } else if (p) {
    t[n] = e;
  } else {
    c(n, e);
  }
})(Function.prototype, "toString", function () {
  return typeof this == "function" && s(this).source || u(this);
});