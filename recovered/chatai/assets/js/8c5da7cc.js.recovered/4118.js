var n;
(function (o) {
  "use strict";

  function a(e, t) {
    var r = (e & 65535) + (t & 65535);
    return (e >> 16) + (t >> 16) + (r >> 16) << 16 | r & 65535;
  }
  function i(e, t, r, n, o, i) {
    return a((c = a(a(t, e), a(n, i))) << (s = o) | c >>> 32 - s, r);
    var c;
    var s;
  }
  function c(e, t, r, n, o, a, c) {
    return i(t & r | ~t & n, e, t, o, a, c);
  }
  function s(e, t, r, n, o, a, c) {
    return i(t & n | r & ~n, e, t, o, a, c);
  }
  function l(e, t, r, n, o, a, c) {
    return i(t ^ r ^ n, e, t, o, a, c);
  }
  function u(e, t, r, n, o, a, c) {
    return i(r ^ (t | ~n), e, t, o, a, c);
  }
  function f(e, t) {
    var r;
    var n;
    var o;
    var i;
    var f;
    e[t >> 5] |= 128 << t % 32;
    e[14 + (t + 64 >>> 9 << 4)] = t;
    var d = 1732584193;
    var h = -271733879;
    var p = -1732584194;
    var g = 271733878;
    for (r = 0; r < e.length; r += 16) {
      n = d;
      o = h;
      i = p;
      f = g;
      d = c(d, h, p, g, e[r], 7, -680876936);
      g = c(g, d, h, p, e[r + 1], 12, -389564586);
      p = c(p, g, d, h, e[r + 2], 17, 606105819);
      h = c(h, p, g, d, e[r + 3], 22, -1044525330);
      d = c(d, h, p, g, e[r + 4], 7, -176418897);
      g = c(g, d, h, p, e[r + 5], 12, 1200080426);
      p = c(p, g, d, h, e[r + 6], 17, -1473231341);
      h = c(h, p, g, d, e[r + 7], 22, -45705983);
      d = c(d, h, p, g, e[r + 8], 7, 1770035416);
      g = c(g, d, h, p, e[r + 9], 12, -1958414417);
      p = c(p, g, d, h, e[r + 10], 17, -42063);
      h = c(h, p, g, d, e[r + 11], 22, -1990404162);
      d = c(d, h, p, g, e[r + 12], 7, 1804603682);
      g = c(g, d, h, p, e[r + 13], 12, -40341101);
      p = c(p, g, d, h, e[r + 14], 17, -1502002290);
      d = s(d, h = c(h, p, g, d, e[r + 15], 22, 1236535329), p, g, e[r + 1], 5, -165796510);
      g = s(g, d, h, p, e[r + 6], 9, -1069501632);
      p = s(p, g, d, h, e[r + 11], 14, 643717713);
      h = s(h, p, g, d, e[r], 20, -373897302);
      d = s(d, h, p, g, e[r + 5], 5, -701558691);
      g = s(g, d, h, p, e[r + 10], 9, 38016083);
      p = s(p, g, d, h, e[r + 15], 14, -660478335);
      h = s(h, p, g, d, e[r + 4], 20, -405537848);
      d = s(d, h, p, g, e[r + 9], 5, 568446438);
      g = s(g, d, h, p, e[r + 14], 9, -1019803690);
      p = s(p, g, d, h, e[r + 3], 14, -187363961);
      h = s(h, p, g, d, e[r + 8], 20, 1163531501);
      d = s(d, h, p, g, e[r + 13], 5, -1444681467);
      g = s(g, d, h, p, e[r + 2], 9, -51403784);
      p = s(p, g, d, h, e[r + 7], 14, 1735328473);
      d = l(d, h = s(h, p, g, d, e[r + 12], 20, -1926607734), p, g, e[r + 5], 4, -378558);
      g = l(g, d, h, p, e[r + 8], 11, -2022574463);
      p = l(p, g, d, h, e[r + 11], 16, 1839030562);
      h = l(h, p, g, d, e[r + 14], 23, -35309556);
      d = l(d, h, p, g, e[r + 1], 4, -1530992060);
      g = l(g, d, h, p, e[r + 4], 11, 1272893353);
      p = l(p, g, d, h, e[r + 7], 16, -155497632);
      h = l(h, p, g, d, e[r + 10], 23, -1094730640);
      d = l(d, h, p, g, e[r + 13], 4, 681279174);
      g = l(g, d, h, p, e[r], 11, -358537222);
      p = l(p, g, d, h, e[r + 3], 16, -722521979);
      h = l(h, p, g, d, e[r + 6], 23, 76029189);
      d = l(d, h, p, g, e[r + 9], 4, -640364487);
      g = l(g, d, h, p, e[r + 12], 11, -421815835);
      p = l(p, g, d, h, e[r + 15], 16, 530742520);
      d = u(d, h = l(h, p, g, d, e[r + 2], 23, -995338651), p, g, e[r], 6, -198630844);
      g = u(g, d, h, p, e[r + 7], 10, 1126891415);
      p = u(p, g, d, h, e[r + 14], 15, -1416354905);
      h = u(h, p, g, d, e[r + 5], 21, -57434055);
      d = u(d, h, p, g, e[r + 12], 6, 1700485571);
      g = u(g, d, h, p, e[r + 3], 10, -1894986606);
      p = u(p, g, d, h, e[r + 10], 15, -1051523);
      h = u(h, p, g, d, e[r + 1], 21, -2054922799);
      d = u(d, h, p, g, e[r + 8], 6, 1873313359);
      g = u(g, d, h, p, e[r + 15], 10, -30611744);
      p = u(p, g, d, h, e[r + 6], 15, -1560198380);
      h = u(h, p, g, d, e[r + 13], 21, 1309151649);
      d = u(d, h, p, g, e[r + 4], 6, -145523070);
      g = u(g, d, h, p, e[r + 11], 10, -1120210379);
      p = u(p, g, d, h, e[r + 2], 15, 718787259);
      h = u(h, p, g, d, e[r + 9], 21, -343485551);
      d = a(d, n);
      h = a(h, o);
      p = a(p, i);
      g = a(g, f);
    }
    return [d, h, p, g];
  }
  function d(e) {
    var t;
    var r = "";
    var n = e.length * 32;
    for (t = 0; t < n; t += 8) {
      r += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
    }
    return r;
  }
  function h(e) {
    var t;
    var r = [];
    r[(e.length >> 2) - 1] = undefined;
    t = 0;
    for (; t < r.length; t += 1) {
      r[t] = 0;
    }
    var n = e.length * 8;
    for (t = 0; t < n; t += 8) {
      r[t >> 5] |= (e.charCodeAt(t / 8) & 255) << t % 32;
    }
    return r;
  }
  function p(e) {
    var t;
    var r;
    var n = "0123456789abcdef";
    var o = "";
    for (r = 0; r < e.length; r += 1) {
      t = e.charCodeAt(r);
      o += n.charAt(t >>> 4 & 15) + n.charAt(t & 15);
    }
    return o;
  }
  function g(e) {
    return unescape(encodeURIComponent(e));
  }
  function y(e) {
    return function (e) {
      return d(f(h(e), e.length * 8));
    }(g(e));
  }
  function v(e, t) {
    return function (e, t) {
      var r;
      var n;
      var o = h(e);
      var a = [];
      var i = [];
      a[15] = i[15] = undefined;
      if (o.length > 16) {
        o = f(o, e.length * 8);
      }
      r = 0;
      for (; r < 16; r += 1) {
        a[r] = o[r] ^ 909522486;
        i[r] = o[r] ^ 1549556828;
      }
      n = f(a.concat(h(t)), 512 + t.length * 8);
      return d(f(i.concat(n), 640));
    }(g(e), g(t));
  }
  function b(e, t, r) {
    if (t) {
      if (r) {
        return v(t, e);
      } else {
        return p(v(t, e));
      }
    } else if (r) {
      return y(e);
    } else {
      return p(y(e));
    }
  }
  if ((n = function () {
    return b;
  }.call(exports, require, exports, module)) !== undefined) {
    module.exports = n;
  }
})();