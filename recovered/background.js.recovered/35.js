(function () {
  var e;
  var r;
  var o;
  var i;
  var s;
  var a;
  var u;
  var c;
  var f;
  var l;
  var h;
  var p;
  var d;
  var y;
  var m;
  var g;
  var v;
  var b = {}.hasOwnProperty;
  v = require("./57.js");
  g = v.isObject;
  m = v.isFunction;
  y = v.isEmpty;
  d = v.getValue;
  c = null;
  o = null;
  i = null;
  s = null;
  a = null;
  h = null;
  p = null;
  l = null;
  u = null;
  r = null;
  f = null;
  e = null;
  module.exports = function () {
    function t(t) {
      this.parent = t;
      if (this.parent) {
        this.options = this.parent.options;
        this.stringify = this.parent.stringify;
      }
      this.value = null;
      this.children = [];
      this.baseURI = null;
      if (!c) {
        c = require("./169.js");
        o = require("./171.js");
        i = require("./172.js");
        s = require("./173.js");
        a = require("./174.js");
        h = require("./179.js");
        p = require("./180.js");
        l = require("./181.js");
        u = require("./237.js");
        r = require("./15.js");
        f = require("./340.js");
        require("./170.js");
        e = require("./341.js");
      }
    }
    Object.defineProperty(t.prototype, "nodeName", {
      get: function () {
        return this.name;
      }
    });
    Object.defineProperty(t.prototype, "nodeType", {
      get: function () {
        return this.type;
      }
    });
    Object.defineProperty(t.prototype, "nodeValue", {
      get: function () {
        return this.value;
      }
    });
    Object.defineProperty(t.prototype, "parentNode", {
      get: function () {
        return this.parent;
      }
    });
    Object.defineProperty(t.prototype, "childNodes", {
      get: function () {
        if (!this.childNodeList || !this.childNodeList.nodes) {
          this.childNodeList = new f(this.children);
        }
        return this.childNodeList;
      }
    });
    Object.defineProperty(t.prototype, "firstChild", {
      get: function () {
        return this.children[0] || null;
      }
    });
    Object.defineProperty(t.prototype, "lastChild", {
      get: function () {
        return this.children[this.children.length - 1] || null;
      }
    });
    Object.defineProperty(t.prototype, "previousSibling", {
      get: function () {
        var t;
        t = this.parent.children.indexOf(this);
        return this.parent.children[t - 1] || null;
      }
    });
    Object.defineProperty(t.prototype, "nextSibling", {
      get: function () {
        var t;
        t = this.parent.children.indexOf(this);
        return this.parent.children[t + 1] || null;
      }
    });
    Object.defineProperty(t.prototype, "ownerDocument", {
      get: function () {
        return this.document() || null;
      }
    });
    Object.defineProperty(t.prototype, "textContent", {
      get: function () {
        var t;
        var e;
        var n;
        var o;
        var i;
        if (this.nodeType === r.Element || this.nodeType === r.DocumentFragment) {
          i = "";
          e = 0;
          n = (o = this.children).length;
          for (; e < n; e++) {
            if ((t = o[e]).textContent) {
              i += t.textContent;
            }
          }
          return i;
        }
        return null;
      },
      set: function (t) {
        throw new Error("This DOM method is not implemented." + this.debugInfo());
      }
    });
    t.prototype.setParent = function (t) {
      var e;
      var n;
      var r;
      var o;
      var i;
      this.parent = t;
      if (t) {
        this.options = t.options;
        this.stringify = t.stringify;
      }
      i = [];
      n = 0;
      r = (o = this.children).length;
      for (; n < r; n++) {
        e = o[n];
        i.push(e.setParent(this));
      }
      return i;
    };
    t.prototype.element = function (t, e, n) {
      var r;
      var o;
      var i;
      var s;
      var a;
      var u;
      var c;
      var f;
      var l;
      var h;
      var p;
      u = null;
      if (e === null && n == null) {
        e = (l = [{}, null])[0];
        n = l[1];
      }
      if (e == null) {
        e = {};
      }
      e = d(e);
      if (!g(e)) {
        n = (h = [e, n])[0];
        e = h[1];
      }
      if (t != null) {
        t = d(t);
      }
      if (Array.isArray(t)) {
        i = 0;
        c = t.length;
        for (; i < c; i++) {
          o = t[i];
          u = this.element(o);
        }
      } else if (m(t)) {
        u = this.element(t.apply());
      } else if (g(t)) {
        for (a in t) {
          if (b.call(t, a)) {
            p = t[a];
            if (m(p)) {
              p = p.apply();
            }
            if (!this.options.ignoreDecorators && this.stringify.convertAttKey && a.indexOf(this.stringify.convertAttKey) === 0) {
              u = this.attribute(a.substr(this.stringify.convertAttKey.length), p);
            } else if (!this.options.separateArrayItems && Array.isArray(p) && y(p)) {
              u = this.dummy();
            } else if (g(p) && y(p)) {
              u = this.element(a);
            } else if (this.options.keepNullNodes || p != null) {
              if (!this.options.separateArrayItems && Array.isArray(p)) {
                s = 0;
                f = p.length;
                for (; s < f; s++) {
                  o = p[s];
                  (r = {})[a] = o;
                  u = this.element(r);
                }
              } else if (g(p)) {
                if (!this.options.ignoreDecorators && this.stringify.convertTextKey && a.indexOf(this.stringify.convertTextKey) === 0) {
                  u = this.element(p);
                } else {
                  (u = this.element(a)).element(p);
                }
              } else {
                u = this.element(a, p);
              }
            } else {
              u = this.dummy();
            }
          }
        }
      } else {
        u = this.options.keepNullNodes || n !== null ? !this.options.ignoreDecorators && this.stringify.convertTextKey && t.indexOf(this.stringify.convertTextKey) === 0 ? this.text(n) : !this.options.ignoreDecorators && this.stringify.convertCDataKey && t.indexOf(this.stringify.convertCDataKey) === 0 ? this.cdata(n) : !this.options.ignoreDecorators && this.stringify.convertCommentKey && t.indexOf(this.stringify.convertCommentKey) === 0 ? this.comment(n) : !this.options.ignoreDecorators && this.stringify.convertRawKey && t.indexOf(this.stringify.convertRawKey) === 0 ? this.raw(n) : !this.options.ignoreDecorators && this.stringify.convertPIKey && t.indexOf(this.stringify.convertPIKey) === 0 ? this.instruction(t.substr(this.stringify.convertPIKey.length), n) : this.node(t, e, n) : this.dummy();
      }
      if (u == null) {
        throw new Error("Could not create any elements with: " + t + ". " + this.debugInfo());
      }
      return u;
    };
    t.prototype.insertBefore = function (t, e, n) {
      var r;
      var o;
      var i;
      var s;
      var a;
      if (t != null ? t.type : undefined) {
        s = e;
        (i = t).setParent(this);
        if (s) {
          o = children.indexOf(s);
          a = children.splice(o);
          children.push(i);
          Array.prototype.push.apply(children, a);
        } else {
          children.push(i);
        }
        return i;
      }
      if (this.isRoot) {
        throw new Error("Cannot insert elements at root level. " + this.debugInfo(t));
      }
      o = this.parent.children.indexOf(this);
      a = this.parent.children.splice(o);
      r = this.parent.element(t, e, n);
      Array.prototype.push.apply(this.parent.children, a);
      return r;
    };
    t.prototype.insertAfter = function (t, e, n) {
      var r;
      var o;
      var i;
      if (this.isRoot) {
        throw new Error("Cannot insert elements at root level. " + this.debugInfo(t));
      }
      o = this.parent.children.indexOf(this);
      i = this.parent.children.splice(o + 1);
      r = this.parent.element(t, e, n);
      Array.prototype.push.apply(this.parent.children, i);
      return r;
    };
    t.prototype.remove = function () {
      var t;
      if (this.isRoot) {
        throw new Error("Cannot remove the root element. " + this.debugInfo());
      }
      t = this.parent.children.indexOf(this);
      [].splice.apply(this.parent.children, [t, t - t + 1].concat([]));
      return this.parent;
    };
    t.prototype.node = function (t, e, n) {
      var r;
      var o;
      if (t != null) {
        t = d(t);
      }
      e ||= {};
      e = d(e);
      if (!g(e)) {
        n = (o = [e, n])[0];
        e = o[1];
      }
      r = new c(this, t, e);
      if (n != null) {
        r.text(n);
      }
      this.children.push(r);
      return r;
    };
    t.prototype.text = function (t) {
      var e;
      if (g(t)) {
        this.element(t);
      }
      e = new p(this, t);
      this.children.push(e);
      return this;
    };
    t.prototype.cdata = function (t) {
      var e;
      e = new o(this, t);
      this.children.push(e);
      return this;
    };
    t.prototype.comment = function (t) {
      var e;
      e = new i(this, t);
      this.children.push(e);
      return this;
    };
    t.prototype.commentBefore = function (t) {
      var e;
      var n;
      e = this.parent.children.indexOf(this);
      n = this.parent.children.splice(e);
      this.parent.comment(t);
      Array.prototype.push.apply(this.parent.children, n);
      return this;
    };
    t.prototype.commentAfter = function (t) {
      var e;
      var n;
      e = this.parent.children.indexOf(this);
      n = this.parent.children.splice(e + 1);
      this.parent.comment(t);
      Array.prototype.push.apply(this.parent.children, n);
      return this;
    };
    t.prototype.raw = function (t) {
      var e;
      e = new h(this, t);
      this.children.push(e);
      return this;
    };
    t.prototype.dummy = function () {
      return new u(this);
    };
    t.prototype.instruction = function (t, e) {
      var n;
      var r;
      var o;
      var i;
      var s;
      if (t != null) {
        t = d(t);
      }
      if (e != null) {
        e = d(e);
      }
      if (Array.isArray(t)) {
        i = 0;
        s = t.length;
        for (; i < s; i++) {
          n = t[i];
          this.instruction(n);
        }
      } else if (g(t)) {
        for (n in t) {
          if (b.call(t, n)) {
            r = t[n];
            this.instruction(n, r);
          }
        }
      } else {
        if (m(e)) {
          e = e.apply();
        }
        o = new l(this, t, e);
        this.children.push(o);
      }
      return this;
    };
    t.prototype.instructionBefore = function (t, e) {
      var n;
      var r;
      n = this.parent.children.indexOf(this);
      r = this.parent.children.splice(n);
      this.parent.instruction(t, e);
      Array.prototype.push.apply(this.parent.children, r);
      return this;
    };
    t.prototype.instructionAfter = function (t, e) {
      var n;
      var r;
      n = this.parent.children.indexOf(this);
      r = this.parent.children.splice(n + 1);
      this.parent.instruction(t, e);
      Array.prototype.push.apply(this.parent.children, r);
      return this;
    };
    t.prototype.declaration = function (t, e, n) {
      var o;
      var i;
      o = this.document();
      i = new s(o, t, e, n);
      if (o.children.length === 0) {
        o.children.unshift(i);
      } else if (o.children[0].type === r.Declaration) {
        o.children[0] = i;
      } else {
        o.children.unshift(i);
      }
      return o.root() || o;
    };
    t.prototype.dtd = function (t, e) {
      var n;
      var o;
      var i;
      var s;
      var u;
      var c;
      var f;
      var l;
      var h;
      n = this.document();
      o = new a(n, t, e);
      i = s = 0;
      c = (l = n.children).length;
      for (; s < c; i = ++s) {
        if (l[i].type === r.DocType) {
          n.children[i] = o;
          return o;
        }
      }
      i = u = 0;
      f = (h = n.children).length;
      for (; u < f; i = ++u) {
        if (h[i].isRoot) {
          n.children.splice(i, 0, o);
          return o;
        }
      }
      n.children.push(o);
      return o;
    };
    t.prototype.up = function () {
      if (this.isRoot) {
        throw new Error("The root node has no parent. Use doc() if you need to get the document object.");
      }
      return this.parent;
    };
    t.prototype.root = function () {
      var t;
      for (t = this; t;) {
        if (t.type === r.Document) {
          return t.rootObject;
        }
        if (t.isRoot) {
          return t;
        }
        t = t.parent;
      }
    };
    t.prototype.document = function () {
      var t;
      for (t = this; t;) {
        if (t.type === r.Document) {
          return t;
        }
        t = t.parent;
      }
    };
    t.prototype.end = function (t) {
      return this.document().end(t);
    };
    t.prototype.prev = function () {
      var t;
      if ((t = this.parent.children.indexOf(this)) < 1) {
        throw new Error("Already at the first node. " + this.debugInfo());
      }
      return this.parent.children[t - 1];
    };
    t.prototype.next = function () {
      var t;
      if ((t = this.parent.children.indexOf(this)) === -1 || t === this.parent.children.length - 1) {
        throw new Error("Already at the last node. " + this.debugInfo());
      }
      return this.parent.children[t + 1];
    };
    t.prototype.importDocument = function (t) {
      var e;
      (e = t.root().clone()).parent = this;
      e.isRoot = false;
      this.children.push(e);
      return this;
    };
    t.prototype.debugInfo = function (t) {
      var e;
      var n;
      if ((t = t || this.name) != null || ((e = this.parent) != null ? e.name : undefined)) {
        if (t == null) {
          return "parent: <" + this.parent.name + ">";
        } else if ((n = this.parent) != null ? n.name : undefined) {
          return "node: <" + t + ">, parent: <" + this.parent.name + ">";
        } else {
          return "node: <" + t + ">";
        }
      } else {
        return "";
      }
    };
    t.prototype.ele = function (t, e, n) {
      return this.element(t, e, n);
    };
    t.prototype.nod = function (t, e, n) {
      return this.node(t, e, n);
    };
    t.prototype.txt = function (t) {
      return this.text(t);
    };
    t.prototype.dat = function (t) {
      return this.cdata(t);
    };
    t.prototype.com = function (t) {
      return this.comment(t);
    };
    t.prototype.ins = function (t, e) {
      return this.instruction(t, e);
    };
    t.prototype.doc = function () {
      return this.document();
    };
    t.prototype.dec = function (t, e, n) {
      return this.declaration(t, e, n);
    };
    t.prototype.e = function (t, e, n) {
      return this.element(t, e, n);
    };
    t.prototype.n = function (t, e, n) {
      return this.node(t, e, n);
    };
    t.prototype.t = function (t) {
      return this.text(t);
    };
    t.prototype.d = function (t) {
      return this.cdata(t);
    };
    t.prototype.c = function (t) {
      return this.comment(t);
    };
    t.prototype.r = function (t) {
      return this.raw(t);
    };
    t.prototype.i = function (t, e) {
      return this.instruction(t, e);
    };
    t.prototype.u = function () {
      return this.up();
    };
    t.prototype.importXMLBuilder = function (t) {
      return this.importDocument(t);
    };
    t.prototype.replaceChild = function (t, e) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };
    t.prototype.removeChild = function (t) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };
    t.prototype.appendChild = function (t) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };
    t.prototype.hasChildNodes = function () {
      return this.children.length !== 0;
    };
    t.prototype.cloneNode = function (t) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };
    t.prototype.normalize = function () {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };
    t.prototype.isSupported = function (t, e) {
      return true;
    };
    t.prototype.hasAttributes = function () {
      return this.attribs.length !== 0;
    };
    t.prototype.compareDocumentPosition = function (t) {
      var n;
      this;
      if (this === t) {
        return 0;
      } else if (this.document() !== t.document()) {
        n = e.Disconnected | e.ImplementationSpecific;
        if (Math.random() < 0.5) {
          n |= e.Preceding;
        } else {
          n |= e.Following;
        }
        return n;
      } else if (this.isAncestor(t)) {
        return e.Contains | e.Preceding;
      } else if (this.isDescendant(t)) {
        return e.Contains | e.Following;
      } else if (this.isPreceding(t)) {
        return e.Preceding;
      } else {
        return e.Following;
      }
    };
    t.prototype.isSameNode = function (t) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };
    t.prototype.lookupPrefix = function (t) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };
    t.prototype.isDefaultNamespace = function (t) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };
    t.prototype.lookupNamespaceURI = function (t) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };
    t.prototype.isEqualNode = function (t) {
      var e;
      var n;
      var r;
      if (t.nodeType !== this.nodeType) {
        return false;
      }
      if (t.children.length !== this.children.length) {
        return false;
      }
      e = n = 0;
      r = this.children.length - 1;
      for (; r >= 0 ? n <= r : n >= r; e = r >= 0 ? ++n : --n) {
        if (!this.children[e].isEqualNode(t.children[e])) {
          return false;
        }
      }
      return true;
    };
    t.prototype.getFeature = function (t, e) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };
    t.prototype.setUserData = function (t, e, n) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };
    t.prototype.getUserData = function (t) {
      throw new Error("This DOM method is not implemented." + this.debugInfo());
    };
    t.prototype.contains = function (t) {
      return !!t && (t === this || this.isDescendant(t));
    };
    t.prototype.isDescendant = function (t) {
      var e;
      var n;
      var r;
      var o;
      n = 0;
      r = (o = this.children).length;
      for (; n < r; n++) {
        if (t === (e = o[n])) {
          return true;
        }
        if (e.isDescendant(t)) {
          return true;
        }
      }
      return false;
    };
    t.prototype.isAncestor = function (t) {
      return t.isDescendant(this);
    };
    t.prototype.isPreceding = function (t) {
      var e;
      var n;
      e = this.treePosition(t);
      n = this.treePosition(this);
      return e !== -1 && n !== -1 && e < n;
    };
    t.prototype.isFollowing = function (t) {
      var e;
      var n;
      e = this.treePosition(t);
      n = this.treePosition(this);
      return e !== -1 && n !== -1 && e > n;
    };
    t.prototype.treePosition = function (t) {
      var e;
      var n;
      n = 0;
      e = false;
      this.foreachTreeNode(this.document(), function (r) {
        n++;
        if (!e && r === t) {
          return e = true;
        }
      });
      if (e) {
        return n;
      } else {
        return -1;
      }
    };
    t.prototype.foreachTreeNode = function (t, e) {
      var n;
      var r;
      var o;
      var i;
      var s;
      t ||= this.document();
      r = 0;
      o = (i = t.children).length;
      for (; r < o; r++) {
        if (s = e(n = i[r])) {
          return s;
        }
        if (s = this.foreachTreeNode(n, e)) {
          return s;
        }
      }
    };
    return t;
  }();
}).call(this);