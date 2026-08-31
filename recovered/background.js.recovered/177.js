(function () {
  var e;
  var r;
  var o = {}.hasOwnProperty;
  r = require("./35.js");
  e = require("./15.js");
  module.exports = function (t) {
    function n(t, r, o) {
      n.__super__.constructor.call(this, t);
      if (r == null) {
        throw new Error("Missing DTD element name. " + this.debugInfo());
      }
      o ||= "(#PCDATA)";
      if (Array.isArray(o)) {
        o = "(" + o.join(",") + ")";
      }
      this.name = this.stringify.name(r);
      this.type = e.ElementDeclaration;
      this.value = this.stringify.dtdElementValue(o);
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
      return this.options.writer.dtdElement(this, this.options.writer.filterOptions(t));
    };
    return n;
  }(r);
}).call(this);