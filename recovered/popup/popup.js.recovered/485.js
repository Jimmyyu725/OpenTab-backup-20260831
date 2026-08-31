var r = require("./486.js");
var i = require("./514.js");
var o = require("./441.js");
var s = require("./516.js");
var a = require("./526.js");
var c = require("./529.js");
var u = require("./530.js");
var l = require("./531.js");
var h = require("./533.js");
var p = require("./534.js");
var d = require("./535.js");
var f = require("./414.js");
var g = require("./540.js");
var y = require("./541.js");
var m = require("./547.js");
var b = require("./407.js");
var v = require("./444.js");
var w = require("./549.js");
var x = require("./209.js");
var _ = require("./551.js");
var O = require("./406.js");
var T = require("./412.js");
var S = {};
S["[object Arguments]"] = S["[object Array]"] = S["[object ArrayBuffer]"] = S["[object DataView]"] = S["[object Boolean]"] = S["[object Date]"] = S["[object Float32Array]"] = S["[object Float64Array]"] = S["[object Int8Array]"] = S["[object Int16Array]"] = S["[object Int32Array]"] = S["[object Map]"] = S["[object Number]"] = S["[object Object]"] = S["[object RegExp]"] = S["[object Set]"] = S["[object String]"] = S["[object Symbol]"] = S["[object Uint8Array]"] = S["[object Uint8ClampedArray]"] = S["[object Uint16Array]"] = S["[object Uint32Array]"] = true;
S["[object Error]"] = S["[object Function]"] = S["[object WeakMap]"] = false;
module.exports = function t(e, n, E, j, k, A) {
  var C;
  var I = n & 1;
  var P = n & 2;
  var D = n & 4;
  if (E) {
    C = k ? E(e, j, k, A) : E(e);
  }
  if (C !== undefined) {
    return C;
  }
  if (!x(e)) {
    return e;
  }
  var R = b(e);
  if (R) {
    C = g(e);
    if (!I) {
      return u(e, C);
    }
  } else {
    var N = f(e);
    var L = N == "[object Function]" || N == "[object GeneratorFunction]";
    if (v(e)) {
      return c(e, I);
    }
    if (N == "[object Object]" || N == "[object Arguments]" || L && !k) {
      C = P || L ? {} : m(e);
      if (!I) {
        if (P) {
          return h(e, a(C, e));
        } else {
          return l(e, s(C, e));
        }
      }
    } else {
      if (!S[N]) {
        if (k) {
          return e;
        } else {
          return {};
        }
      }
      C = y(e, N, I);
    }
  }
  A ||= new r();
  var M = A.get(e);
  if (M) {
    return M;
  }
  A.set(e, C);
  if (_(e)) {
    e.forEach(function (r) {
      C.add(t(r, n, E, r, e, A));
    });
  } else if (w(e)) {
    e.forEach(function (r, i) {
      C.set(i, t(r, n, E, i, e, A));
    });
  }
  var B = R ? undefined : (D ? P ? d : p : P ? T : O)(e);
  i(B || e, function (r, i) {
    if (B) {
      r = e[i = r];
    }
    o(C, i, t(r, n, E, i, e, A));
  });
  return C;
};