var r = require("./358.js");
var o = require("./5.js");
var i = require("./8.js");
var s = require("./49.js");
var a = require("./57.js");
var c = require("./362.js");
var u = require("./363.js");
var f = require("./364.js");
var l = require("./103.js");
var h = require("./365.js");
var p = r.aTypedArray;
var d = r.exportTypedArrayMethod;
var y = o.Uint16Array;
var m = y && y.prototype.sort;
var g = !!m && !i(function () {
  var t = new y(2);
  t.sort(null);
  t.sort({});
});
var v = !!m && !i(function () {
  if (l) {
    return l < 74;
  }
  if (u) {
    return u < 67;
  }
  if (f) {
    return true;
  }
  if (h) {
    return h < 602;
  }
  var t;
  var e;
  var n = new y(516);
  var r = Array(516);
  for (t = 0; t < 516; t++) {
    e = t % 4;
    n[t] = 515 - t;
    r[t] = t - e * 2 + 3;
  }
  n.sort(function (t, e) {
    return (t / 4 | 0) - (e / 4 | 0);
  });
  t = 0;
  for (; t < 516; t++) {
    if (n[t] !== r[t]) {
      return true;
    }
  }
});
d("sort", function (t) {
  if (t !== undefined) {
    s(t);
  }
  if (v) {
    return m.call(this, t);
  }
  p(this);
  var e;
  var n = a(this.length);
  var r = Array(n);
  for (e = 0; e < n; e++) {
    r[e] = this[e];
  }
  r = c(this, function (t) {
    return function (e, n) {
      if (t !== undefined) {
        return +t(e, n) || 0;
      } else if (n != n) {
        return -1;
      } else if (e != e) {
        return 1;
      } else if (e === 0 && n === 0) {
        if (1 / e > 0 && 1 / n < 0) {
          return 1;
        } else {
          return -1;
        }
      } else {
        return e > n;
      }
    };
  }(t));
  e = 0;
  for (; e < n; e++) {
    this[e] = r[e];
  }
  return this;
}, !v || g);