(function () {
  "use strict";

  var t;
  var r;
  var o;
  var i;
  var s;
  var a = {}.hasOwnProperty;
  t = require("./336.js");
  r = require("./168.js").defaults;
  i = function (t) {
    return typeof t == "string" && (t.indexOf("&") >= 0 || t.indexOf(">") >= 0 || t.indexOf("<") >= 0);
  };
  s = function (t) {
    return "<![CDATA[" + o(t) + "]]>";
  };
  o = function (t) {
    return t.replace("]]>", "]]]]><![CDATA[>");
  };
  exports.Builder = function () {
    function e(t) {
      var e;
      var n;
      var o;
      this.options = {};
      for (e in n = r[0.2]) {
        if (a.call(n, e)) {
          o = n[e];
          this.options[e] = o;
        }
      }
      for (e in t) {
        if (a.call(t, e)) {
          o = t[e];
          this.options[e] = o;
        }
      }
    }
    e.prototype.buildObject = function (e) {
      var n;
      var o;
      var u;
      var c;
      var f;
      var l;
      n = this.options.attrkey;
      o = this.options.charkey;
      if (Object.keys(e).length === 1 && this.options.rootName === r[0.2].rootName) {
        e = e[f = Object.keys(e)[0]];
      } else {
        f = this.options.rootName;
      }
      l = this;
      u = function (t, e) {
        var r;
        var c;
        var f;
        var h;
        var p;
        var d;
        if (typeof e != "object") {
          if (l.options.cdata && i(e)) {
            t.raw(s(e));
          } else {
            t.txt(e);
          }
        } else if (Array.isArray(e)) {
          for (h in e) {
            if (a.call(e, h)) {
              for (p in c = e[h]) {
                f = c[p];
                t = u(t.ele(p), f).up();
              }
            }
          }
        } else {
          for (p in e) {
            if (a.call(e, p)) {
              c = e[p];
              if (p === n) {
                if (typeof c == "object") {
                  for (r in c) {
                    d = c[r];
                    t = t.att(r, d);
                  }
                }
              } else if (p === o) {
                t = l.options.cdata && i(c) ? t.raw(s(c)) : t.txt(c);
              } else if (Array.isArray(c)) {
                for (h in c) {
                  if (a.call(c, h)) {
                    t = typeof (f = c[h]) == "string" ? l.options.cdata && i(f) ? t.ele(p).raw(s(f)).up() : t.ele(p, f).up() : u(t.ele(p), f).up();
                  }
                }
              } else if (typeof c == "object") {
                t = u(t.ele(p), c).up();
              } else if (typeof c == "string" && l.options.cdata && i(c)) {
                t = t.ele(p).raw(s(c)).up();
              } else {
                if (c == null) {
                  c = "";
                }
                t = t.ele(p, c.toString()).up();
              }
            }
          }
        }
        return t;
      };
      c = t.create(f, this.options.xmldec, this.options.doctype, {
        headless: this.options.headless,
        allowSurrogateChars: this.options.allowSurrogateChars
      });
      return u(c, e).end(this.options.renderOpts);
    };
    return e;
  }();
}).call(this);