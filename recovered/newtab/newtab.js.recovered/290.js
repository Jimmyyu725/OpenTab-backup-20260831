var r;
var i;
var o;
var a;
var s;
var c;
var u;
var l;
var f = require("./14.js");
var h = require("./188.js").f;
var p = require("./202.js").set;
var d = require("./203.js");
var m = require("./291.js");
var g = require("./150.js");
var y = f.MutationObserver || f.WebKitMutationObserver;
var b = f.document;
var w = f.process;
var v = f.Promise;
var _ = h(f, "queueMicrotask");
var E = _ && _.value;
if (!E) {
  r = function () {
    var t;
    var e;
    for (g && (t = w.domain) && t.exit(); i;) {
      e = i.fn;
      i = i.next;
      try {
        e();
      } catch (t) {
        if (i) {
          a();
        } else {
          o = undefined;
        }
        throw t;
      }
    }
    o = undefined;
    if (t) {
      t.enter();
    }
  };
  if (d || g || m || !y || !b) {
    if (v && v.resolve) {
      (u = v.resolve(undefined)).constructor = v;
      l = u.then;
      a = function () {
        l.call(u, r);
      };
    } else {
      a = g ? function () {
        w.nextTick(r);
      } : function () {
        p.call(f, r);
      };
    }
  } else {
    s = true;
    c = b.createTextNode("");
    new y(r).observe(c, {
      characterData: true
    });
    a = function () {
      c.data = s = !s;
    };
  }
}
module.exports = E || function (t) {
  var e = {
    fn: t,
    next: undefined
  };
  if (o) {
    o.next = e;
  }
  if (!i) {
    i = e;
    a();
  }
  o = e;
};