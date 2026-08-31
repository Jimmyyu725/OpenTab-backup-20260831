(function () {
  "use strict";

  var t;
  var r;
  var o;
  var i;
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
  i = require("./156.js");
  t = require("./360.js");
  c = require("./246.js");
  l = require("./244.js").setImmediate;
  r = require("./168.js").defaults;
  s = function (t) {
    return typeof t == "object" && t != null && Object.keys(t).length === 0;
  };
  a = function (t, e, n) {
    var r;
    var o;
    r = 0;
    o = t.length;
    for (; r < o; r++) {
      e = (0, t[r])(e, n);
    }
    return e;
  };
  o = function (t, e, n) {
    var r;
    (r = Object.create(null)).value = n;
    r.writable = true;
    r.enumerable = true;
    r.configurable = true;
    return Object.defineProperty(t, e, r);
  };
  exports.Parser = function (n) {
    function i(t) {
      var n;
      var o;
      var i;
      this.parseStringPromise = h(this.parseStringPromise, this);
      this.parseString = h(this.parseString, this);
      this.reset = h(this.reset, this);
      this.assignOrPush = h(this.assignOrPush, this);
      this.processAsync = h(this.processAsync, this);
      if (!(this instanceof exports.Parser)) {
        return new exports.Parser(t);
      }
      this.options = {};
      for (n in o = r[0.2]) {
        if (p.call(o, n)) {
          i = o[n];
          this.options[n] = i;
        }
      }
      for (n in t) {
        if (p.call(t, n)) {
          i = t[n];
          this.options[n] = i;
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
    })(i, n);
    i.prototype.processAsync = function () {
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
    i.prototype.assignOrPush = function (t, e, n) {
      if (e in t) {
        if (!(t[e] instanceof Array)) {
          o(t, e, [t[e]]);
        }
        return t[e].push(n);
      } else if (this.options.explicitArray) {
        return o(t, e, [n]);
      } else {
        return o(t, e, n);
      }
    };
    i.prototype.reset = function () {
      var t;
      var e;
      var n;
      var r;
      var i;
      this.removeAllListeners();
      this.saxParser = u.parser(this.options.strict, {
        trim: false,
        normalize: false,
        xmlns: this.options.xmlns
      });
      this.saxParser.errThrown = false;
      this.saxParser.onerror = (i = this, function (t) {
        i.saxParser.resume();
        if (!i.saxParser.errThrown) {
          i.saxParser.errThrown = true;
          return i.emit("error", t);
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
        return function (i) {
          var s;
          var c;
          var u;
          var l;
          var h;
          (u = {})[e] = "";
          if (!n.options.ignoreAttrs) {
            for (s in h = i.attributes) {
              if (p.call(h, s)) {
                if (!(t in u) && !n.options.mergeAttrs) {
                  u[t] = {};
                }
                c = n.options.attrValueProcessors ? a(n.options.attrValueProcessors, i.attributes[s], s) : i.attributes[s];
                l = n.options.attrNameProcessors ? a(n.options.attrNameProcessors, s) : s;
                if (n.options.mergeAttrs) {
                  n.assignOrPush(u, l, c);
                } else {
                  o(u[t], l, c);
                }
              }
            }
          }
          u["#name"] = n.options.tagNameProcessors ? a(n.options.tagNameProcessors, i.name) : i.name;
          if (n.options.xmlns) {
            u[n.options.xmlnskey] = {
              uri: i.uri,
              local: i.local
            };
          }
          return r.push(u);
        };
      }(this);
      this.saxParser.onclosetag = function (t) {
        return function () {
          var n;
          var i;
          var c;
          var u;
          var l;
          var h;
          var f;
          var d;
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
            i = h[e];
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
            h = typeof t.options.emptyTag == "function" ? t.options.emptyTag() : t.options.emptyTag !== "" ? t.options.emptyTag : i;
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
                f = {};
                for (c in h) {
                  if (p.call(h, c)) {
                    o(f, c, h[c]);
                  }
                }
                g[t.options.childkey].push(f);
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
              d = h;
              o(h = {}, l, d);
            }
            t.resultObject = h;
            t.saxParser.ended = true;
            return t.emit("end", t.resultObject);
          }
        };
      }(this);
      n = function (t) {
        return function (n) {
          var o;
          var i;
          if (i = r[r.length - 1]) {
            i[e] += n;
            if (t.options.explicitChildren && t.options.preserveChildrenOrder && t.options.charsAsChildren && (t.options.includeWhiteChars || n.replace(/\\n/g, "").trim() !== "")) {
              i[t.options.childkey] = i[t.options.childkey] || [];
              (o = {
                "#name": "__text__"
              })[e] = n;
              if (t.options.normalize) {
                o[e] = o[e].replace(/\s{2,}/g, " ").trim();
              }
              i[t.options.childkey].push(o);
            }
            return i;
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
    i.prototype.parseString = function (e, n) {
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
    i.prototype.parseStringPromise = function (t) {
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
    return i;
  }(i);
  exports.parseString = function (t, n, r) {
    var o;
    var i;
    if (r != null) {
      if (typeof r == "function") {
        o = r;
      }
      if (typeof n == "object") {
        i = n;
      }
    } else {
      if (typeof n == "function") {
        o = n;
      }
      i = {};
    }
    return new exports.Parser(i).parseString(t, o);
  };
  exports.parseStringPromise = function (t, n) {
    var r;
    if (typeof n == "object") {
      r = n;
    }
    return new exports.Parser(r).parseStringPromise(t);
  };
}).call(this);