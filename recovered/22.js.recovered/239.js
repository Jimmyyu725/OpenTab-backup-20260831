(function () {
  var e;
  var r;
  var i;
  var o = {}.hasOwnProperty;
  i = require("./57.js").assign;
  e = require("./15.js");
  require("./173.js");
  require("./174.js");
  require("./171.js");
  require("./172.js");
  require("./169.js");
  require("./179.js");
  require("./180.js");
  require("./181.js");
  require("./237.js");
  require("./175.js");
  require("./177.js");
  require("./176.js");
  require("./178.js");
  r = require("./155.js");
  module.exports = function () {
    function t(t) {
      var e;
      var n;
      var r;
      t ||= {};
      this.options = t;
      for (e in n = t.writer || {}) {
        if (o.call(n, e)) {
          r = n[e];
          this["_" + e] = this[e];
          this[e] = r;
        }
      }
    }
    t.prototype.filterOptions = function (t) {
      var e;
      t ||= {};
      t = i({}, this.options, t);
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
      var i;
      this.openNode(t, e, n);
      e.state = r.OpenTag;
      i = this.indent(t, e, n) + "<![CDATA[";
      e.state = r.InsideTag;
      i += t.value;
      e.state = r.CloseTag;
      i += "]]>" + this.endline(t, e, n);
      e.state = r.None;
      this.closeNode(t, e, n);
      return i;
    };
    t.prototype.comment = function (t, e, n) {
      var i;
      this.openNode(t, e, n);
      e.state = r.OpenTag;
      i = this.indent(t, e, n) + "<!-- ";
      e.state = r.InsideTag;
      i += t.value;
      e.state = r.CloseTag;
      i += " -->" + this.endline(t, e, n);
      e.state = r.None;
      this.closeNode(t, e, n);
      return i;
    };
    t.prototype.declaration = function (t, e, n) {
      var i;
      this.openNode(t, e, n);
      e.state = r.OpenTag;
      i = this.indent(t, e, n) + "<?xml";
      e.state = r.InsideTag;
      i += " version=\"" + t.version + "\"";
      if (t.encoding != null) {
        i += " encoding=\"" + t.encoding + "\"";
      }
      if (t.standalone != null) {
        i += " standalone=\"" + t.standalone + "\"";
      }
      e.state = r.CloseTag;
      i += e.spaceBeforeSlash + "?>";
      i += this.endline(t, e, n);
      e.state = r.None;
      this.closeNode(t, e, n);
      return i;
    };
    t.prototype.docType = function (t, e, n) {
      var i;
      var o;
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
        o = 0;
        s = (c = t.children).length;
        for (; o < s; o++) {
          i = c[o];
          a += this.writeChildNode(i, e, n + 1);
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
    t.prototype.element = function (t, n, i) {
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
      var v;
      i ||= 0;
      g = false;
      m = "";
      this.openNode(t, n, i);
      n.state = r.OpenTag;
      m += this.indent(t, n, i) + "<" + t.name;
      for (d in y = t.attribs) {
        if (o.call(y, d)) {
          s = y[d];
          m += this.attribute(s, n, i);
        }
      }
      u = (c = t.children.length) === 0 ? null : t.children[0];
      if (c === 0 || t.children.every(function (t) {
        return (t.type === e.Text || t.type === e.Raw) && t.value === "";
      })) {
        if (n.allowEmpty) {
          m += ">";
          n.state = r.CloseTag;
          m += "</" + t.name + ">" + this.endline(t, n, i);
        } else {
          n.state = r.CloseTag;
          m += n.spaceBeforeSlash + "/>" + this.endline(t, n, i);
        }
      } else if (!n.pretty || c !== 1 || u.type !== e.Text && u.type !== e.Raw || u.value == null) {
        if (n.dontPrettyTextNodes) {
          l = 0;
          p = (b = t.children).length;
          for (; l < p; l++) {
            if (((a = b[l]).type === e.Text || a.type === e.Raw) && a.value != null) {
              n.suppressPrettyCount++;
              g = true;
              break;
            }
          }
        }
        m += ">" + this.endline(t, n, i);
        n.state = r.InsideTag;
        h = 0;
        f = (v = t.children).length;
        for (; h < f; h++) {
          a = v[h];
          m += this.writeChildNode(a, n, i + 1);
        }
        n.state = r.CloseTag;
        m += this.indent(t, n, i) + "</" + t.name + ">";
        if (g) {
          n.suppressPrettyCount--;
        }
        m += this.endline(t, n, i);
        n.state = r.None;
      } else {
        m += ">";
        n.state = r.InsideTag;
        n.suppressPrettyCount++;
        g = true;
        m += this.writeChildNode(u, n, i + 1);
        n.suppressPrettyCount--;
        g = false;
        n.state = r.CloseTag;
        m += "</" + t.name + ">" + this.endline(t, n, i);
      }
      this.closeNode(t, n, i);
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
      var i;
      this.openNode(t, e, n);
      e.state = r.OpenTag;
      i = this.indent(t, e, n) + "<?";
      e.state = r.InsideTag;
      i += t.target;
      if (t.value) {
        i += " " + t.value;
      }
      e.state = r.CloseTag;
      i += e.spaceBeforeSlash + "?>";
      i += this.endline(t, e, n);
      e.state = r.None;
      this.closeNode(t, e, n);
      return i;
    };
    t.prototype.raw = function (t, e, n) {
      var i;
      this.openNode(t, e, n);
      e.state = r.OpenTag;
      i = this.indent(t, e, n);
      e.state = r.InsideTag;
      i += t.value;
      e.state = r.CloseTag;
      i += this.endline(t, e, n);
      e.state = r.None;
      this.closeNode(t, e, n);
      return i;
    };
    t.prototype.text = function (t, e, n) {
      var i;
      this.openNode(t, e, n);
      e.state = r.OpenTag;
      i = this.indent(t, e, n);
      e.state = r.InsideTag;
      i += t.value;
      e.state = r.CloseTag;
      i += this.endline(t, e, n);
      e.state = r.None;
      this.closeNode(t, e, n);
      return i;
    };
    t.prototype.dtdAttList = function (t, e, n) {
      var i;
      this.openNode(t, e, n);
      e.state = r.OpenTag;
      i = this.indent(t, e, n) + "<!ATTLIST";
      e.state = r.InsideTag;
      i += " " + t.elementName + " " + t.attributeName + " " + t.attributeType;
      if (t.defaultValueType !== "#DEFAULT") {
        i += " " + t.defaultValueType;
      }
      if (t.defaultValue) {
        i += " \"" + t.defaultValue + "\"";
      }
      e.state = r.CloseTag;
      i += e.spaceBeforeSlash + ">" + this.endline(t, e, n);
      e.state = r.None;
      this.closeNode(t, e, n);
      return i;
    };
    t.prototype.dtdElement = function (t, e, n) {
      var i;
      this.openNode(t, e, n);
      e.state = r.OpenTag;
      i = this.indent(t, e, n) + "<!ELEMENT";
      e.state = r.InsideTag;
      i += " " + t.name + " " + t.value;
      e.state = r.CloseTag;
      i += e.spaceBeforeSlash + ">" + this.endline(t, e, n);
      e.state = r.None;
      this.closeNode(t, e, n);
      return i;
    };
    t.prototype.dtdEntity = function (t, e, n) {
      var i;
      this.openNode(t, e, n);
      e.state = r.OpenTag;
      i = this.indent(t, e, n) + "<!ENTITY";
      e.state = r.InsideTag;
      if (t.pe) {
        i += " %";
      }
      i += " " + t.name;
      if (t.value) {
        i += " \"" + t.value + "\"";
      } else {
        if (t.pubID && t.sysID) {
          i += " PUBLIC \"" + t.pubID + "\" \"" + t.sysID + "\"";
        } else if (t.sysID) {
          i += " SYSTEM \"" + t.sysID + "\"";
        }
        if (t.nData) {
          i += " NDATA " + t.nData;
        }
      }
      e.state = r.CloseTag;
      i += e.spaceBeforeSlash + ">" + this.endline(t, e, n);
      e.state = r.None;
      this.closeNode(t, e, n);
      return i;
    };
    t.prototype.dtdNotation = function (t, e, n) {
      var i;
      this.openNode(t, e, n);
      e.state = r.OpenTag;
      i = this.indent(t, e, n) + "<!NOTATION";
      e.state = r.InsideTag;
      i += " " + t.name;
      if (t.pubID && t.sysID) {
        i += " PUBLIC \"" + t.pubID + "\" \"" + t.sysID + "\"";
      } else if (t.pubID) {
        i += " PUBLIC \"" + t.pubID + "\"";
      } else if (t.sysID) {
        i += " SYSTEM \"" + t.sysID + "\"";
      }
      e.state = r.CloseTag;
      i += e.spaceBeforeSlash + ">" + this.endline(t, e, n);
      e.state = r.None;
      this.closeNode(t, e, n);
      return i;
    };
    t.prototype.openNode = function (t, e, n) {};
    t.prototype.closeNode = function (t, e, n) {};
    t.prototype.openAttribute = function (t, e, n) {};
    t.prototype.closeAttribute = function (t, e, n) {};
    return t;
  }();
}).call(this);