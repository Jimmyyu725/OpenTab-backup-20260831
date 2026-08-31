var n;
var r;
n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
r = {
  rotl: function (t, e) {
    return t << e | t >>> 32 - e;
  },
  rotr: function (t, e) {
    return t << 32 - e | t >>> e;
  },
  endian: function (t) {
    if (t.constructor == Number) {
      return r.rotl(t, 8) & 16711935 | r.rotl(t, 24) & -16711936;
    }
    for (var e = 0; e < t.length; e++) {
      t[e] = r.endian(t[e]);
    }
    return t;
  },
  randomBytes: function (t) {
    var e = [];
    for (; t > 0; t--) {
      e.push(Math.floor(Math.random() * 256));
    }
    return e;
  },
  bytesToWords: function (t) {
    var e = [];
    for (var n = 0, r = 0; n < t.length; n++, r += 8) {
      e[r >>> 5] |= t[n] << 24 - r % 32;
    }
    return e;
  },
  wordsToBytes: function (t) {
    var e = [];
    for (var n = 0; n < t.length * 32; n += 8) {
      e.push(t[n >>> 5] >>> 24 - n % 32 & 255);
    }
    return e;
  },
  bytesToHex: function (t) {
    var e = [];
    for (var n = 0; n < t.length; n++) {
      e.push((t[n] >>> 4).toString(16));
      e.push((t[n] & 15).toString(16));
    }
    return e.join("");
  },
  hexToBytes: function (t) {
    var e = [];
    for (var n = 0; n < t.length; n += 2) {
      e.push(parseInt(t.substr(n, 2), 16));
    }
    return e;
  },
  bytesToBase64: function (t) {
    var e = [];
    for (var r = 0; r < t.length; r += 3) {
      var i = t[r] << 16 | t[r + 1] << 8 | t[r + 2];
      for (var o = 0; o < 4; o++) {
        if (r * 8 + o * 6 <= t.length * 8) {
          e.push(n.charAt(i >>> (3 - o) * 6 & 63));
        } else {
          e.push("=");
        }
      }
    }
    return e.join("");
  },
  base64ToBytes: function (t) {
    t = t.replace(/[^A-Z0-9+\/]/gi, "");
    var e = [];
    for (var r = 0, i = 0; r < t.length; i = ++r % 4) {
      if (i != 0) {
        e.push((n.indexOf(t.charAt(r - 1)) & Math.pow(2, i * -2 + 8) - 1) << i * 2 | n.indexOf(t.charAt(r)) >>> 6 - i * 2);
      }
    }
    return e;
  }
};
module.exports = r;