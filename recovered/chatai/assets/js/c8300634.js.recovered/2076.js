var t = require(/*webcrack:missing*/"./8418.js");
var u = require(/*webcrack:missing*/"./7174.js");
var o = require(/*webcrack:missing*/"./3234.js");
var i = require("./6626.js");
var c = require(/*webcrack:missing*/"./782.js");
var f = require(/*webcrack:missing*/"./6918.js");
var a = require("./1058.js");
var l = (0, c.d)(function (n) {
  return function (r = null) {
    n(this);
    this.message = "Timeout has occurred";
    this.name = "TimeoutError";
    this.info = r;
  };
});
export function V(n, r) {
  var e = (0, u.q)(n) ? {
    first: n
  } : typeof n == "number" ? {
    each: n
  } : n;
  var c = e.first;
  var l = e.each;
  var s = e.with;
  var d = s === undefined ? v : s;
  var b = e.scheduler;
  var h = b === undefined ? r ?? t.z : b;
  var p = e.meta;
  var m = p === undefined ? null : p;
  if (c == null && l == null) {
    throw new TypeError("No timeout provided.");
  }
  return (0, o.e)(function (n, r) {
    var e;
    var t;
    var u = null;
    var o = 0;
    function s(n) {
      t = (0, a.f)(r, h, function () {
        try {
          e.unsubscribe();
          (0, i.Xf)(d({
            meta: m,
            lastValue: u,
            seen: o
          })).subscribe(r);
        } catch (n) {
          r.error(n);
        }
      }, n);
    }
    e = n.subscribe((0, f.x)(r, function (n) {
      if (t != null) {
        t.unsubscribe();
      }
      o++;
      r.next(u = n);
      if (l > 0) {
        s(l);
      }
    }, undefined, undefined, function () {
      if (!(t == null ? undefined : t.closed) && t != null) {
        t.unsubscribe();
      }
      u = null;
    }));
    if (!o) {
      s(c != null ? typeof c == "number" ? c : +c - h.now() : l);
    }
  });
}
function v(n) {
  throw new l(n);
}