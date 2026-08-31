var r;
var i;
var o;
var s = require("./293.js");
var a = require("./14.js");
var c = require("./45.js");
var u = require("./30.js");
var l = require("./37.js");
var h = require("./142.js");
var p = require("./141.js");
var f = require("./145.js");
var d = a.WeakMap;
if (s || h.state) {
  var g = h.state ||= new d();
  var m = g.get;
  var y = g.has;
  var b = g.set;
  r = function (t, e) {
    if (y.call(g, t)) {
      throw new TypeError("Object already initialized");
    }
    e.facade = t;
    b.call(g, t, e);
    return e;
  };
  i = function (t) {
    return m.call(g, t) || {};
  };
  o = function (t) {
    return y.call(g, t);
  };
} else {
  var v = p("state");
  f[v] = true;
  r = function (t, e) {
    if (l(t, v)) {
      throw new TypeError("Object already initialized");
    }
    e.facade = t;
    u(t, v, e);
    return e;
  };
  i = function (t) {
    if (l(t, v)) {
      return t[v];
    } else {
      return {};
    }
  };
  o = function (t) {
    return l(t, v);
  };
}
module.exports = {
  set: r,
  get: i,
  has: o,
  enforce: function (t) {
    if (o(t)) {
      return i(t);
    } else {
      return r(t, {});
    }
  },
  getterFor: function (t) {
    return function (e) {
      var n;
      if (!c(e) || (n = i(e)).type !== t) {
        throw TypeError("Incompatible receiver, " + t + " required");
      }
      return n;
    };
  }
};