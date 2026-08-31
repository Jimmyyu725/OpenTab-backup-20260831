var r;
var o;
var i;
var s;
var a;
var u;
var c;
var f;
var l = require("./4.js");
var h = require("./38.js").f;
var p = require("./72.js").set;
var d = require("./73.js");
var y = require("./131.js");
var m = require("./43.js");
var g = l.MutationObserver || l.WebKitMutationObserver;
var v = l.document;
var b = l.process;
var w = l.Promise;
var _ = h(l, "queueMicrotask");
var E = _ && _.value;
if (!E) {
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
      (c = w.resolve(undefined)).constructor = w;
      f = c.then;
      s = function () {
        f.call(c, r);
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
    u = v.createTextNode("");
    new g(r).observe(u, {
      characterData: true
    });
    s = function () {
      u.data = a = !a;
    };
  }
}
module.exports = E || function (t) {
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