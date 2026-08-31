var r;
var i;
var o;
var s;
var a;
r = require("./401.js");
i = require("./317.js").utf8;
o = require("./402.js");
s = require("./317.js").bin;
(a = function (t, e) {
  if (t.constructor == String) {
    t = e && e.encoding === "binary" ? s.stringToBytes(t) : i.stringToBytes(t);
  } else if (o(t)) {
    t = Array.prototype.slice.call(t, 0);
  } else if (!Array.isArray(t) && t.constructor !== Uint8Array) {
    t = t.toString();
  }
  for (var n = r.bytesToWords(t), c = t.length * 8, u = 1732584193, l = -271733879, h = -1732584194, p = 271733878, d = 0; d < n.length; d++) {
    n[d] = (n[d] << 8 | n[d] >>> 24) & 16711935 | (n[d] << 24 | n[d] >>> 8) & -16711936;
  }
  n[c >>> 5] |= 128 << c % 32;
  n[14 + (c + 64 >>> 9 << 4)] = c;
  var f = a._ff;
  var g = a._gg;
  var y = a._hh;
  var m = a._ii;
  for (d = 0; d < n.length; d += 16) {
    var b = u;
    var v = l;
    var w = h;
    var x = p;
    u = f(u, l, h, p, n[d + 0], 7, -680876936);
    p = f(p, u, l, h, n[d + 1], 12, -389564586);
    h = f(h, p, u, l, n[d + 2], 17, 606105819);
    l = f(l, h, p, u, n[d + 3], 22, -1044525330);
    u = f(u, l, h, p, n[d + 4], 7, -176418897);
    p = f(p, u, l, h, n[d + 5], 12, 1200080426);
    h = f(h, p, u, l, n[d + 6], 17, -1473231341);
    l = f(l, h, p, u, n[d + 7], 22, -45705983);
    u = f(u, l, h, p, n[d + 8], 7, 1770035416);
    p = f(p, u, l, h, n[d + 9], 12, -1958414417);
    h = f(h, p, u, l, n[d + 10], 17, -42063);
    l = f(l, h, p, u, n[d + 11], 22, -1990404162);
    u = f(u, l, h, p, n[d + 12], 7, 1804603682);
    p = f(p, u, l, h, n[d + 13], 12, -40341101);
    h = f(h, p, u, l, n[d + 14], 17, -1502002290);
    u = g(u, l = f(l, h, p, u, n[d + 15], 22, 1236535329), h, p, n[d + 1], 5, -165796510);
    p = g(p, u, l, h, n[d + 6], 9, -1069501632);
    h = g(h, p, u, l, n[d + 11], 14, 643717713);
    l = g(l, h, p, u, n[d + 0], 20, -373897302);
    u = g(u, l, h, p, n[d + 5], 5, -701558691);
    p = g(p, u, l, h, n[d + 10], 9, 38016083);
    h = g(h, p, u, l, n[d + 15], 14, -660478335);
    l = g(l, h, p, u, n[d + 4], 20, -405537848);
    u = g(u, l, h, p, n[d + 9], 5, 568446438);
    p = g(p, u, l, h, n[d + 14], 9, -1019803690);
    h = g(h, p, u, l, n[d + 3], 14, -187363961);
    l = g(l, h, p, u, n[d + 8], 20, 1163531501);
    u = g(u, l, h, p, n[d + 13], 5, -1444681467);
    p = g(p, u, l, h, n[d + 2], 9, -51403784);
    h = g(h, p, u, l, n[d + 7], 14, 1735328473);
    u = y(u, l = g(l, h, p, u, n[d + 12], 20, -1926607734), h, p, n[d + 5], 4, -378558);
    p = y(p, u, l, h, n[d + 8], 11, -2022574463);
    h = y(h, p, u, l, n[d + 11], 16, 1839030562);
    l = y(l, h, p, u, n[d + 14], 23, -35309556);
    u = y(u, l, h, p, n[d + 1], 4, -1530992060);
    p = y(p, u, l, h, n[d + 4], 11, 1272893353);
    h = y(h, p, u, l, n[d + 7], 16, -155497632);
    l = y(l, h, p, u, n[d + 10], 23, -1094730640);
    u = y(u, l, h, p, n[d + 13], 4, 681279174);
    p = y(p, u, l, h, n[d + 0], 11, -358537222);
    h = y(h, p, u, l, n[d + 3], 16, -722521979);
    l = y(l, h, p, u, n[d + 6], 23, 76029189);
    u = y(u, l, h, p, n[d + 9], 4, -640364487);
    p = y(p, u, l, h, n[d + 12], 11, -421815835);
    h = y(h, p, u, l, n[d + 15], 16, 530742520);
    u = m(u, l = y(l, h, p, u, n[d + 2], 23, -995338651), h, p, n[d + 0], 6, -198630844);
    p = m(p, u, l, h, n[d + 7], 10, 1126891415);
    h = m(h, p, u, l, n[d + 14], 15, -1416354905);
    l = m(l, h, p, u, n[d + 5], 21, -57434055);
    u = m(u, l, h, p, n[d + 12], 6, 1700485571);
    p = m(p, u, l, h, n[d + 3], 10, -1894986606);
    h = m(h, p, u, l, n[d + 10], 15, -1051523);
    l = m(l, h, p, u, n[d + 1], 21, -2054922799);
    u = m(u, l, h, p, n[d + 8], 6, 1873313359);
    p = m(p, u, l, h, n[d + 15], 10, -30611744);
    h = m(h, p, u, l, n[d + 6], 15, -1560198380);
    l = m(l, h, p, u, n[d + 13], 21, 1309151649);
    u = m(u, l, h, p, n[d + 4], 6, -145523070);
    p = m(p, u, l, h, n[d + 11], 10, -1120210379);
    h = m(h, p, u, l, n[d + 2], 15, 718787259);
    l = m(l, h, p, u, n[d + 9], 21, -343485551);
    u = u + b >>> 0;
    l = l + v >>> 0;
    h = h + w >>> 0;
    p = p + x >>> 0;
  }
  return r.endian([u, l, h, p]);
})._ff = function (t, e, n, r, i, o, s) {
  var a = t + (e & n | ~e & r) + (i >>> 0) + s;
  return (a << o | a >>> 32 - o) + e;
};
a._gg = function (t, e, n, r, i, o, s) {
  var a = t + (e & r | n & ~r) + (i >>> 0) + s;
  return (a << o | a >>> 32 - o) + e;
};
a._hh = function (t, e, n, r, i, o, s) {
  var a = t + (e ^ n ^ r) + (i >>> 0) + s;
  return (a << o | a >>> 32 - o) + e;
};
a._ii = function (t, e, n, r, i, o, s) {
  var a = t + (n ^ (e | ~r)) + (i >>> 0) + s;
  return (a << o | a >>> 32 - o) + e;
};
a._blocksize = 16;
a._digestsize = 16;
module.exports = function (t, e) {
  if (t == null) {
    throw new Error("Illegal argument " + t);
  }
  var n = r.wordsToBytes(a(t, e));
  if (e && e.asBytes) {
    return n;
  } else if (e && e.asString) {
    return s.bytesToString(n);
  } else {
    return r.bytesToHex(n);
  }
};