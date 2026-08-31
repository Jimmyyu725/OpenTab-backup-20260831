(function () {
  var e;
  var r;
  var o;
  var i = {}.hasOwnProperty;
  o = require("./24.js").assign;
  e = require("./4.js");
  require("./126.js");
  require("./127.js");
  require("./124.js");
  require("./125.js");
  require("./122.js");
  require("./132.js");
  require("./133.js");
  require("./134.js");
  require("./192.js");
  require("./128.js");
  require("./130.js");
  require("./129.js");
  require("./131.js");
  r = require("./67.js");
  module.exports = function () {
    function t(t) {
      var e;
      var n;
      var r;
      t ||= {};
      this.options = t;
      for (e in n = t.writer || {}) {
        if (i.call(n, e)) {
          r = n[e];
          this["_" + e] = this[e];
          this[e] = r;
        }
      }
    }
    t.prototype.filterOptions = function (t) {
      var e;
      t ||= {};
      t = o({}, this.options, t);
      (e = {
        writer: this
      }).pretty = t.pretty || false;
      e.allowEmpty = t.allowEmpty || false;
      e.indent = t.indent ?? "  ";
      e.newline = t.newline ?? "\n";
      e.offset = t.offset ?? 0;
      e.dontPrettyTextNodes = t.dontPrettyTextNodes ?? t.dontprettytextnodes ?? 0;
      e.spaceBeforeSlash = t.spaceBeforeSlash ?? t.spacebeforeslash ?? "";
      if (e.spaceBeforeSlash === true) {
        e.spaceBeforeSlash = " ";
      }
      e.suppressPrettyCount = 0;
      e.user = {};
      e.state = r.None;
      return e;
    };
    t.prototype.indent = function (t, e, n) {
      var r;
      if (!e.pretty || e.suppressPrettyCount) {
        return "";
      } else if (e.pretty && (r = (n || 0) + e.offset + 1) > 0) {
        return new Array(r).join(e.indent);
      } else {
        return "";
      }
    };
    t.prototype.endline = function (t, e, n) {
      if (!e.pretty || e.suppressPrettyCount) {
        return "";
      } else {
        return e.newline;
      }
    };
    t.prototype.attribute = function (t, e, n) {
      var r;
      this.openAttribute(t, e, n);
      r = " " + t.name + "=\"" + t.value + "\"";
      this.closeAttribute(t, e, n);
      return r;
    };
    t.prototype.cdata = function (t, e, n) {
      var o;
      this.openNode(t, e, n);
      e.state = r.OpenTag;
      o = this.indent(t, e, n) + "<![CDATA[";
      e.state = r.InsideTag;
      o += t.value;
      e.state = r.CloseTag;
      o += "]]>" + this.endline(t, e, n);
      e.state = r.None;
      this.closeNode(t, e, n);
      return o;
    };
    t.prototype.comment = function (t, e, n) {
      var o;
      this.openNode(t, e, n);
      e.state = r.OpenTag;
      o = this.indent(t, e, n) + "<!-- ";
      e.state = r.InsideTag;
      o += t.value;
      e.state = r.CloseTag;
      o += " -->" + this.endline(t, e, n);
      e.state = r.None;
      this.closeNode(t, e, n);
      return o;
    };
    t.prototype.declaration = function (t, e, n) {
      var o;
      this.openNode(t, e, n);
      e.state = r.OpenTag;
      o = this.indent(t, e, n) + "<?xml";
      e.state = r.InsideTag;
      o += " version=\"" + t.version + "\"";
      if (t.encoding != null) {
        o += " encoding=\"" + t.encoding + "\"";
      }
      if (t.standalone != null) {
        o += " standalone=\"" + t.standalone + "\"";
      }
      e.state = r.CloseTag;
      o += e.spaceBeforeSlash + "?>";
      o += this.endline(t, e, n);
      e.state = r.None;
      this.closeNode(t, e, n);
      return o;
    };
    t.prototype.docType = function (t, e, n) {
      var o;
      var i;
      var s;
      var a;
      var c;
      n ||= 0;
      this.openNode(t, e, n);
      e.state = r.OpenTag;
      a = this.indent(t, e, n);
      a += "<!DOCTYPE " + t.root().name;
      if (t.pubID && t.sysID) {
        a += " PUBLIC \"" + t.pubID + "\" \"" + t.sysID + "\"";
      } else if (t.sysID) {
        a += " SYSTEM \"" + t.sysID + "\"";
      }
      if (t.children.length > 0) {
        a += " [";
        a += this.endline(t, e, n);
        e.state = r.InsideTag;
        i = 0;
        s = (c = t.children).length;
        for (; i < s; i++) {
          o = c[i];
          a += this.writeChildNode(o, e, n + 1);
        }
        e.state = r.CloseTag;
        a += "]";
      }
      e.state = r.CloseTag;
      a += e.spaceBeforeSlash + ">";
      a += this.endline(t, e, n);
      e.state = r.None;
      this.closeNode(t, e, n);
      return a;
    };
    t.prototype.element = function (t, n, o) {
      var s;
      var a;
      var c;
      var u;
      var f;
      var l;
      var h;
      var p;
      var d;
      var y;
      var m;
      var g;
      var v;
      var b;
      o ||= 0;
      y = false;
      m = "";
      this.openNode(t, n, o);
      n.state = r.OpenTag;
      m += this.indent(t, n, o) + "<" + t.name;
      for (d in g = t.attribs) {
        if (i.call(g, d)) {
          s = g[d];
          m += this.attribute(s, n, o);
        }
      }
      u = (c = t.children.length) === 0 ? null : t.children[0];
      if (c === 0 || t.children.every(function (t) {
        return (t.type === e.Text || t.type === e.Raw) && t.value === "";
      })) {
        if (n.allowEmpty) {
          m += ">";
          n.state = r.CloseTag;
          m += "</" + t.name + ">" + this.endline(t, n, o);
        } else {
          n.state = r.CloseTag;
          m += n.spaceBeforeSlash + "/>" + this.endline(t, n, o);
        }
      } else if (!n.pretty || c !== 1 || u.type !== e.Text && u.type !== e.Raw || u.value == null) {
        if (n.dontPrettyTextNodes) {
          f = 0;
          h = (v = t.children).length;
          for (; f < h; f++) {
            if (((a = v[f]).type === e.Text || a.type === e.Raw) && a.value != null) {
              n.suppressPrettyCount++;
              y = true;
              break;
            }
          }
        }
        m += ">" + this.endline(t, n, o);
        n.state = r.InsideTag;
        l = 0;
        p = (b = t.children).length;
        for (; l < p; l++) {
          a = b[l];
          m += this.writeChildNode(a, n, o + 1);
        }
        n.state = r.CloseTag;
        m += this.indent(t, n, o) + "</" + t.name + ">";
        if (y) {
          n.suppressPrettyCount--;
        }
        m += this.endline(t, n, o);
        n.state = r.None;
      } else {
        m += ">";
        n.state = r.InsideTag;
        n.suppressPrettyCount++;
        y = true;
        m += this.writeChildNode(u, n, o + 1);
        n.suppressPrettyCount--;
        y = false;
        n.state = r.CloseTag;
        m += "</" + t.name + ">" + this.endline(t, n, o);
      }
      this.closeNode(t, n, o);
      return m;
    };
    t.prototype.writeChildNode = function (t, n, r) {
      switch (t.type) {
        case e.CData:
          return this.cdata(t, n, r);
        case e.Comment:
          return this.comment(t, n, r);
        case e.Element:
          return this.element(t, n, r);
        case e.Raw:
          return this.raw(t, n, r);
        case e.Text:
          return this.text(t, n, r);
        case e.ProcessingInstruction:
          return this.processingInstruction(t, n, r);
        case e.Dummy:
          return "";
        case e.Declaration:
          return this.declaration(t, n, r);
        case e.DocType:
          return this.docType(t, n, r);
        case e.AttributeDeclaration:
          return this.dtdAttList(t, n, r);
        case e.ElementDeclaration:
          return this.dtdElement(t, n, r);
        case e.EntityDeclaration:
          return this.dtdEntity(t, n, r);
        case e.NotationDeclaration:
          return this.dtdNotation(t, n, r);
        default:
          throw new Error("Unknown XML node type: " + t.constructor.name);
      }
    };
    t.prototype.processingInstruction = function (t, e, n) {
      var o;
      this.openNode(t, e, n);
      e.state = r.OpenTag;
      o = this.indent(t, e, n) + "<?";
      e.state = r.InsideTag;
      o += t.target;
      if (t.value) {
        o += " " + t.value;
      }
      e.state = r.CloseTag;
      o += e.spaceBeforeSlash + "?>";
      o += this.endline(t, e, n);
      e.state = r.None;
      this.closeNode(t, e, n);
      return o;
    };
    t.prototype.raw = function (t, e, n) {
      var o;
      this.openNode(t, e, n);
      e.state = r.OpenTag;
      o = this.indent(t, e, n);
      e.state = r.InsideTag;
      o += t.value;
      e.state = r.CloseTag;
      o += this.endline(t, e, n);
      e.state = r.None;
      this.closeNode(t, e, n);
      return o;
    };
    t.prototype.text = function (t, e, n) {
      var o;
      this.openNode(t, e, n);
      e.state = r.OpenTag;
      o = this.indent(t, e, n);
      e.state = r.InsideTag;
      o += t.value;
      e.state = r.CloseTag;
      o += this.endline(t, e, n);
      e.state = r.None;
      this.closeNode(t, e, n);
      return o;
    };
    t.prototype.dtdAttList = function (t, e, n) {
      var o;
      this.openNode(t, e, n);
      e.state = r.OpenTag;
      o = this.indent(t, e, n) + "<!ATTLIST";
      e.state = r.InsideTag;
      o += " " + t.elementName + " " + t.attributeName + " " + t.attributeType;
      if (t.defaultValueType !== "#DEFAULT") {
        o += " " + t.defaultValueType;
      }
      if (t.defaultValue) {
        o += " \"" + t.defaultValue + "\"";
      }
      e.state = r.CloseTag;
      o += e.spaceBeforeSlash + ">" + this.endline(t, e, n);
      e.state = r.None;
      this.closeNode(t, e, n);
      return o;
    };
    t.prototype.dtdElement = function (t, e, n) {
      var o;
      this.openNode(t, e, n);
      e.state = r.OpenTag;
      o = this.indent(t, e, n) + "<!ELEMENT";
      e.state = r.InsideTag;
      o += " " + t.name + " " + t.value;
      e.state = r.CloseTag;
      o += e.spaceBeforeSlash + ">" + this.endline(t, e, n);
      e.state = r.None;
      this.closeNode(t, e, n);
      return o;
    };
    t.prototype.dtdEntity = function (t, e, n) {
      var o;
      this.openNode(t, e, n);
      e.state = r.OpenTag;
      o = this.indent(t, e, n) + "<!ENTITY";
      e.state = r.InsideTag;
      if (t.pe) {
        o += " %";
      }
      o += " " + t.name;
      if (t.value) {
        o += " \"" + t.value + "\"";
      } else {
        if (t.pubID && t.sysID) {
          o += " PUBLIC \"" + t.pubID + "\" \"" + t.sysID + "\"";
        } else if (t.sysID) {
          o += " SYSTEM \"" + t.sysID + "\"";
        }
        if (t.nData) {
          o += " NDATA " + t.nData;
        }
      }
      e.state = r.CloseTag;
      o += e.spaceBeforeSlash + ">" + this.endline(t, e, n);
      e.state = r.None;
      this.closeNode(t, e, n);
      return o;
    };
    t.prototype.dtdNotation = function (t, e, n) {
      var o;
      this.openNode(t, e, n);
      e.state = r.OpenTag;
      o = this.indent(t, e, n) + "<!NOTATION";
      e.state = r.InsideTag;
      o += " " + t.name;
      if (t.pubID && t.sysID) {
        o += " PUBLIC \"" + t.pubID + "\" \"" + t.sysID + "\"";
      } else if (t.pubID) {
        o += " PUBLIC \"" + t.pubID + "\"";
      } else if (t.sysID) {
        o += " SYSTEM \"" + t.sysID + "\"";
      }
      e.state = r.CloseTag;
      o += e.spaceBeforeSlash + ">" + this.endline(t, e, n);
      e.state = r.None;
      this.closeNode(t, e, n);
      return o;
    };
    t.prototype.openNode = function (t, e, n) {};
    t.prototype.closeNode = function (t, e, n) {};
    t.prototype.openAttribute = function (t, e, n) {};
    t.prototype.closeAttribute = function (t, e, n) {};
    return t;
  }();
}).call(this);