var n = require("./415.js");
var o = require("./543.js");
var c = require("./544.js");
var i = require("./545.js");
var a = require("./546.js");
module.exports = function (t, e, r) {
  var u = t.constructor;
  switch (e) {
    case "[object ArrayBuffer]":
      return n(t);
    case "[object Boolean]":
    case "[object Date]":
      return new u(+t);
    case "[object DataView]":
      return o(t, r);
    case "[object Float32Array]":
    case "[object Float64Array]":
    case "[object Int8Array]":
    case "[object Int16Array]":
    case "[object Int32Array]":
    case "[object Uint8Array]":
    case "[object Uint8ClampedArray]":
    case "[object Uint16Array]":
    case "[object Uint32Array]":
      return a(t, r);
    case "[object Map]":
      return new u();
    case "[object Number]":
    case "[object String]":
      return new u(t);
    case "[object RegExp]":
      return c(t);
    case "[object Set]":
      return new u();
    case "[object Symbol]":
      return i(t);
  }
};