var e;
var o;
var i;
var c = require("./293.js");
var u = require("./14.js");
var a = require("./45.js");
var f = require("./30.js");
var s = require("./37.js");
var p = require("./142.js");
var l = require("./141.js");
var v = require("./145.js");
var h = u.WeakMap;
if (c || p.state) {
  var y = p.state ||= new h();
  var d = y.get;
  var g = y.has;
  var x = y.set;
  e = function (t, n) {
    if (g.call(y, t)) {
      throw new TypeError("Object already initialized");
    }
    n.facade = t;
    x.call(y, t, n);
    return n;
  };
  o = function (t) {
    return d.call(y, t) || {};
  };
  i = function (t) {
    return g.call(y, t);
  };
} else {
  var m = l("state");
  v[m] = true;
  e = function (t, n) {
    if (s(t, m)) {
      throw new TypeError("Object already initialized");
    }
    n.facade = t;
    f(t, m, n);
    return n;
  };
  o = function (t) {
    if (s(t, m)) {
      return t[m];
    } else {
      return {};
    }
  };
  i = function (t) {
    return s(t, m);
  };
}
module.exports = {
  set: e,
  get: o,
  has: i,
  enforce: function (t) {
    if (i(t)) {
      return o(t);
    } else {
      return e(t, {});
    }
  },
  getterFor: function (t) {
    return function (n) {
      var r;
      if (!a(n) || (r = o(n)).type !== t) {
        throw TypeError("Incompatible receiver, " + t + " required");
      }
      return r;
    };
  }
};