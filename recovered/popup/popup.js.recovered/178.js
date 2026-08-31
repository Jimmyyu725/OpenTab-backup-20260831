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
        throw new Error("Missing DTD notation name. " + this.debugInfo(r));
      }
      if (!i.pubID && !i.sysID) {
        throw new Error("Public or system identifiers are required for an external entity. " + this.debugInfo(r));
      }
      this.name = this.stringify.name(r);
      this.type = e.NotationDeclaration;
      if (i.pubID != null) {
        this.pubID = this.stringify.dtdPubID(i.pubID);
      }
      if (i.sysID != null) {
        this.sysID = this.stringify.dtdSysID(i.sysID);
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
    n.prototype.toString = function (t) {
      return this.options.writer.dtdNotation(this, this.options.writer.filterOptions(t));
    };
    return n;
  }(r);
}).call(this);