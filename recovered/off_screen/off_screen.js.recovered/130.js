var r;
var o;
var i;
var c;
var u;
var a;
var s;
var f;
var l = require("./4.js");
var p = require("./38.js").f;
var v = require("./72.js").set;
var d = require("./73.js");
var h = require("./131.js");
var y = require("./43.js");
var g = l.MutationObserver || l.WebKitMutationObserver;
var m = l.document;
var x = l.process;
var b = l.Promise;
var w = p(l, "queueMicrotask");
var O = w && w.value;
if (!O) {
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
  if (d || y || h || !g || !m) {
    if (b && b.resolve) {
      (s = b.resolve(undefined)).constructor = b;
      f = s.then;
      c = function () {
        f.call(s, r);
      };
    } else {
      c = y ? function () {
        x.nextTick(r);
      } : function () {
        v.call(l, r);
      };
    }
  } else {
    u = true;
    a = m.createTextNode("");
    new g(r).observe(a, {
      characterData: true
    });
    c = function () {
      a.data = u = !u;
    };
  }
}
module.exports = O || function (t) {
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