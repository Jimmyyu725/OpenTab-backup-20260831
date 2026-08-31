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
      var o = t[r] << 16 | t[r + 1] << 8 | t[r + 2];
      for (var i = 0; i < 4; i++) {
        if (r * 8 + i * 6 <= t.length * 8) {
          e.push(n.charAt(o >>> (3 - i) * 6 & 63));
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
    for (var r = 0, o = 0; r < t.length; o = ++r % 4) {
      if (o != 0) {
        e.push((n.indexOf(t.charAt(r - 1)) & Math.pow(2, o * -2 + 8) - 1) << o * 2 | n.indexOf(t.charAt(r)) >>> 6 - o * 2);
      }
    }
    return e;
  }
};
module.exports = r;