var r;
var o;
var i;
var s = require("./301.js");
var a = require("./7.js");
var c = require("./29.js");
var u = require("./19.js");
var f = require("./30.js");
var l = require("./112.js");
var h = require("./111.js");
var p = require("./116.js");
var d = a.WeakMap;
if (s || l.state) {
  var y = l.state ||= new d();
  var m = y.get;
  var g = y.has;
  var v = y.set;
  r = function (t, e) {
    if (g.call(y, t)) {
      throw new TypeError("Object already initialized");
    }
    e.facade = t;
    v.call(y, t, e);
    return e;
  };
  o = function (t) {
    return m.call(y, t) || {};
  };
  i = function (t) {
    return g.call(y, t);
  };
} else {
  var b = h("state");
  p[b] = true;
  r = function (t, e) {
    if (f(t, b)) {
      throw new TypeError("Object already initialized");
    }
    e.facade = t;
    u(t, b, e);
    return e;
  };
  o = function (t) {
    if (f(t, b)) {
      return t[b];
    } else {
      return {};
    }
  };
  i = function (t) {
    return f(t, b);
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