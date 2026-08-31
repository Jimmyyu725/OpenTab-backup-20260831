(function () {
  var e;
  var r;
  var o = {}.hasOwnProperty;
  e = require("./15.js");
  r = require("./154.js");
  module.exports = function (t) {
    function n(t, r) {
      n.__super__.constructor.call(this, t);
      if (r == null) {
        throw new Error("Missing comment text. " + this.debugInfo());
      }
      this.name = "#comment";
      this.type = e.Comment;
      this.value = this.stringify.comment(r);
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
      return this.options.writer.comment(this, this.options.writer.filterOptions(t));
    };
    return n;
  }(r);
}).call(this);