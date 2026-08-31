var t = require("./153.js").Buffer;
(function (e) {
  e.parser = function (t, e) {
    return new i(t, e);
  };
  e.SAXParser = i;
  e.SAXStream = a;
  e.createStream = function (t, e) {
    return new a(t, e);
  };
  e.MAX_BUFFER_LENGTH = 65536;
  var r;
  var o = ["comment", "sgmlDecl", "textNode", "tagName", "doctype", "procInstName", "procInstBody", "entity", "attribName", "attribValue", "cdata", "script"];
  function i(t, n) {
    if (!(this instanceof i)) {
      return new i(t, n);
    }
    (function (t) {
      for (var e = 0, n = o.length; e < n; e++) {
        t[o[e]] = "";
      }
    })(this);
    this.q = this.c = "";
    this.bufferCheckPosition = e.MAX_BUFFER_LENGTH;
    this.opt = n || {};
    this.opt.lowercase = this.opt.lowercase || this.opt.lowercasetags;
    this.looseCase = this.opt.lowercase ? "toLowerCase" : "toUpperCase";
    this.tags = [];
    this.closed = this.closedRoot = this.sawRoot = false;
    this.tag = this.error = null;
    this.strict = !!t;
    this.noscript = !!t || !!this.opt.noscript;
    this.state = E.BEGIN;
    this.strictEntities = this.opt.strictEntities;
    this.ENTITIES = this.strictEntities ? Object.create(e.XML_ENTITIES) : Object.create(e.ENTITIES);
    this.attribList = [];
    if (this.opt.xmlns) {
      this.ns = Object.create(c);
    }
    if (this.opt.unquotedAttributeValues === undefined) {
      this.opt.unquotedAttributeValues = !t;
    }
    this.trackPosition = this.opt.position !== false;
    if (this.trackPosition) {
      this.position = this.line = this.column = 0;
    }
    x(this, "onready");
  }
  e.EVENTS = ["text", "processinginstruction", "sgmldeclaration", "doctype", "comment", "opentagstart", "attribute", "opentag", "closetag", "opencdata", "cdata", "closecdata", "error", "end", "ready", "script", "opennamespace", "closenamespace"];
  Object.create ||= function (t) {
    function e() {}
    e.prototype = t;
    return new e();
  };
  Object.keys ||= function (t) {
    var e = [];
    for (var n in t) {
      if (t.hasOwnProperty(n)) {
        e.push(n);
      }
    }
    return e;
  };
  i.prototype = {
    end: function () {
      D(this);
    },
    write: function (t) {
      if (this.error) {
        throw this.error;
      }
      if (this.closed) {
        return A(this, "Cannot write after close. Assign an onready handler.");
      }
      if (t === null) {
        return D(this);
      }
      if (typeof t == "object") {
        t = t.toString();
      }
      var n = 0;
      var r = "";
      while (r = F(t, n++), this.c = r, r) {
        if (this.trackPosition) {
          this.position++;
          if (r === "\n") {
            this.line++;
            this.column = 0;
          } else {
            this.column++;
          }
        }
        switch (this.state) {
          case E.BEGIN:
            this.state = E.BEGIN_WHITESPACE;
            if (r === "﻿") {
              continue;
            }
            M(this, r);
            continue;
          case E.BEGIN_WHITESPACE:
            M(this, r);
            continue;
          case E.TEXT:
            if (this.sawRoot && !this.closedRoot) {
              var i = n - 1;
              while (r && r !== "<" && r !== "&") {
                if ((r = F(t, n++)) && this.trackPosition) {
                  this.position++;
                  if (r === "\n") {
                    this.line++;
                    this.column = 0;
                  } else {
                    this.column++;
                  }
                }
              }
              this.textNode += t.substring(i, n - 1);
            }
            if (r !== "<" || this.sawRoot && this.closedRoot && !this.strict) {
              if (!d(r) && (!this.sawRoot || !!this.closedRoot)) {
                N(this, "Text data outside of root node.");
              }
              if (r === "&") {
                this.state = E.TEXT_ENTITY;
              } else {
                this.textNode += r;
              }
            } else {
              this.state = E.OPEN_WAKA;
              this.startTagPosition = this.position;
            }
            continue;
          case E.SCRIPT:
            if (r === "<") {
              this.state = E.SCRIPT_ENDING;
            } else {
              this.script += r;
            }
            continue;
          case E.SCRIPT_ENDING:
            if (r === "/") {
              this.state = E.CLOSE_TAG;
            } else {
              this.script += "<" + r;
              this.state = E.SCRIPT;
            }
            continue;
          case E.OPEN_WAKA:
            if (r === "!") {
              this.state = E.SGML_DECL;
              this.sgmlDecl = "";
            } else if (d(r)) ;else if (g(f, r)) {
              this.state = E.OPEN_TAG;
              this.tagName = r;
            } else if (r === "/") {
              this.state = E.CLOSE_TAG;
              this.tagName = "";
            } else if (r === "?") {
              this.state = E.PROC_INST;
              this.procInstName = this.procInstBody = "";
            } else {
              N(this, "Unencoded <");
              if (this.startTagPosition + 1 < this.position) {
                var s = this.position - this.startTagPosition;
                r = new Array(s).join(" ") + r;
              }
              this.textNode += "<" + r;
              this.state = E.TEXT;
            }
            continue;
          case E.SGML_DECL:
            if (this.sgmlDecl + r === "--") {
              this.state = E.COMMENT;
              this.comment = "";
              this.sgmlDecl = "";
              continue;
            }
            if (this.doctype && this.doctype !== true && this.sgmlDecl) {
              this.state = E.DOCTYPE_DTD;
              this.doctype += "<!" + this.sgmlDecl + r;
              this.sgmlDecl = "";
            } else if ((this.sgmlDecl + r).toUpperCase() === "[CDATA[") {
              O(this, "onopencdata");
              this.state = E.CDATA;
              this.sgmlDecl = "";
              this.cdata = "";
            } else if ((this.sgmlDecl + r).toUpperCase() === "DOCTYPE") {
              this.state = E.DOCTYPE;
              if (this.doctype || this.sawRoot) {
                N(this, "Inappropriately located doctype declaration");
              }
              this.doctype = "";
              this.sgmlDecl = "";
            } else if (r === ">") {
              O(this, "onsgmldeclaration", this.sgmlDecl);
              this.sgmlDecl = "";
              this.state = E.TEXT;
            } else if (y(r)) {
              this.state = E.SGML_DECL_QUOTED;
              this.sgmlDecl += r;
            } else {
              this.sgmlDecl += r;
            }
            continue;
          case E.SGML_DECL_QUOTED:
            if (r === this.q) {
              this.state = E.SGML_DECL;
              this.q = "";
            }
            this.sgmlDecl += r;
            continue;
          case E.DOCTYPE:
            if (r === ">") {
              this.state = E.TEXT;
              O(this, "ondoctype", this.doctype);
              this.doctype = true;
            } else {
              this.doctype += r;
              if (r === "[") {
                this.state = E.DOCTYPE_DTD;
              } else if (y(r)) {
                this.state = E.DOCTYPE_QUOTED;
                this.q = r;
              }
            }
            continue;
          case E.DOCTYPE_QUOTED:
            this.doctype += r;
            if (r === this.q) {
              this.q = "";
              this.state = E.DOCTYPE;
            }
            continue;
          case E.DOCTYPE_DTD:
            if (r === "]") {
              this.doctype += r;
              this.state = E.DOCTYPE;
            } else if (r === "<") {
              this.state = E.OPEN_WAKA;
              this.startTagPosition = this.position;
            } else if (y(r)) {
              this.doctype += r;
              this.state = E.DOCTYPE_DTD_QUOTED;
              this.q = r;
            } else {
              this.doctype += r;
            }
            continue;
          case E.DOCTYPE_DTD_QUOTED:
            this.doctype += r;
            if (r === this.q) {
              this.state = E.DOCTYPE_DTD;
              this.q = "";
            }
            continue;
          case E.COMMENT:
            if (r === "-") {
              this.state = E.COMMENT_ENDING;
            } else {
              this.comment += r;
            }
            continue;
          case E.COMMENT_ENDING:
            if (r === "-") {
              this.state = E.COMMENT_ENDED;
              this.comment = S(this.opt, this.comment);
              if (this.comment) {
                O(this, "oncomment", this.comment);
              }
              this.comment = "";
            } else {
              this.comment += "-" + r;
              this.state = E.COMMENT;
            }
            continue;
          case E.COMMENT_ENDED:
            if (r !== ">") {
              N(this, "Malformed comment");
              this.comment += "--" + r;
              this.state = E.COMMENT;
            } else if (this.doctype && this.doctype !== true) {
              this.state = E.DOCTYPE_DTD;
            } else {
              this.state = E.TEXT;
            }
            continue;
          case E.CDATA:
            if (r === "]") {
              this.state = E.CDATA_ENDING;
            } else {
              this.cdata += r;
            }
            continue;
          case E.CDATA_ENDING:
            if (r === "]") {
              this.state = E.CDATA_ENDING_2;
            } else {
              this.cdata += "]" + r;
              this.state = E.CDATA;
            }
            continue;
          case E.CDATA_ENDING_2:
            if (r === ">") {
              if (this.cdata) {
                O(this, "oncdata", this.cdata);
              }
              O(this, "onclosecdata");
              this.cdata = "";
              this.state = E.TEXT;
            } else if (r === "]") {
              this.cdata += "]";
            } else {
              this.cdata += "]]" + r;
              this.state = E.CDATA;
            }
            continue;
          case E.PROC_INST:
            if (r === "?") {
              this.state = E.PROC_INST_ENDING;
            } else if (d(r)) {
              this.state = E.PROC_INST_BODY;
            } else {
              this.procInstName += r;
            }
            continue;
          case E.PROC_INST_BODY:
            if (!this.procInstBody && d(r)) {
              continue;
            }
            if (r === "?") {
              this.state = E.PROC_INST_ENDING;
            } else {
              this.procInstBody += r;
            }
            continue;
          case E.PROC_INST_ENDING:
            if (r === ">") {
              O(this, "onprocessinginstruction", {
                name: this.procInstName,
                body: this.procInstBody
              });
              this.procInstName = this.procInstBody = "";
              this.state = E.TEXT;
            } else {
              this.procInstBody += "?" + r;
              this.state = E.PROC_INST_BODY;
            }
            continue;
          case E.OPEN_TAG:
            if (g(l, r)) {
              this.tagName += r;
            } else {
              C(this);
              if (r === ">") {
                R(this);
              } else if (r === "/") {
                this.state = E.OPEN_TAG_SLASH;
              } else {
                if (!d(r)) {
                  N(this, "Invalid character in tag name");
                }
                this.state = E.ATTRIB;
              }
            }
            continue;
          case E.OPEN_TAG_SLASH:
            if (r === ">") {
              R(this, true);
              L(this);
            } else {
              N(this, "Forward-slash in opening tag not followed by >");
              this.state = E.ATTRIB;
            }
            continue;
          case E.ATTRIB:
            if (d(r)) {
              continue;
            }
            if (r === ">") {
              R(this);
            } else if (r === "/") {
              this.state = E.OPEN_TAG_SLASH;
            } else if (g(f, r)) {
              this.attribName = r;
              this.attribValue = "";
              this.state = E.ATTRIB_NAME;
            } else {
              N(this, "Invalid attribute name");
            }
            continue;
          case E.ATTRIB_NAME:
            if (r === "=") {
              this.state = E.ATTRIB_VALUE;
            } else if (r === ">") {
              N(this, "Attribute without value");
              this.attribValue = this.attribName;
              j(this);
              R(this);
            } else if (d(r)) {
              this.state = E.ATTRIB_NAME_SAW_WHITE;
            } else if (g(l, r)) {
              this.attribName += r;
            } else {
              N(this, "Invalid attribute name");
            }
            continue;
          case E.ATTRIB_NAME_SAW_WHITE:
            if (r === "=") {
              this.state = E.ATTRIB_VALUE;
            } else {
              if (d(r)) {
                continue;
              }
              N(this, "Attribute without value");
              this.tag.attributes[this.attribName] = "";
              this.attribValue = "";
              O(this, "onattribute", {
                name: this.attribName,
                value: ""
              });
              this.attribName = "";
              if (r === ">") {
                R(this);
              } else if (g(f, r)) {
                this.attribName = r;
                this.state = E.ATTRIB_NAME;
              } else {
                N(this, "Invalid attribute name");
                this.state = E.ATTRIB;
              }
            }
            continue;
          case E.ATTRIB_VALUE:
            if (d(r)) {
              continue;
            }
            if (y(r)) {
              this.q = r;
              this.state = E.ATTRIB_VALUE_QUOTED;
            } else {
              if (!this.opt.unquotedAttributeValues) {
                A(this, "Unquoted attribute value");
              }
              this.state = E.ATTRIB_VALUE_UNQUOTED;
              this.attribValue = r;
            }
            continue;
          case E.ATTRIB_VALUE_QUOTED:
            if (r !== this.q) {
              if (r === "&") {
                this.state = E.ATTRIB_VALUE_ENTITY_Q;
              } else {
                this.attribValue += r;
              }
              continue;
            }
            j(this);
            this.q = "";
            this.state = E.ATTRIB_VALUE_CLOSED;
            continue;
          case E.ATTRIB_VALUE_CLOSED:
            if (d(r)) {
              this.state = E.ATTRIB;
            } else if (r === ">") {
              R(this);
            } else if (r === "/") {
              this.state = E.OPEN_TAG_SLASH;
            } else if (g(f, r)) {
              N(this, "No whitespace between attributes");
              this.attribName = r;
              this.attribValue = "";
              this.state = E.ATTRIB_NAME;
            } else {
              N(this, "Invalid attribute name");
            }
            continue;
          case E.ATTRIB_VALUE_UNQUOTED:
            if (!m(r)) {
              if (r === "&") {
                this.state = E.ATTRIB_VALUE_ENTITY_U;
              } else {
                this.attribValue += r;
              }
              continue;
            }
            j(this);
            if (r === ">") {
              R(this);
            } else {
              this.state = E.ATTRIB;
            }
            continue;
          case E.CLOSE_TAG:
            if (this.tagName) {
              if (r === ">") {
                L(this);
              } else if (g(l, r)) {
                this.tagName += r;
              } else if (this.script) {
                this.script += "</" + this.tagName;
                this.tagName = "";
                this.state = E.SCRIPT;
              } else {
                if (!d(r)) {
                  N(this, "Invalid tagname in closing tag");
                }
                this.state = E.CLOSE_TAG_SAW_WHITE;
              }
            } else {
              if (d(r)) {
                continue;
              }
              if (v(f, r)) {
                if (this.script) {
                  this.script += "</" + r;
                  this.state = E.SCRIPT;
                } else {
                  N(this, "Invalid tagname in closing tag.");
                }
              } else {
                this.tagName = r;
              }
            }
            continue;
          case E.CLOSE_TAG_SAW_WHITE:
            if (d(r)) {
              continue;
            }
            if (r === ">") {
              L(this);
            } else {
              N(this, "Invalid characters in closing tag");
            }
            continue;
          case E.TEXT_ENTITY:
          case E.ATTRIB_VALUE_ENTITY_Q:
          case E.ATTRIB_VALUE_ENTITY_U:
            var a;
            var u;
            switch (this.state) {
              case E.TEXT_ENTITY:
                a = E.TEXT;
                u = "textNode";
                break;
              case E.ATTRIB_VALUE_ENTITY_Q:
                a = E.ATTRIB_VALUE_QUOTED;
                u = "attribValue";
                break;
              case E.ATTRIB_VALUE_ENTITY_U:
                a = E.ATTRIB_VALUE_UNQUOTED;
                u = "attribValue";
            }
            if (r === ";") {
              var c = k(this);
              if (this.opt.unparsedEntities && !Object.values(e.XML_ENTITIES).includes(c)) {
                this.entity = "";
                this.state = a;
                this.write(c);
              } else {
                this[u] += c;
                this.entity = "";
                this.state = a;
              }
            } else if (g(this.entity.length ? p : h, r)) {
              this.entity += r;
            } else {
              N(this, "Invalid character in entity name");
              this[u] += "&" + this.entity + r;
              this.entity = "";
              this.state = a;
            }
            continue;
          default:
            throw new Error(this, "Unknown state: " + this.state);
        }
      }
      if (this.position >= this.bufferCheckPosition) {
        (function (t) {
          var n = Math.max(e.MAX_BUFFER_LENGTH, 10);
          var r = 0;
          for (var i = 0, s = o.length; i < s; i++) {
            var a = t[o[i]].length;
            if (a > n) {
              switch (o[i]) {
                case "textNode":
                  I(t);
                  break;
                case "cdata":
                  O(t, "oncdata", t.cdata);
                  t.cdata = "";
                  break;
                case "script":
                  O(t, "onscript", t.script);
                  t.script = "";
                  break;
                default:
                  A(t, "Max buffer length exceeded: " + o[i]);
              }
            }
            r = Math.max(r, a);
          }
          var u = e.MAX_BUFFER_LENGTH - r;
          t.bufferCheckPosition = u + t.position;
        })(this);
      }
      return this;
    }
    /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */,
    resume: function () {
      this.error = null;
      return this;
    },
    close: function () {
      return this.write(null);
    },
    flush: function () {
      var t;
      I(t = this);
      if (t.cdata !== "") {
        O(t, "oncdata", t.cdata);
        t.cdata = "";
      }
      if (t.script !== "") {
        O(t, "onscript", t.script);
        t.script = "";
      }
    }
  };
  try {
    r = require("./348.js").Stream;
  } catch (t) {
    r = function () {};
  }
  r ||= function () {};
  var s = e.EVENTS.filter(function (t) {
    return t !== "error" && t !== "end";
  });
  function a(t, e) {
    if (!(this instanceof a)) {
      return new a(t, e);
    }
    r.apply(this);
    this._parser = new i(t, e);
    this.writable = true;
    this.readable = true;
    var n = this;
    this._parser.onend = function () {
      n.emit("end");
    };
    this._parser.onerror = function (t) {
      n.emit("error", t);
      n._parser.error = null;
    };
    this._decoder = null;
    s.forEach(function (t) {
      Object.defineProperty(n, "on" + t, {
        get: function () {
          return n._parser["on" + t];
        },
        set: function (e) {
          if (!e) {
            n.removeAllListeners(t);
            n._parser["on" + t] = e;
            return e;
          }
          n.on(t, e);
        },
        enumerable: true,
        configurable: false
      });
    });
  }
  a.prototype = Object.create(r.prototype, {
    constructor: {
      value: a
    }
  });
  a.prototype.write = function (e) {
    if (typeof t == "function" && typeof t.isBuffer == "function" && t.isBuffer(e)) {
      if (!this._decoder) {
        var r = require("./186.js").StringDecoder;
        this._decoder = new r("utf8");
      }
      e = this._decoder.write(e);
    }
    this._parser.write(e.toString());
    this.emit("data", e);
    return true;
  };
  a.prototype.end = function (t) {
    if (t && t.length) {
      this.write(t);
    }
    this._parser.end();
    return true;
  };
  a.prototype.on = function (t, e) {
    var n = this;
    if (!n._parser["on" + t] && s.indexOf(t) !== -1) {
      n._parser["on" + t] = function () {
        var e = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
        e.splice(0, 0, t);
        n.emit.apply(n, e);
      };
    }
    return r.prototype.on.call(n, t, e);
  };
  var u = "http://www.w3.org/XML/1998/namespace";
  var c = {
    xml: u,
    xmlns: "http://www.w3.org/2000/xmlns/"
  };
  var f = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
  var l = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
  var h = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
  var p = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
  function d(t) {
    return t === " " || t === "\n" || t === "\r" || t === "\t";
  }
  function y(t) {
    return t === "\"" || t === "'";
  }
  function m(t) {
    return t === ">" || d(t);
  }
  function g(t, e) {
    return t.test(e);
  }
  function v(t, e) {
    return !g(t, e);
  }
  var b;
  var w;
  var _;
  var E = 0;
  e.STATE = {
    BEGIN: E++,
    BEGIN_WHITESPACE: E++,
    TEXT: E++,
    TEXT_ENTITY: E++,
    OPEN_WAKA: E++,
    SGML_DECL: E++,
    SGML_DECL_QUOTED: E++,
    DOCTYPE: E++,
    DOCTYPE_QUOTED: E++,
    DOCTYPE_DTD: E++,
    DOCTYPE_DTD_QUOTED: E++,
    COMMENT_STARTING: E++,
    COMMENT: E++,
    COMMENT_ENDING: E++,
    COMMENT_ENDED: E++,
    CDATA: E++,
    CDATA_ENDING: E++,
    CDATA_ENDING_2: E++,
    PROC_INST: E++,
    PROC_INST_BODY: E++,
    PROC_INST_ENDING: E++,
    OPEN_TAG: E++,
    OPEN_TAG_SLASH: E++,
    ATTRIB: E++,
    ATTRIB_NAME: E++,
    ATTRIB_NAME_SAW_WHITE: E++,
    ATTRIB_VALUE: E++,
    ATTRIB_VALUE_QUOTED: E++,
    ATTRIB_VALUE_CLOSED: E++,
    ATTRIB_VALUE_UNQUOTED: E++,
    ATTRIB_VALUE_ENTITY_Q: E++,
    ATTRIB_VALUE_ENTITY_U: E++,
    CLOSE_TAG: E++,
    CLOSE_TAG_SAW_WHITE: E++,
    SCRIPT: E++,
    SCRIPT_ENDING: E++
  };
  e.XML_ENTITIES = {
    amp: "&",
    gt: ">",
    lt: "<",
    quot: "\"",
    apos: "'"
  };
  e.ENTITIES = {
    amp: "&",
    gt: ">",
    lt: "<",
    quot: "\"",
    apos: "'",
    AElig: 198,
    Aacute: 193,
    Acirc: 194,
    Agrave: 192,
    Aring: 197,
    Atilde: 195,
    Auml: 196,
    Ccedil: 199,
    ETH: 208,
    Eacute: 201,
    Ecirc: 202,
    Egrave: 200,
    Euml: 203,
    Iacute: 205,
    Icirc: 206,
    Igrave: 204,
    Iuml: 207,
    Ntilde: 209,
    Oacute: 211,
    Ocirc: 212,
    Ograve: 210,
    Oslash: 216,
    Otilde: 213,
    Ouml: 214,
    THORN: 222,
    Uacute: 218,
    Ucirc: 219,
    Ugrave: 217,
    Uuml: 220,
    Yacute: 221,
    aacute: 225,
    acirc: 226,
    aelig: 230,
    agrave: 224,
    aring: 229,
    atilde: 227,
    auml: 228,
    ccedil: 231,
    eacute: 233,
    ecirc: 234,
    egrave: 232,
    eth: 240,
    euml: 235,
    iacute: 237,
    icirc: 238,
    igrave: 236,
    iuml: 239,
    ntilde: 241,
    oacute: 243,
    ocirc: 244,
    ograve: 242,
    oslash: 248,
    otilde: 245,
    ouml: 246,
    szlig: 223,
    thorn: 254,
    uacute: 250,
    ucirc: 251,
    ugrave: 249,
    uuml: 252,
    yacute: 253,
    yuml: 255,
    copy: 169,
    reg: 174,
    nbsp: 160,
    iexcl: 161,
    cent: 162,
    pound: 163,
    curren: 164,
    yen: 165,
    brvbar: 166,
    sect: 167,
    uml: 168,
    ordf: 170,
    laquo: 171,
    not: 172,
    shy: 173,
    macr: 175,
    deg: 176,
    plusmn: 177,
    sup1: 185,
    sup2: 178,
    sup3: 179,
    acute: 180,
    micro: 181,
    para: 182,
    middot: 183,
    cedil: 184,
    ordm: 186,
    raquo: 187,
    frac14: 188,
    frac12: 189,
    frac34: 190,
    iquest: 191,
    times: 215,
    divide: 247,
    OElig: 338,
    oelig: 339,
    Scaron: 352,
    scaron: 353,
    Yuml: 376,
    fnof: 402,
    circ: 710,
    tilde: 732,
    Alpha: 913,
    Beta: 914,
    Gamma: 915,
    Delta: 916,
    Epsilon: 917,
    Zeta: 918,
    Eta: 919,
    Theta: 920,
    Iota: 921,
    Kappa: 922,
    Lambda: 923,
    Mu: 924,
    Nu: 925,
    Xi: 926,
    Omicron: 927,
    Pi: 928,
    Rho: 929,
    Sigma: 931,
    Tau: 932,
    Upsilon: 933,
    Phi: 934,
    Chi: 935,
    Psi: 936,
    Omega: 937,
    alpha: 945,
    beta: 946,
    gamma: 947,
    delta: 948,
    epsilon: 949,
    zeta: 950,
    eta: 951,
    theta: 952,
    iota: 953,
    kappa: 954,
    lambda: 955,
    mu: 956,
    nu: 957,
    xi: 958,
    omicron: 959,
    pi: 960,
    rho: 961,
    sigmaf: 962,
    sigma: 963,
    tau: 964,
    upsilon: 965,
    phi: 966,
    chi: 967,
    psi: 968,
    omega: 969,
    thetasym: 977,
    upsih: 978,
    piv: 982,
    ensp: 8194,
    emsp: 8195,
    thinsp: 8201,
    zwnj: 8204,
    zwj: 8205,
    lrm: 8206,
    rlm: 8207,
    ndash: 8211,
    mdash: 8212,
    lsquo: 8216,
    rsquo: 8217,
    sbquo: 8218,
    ldquo: 8220,
    rdquo: 8221,
    bdquo: 8222,
    dagger: 8224,
    Dagger: 8225,
    bull: 8226,
    hellip: 8230,
    permil: 8240,
    prime: 8242,
    Prime: 8243,
    lsaquo: 8249,
    rsaquo: 8250,
    oline: 8254,
    frasl: 8260,
    euro: 8364,
    image: 8465,
    weierp: 8472,
    real: 8476,
    trade: 8482,
    alefsym: 8501,
    larr: 8592,
    uarr: 8593,
    rarr: 8594,
    darr: 8595,
    harr: 8596,
    crarr: 8629,
    lArr: 8656,
    uArr: 8657,
    rArr: 8658,
    dArr: 8659,
    hArr: 8660,
    forall: 8704,
    part: 8706,
    exist: 8707,
    empty: 8709,
    nabla: 8711,
    isin: 8712,
    notin: 8713,
    ni: 8715,
    prod: 8719,
    sum: 8721,
    minus: 8722,
    lowast: 8727,
    radic: 8730,
    prop: 8733,
    infin: 8734,
    ang: 8736,
    and: 8743,
    or: 8744,
    cap: 8745,
    cup: 8746,
    int: 8747,
    there4: 8756,
    sim: 8764,
    cong: 8773,
    asymp: 8776,
    ne: 8800,
    equiv: 8801,
    le: 8804,
    ge: 8805,
    sub: 8834,
    sup: 8835,
    nsub: 8836,
    sube: 8838,
    supe: 8839,
    oplus: 8853,
    otimes: 8855,
    perp: 8869,
    sdot: 8901,
    lceil: 8968,
    rceil: 8969,
    lfloor: 8970,
    rfloor: 8971,
    lang: 9001,
    rang: 9002,
    loz: 9674,
    spades: 9824,
    clubs: 9827,
    hearts: 9829,
    diams: 9830
  };
  Object.keys(e.ENTITIES).forEach(function (t) {
    var n = e.ENTITIES[t];
    var r = typeof n == "number" ? String.fromCharCode(n) : n;
    e.ENTITIES[t] = r;
  });
  for (var T in e.STATE) {
    e.STATE[e.STATE[T]] = T;
  }
  function x(t, e, n) {
    if (t[e]) {
      t[e](n);
    }
  }
  function O(t, e, n) {
    if (t.textNode) {
      I(t);
    }
    x(t, e, n);
  }
  function I(t) {
    t.textNode = S(t.opt, t.textNode);
    if (t.textNode) {
      x(t, "ontext", t.textNode);
    }
    t.textNode = "";
  }
  function S(t, e) {
    if (t.trim) {
      e = e.trim();
    }
    if (t.normalize) {
      e = e.replace(/\s+/g, " ");
    }
    return e;
  }
  function A(t, e) {
    I(t);
    if (t.trackPosition) {
      e += "\nLine: " + t.line + "\nColumn: " + t.column + "\nChar: " + t.c;
    }
    e = new Error(e);
    t.error = e;
    x(t, "onerror", e);
    return t;
  }
  function D(t) {
    if (t.sawRoot && !t.closedRoot) {
      N(t, "Unclosed root tag");
    }
    if (t.state !== E.BEGIN && t.state !== E.BEGIN_WHITESPACE && t.state !== E.TEXT) {
      A(t, "Unexpected end");
    }
    I(t);
    t.c = "";
    t.closed = true;
    x(t, "onend");
    i.call(t, t.strict, t.opt);
    return t;
  }
  function N(t, e) {
    if (typeof t != "object" || !(t instanceof i)) {
      throw new Error("bad call to strictFail");
    }
    if (t.strict) {
      A(t, e);
    }
  }
  function C(t) {
    if (!t.strict) {
      t.tagName = t.tagName[t.looseCase]();
    }
    var e = t.tags[t.tags.length - 1] || t;
    var n = t.tag = {
      name: t.tagName,
      attributes: {}
    };
    if (t.opt.xmlns) {
      n.ns = e.ns;
    }
    t.attribList.length = 0;
    O(t, "onopentagstart", n);
  }
  function P(t, e) {
    var n = t.indexOf(":") < 0 ? ["", t] : t.split(":");
    var r = n[0];
    var o = n[1];
    if (e && t === "xmlns") {
      r = "xmlns";
      o = "";
    }
    return {
      prefix: r,
      local: o
    };
  }
  function j(t) {
    if (!t.strict) {
      t.attribName = t.attribName[t.looseCase]();
    }
    if (t.attribList.indexOf(t.attribName) !== -1 || t.tag.attributes.hasOwnProperty(t.attribName)) {
      t.attribName = t.attribValue = "";
    } else {
      if (t.opt.xmlns) {
        var e = P(t.attribName, true);
        var n = e.prefix;
        var r = e.local;
        if (n === "xmlns") {
          if (r === "xml" && t.attribValue !== u) {
            N(t, "xml: prefix must be bound to " + u + "\nActual: " + t.attribValue);
          } else if (r === "xmlns" && t.attribValue !== "http://www.w3.org/2000/xmlns/") {
            N(t, "xmlns: prefix must be bound to http://www.w3.org/2000/xmlns/\nActual: " + t.attribValue);
          } else {
            var o = t.tag;
            var i = t.tags[t.tags.length - 1] || t;
            if (o.ns === i.ns) {
              o.ns = Object.create(i.ns);
            }
            o.ns[r] = t.attribValue;
          }
        }
        t.attribList.push([t.attribName, t.attribValue]);
      } else {
        t.tag.attributes[t.attribName] = t.attribValue;
        O(t, "onattribute", {
          name: t.attribName,
          value: t.attribValue
        });
      }
      t.attribName = t.attribValue = "";
    }
  }
  function R(t, e) {
    if (t.opt.xmlns) {
      var n = t.tag;
      var r = P(t.tagName);
      n.prefix = r.prefix;
      n.local = r.local;
      n.uri = n.ns[r.prefix] || "";
      if (n.prefix && !n.uri) {
        N(t, "Unbound namespace prefix: " + JSON.stringify(t.tagName));
        n.uri = r.prefix;
      }
      var o = t.tags[t.tags.length - 1] || t;
      if (n.ns && o.ns !== n.ns) {
        Object.keys(n.ns).forEach(function (e) {
          O(t, "onopennamespace", {
            prefix: e,
            uri: n.ns[e]
          });
        });
      }
      for (var i = 0, s = t.attribList.length; i < s; i++) {
        var a = t.attribList[i];
        var u = a[0];
        var c = a[1];
        var f = P(u, true);
        var l = f.prefix;
        var h = f.local;
        var p = l === "" ? "" : n.ns[l] || "";
        var d = {
          name: u,
          value: c,
          prefix: l,
          local: h,
          uri: p
        };
        if (l && l !== "xmlns" && !p) {
          N(t, "Unbound namespace prefix: " + JSON.stringify(l));
          d.uri = l;
        }
        t.tag.attributes[u] = d;
        O(t, "onattribute", d);
      }
      t.attribList.length = 0;
    }
    t.tag.isSelfClosing = !!e;
    t.sawRoot = true;
    t.tags.push(t.tag);
    O(t, "onopentag", t.tag);
    if (!e) {
      if (t.noscript || t.tagName.toLowerCase() !== "script") {
        t.state = E.TEXT;
      } else {
        t.state = E.SCRIPT;
      }
      t.tag = null;
      t.tagName = "";
    }
    t.attribName = t.attribValue = "";
    t.attribList.length = 0;
  }
  function L(t) {
    if (!t.tagName) {
      N(t, "Weird empty close tag.");
      t.textNode += "</>";
      t.state = E.TEXT;
      return;
    }
    if (t.script) {
      if (t.tagName !== "script") {
        t.script += "</" + t.tagName + ">";
        t.tagName = "";
        t.state = E.SCRIPT;
        return;
      }
      O(t, "onscript", t.script);
      t.script = "";
    }
    var e = t.tags.length;
    var n = t.tagName;
    if (!t.strict) {
      n = n[t.looseCase]();
    }
    var r = n;
    while (e--) {
      if (t.tags[e].name === r) {
        break;
      }
      N(t, "Unexpected close tag");
    }
    if (e < 0) {
      N(t, "Unmatched closing tag: " + t.tagName);
      t.textNode += "</" + t.tagName + ">";
      t.state = E.TEXT;
      return;
    }
    t.tagName = n;
    for (var o = t.tags.length; o-- > e;) {
      var i = t.tag = t.tags.pop();
      t.tagName = t.tag.name;
      O(t, "onclosetag", t.tagName);
      var s = {};
      for (var a in i.ns) {
        s[a] = i.ns[a];
      }
      var u = t.tags[t.tags.length - 1] || t;
      if (t.opt.xmlns && i.ns !== u.ns) {
        Object.keys(i.ns).forEach(function (e) {
          var n = i.ns[e];
          O(t, "onclosenamespace", {
            prefix: e,
            uri: n
          });
        });
      }
    }
    if (e === 0) {
      t.closedRoot = true;
    }
    t.tagName = t.attribValue = t.attribName = "";
    t.attribList.length = 0;
    t.state = E.TEXT;
  }
  function k(t) {
    var e;
    var n = t.entity;
    var r = n.toLowerCase();
    var o = "";
    if (t.ENTITIES[n]) {
      return t.ENTITIES[n];
    } else if (t.ENTITIES[r]) {
      return t.ENTITIES[r];
    } else {
      if ((n = r).charAt(0) === "#") {
        if (n.charAt(1) === "x") {
          n = n.slice(2);
          o = (e = parseInt(n, 16)).toString(16);
        } else {
          n = n.slice(1);
          o = (e = parseInt(n, 10)).toString(10);
        }
      }
      n = n.replace(/^0+/, "");
      if (isNaN(e) || o.toLowerCase() !== n) {
        N(t, "Invalid character entity");
        return "&" + t.entity + ";";
      } else {
        return String.fromCodePoint(e);
      }
    }
  }
  function M(t, e) {
    if (e === "<") {
      t.state = E.OPEN_WAKA;
      t.startTagPosition = t.position;
    } else if (!d(e)) {
      N(t, "Non-whitespace before first tag.");
      t.textNode = e;
      t.state = E.TEXT;
    }
  }
  function F(t, e) {
    var n = "";
    if (e < t.length) {
      n = t.charAt(e);
    }
    return n;
  }
  E = e.STATE;
  if (!String.fromCodePoint) {
    b = String.fromCharCode;
    w = Math.floor;
    _ = function () {
      var t;
      var e;
      var n = 16384;
      var r = [];
      var o = -1;
      var i = arguments.length;
      if (!i) {
        return "";
      }
      var s = "";
      while (++o < i) {
        var a = Number(arguments[o]);
        if (!isFinite(a) || a < 0 || a > 1114111 || w(a) !== a) {
          throw RangeError("Invalid code point: " + a);
        }
        if (a <= 65535) {
          r.push(a);
        } else {
          t = 55296 + ((a -= 65536) >> 10);
          e = a % 1024 + 56320;
          r.push(t, e);
        }
        if (o + 1 === i || r.length > n) {
          s += b.apply(null, r);
          r.length = 0;
        }
      }
      return s;
    };
    if (Object.defineProperty) {
      Object.defineProperty(String, "fromCodePoint", {
        value: _,
        configurable: true,
        writable: true
      });
    } else {
      String.fromCodePoint = _;
    }
  }
})(exports);