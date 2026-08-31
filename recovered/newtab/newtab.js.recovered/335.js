(function () {
  "use strict";

  var t;
  var r;
  var i;
  var o;
  var a;
  var s = {}.hasOwnProperty;
  t = require("./336.js");
  r = require("./168.js").defaults;
  o = function (t) {
    return typeof t == "string" && (t.indexOf("&") >= 0 || t.indexOf(">") >= 0 || t.indexOf("<") >= 0);
  };
  a = function (t) {
    return "<![CDATA[" + i(t) + "]]>";
  };
  i = function (t) {
    return t.replace("]]>", "]]]]><![CDATA[>");
  };
  exports.Builder = function () {
    function e(t) {
      var e;
      var n;
      var i;
      this.options = {};
      for (e in n = r[0.2]) {
        if (s.call(n, e)) {
          i = n[e];
          this.options[e] = i;
        }
      }
      for (e in t) {
        if (s.call(t, e)) {
          i = t[e];
          this.options[e] = i;
        }
      }
    }
    e.prototype.buildObject = function (e) {
      var n;
      var i;
      var c;
      var u;
      var l;
      var f;
      n = this.options.attrkey;
      i = this.options.charkey;
      if (Object.keys(e).length === 1 && this.options.rootName === r[0.2].rootName) {
        e = e[l = Object.keys(e)[0]];
      } else {
        l = this.options.rootName;
      }
      f = this;
      c = function (t, e) {
        var r;
        var u;
        var l;
        var h;
        var p;
        var d;
        if (typeof e != "object") {
          if (f.options.cdata && o(e)) {
            t.raw(a(e));
          } else {
            t.txt(e);
          }
        } else if (Array.isArray(e)) {
          for (h in e) {
            if (s.call(e, h)) {
              for (p in u = e[h]) {
                l = u[p];
                t = c(t.ele(p), l).up();
              }
            }
          }
        } else {
          for (p in e) {
            if (s.call(e, p)) {
              u = e[p];
              if (p === n) {
                if (typeof u == "object") {
                  for (r in u) {
                    d = u[r];
                    t = t.att(r, d);
                  }
                }
              } else if (p === i) {
                t = f.options.cdata && o(u) ? t.raw(a(u)) : t.txt(u);
              } else if (Array.isArray(u)) {
                for (h in u) {
                  if (s.call(u, h)) {
                    t = typeof (l = u[h]) == "string" ? f.options.cdata && o(l) ? t.ele(p).raw(a(l)).up() : t.ele(p, l).up() : c(t.ele(p), l).up();
                  }
                }
              } else if (typeof u == "object") {
                t = c(t.ele(p), u).up();
              } else if (typeof u == "string" && f.options.cdata && o(u)) {
                t = t.ele(p).raw(a(u)).up();
              } else {
                if (u == null) {
                  u = "";
                }
                t = t.ele(p, u.toString()).up();
              }
            }
          }
        }
        return t;
      };
      u = t.create(l, this.options.xmldec, this.options.doctype, {
        headless: this.options.headless,
        allowSurrogateChars: this.options.allowSurrogateChars
      });
      return c(u, e).end(this.options.renderOpts);
    };
    return e;
  }();
}).call(this);