var r;
var i;
var o;
var a = require("./112.js");
var s = require("./4.js");
var c = require("./12.js");
var u = require("./20.js");
var l = require("./11.js");
var f = require("./42.js");
var h = require("./79.js");
var p = require("./55.js");
var d = s.WeakMap;
if (a || f.state) {
  var m = f.state ||= new d();
  var g = m.get;
  var y = m.has;
  var b = m.set;
  r = function (t, e) {
    if (y.call(m, t)) {
      throw new TypeError("Object already initialized");
    }
    e.facade = t;
    b.call(m, t, e);
    return e;
  };
  i = function (t) {
    return g.call(m, t) || {};
  };
  o = function (t) {
    return y.call(m, t);
  };
} else {
  var w = h("state");
  p[w] = true;
  r = function (t, e) {
    if (l(t, w)) {
      throw new TypeError("Object already initialized");
    }
    e.facade = t;
    u(t, w, e);
    return e;
  };
  i = function (t) {
    if (l(t, w)) {
      return t[w];
    } else {
      return {};
    }
  };
  o = function (t) {
    return l(t, w);
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