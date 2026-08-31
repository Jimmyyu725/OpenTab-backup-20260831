var r = require("./361.js");
var i = require("./4.js");
var o = require("./9.js");
var a = require("./27.js");
var s = require("./48.js");
var c = require("./365.js");
var u = require("./366.js");
var l = require("./367.js");
var f = require("./59.js");
var h = require("./368.js");
var p = r.aTypedArray;
var d = r.exportTypedArrayMethod;
var m = i.Uint16Array;
var g = m && m.prototype.sort;
var y = !!g && !o(function () {
  var t = new m(2);
  t.sort(null);
  t.sort({});
});
var b = !!g && !o(function () {
  if (f) {
    return f < 74;
  }
  if (u) {
    return u < 67;
  }
  if (l) {
    return true;
  }
  if (h) {
    return h < 602;
  }
  var t;
  var e;
  var n = new m(516);
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
    a(t);
  }
  if (b) {
    return g.call(this, t);
  }
  p(this);
  var e;
  var n = s(this.length);
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
}, !b || y);