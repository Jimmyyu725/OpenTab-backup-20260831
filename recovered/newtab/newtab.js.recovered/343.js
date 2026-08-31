(function () {
  var e;
  var r;
  var i;
  var o = {}.hasOwnProperty;
  e = require("./15.js");
  i = require("./239.js");
  r = require("./155.js");
  module.exports = function (t) {
    function n(t, e) {
      this.stream = t;
      n.__super__.constructor.call(this, e);
    }
    (function (t, e) {
      for (var n in e) {
        if (o.call(e, n)) {
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
    n.prototype.endline = function (t, e, i) {
      if (t.isLastRootNode && e.state === r.CloseTag) {
        return "";
      } else {
        return n.__super__.endline.call(this, t, e, i);
      }
    };
    n.prototype.document = function (t, e) {
      var n;
      var r;
      var i;
      var o;
      var a;
      var s;
      var c;
      var u;
      var l;
      r = i = 0;
      a = (c = t.children).length;
      for (; i < a; r = ++i) {
        (n = c[r]).isLastRootNode = r === t.children.length - 1;
      }
      e = this.filterOptions(e);
      l = [];
      o = 0;
      s = (u = t.children).length;
      for (; o < s; o++) {
        n = u[o];
        l.push(this.writeChildNode(n, e, 0));
      }
      return l;
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
      var i;
      var o;
      var a;
      var s;
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
        o = 0;
        a = (s = t.children).length;
        for (; o < a; o++) {
          i = s[o];
          this.writeChildNode(i, e, n + 1);
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
    n.prototype.element = function (t, n, i) {
      var a;
      var s;
      var c;
      var u;
      var l;
      var f;
      var h;
      var p;
      var d;
      i ||= 0;
      this.openNode(t, n, i);
      n.state = r.OpenTag;
      this.stream.write(this.indent(t, n, i) + "<" + t.name);
      for (h in p = t.attribs) {
        if (o.call(p, h)) {
          a = p[h];
          this.attribute(a, n, i);
        }
      }
      u = (c = t.children.length) === 0 ? null : t.children[0];
      if (c === 0 || t.children.every(function (t) {
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
      } else if (!n.pretty || c !== 1 || u.type !== e.Text && u.type !== e.Raw || u.value == null) {
        this.stream.write(">" + this.endline(t, n, i));
        n.state = r.InsideTag;
        l = 0;
        f = (d = t.children).length;
        for (; l < f; l++) {
          s = d[l];
          this.writeChildNode(s, n, i + 1);
        }
        n.state = r.CloseTag;
        this.stream.write(this.indent(t, n, i) + "</" + t.name + ">");
      } else {
        this.stream.write(">");
        n.state = r.InsideTag;
        n.suppressPrettyCount++;
        true;
        this.writeChildNode(u, n, i + 1);
        n.suppressPrettyCount--;
        false;
        n.state = r.CloseTag;
        this.stream.write("</" + t.name + ">");
      }
      this.stream.write(this.endline(t, n, i));
      n.state = r.None;
      return this.closeNode(t, n, i);
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
  }(i);
}).call(this);