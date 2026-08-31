(function () {
  "use strict";

  var t;
  var r;
  var i;
  var o;
  var s;
  var a;
  var c;
  var u;
  var l;
  function h(t, e) {
    return function () {
      return t.apply(e, arguments);
    };
  }
  var p = {}.hasOwnProperty;
  u = require("./345.js");
  o = require("./156.js");
  t = require("./360.js");
  c = require("./246.js");
  l = require("./244.js").setImmediate;
  r = require("./168.js").defaults;
  s = function (t) {
    return typeof t == "object" && t != null && Object.keys(t).length === 0;
  };
  a = function (t, e, n) {
    var r;
    var i;
    r = 0;
    i = t.length;
    for (; r < i; r++) {
      e = (0, t[r])(e, n);
    }
    return e;
  };
  i = function (t, e, n) {
    var r;
    (r = Object.create(null)).value = n;
    r.writable = true;
    r.enumerable = true;
    r.configurable = true;
    return Object.defineProperty(t, e, r);
  };
  exports.Parser = function (n) {
    function o(t) {
      var n;
      var i;
      var o;
      this.parseStringPromise = h(this.parseStringPromise, this);
      this.parseString = h(this.parseString, this);
      this.reset = h(this.reset, this);
      this.assignOrPush = h(this.assignOrPush, this);
      this.processAsync = h(this.processAsync, this);
      if (!(this instanceof exports.Parser)) {
        return new exports.Parser(t);
      }
      this.options = {};
      for (n in i = r[0.2]) {
        if (p.call(i, n)) {
          o = i[n];
          this.options[n] = o;
        }
      }
      for (n in t) {
        if (p.call(t, n)) {
          o = t[n];
          this.options[n] = o;
        }
      }
      if (this.options.xmlns) {
        this.options.xmlnskey = this.options.attrkey + "ns";
      }
      if (this.options.normalizeTags) {
        this.options.tagNameProcessors ||= [];
        this.options.tagNameProcessors.unshift(c.normalize);
      }
      this.reset();
    }
    (function (t, e) {
      for (var n in e) {
        if (p.call(e, n)) {
          t[n] = e[n];
        }
      }
      function r() {
        this.constructor = t;
      }
      r.prototype = e.prototype;
      t.prototype = new r();
      t.__super__ = e.prototype;
    })(o, n);
    o.prototype.processAsync = function () {
      var t;
      var e;
      try {
        if (this.remaining.length <= this.options.chunkSize) {
          t = this.remaining;
          this.remaining = "";
          this.saxParser = this.saxParser.write(t);
          return this.saxParser.close();
        } else {
          t = this.remaining.substr(0, this.options.chunkSize);
          this.remaining = this.remaining.substr(this.options.chunkSize, this.remaining.length);
          this.saxParser = this.saxParser.write(t);
          return l(this.processAsync);
        }
      } catch (t) {
        e = t;
        if (!this.saxParser.errThrown) {
          this.saxParser.errThrown = true;
          return this.emit(e);
        }
      }
    };
    o.prototype.assignOrPush = function (t, e, n) {
      if (e in t) {
        if (!(t[e] instanceof Array)) {
          i(t, e, [t[e]]);
        }
        return t[e].push(n);
      } else if (this.options.explicitArray) {
        return i(t, e, [n]);
      } else {
        return i(t, e, n);
      }
    };
    o.prototype.reset = function () {
      var t;
      var e;
      var n;
      var r;
      var o;
      this.removeAllListeners();
      this.saxParser = u.parser(this.options.strict, {
        trim: false,
        normalize: false,
        xmlns: this.options.xmlns
      });
      this.saxParser.errThrown = false;
      this.saxParser.onerror = (o = this, function (t) {
        o.saxParser.resume();
        if (!o.saxParser.errThrown) {
          o.saxParser.errThrown = true;
          return o.emit("error", t);
        }
      });
      this.saxParser.onend = function (t) {
        return function () {
          if (!t.saxParser.ended) {
            t.saxParser.ended = true;
            return t.emit("end", t.resultObject);
          }
        };
      }(this);
      this.saxParser.ended = false;
      this.EXPLICIT_CHARKEY = this.options.explicitCharkey;
      this.resultObject = null;
      r = [];
      t = this.options.attrkey;
      e = this.options.charkey;
      this.saxParser.onopentag = function (n) {
        return function (o) {
          var s;
          var c;
          var u;
          var l;
          var h;
          (u = {})[e] = "";
          if (!n.options.ignoreAttrs) {
            for (s in h = o.attributes) {
              if (p.call(h, s)) {
                if (!(t in u) && !n.options.mergeAttrs) {
                  u[t] = {};
                }
                c = n.options.attrValueProcessors ? a(n.options.attrValueProcessors, o.attributes[s], s) : o.attributes[s];
                l = n.options.attrNameProcessors ? a(n.options.attrNameProcessors, s) : s;
                if (n.options.mergeAttrs) {
                  n.assignOrPush(u, l, c);
                } else {
                  i(u[t], l, c);
                }
              }
            }
          }
          u["#name"] = n.options.tagNameProcessors ? a(n.options.tagNameProcessors, o.name) : o.name;
          if (n.options.xmlns) {
            u[n.options.xmlnskey] = {
              uri: o.uri,
              local: o.local
            };
          }
          return r.push(u);
        };
      }(this);
      this.saxParser.onclosetag = function (t) {
        return function () {
          var n;
          var o;
          var c;
          var u;
          var l;
          var h;
          var d;
          var f;
          var g;
          var y;
          h = r.pop();
          l = h["#name"];
          if (!t.options.explicitChildren || !t.options.preserveChildrenOrder) {
            delete h["#name"];
          }
          if (h.cdata === true) {
            n = h.cdata;
            delete h.cdata;
          }
          g = r[r.length - 1];
          if (h[e].match(/^\s*$/) && !n) {
            o = h[e];
            delete h[e];
          } else {
            if (t.options.trim) {
              h[e] = h[e].trim();
            }
            if (t.options.normalize) {
              h[e] = h[e].replace(/\s{2,}/g, " ").trim();
            }
            h[e] = t.options.valueProcessors ? a(t.options.valueProcessors, h[e], l) : h[e];
            if (Object.keys(h).length === 1 && e in h && !t.EXPLICIT_CHARKEY) {
              h = h[e];
            }
          }
          if (s(h)) {
            h = typeof t.options.emptyTag == "function" ? t.options.emptyTag() : t.options.emptyTag !== "" ? t.options.emptyTag : o;
          }
          if (t.options.validator != null) {
            y = "/" + function () {
              var t;
              var e;
              var n;
              n = [];
              t = 0;
              e = r.length;
              for (; t < e; t++) {
                u = r[t];
                n.push(u["#name"]);
              }
              return n;
            }().concat(l).join("/");
            (function () {
              var e;
              try {
                h = t.options.validator(y, g && g[l], h);
              } catch (n) {
                e = n;
                return t.emit("error", e);
              }
            })();
          }
          if (t.options.explicitChildren && !t.options.mergeAttrs && typeof h == "object") {
            if (t.options.preserveChildrenOrder) {
              if (g) {
                g[t.options.childkey] = g[t.options.childkey] || [];
                d = {};
                for (c in h) {
                  if (p.call(h, c)) {
                    i(d, c, h[c]);
                  }
                }
                g[t.options.childkey].push(d);
                delete h["#name"];
                if (Object.keys(h).length === 1 && e in h && !t.EXPLICIT_CHARKEY) {
                  h = h[e];
                }
              }
            } else {
              u = {};
              if (t.options.attrkey in h) {
                u[t.options.attrkey] = h[t.options.attrkey];
                delete h[t.options.attrkey];
              }
              if (!t.options.charsAsChildren && t.options.charkey in h) {
                u[t.options.charkey] = h[t.options.charkey];
                delete h[t.options.charkey];
              }
              if (Object.getOwnPropertyNames(h).length > 0) {
                u[t.options.childkey] = h;
              }
              h = u;
            }
          }
          if (r.length > 0) {
            return t.assignOrPush(g, l, h);
          } else {
            if (t.options.explicitRoot) {
              f = h;
              i(h = {}, l, f);
            }
            t.resultObject = h;
            t.saxParser.ended = true;
            return t.emit("end", t.resultObject);
          }
        };
      }(this);
      n = function (t) {
        return function (n) {
          var i;
          var o;
          if (o = r[r.length - 1]) {
            o[e] += n;
            if (t.options.explicitChildren && t.options.preserveChildrenOrder && t.options.charsAsChildren && (t.options.includeWhiteChars || n.replace(/\\n/g, "").trim() !== "")) {
              o[t.options.childkey] = o[t.options.childkey] || [];
              (i = {
                "#name": "__text__"
              })[e] = n;
              if (t.options.normalize) {
                i[e] = i[e].replace(/\s{2,}/g, " ").trim();
              }
              o[t.options.childkey].push(i);
            }
            return o;
          }
        };
      }(this);
      this.saxParser.ontext = n;
      return this.saxParser.oncdata = function (t) {
        var e;
        if (e = n(t)) {
          return e.cdata = true;
        }
      };
    };
    o.prototype.parseString = function (e, n) {
      var r;
      if (n != null && typeof n == "function") {
        this.on("end", function (t) {
          this.reset();
          return n(null, t);
        });
        this.on("error", function (t) {
          this.reset();
          return n(t);
        });
      }
      try {
        if ((e = e.toString()).trim() === "") {
          this.emit("end", null);
          return true;
        } else {
          e = t.stripBOM(e);
          if (this.options.async) {
            this.remaining = e;
            l(this.processAsync);
            return this.saxParser;
          } else {
            return this.saxParser.write(e).close();
          }
        }
      } catch (t) {
        r = t;
        if (!this.saxParser.errThrown && !this.saxParser.ended) {
          this.emit("error", r);
          return this.saxParser.errThrown = true;
        }
        if (this.saxParser.ended) {
          throw r;
        }
      }
    };
    o.prototype.parseStringPromise = function (t) {
      return new Promise((e = this, function (n, r) {
        return e.parseString(t, function (t, e) {
          if (t) {
            return r(t);
          } else {
            return n(e);
          }
        });
      }));
      var e;
    };
    return o;
  }(o);
  exports.parseString = function (t, n, r) {
    var i;
    var o;
    if (r != null) {
      if (typeof r == "function") {
        i = r;
      }
      if (typeof n == "object") {
        o = n;
      }
    } else {
      if (typeof n == "function") {
        i = n;
      }
      o = {};
    }
    return new exports.Parser(o).parseString(t, i);
  };
  exports.parseStringPromise = function (t, n) {
    var r;
    if (typeof n == "object") {
      r = n;
    }
    return new exports.Parser(r).parseStringPromise(t);
  };
}).call(this);