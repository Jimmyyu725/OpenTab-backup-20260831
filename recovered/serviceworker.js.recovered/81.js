var r = require("./438.js");
var o = require("./143.js");
var i = require("./439.js");
var s = require("./440.js");
var a = require("./441.js");
var c = require("./54.js");
var u = require("./221.js");
var f = u(r);
var l = u(o);
var h = u(i);
var p = u(s);
var d = u(a);
var y = c;
if (r && y(new r(new ArrayBuffer(1))) != "[object DataView]" || o && y(new o()) != "[object Map]" || i && y(i.resolve()) != "[object Promise]" || s && y(new s()) != "[object Set]" || a && y(new a()) != "[object WeakMap]") {
  y = function (t) {
    var e = c(t);
    var n = e == "[object Object]" ? t.constructor : undefined;
    var r = n ? u(n) : "";
    if (r) {
      switch (r) {
        case f:
          return "[object DataView]";
        case l:
          return "[object Map]";
        case h:
          return "[object Promise]";
        case p:
          return "[object Set]";
        case d:
          return "[object WeakMap]";
      }
    }
    return e;
  };
}
module.exports = y;