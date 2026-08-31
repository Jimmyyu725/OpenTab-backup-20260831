var n = require("./486.js");
var o = require("./514.js");
var c = require("./441.js");
var i = require("./516.js");
var a = require("./526.js");
var u = require("./529.js");
var s = require("./530.js");
var f = require("./531.js");
var p = require("./533.js");
var l = require("./534.js");
var b = require("./535.js");
var v = require("./414.js");
var h = require("./540.js");
var y = require("./541.js");
var d = require("./547.js");
var j = require("./407.js");
var x = require("./444.js");
var _ = require("./549.js");
var g = require(/*webcrack:missing*/"./209.js");
var w = require("./551.js");
var m = require("./406.js");
var O = require("./412.js");
var A = {};
A["[object Arguments]"] = A["[object Array]"] = A["[object ArrayBuffer]"] = A["[object DataView]"] = A["[object Boolean]"] = A["[object Date]"] = A["[object Float32Array]"] = A["[object Float64Array]"] = A["[object Int8Array]"] = A["[object Int16Array]"] = A["[object Int32Array]"] = A["[object Map]"] = A["[object Number]"] = A["[object Object]"] = A["[object RegExp]"] = A["[object Set]"] = A["[object String]"] = A["[object Symbol]"] = A["[object Uint8Array]"] = A["[object Uint8ClampedArray]"] = A["[object Uint16Array]"] = A["[object Uint32Array]"] = true;
A["[object Error]"] = A["[object Function]"] = A["[object WeakMap]"] = false;
module.exports = function t(e, r, P, S, z, k) {
  var U;
  var M = r & 1;
  var F = r & 2;
  var E = r & 4;
  if (P) {
    U = z ? P(e, S, z, k) : P(e);
  }
  if (U !== undefined) {
    return U;
  }
  if (!g(e)) {
    return e;
  }
  var I = j(e);
  if (I) {
    U = h(e);
    if (!M) {
      return s(e, U);
    }
  } else {
    var B = v(e);
    var D = B == "[object Function]" || B == "[object GeneratorFunction]";
    if (x(e)) {
      return u(e, M);
    }
    if (B == "[object Object]" || B == "[object Arguments]" || D && !z) {
      U = F || D ? {} : d(e);
      if (!M) {
        if (F) {
          return p(e, a(U, e));
        } else {
          return f(e, i(U, e));
        }
      }
    } else {
      if (!A[B]) {
        if (z) {
          return e;
        } else {
          return {};
        }
      }
      U = y(e, B, M);
    }
  }
  k ||= new n();
  var T = k.get(e);
  if (T) {
    return T;
  }
  k.set(e, U);
  if (w(e)) {
    e.forEach(function (n) {
      U.add(t(n, r, P, n, e, k));
    });
  } else if (_(e)) {
    e.forEach(function (n, o) {
      U.set(o, t(n, r, P, o, e, k));
    });
  }
  var C = I ? undefined : (E ? F ? b : l : F ? O : m)(e);
  o(C || e, function (n, o) {
    if (C) {
      n = e[o = n];
    }
    c(U, o, t(n, r, P, o, e, k));
  });
  return U;
};