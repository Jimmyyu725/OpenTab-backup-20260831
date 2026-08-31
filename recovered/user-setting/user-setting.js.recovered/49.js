var r;
var o;
var i;
var c = require("./112.js");
var u = require("./4.js");
var a = require("./12.js");
var f = require("./20.js");
var s = require("./11.js");
var p = require("./42.js");
var l = require("./79.js");
var v = require("./55.js");
var h = u.WeakMap;
if (c || p.state) {
  var d = p.state ||= new h();
  var y = d.get;
  var m = d.has;
  var g = d.set;
  r = function (t, n) {
    if (m.call(d, t)) {
      throw new TypeError("Object already initialized");
    }
    n.facade = t;
    g.call(d, t, n);
    return n;
  };
  o = function (t) {
    return y.call(d, t) || {};
  };
  i = function (t) {
    return m.call(d, t);
  };
} else {
  var x = l("state");
  v[x] = true;
  r = function (t, n) {
    if (s(t, x)) {
      throw new TypeError("Object already initialized");
    }
    n.facade = t;
    f(t, x, n);
    return n;
  };
  o = function (t) {
    if (s(t, x)) {
      return t[x];
    } else {
      return {};
    }
  };
  i = function (t) {
    return s(t, x);
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