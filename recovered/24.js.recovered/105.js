var r;
var o;
var i;
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
  var y = g.get;
  var m = g.has;
  var b = g.set;
  r = function (t, e) {
    if (m.call(g, t)) {
      throw new TypeError("Object already initialized");
    }
    e.facade = t;
    b.call(g, t, e);
    return e;
  };
  o = function (t) {
    return y.call(g, t) || {};
  };
  i = function (t) {
    return m.call(g, t);
  };
} else {
  var w = p("state");
  f[w] = true;
  r = function (t, e) {
    if (l(t, w)) {
      throw new TypeError("Object already initialized");
    }
    e.facade = t;
    u(t, w, e);
    return e;
  };
  o = function (t) {
    if (l(t, w)) {
      return t[w];
    } else {
      return {};
    }
  };
  i = function (t) {
    return l(t, w);
  };
}
module.exports = {
  set: r,
  get: o,
  has: i,
  enforce: function (t) {
    if (i(t)) {
      return o(t);
    } else {
      return r(t, {});
    }
  },
  getterFor: function (t) {
    return function (e) {
      var n;
      if (!c(e) || (n = o(e)).type !== t) {
        throw TypeError("Incompatible receiver, " + t + " required");
      }
      return n;
    };
  }
};