(function () {
  var e;
  var r;
  var i = {}.hasOwnProperty;
  r = require("./35.js");
  e = require("./15.js");
  module.exports = function (t) {
    function n(t, r, i) {
      n.__super__.constructor.call(this, t);
      if (r == null) {
        throw new Error("Missing DTD element name. " + this.debugInfo());
      }
      i ||= "(#PCDATA)";
      if (Array.isArray(i)) {
        i = "(" + i.join(",") + ")";
      }
      this.name = this.stringify.name(r);
      this.type = e.ElementDeclaration;
      this.value = this.stringify.dtdElementValue(i);
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
      return this.options.writer.dtdElement(this, this.options.writer.filterOptions(t));
    };
    return n;
  }(r);
}).call(this);