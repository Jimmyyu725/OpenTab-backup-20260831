var i = require("./2334.js");
var s = require("./4351.js");
var r = require("./2469.js");
var a = require("./9213.js");
var o = require("./8832.js");
var u = require("./987.js");
var g = require("./4912.js");
var h = require("./8906.js").CONFIGURABLE;
var c = g.get;
var l = g.enforce;
var d = String(String).split("String");
(module.exports = function (e, t, n, u) {
  var c = !!u && !!u.unsafe;
  var F = !!u && !!u.enumerable;
  var f = !!u && !!u.noTargetGet;
  var C = u && u.name !== undefined ? u.name : t;
  if (s(n)) {
    if (String(C).slice(0, 7) === "Symbol(") {
      C = "[" + String(C).replace(/^Symbol\(([^)]*)\)/, "$1") + "]";
    }
    if (!r(n, "name") || h && n.name !== C) {
      a(n, "name", C);
    }
    l(n).source ||= d.join(typeof C == "string" ? C : "");
  }
  if (e !== i) {
    if (c) {
      if (!f && e[t]) {
        F = true;
      }
    } else {
      delete e[t];
    }
    if (F) {
      e[t] = n;
    } else {
      a(e, t, n);
    }
  } else if (F) {
    e[t] = n;
  } else {
    o(t, n);
  }
})(Function.prototype, "toString", function () {
  return s(this) && c(this).source || u(this);
});