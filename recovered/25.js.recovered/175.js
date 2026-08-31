(function () {
  var e;
  var r;
  var o = {}.hasOwnProperty;
  r = require("./35.js");
  e = require("./15.js");
  module.exports = function (t) {
    function n(t, r, o, i, s, a) {
      n.__super__.constructor.call(this, t);
      if (r == null) {
        throw new Error("Missing DTD element name. " + this.debugInfo());
      }
      if (o == null) {
        throw new Error("Missing DTD attribute name. " + this.debugInfo(r));
      }
      if (!i) {
        throw new Error("Missing DTD attribute type. " + this.debugInfo(r));
      }
      if (!s) {
        throw new Error("Missing DTD attribute default. " + this.debugInfo(r));
      }
      if (s.indexOf("#") !== 0) {
        s = "#" + s;
      }
      if (!s.match(/^(#REQUIRED|#IMPLIED|#FIXED|#DEFAULT)$/)) {
        throw new Error("Invalid default value type; expected: #REQUIRED, #IMPLIED, #FIXED or #DEFAULT. " + this.debugInfo(r));
      }
      if (a && !s.match(/^(#FIXED|#DEFAULT)$/)) {
        throw new Error("Default value only applies to #FIXED or #DEFAULT. " + this.debugInfo(r));
      }
      this.elementName = this.stringify.name(r);
      this.type = e.AttributeDeclaration;
      this.attributeName = this.stringify.name(o);
      this.attributeType = this.stringify.dtdAttType(i);
      if (a) {
        this.defaultValue = this.stringify.dtdAttDefault(a);
      }
      this.defaultValueType = s;
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
      return this.options.writer.dtdAttList(this, this.options.writer.filterOptions(t));
    };
    return n;
  }(r);
}).call(this);