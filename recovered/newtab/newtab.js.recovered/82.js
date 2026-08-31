var r;
var i;
var o;
var a;
var s;
r = require("./401.js");
i = require("./317.js").utf8;
o = require("./402.js");
a = require("./317.js").bin;
(s = function (t, e) {
  if (t.constructor == String) {
    t = e && e.encoding === "binary" ? a.stringToBytes(t) : i.stringToBytes(t);
  } else if (o(t)) {
    t = Array.prototype.slice.call(t, 0);
  } else if (!Array.isArray(t) && t.constructor !== Uint8Array) {
    t = t.toString();
  }
  for (var n = r.bytesToWords(t), c = t.length * 8, u = 1732584193, l = -271733879, f = -1732584194, h = 271733878, p = 0; p < n.length; p++) {
    n[p] = (n[p] << 8 | n[p] >>> 24) & 16711935 | (n[p] << 24 | n[p] >>> 8) & -16711936;
  }
  n[c >>> 5] |= 128 << c % 32;
  n[14 + (c + 64 >>> 9 << 4)] = c;
  var d = s._ff;
  var m = s._gg;
  var g = s._hh;
  var y = s._ii;
  for (p = 0; p < n.length; p += 16) {
    var b = u;
    var w = l;
    var v = f;
    var _ = h;
    u = d(u, l, f, h, n[p + 0], 7, -680876936);
    h = d(h, u, l, f, n[p + 1], 12, -389564586);
    f = d(f, h, u, l, n[p + 2], 17, 606105819);
    l = d(l, f, h, u, n[p + 3], 22, -1044525330);
    u = d(u, l, f, h, n[p + 4], 7, -176418897);
    h = d(h, u, l, f, n[p + 5], 12, 1200080426);
    f = d(f, h, u, l, n[p + 6], 17, -1473231341);
    l = d(l, f, h, u, n[p + 7], 22, -45705983);
    u = d(u, l, f, h, n[p + 8], 7, 1770035416);
    h = d(h, u, l, f, n[p + 9], 12, -1958414417);
    f = d(f, h, u, l, n[p + 10], 17, -42063);
    l = d(l, f, h, u, n[p + 11], 22, -1990404162);
    u = d(u, l, f, h, n[p + 12], 7, 1804603682);
    h = d(h, u, l, f, n[p + 13], 12, -40341101);
    f = d(f, h, u, l, n[p + 14], 17, -1502002290);
    u = m(u, l = d(l, f, h, u, n[p + 15], 22, 1236535329), f, h, n[p + 1], 5, -165796510);
    h = m(h, u, l, f, n[p + 6], 9, -1069501632);
    f = m(f, h, u, l, n[p + 11], 14, 643717713);
    l = m(l, f, h, u, n[p + 0], 20, -373897302);
    u = m(u, l, f, h, n[p + 5], 5, -701558691);
    h = m(h, u, l, f, n[p + 10], 9, 38016083);
    f = m(f, h, u, l, n[p + 15], 14, -660478335);
    l = m(l, f, h, u, n[p + 4], 20, -405537848);
    u = m(u, l, f, h, n[p + 9], 5, 568446438);
    h = m(h, u, l, f, n[p + 14], 9, -1019803690);
    f = m(f, h, u, l, n[p + 3], 14, -187363961);
    l = m(l, f, h, u, n[p + 8], 20, 1163531501);
    u = m(u, l, f, h, n[p + 13], 5, -1444681467);
    h = m(h, u, l, f, n[p + 2], 9, -51403784);
    f = m(f, h, u, l, n[p + 7], 14, 1735328473);
    u = g(u, l = m(l, f, h, u, n[p + 12], 20, -1926607734), f, h, n[p + 5], 4, -378558);
    h = g(h, u, l, f, n[p + 8], 11, -2022574463);
    f = g(f, h, u, l, n[p + 11], 16, 1839030562);
    l = g(l, f, h, u, n[p + 14], 23, -35309556);
    u = g(u, l, f, h, n[p + 1], 4, -1530992060);
    h = g(h, u, l, f, n[p + 4], 11, 1272893353);
    f = g(f, h, u, l, n[p + 7], 16, -155497632);
    l = g(l, f, h, u, n[p + 10], 23, -1094730640);
    u = g(u, l, f, h, n[p + 13], 4, 681279174);
    h = g(h, u, l, f, n[p + 0], 11, -358537222);
    f = g(f, h, u, l, n[p + 3], 16, -722521979);
    l = g(l, f, h, u, n[p + 6], 23, 76029189);
    u = g(u, l, f, h, n[p + 9], 4, -640364487);
    h = g(h, u, l, f, n[p + 12], 11, -421815835);
    f = g(f, h, u, l, n[p + 15], 16, 530742520);
    u = y(u, l = g(l, f, h, u, n[p + 2], 23, -995338651), f, h, n[p + 0], 6, -198630844);
    h = y(h, u, l, f, n[p + 7], 10, 1126891415);
    f = y(f, h, u, l, n[p + 14], 15, -1416354905);
    l = y(l, f, h, u, n[p + 5], 21, -57434055);
    u = y(u, l, f, h, n[p + 12], 6, 1700485571);
    h = y(h, u, l, f, n[p + 3], 10, -1894986606);
    f = y(f, h, u, l, n[p + 10], 15, -1051523);
    l = y(l, f, h, u, n[p + 1], 21, -2054922799);
    u = y(u, l, f, h, n[p + 8], 6, 1873313359);
    h = y(h, u, l, f, n[p + 15], 10, -30611744);
    f = y(f, h, u, l, n[p + 6], 15, -1560198380);
    l = y(l, f, h, u, n[p + 13], 21, 1309151649);
    u = y(u, l, f, h, n[p + 4], 6, -145523070);
    h = y(h, u, l, f, n[p + 11], 10, -1120210379);
    f = y(f, h, u, l, n[p + 2], 15, 718787259);
    l = y(l, f, h, u, n[p + 9], 21, -343485551);
    u = u + b >>> 0;
    l = l + w >>> 0;
    f = f + v >>> 0;
    h = h + _ >>> 0;
  }
  return r.endian([u, l, f, h]);
})._ff = function (t, e, n, r, i, o, a) {
  var s = t + (e & n | ~e & r) + (i >>> 0) + a;
  return (s << o | s >>> 32 - o) + e;
};
s._gg = function (t, e, n, r, i, o, a) {
  var s = t + (e & r | n & ~r) + (i >>> 0) + a;
  return (s << o | s >>> 32 - o) + e;
};
s._hh = function (t, e, n, r, i, o, a) {
  var s = t + (e ^ n ^ r) + (i >>> 0) + a;
  return (s << o | s >>> 32 - o) + e;
};
s._ii = function (t, e, n, r, i, o, a) {
  var s = t + (n ^ (e | ~r)) + (i >>> 0) + a;
  return (s << o | s >>> 32 - o) + e;
};
s._blocksize = 16;
s._digestsize = 16;
module.exports = function (t, e) {
  if (t == null) {
    throw new Error("Illegal argument " + t);
  }
  var n = r.wordsToBytes(s(t, e));
  if (e && e.asBytes) {
    return n;
  } else if (e && e.asString) {
    return a.bytesToString(n);
  } else {
    return r.bytesToHex(n);
  }
};