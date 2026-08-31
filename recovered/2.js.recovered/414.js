var n = require("./536.js");
var o = require("./405.js");
var c = require("./537.js");
var i = require("./538.js");
var a = require("./539.js");
var u = require(/*webcrack:missing*/"./249.js");
var s = require("./440.js");
var f = s(n);
var p = s(o);
var l = s(c);
var b = s(i);
var v = s(a);
var h = u;
if (n && h(new n(new ArrayBuffer(1))) != "[object DataView]" || o && h(new o()) != "[object Map]" || c && h(c.resolve()) != "[object Promise]" || i && h(new i()) != "[object Set]" || a && h(new a()) != "[object WeakMap]") {
  h = function (t) {
    var e = u(t);
    var r = e == "[object Object]" ? t.constructor : undefined;
    var n = r ? s(r) : "";
    if (n) {
      switch (n) {
        case f:
          return "[object DataView]";
        case p:
          return "[object Map]";
        case l:
          return "[object Promise]";
        case b:
          return "[object Set]";
        case v:
          return "[object WeakMap]";
      }
    }
    return e;
  };
}
module.exports = h;