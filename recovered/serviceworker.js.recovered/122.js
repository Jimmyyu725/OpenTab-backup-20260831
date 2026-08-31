(function () {
  var e;
  var r;
  var o;
  var i;
  var s;
  var a;
  var c;
  var u;
  var f = {}.hasOwnProperty;
  u = require("./24.js");
  c = u.isObject;
  a = u.isFunction;
  s = u.getValue;
  i = require("./12.js");
  e = require("./4.js");
  r = require("./191.js");
  o = require("./123.js");
  module.exports = function (t) {
    function n(t, r, o) {
      var i;
      var s;
      var a;
      var c;
      n.__super__.constructor.call(this, t);
      if (r == null) {
        throw new Error("Missing element name. " + this.debugInfo());
      }
      this.name = this.stringify.name(r);
      this.type = e.Element;
      this.attribs = {};
      this.schemaTypeInfo = null;
      if (o != null) {
        this.attribute(o);
      }
      if (t.type === e.Document && (this.isRoot = true, this.documentObject = t, t.rootObject = this, t.children)) {
        s = 0;
        a = (c = t.children).length;
        for (; s < a; s++) {
          if ((i = c[s]).type === e.DocType) {
            i.name = this.name;
            break;
          }
        }
      }
    }
    (function (t, e) {
      for (var n in e) {
        if (f.call(e, n)) {
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
    Object.defineProperty(n.prototype, "tagName", {
      get: function () {
        return this.name;
      }
    });
    Object.defineProperty(n.prototype, "namespaceURI", {
      get: function () {
        return "";
      }
    });
    Object.defineProperty(n.prototype, "prefix", {
      get: function () {
        return "";
      }
    });
    Object.defineProperty(n.prototype, "localName", {
      get: function () {
        return this.name;
      }
    });
    Object.defineProperty(n.prototype, "id", {
      get: function () {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }
    });
    Object.defineProperty(n.prototype, "className", {
      get: function () {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }
    });
    Object.defineProperty(n.prototype, "classList", {
      get: function () {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }
    });
    Object.defineProperty(n.prototype, "attributes", {
      get: function () {
        if (!this.attributeMap || !this.attributeMap.nodes) {
          this.attributeMap = new o(this.attribs);
        }
        return this.attributeMap;
      }
    });
    n.prototype.clone = function () {
      var t;
      var e;
      var n;
      var r;
      if ((n = Object.create(this)).isRoot) {
        n.documentObject = null;
      }
      n.attribs = {};
      for (e in r = this.attribs) {
        if (f.call(r, e)) {
          t = r[e];
          n.attribs[e] = t.clone();
        }
      }
      n.children = [];
      this.children.forEach(function (t) {
        var e;
        (e = t.clone()).parent = n;
        return n.children.push(e);
      });
      return n;
    };
    n.prototype.attribute = function (t, e) {
      var n;
      var o;
      if (t != null) {
        t = s(t);
      }
      if (c(t)) {
        for (n in t) {
          if (f.call(t, n)) {
            o = t[n];
            this.attribute(n, o);
          }
        }
      } else {
        if (a(e)) {
          e = e.apply();
        }
        if (this.options.keepNullAttributes && e == null) {
          this.attribs[t] = new r(this, t, "");
        } else if (e != null) {
          this.attribs[t] = new r(this, t, e);
        }
      }
      return this;
    };
    n.prototype.removeAttribute = function (t) {
      var e;
      var n;
      var r;
      if (t == null) {
        throw new Error("Missing attribute name. " + this.debugInfo());
      }
      t = s(t);
      if (Array.isArray(t)) {
        n = 0;
        r = t.length;
        for (; n < r; n++) {
          e = t[n];
          delete this.attribs[e];
        }
      } else {
        delete this.attribs[t];
      }
      return this;
    };
    n.prototype.toString = function (t) {
      return this.options.writer.element(this, this.options.writer.filterOptions(t));
    };
    n.prototype.att = function (t, e) {
      return this.attribute(t, e);
    };
    n.prototype.a = function (t, e) {
      return this.attribute(t, e);
    };
    n.prototype.getAttribute = function (t) {
      if (this.attribs.hasOwnProperty(t)) {
        return this.attribs[t].value;
      } else {
        return null;
      }
    };
    n.prototype.setAttribute = function (t, e) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };
    n.prototype.getAttributeNode = function (t) {
      if (this.attribs.hasOwnProperty(t)) {
        return this.attribs[t];
      } else {
        return null;
      }
    };
    n.prototype.setAttributeNode = function (t) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };
    n.prototype.removeAttributeNode = function (t) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };
    n.prototype.getElementsByTagName = function (t) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };
    n.prototype.getAttributeNS = function (t, e) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };
    n.prototype.setAttributeNS = function (t, e, n) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };
    n.prototype.removeAttributeNS = function (t, e) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };
    n.prototype.getAttributeNodeNS = function (t, e) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };
    n.prototype.setAttributeNodeNS = function (t) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };
    n.prototype.getElementsByTagNameNS = function (t, e) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };
    n.prototype.hasAttribute = function (t) {
      return this.attribs.hasOwnProperty(t);
    };
    n.prototype.hasAttributeNS = function (t, e) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };
    n.prototype.setIdAttribute = function (t, e) {
      if (this.attribs.hasOwnProperty(t)) {
        return this.attribs[t].isId;
      } else {
        return e;
      }
    };
    n.prototype.setIdAttributeNS = function (t, e, n) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };
    n.prototype.setIdAttributeNode = function (t, e) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };
    n.prototype.getElementsByTagName = function (t) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };
    n.prototype.getElementsByTagNameNS = function (t, e) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };
    n.prototype.getElementsByClassName = function (t) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };
    n.prototype.isEqualNode = function (t) {
      var e;
      var r;
      var o;
      if (!n.__super__.isEqualNode.apply(this, arguments).isEqualNode(t)) {
        return false;
      }
      if (t.namespaceURI !== this.namespaceURI) {
        return false;
      }
      if (t.prefix !== this.prefix) {
        return false;
      }
      if (t.localName !== this.localName) {
        return false;
      }
      if (t.attribs.length !== this.attribs.length) {
        return false;
      }
      e = r = 0;
      o = this.attribs.length - 1;
      for (; o >= 0 ? r <= o : r >= o; e = o >= 0 ? ++r : --r) {
        if (!this.attribs[e].isEqualNode(t.attribs[e])) {
          return false;
        }
      }
      return true;
    };
    return n;
  }(i);
}).call(this);