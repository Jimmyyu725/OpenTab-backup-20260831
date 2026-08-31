(function () {
  var e;
  var r;
  var o;
  var i = {}.hasOwnProperty;
  o = require("./24.js").isObject;
  r = require("./12.js");
  e = require("./4.js");
  module.exports = function (t) {
    function n(t, r, i, s) {
      n.__super__.constructor.call(this, t);
      if (i == null) {
        throw new Error("Missing DTD entity name. " + this.debugInfo(i));
      }
      if (s == null) {
        throw new Error("Missing DTD entity value. " + this.debugInfo(i));
      }
      this.pe = !!r;
      this.name = this.stringify.name(i);
      this.type = e.EntityDeclaration;
      if (o(s)) {
        if (!s.pubID && !s.sysID) {
          throw new Error("Public and/or system identifiers are required for an external entity. " + this.debugInfo(i));
        }
        if (s.pubID && !s.sysID) {
          throw new Error("System identifier is required for a public external entity. " + this.debugInfo(i));
        }
        this.internal = false;
        if (s.pubID != null) {
          this.pubID = this.stringify.dtdPubID(s.pubID);
        }
        if (s.sysID != null) {
          this.sysID = this.stringify.dtdSysID(s.sysID);
        }
        if (s.nData != null) {
          this.nData = this.stringify.dtdNData(s.nData);
        }
        if (this.pe && this.nData) {
          throw new Error("Notation declaration is not allowed in a parameter entity. " + this.debugInfo(i));
        }
      } else {
        this.value = this.stringify.dtdEntityValue(s);
        this.internal = true;
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
    Object.defineProperty(n.prototype, "publicId", {
      get: function () {
        return this.pubID;
      }
    });
    Object.defineProperty(n.prototype, "systemId", {
      get: function () {
        return this.sysID;
      }
    });
    Object.defineProperty(n.prototype, "notationName", {
      get: function () {
        return this.nData || null;
      }
    });
    Object.defineProperty(n.prototype, "inputEncoding", {
      get: function () {
        return null;
      }
    });
    Object.defineProperty(n.prototype, "xmlEncoding", {
      get: function () {
        return null;
      }
    });
    Object.defineProperty(n.prototype, "xmlVersion", {
      get: function () {
        return null;
      }
    });
    n.prototype.toString = function (t) {
      return this.options.writer.dtdEntity(this, this.options.writer.filterOptions(t));
    };
    return n;
  }(r);
}).call(this);