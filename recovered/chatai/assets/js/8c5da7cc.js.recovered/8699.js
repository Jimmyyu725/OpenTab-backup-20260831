var n = require("./4040.js");
var o = require("./8418.js");
var a = require("./3520.js");
var i = require("./7174.js");
export function H(e = 0, t, r = o.P) {
  var c = -1;
  if (t != null) {
    if ((0, a.K)(t)) {
      r = t;
    } else {
      c = t;
    }
  }
  return new n.y(function (t) {
    var n = (0, i.q)(e) ? +e - r.now() : e;
    if (n < 0) {
      n = 0;
    }
    var o = 0;
    return r.schedule(function () {
      if (!t.closed) {
        t.next(o++);
        if (c >= 0) {
          this.schedule(undefined, c);
        } else {
          t.complete();
        }
      }
    }, n);
  });
}