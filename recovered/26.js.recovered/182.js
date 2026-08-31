(function () {
  var e;
  var r = {}.hasOwnProperty;
  e = require("./239.js");
  module.exports = function (t) {
    function e(t) {
      e.__super__.constructor.call(this, t);
    }
    (function (t, e) {
      for (var n in e) {
        if (r.call(e, n)) {
          t[n] = e[n];
        }
      }
      function o() {
        this.constructor = t;
      }
      o.prototype = e.prototype;
      t.prototype = new o();
      t.__super__ = e.prototype;
    })(e, t);
    e.prototype.document = function (t, e) {
      var n;
      var r;
      var o;
      var i;
      var s;
      e = this.filterOptions(e);
      i = "";
      r = 0;
      o = (s = t.children).length;
      for (; r < o; r++) {
        n = s[r];
        i += this.writeChildNode(n, e, 0);
      }
      if (e.pretty && i.slice(-e.newline.length) === e.newline) {
        i = i.slice(0, -e.newline.length);
      }
      return i;
    };
    return e;
  }(e);
}).call(this);