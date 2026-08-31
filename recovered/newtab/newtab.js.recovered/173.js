(function () {
  var e;
  var r;
  var i;
  var o = {}.hasOwnProperty;
  i = require("./57.js").isObject;
  r = require("./35.js");
  e = require("./15.js");
  module.exports = function (t) {
    function n(t, r, o, a) {
      var s;
      n.__super__.constructor.call(this, t);
      if (i(r)) {
        r = (s = r).version;
        o = s.encoding;
        a = s.standalone;
      }
      r ||= "1.0";
      this.type = e.Declaration;
      this.version = this.stringify.xmlVersion(r);
      if (o != null) {
        this.encoding = this.stringify.xmlEncoding(o);
      }
      if (a != null) {
        this.standalone = this.stringify.xmlStandalone(a);
      }
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
    n.prototype.toString = function (t) {
      return this.options.writer.declaration(this, this.options.writer.filterOptions(t));
    };
    return n;
  }(r);
}).call(this);