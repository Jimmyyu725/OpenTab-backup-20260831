var e;
var o;
var i;
var c;
var u;
var a;
var f;
var s;
var p = require("./14.js");
var l = require("./188.js").f;
var v = require("./202.js").set;
var h = require("./203.js");
var y = require("./291.js");
var d = require("./150.js");
var g = p.MutationObserver || p.WebKitMutationObserver;
var x = p.document;
var m = p.process;
var w = p.Promise;
var b = l(p, "queueMicrotask");
var S = b && b.value;
if (!S) {
  e = function () {
    var t;
    var n;
    for (d && (t = m.domain) && t.exit(); o;) {
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
  if (h || d || y || !g || !x) {
    if (w && w.resolve) {
      (f = w.resolve(undefined)).constructor = w;
      s = f.then;
      c = function () {
        s.call(f, e);
      };
    } else {
      c = d ? function () {
        m.nextTick(e);
      } : function () {
        v.call(p, e);
      };
    }
  } else {
    u = true;
    a = x.createTextNode("");
    new g(e).observe(a, {
      characterData: true
    });
    c = function () {
      a.data = u = !u;
    };
  }
}
module.exports = S || function (t) {
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