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
      n.__super__.constructor.call(this, t);
      if (o == null) {
        throw new Error("Missing DTD entity name. " + this.debugInfo(o));
      }
      if (a == null) {
        throw new Error("Missing DTD entity value. " + this.debugInfo(o));
      }
      this.pe = !!r;
      this.name = this.stringify.name(o);
      this.type = e.EntityDeclaration;
      if (i(a)) {
        if (!a.pubID && !a.sysID) {
          throw new Error("Public and/or system identifiers are required for an external entity. " + this.debugInfo(o));
        }
        if (a.pubID && !a.sysID) {
          throw new Error("System identifier is required for a public external entity. " + this.debugInfo(o));
        }
        this.internal = false;
        if (a.pubID != null) {
          this.pubID = this.stringify.dtdPubID(a.pubID);
        }
        if (a.sysID != null) {
          this.sysID = this.stringify.dtdSysID(a.sysID);
        }
        if (a.nData != null) {
          this.nData = this.stringify.dtdNData(a.nData);
        }
        if (this.pe && this.nData) {
          throw new Error("Notation declaration is not allowed in a parameter entity. " + this.debugInfo(o));
        }
      } else {
        this.value = this.stringify.dtdEntityValue(a);
        this.internal = true;
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