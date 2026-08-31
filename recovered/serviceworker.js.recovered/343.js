var r;
var o;
var i;
var s;
var a;
var c;
var u;
var f;
var l = require("./7.js");
var h = require("./172.js").f;
var p = require("./204.js").set;
var d = require("./205.js");
var y = require("./344.js");
var m = require("./141.js");
var g = l.MutationObserver || l.WebKitMutationObserver;
var v = l.document;
var b = l.process;
var w = l.Promise;
var _ = h(l, "queueMicrotask");
var x = _ && _.value;
if (!x) {
  r = function () {
    var t;
    var e;
    for (m && (t = b.domain) && t.exit(); o;) {
      e = o.fn;
      o = o.next;
      try {
        e();
      } catch (t) {
        if (o) {
          s();
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
  if (d || m || y || !g || !v) {
    if (w && w.resolve) {
      (u = w.resolve(undefined)).constructor = w;
      f = u.then;
      s = function () {
        f.call(u, r);
      };
    } else {
      s = m ? function () {
        b.nextTick(r);
      } : function () {
        p.call(l, r);
      };
    }
  } else {
    a = true;
    c = v.createTextNode("");
    new g(r).observe(c, {
      characterData: true
    });
    s = function () {
      c.data = a = !a;
    };
  }
}
module.exports = x || function (t) {
  var e = {
    fn: t,
    next: undefined
  };
  if (i) {
    i.next = e;
  }
  if (!o) {
    o = e;
    s();
  }
  i = e;
};