var r;
var i;
var o;
var s;
var a;
var c;
var u;
var l;
var h = require("./14.js");
var p = require("./188.js").f;
var d = require("./202.js").set;
var f = require("./203.js");
var g = require("./291.js");
var y = require("./150.js");
var m = h.MutationObserver || h.WebKitMutationObserver;
var b = h.document;
var v = h.process;
var w = h.Promise;
var x = p(h, "queueMicrotask");
var _ = x && x.value;
if (!_) {
  r = function () {
    var t;
    var e;
    for (y && (t = v.domain) && t.exit(); i;) {
      e = i.fn;
      i = i.next;
      try {
        e();
      } catch (t) {
        if (i) {
          s();
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
  if (f || y || g || !m || !b) {
    if (w && w.resolve) {
      (u = w.resolve(undefined)).constructor = w;
      l = u.then;
      s = function () {
        l.call(u, r);
      };
    } else {
      s = y ? function () {
        v.nextTick(r);
      } : function () {
        d.call(h, r);
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
module.exports = _ || function (t) {
  var e = {
    fn: t,
    next: undefined
  };
  if (o) {
    o.next = e;
  }
  if (!i) {
    i = e;
    s();
  }
  o = e;
};