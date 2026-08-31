(function () {
  var e;
  e = require("./15.js");
  require("./35.js");
  module.exports = function () {
    function t(t, n, r) {
      this.parent = t;
      if (this.parent) {
        this.options = this.parent.options;
        this.stringify = this.parent.stringify;
      }
      if (n == null) {
        throw new Error("Missing attribute name. " + this.debugInfo(n));
      }
      this.name = this.stringify.name(n);
      this.value = this.stringify.attValue(r);
      this.type = e.Attribute;
      this.isId = false;
      this.schemaTypeInfo = null;
    }
    Object.defineProperty(t.prototype, "nodeType", {
      get: function () {
        return this.type;
      }
    });
    Object.defineProperty(t.prototype, "ownerElement", {
      get: function () {
        return this.parent;
      }
    });
    Object.defineProperty(t.prototype, "textContent", {
      get: function () {
        return this.value;
      },
      set: function (t) {
        return this.value = t || "";
      }
    });
    Object.defineProperty(t.prototype, "namespaceURI", {
      get: function () {
        return "";
      }
    });
    Object.defineProperty(t.prototype, "prefix", {
      get: function () {
        return "";
      }
    });
    Object.defineProperty(t.prototype, "localName", {
      get: function () {
        return this.name;
      }
    });
    Object.defineProperty(t.prototype, "specified", {
      get: function () {
        return true;
      }
    });
    t.prototype.clone = function () {
      return Object.create(this);
    };
    t.prototype.toString = function (t) {
      return this.options.writer.attribute(this, this.options.writer.filterOptions(t));
    };
    t.prototype.debugInfo = function (t) {
      if ((t = t || this.name) == null) {
        return "parent: <" + this.parent.name + ">";
      } else {
        return "attribute: {" + t + "}, parent: <" + this.parent.name + ">";
      }
    };
    t.prototype.isEqualNode = function (t) {
      return t.namespaceURI === this.namespaceURI && t.prefix === this.prefix && t.localName === this.localName && t.value === this.value;
    };
    return t;
  }();
}).call(this);