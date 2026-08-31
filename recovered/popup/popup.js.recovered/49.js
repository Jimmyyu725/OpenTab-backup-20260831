var r;
var i;
var o;
var s = require("./112.js");
var a = require("./4.js");
var c = require("./12.js");
var u = require("./20.js");
var l = require("./11.js");
var h = require("./42.js");
var p = require("./79.js");
var d = require("./55.js");
var f = a.WeakMap;
if (s || h.state) {
  var g = h.state ||= new f();
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
  i = function (t) {
    return y.call(g, t) || {};
  };
  o = function (t) {
    return m.call(g, t);
  };
} else {
  var v = p("state");
  d[v] = true;
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