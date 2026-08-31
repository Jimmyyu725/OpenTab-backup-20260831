(function () {
  var e;
  var r;
  var o;
  var i = {}.hasOwnProperty;
  o = require("./57.js").isObject;
  r = require("./35.js");
  e = require("./15.js");
  module.exports = function (t) {
    function n(t, r, i, s) {
      var a;
      n.__super__.constructor.call(this, t);
      if (o(r)) {
        r = (a = r).version;
        i = a.encoding;
        s = a.standalone;
      }
      r ||= "1.0";
      this.type = e.Declaration;
      this.version = this.stringify.xmlVersion(r);
      if (i != null) {
        this.encoding = this.stringify.xmlEncoding(i);
      }
      if (s != null) {
        this.standalone = this.stringify.xmlStandalone(s);
      }
    }
    (function (t, e) {
      for (var n in e) {
        if (i.call(e, n)) {
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