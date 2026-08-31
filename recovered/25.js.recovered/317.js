var n = {
  utf8: {
    stringToBytes: function (t) {
      return n.bin.stringToBytes(unescape(encodeURIComponent(t)));
    },
    bytesToString: function (t) {
      return decodeURIComponent(escape(n.bin.bytesToString(t)));
    }
  },
  bin: {
    stringToBytes: function (t) {
      var e = [];
      for (var n = 0; n < t.length; n++) {
        e.push(t.charCodeAt(n) & 255);
      }
      return e;
    },
    bytesToString: function (t) {
      var e = [];
      for (var n = 0; n < t.length; n++) {
        e.push(String.fromCharCode(t[n]));
      }
      return e.join("");
    }
  }
};
module.exports = n;