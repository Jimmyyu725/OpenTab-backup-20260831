var r;
var o;
var i;
var c = require("./293.js");
var u = require("./14.js");
var a = require("./45.js");
var s = require("./30.js");
var f = require("./37.js");
var l = require("./142.js");
var p = require("./141.js");
var v = require("./145.js");
var d = u.WeakMap;
if (c || l.state) {
  var h = l.state ||= new d();
  var y = h.get;
  var g = h.has;
  var m = h.set;
  r = function (t, n) {
    if (g.call(h, t)) {
      throw new TypeError("Object already initialized");
    }
    n.facade = t;
    m.call(h, t, n);
    return n;
  };
  o = function (t) {
    return y.call(h, t) || {};
  };
  i = function (t) {
    return g.call(h, t);
  };
} else {
  var x = p("state");
  v[x] = true;
  r = function (t, n) {
    if (f(t, x)) {
      throw new TypeError("Object already initialized");
    }
    n.facade = t;
    s(t, x, n);
    return n;
  };
  o = function (t) {
    if (f(t, x)) {
      return t[x];
    } else {
      return {};
    }
  };
  i = function (t) {
    return f(t, x);
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
    return function (n) {
      var e;
      if (!a(n) || (e = o(n)).type !== t) {
        throw TypeError("Incompatible receiver, " + t + " required");
      }
      return e;
    };
  }
};