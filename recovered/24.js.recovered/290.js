var r;
var o;
var i;
var s;
var a;
var c;
var u;
var l;
var h = require("./14.js");
var p = require("./188.js").f;
var f = require("./202.js").set;
var d = require("./203.js");
var g = require("./291.js");
var y = require("./150.js");
var m = h.MutationObserver || h.WebKitMutationObserver;
var b = h.document;
var w = h.process;
var v = h.Promise;
var _ = p(h, "queueMicrotask");
var T = _ && _.value;
if (!T) {
  r = function () {
    var t;
    var e;
    for (y && (t = w.domain) && t.exit(); o;) {
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
  if (d || y || g || !m || !b) {
    if (v && v.resolve) {
      (u = v.resolve(undefined)).constructor = v;
      l = u.then;
      s = function () {
        l.call(u, r);
      };
    } else {
      s = y ? function () {
        w.nextTick(r);
      } : function () {
        f.call(h, r);
      };
    }
  } else {
    a = true;
    c = b.createTextNode("");
    new m(r).observe(c, {
      characterData: true
    });
    s = function () {
      c.data = a = !a;
    };
  }
}
module.exports = T || function (t) {
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