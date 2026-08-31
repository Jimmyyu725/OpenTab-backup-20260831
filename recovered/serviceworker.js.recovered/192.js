(function () {
  var e;
  var r;
  var o = {}.hasOwnProperty;
  r = require("./12.js");
  e = require("./4.js");
  module.exports = function (t) {
    function n(t) {
      n.__super__.constructor.call(this, t);
      this.type = e.Dummy;
    }
    (function (t, e) {
      for (var n in e) {
        if (o.call(e, n)) {
          t[n] = e[n];
        }
      }
      function r() {
        this.constructor = t;
      }
      r.prototype = e.prototype;
      t.prototype = new r();
      t.__super__ = e.prototype;
    })(n, t);
    n.prototype.clone = function () {
      return Object.create(this);
    };
    n.prototype.toString = function (t) {
      return "";
    };
    return n;
  }(r);
}).call(this);