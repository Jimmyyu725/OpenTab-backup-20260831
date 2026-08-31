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
  for (var n = r.bytesToWords(t), c = t.length * 8, u = 1732584193, l = -271733879, h = -1732584194, p = 271733878, f = 0; f < n.length; f++) {
    n[f] = (n[f] << 8 | n[f] >>> 24) & 16711935 | (n[f] << 24 | n[f] >>> 8) & -16711936;
  }
  n[c >>> 5] |= 128 << c % 32;
  n[14 + (c + 64 >>> 9 << 4)] = c;
  var d = a._ff;
  var g = a._gg;
  var m = a._hh;
  var y = a._ii;
  for (f = 0; f < n.length; f += 16) {
    var b = u;
    var v = l;
    var w = h;
    var x = p;
    u = d(u, l, h, p, n[f + 0], 7, -680876936);
    p = d(p, u, l, h, n[f + 1], 12, -389564586);
    h = d(h, p, u, l, n[f + 2], 17, 606105819);
    l = d(l, h, p, u, n[f + 3], 22, -1044525330);
    u = d(u, l, h, p, n[f + 4], 7, -176418897);
    p = d(p, u, l, h, n[f + 5], 12, 1200080426);
    h = d(h, p, u, l, n[f + 6], 17, -1473231341);
    l = d(l, h, p, u, n[f + 7], 22, -45705983);
    u = d(u, l, h, p, n[f + 8], 7, 1770035416);
    p = d(p, u, l, h, n[f + 9], 12, -1958414417);
    h = d(h, p, u, l, n[f + 10], 17, -42063);
    l = d(l, h, p, u, n[f + 11], 22, -1990404162);
    u = d(u, l, h, p, n[f + 12], 7, 1804603682);
    p = d(p, u, l, h, n[f + 13], 12, -40341101);
    h = d(h, p, u, l, n[f + 14], 17, -1502002290);
    u = g(u, l = d(l, h, p, u, n[f + 15], 22, 1236535329), h, p, n[f + 1], 5, -165796510);
    p = g(p, u, l, h, n[f + 6], 9, -1069501632);
    h = g(h, p, u, l, n[f + 11], 14, 643717713);
    l = g(l, h, p, u, n[f + 0], 20, -373897302);
    u = g(u, l, h, p, n[f + 5], 5, -701558691);
    p = g(p, u, l, h, n[f + 10], 9, 38016083);
    h = g(h, p, u, l, n[f + 15], 14, -660478335);
    l = g(l, h, p, u, n[f + 4], 20, -405537848);
    u = g(u, l, h, p, n[f + 9], 5, 568446438);
    p = g(p, u, l, h, n[f + 14], 9, -1019803690);
    h = g(h, p, u, l, n[f + 3], 14, -187363961);
    l = g(l, h, p, u, n[f + 8], 20, 1163531501);
    u = g(u, l, h, p, n[f + 13], 5, -1444681467);
    p = g(p, u, l, h, n[f + 2], 9, -51403784);
    h = g(h, p, u, l, n[f + 7], 14, 1735328473);
    u = m(u, l = g(l, h, p, u, n[f + 12], 20, -1926607734), h, p, n[f + 5], 4, -378558);
    p = m(p, u, l, h, n[f + 8], 11, -2022574463);
    h = m(h, p, u, l, n[f + 11], 16, 1839030562);
    l = m(l, h, p, u, n[f + 14], 23, -35309556);
    u = m(u, l, h, p, n[f + 1], 4, -1530992060);
    p = m(p, u, l, h, n[f + 4], 11, 1272893353);
    h = m(h, p, u, l, n[f + 7], 16, -155497632);
    l = m(l, h, p, u, n[f + 10], 23, -1094730640);
    u = m(u, l, h, p, n[f + 13], 4, 681279174);
    p = m(p, u, l, h, n[f + 0], 11, -358537222);
    h = m(h, p, u, l, n[f + 3], 16, -722521979);
    l = m(l, h, p, u, n[f + 6], 23, 76029189);
    u = m(u, l, h, p, n[f + 9], 4, -640364487);
    p = m(p, u, l, h, n[f + 12], 11, -421815835);
    h = m(h, p, u, l, n[f + 15], 16, 530742520);
    u = y(u, l = m(l, h, p, u, n[f + 2], 23, -995338651), h, p, n[f + 0], 6, -198630844);
    p = y(p, u, l, h, n[f + 7], 10, 1126891415);
    h = y(h, p, u, l, n[f + 14], 15, -1416354905);
    l = y(l, h, p, u, n[f + 5], 21, -57434055);
    u = y(u, l, h, p, n[f + 12], 6, 1700485571);
    p = y(p, u, l, h, n[f + 3], 10, -1894986606);
    h = y(h, p, u, l, n[f + 10], 15, -1051523);
    l = y(l, h, p, u, n[f + 1], 21, -2054922799);
    u = y(u, l, h, p, n[f + 8], 6, 1873313359);
    p = y(p, u, l, h, n[f + 15], 10, -30611744);
    h = y(h, p, u, l, n[f + 6], 15, -1560198380);
    l = y(l, h, p, u, n[f + 13], 21, 1309151649);
    u = y(u, l, h, p, n[f + 4], 6, -145523070);
    p = y(p, u, l, h, n[f + 11], 10, -1120210379);
    h = y(h, p, u, l, n[f + 2], 15, 718787259);
    l = y(l, h, p, u, n[f + 9], 21, -343485551);
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