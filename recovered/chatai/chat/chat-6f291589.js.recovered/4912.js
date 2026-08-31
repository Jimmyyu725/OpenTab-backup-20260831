var i;
var s;
var r;
var a = require("./8615.js");
var o = require("./2334.js");
var u = require("./7871.js");
var g = require("./8064.js");
var h = require("./9213.js");
var c = require("./2469.js");
var l = require("./2992.js");
var d = require("./7376.js");
var F = require("./6643.js");
var f = "Object already initialized";
var C = o.TypeError;
var p = o.WeakMap;
if (a || l.state) {
  var y = l.state ||= new p();
  var A = u(y.get);
  var E = u(y.has);
  var _ = u(y.set);
  i = function (e, t) {
    if (E(y, e)) {
      throw new C(f);
    }
    t.facade = e;
    _(y, e, t);
    return t;
  };
  s = function (e) {
    return A(y, e) || {};
  };
  r = function (e) {
    return E(y, e);
  };
} else {
  var D = d("state");
  F[D] = true;
  i = function (e, t) {
    if (c(e, D)) {
      throw new C(f);
    }
    t.facade = e;
    h(e, D, t);
    return t;
  };
  s = function (e) {
    if (c(e, D)) {
      return e[D];
    } else {
      return {};
    }
  };
  r = function (e) {
    return c(e, D);
  };
}
module.exports = {
  set: i,
  get: s,
  has: r,
  enforce: function (e) {
    if (r(e)) {
      return s(e);
    } else {
      return i(e, {});
    }
  },
  getterFor: function (e) {
    return function (t) {
      var n;
      if (!g(t) || (n = s(t)).type !== e) {
        throw C("Incompatible receiver, " + e + " required");
      }
      return n;
    };
  }
};