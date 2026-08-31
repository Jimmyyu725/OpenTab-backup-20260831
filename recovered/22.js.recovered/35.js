(function () {
  var e;
  var r;
  var i;
  var o;
  var s;
  var a;
  var c;
  var u;
  var l;
  var h;
  var p;
  var f;
  var d;
  var g;
  var m;
  var y;
  var b;
  var v = {}.hasOwnProperty;
  b = require("./57.js");
  y = b.isObject;
  m = b.isFunction;
  g = b.isEmpty;
  d = b.getValue;
  u = null;
  i = null;
  o = null;
  s = null;
  a = null;
  p = null;
  f = null;
  h = null;
  c = null;
  r = null;
  l = null;
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
      if (!u) {
        u = require("./169.js");
        i = require("./171.js");
        o = require("./172.js");
        s = require("./173.js");
        a = require("./174.js");
        p = require("./179.js");
        f = require("./180.js");
        h = require("./181.js");
        c = require("./237.js");
        r = require("./15.js");
        l = require("./340.js");
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
          this.childNodeList = new l(this.children);
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
        var i;
        var o;
        if (this.nodeType === r.Element || this.nodeType === r.DocumentFragment) {
          o = "";
          e = 0;
          n = (i = this.children).length;
          for (; e < n; e++) {
            if ((t = i[e]).textContent) {
              o += t.textContent;
            }
          }
          return o;
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
      var i;
      var o;
      this.parent = t;
      if (t) {
        this.options = t.options;
        this.stringify = t.stringify;
      }
      o = [];
      n = 0;
      r = (i = this.children).length;
      for (; n < r; n++) {
        e = i[n];
        o.push(e.setParent(this));
      }
      return o;
    };
    t.prototype.element = function (t, e, n) {
      var r;
      var i;
      var o;
      var s;
      var a;
      var c;
      var u;
      var l;
      var h;
      var p;
      var f;
      c = null;
      if (e === null && n == null) {
        e = (h = [{}, null])[0];
        n = h[1];
      }
      if (e == null) {
        e = {};
      }
      e = d(e);
      if (!y(e)) {
        n = (p = [e, n])[0];
        e = p[1];
      }
      if (t != null) {
        t = d(t);
      }
      if (Array.isArray(t)) {
        o = 0;
        u = t.length;
        for (; o < u; o++) {
          i = t[o];
          c = this.element(i);
        }
      } else if (m(t)) {
        c = this.element(t.apply());
      } else if (y(t)) {
        for (a in t) {
          if (v.call(t, a)) {
            f = t[a];
            if (m(f)) {
              f = f.apply();
            }
            if (!this.options.ignoreDecorators && this.stringify.convertAttKey && a.indexOf(this.stringify.convertAttKey) === 0) {
              c = this.attribute(a.substr(this.stringify.convertAttKey.length), f);
            } else if (!this.options.separateArrayItems && Array.isArray(f) && g(f)) {
              c = this.dummy();
            } else if (y(f) && g(f)) {
              c = this.element(a);
            } else if (this.options.keepNullNodes || f != null) {
              if (!this.options.separateArrayItems && Array.isArray(f)) {
                s = 0;
                l = f.length;
                for (; s < l; s++) {
                  i = f[s];
                  (r = {})[a] = i;
                  c = this.element(r);
                }
              } else if (y(f)) {
                if (!this.options.ignoreDecorators && this.stringify.convertTextKey && a.indexOf(this.stringify.convertTextKey) === 0) {
                  c = this.element(f);
                } else {
                  (c = this.element(a)).element(f);
                }
              } else {
                c = this.element(a, f);
              }
            } else {
              c = this.dummy();
            }
          }
        }
      } else {
        c = this.options.keepNullNodes || n !== null ? !this.options.ignoreDecorators && this.stringify.convertTextKey && t.indexOf(this.stringify.convertTextKey) === 0 ? this.text(n) : !this.options.ignoreDecorators && this.stringify.convertCDataKey && t.indexOf(this.stringify.convertCDataKey) === 0 ? this.cdata(n) : !this.options.ignoreDecorators && this.stringify.convertCommentKey && t.indexOf(this.stringify.convertCommentKey) === 0 ? this.comment(n) : !this.options.ignoreDecorators && this.stringify.convertRawKey && t.indexOf(this.stringify.convertRawKey) === 0 ? this.raw(n) : !this.options.ignoreDecorators && this.stringify.convertPIKey && t.indexOf(this.stringify.convertPIKey) === 0 ? this.instruction(t.substr(this.stringify.convertPIKey.length), n) : this.node(t, e, n) : this.dummy();
      }
      if (c == null) {
        throw new Error("Could not create any elements with: " + t + ". " + this.debugInfo());
      }
      return c;
    };
    t.prototype.insertBefore = function (t, e, n) {
      var r;
      var i;
      var o;
      var s;
      var a;
      if (t != null ? t.type : undefined) {
        s = e;
        (o = t).setParent(this);
        if (s) {
          i = children.indexOf(s);
          a = children.splice(i);
          children.push(o);
          Array.prototype.push.apply(children, a);
        } else {
          children.push(o);
        }
        return o;
      }
      if (this.isRoot) {
        throw new Error("Cannot insert elements at root level. " + this.debugInfo(t));
      }
      i = this.parent.children.indexOf(this);
      a = this.parent.children.splice(i);
      r = this.parent.element(t, e, n);
      Array.prototype.push.apply(this.parent.children, a);
      return r;
    };
    t.prototype.insertAfter = function (t, e, n) {
      var r;
      var i;
      var o;
      if (this.isRoot) {
        throw new Error("Cannot insert elements at root level. " + this.debugInfo(t));
      }
      i = this.parent.children.indexOf(this);
      o = this.parent.children.splice(i + 1);
      r = this.parent.element(t, e, n);
      Array.prototype.push.apply(this.parent.children, o);
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
      var i;
      if (t != null) {
        t = d(t);
      }
      e ||= {};
      e = d(e);
      if (!y(e)) {
        n = (i = [e, n])[0];
        e = i[1];
      }
      r = new u(this, t, e);
      if (n != null) {
        r.text(n);
      }
      this.children.push(r);
      return r;
    };
    t.prototype.text = function (t) {
      var e;
      if (y(t)) {
        this.element(t);
      }
      e = new f(this, t);
      this.children.push(e);
      return this;
    };
    t.prototype.cdata = function (t) {
      var e;
      e = new i(this, t);
      this.children.push(e);
      return this;
    };
    t.prototype.comment = function (t) {
      var e;
      e = new o(this, t);
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
      e = new p(this, t);
      this.children.push(e);
      return this;
    };
    t.prototype.dummy = function () {
      return new c(this);
    };
    t.prototype.instruction = function (t, e) {
      var n;
      var r;
      var i;
      var o;
      var s;
      if (t != null) {
        t = d(t);
      }
      if (e != null) {
        e = d(e);
      }
      if (Array.isArray(t)) {
        o = 0;
        s = t.length;
        for (; o < s; o++) {
          n = t[o];
          this.instruction(n);
        }
      } else if (y(t)) {
        for (n in t) {
          if (v.call(t, n)) {
            r = t[n];
            this.instruction(n, r);
          }
        }
      } else {
        if (m(e)) {
          e = e.apply();
        }
        i = new h(this, t, e);
        this.children.push(i);
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
      var i;
      var o;
      i = this.document();
      o = new s(i, t, e, n);
      if (i.children.length === 0) {
        i.children.unshift(o);
      } else if (i.children[0].type === r.Declaration) {
        i.children[0] = o;
      } else {
        i.children.unshift(o);
      }
      return i.root() || i;
    };
    t.prototype.dtd = function (t, e) {
      var n;
      var i;
      var o;
      var s;
      var c;
      var u;
      var l;
      var h;
      var p;
      n = this.document();
      i = new a(n, t, e);
      o = s = 0;
      u = (h = n.children).length;
      for (; s < u; o = ++s) {
        if (h[o].type === r.DocType) {
          n.children[o] = i;
          return i;
        }
      }
      o = c = 0;
      l = (p = n.children).length;
      for (; c < l; o = ++c) {
        if (p[o].isRoot) {
          n.children.splice(o, 0, i);
          return i;
        }
      }
      n.children.push(i);
      return i;
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
      var i;
      n = 0;
      r = (i = this.children).length;
      for (; n < r; n++) {
        if (t === (e = i[n])) {
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
      var i;
      var o;
      var s;
      t ||= this.document();
      r = 0;
      i = (o = t.children).length;
      for (; r < i; r++) {
        if (s = e(n = o[r])) {
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