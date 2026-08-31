(function () {
  var e;
  var r;
  var o;
  var i = {}.hasOwnProperty;
  e = require("./15.js");
  o = require("./239.js");
  r = require("./155.js");
  module.exports = function (t) {
    function n(t, e) {
      this.stream = t;
      n.__super__.constructor.call(this, e);
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
    n.prototype.endline = function (t, e, o) {
      if (t.isLastRootNode && e.state === r.CloseTag) {
        return "";
      } else {
        return n.__super__.endline.call(this, t, e, o);
      }
    };
    n.prototype.document = function (t, e) {
      var n;
      var r;
      var o;
      var i;
      var s;
      var a;
      var u;
      var c;
      var f;
      r = o = 0;
      s = (u = t.children).length;
      for (; o < s; r = ++o) {
        (n = u[r]).isLastRootNode = r === t.children.length - 1;
      }
      e = this.filterOptions(e);
      f = [];
      i = 0;
      a = (c = t.children).length;
      for (; i < a; i++) {
        n = c[i];
        f.push(this.writeChildNode(n, e, 0));
      }
      return f;
    };
    n.prototype.attribute = function (t, e, r) {
      return this.stream.write(n.__super__.attribute.call(this, t, e, r));
    };
    n.prototype.cdata = function (t, e, r) {
      return this.stream.write(n.__super__.cdata.call(this, t, e, r));
    };
    n.prototype.comment = function (t, e, r) {
      return this.stream.write(n.__super__.comment.call(this, t, e, r));
    };
    n.prototype.declaration = function (t, e, r) {
      return this.stream.write(n.__super__.declaration.call(this, t, e, r));
    };
    n.prototype.docType = function (t, e, n) {
      var o;
      var i;
      var s;
      var a;
      n ||= 0;
      this.openNode(t, e, n);
      e.state = r.OpenTag;
      this.stream.write(this.indent(t, e, n));
      this.stream.write("<!DOCTYPE " + t.root().name);
      if (t.pubID && t.sysID) {
        this.stream.write(" PUBLIC \"" + t.pubID + "\" \"" + t.sysID + "\"");
      } else if (t.sysID) {
        this.stream.write(" SYSTEM \"" + t.sysID + "\"");
      }
      if (t.children.length > 0) {
        this.stream.write(" [");
        this.stream.write(this.endline(t, e, n));
        e.state = r.InsideTag;
        i = 0;
        s = (a = t.children).length;
        for (; i < s; i++) {
          o = a[i];
          this.writeChildNode(o, e, n + 1);
        }
        e.state = r.CloseTag;
        this.stream.write("]");
      }
      e.state = r.CloseTag;
      this.stream.write(e.spaceBeforeSlash + ">");
      this.stream.write(this.endline(t, e, n));
      e.state = r.None;
      return this.closeNode(t, e, n);
    };
    n.prototype.element = function (t, n, o) {
      var s;
      var a;
      var u;
      var c;
      var f;
      var l;
      var h;
      var p;
      var d;
      o ||= 0;
      this.openNode(t, n, o);
      n.state = r.OpenTag;
      this.stream.write(this.indent(t, n, o) + "<" + t.name);
      for (h in p = t.attribs) {
        if (i.call(p, h)) {
          s = p[h];
          this.attribute(s, n, o);
        }
      }
      c = (u = t.children.length) === 0 ? null : t.children[0];
      if (u === 0 || t.children.every(function (t) {
        return (t.type === e.Text || t.type === e.Raw) && t.value === "";
      })) {
        if (n.allowEmpty) {
          this.stream.write(">");
          n.state = r.CloseTag;
          this.stream.write("</" + t.name + ">");
        } else {
          n.state = r.CloseTag;
          this.stream.write(n.spaceBeforeSlash + "/>");
        }
      } else if (!n.pretty || u !== 1 || c.type !== e.Text && c.type !== e.Raw || c.value == null) {
        this.stream.write(">" + this.endline(t, n, o));
        n.state = r.InsideTag;
        f = 0;
        l = (d = t.children).length;
        for (; f < l; f++) {
          a = d[f];
          this.writeChildNode(a, n, o + 1);
        }
        n.state = r.CloseTag;
        this.stream.write(this.indent(t, n, o) + "</" + t.name + ">");
      } else {
        this.stream.write(">");
        n.state = r.InsideTag;
        n.suppressPrettyCount++;
        true;
        this.writeChildNode(c, n, o + 1);
        n.suppressPrettyCount--;
        false;
        n.state = r.CloseTag;
        this.stream.write("</" + t.name + ">");
      }
      this.stream.write(this.endline(t, n, o));
      n.state = r.None;
      return this.closeNode(t, n, o);
    };
    n.prototype.processingInstruction = function (t, e, r) {
      return this.stream.write(n.__super__.processingInstruction.call(this, t, e, r));
    };
    n.prototype.raw = function (t, e, r) {
      return this.stream.write(n.__super__.raw.call(this, t, e, r));
    };
    n.prototype.text = function (t, e, r) {
      return this.stream.write(n.__super__.text.call(this, t, e, r));
    };
    n.prototype.dtdAttList = function (t, e, r) {
      return this.stream.write(n.__super__.dtdAttList.call(this, t, e, r));
    };
    n.prototype.dtdElement = function (t, e, r) {
      return this.stream.write(n.__super__.dtdElement.call(this, t, e, r));
    };
    n.prototype.dtdEntity = function (t, e, r) {
      return this.stream.write(n.__super__.dtdEntity.call(this, t, e, r));
    };
    n.prototype.dtdNotation = function (t, e, r) {
      return this.stream.write(n.__super__.dtdNotation.call(this, t, e, r));
    };
    return n;
  }(o);
}).call(this);