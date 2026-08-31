(function () {
  "use strict";

  var t;
  var r;
  var o;
  var i;
  var s;
  var a = {}.hasOwnProperty;
  t = require("./306.js");
  r = require("./121.js").defaults;
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
      var c;
      var u;
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
      c = function (t, e) {
        var r;
        var u;
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
              for (p in u = e[h]) {
                f = u[p];
                t = c(t.ele(p), f).up();
              }
            }
          }
        } else {
          for (p in e) {
            if (a.call(e, p)) {
              u = e[p];
              if (p === n) {
                if (typeof u == "object") {
                  for (r in u) {
                    d = u[r];
                    t = t.att(r, d);
                  }
                }
              } else if (p === o) {
                t = l.options.cdata && i(u) ? t.raw(s(u)) : t.txt(u);
              } else if (Array.isArray(u)) {
                for (h in u) {
                  if (a.call(u, h)) {
                    t = typeof (f = u[h]) == "string" ? l.options.cdata && i(f) ? t.ele(p).raw(s(f)).up() : t.ele(p, f).up() : c(t.ele(p), f).up();
                  }
                }
              } else if (typeof u == "object") {
                t = c(t.ele(p), u).up();
              } else if (typeof u == "string" && l.options.cdata && i(u)) {
                t = t.ele(p).raw(s(u)).up();
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
      u = t.create(f, this.options.xmldec, this.options.doctype, {
        headless: this.options.headless,
        allowSurrogateChars: this.options.allowSurrogateChars
      });
      return c(u, e).end(this.options.renderOpts);
    };
    return e;
  }();
}).call(this);