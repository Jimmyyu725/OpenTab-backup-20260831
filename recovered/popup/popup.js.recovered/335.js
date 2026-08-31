(function () {
  "use strict";

  var t;
  var r;
  var i;
  var o;
  var s;
  var a = {}.hasOwnProperty;
  t = require("./336.js");
  r = require("./168.js").defaults;
  o = function (t) {
    return typeof t == "string" && (t.indexOf("&") >= 0 || t.indexOf(">") >= 0 || t.indexOf("<") >= 0);
  };
  s = function (t) {
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
        if (a.call(n, e)) {
          i = n[e];
          this.options[e] = i;
        }
      }
      for (e in t) {
        if (a.call(t, e)) {
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
      var h;
      n = this.options.attrkey;
      i = this.options.charkey;
      if (Object.keys(e).length === 1 && this.options.rootName === r[0.2].rootName) {
        e = e[l = Object.keys(e)[0]];
      } else {
        l = this.options.rootName;
      }
      h = this;
      c = function (t, e) {
        var r;
        var u;
        var l;
        var p;
        var d;
        var f;
        if (typeof e != "object") {
          if (h.options.cdata && o(e)) {
            t.raw(s(e));
          } else {
            t.txt(e);
          }
        } else if (Array.isArray(e)) {
          for (p in e) {
            if (a.call(e, p)) {
              for (d in u = e[p]) {
                l = u[d];
                t = c(t.ele(d), l).up();
              }
            }
          }
        } else {
          for (d in e) {
            if (a.call(e, d)) {
              u = e[d];
              if (d === n) {
                if (typeof u == "object") {
                  for (r in u) {
                    f = u[r];
                    t = t.att(r, f);
                  }
                }
              } else if (d === i) {
                t = h.options.cdata && o(u) ? t.raw(s(u)) : t.txt(u);
              } else if (Array.isArray(u)) {
                for (p in u) {
                  if (a.call(u, p)) {
                    t = typeof (l = u[p]) == "string" ? h.options.cdata && o(l) ? t.ele(d).raw(s(l)).up() : t.ele(d, l).up() : c(t.ele(d), l).up();
                  }
                }
              } else if (typeof u == "object") {
                t = c(t.ele(d), u).up();
              } else if (typeof u == "string" && h.options.cdata && o(u)) {
                t = t.ele(d).raw(s(u)).up();
              } else {
                if (u == null) {
                  u = "";
                }
                t = t.ele(d, u.toString()).up();
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