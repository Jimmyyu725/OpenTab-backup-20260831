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
  var f;
  function l(t, e) {
    return function () {
      return t.apply(e, arguments);
    };
  }
  var h = {}.hasOwnProperty;
  u = require("./315.js");
  i = require("./69.js");
  t = require("./330.js");
  c = require("./201.js");
  f = require("./199.js").setImmediate;
  r = require("./121.js").defaults;
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
      this.parseStringPromise = l(this.parseStringPromise, this);
      this.parseString = l(this.parseString, this);
      this.reset = l(this.reset, this);
      this.assignOrPush = l(this.assignOrPush, this);
      this.processAsync = l(this.processAsync, this);
      if (!(this instanceof exports.Parser)) {
        return new exports.Parser(t);
      }
      this.options = {};
      for (n in o = r[0.2]) {
        if (h.call(o, n)) {
          i = o[n];
          this.options[n] = i;
        }
      }
      for (n in t) {
        if (h.call(t, n)) {
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
        if (h.call(e, n)) {
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
          return f(this.processAsync);
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
          var f;
          var l;
          (u = {})[e] = "";
          if (!n.options.ignoreAttrs) {
            for (s in l = i.attributes) {
              if (h.call(l, s)) {
                if (!(t in u) && !n.options.mergeAttrs) {
                  u[t] = {};
                }
                c = n.options.attrValueProcessors ? a(n.options.attrValueProcessors, i.attributes[s], s) : i.attributes[s];
                f = n.options.attrNameProcessors ? a(n.options.attrNameProcessors, s) : s;
                if (n.options.mergeAttrs) {
                  n.assignOrPush(u, f, c);
                } else {
                  o(u[t], f, c);
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
          var f;
          var l;
          var p;
          var d;
          var y;
          var m;
          l = r.pop();
          f = l["#name"];
          if (!t.options.explicitChildren || !t.options.preserveChildrenOrder) {
            delete l["#name"];
          }
          if (l.cdata === true) {
            n = l.cdata;
            delete l.cdata;
          }
          y = r[r.length - 1];
          if (l[e].match(/^\s*$/) && !n) {
            i = l[e];
            delete l[e];
          } else {
            if (t.options.trim) {
              l[e] = l[e].trim();
            }
            if (t.options.normalize) {
              l[e] = l[e].replace(/\s{2,}/g, " ").trim();
            }
            l[e] = t.options.valueProcessors ? a(t.options.valueProcessors, l[e], f) : l[e];
            if (Object.keys(l).length === 1 && e in l && !t.EXPLICIT_CHARKEY) {
              l = l[e];
            }
          }
          if (s(l)) {
            l = typeof t.options.emptyTag == "function" ? t.options.emptyTag() : t.options.emptyTag !== "" ? t.options.emptyTag : i;
          }
          if (t.options.validator != null) {
            m = "/" + function () {
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
            }().concat(f).join("/");
            (function () {
              var e;
              try {
                l = t.options.validator(m, y && y[f], l);
              } catch (n) {
                e = n;
                return t.emit("error", e);
              }
            })();
          }
          if (t.options.explicitChildren && !t.options.mergeAttrs && typeof l == "object") {
            if (t.options.preserveChildrenOrder) {
              if (y) {
                y[t.options.childkey] = y[t.options.childkey] || [];
                p = {};
                for (c in l) {
                  if (h.call(l, c)) {
                    o(p, c, l[c]);
                  }
                }
                y[t.options.childkey].push(p);
                delete l["#name"];
                if (Object.keys(l).length === 1 && e in l && !t.EXPLICIT_CHARKEY) {
                  l = l[e];
                }
              }
            } else {
              u = {};
              if (t.options.attrkey in l) {
                u[t.options.attrkey] = l[t.options.attrkey];
                delete l[t.options.attrkey];
              }
              if (!t.options.charsAsChildren && t.options.charkey in l) {
                u[t.options.charkey] = l[t.options.charkey];
                delete l[t.options.charkey];
              }
              if (Object.getOwnPropertyNames(l).length > 0) {
                u[t.options.childkey] = l;
              }
              l = u;
            }
          }
          if (r.length > 0) {
            return t.assignOrPush(y, f, l);
          } else {
            if (t.options.explicitRoot) {
              d = l;
              o(l = {}, f, d);
            }
            t.resultObject = l;
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
            f(this.processAsync);
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