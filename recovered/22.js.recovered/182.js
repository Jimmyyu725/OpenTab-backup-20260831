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
      function i() {
        this.constructor = t;
      }
      i.prototype = e.prototype;
      t.prototype = new i();
      t.__super__ = e.prototype;
    })(e, t);
    e.prototype.document = function (t, e) {
      var n;
      var r;
      var i;
      var o;
      var s;
      e = this.filterOptions(e);
      o = "";
      r = 0;
      i = (s = t.children).length;
      for (; r < i; r++) {
        n = s[r];
        o += this.writeChildNode(n, e, 0);
      }
      if (e.pretty && o.slice(-e.newline.length) === e.newline) {
        o = o.slice(0, -e.newline.length);
      }
      return o;
    };
    return e;
  }(e);
}).call(this);