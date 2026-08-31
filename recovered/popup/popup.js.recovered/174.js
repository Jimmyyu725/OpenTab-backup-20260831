(function () {
  var e;
  var r;
  var i;
  var o;
  var s;
  var a;
  var c;
  var u;
  var l = {}.hasOwnProperty;
  u = require("./57.js").isObject;
  c = require("./35.js");
  e = require("./15.js");
  r = require("./175.js");
  o = require("./176.js");
  i = require("./177.js");
  s = require("./178.js");
  a = require("./170.js");
  module.exports = function (t) {
    function n(t, r, i) {
      var o;
      var s;
      var a;
      var c;
      var l;
      var h;
      n.__super__.constructor.call(this, t);
      this.type = e.DocType;
      if (t.children) {
        s = 0;
        a = (c = t.children).length;
        for (; s < a; s++) {
          if ((o = c[s]).type === e.Element) {
            this.name = o.name;
            break;
          }
        }
      }
      this.documentObject = t;
      if (u(r)) {
        r = (l = r).pubID;
        i = l.sysID;
      }
      if (i == null) {
        i = (h = [r, i])[0];
        r = h[1];
      }
      if (r != null) {
        this.pubID = this.stringify.dtdPubID(r);
      }
      if (i != null) {
        this.sysID = this.stringify.dtdSysID(i);
      }
    }
    (function (t, e) {
      for (var n in e) {
        if (l.call(e, n)) {
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
    Object.defineProperty(n.prototype, "entities", {
      get: function () {
        var t;
        var n;
        var r;
        var i;
        var o;
        i = {};
        n = 0;
        r = (o = this.children).length;
        for (; n < r; n++) {
          if ((t = o[n]).type === e.EntityDeclaration && !t.pe) {
            i[t.name] = t;
          }
        }
        return new a(i);
      }
    });
    Object.defineProperty(n.prototype, "notations", {
      get: function () {
        var t;
        var n;
        var r;
        var i;
        var o;
        i = {};
        n = 0;
        r = (o = this.children).length;
        for (; n < r; n++) {
          if ((t = o[n]).type === e.NotationDeclaration) {
            i[t.name] = t;
          }
        }
        return new a(i);
      }
    });
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
    Object.defineProperty(n.prototype, "internalSubset", {
      get: function () {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }
    });
    n.prototype.element = function (t, e) {
      var n;
      n = new i(this, t, e);
      this.children.push(n);
      return this;
    };
    n.prototype.attList = function (t, e, n, i, o) {
      var s;
      s = new r(this, t, e, n, i, o);
      this.children.push(s);
      return this;
    };
    n.prototype.entity = function (t, e) {
      var n;
      n = new o(this, false, t, e);
      this.children.push(n);
      return this;
    };
    n.prototype.pEntity = function (t, e) {
      var n;
      n = new o(this, true, t, e);
      this.children.push(n);
      return this;
    };
    n.prototype.notation = function (t, e) {
      var n;
      n = new s(this, t, e);
      this.children.push(n);
      return this;
    };
    n.prototype.toString = function (t) {
      return this.options.writer.docType(this, this.options.writer.filterOptions(t));
    };
    n.prototype.ele = function (t, e) {
      return this.element(t, e);
    };
    n.prototype.att = function (t, e, n, r, i) {
      return this.attList(t, e, n, r, i);
    };
    n.prototype.ent = function (t, e) {
      return this.entity(t, e);
    };
    n.prototype.pent = function (t, e) {
      return this.pEntity(t, e);
    };
    n.prototype.not = function (t, e) {
      return this.notation(t, e);
    };
    n.prototype.up = function () {
      return this.root() || this.documentObject;
    };
    n.prototype.isEqualNode = function (t) {
      return !!n.__super__.isEqualNode.apply(this, arguments).isEqualNode(t) && t.name === this.name && t.publicId === this.publicId && t.systemId === this.systemId;
    };
    return n;
  }(c);
}).call(this);