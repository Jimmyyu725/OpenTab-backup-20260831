var t = require(/*webcrack:missing*/"./3234.js");
var u = require(/*webcrack:missing*/"./6918.js");
var o = require(/*webcrack:missing*/"./7107.js");
var i = require(/*webcrack:missing*/"./8699.js");
var c = require("./6626.js");
export function X(n) {
  var r;
  if (n === undefined) {
    n = Infinity;
  }
  var e = (r = n && typeof n == "object" ? n : {
    count: n
  }).count;
  var f = e === undefined ? Infinity : e;
  var a = r.delay;
  var l = r.resetOnSuccess;
  var s = l !== undefined && l;
  if (f <= 0) {
    return o.y;
  } else {
    return (0, t.e)(function (n, r) {
      var e;
      var t = 0;
      function o() {
        var l = false;
        e = n.subscribe((0, u.x)(r, function (n) {
          if (s) {
            t = 0;
          }
          r.next(n);
        }, undefined, function (n) {
          if (t++ < f) {
            function s() {
              if (e) {
                e.unsubscribe();
                e = null;
                o();
              } else {
                l = true;
              }
            }
            if (a != null) {
              var v = typeof a == "number" ? (0, i.H)(a) : (0, c.Xf)(a(n, t));
              var d = (0, u.x)(r, function () {
                d.unsubscribe();
                s();
              }, function () {
                r.complete();
              });
              v.subscribe(d);
            } else {
              s();
            }
          } else {
            r.error(n);
          }
        }));
        if (l) {
          e.unsubscribe();
          e = null;
          o();
        }
      }
      o();
    });
  }
}