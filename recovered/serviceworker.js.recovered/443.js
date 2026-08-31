var r = require("./152.js");
var o = require("./444.js");
var i = require("./445.js");
var s = require("./446.js");
var a = require("./447.js");
module.exports = function (t, e, n) {
  var c = t.constructor;
  switch (e) {
    case "[object ArrayBuffer]":
      return r(t);
    case "[object Boolean]":
    case "[object Date]":
      return new c(+t);
    case "[object DataView]":
      return o(t, n);
    case "[object Float32Array]":
    case "[object Float64Array]":
    case "[object Int8Array]":
    case "[object Int16Array]":
    case "[object Int32Array]":
    case "[object Uint8Array]":
    case "[object Uint8ClampedArray]":
    case "[object Uint16Array]":
    case "[object Uint32Array]":
      return a(t, n);
    case "[object Map]":
      return new c();
    case "[object Number]":
    case "[object String]":
      return new c(t);
    case "[object RegExp]":
      return i(t);
    case "[object Set]":
      return new c();
    case "[object Symbol]":
      return s(t);
  }
};