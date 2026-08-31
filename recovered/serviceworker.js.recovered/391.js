var r = require("./219.js");
var o = require("./418.js");
var i = require("./223.js");
var s = require("./420.js");
var a = require("./429.js");
var c = require("./432.js");
var u = require("./433.js");
var f = require("./434.js");
var l = require("./436.js");
var h = require("./234.js");
var p = require("./437.js");
var d = require("./81.js");
var y = require("./442.js");
var m = require("./443.js");
var g = require("./448.js");
var v = require("./80.js");
var b = require("./145.js");
var w = require("./450.js");
var _ = require("./31.js");
var x = require("./452.js");
var T = require("./144.js");
var E = require("./150.js");
var O = {};
O["[object Arguments]"] = O["[object Array]"] = O["[object ArrayBuffer]"] = O["[object DataView]"] = O["[object Boolean]"] = O["[object Date]"] = O["[object Float32Array]"] = O["[object Float64Array]"] = O["[object Int8Array]"] = O["[object Int16Array]"] = O["[object Int32Array]"] = O["[object Map]"] = O["[object Number]"] = O["[object Object]"] = O["[object RegExp]"] = O["[object Set]"] = O["[object String]"] = O["[object Symbol]"] = O["[object Uint8Array]"] = O["[object Uint8ClampedArray]"] = O["[object Uint16Array]"] = O["[object Uint32Array]"] = true;
O["[object Error]"] = O["[object Function]"] = O["[object WeakMap]"] = false;
module.exports = function t(e, n, S, I, A, N) {
  var j;
  var D = n & 1;
  var C = n & 2;
  var P = n & 4;
  if (S) {
    j = A ? S(e, I, A, N) : S(e);
  }
  if (j !== undefined) {
    return j;
  }
  if (!_(e)) {
    return e;
  }
  var k = v(e);
  if (k) {
    j = y(e);
    if (!D) {
      return u(e, j);
    }
  } else {
    var R = d(e);
    var L = R == "[object Function]" || R == "[object GeneratorFunction]";
    if (b(e)) {
      return c(e, D);
    }
    if (R == "[object Object]" || R == "[object Arguments]" || L && !A) {
      j = C || L ? {} : g(e);
      if (!D) {
        if (C) {
          return l(e, a(j, e));
        } else {
          return f(e, s(j, e));
        }
      }
    } else {
      if (!O[R]) {
        if (A) {
          return e;
        } else {
          return {};
        }
      }
      j = m(e, R, D);
    }
  }
  N ||= new r();
  var M = N.get(e);
  if (M) {
    return M;
  }
  N.set(e, j);
  if (x(e)) {
    e.forEach(function (r) {
      j.add(t(r, n, S, r, e, N));
    });
  } else if (w(e)) {
    e.forEach(function (r, o) {
      j.set(o, t(r, n, S, o, e, N));
    });
  }
  var F = k ? undefined : (P ? C ? p : h : C ? E : T)(e);
  o(F || e, function (r, o) {
    if (F) {
      r = e[o = r];
    }
    i(j, o, t(r, n, S, o, e, N));
  });
  return j;
};