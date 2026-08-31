var r;
var o;
var i;
var c;
var u;
var a;
var f;
var s;
var p = require("./4.js");
var l = require("./38.js").f;
var v = require("./72.js").set;
var h = require("./73.js");
var d = require("./131.js");
var y = require("./43.js");
var m = p.MutationObserver || p.WebKitMutationObserver;
var g = p.document;
var x = p.process;
var b = p.Promise;
var w = l(p, "queueMicrotask");
var j = w && w.value;
if (!j) {
  r = function () {
    var t;
    var n;
    for (y && (t = x.domain) && t.exit(); o;) {
      n = o.fn;
      o = o.next;
      try {
        n();
      } catch (t) {
        if (o) {
          c();
        } else {
          i = undefined;
        }
        throw t;
      }
    }
    i = undefined;
    if (t) {
      t.enter();
    }
  };
  if (h || y || d || !m || !g) {
    if (b && b.resolve) {
      (f = b.resolve(undefined)).constructor = b;
      s = f.then;
      c = function () {
        s.call(f, r);
      };
    } else {
      c = y ? function () {
        x.nextTick(r);
      } : function () {
        v.call(p, r);
      };
    }
  } else {
    u = true;
    a = g.createTextNode("");
    new m(r).observe(a, {
      characterData: true
    });
    c = function () {
      a.data = u = !u;
    };
  }
}
module.exports = j || function (t) {
  var n = {
    fn: t,
    next: undefined
  };
  if (i) {
    i.next = n;
  }
  if (!o) {
    o = n;
    c();
  }
  i = n;
};