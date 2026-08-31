module.exports = function () {
  "use strict";

  var e = 1000;
  var t = 60000;
  var n = 3600000;
  var i = "millisecond";
  var s = "second";
  var r = "minute";
  var a = "hour";
  var o = "day";
  var u = "week";
  var g = "month";
  var h = "quarter";
  var c = "year";
  var l = "date";
  var d = "Invalid Date";
  var F = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/;
  var f = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
  var C = {
    name: "en",
    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
  };
  function p(e, t, n) {
    var i = String(e);
    if (!i || i.length >= t) {
      return e;
    } else {
      return "" + Array(t + 1 - i.length).join(n) + e;
    }
  }
  var y = {
    s: p,
    z: function (e) {
      var t = -e.utcOffset();
      var n = Math.abs(t);
      var i = Math.floor(n / 60);
      var s = n % 60;
      return (t <= 0 ? "+" : "-") + p(i, 2, "0") + ":" + p(s, 2, "0");
    },
    m: function e(t, n) {
      if (t.date() < n.date()) {
        return -e(n, t);
      }
      var i = (n.year() - t.year()) * 12 + (n.month() - t.month());
      var s = t.clone().add(i, g);
      var r = n - s < 0;
      var a = t.clone().add(i + (r ? -1 : 1), g);
      return +(-(i + (n - s) / (r ? s - a : a - s)) || 0);
    },
    a: function (e) {
      if (e < 0) {
        return Math.ceil(e) || 0;
      } else {
        return Math.floor(e);
      }
    },
    p: function (e) {
      return {
        M: g,
        y: c,
        w: u,
        d: o,
        D: l,
        h: a,
        m: r,
        s,
        ms: i,
        Q: h
      }[e] || String(e || "").toLowerCase().replace(/s$/, "");
    },
    u: function (e) {
      return e === undefined;
    }
  };
  var A = "en";
  var E = {
    [A]: C
  };
  function _(e) {
    return e instanceof w;
  }
  var D = function e(t, n, i) {
    var s;
    if (!t) {
      return A;
    }
    if (typeof t == "string") {
      var r = t.toLowerCase();
      if (E[r]) {
        s = r;
      }
      if (n) {
        E[r] = n;
        s = r;
      }
      var a = t.split("-");
      if (!s && a.length > 1) {
        return e(a[0]);
      }
    } else {
      var o = t.name;
      E[o] = t;
      s = o;
    }
    if (!i && s) {
      A = s;
    }
    return s || !i && A;
  };
  function x(e, t) {
    if (_(e)) {
      return e.clone();
    }
    var n = typeof t == "object" ? t : {};
    n.date = e;
    n.args = arguments;
    return new w(n);
  }
  var m = y;
  m.l = D;
  m.i = _;
  m.w = function (e, t) {
    return x(e, {
      locale: t.$L,
      utc: t.$u,
      x: t.$x,
      $offset: t.$offset
    });
  };
  var w = function () {
    function C(e) {
      this.$L = D(e.locale, null, true);
      this.parse(e);
    }
    var p = C.prototype;
    p.parse = function (e) {
      this.$d = function (e) {
        var t = e.date;
        var n = e.utc;
        if (t === null) {
          return new Date(NaN);
        }
        if (m.u(t)) {
          return new Date();
        }
        if (t instanceof Date) {
          return new Date(t);
        }
        if (typeof t == "string" && !/Z$/i.test(t)) {
          var i = t.match(F);
          if (i) {
            var s = i[2] - 1 || 0;
            var r = (i[7] || "0").substring(0, 3);
            if (n) {
              return new Date(Date.UTC(i[1], s, i[3] || 1, i[4] || 0, i[5] || 0, i[6] || 0, r));
            } else {
              return new Date(i[1], s, i[3] || 1, i[4] || 0, i[5] || 0, i[6] || 0, r);
            }
          }
        }
        return new Date(t);
      }(e);
      this.$x = e.x || {};
      this.init();
    };
    p.init = function () {
      var e = this.$d;
      this.$y = e.getFullYear();
      this.$M = e.getMonth();
      this.$D = e.getDate();
      this.$W = e.getDay();
      this.$H = e.getHours();
      this.$m = e.getMinutes();
      this.$s = e.getSeconds();
      this.$ms = e.getMilliseconds();
    };
    p.$utils = function () {
      return m;
    };
    p.isValid = function () {
      return this.$d.toString() !== d;
    };
    p.isSame = function (e, t) {
      var n = x(e);
      return this.startOf(t) <= n && n <= this.endOf(t);
    };
    p.isAfter = function (e, t) {
      return x(e) < this.startOf(t);
    };
    p.isBefore = function (e, t) {
      return this.endOf(t) < x(e);
    };
    p.$g = function (e, t, n) {
      if (m.u(e)) {
        return this[t];
      } else {
        return this.set(n, e);
      }
    };
    p.unix = function () {
      return Math.floor(this.valueOf() / 1000);
    };
    p.valueOf = function () {
      return this.$d.getTime();
    };
    p.startOf = function (e, t) {
      var n = this;
      var i = !!m.u(t) || t;
      var h = m.p(e);
      function d(e, t) {
        var s = m.w(n.$u ? Date.UTC(n.$y, t, e) : new Date(n.$y, t, e), n);
        if (i) {
          return s;
        } else {
          return s.endOf(o);
        }
      }
      function F(e, t) {
        return m.w(n.toDate()[e].apply(n.toDate("s"), (i ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)), n);
      }
      var f = this.$W;
      var C = this.$M;
      var p = this.$D;
      var y = "set" + (this.$u ? "UTC" : "");
      switch (h) {
        case c:
          if (i) {
            return d(1, 0);
          } else {
            return d(31, 11);
          }
        case g:
          if (i) {
            return d(1, C);
          } else {
            return d(0, C + 1);
          }
        case u:
          var A = this.$locale().weekStart || 0;
          var E = (f < A ? f + 7 : f) - A;
          return d(i ? p - E : p + (6 - E), C);
        case o:
        case l:
          return F(y + "Hours", 0);
        case a:
          return F(y + "Minutes", 1);
        case r:
          return F(y + "Seconds", 2);
        case s:
          return F(y + "Milliseconds", 3);
        default:
          return this.clone();
      }
    };
    p.endOf = function (e) {
      return this.startOf(e, false);
    };
    p.$set = function (e, t) {
      var n;
      var u = m.p(e);
      var h = "set" + (this.$u ? "UTC" : "");
      var d = (n = {}, n[o] = h + "Date", n[l] = h + "Date", n[g] = h + "Month", n[c] = h + "FullYear", n[a] = h + "Hours", n[r] = h + "Minutes", n[s] = h + "Seconds", n[i] = h + "Milliseconds", n)[u];
      var F = u === o ? this.$D + (t - this.$W) : t;
      if (u === g || u === c) {
        var f = this.clone().set(l, 1);
        f.$d[d](F);
        f.init();
        this.$d = f.set(l, Math.min(this.$D, f.daysInMonth())).$d;
      } else if (d) {
        this.$d[d](F);
      }
      this.init();
      return this;
    };
    p.set = function (e, t) {
      return this.clone().$set(e, t);
    };
    p.get = function (e) {
      return this[m.p(e)]();
    };
    p.add = function (i, h) {
      var l;
      var d = this;
      i = Number(i);
      var F = m.p(h);
      function f(e) {
        var t = x(d);
        return m.w(t.date(t.date() + Math.round(e * i)), d);
      }
      if (F === g) {
        return this.set(g, this.$M + i);
      }
      if (F === c) {
        return this.set(c, this.$y + i);
      }
      if (F === o) {
        return f(1);
      }
      if (F === u) {
        return f(7);
      }
      var C = (l = {}, l[r] = t, l[a] = n, l[s] = e, l)[F] || 1;
      var p = this.$d.getTime() + i * C;
      return m.w(p, this);
    };
    p.subtract = function (e, t) {
      return this.add(e * -1, t);
    };
    p.format = function (e) {
      var t = this;
      var n = this.$locale();
      if (!this.isValid()) {
        return n.invalidDate || d;
      }
      var i = e || "YYYY-MM-DDTHH:mm:ssZ";
      var s = m.z(this);
      var r = this.$H;
      var a = this.$m;
      var o = this.$M;
      var u = n.weekdays;
      var g = n.months;
      function h(e, n, s, r) {
        return e && (e[n] || e(t, i)) || s[n].slice(0, r);
      }
      function c(e) {
        return m.s(r % 12 || 12, e, "0");
      }
      var l = n.meridiem || function (e, t, n) {
        var i = e < 12 ? "AM" : "PM";
        if (n) {
          return i.toLowerCase();
        } else {
          return i;
        }
      };
      var F = {
        YY: String(this.$y).slice(-2),
        YYYY: this.$y,
        M: o + 1,
        MM: m.s(o + 1, 2, "0"),
        MMM: h(n.monthsShort, o, g, 3),
        MMMM: h(g, o),
        D: this.$D,
        DD: m.s(this.$D, 2, "0"),
        d: String(this.$W),
        dd: h(n.weekdaysMin, this.$W, u, 2),
        ddd: h(n.weekdaysShort, this.$W, u, 3),
        dddd: u[this.$W],
        H: String(r),
        HH: m.s(r, 2, "0"),
        h: c(1),
        hh: c(2),
        a: l(r, a, true),
        A: l(r, a, false),
        m: String(a),
        mm: m.s(a, 2, "0"),
        s: String(this.$s),
        ss: m.s(this.$s, 2, "0"),
        SSS: m.s(this.$ms, 3, "0"),
        Z: s
      };
      return i.replace(f, function (e, t) {
        return t || F[e] || s.replace(":", "");
      });
    };
    p.utcOffset = function () {
      return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
    };
    p.diff = function (i, l, d) {
      var F;
      var f = m.p(l);
      var C = x(i);
      var p = (C.utcOffset() - this.utcOffset()) * t;
      var y = this - C;
      var A = m.m(this, C);
      A = (F = {}, F[c] = A / 12, F[g] = A, F[h] = A / 3, F[u] = (y - p) / 604800000, F[o] = (y - p) / 86400000, F[a] = y / n, F[r] = y / t, F[s] = y / e, F)[f] || y;
      if (d) {
        return A;
      } else {
        return m.a(A);
      }
    };
    p.daysInMonth = function () {
      return this.endOf(g).$D;
    };
    p.$locale = function () {
      return E[this.$L];
    };
    p.locale = function (e, t) {
      if (!e) {
        return this.$L;
      }
      var n = this.clone();
      var i = D(e, t, true);
      if (i) {
        n.$L = i;
      }
      return n;
    };
    p.clone = function () {
      return m.w(this.$d, this);
    };
    p.toDate = function () {
      return new Date(this.valueOf());
    };
    p.toJSON = function () {
      if (this.isValid()) {
        return this.toISOString();
      } else {
        return null;
      }
    };
    p.toISOString = function () {
      return this.$d.toISOString();
    };
    p.toString = function () {
      return this.$d.toUTCString();
    };
    return C;
  }();
  var B = w.prototype;
  x.prototype = B;
  [["$ms", i], ["$s", s], ["$m", r], ["$H", a], ["$W", o], ["$M", g], ["$y", c], ["$D", l]].forEach(function (e) {
    B[e[1]] = function (t) {
      return this.$g(t, e[0], e[1]);
    };
  });
  x.extend = function (e, t) {
    if (!e.$i) {
      e(t, w, x);
      e.$i = true;
    }
    return x;
  };
  x.locale = D;
  x.isDayjs = _;
  x.unix = function (e) {
    return x(e * 1000);
  };
  x.en = E[A];
  x.Ls = E;
  x.p = {};
  return x;
}();