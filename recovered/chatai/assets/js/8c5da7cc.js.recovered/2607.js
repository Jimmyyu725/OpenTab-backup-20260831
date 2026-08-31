module.exports = function () {
  "use strict";

  return function (e, t, r) {
    e = e || {};
    var n = t.prototype;
    var o = {
      future: "in %s",
      past: "%s ago",
      s: "a few seconds",
      m: "a minute",
      mm: "%d minutes",
      h: "an hour",
      hh: "%d hours",
      d: "a day",
      dd: "%d days",
      M: "a month",
      MM: "%d months",
      y: "a year",
      yy: "%d years"
    };
    function a(e, t, r, o) {
      return n.fromToBase(e, t, r, o);
    }
    r.en.relativeTime = o;
    n.fromToBase = function (t, n, a, i, c) {
      var s;
      var l;
      var u;
      var f = a.$locale().relativeTime || o;
      var d = e.thresholds || [{
        l: "s",
        r: 44,
        d: "second"
      }, {
        l: "m",
        r: 89
      }, {
        l: "mm",
        r: 44,
        d: "minute"
      }, {
        l: "h",
        r: 89
      }, {
        l: "hh",
        r: 21,
        d: "hour"
      }, {
        l: "d",
        r: 35
      }, {
        l: "dd",
        r: 25,
        d: "day"
      }, {
        l: "M",
        r: 45
      }, {
        l: "MM",
        r: 10,
        d: "month"
      }, {
        l: "y",
        r: 17
      }, {
        l: "yy",
        d: "year"
      }];
      for (var h = d.length, p = 0; p < h; p += 1) {
        var g = d[p];
        if (g.d) {
          s = i ? r(t).diff(a, g.d, true) : a.diff(t, g.d, true);
        }
        var y = (e.rounding || Math.round)(Math.abs(s));
        u = s > 0;
        if (y <= g.r || !g.r) {
          if (y <= 1 && p > 0) {
            g = d[p - 1];
          }
          var v = f[g.l];
          if (c) {
            y = c("" + y);
          }
          l = typeof v == "string" ? v.replace("%d", y) : v(y, n, g.l, u);
          break;
        }
      }
      if (n) {
        return l;
      }
      var b = u ? f.future : f.past;
      if (typeof b == "function") {
        return b(l);
      } else {
        return b.replace("%s", l);
      }
    };
    n.to = function (e, t) {
      return a(e, t, this, true);
    };
    n.from = function (e, t) {
      return a(e, t, this);
    };
    function i(e) {
      if (e.$u) {
        return r.utc();
      } else {
        return r();
      }
    }
    n.toNow = function (e) {
      return this.to(i(this), e);
    };
    n.fromNow = function (e) {
      return this.from(i(this), e);
    };
  };
}();