var r = require("./536.js");
var i = require("./405.js");
var o = require("./537.js");
var s = require("./538.js");
var a = require("./539.js");
var c = require("./249.js");
var u = require("./440.js");
var l = u(r);
var h = u(i);
var p = u(o);
var d = u(s);
var f = u(a);
var g = c;
if (r && g(new r(new ArrayBuffer(1))) != "[object DataView]" || i && g(new i()) != "[object Map]" || o && g(o.resolve()) != "[object Promise]" || s && g(new s()) != "[object Set]" || a && g(new a()) != "[object WeakMap]") {
  g = function (t) {
    var e = c(t);
    var n = e == "[object Object]" ? t.constructor : undefined;
    var r = n ? u(n) : "";
    if (r) {
      switch (r) {
        case l:
          return "[object DataView]";
        case h:
          return "[object Map]";
        case p:
          return "[object Promise]";
        case d:
          return "[object Set]";
        case f:
          return "[object WeakMap]";
      }
    }
    return e;
  };
}
module.exports = g;