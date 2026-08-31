(function () {
  var e;
  var r;
  var o;
  var i;
  var s;
  var a;
  var c;
  var u = {}.hasOwnProperty;
  c = require("./24.js").isPlainObject;
  o = require("./189.js");
  r = require("./307.js");
  i = require("./12.js");
  e = require("./4.js");
  a = require("./193.js");
  s = require("./135.js");
  module.exports = function (t) {
    function n(t) {
      n.__super__.constructor.call(this, null);
      this.name = "#document";
      this.type = e.Document;
      this.documentURI = null;
      this.domConfig = new r();
      t ||= {};
      t.writer ||= new s();
      this.options = t;
      this.stringify = new a(t);
    }
    (function (t, e) {
      for (var n in e) {
        if (u.call(e, n)) {
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
    Object.defineProperty(n.prototype, "implementation", {
      value: new o()
    });
    Object.defineProperty(n.prototype, "doctype", {
      get: function () {
        var t;
        var n;
        var r;
        var o;
        n = 0;
        r = (o = this.children).length;
        for (; n < r; n++) {
          if ((t = o[n]).type === e.DocType) {
            return t;
          }
        }
        return null;
      }
    });
    Object.defineProperty(n.prototype, "documentElement", {
      get: function () {
        return this.rootObject || null;
      }
    });
    Object.defineProperty(n.prototype, "inputEncoding", {
      get: function () {
        return null;
      }
    });
    Object.defineProperty(n.prototype, "strictErrorChecking", {
      get: function () {
        return false;
      }
    });
    Object.defineProperty(n.prototype, "xmlEncoding", {
      get: function () {
        if (this.children.length !== 0 && this.children[0].type === e.Declaration) {
          return this.children[0].encoding;
        } else {
          return null;
        }
      }
    });
    Object.defineProperty(n.prototype, "xmlStandalone", {
      get: function () {
        return this.children.length !== 0 && this.children[0].type === e.Declaration && this.children[0].standalone === "yes";
      }
    });
    Object.defineProperty(n.prototype, "xmlVersion", {
      get: function () {
        if (this.children.length !== 0 && this.children[0].type === e.Declaration) {
          return this.children[0].version;
        } else {
          return "1.0";
        }
      }
    });
    Object.defineProperty(n.prototype, "URL", {
      get: function () {
        return this.documentURI;
      }
    });
    Object.defineProperty(n.prototype, "origin", {
      get: function () {
        return null;
      }
    });
    Object.defineProperty(n.prototype, "compatMode", {
      get: function () {
        return null;
      }
    });
    Object.defineProperty(n.prototype, "characterSet", {
      get: function () {
        return null;
      }
    });
    Object.defineProperty(n.prototype, "contentType", {
      get: function () {
        return null;
      }
    });
    n.prototype.end = function (t) {
      var e;
      e = {};
      if (t) {
        if (c(t)) {
          e = t;
          t = this.options.writer;
        }
      } else {
        t = this.options.writer;
      }
      return t.document(this, t.filterOptions(e));
    };
    n.prototype.toString = function (t) {
      return this.options.writer.document(this, this.options.writer.filterOptions(t));
    };
    n.prototype.createElement = function (t) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };
    n.prototype.createDocumentFragment = function () {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };
    n.prototype.createTextNode = function (t) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };
    n.prototype.createComment = function (t) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };
    n.prototype.createCDATASection = function (t) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };
    n.prototype.createProcessingInstruction = function (t, e) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };
    n.prototype.createAttribute = function (t) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };
    n.prototype.createEntityReference = function (t) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };
    n.prototype.getElementsByTagName = function (t) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };
    n.prototype.importNode = function (t, e) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };
    n.prototype.createElementNS = function (t, e) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };
    n.prototype.createAttributeNS = function (t, e) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };
    n.prototype.getElementsByTagNameNS = function (t, e) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };
    n.prototype.getElementById = function (t) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };
    n.prototype.adoptNode = function (t) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };
    n.prototype.normalizeDocument = function () {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };
    n.prototype.renameNode = function (t, e, n) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };
    n.prototype.getElementsByClassName = function (t) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };
    n.prototype.createEvent = function (t) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };
    n.prototype.createRange = function () {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };
    n.prototype.createNodeIterator = function (t, e, n) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };
    n.prototype.createTreeWalker = function (t, e, n) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };
    return n;
  }(i);
}).call(this);