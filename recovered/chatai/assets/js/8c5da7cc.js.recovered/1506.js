var n = require("./5822.js");
var o = require(/*webcrack:missing*/"./6247.js");
const a = (0, n.Z)(o.Z, "DataView");
var i = require("./2512.js");
const c = (0, n.Z)(o.Z, "Promise");
var s = require("./7408.js");
const l = (0, n.Z)(o.Z, "WeakMap");
var u = require(/*webcrack:missing*/"./6080.js");
var f = require("./1509.js");
var d = "[object Map]";
var h = "[object Promise]";
var p = "[object Set]";
var g = "[object WeakMap]";
var y = "[object DataView]";
var v = (0, f.Z)(a);
var b = (0, f.Z)(i.Z);
var m = (0, f.Z)(c);
var w = (0, f.Z)(s.Z);
var _ = (0, f.Z)(l);
var k = u.Z;
if (a && k(new a(new ArrayBuffer(1))) != y || i.Z && k(new i.Z()) != d || c && k(c.resolve()) != h || s.Z && k(new s.Z()) != p || l && k(new l()) != g) {
  k = function (e) {
    var t = (0, u.Z)(e);
    var r = t == "[object Object]" ? e.constructor : undefined;
    var n = r ? (0, f.Z)(r) : "";
    if (n) {
      switch (n) {
        case v:
          return y;
        case b:
          return d;
        case m:
          return h;
        case w:
          return p;
        case _:
          return g;
      }
    }
    return t;
  };
}
export const Z = k;