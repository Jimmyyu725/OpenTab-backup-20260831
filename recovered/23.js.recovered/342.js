(function () {
  var e;
  var r;
  var o;
  var i;
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
  var y;
  var m;
  var b;
  var w;
  var v;
  var _;
  var T;
  var E;
  var x;
  var S = {}.hasOwnProperty;
  x = require("./57.js");
  T = x.isObject;
  _ = x.isFunction;
  E = x.isPlainObject;
  v = x.getValue;
  e = require("./15.js");
  f = require("./235.js");
  d = require("./169.js");
  i = require("./171.js");
  s = require("./172.js");
  y = require("./179.js");
  w = require("./180.js");
  g = require("./181.js");
  h = require("./173.js");
  p = require("./174.js");
  a = require("./175.js");
  u = require("./176.js");
  c = require("./177.js");
  l = require("./178.js");
  o = require("./236.js");
  b = require("./238.js");
  m = require("./182.js");
  r = require("./155.js");
  module.exports = function () {
    function t(t, n, r) {
      var o;
      this.name = "?xml";
      this.type = e.Document;
      t ||= {};
      o = {};
      if (t.writer) {
        if (E(t.writer)) {
          o = t.writer;
          t.writer = new m();
        }
      } else {
        t.writer = new m();
      }
      this.options = t;
      this.writer = t.writer;
      this.writerOptions = this.writer.filterOptions(o);
      this.stringify = new b(t);
      this.onDataCallback = n || function () {};
      this.onEndCallback = r || function () {};
      this.currentNode = null;
      this.currentLevel = -1;
      this.openTags = {};
      this.documentStarted = false;
      this.documentCompleted = false;
      this.root = null;
    }
    t.prototype.createChildNode = function (t) {
      var n;
      var r;
      var o;
      var i;
      var s;
      var a;
      var c;
      var u;
      switch (t.type) {
        case e.CData:
          this.cdata(t.value);
          break;
        case e.Comment:
          this.comment(t.value);
          break;
        case e.Element:
          o = {};
          for (r in c = t.attribs) {
            if (S.call(c, r)) {
              n = c[r];
              o[r] = n.value;
            }
          }
          this.node(t.name, o);
          break;
        case e.Dummy:
          this.dummy();
          break;
        case e.Raw:
          this.raw(t.value);
          break;
        case e.Text:
          this.text(t.value);
          break;
        case e.ProcessingInstruction:
          this.instruction(t.target, t.value);
          break;
        default:
          throw new Error("This XML node type is not supported in a JS object: " + t.constructor.name);
      }
      s = 0;
      a = (u = t.children).length;
      for (; s < a; s++) {
        i = u[s];
        this.createChildNode(i);
        if (i.type === e.Element) {
          this.up();
        }
      }
      return this;
    };
    t.prototype.dummy = function () {
      return this;
    };
    t.prototype.node = function (t, e, n) {
      var r;
      if (t == null) {
        throw new Error("Missing node name.");
      }
      if (this.root && this.currentLevel === -1) {
        throw new Error("Document can only have one root node. " + this.debugInfo(t));
      }
      this.openCurrent();
      t = v(t);
      if (e == null) {
        e = {};
      }
      e = v(e);
      if (!T(e)) {
        n = (r = [e, n])[0];
        e = r[1];
      }
      this.currentNode = new d(this, t, e);
      this.currentNode.children = false;
      this.currentLevel++;
      this.openTags[this.currentLevel] = this.currentNode;
      if (n != null) {
        this.text(n);
      }
      return this;
    };
    t.prototype.element = function (t, n, r) {
      var o;
      var i;
      var s;
      var a;
      var c;
      var u;
      if (this.currentNode && this.currentNode.type === e.DocType) {
        this.dtdElement.apply(this, arguments);
      } else if (Array.isArray(t) || T(t) || _(t)) {
        a = this.options.noValidation;
        this.options.noValidation = true;
        (u = new f(this.options).element("TEMP_ROOT")).element(t);
        this.options.noValidation = a;
        i = 0;
        s = (c = u.children).length;
        for (; i < s; i++) {
          o = c[i];
          this.createChildNode(o);
          if (o.type === e.Element) {
            this.up();
          }
        }
      } else {
        this.node(t, n, r);
      }
      return this;
    };
    t.prototype.attribute = function (t, e) {
      var n;
      var r;
      if (!this.currentNode || this.currentNode.children) {
        throw new Error("att() can only be used immediately after an ele() call in callback mode. " + this.debugInfo(t));
      }
      if (t != null) {
        t = v(t);
      }
      if (T(t)) {
        for (n in t) {
          if (S.call(t, n)) {
            r = t[n];
            this.attribute(n, r);
          }
        }
      } else {
        if (_(e)) {
          e = e.apply();
        }
        if (this.options.keepNullAttributes && e == null) {
          this.currentNode.attribs[t] = new o(this, t, "");
        } else if (e != null) {
          this.currentNode.attribs[t] = new o(this, t, e);
        }
      }
      return this;
    };
    t.prototype.text = function (t) {
      var e;
      this.openCurrent();
      e = new w(this, t);
      this.onData(this.writer.text(e, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
      return this;
    };
    t.prototype.cdata = function (t) {
      var e;
      this.openCurrent();
      e = new i(this, t);
      this.onData(this.writer.cdata(e, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
      return this;
    };
    t.prototype.comment = function (t) {
      var e;
      this.openCurrent();
      e = new s(this, t);
      this.onData(this.writer.comment(e, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
      return this;
    };
    t.prototype.raw = function (t) {
      var e;
      this.openCurrent();
      e = new y(this, t);
      this.onData(this.writer.raw(e, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
      return this;
    };
    t.prototype.instruction = function (t, e) {
      var n;
      var r;
      var o;
      var i;
      var s;
      this.openCurrent();
      if (t != null) {
        t = v(t);
      }
      if (e != null) {
        e = v(e);
      }
      if (Array.isArray(t)) {
        n = 0;
        i = t.length;
        for (; n < i; n++) {
          r = t[n];
          this.instruction(r);
        }
      } else if (T(t)) {
        for (r in t) {
          if (S.call(t, r)) {
            o = t[r];
            this.instruction(r, o);
          }
        }
      } else {
        if (_(e)) {
          e = e.apply();
        }
        s = new g(this, t, e);
        this.onData(this.writer.processingInstruction(s, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
      }
      return this;
    };
    t.prototype.declaration = function (t, e, n) {
      var r;
      this.openCurrent();
      if (this.documentStarted) {
        throw new Error("declaration() must be the first node.");
      }
      r = new h(this, t, e, n);
      this.onData(this.writer.declaration(r, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
      return this;
    };
    t.prototype.doctype = function (t, e, n) {
      this.openCurrent();
      if (t == null) {
        throw new Error("Missing root node name.");
      }
      if (this.root) {
        throw new Error("dtd() must come before the root node.");
      }
      this.currentNode = new p(this, e, n);
      this.currentNode.rootNodeName = t;
      this.currentNode.children = false;
      this.currentLevel++;
      this.openTags[this.currentLevel] = this.currentNode;
      return this;
    };
    t.prototype.dtdElement = function (t, e) {
      var n;
      this.openCurrent();
      n = new c(this, t, e);
      this.onData(this.writer.dtdElement(n, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
      return this;
    };
    t.prototype.attList = function (t, e, n, r, o) {
      var i;
      this.openCurrent();
      i = new a(this, t, e, n, r, o);
      this.onData(this.writer.dtdAttList(i, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
      return this;
    };
    t.prototype.entity = function (t, e) {
      var n;
      this.openCurrent();
      n = new u(this, false, t, e);
      this.onData(this.writer.dtdEntity(n, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
      return this;
    };
    t.prototype.pEntity = function (t, e) {
      var n;
      this.openCurrent();
      n = new u(this, true, t, e);
      this.onData(this.writer.dtdEntity(n, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
      return this;
    };
    t.prototype.notation = function (t, e) {
      var n;
      this.openCurrent();
      n = new l(this, t, e);
      this.onData(this.writer.dtdNotation(n, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
      return this;
    };
    t.prototype.up = function () {
      if (this.currentLevel < 0) {
        throw new Error("The document node has no parent.");
      }
      if (this.currentNode) {
        if (this.currentNode.children) {
          this.closeNode(this.currentNode);
        } else {
          this.openNode(this.currentNode);
        }
        this.currentNode = null;
      } else {
        this.closeNode(this.openTags[this.currentLevel]);
      }
      delete this.openTags[this.currentLevel];
      this.currentLevel--;
      return this;
    };
    t.prototype.end = function () {
      while (this.currentLevel >= 0) {
        this.up();
      }
      return this.onEnd();
    };
    t.prototype.openCurrent = function () {
      if (this.currentNode) {
        this.currentNode.children = true;
        return this.openNode(this.currentNode);
      }
    };
    t.prototype.openNode = function (t) {
      var n;
      var o;
      var i;
      var s;
      if (!t.isOpen) {
        if (!this.root && this.currentLevel === 0 && t.type === e.Element) {
          this.root = t;
        }
        o = "";
        if (t.type === e.Element) {
          this.writerOptions.state = r.OpenTag;
          o = this.writer.indent(t, this.writerOptions, this.currentLevel) + "<" + t.name;
          for (i in s = t.attribs) {
            if (S.call(s, i)) {
              n = s[i];
              o += this.writer.attribute(n, this.writerOptions, this.currentLevel);
            }
          }
          o += (t.children ? ">" : "/>") + this.writer.endline(t, this.writerOptions, this.currentLevel);
          this.writerOptions.state = r.InsideTag;
        } else {
          this.writerOptions.state = r.OpenTag;
          o = this.writer.indent(t, this.writerOptions, this.currentLevel) + "<!DOCTYPE " + t.rootNodeName;
          if (t.pubID && t.sysID) {
            o += " PUBLIC \"" + t.pubID + "\" \"" + t.sysID + "\"";
          } else if (t.sysID) {
            o += " SYSTEM \"" + t.sysID + "\"";
          }
          if (t.children) {
            o += " [";
            this.writerOptions.state = r.InsideTag;
          } else {
            this.writerOptions.state = r.CloseTag;
            o += ">";
          }
          o += this.writer.endline(t, this.writerOptions, this.currentLevel);
        }
        this.onData(o, this.currentLevel);
        return t.isOpen = true;
      }
    };
    t.prototype.closeNode = function (t) {
      var n;
      if (!t.isClosed) {
        n = "";
        this.writerOptions.state = r.CloseTag;
        n = t.type === e.Element ? this.writer.indent(t, this.writerOptions, this.currentLevel) + "</" + t.name + ">" + this.writer.endline(t, this.writerOptions, this.currentLevel) : this.writer.indent(t, this.writerOptions, this.currentLevel) + "]>" + this.writer.endline(t, this.writerOptions, this.currentLevel);
        this.writerOptions.state = r.None;
        this.onData(n, this.currentLevel);
        return t.isClosed = true;
      }
    };
    t.prototype.onData = function (t, e) {
      this.documentStarted = true;
      return this.onDataCallback(t, e + 1);
    };
    t.prototype.onEnd = function () {
      this.documentCompleted = true;
      return this.onEndCallback();
    };
    t.prototype.debugInfo = function (t) {
      if (t == null) {
        return "";
      } else {
        return "node: <" + t + ">";
      }
    };
    t.prototype.ele = function () {
      return this.element.apply(this, arguments);
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
    t.prototype.dec = function (t, e, n) {
      return this.declaration(t, e, n);
    };
    t.prototype.dtd = function (t, e, n) {
      return this.doctype(t, e, n);
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
    t.prototype.att = function () {
      if (this.currentNode && this.currentNode.type === e.DocType) {
        return this.attList.apply(this, arguments);
      } else {
        return this.attribute.apply(this, arguments);
      }
    };
    t.prototype.a = function () {
      if (this.currentNode && this.currentNode.type === e.DocType) {
        return this.attList.apply(this, arguments);
      } else {
        return this.attribute.apply(this, arguments);
      }
    };
    t.prototype.ent = function (t, e) {
      return this.entity(t, e);
    };
    t.prototype.pent = function (t, e) {
      return this.pEntity(t, e);
    };
    t.prototype.not = function (t, e) {
      return this.notation(t, e);
    };
    return t;
  }();
}).call(this);