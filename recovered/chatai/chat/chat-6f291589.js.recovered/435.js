var i = require("./2334.js");
var s = require("./1010.js");
var r = require("./6805.js");
var a = require("./5683.js");
var o = require("./6566.js");
var u = require("./9562.js");
var g = require("./5872.js");
var h = i.RangeError;
var c = i.Int8Array;
var l = c && c.prototype;
var d = l && l.set;
var F = r.aTypedArray;
var f = r.exportTypedArrayMethod;
var C = !g(function () {
  var e = new Uint8ClampedArray(2);
  s(d, e, {
    length: 1,
    0: 3
  }, 1);
  return e[1] !== 3;
});
var p = C && r.NATIVE_ARRAY_BUFFER_VIEWS && g(function () {
  var e = new c(2);
  e.set(1);
  e.set("2", 1);
  return e[0] !== 0 || e[1] !== 2;
});
f("set", function (e) {
  F(this);
  var t = o(arguments.length > 1 ? arguments[1] : undefined, 1);
  var n = u(e);
  if (C) {
    return s(d, this, n, t);
  }
  var i = this.length;
  var r = a(n);
  var g = 0;
  if (r + t > i) {
    throw h("Wrong length");
  }
  while (g < r) {
    this[t + g] = n[g++];
  }
}, !C || p);