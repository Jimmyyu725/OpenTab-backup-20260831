if (typeof self != "undefined") {
  self;
}
module.exports = function (e) {
  var t = {};
  function n(r) {
    if (t[r]) {
      return t[r].exports;
    }
    var i = t[r] = {
      i: r,
      l: false,
      exports: {}
    };
    e[r].call(i.exports, i, i.exports, n);
    i.l = true;
    return i.exports;
  }
  n.m = e;
  n.c = t;
  n.d = function (e, t, r) {
    if (!n.o(e, t)) {
      Object.defineProperty(e, t, {
        enumerable: true,
        get: r
      });
    }
  };
  n.r = function (e) {
    if (typeof Symbol != "undefined" && Symbol.toStringTag) {
      Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      });
    }
    Object.defineProperty(e, "__esModule", {
      value: true
    });
  };
  n.t = function (e, t) {
    if (t & 1) {
      e = n(e);
    }
    if (t & 8) {
      return e;
    }
    if (t & 4 && typeof e == "object" && e && e.__esModule) {
      return e;
    }
    var r = Object.create(null);
    n.r(r);
    Object.defineProperty(r, "default", {
      enumerable: true,
      value: e
    });
    if (t & 2 && typeof e != "string") {
      for (var i in e) {
        n.d(r, i, function (t) {
          return e[t];
        }.bind(null, i));
      }
    }
    return r;
  };
  n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    n.d(t, "a", t);
    return t;
  };
  n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  };
  n.p = "";
  return n(n.s = 86);
}([function (e, t, n) {
  "use strict";

  var r = Object.prototype.hasOwnProperty;
  function i(e, t) {
    return r.call(e, t);
  }
  function a(e) {
    return (!(e >= 55296) || !(e <= 57343)) && (!(e >= 64976) || !(e <= 65007)) && (e & 65535) != 65535 && (e & 65535) != 65534 && (!(e >= 0) || !(e <= 8)) && e !== 11 && (!(e >= 14) || !(e <= 31)) && (!(e >= 127) || !(e <= 159)) && !(e > 1114111);
  }
  function o(e) {
    if (e > 65535) {
      var t = 55296 + ((e -= 65536) >> 10);
      var n = 56320 + (e & 1023);
      return String.fromCharCode(t, n);
    }
    return String.fromCharCode(e);
  }
  var s = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g;
  var l = new RegExp(s.source + "|" + /&([a-z#][a-z0-9]{1,31});/gi.source, "gi");
  var c = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i;
  var u = n(7);
  var p = /[&<>"]/;
  var d = /[&<>"]/g;
  var h = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;"
  };
  function g(e) {
    return h[e];
  }
  var f = /[.?*+^$[\]\\(){}|-]/g;
  var m = n(3);
  t.lib = {};
  t.lib.mdurl = n(8);
  t.lib.ucmicro = n(26);
  t.assign = function (e) {
    Array.prototype.slice.call(arguments, 1).forEach(function (t) {
      if (t) {
        if (typeof t != "object") {
          throw new TypeError(t + "must be object");
        }
        Object.keys(t).forEach(function (n) {
          e[n] = t[n];
        });
      }
    });
    return e;
  };
  t.isString = function (e) {
    return function (e) {
      return Object.prototype.toString.call(e);
    }(e) === "[object String]";
  };
  t.has = i;
  t.unescapeMd = function (e) {
    if (e.indexOf("\\") < 0) {
      return e;
    } else {
      return e.replace(s, "$1");
    }
  };
  t.unescapeAll = function (e) {
    if (e.indexOf("\\") < 0 && e.indexOf("&") < 0) {
      return e;
    } else {
      return e.replace(l, function (e, t, n) {
        return t || function (e, t) {
          var n = 0;
          if (i(u, t)) {
            return u[t];
          } else if (t.charCodeAt(0) === 35 && c.test(t) && a(n = t[1].toLowerCase() === "x" ? parseInt(t.slice(2), 16) : parseInt(t.slice(1), 10))) {
            return o(n);
          } else {
            return e;
          }
        }(e, n);
      });
    }
  };
  t.isValidEntityCode = a;
  t.fromCodePoint = o;
  t.escapeHtml = function (e) {
    if (p.test(e)) {
      return e.replace(d, g);
    } else {
      return e;
    }
  };
  t.arrayReplaceAt = function (e, t, n) {
    return [].concat(e.slice(0, t), n, e.slice(t + 1));
  };
  t.isSpace = function (e) {
    switch (e) {
      case 9:
      case 32:
        return true;
    }
    return false;
  };
  t.isWhiteSpace = function (e) {
    if (e >= 8192 && e <= 8202) {
      return true;
    }
    switch (e) {
      case 9:
      case 10:
      case 11:
      case 12:
      case 13:
      case 32:
      case 160:
      case 5760:
      case 8239:
      case 8287:
      case 12288:
        return true;
    }
    return false;
  };
  t.isMdAsciiPunct = function (e) {
    switch (e) {
      case 33:
      case 34:
      case 35:
      case 36:
      case 37:
      case 38:
      case 39:
      case 40:
      case 41:
      case 42:
      case 43:
      case 44:
      case 45:
      case 46:
      case 47:
      case 58:
      case 59:
      case 60:
      case 61:
      case 62:
      case 63:
      case 64:
      case 91:
      case 92:
      case 93:
      case 94:
      case 95:
      case 96:
      case 123:
      case 124:
      case 125:
      case 126:
        return true;
      default:
        return false;
    }
  };
  t.isPunctChar = function (e) {
    return m.test(e);
  };
  t.escapeRE = function (e) {
    return e.replace(f, "\\$&");
  };
  t.normalizeReference = function (e) {
    e = e.trim().replace(/\s+/g, " ");
    if ("ẞ".toLowerCase() === "Ṿ") {
      e = e.replace(/ẞ/g, "ß");
    }
    return e.toLowerCase().toUpperCase();
  };
}, function (e, t, n) {
  "use strict";

  function r() {
    return (r = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) {
          if (Object.prototype.hasOwnProperty.call(n, r)) {
            e[r] = n[r];
          }
        }
      }
      return e;
    }).apply(this, arguments);
  }
  n.d(t, "a", function () {
    return r;
  });
}, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return o;
  });
  var r = n(16);
  var i = n.n(r);
  var a = n(0);
  function o(e) {
    var t = e.codeHighlightExtensionMap;
    var n = t === undefined ? {} : t;
    var r = e.hasLang;
    var i = r === undefined ? function () {
      return true;
    } : r;
    var o = e.highlight;
    var s = o === undefined ? function (e) {
      return e;
    } : o;
    var l = e.codeBlockClass;
    return function (e, t) {
      var r = Object(a.escapeHtml)(e);
      if ((t = n[t] || t) && i(t)) {
        r = s(e, t);
      }
      return "<pre class=\"" + function (e) {
        if (l) {
          return l(e);
        } else {
          return "language-" + e;
        }
      }(t) + "\"><code>" + r + "</code></pre>";
    };
  }
  t.b = function () {
    var e = new i.a();
    e.set({
      html: true,
      breaks: true,
      linkify: false,
      typographer: true
    });
    return e;
  };
}, function (e, t) {
  e.exports = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/;
}, function (e, t, n) {
  "use strict";

  function r() {
    this.__rules__ = [];
    this.__cache__ = null;
  }
  r.prototype.__find__ = function (e) {
    for (var t = 0; t < this.__rules__.length; t++) {
      if (this.__rules__[t].name === e) {
        return t;
      }
    }
    return -1;
  };
  r.prototype.__compile__ = function () {
    var e = this;
    var t = [""];
    e.__rules__.forEach(function (e) {
      if (e.enabled) {
        e.alt.forEach(function (e) {
          if (t.indexOf(e) < 0) {
            t.push(e);
          }
        });
      }
    });
    e.__cache__ = {};
    t.forEach(function (t) {
      e.__cache__[t] = [];
      e.__rules__.forEach(function (n) {
        if (n.enabled) {
          if (!t || !(n.alt.indexOf(t) < 0)) {
            e.__cache__[t].push(n.fn);
          }
        }
      });
    });
  };
  r.prototype.at = function (e, t, n) {
    var r = this.__find__(e);
    var i = n || {};
    if (r === -1) {
      throw new Error("Parser rule not found: " + e);
    }
    this.__rules__[r].fn = t;
    this.__rules__[r].alt = i.alt || [];
    this.__cache__ = null;
  };
  r.prototype.before = function (e, t, n, r) {
    var i = this.__find__(e);
    var a = r || {};
    if (i === -1) {
      throw new Error("Parser rule not found: " + e);
    }
    this.__rules__.splice(i, 0, {
      name: t,
      enabled: true,
      fn: n,
      alt: a.alt || []
    });
    this.__cache__ = null;
  };
  r.prototype.after = function (e, t, n, r) {
    var i = this.__find__(e);
    var a = r || {};
    if (i === -1) {
      throw new Error("Parser rule not found: " + e);
    }
    this.__rules__.splice(i + 1, 0, {
      name: t,
      enabled: true,
      fn: n,
      alt: a.alt || []
    });
    this.__cache__ = null;
  };
  r.prototype.push = function (e, t, n) {
    var r = n || {};
    this.__rules__.push({
      name: e,
      enabled: true,
      fn: t,
      alt: r.alt || []
    });
    this.__cache__ = null;
  };
  r.prototype.enable = function (e, t) {
    if (!Array.isArray(e)) {
      e = [e];
    }
    var n = [];
    e.forEach(function (e) {
      var r = this.__find__(e);
      if (r < 0) {
        if (t) {
          return;
        }
        throw new Error("Rules manager: invalid rule name " + e);
      }
      this.__rules__[r].enabled = true;
      n.push(e);
    }, this);
    this.__cache__ = null;
    return n;
  };
  r.prototype.enableOnly = function (e, t) {
    if (!Array.isArray(e)) {
      e = [e];
    }
    this.__rules__.forEach(function (e) {
      e.enabled = false;
    });
    this.enable(e, t);
  };
  r.prototype.disable = function (e, t) {
    if (!Array.isArray(e)) {
      e = [e];
    }
    var n = [];
    e.forEach(function (e) {
      var r = this.__find__(e);
      if (r < 0) {
        if (t) {
          return;
        }
        throw new Error("Rules manager: invalid rule name " + e);
      }
      this.__rules__[r].enabled = false;
      n.push(e);
    }, this);
    this.__cache__ = null;
    return n;
  };
  r.prototype.getRules = function (e) {
    if (this.__cache__ === null) {
      this.__compile__();
    }
    return this.__cache__[e] || [];
  };
  e.exports = r;
}, function (e, t, n) {
  "use strict";

  function r(e, t, n) {
    this.type = e;
    this.tag = t;
    this.attrs = null;
    this.map = null;
    this.nesting = n;
    this.level = 0;
    this.children = null;
    this.content = "";
    this.markup = "";
    this.info = "";
    this.meta = null;
    this.block = false;
    this.hidden = false;
  }
  r.prototype.attrIndex = function (e) {
    var t;
    var n;
    var r;
    if (!this.attrs) {
      return -1;
    }
    n = 0;
    r = (t = this.attrs).length;
    for (; n < r; n++) {
      if (t[n][0] === e) {
        return n;
      }
    }
    return -1;
  };
  r.prototype.attrPush = function (e) {
    if (this.attrs) {
      this.attrs.push(e);
    } else {
      this.attrs = [e];
    }
  };
  r.prototype.attrSet = function (e, t) {
    var n = this.attrIndex(e);
    var r = [e, t];
    if (n < 0) {
      this.attrPush(r);
    } else {
      this.attrs[n] = r;
    }
  };
  r.prototype.attrGet = function (e) {
    var t = this.attrIndex(e);
    var n = null;
    if (t >= 0) {
      n = this.attrs[t][1];
    }
    return n;
  };
  r.prototype.attrJoin = function (e, t) {
    var n = this.attrIndex(e);
    if (n < 0) {
      this.attrPush([e, t]);
    } else {
      this.attrs[n][1] = this.attrs[n][1] + " " + t;
    }
  };
  e.exports = r;
}, function (e, t, n) {
  "use strict";

  const r = /[\u0000-\u001f]/g;
  const i = /[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’–—<>,.?/]+/g;
  const a = /[\u0300-\u036F]/g;
  e.exports = function (e) {
    return e.normalize("NFKD").replace(a, "").replace(r, "").replace(i, "-").replace(/\-{2,}/g, "-").replace(/^\-+|\-+$/g, "").replace(/^(\d)/, "_$1").toLowerCase();
  };
}, function (e, t, n) {
  "use strict";

  e.exports = n(21);
}, function (e, t, n) {
  "use strict";

  e.exports.encode = n(22);
  e.exports.decode = n(23);
  e.exports.format = n(24);
  e.exports.parse = n(25);
}, function (e, t) {
  e.exports = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
}, function (e, t) {
  e.exports = /[\0-\x1F\x7F-\x9F]/;
}, function (e, t) {
  e.exports = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/;
}, function (e, t, n) {
  "use strict";

  var r = "<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^\"'=<>`\\x00-\\x20]+|'[^']*'|\"[^\"]*\"))?)*\\s*\\/?>";
  var i = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>";
  var a = new RegExp("^(?:" + r + "|" + i + "|<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->|<[?][\\s\\S]*?[?]>|<![A-Z]+\\s+[^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)");
  var o = new RegExp("^(?:" + r + "|" + i + ")");
  e.exports.HTML_TAG_RE = a;
  e.exports.HTML_OPEN_CLOSE_TAG_RE = o;
}, function (e, t, n) {
  "use strict";

  function r(e, t) {
    var n;
    var r;
    var i;
    var a;
    var o;
    var s = [];
    var l = t.length;
    for (n = 0; n < l; n++) {
      if ((i = t[n]).marker === 126 && i.end !== -1) {
        a = t[i.end];
        (o = e.tokens[i.token]).type = "s_open";
        o.tag = "s";
        o.nesting = 1;
        o.markup = "~~";
        o.content = "";
        (o = e.tokens[a.token]).type = "s_close";
        o.tag = "s";
        o.nesting = -1;
        o.markup = "~~";
        o.content = "";
        if (e.tokens[a.token - 1].type === "text" && e.tokens[a.token - 1].content === "~") {
          s.push(a.token - 1);
        }
      }
    }
    while (s.length) {
      for (r = (n = s.pop()) + 1; r < e.tokens.length && e.tokens[r].type === "s_close";) {
        r++;
      }
      if (n !== --r) {
        o = e.tokens[r];
        e.tokens[r] = e.tokens[n];
        e.tokens[n] = o;
      }
    }
  }
  e.exports.tokenize = function (e, t) {
    var n;
    var r;
    var i;
    var a;
    var o = e.pos;
    var s = e.src.charCodeAt(o);
    if (t) {
      return false;
    }
    if (s !== 126) {
      return false;
    }
    i = (r = e.scanDelims(e.pos, true)).length;
    a = String.fromCharCode(s);
    if (i < 2) {
      return false;
    }
    if (i % 2) {
      e.push("text", "", 0).content = a;
      i--;
    }
    n = 0;
    for (; n < i; n += 2) {
      e.push("text", "", 0).content = a + a;
      e.delimiters.push({
        marker: s,
        length: 0,
        token: e.tokens.length - 1,
        end: -1,
        open: r.can_open,
        close: r.can_close
      });
    }
    e.pos += r.length;
    return true;
  };
  e.exports.postProcess = function (e) {
    var t;
    var n = e.tokens_meta;
    var i = e.tokens_meta.length;
    r(e, e.delimiters);
    t = 0;
    for (; t < i; t++) {
      if (n[t] && n[t].delimiters) {
        r(e, n[t].delimiters);
      }
    }
  };
}, function (e, t, n) {
  "use strict";

  function r(e, t) {
    var n;
    var r;
    var i;
    var a;
    var o;
    var s;
    for (n = t.length - 1; n >= 0; n--) {
      if ((r = t[n]).marker === 95 || r.marker === 42) {
        if (r.end !== -1) {
          i = t[r.end];
          s = n > 0 && t[n - 1].end === r.end + 1 && t[n - 1].marker === r.marker && t[n - 1].token === r.token - 1 && t[r.end + 1].token === i.token + 1;
          o = String.fromCharCode(r.marker);
          (a = e.tokens[r.token]).type = s ? "strong_open" : "em_open";
          a.tag = s ? "strong" : "em";
          a.nesting = 1;
          a.markup = s ? o + o : o;
          a.content = "";
          (a = e.tokens[i.token]).type = s ? "strong_close" : "em_close";
          a.tag = s ? "strong" : "em";
          a.nesting = -1;
          a.markup = s ? o + o : o;
          a.content = "";
          if (s) {
            e.tokens[t[n - 1].token].content = "";
            e.tokens[t[r.end + 1].token].content = "";
            n--;
          }
        }
      }
    }
  }
  e.exports.tokenize = function (e, t) {
    var n;
    var r;
    var i = e.pos;
    var a = e.src.charCodeAt(i);
    if (t) {
      return false;
    }
    if (a !== 95 && a !== 42) {
      return false;
    }
    r = e.scanDelims(e.pos, a === 42);
    n = 0;
    for (; n < r.length; n++) {
      e.push("text", "", 0).content = String.fromCharCode(a);
      e.delimiters.push({
        marker: a,
        length: r.length,
        token: e.tokens.length - 1,
        end: -1,
        open: r.can_open,
        close: r.can_close
      });
    }
    e.pos += r.length;
    return true;
  };
  e.exports.postProcess = function (e) {
    var t;
    var n = e.tokens_meta;
    var i = e.tokens_meta.length;
    r(e, e.delimiters);
    t = 0;
    for (; t < i; t++) {
      if (n[t] && n[t].delimiters) {
        r(e, n[t].delimiters);
      }
    }
  };
}, function (e, t, n) {
  "use strict";

  const r = n(18);
  const i = {
    leftDelimiter: "{",
    rightDelimiter: "}",
    allowedAttributes: []
  };
  function a(e, t, n) {
    let r = {
      match: false,
      j: null
    };
    c = e;
    let i = (u = n.shift !== undefined ? t + n.shift : n.position) >= 0 ? c[u] : c[c.length + u];
    var c;
    var u;
    if (i === undefined) {
      return r;
    }
    for (let e in n) {
      if (e !== "shift" && e !== "position") {
        if (i[e] === undefined) {
          return r;
        }
        if (e === "children" && o(n.children)) {
          if (i.children.length === 0) {
            return r;
          }
          let e;
          let t = n.children;
          let o = i.children;
          if (t.every(e => e.position !== undefined)) {
            e = t.every(e => a(o, e.position, e).match);
            if (e) {
              let e = l(t).position;
              r.j = e >= 0 ? e : o.length + e;
            }
          } else {
            for (let n = 0; n < o.length; n++) {
              e = t.every(e => a(o, n, e).match);
              if (e) {
                r.j = n;
                break;
              }
            }
          }
          if (e === false) {
            return r;
          }
        } else {
          switch (typeof n[e]) {
            case "boolean":
            case "number":
            case "string":
              if (i[e] !== n[e]) {
                return r;
              }
              break;
            case "function":
              if (!n[e](i[e])) {
                return r;
              }
              break;
            case "object":
              if (s(n[e])) {
                if (n[e].every(t => t(i[e])) === false) {
                  return r;
                }
                break;
              }
            default:
              throw new Error(`Unknown type of pattern test (key: ${e}). Test should be of type boolean, number, string, function or array of functions.`);
          }
        }
      }
    }
    r.match = true;
    return r;
  }
  function o(e) {
    return Array.isArray(e) && e.length && e.every(e => typeof e == "object");
  }
  function s(e) {
    return Array.isArray(e) && e.length && e.every(e => typeof e == "function");
  }
  function l(e) {
    return e.slice(-1)[0] || {};
  }
  e.exports = function (e, t) {
    let n = Object.assign({}, i);
    n = Object.assign(n, t);
    const o = r(n);
    e.core.ruler.before("linkify", "curly_attributes", function (e) {
      let t = e.tokens;
      for (let e = 0; e < t.length; e++) {
        for (let n = 0; n < o.length; n++) {
          let r = o[n];
          let i = null;
          if (r.tests.every(n => {
            let r = a(t, e, n);
            if (r.j !== null) {
              i = r.j;
            }
            return r.match;
          })) {
            r.transform(t, e, i);
            if (r.name === "inline attributes" || r.name === "inline nesting 0") {
              n--;
            }
          }
        }
      }
    });
  };
}, function (e, t, n) {
  "use strict";

  e.exports = n(20);
}, function (e, t, n) {
  "use strict";

  n.r(t);
  n.d(t, "default", function () {
    return f;
  });
  var r = n(1);
  var i = n(15);
  var a = n.n(i);
  function o(e, t) {
    var n = (t === undefined ? {} : t).lineMarkup;
    var r = n === undefined ? "data-line" : n;
    function i(e, t, n, r, i) {
      return i.renderToken(e, t, n);
    }
    function a(e) {
      return function (t, n, i, a, o) {
        var s = t[n];
        s.attrPush([r, s.map[0] + 1]);
        return e(t, n, i, a, o);
      };
    }
    function o(e) {
      return function (t, n, i, a, o) {
        var s = e(t, n, i, a, o);
        var l = t[n].map[0] + 1;
        return "<div " + r + "=\"" + l + "\">" + s + "</div>";
      };
    }
    var s = {
      table_open: a,
      blockquote_open: a,
      bullet_list_open: a,
      ordered_list_open: a,
      reference_open: a,
      heading_open: a,
      lheading_open: a,
      paragraph_open: a,
      hr: a,
      html_block: o,
      code_block: o,
      fence: o
    };
    Object.keys(s).forEach(function (t) {
      var n = e.renderer.rules[t] || i;
      e.renderer.rules[t] = s[t](n);
    });
  }
  function s(e, t = {}) {
    var n = t.getMarks;
    if (n) {
      e.core.ruler.push("anchor", function (e) {
        var t = {};
        var r = e.tokens;
        r.filter(function (e) {
          return e.type === "heading_open";
        }).forEach(function (e) {
          var i = r[r.indexOf(e) + 1].content;
          var a = Number(e.tag.substr(1));
          t[i] = i in t ? Number(t[i]) + 1 : "";
          var o = n(i, a, t[i]);
          if (o) {
            o.forEach(function (t) {
              var n = t.attr;
              var r = t.value;
              e.attrPush([n, r]);
            });
          }
        });
      });
    }
  }
  var l = {
    includeLevel: [2, 3],
    containerClass: "table-of-contents",
    listClass: "table-of-content-list",
    listItemClass: "table-of-content-list-item",
    markerPattern: /^\[\[toc\]\]/im,
    listType: "ul",
    getAnchorAttrs: function () {
      return [];
    },
    format: undefined,
    forceFullToc: false,
    containerHeaderHtml: undefined,
    containerFooterHtml: undefined,
    transformLink: undefined
  };
  function c(e, t) {
    var n;
    var i = Object(r.a)({}, l, t);
    var a = i.markerPattern;
    function o(e, t, n) {
      var r;
      var a;
      var s = [];
      for (var l = "", c = t.length, u = e; u < c;) {
        var p = t[u];
        var d = t[u - 1];
        var h = p.tag && parseInt(p.tag.substr(1, 1));
        if (p.type === "heading_close" && i.includeLevel.indexOf(h) != -1 && d.type === "inline") {
          if (r) {
            if (h > r) {
              l += (a = o(u, t, n))[1];
              u = a[0];
              continue;
            }
            if (h < r) {
              l += "</li>";
              s.push(l);
              return [u, "<" + i.listType + " class=\"" + i.listClass + "\">" + s.join("") + "</" + i.listType + ">"];
            }
            if (h == r) {
              l += "</li>";
              s.push(l);
            }
          } else {
            r = h;
          }
          var g = d.children.reduce(function (e, t) {
            return e + t.content;
          }, "");
          var f = d.content;
          var m = n[f] = f in n ? Number(n[f]) + 1 : "";
          var b = i.getAnchorAttrs(f, h, m);
          l = "<li class=\"" + i.listItemClass + "\">\n      <a " + b.map(function (e) {
            return e.attr + "=\"" + e.value + "\"";
          }).join(" ") + ">";
          l += g;
          l += "</a>";
          u++;
        } else {
          u++;
        }
      }
      l += l === "" ? "" : "</li>";
      s.push(l);
      return [u, "<" + i.listType + " class=\"" + i.listClass + "\">" + s.join("") + "</" + i.listType + ">"];
    }
    e.renderer.rules.toc_open = function (e, t) {
      var n = "<div class=\"" + i.containerClass + "\">";
      if (i.containerHeaderHtml) {
        n += i.containerHeaderHtml;
      }
      return n;
    };
    e.renderer.rules.toc_close = function (e, t) {
      var n = "";
      if (i.containerFooterHtml) {
        n = i.containerFooterHtml;
      }
      return n + "</div>";
    };
    e.renderer.rules.toc_body = function (e, t) {
      var r = {};
      if (i.forceFullToc) {
        var a = "";
        for (var s = 0, l = n && n.tokens && n.tokens.length; s < l;) {
          var c = o(s, n.tokens, r);
          s = c[0];
          a += c[1];
        }
        return a;
      }
      return o(0, n.tokens, r)[1];
    };
    e.core.ruler.push("grab_state", function (e) {
      n = e;
    });
    e.inline.ruler.after("emphasis", "toc", function (e, t) {
      var n;
      if (e.src.charCodeAt(e.pos) !== 91) {
        return false;
      }
      if (t) {
        return false;
      }
      if ((n = (n = a.exec(e.src.substr(e.pos))) ? n.filter(function (e) {
        return e;
      }) : []).length < 1) {
        return false;
      }
      e.push("toc_open", "toc", 1).markup = "[[toc]]";
      e.push("toc_body", "", 0);
      e.push("toc_close", "toc", -1);
      var r = e.src.indexOf("\n", e.pos);
      e.pos = r !== -1 ? r : e.pos + e.posMax + 1;
      return true;
    });
  }
  function u(e, t = {}) {
    var n = t.getWrapperClass;
    var r = n === undefined ? function (e) {
      return "language-" + e;
    } : n;
    function i(e) {
      return function () {
        for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++) {
          n[i] = arguments[i];
        }
        var a = n[0][n[1]];
        var o = e.apply(undefined, n);
        return "<!--beforebegin--><div class=\"" + r(a.info.trim()) + " extra-class\" extra-attr><!--afterbegin-->" + o + "<!--beforeend--></div><!--afterend-->";
      };
    }
    var a = e.renderer.rules;
    var o = a.fence;
    var s = a.code_block;
    e.renderer.rules.fence = i(o);
    e.renderer.rules.code_block = i(s);
  }
  function p(e, t) {
    var n = t.externalAttrs;
    var r = t.openLinkIcon;
    var i = t.openLinkIconClass;
    var a = false;
    e.renderer.rules.link_open = function (e, t, r, i, o) {
      var s = e[t];
      var l = s.attrIndex("href");
      if (l >= 0) {
        var c = s.attrs[l][1];
        if (/^https?:/.test(c)) {
          Object.keys(n).forEach(function (e) {
            s.attrSet(e, n[e]);
          });
          if (/_blank/i.test(n.target)) {
            a = true;
          }
        }
      }
      return o.renderToken(e, t, r);
    };
    e.renderer.rules.link_close = function (e, t, n, o, s) {
      if (a && (a = false, r)) {
        if (i) {
          return "<i class=\"" + i + "\"></i>" + s.renderToken(e, t, n);
        } else {
          return "<svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" focusable=\"false\" x=\"0px\" y=\"0px\" viewBox=\"0 0 100 100\" width=\"15\" height=\"15\" class=\"v-md-svg-outbound\"><path fill=\"currentColor\" d=\"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z\"></path> <polygon fill=\"currentColor\" points=\"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9\"></polygon></svg>" + s.renderToken(e, t, n);
        }
      } else {
        return s.renderToken(e, t, n);
      }
    };
  }
  var d = n(6);
  var h = n.n(d);
  var g = n(2);
  function f(e) {
    var t = e === undefined ? {} : e;
    var n = t.toc;
    var i = t.link;
    var l = t.attrs;
    var d = Object(g.b)();
    d.use(p, Object(r.a)({
      externalAttrs: {
        target: "_blank"
      }
    }, i)).use(u, {
      getWrapperClass: function (e) {
        return "v-md-pre-wrapper v-md-pre-wrapper-" + e;
      }
    }).use(a.a, Object(r.a)({
      leftDelimiter: "{{{",
      rightDelimiter: "}}}"
    }, l, {
      allowedAttributes: ["width", "height"].concat(l == null ? undefined : l.allowedAttributes)
    })).use(s, {
      getMarks: function (e, t, n) {
        return [{
          attr: "data-v-md-heading",
          value: h()(e) + (n ? "-" + n : "")
        }];
      }
    }).use(c, Object(r.a)({
      listClass: "v-md-toc",
      listItemClass: "v-md-toc-item",
      getAnchorAttrs: function (e, t, n) {
        return [{
          attr: "data-v-md-anchor",
          value: h()(e) + (n ? "-" + n : "")
        }];
      }
    }, n)).use(o, {
      lineMarkup: "data-v-md-line"
    });
    return {
      previewClass: "markdown-body",
      extend: function (e) {
        e(d);
      },
      markdownParser: d
    };
  }
}, function (e, t, n) {
  "use strict";

  const r = n(19);
  function i(e) {
    return e.slice(-1)[0];
  }
  e.exports = e => {
    const t = new RegExp("^ {0,3}[-*_]{3,} ?" + r.escapeRegExp(e.leftDelimiter) + "[^" + r.escapeRegExp(e.rightDelimiter) + "]");
    return [{
      name: "fenced code blocks",
      tests: [{
        shift: 0,
        block: true,
        info: r.hasDelimiters("end", e)
      }],
      transform: (t, n) => {
        let i = t[n];
        let a = i.info.lastIndexOf(e.leftDelimiter);
        let o = r.getAttrs(i.info, a, e);
        r.addAttrs(o, i);
        i.info = r.removeDelimiter(i.info, e);
      }
    }, {
      name: "inline nesting 0",
      tests: [{
        shift: 0,
        type: "inline",
        children: [{
          shift: -1,
          type: e => e === "image" || e === "code_inline"
        }, {
          shift: 0,
          type: "text",
          content: r.hasDelimiters("start", e)
        }]
      }],
      transform: (t, n, i) => {
        let a = t[n].children[i];
        let o = a.content.indexOf(e.rightDelimiter);
        let s = t[n].children[i - 1];
        let l = r.getAttrs(a.content, 0, e);
        r.addAttrs(l, s);
        if (a.content.length === o + e.rightDelimiter.length) {
          t[n].children.splice(i, 1);
        } else {
          a.content = a.content.slice(o + e.rightDelimiter.length);
        }
      }
    }, {
      name: "tables",
      tests: [{
        shift: 0,
        type: "table_close"
      }, {
        shift: 1,
        type: "paragraph_open"
      }, {
        shift: 2,
        type: "inline",
        content: r.hasDelimiters("only", e)
      }],
      transform: (t, n) => {
        let i = t[n + 2];
        let a = r.getMatchingOpeningToken(t, n);
        let o = r.getAttrs(i.content, 0, e);
        r.addAttrs(o, a);
        t.splice(n + 1, 3);
      }
    }, {
      name: "inline attributes",
      tests: [{
        shift: 0,
        type: "inline",
        children: [{
          shift: -1,
          nesting: -1
        }, {
          shift: 0,
          type: "text",
          content: r.hasDelimiters("start", e)
        }]
      }],
      transform: (t, n, i) => {
        let a = t[n].children[i];
        let o = a.content;
        let s = r.getAttrs(o, 0, e);
        let l = r.getMatchingOpeningToken(t[n].children, i - 1);
        r.addAttrs(s, l);
        a.content = o.slice(o.indexOf(e.rightDelimiter) + e.rightDelimiter.length);
      }
    }, {
      name: "list softbreak",
      tests: [{
        shift: -2,
        type: "list_item_open"
      }, {
        shift: 0,
        type: "inline",
        children: [{
          position: -2,
          type: "softbreak"
        }, {
          position: -1,
          type: "text",
          content: r.hasDelimiters("only", e)
        }]
      }],
      transform: (t, n, i) => {
        let a = t[n].children[i].content;
        let o = r.getAttrs(a, 0, e);
        let s = n - 2;
        while (t[s - 1] && t[s - 1].type !== "ordered_list_open" && t[s - 1].type !== "bullet_list_open") {
          s--;
        }
        r.addAttrs(o, t[s - 1]);
        t[n].children = t[n].children.slice(0, -2);
      }
    }, {
      name: "list double softbreak",
      tests: [{
        shift: 0,
        type: e => e === "bullet_list_close" || e === "ordered_list_close"
      }, {
        shift: 1,
        type: "paragraph_open"
      }, {
        shift: 2,
        type: "inline",
        content: r.hasDelimiters("only", e),
        children: e => e.length === 1
      }, {
        shift: 3,
        type: "paragraph_close"
      }],
      transform: (t, n) => {
        let i = t[n + 2].content;
        let a = r.getAttrs(i, 0, e);
        let o = r.getMatchingOpeningToken(t, n);
        r.addAttrs(a, o);
        t.splice(n + 1, 3);
      }
    }, {
      name: "list item end",
      tests: [{
        shift: -2,
        type: "list_item_open"
      }, {
        shift: 0,
        type: "inline",
        children: [{
          position: -1,
          type: "text",
          content: r.hasDelimiters("end", e)
        }]
      }],
      transform: (t, n, a) => {
        let o = t[n].children[a];
        let s = o.content;
        let l = r.getAttrs(s, s.lastIndexOf(e.leftDelimiter), e);
        r.addAttrs(l, t[n - 2]);
        let c = s.slice(0, s.lastIndexOf(e.leftDelimiter));
        o.content = i(c) !== " " ? c : c.slice(0, -1);
      }
    }, {
      name: "\n{.a} softbreak then curly in start",
      tests: [{
        shift: 0,
        type: "inline",
        children: [{
          position: -2,
          type: "softbreak"
        }, {
          position: -1,
          type: "text",
          content: r.hasDelimiters("only", e)
        }]
      }],
      transform: (t, n, i) => {
        let a = t[n].children[i];
        let o = r.getAttrs(a.content, 0, e);
        let s = n + 1;
        while (t[s + 1] && t[s + 1].nesting === -1) {
          s++;
        }
        let l = r.getMatchingOpeningToken(t, s);
        r.addAttrs(o, l);
        t[n].children = t[n].children.slice(0, -2);
      }
    }, {
      name: "horizontal rule",
      tests: [{
        shift: 0,
        type: "paragraph_open"
      }, {
        shift: 1,
        type: "inline",
        children: e => e.length === 1,
        content: e => e.match(t) !== null
      }, {
        shift: 2,
        type: "paragraph_close"
      }],
      transform: (t, n) => {
        let i = t[n];
        i.type = "hr";
        i.tag = "hr";
        i.nesting = 0;
        let a = t[n + 1].content;
        let o = a.lastIndexOf(e.leftDelimiter);
        i.attrs = r.getAttrs(a, o, e);
        i.markup = a;
        t.splice(n + 1, 2);
      }
    }, {
      name: "end of block",
      tests: [{
        shift: 0,
        type: "inline",
        children: [{
          position: -1,
          content: r.hasDelimiters("end", e),
          type: e => e !== "code_inline"
        }]
      }],
      transform: (t, n, a) => {
        let o = t[n].children[a];
        let s = o.content;
        let l = r.getAttrs(s, s.lastIndexOf(e.leftDelimiter), e);
        let c = n + 1;
        while (t[c + 1] && t[c + 1].nesting === -1) {
          c++;
        }
        let u = r.getMatchingOpeningToken(t, c);
        r.addAttrs(l, u);
        let p = s.slice(0, s.lastIndexOf(e.leftDelimiter));
        o.content = i(p) !== " " ? p : p.slice(0, -1);
      }
    }];
  };
}, function (e, t, n) {
  "use strict";

  function r(e) {
    return e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
  }
  t.getAttrs = function (e, t, n) {
    const r = /[^\t\n\f />"'=]/;
    const i = [];
    let a = "";
    let o = "";
    let s = true;
    let l = false;
    for (let c = t + n.leftDelimiter.length; c < e.length; c++) {
      if (e.slice(c, c + n.rightDelimiter.length) === n.rightDelimiter) {
        if (a !== "") {
          i.push([a, o]);
        }
        break;
      }
      let t = e.charAt(c);
      if (t === "=" && s) {
        s = false;
      } else if (t !== "." || a !== "") {
        if (t !== "#" || a !== "") {
          if (t !== "\"" || o !== "") {
            if (t === "\"" && l) {
              l = false;
            } else if (t !== " " || l) {
              if (!s || t.search(r) !== -1) {
                if (s) {
                  a += t;
                } else {
                  o += t;
                }
              }
            } else {
              if (a === "") {
                continue;
              }
              i.push([a, o]);
              a = "";
              o = "";
              s = true;
            }
          } else {
            l = true;
          }
        } else {
          a = "id";
          s = false;
        }
      } else {
        if (e.charAt(c + 1) === ".") {
          a = "css-module";
          c += 1;
        } else {
          a = "class";
        }
        s = false;
      }
    }
    if (n.allowedAttributes && n.allowedAttributes.length) {
      let e = n.allowedAttributes;
      return i.filter(function (t) {
        let n = t[0];
        return e.some(function (e) {
          return n === e || e instanceof RegExp && e.test(n);
        });
      });
    }
    return i;
  };
  t.addAttrs = function (e, t) {
    for (let n = 0, r = e.length; n < r; ++n) {
      let r = e[n][0];
      if (r === "class") {
        t.attrJoin("class", e[n][1]);
      } else if (r === "css-module") {
        t.attrJoin("css-module", e[n][1]);
      } else {
        t.attrPush(e[n]);
      }
    }
    return t;
  };
  t.hasDelimiters = function (e, t) {
    if (!e) {
      throw new Error("Parameter `where` not passed. Should be \"start\", \"middle\", \"end\" or \"only\".");
    }
    return function (n) {
      let r;
      let i;
      let a;
      let o;
      let s = t.leftDelimiter.length + 1 + t.rightDelimiter.length;
      if (!n || typeof n != "string" || n.length < s) {
        return false;
      }
      let l = s - t.rightDelimiter.length;
      switch (e) {
        case "start":
          a = n.slice(0, t.leftDelimiter.length);
          r = a === t.leftDelimiter ? 0 : -1;
          i = r === -1 ? -1 : n.indexOf(t.rightDelimiter, l);
          o = n.charAt(i + t.rightDelimiter.length);
          if (o && t.rightDelimiter.indexOf(o) !== -1) {
            i = -1;
          }
          break;
        case "end":
          r = n.lastIndexOf(t.leftDelimiter);
          i = r === -1 ? -1 : n.indexOf(t.rightDelimiter, r + l);
          i = i === n.length - t.rightDelimiter.length ? i : -1;
          break;
        case "only":
          a = n.slice(0, t.leftDelimiter.length);
          r = a === t.leftDelimiter ? 0 : -1;
          a = n.slice(n.length - t.rightDelimiter.length);
          i = a === t.rightDelimiter ? n.length - t.rightDelimiter.length : -1;
      }
      return r !== -1 && i !== -1 && function (e) {
        let n = e.charAt(t.leftDelimiter.length) === ".";
        let r = e.charAt(t.leftDelimiter.length) === "#";
        if (n || r) {
          return e.length >= s + 1;
        } else {
          return e.length >= s;
        }
      }(n.substring(r, i + t.rightDelimiter.length));
    };
  };
  t.removeDelimiter = function (e, t) {
    const n = r(t.leftDelimiter);
    const i = r(t.rightDelimiter);
    let a = new RegExp("[ \\n]?" + n + "[^" + n + i + "]+" + i + "$");
    let o = e.search(a);
    if (o !== -1) {
      return e.slice(0, o);
    } else {
      return e;
    }
  };
  t.escapeRegExp = r;
  t.getMatchingOpeningToken = function (e, t) {
    if (e[t].type === "softbreak") {
      return false;
    }
    if (e[t].nesting === 0) {
      return e[t];
    }
    let n = e[t].level;
    let r = e[t].type.replace("_close", "_open");
    for (; t >= 0; --t) {
      if (e[t].type === r && e[t].level === n) {
        return e[t];
      }
    }
  };
  let i = /[&<>"]/;
  let a = /[&<>"]/g;
  let o = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;"
  };
  function s(e) {
    return o[e];
  }
  t.escapeHtml = function (e) {
    if (i.test(e)) {
      return e.replace(a, s);
    } else {
      return e;
    }
  };
}, function (e, t, n) {
  "use strict";

  var r = n(0);
  var i = n(28);
  var a = n(32);
  var o = n(33);
  var s = n(41);
  var l = n(55);
  var c = n(68);
  var u = n(8);
  var p = n(70);
  var d = {
    default: n(73),
    zero: n(74),
    commonmark: n(75)
  };
  var h = /^(vbscript|javascript|file|data):/;
  var g = /^data:image\/(gif|png|jpeg|webp);/;
  function f(e) {
    var t = e.trim().toLowerCase();
    return !h.test(t) || !!g.test(t);
  }
  var m = ["http:", "https:", "mailto:"];
  function b(e) {
    var t = u.parse(e, true);
    if (t.hostname && (!t.protocol || m.indexOf(t.protocol) >= 0)) {
      try {
        t.hostname = p.toASCII(t.hostname);
      } catch (e) {}
    }
    return u.encode(u.format(t));
  }
  function x(e) {
    var t = u.parse(e, true);
    if (t.hostname && (!t.protocol || m.indexOf(t.protocol) >= 0)) {
      try {
        t.hostname = p.toUnicode(t.hostname);
      } catch (e) {}
    }
    return u.decode(u.format(t), u.decode.defaultChars + "%");
  }
  function y(e, t) {
    if (!(this instanceof y)) {
      return new y(e, t);
    }
    if (!t && !r.isString(e)) {
      t = e || {};
      e = "default";
    }
    this.inline = new l();
    this.block = new s();
    this.core = new o();
    this.renderer = new a();
    this.linkify = new c();
    this.validateLink = f;
    this.normalizeLink = b;
    this.normalizeLinkText = x;
    this.utils = r;
    this.helpers = r.assign({}, i);
    this.options = {};
    this.configure(e);
    if (t) {
      this.set(t);
    }
  }
  y.prototype.set = function (e) {
    r.assign(this.options, e);
    return this;
  };
  y.prototype.configure = function (e) {
    var t;
    var n = this;
    if (r.isString(e) && !(e = d[t = e])) {
      throw new Error("Wrong `markdown-it` preset \"" + t + "\", check name");
    }
    if (!e) {
      throw new Error("Wrong `markdown-it` preset, can't be empty");
    }
    if (e.options) {
      n.set(e.options);
    }
    if (e.components) {
      Object.keys(e.components).forEach(function (t) {
        if (e.components[t].rules) {
          n[t].ruler.enableOnly(e.components[t].rules);
        }
        if (e.components[t].rules2) {
          n[t].ruler2.enableOnly(e.components[t].rules2);
        }
      });
    }
    return this;
  };
  y.prototype.enable = function (e, t) {
    var n = [];
    if (!Array.isArray(e)) {
      e = [e];
    }
    ["core", "block", "inline"].forEach(function (t) {
      n = n.concat(this[t].ruler.enable(e, true));
    }, this);
    n = n.concat(this.inline.ruler2.enable(e, true));
    var r = e.filter(function (e) {
      return n.indexOf(e) < 0;
    });
    if (r.length && !t) {
      throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + r);
    }
    return this;
  };
  y.prototype.disable = function (e, t) {
    var n = [];
    if (!Array.isArray(e)) {
      e = [e];
    }
    ["core", "block", "inline"].forEach(function (t) {
      n = n.concat(this[t].ruler.disable(e, true));
    }, this);
    n = n.concat(this.inline.ruler2.disable(e, true));
    var r = e.filter(function (e) {
      return n.indexOf(e) < 0;
    });
    if (r.length && !t) {
      throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + r);
    }
    return this;
  };
  y.prototype.use = function (e) {
    var t = [this].concat(Array.prototype.slice.call(arguments, 1));
    e.apply(e, t);
    return this;
  };
  y.prototype.parse = function (e, t) {
    if (typeof e != "string") {
      throw new Error("Input data should be a String");
    }
    var n = new this.core.State(e, this, t);
    this.core.process(n);
    return n.tokens;
  };
  y.prototype.render = function (e, t) {
    t = t || {};
    return this.renderer.render(this.parse(e, t), this.options, t);
  };
  y.prototype.parseInline = function (e, t) {
    var n = new this.core.State(e, this, t);
    n.inlineMode = true;
    this.core.process(n);
    return n.tokens;
  };
  y.prototype.renderInline = function (e, t) {
    t = t || {};
    return this.renderer.render(this.parseInline(e, t), this.options, t);
  };
  e.exports = y;
}, function (e) {
  e.exports = {
    Aacute: "Á",
    aacute: "á",
    Abreve: "Ă",
    abreve: "ă",
    ac: "∾",
    acd: "∿",
    acE: "∾̳",
    Acirc: "Â",
    acirc: "â",
    acute: "´",
    Acy: "А",
    acy: "а",
    AElig: "Æ",
    aelig: "æ",
    af: "⁡",
    Afr: "𝔄",
    afr: "𝔞",
    Agrave: "À",
    agrave: "à",
    alefsym: "ℵ",
    aleph: "ℵ",
    Alpha: "Α",
    alpha: "α",
    Amacr: "Ā",
    amacr: "ā",
    amalg: "⨿",
    amp: "&",
    AMP: "&",
    andand: "⩕",
    And: "⩓",
    and: "∧",
    andd: "⩜",
    andslope: "⩘",
    andv: "⩚",
    ang: "∠",
    ange: "⦤",
    angle: "∠",
    angmsdaa: "⦨",
    angmsdab: "⦩",
    angmsdac: "⦪",
    angmsdad: "⦫",
    angmsdae: "⦬",
    angmsdaf: "⦭",
    angmsdag: "⦮",
    angmsdah: "⦯",
    angmsd: "∡",
    angrt: "∟",
    angrtvb: "⊾",
    angrtvbd: "⦝",
    angsph: "∢",
    angst: "Å",
    angzarr: "⍼",
    Aogon: "Ą",
    aogon: "ą",
    Aopf: "𝔸",
    aopf: "𝕒",
    apacir: "⩯",
    ap: "≈",
    apE: "⩰",
    ape: "≊",
    apid: "≋",
    apos: "'",
    ApplyFunction: "⁡",
    approx: "≈",
    approxeq: "≊",
    Aring: "Å",
    aring: "å",
    Ascr: "𝒜",
    ascr: "𝒶",
    Assign: "≔",
    ast: "*",
    asymp: "≈",
    asympeq: "≍",
    Atilde: "Ã",
    atilde: "ã",
    Auml: "Ä",
    auml: "ä",
    awconint: "∳",
    awint: "⨑",
    backcong: "≌",
    backepsilon: "϶",
    backprime: "‵",
    backsim: "∽",
    backsimeq: "⋍",
    Backslash: "∖",
    Barv: "⫧",
    barvee: "⊽",
    barwed: "⌅",
    Barwed: "⌆",
    barwedge: "⌅",
    bbrk: "⎵",
    bbrktbrk: "⎶",
    bcong: "≌",
    Bcy: "Б",
    bcy: "б",
    bdquo: "„",
    becaus: "∵",
    because: "∵",
    Because: "∵",
    bemptyv: "⦰",
    bepsi: "϶",
    bernou: "ℬ",
    Bernoullis: "ℬ",
    Beta: "Β",
    beta: "β",
    beth: "ℶ",
    between: "≬",
    Bfr: "𝔅",
    bfr: "𝔟",
    bigcap: "⋂",
    bigcirc: "◯",
    bigcup: "⋃",
    bigodot: "⨀",
    bigoplus: "⨁",
    bigotimes: "⨂",
    bigsqcup: "⨆",
    bigstar: "★",
    bigtriangledown: "▽",
    bigtriangleup: "△",
    biguplus: "⨄",
    bigvee: "⋁",
    bigwedge: "⋀",
    bkarow: "⤍",
    blacklozenge: "⧫",
    blacksquare: "▪",
    blacktriangle: "▴",
    blacktriangledown: "▾",
    blacktriangleleft: "◂",
    blacktriangleright: "▸",
    blank: "␣",
    blk12: "▒",
    blk14: "░",
    blk34: "▓",
    block: "█",
    bne: "=⃥",
    bnequiv: "≡⃥",
    bNot: "⫭",
    bnot: "⌐",
    Bopf: "𝔹",
    bopf: "𝕓",
    bot: "⊥",
    bottom: "⊥",
    bowtie: "⋈",
    boxbox: "⧉",
    boxdl: "┐",
    boxdL: "╕",
    boxDl: "╖",
    boxDL: "╗",
    boxdr: "┌",
    boxdR: "╒",
    boxDr: "╓",
    boxDR: "╔",
    boxh: "─",
    boxH: "═",
    boxhd: "┬",
    boxHd: "╤",
    boxhD: "╥",
    boxHD: "╦",
    boxhu: "┴",
    boxHu: "╧",
    boxhU: "╨",
    boxHU: "╩",
    boxminus: "⊟",
    boxplus: "⊞",
    boxtimes: "⊠",
    boxul: "┘",
    boxuL: "╛",
    boxUl: "╜",
    boxUL: "╝",
    boxur: "└",
    boxuR: "╘",
    boxUr: "╙",
    boxUR: "╚",
    boxv: "│",
    boxV: "║",
    boxvh: "┼",
    boxvH: "╪",
    boxVh: "╫",
    boxVH: "╬",
    boxvl: "┤",
    boxvL: "╡",
    boxVl: "╢",
    boxVL: "╣",
    boxvr: "├",
    boxvR: "╞",
    boxVr: "╟",
    boxVR: "╠",
    bprime: "‵",
    breve: "˘",
    Breve: "˘",
    brvbar: "¦",
    bscr: "𝒷",
    Bscr: "ℬ",
    bsemi: "⁏",
    bsim: "∽",
    bsime: "⋍",
    bsolb: "⧅",
    bsol: "\\",
    bsolhsub: "⟈",
    bull: "•",
    bullet: "•",
    bump: "≎",
    bumpE: "⪮",
    bumpe: "≏",
    Bumpeq: "≎",
    bumpeq: "≏",
    Cacute: "Ć",
    cacute: "ć",
    capand: "⩄",
    capbrcup: "⩉",
    capcap: "⩋",
    cap: "∩",
    Cap: "⋒",
    capcup: "⩇",
    capdot: "⩀",
    CapitalDifferentialD: "ⅅ",
    caps: "∩︀",
    caret: "⁁",
    caron: "ˇ",
    Cayleys: "ℭ",
    ccaps: "⩍",
    Ccaron: "Č",
    ccaron: "č",
    Ccedil: "Ç",
    ccedil: "ç",
    Ccirc: "Ĉ",
    ccirc: "ĉ",
    Cconint: "∰",
    ccups: "⩌",
    ccupssm: "⩐",
    Cdot: "Ċ",
    cdot: "ċ",
    cedil: "¸",
    Cedilla: "¸",
    cemptyv: "⦲",
    cent: "¢",
    centerdot: "·",
    CenterDot: "·",
    cfr: "𝔠",
    Cfr: "ℭ",
    CHcy: "Ч",
    chcy: "ч",
    check: "✓",
    checkmark: "✓",
    Chi: "Χ",
    chi: "χ",
    circ: "ˆ",
    circeq: "≗",
    circlearrowleft: "↺",
    circlearrowright: "↻",
    circledast: "⊛",
    circledcirc: "⊚",
    circleddash: "⊝",
    CircleDot: "⊙",
    circledR: "®",
    circledS: "Ⓢ",
    CircleMinus: "⊖",
    CirclePlus: "⊕",
    CircleTimes: "⊗",
    cir: "○",
    cirE: "⧃",
    cire: "≗",
    cirfnint: "⨐",
    cirmid: "⫯",
    cirscir: "⧂",
    ClockwiseContourIntegral: "∲",
    CloseCurlyDoubleQuote: "”",
    CloseCurlyQuote: "’",
    clubs: "♣",
    clubsuit: "♣",
    colon: ":",
    Colon: "∷",
    Colone: "⩴",
    colone: "≔",
    coloneq: "≔",
    comma: ",",
    commat: "@",
    comp: "∁",
    compfn: "∘",
    complement: "∁",
    complexes: "ℂ",
    cong: "≅",
    congdot: "⩭",
    Congruent: "≡",
    conint: "∮",
    Conint: "∯",
    ContourIntegral: "∮",
    copf: "𝕔",
    Copf: "ℂ",
    coprod: "∐",
    Coproduct: "∐",
    copy: "©",
    COPY: "©",
    copysr: "℗",
    CounterClockwiseContourIntegral: "∳",
    crarr: "↵",
    cross: "✗",
    Cross: "⨯",
    Cscr: "𝒞",
    cscr: "𝒸",
    csub: "⫏",
    csube: "⫑",
    csup: "⫐",
    csupe: "⫒",
    ctdot: "⋯",
    cudarrl: "⤸",
    cudarrr: "⤵",
    cuepr: "⋞",
    cuesc: "⋟",
    cularr: "↶",
    cularrp: "⤽",
    cupbrcap: "⩈",
    cupcap: "⩆",
    CupCap: "≍",
    cup: "∪",
    Cup: "⋓",
    cupcup: "⩊",
    cupdot: "⊍",
    cupor: "⩅",
    cups: "∪︀",
    curarr: "↷",
    curarrm: "⤼",
    curlyeqprec: "⋞",
    curlyeqsucc: "⋟",
    curlyvee: "⋎",
    curlywedge: "⋏",
    curren: "¤",
    curvearrowleft: "↶",
    curvearrowright: "↷",
    cuvee: "⋎",
    cuwed: "⋏",
    cwconint: "∲",
    cwint: "∱",
    cylcty: "⌭",
    dagger: "†",
    Dagger: "‡",
    daleth: "ℸ",
    darr: "↓",
    Darr: "↡",
    dArr: "⇓",
    dash: "‐",
    Dashv: "⫤",
    dashv: "⊣",
    dbkarow: "⤏",
    dblac: "˝",
    Dcaron: "Ď",
    dcaron: "ď",
    Dcy: "Д",
    dcy: "д",
    ddagger: "‡",
    ddarr: "⇊",
    DD: "ⅅ",
    dd: "ⅆ",
    DDotrahd: "⤑",
    ddotseq: "⩷",
    deg: "°",
    Del: "∇",
    Delta: "Δ",
    delta: "δ",
    demptyv: "⦱",
    dfisht: "⥿",
    Dfr: "𝔇",
    dfr: "𝔡",
    dHar: "⥥",
    dharl: "⇃",
    dharr: "⇂",
    DiacriticalAcute: "´",
    DiacriticalDot: "˙",
    DiacriticalDoubleAcute: "˝",
    DiacriticalGrave: "`",
    DiacriticalTilde: "˜",
    diam: "⋄",
    diamond: "⋄",
    Diamond: "⋄",
    diamondsuit: "♦",
    diams: "♦",
    die: "¨",
    DifferentialD: "ⅆ",
    digamma: "ϝ",
    disin: "⋲",
    div: "÷",
    divide: "÷",
    divideontimes: "⋇",
    divonx: "⋇",
    DJcy: "Ђ",
    djcy: "ђ",
    dlcorn: "⌞",
    dlcrop: "⌍",
    dollar: "$",
    Dopf: "𝔻",
    dopf: "𝕕",
    Dot: "¨",
    dot: "˙",
    DotDot: "⃜",
    doteq: "≐",
    doteqdot: "≑",
    DotEqual: "≐",
    dotminus: "∸",
    dotplus: "∔",
    dotsquare: "⊡",
    doublebarwedge: "⌆",
    DoubleContourIntegral: "∯",
    DoubleDot: "¨",
    DoubleDownArrow: "⇓",
    DoubleLeftArrow: "⇐",
    DoubleLeftRightArrow: "⇔",
    DoubleLeftTee: "⫤",
    DoubleLongLeftArrow: "⟸",
    DoubleLongLeftRightArrow: "⟺",
    DoubleLongRightArrow: "⟹",
    DoubleRightArrow: "⇒",
    DoubleRightTee: "⊨",
    DoubleUpArrow: "⇑",
    DoubleUpDownArrow: "⇕",
    DoubleVerticalBar: "∥",
    DownArrowBar: "⤓",
    downarrow: "↓",
    DownArrow: "↓",
    Downarrow: "⇓",
    DownArrowUpArrow: "⇵",
    DownBreve: "̑",
    downdownarrows: "⇊",
    downharpoonleft: "⇃",
    downharpoonright: "⇂",
    DownLeftRightVector: "⥐",
    DownLeftTeeVector: "⥞",
    DownLeftVectorBar: "⥖",
    DownLeftVector: "↽",
    DownRightTeeVector: "⥟",
    DownRightVectorBar: "⥗",
    DownRightVector: "⇁",
    DownTeeArrow: "↧",
    DownTee: "⊤",
    drbkarow: "⤐",
    drcorn: "⌟",
    drcrop: "⌌",
    Dscr: "𝒟",
    dscr: "𝒹",
    DScy: "Ѕ",
    dscy: "ѕ",
    dsol: "⧶",
    Dstrok: "Đ",
    dstrok: "đ",
    dtdot: "⋱",
    dtri: "▿",
    dtrif: "▾",
    duarr: "⇵",
    duhar: "⥯",
    dwangle: "⦦",
    DZcy: "Џ",
    dzcy: "џ",
    dzigrarr: "⟿",
    Eacute: "É",
    eacute: "é",
    easter: "⩮",
    Ecaron: "Ě",
    ecaron: "ě",
    Ecirc: "Ê",
    ecirc: "ê",
    ecir: "≖",
    ecolon: "≕",
    Ecy: "Э",
    ecy: "э",
    eDDot: "⩷",
    Edot: "Ė",
    edot: "ė",
    eDot: "≑",
    ee: "ⅇ",
    efDot: "≒",
    Efr: "𝔈",
    efr: "𝔢",
    eg: "⪚",
    Egrave: "È",
    egrave: "è",
    egs: "⪖",
    egsdot: "⪘",
    el: "⪙",
    Element: "∈",
    elinters: "⏧",
    ell: "ℓ",
    els: "⪕",
    elsdot: "⪗",
    Emacr: "Ē",
    emacr: "ē",
    empty: "∅",
    emptyset: "∅",
    EmptySmallSquare: "◻",
    emptyv: "∅",
    EmptyVerySmallSquare: "▫",
    emsp13: "\u2004",
    emsp14: "\u2005",
    emsp: "\u2003",
    ENG: "Ŋ",
    eng: "ŋ",
    ensp: "\u2002",
    Eogon: "Ę",
    eogon: "ę",
    Eopf: "𝔼",
    eopf: "𝕖",
    epar: "⋕",
    eparsl: "⧣",
    eplus: "⩱",
    epsi: "ε",
    Epsilon: "Ε",
    epsilon: "ε",
    epsiv: "ϵ",
    eqcirc: "≖",
    eqcolon: "≕",
    eqsim: "≂",
    eqslantgtr: "⪖",
    eqslantless: "⪕",
    Equal: "⩵",
    equals: "=",
    EqualTilde: "≂",
    equest: "≟",
    Equilibrium: "⇌",
    equiv: "≡",
    equivDD: "⩸",
    eqvparsl: "⧥",
    erarr: "⥱",
    erDot: "≓",
    escr: "ℯ",
    Escr: "ℰ",
    esdot: "≐",
    Esim: "⩳",
    esim: "≂",
    Eta: "Η",
    eta: "η",
    ETH: "Ð",
    eth: "ð",
    Euml: "Ë",
    euml: "ë",
    euro: "€",
    excl: "!",
    exist: "∃",
    Exists: "∃",
    expectation: "ℰ",
    exponentiale: "ⅇ",
    ExponentialE: "ⅇ",
    fallingdotseq: "≒",
    Fcy: "Ф",
    fcy: "ф",
    female: "♀",
    ffilig: "ﬃ",
    fflig: "ﬀ",
    ffllig: "ﬄ",
    Ffr: "𝔉",
    ffr: "𝔣",
    filig: "ﬁ",
    FilledSmallSquare: "◼",
    FilledVerySmallSquare: "▪",
    fjlig: "fj",
    flat: "♭",
    fllig: "ﬂ",
    fltns: "▱",
    fnof: "ƒ",
    Fopf: "𝔽",
    fopf: "𝕗",
    forall: "∀",
    ForAll: "∀",
    fork: "⋔",
    forkv: "⫙",
    Fouriertrf: "ℱ",
    fpartint: "⨍",
    frac12: "½",
    frac13: "⅓",
    frac14: "¼",
    frac15: "⅕",
    frac16: "⅙",
    frac18: "⅛",
    frac23: "⅔",
    frac25: "⅖",
    frac34: "¾",
    frac35: "⅗",
    frac38: "⅜",
    frac45: "⅘",
    frac56: "⅚",
    frac58: "⅝",
    frac78: "⅞",
    frasl: "⁄",
    frown: "⌢",
    fscr: "𝒻",
    Fscr: "ℱ",
    gacute: "ǵ",
    Gamma: "Γ",
    gamma: "γ",
    Gammad: "Ϝ",
    gammad: "ϝ",
    gap: "⪆",
    Gbreve: "Ğ",
    gbreve: "ğ",
    Gcedil: "Ģ",
    Gcirc: "Ĝ",
    gcirc: "ĝ",
    Gcy: "Г",
    gcy: "г",
    Gdot: "Ġ",
    gdot: "ġ",
    ge: "≥",
    gE: "≧",
    gEl: "⪌",
    gel: "⋛",
    geq: "≥",
    geqq: "≧",
    geqslant: "⩾",
    gescc: "⪩",
    ges: "⩾",
    gesdot: "⪀",
    gesdoto: "⪂",
    gesdotol: "⪄",
    gesl: "⋛︀",
    gesles: "⪔",
    Gfr: "𝔊",
    gfr: "𝔤",
    gg: "≫",
    Gg: "⋙",
    ggg: "⋙",
    gimel: "ℷ",
    GJcy: "Ѓ",
    gjcy: "ѓ",
    gla: "⪥",
    gl: "≷",
    glE: "⪒",
    glj: "⪤",
    gnap: "⪊",
    gnapprox: "⪊",
    gne: "⪈",
    gnE: "≩",
    gneq: "⪈",
    gneqq: "≩",
    gnsim: "⋧",
    Gopf: "𝔾",
    gopf: "𝕘",
    grave: "`",
    GreaterEqual: "≥",
    GreaterEqualLess: "⋛",
    GreaterFullEqual: "≧",
    GreaterGreater: "⪢",
    GreaterLess: "≷",
    GreaterSlantEqual: "⩾",
    GreaterTilde: "≳",
    Gscr: "𝒢",
    gscr: "ℊ",
    gsim: "≳",
    gsime: "⪎",
    gsiml: "⪐",
    gtcc: "⪧",
    gtcir: "⩺",
    gt: ">",
    GT: ">",
    Gt: "≫",
    gtdot: "⋗",
    gtlPar: "⦕",
    gtquest: "⩼",
    gtrapprox: "⪆",
    gtrarr: "⥸",
    gtrdot: "⋗",
    gtreqless: "⋛",
    gtreqqless: "⪌",
    gtrless: "≷",
    gtrsim: "≳",
    gvertneqq: "≩︀",
    gvnE: "≩︀",
    Hacek: "ˇ",
    hairsp: "\u200A",
    half: "½",
    hamilt: "ℋ",
    HARDcy: "Ъ",
    hardcy: "ъ",
    harrcir: "⥈",
    harr: "↔",
    hArr: "⇔",
    harrw: "↭",
    Hat: "^",
    hbar: "ℏ",
    Hcirc: "Ĥ",
    hcirc: "ĥ",
    hearts: "♥",
    heartsuit: "♥",
    hellip: "…",
    hercon: "⊹",
    hfr: "𝔥",
    Hfr: "ℌ",
    HilbertSpace: "ℋ",
    hksearow: "⤥",
    hkswarow: "⤦",
    hoarr: "⇿",
    homtht: "∻",
    hookleftarrow: "↩",
    hookrightarrow: "↪",
    hopf: "𝕙",
    Hopf: "ℍ",
    horbar: "―",
    HorizontalLine: "─",
    hscr: "𝒽",
    Hscr: "ℋ",
    hslash: "ℏ",
    Hstrok: "Ħ",
    hstrok: "ħ",
    HumpDownHump: "≎",
    HumpEqual: "≏",
    hybull: "⁃",
    hyphen: "‐",
    Iacute: "Í",
    iacute: "í",
    ic: "⁣",
    Icirc: "Î",
    icirc: "î",
    Icy: "И",
    icy: "и",
    Idot: "İ",
    IEcy: "Е",
    iecy: "е",
    iexcl: "¡",
    iff: "⇔",
    ifr: "𝔦",
    Ifr: "ℑ",
    Igrave: "Ì",
    igrave: "ì",
    ii: "ⅈ",
    iiiint: "⨌",
    iiint: "∭",
    iinfin: "⧜",
    iiota: "℩",
    IJlig: "Ĳ",
    ijlig: "ĳ",
    Imacr: "Ī",
    imacr: "ī",
    image: "ℑ",
    ImaginaryI: "ⅈ",
    imagline: "ℐ",
    imagpart: "ℑ",
    imath: "ı",
    Im: "ℑ",
    imof: "⊷",
    imped: "Ƶ",
    Implies: "⇒",
    incare: "℅",
    in: "∈",
    infin: "∞",
    infintie: "⧝",
    inodot: "ı",
    intcal: "⊺",
    int: "∫",
    Int: "∬",
    integers: "ℤ",
    Integral: "∫",
    intercal: "⊺",
    Intersection: "⋂",
    intlarhk: "⨗",
    intprod: "⨼",
    InvisibleComma: "⁣",
    InvisibleTimes: "⁢",
    IOcy: "Ё",
    iocy: "ё",
    Iogon: "Į",
    iogon: "į",
    Iopf: "𝕀",
    iopf: "𝕚",
    Iota: "Ι",
    iota: "ι",
    iprod: "⨼",
    iquest: "¿",
    iscr: "𝒾",
    Iscr: "ℐ",
    isin: "∈",
    isindot: "⋵",
    isinE: "⋹",
    isins: "⋴",
    isinsv: "⋳",
    isinv: "∈",
    it: "⁢",
    Itilde: "Ĩ",
    itilde: "ĩ",
    Iukcy: "І",
    iukcy: "і",
    Iuml: "Ï",
    iuml: "ï",
    Jcirc: "Ĵ",
    jcirc: "ĵ",
    Jcy: "Й",
    jcy: "й",
    Jfr: "𝔍",
    jfr: "𝔧",
    jmath: "ȷ",
    Jopf: "𝕁",
    jopf: "𝕛",
    Jscr: "𝒥",
    jscr: "𝒿",
    Jsercy: "Ј",
    jsercy: "ј",
    Jukcy: "Є",
    jukcy: "є",
    Kappa: "Κ",
    kappa: "κ",
    kappav: "ϰ",
    Kcedil: "Ķ",
    kcedil: "ķ",
    Kcy: "К",
    kcy: "к",
    Kfr: "𝔎",
    kfr: "𝔨",
    kgreen: "ĸ",
    KHcy: "Х",
    khcy: "х",
    KJcy: "Ќ",
    kjcy: "ќ",
    Kopf: "𝕂",
    kopf: "𝕜",
    Kscr: "𝒦",
    kscr: "𝓀",
    lAarr: "⇚",
    Lacute: "Ĺ",
    lacute: "ĺ",
    laemptyv: "⦴",
    lagran: "ℒ",
    Lambda: "Λ",
    lambda: "λ",
    lang: "⟨",
    Lang: "⟪",
    langd: "⦑",
    langle: "⟨",
    lap: "⪅",
    Laplacetrf: "ℒ",
    laquo: "«",
    larrb: "⇤",
    larrbfs: "⤟",
    larr: "←",
    Larr: "↞",
    lArr: "⇐",
    larrfs: "⤝",
    larrhk: "↩",
    larrlp: "↫",
    larrpl: "⤹",
    larrsim: "⥳",
    larrtl: "↢",
    latail: "⤙",
    lAtail: "⤛",
    lat: "⪫",
    late: "⪭",
    lates: "⪭︀",
    lbarr: "⤌",
    lBarr: "⤎",
    lbbrk: "❲",
    lbrace: "{",
    lbrack: "[",
    lbrke: "⦋",
    lbrksld: "⦏",
    lbrkslu: "⦍",
    Lcaron: "Ľ",
    lcaron: "ľ",
    Lcedil: "Ļ",
    lcedil: "ļ",
    lceil: "⌈",
    lcub: "{",
    Lcy: "Л",
    lcy: "л",
    ldca: "⤶",
    ldquo: "“",
    ldquor: "„",
    ldrdhar: "⥧",
    ldrushar: "⥋",
    ldsh: "↲",
    le: "≤",
    lE: "≦",
    LeftAngleBracket: "⟨",
    LeftArrowBar: "⇤",
    leftarrow: "←",
    LeftArrow: "←",
    Leftarrow: "⇐",
    LeftArrowRightArrow: "⇆",
    leftarrowtail: "↢",
    LeftCeiling: "⌈",
    LeftDoubleBracket: "⟦",
    LeftDownTeeVector: "⥡",
    LeftDownVectorBar: "⥙",
    LeftDownVector: "⇃",
    LeftFloor: "⌊",
    leftharpoondown: "↽",
    leftharpoonup: "↼",
    leftleftarrows: "⇇",
    leftrightarrow: "↔",
    LeftRightArrow: "↔",
    Leftrightarrow: "⇔",
    leftrightarrows: "⇆",
    leftrightharpoons: "⇋",
    leftrightsquigarrow: "↭",
    LeftRightVector: "⥎",
    LeftTeeArrow: "↤",
    LeftTee: "⊣",
    LeftTeeVector: "⥚",
    leftthreetimes: "⋋",
    LeftTriangleBar: "⧏",
    LeftTriangle: "⊲",
    LeftTriangleEqual: "⊴",
    LeftUpDownVector: "⥑",
    LeftUpTeeVector: "⥠",
    LeftUpVectorBar: "⥘",
    LeftUpVector: "↿",
    LeftVectorBar: "⥒",
    LeftVector: "↼",
    lEg: "⪋",
    leg: "⋚",
    leq: "≤",
    leqq: "≦",
    leqslant: "⩽",
    lescc: "⪨",
    les: "⩽",
    lesdot: "⩿",
    lesdoto: "⪁",
    lesdotor: "⪃",
    lesg: "⋚︀",
    lesges: "⪓",
    lessapprox: "⪅",
    lessdot: "⋖",
    lesseqgtr: "⋚",
    lesseqqgtr: "⪋",
    LessEqualGreater: "⋚",
    LessFullEqual: "≦",
    LessGreater: "≶",
    lessgtr: "≶",
    LessLess: "⪡",
    lesssim: "≲",
    LessSlantEqual: "⩽",
    LessTilde: "≲",
    lfisht: "⥼",
    lfloor: "⌊",
    Lfr: "𝔏",
    lfr: "𝔩",
    lg: "≶",
    lgE: "⪑",
    lHar: "⥢",
    lhard: "↽",
    lharu: "↼",
    lharul: "⥪",
    lhblk: "▄",
    LJcy: "Љ",
    ljcy: "љ",
    llarr: "⇇",
    ll: "≪",
    Ll: "⋘",
    llcorner: "⌞",
    Lleftarrow: "⇚",
    llhard: "⥫",
    lltri: "◺",
    Lmidot: "Ŀ",
    lmidot: "ŀ",
    lmoustache: "⎰",
    lmoust: "⎰",
    lnap: "⪉",
    lnapprox: "⪉",
    lne: "⪇",
    lnE: "≨",
    lneq: "⪇",
    lneqq: "≨",
    lnsim: "⋦",
    loang: "⟬",
    loarr: "⇽",
    lobrk: "⟦",
    longleftarrow: "⟵",
    LongLeftArrow: "⟵",
    Longleftarrow: "⟸",
    longleftrightarrow: "⟷",
    LongLeftRightArrow: "⟷",
    Longleftrightarrow: "⟺",
    longmapsto: "⟼",
    longrightarrow: "⟶",
    LongRightArrow: "⟶",
    Longrightarrow: "⟹",
    looparrowleft: "↫",
    looparrowright: "↬",
    lopar: "⦅",
    Lopf: "𝕃",
    lopf: "𝕝",
    loplus: "⨭",
    lotimes: "⨴",
    lowast: "∗",
    lowbar: "_",
    LowerLeftArrow: "↙",
    LowerRightArrow: "↘",
    loz: "◊",
    lozenge: "◊",
    lozf: "⧫",
    lpar: "(",
    lparlt: "⦓",
    lrarr: "⇆",
    lrcorner: "⌟",
    lrhar: "⇋",
    lrhard: "⥭",
    lrm: "‎",
    lrtri: "⊿",
    lsaquo: "‹",
    lscr: "𝓁",
    Lscr: "ℒ",
    lsh: "↰",
    Lsh: "↰",
    lsim: "≲",
    lsime: "⪍",
    lsimg: "⪏",
    lsqb: "[",
    lsquo: "‘",
    lsquor: "‚",
    Lstrok: "Ł",
    lstrok: "ł",
    ltcc: "⪦",
    ltcir: "⩹",
    lt: "<",
    LT: "<",
    Lt: "≪",
    ltdot: "⋖",
    lthree: "⋋",
    ltimes: "⋉",
    ltlarr: "⥶",
    ltquest: "⩻",
    ltri: "◃",
    ltrie: "⊴",
    ltrif: "◂",
    ltrPar: "⦖",
    lurdshar: "⥊",
    luruhar: "⥦",
    lvertneqq: "≨︀",
    lvnE: "≨︀",
    macr: "¯",
    male: "♂",
    malt: "✠",
    maltese: "✠",
    Map: "⤅",
    map: "↦",
    mapsto: "↦",
    mapstodown: "↧",
    mapstoleft: "↤",
    mapstoup: "↥",
    marker: "▮",
    mcomma: "⨩",
    Mcy: "М",
    mcy: "м",
    mdash: "—",
    mDDot: "∺",
    measuredangle: "∡",
    MediumSpace: "\u205F",
    Mellintrf: "ℳ",
    Mfr: "𝔐",
    mfr: "𝔪",
    mho: "℧",
    micro: "µ",
    midast: "*",
    midcir: "⫰",
    mid: "∣",
    middot: "·",
    minusb: "⊟",
    minus: "−",
    minusd: "∸",
    minusdu: "⨪",
    MinusPlus: "∓",
    mlcp: "⫛",
    mldr: "…",
    mnplus: "∓",
    models: "⊧",
    Mopf: "𝕄",
    mopf: "𝕞",
    mp: "∓",
    mscr: "𝓂",
    Mscr: "ℳ",
    mstpos: "∾",
    Mu: "Μ",
    mu: "μ",
    multimap: "⊸",
    mumap: "⊸",
    nabla: "∇",
    Nacute: "Ń",
    nacute: "ń",
    nang: "∠⃒",
    nap: "≉",
    napE: "⩰̸",
    napid: "≋̸",
    napos: "ŉ",
    napprox: "≉",
    natural: "♮",
    naturals: "ℕ",
    natur: "♮",
    nbsp: "\xA0",
    nbump: "≎̸",
    nbumpe: "≏̸",
    ncap: "⩃",
    Ncaron: "Ň",
    ncaron: "ň",
    Ncedil: "Ņ",
    ncedil: "ņ",
    ncong: "≇",
    ncongdot: "⩭̸",
    ncup: "⩂",
    Ncy: "Н",
    ncy: "н",
    ndash: "–",
    nearhk: "⤤",
    nearr: "↗",
    neArr: "⇗",
    nearrow: "↗",
    ne: "≠",
    nedot: "≐̸",
    NegativeMediumSpace: "​",
    NegativeThickSpace: "​",
    NegativeThinSpace: "​",
    NegativeVeryThinSpace: "​",
    nequiv: "≢",
    nesear: "⤨",
    nesim: "≂̸",
    NestedGreaterGreater: "≫",
    NestedLessLess: "≪",
    NewLine: "\n",
    nexist: "∄",
    nexists: "∄",
    Nfr: "𝔑",
    nfr: "𝔫",
    ngE: "≧̸",
    nge: "≱",
    ngeq: "≱",
    ngeqq: "≧̸",
    ngeqslant: "⩾̸",
    nges: "⩾̸",
    nGg: "⋙̸",
    ngsim: "≵",
    nGt: "≫⃒",
    ngt: "≯",
    ngtr: "≯",
    nGtv: "≫̸",
    nharr: "↮",
    nhArr: "⇎",
    nhpar: "⫲",
    ni: "∋",
    nis: "⋼",
    nisd: "⋺",
    niv: "∋",
    NJcy: "Њ",
    njcy: "њ",
    nlarr: "↚",
    nlArr: "⇍",
    nldr: "‥",
    nlE: "≦̸",
    nle: "≰",
    nleftarrow: "↚",
    nLeftarrow: "⇍",
    nleftrightarrow: "↮",
    nLeftrightarrow: "⇎",
    nleq: "≰",
    nleqq: "≦̸",
    nleqslant: "⩽̸",
    nles: "⩽̸",
    nless: "≮",
    nLl: "⋘̸",
    nlsim: "≴",
    nLt: "≪⃒",
    nlt: "≮",
    nltri: "⋪",
    nltrie: "⋬",
    nLtv: "≪̸",
    nmid: "∤",
    NoBreak: "⁠",
    NonBreakingSpace: "\xA0",
    nopf: "𝕟",
    Nopf: "ℕ",
    Not: "⫬",
    not: "¬",
    NotCongruent: "≢",
    NotCupCap: "≭",
    NotDoubleVerticalBar: "∦",
    NotElement: "∉",
    NotEqual: "≠",
    NotEqualTilde: "≂̸",
    NotExists: "∄",
    NotGreater: "≯",
    NotGreaterEqual: "≱",
    NotGreaterFullEqual: "≧̸",
    NotGreaterGreater: "≫̸",
    NotGreaterLess: "≹",
    NotGreaterSlantEqual: "⩾̸",
    NotGreaterTilde: "≵",
    NotHumpDownHump: "≎̸",
    NotHumpEqual: "≏̸",
    notin: "∉",
    notindot: "⋵̸",
    notinE: "⋹̸",
    notinva: "∉",
    notinvb: "⋷",
    notinvc: "⋶",
    NotLeftTriangleBar: "⧏̸",
    NotLeftTriangle: "⋪",
    NotLeftTriangleEqual: "⋬",
    NotLess: "≮",
    NotLessEqual: "≰",
    NotLessGreater: "≸",
    NotLessLess: "≪̸",
    NotLessSlantEqual: "⩽̸",
    NotLessTilde: "≴",
    NotNestedGreaterGreater: "⪢̸",
    NotNestedLessLess: "⪡̸",
    notni: "∌",
    notniva: "∌",
    notnivb: "⋾",
    notnivc: "⋽",
    NotPrecedes: "⊀",
    NotPrecedesEqual: "⪯̸",
    NotPrecedesSlantEqual: "⋠",
    NotReverseElement: "∌",
    NotRightTriangleBar: "⧐̸",
    NotRightTriangle: "⋫",
    NotRightTriangleEqual: "⋭",
    NotSquareSubset: "⊏̸",
    NotSquareSubsetEqual: "⋢",
    NotSquareSuperset: "⊐̸",
    NotSquareSupersetEqual: "⋣",
    NotSubset: "⊂⃒",
    NotSubsetEqual: "⊈",
    NotSucceeds: "⊁",
    NotSucceedsEqual: "⪰̸",
    NotSucceedsSlantEqual: "⋡",
    NotSucceedsTilde: "≿̸",
    NotSuperset: "⊃⃒",
    NotSupersetEqual: "⊉",
    NotTilde: "≁",
    NotTildeEqual: "≄",
    NotTildeFullEqual: "≇",
    NotTildeTilde: "≉",
    NotVerticalBar: "∤",
    nparallel: "∦",
    npar: "∦",
    nparsl: "⫽⃥",
    npart: "∂̸",
    npolint: "⨔",
    npr: "⊀",
    nprcue: "⋠",
    nprec: "⊀",
    npreceq: "⪯̸",
    npre: "⪯̸",
    nrarrc: "⤳̸",
    nrarr: "↛",
    nrArr: "⇏",
    nrarrw: "↝̸",
    nrightarrow: "↛",
    nRightarrow: "⇏",
    nrtri: "⋫",
    nrtrie: "⋭",
    nsc: "⊁",
    nsccue: "⋡",
    nsce: "⪰̸",
    Nscr: "𝒩",
    nscr: "𝓃",
    nshortmid: "∤",
    nshortparallel: "∦",
    nsim: "≁",
    nsime: "≄",
    nsimeq: "≄",
    nsmid: "∤",
    nspar: "∦",
    nsqsube: "⋢",
    nsqsupe: "⋣",
    nsub: "⊄",
    nsubE: "⫅̸",
    nsube: "⊈",
    nsubset: "⊂⃒",
    nsubseteq: "⊈",
    nsubseteqq: "⫅̸",
    nsucc: "⊁",
    nsucceq: "⪰̸",
    nsup: "⊅",
    nsupE: "⫆̸",
    nsupe: "⊉",
    nsupset: "⊃⃒",
    nsupseteq: "⊉",
    nsupseteqq: "⫆̸",
    ntgl: "≹",
    Ntilde: "Ñ",
    ntilde: "ñ",
    ntlg: "≸",
    ntriangleleft: "⋪",
    ntrianglelefteq: "⋬",
    ntriangleright: "⋫",
    ntrianglerighteq: "⋭",
    Nu: "Ν",
    nu: "ν",
    num: "#",
    numero: "№",
    numsp: "\u2007",
    nvap: "≍⃒",
    nvdash: "⊬",
    nvDash: "⊭",
    nVdash: "⊮",
    nVDash: "⊯",
    nvge: "≥⃒",
    nvgt: ">⃒",
    nvHarr: "⤄",
    nvinfin: "⧞",
    nvlArr: "⤂",
    nvle: "≤⃒",
    nvlt: "<⃒",
    nvltrie: "⊴⃒",
    nvrArr: "⤃",
    nvrtrie: "⊵⃒",
    nvsim: "∼⃒",
    nwarhk: "⤣",
    nwarr: "↖",
    nwArr: "⇖",
    nwarrow: "↖",
    nwnear: "⤧",
    Oacute: "Ó",
    oacute: "ó",
    oast: "⊛",
    Ocirc: "Ô",
    ocirc: "ô",
    ocir: "⊚",
    Ocy: "О",
    ocy: "о",
    odash: "⊝",
    Odblac: "Ő",
    odblac: "ő",
    odiv: "⨸",
    odot: "⊙",
    odsold: "⦼",
    OElig: "Œ",
    oelig: "œ",
    ofcir: "⦿",
    Ofr: "𝔒",
    ofr: "𝔬",
    ogon: "˛",
    Ograve: "Ò",
    ograve: "ò",
    ogt: "⧁",
    ohbar: "⦵",
    ohm: "Ω",
    oint: "∮",
    olarr: "↺",
    olcir: "⦾",
    olcross: "⦻",
    oline: "‾",
    olt: "⧀",
    Omacr: "Ō",
    omacr: "ō",
    Omega: "Ω",
    omega: "ω",
    Omicron: "Ο",
    omicron: "ο",
    omid: "⦶",
    ominus: "⊖",
    Oopf: "𝕆",
    oopf: "𝕠",
    opar: "⦷",
    OpenCurlyDoubleQuote: "“",
    OpenCurlyQuote: "‘",
    operp: "⦹",
    oplus: "⊕",
    orarr: "↻",
    Or: "⩔",
    or: "∨",
    ord: "⩝",
    order: "ℴ",
    orderof: "ℴ",
    ordf: "ª",
    ordm: "º",
    origof: "⊶",
    oror: "⩖",
    orslope: "⩗",
    orv: "⩛",
    oS: "Ⓢ",
    Oscr: "𝒪",
    oscr: "ℴ",
    Oslash: "Ø",
    oslash: "ø",
    osol: "⊘",
    Otilde: "Õ",
    otilde: "õ",
    otimesas: "⨶",
    Otimes: "⨷",
    otimes: "⊗",
    Ouml: "Ö",
    ouml: "ö",
    ovbar: "⌽",
    OverBar: "‾",
    OverBrace: "⏞",
    OverBracket: "⎴",
    OverParenthesis: "⏜",
    para: "¶",
    parallel: "∥",
    par: "∥",
    parsim: "⫳",
    parsl: "⫽",
    part: "∂",
    PartialD: "∂",
    Pcy: "П",
    pcy: "п",
    percnt: "%",
    period: ".",
    permil: "‰",
    perp: "⊥",
    pertenk: "‱",
    Pfr: "𝔓",
    pfr: "𝔭",
    Phi: "Φ",
    phi: "φ",
    phiv: "ϕ",
    phmmat: "ℳ",
    phone: "☎",
    Pi: "Π",
    pi: "π",
    pitchfork: "⋔",
    piv: "ϖ",
    planck: "ℏ",
    planckh: "ℎ",
    plankv: "ℏ",
    plusacir: "⨣",
    plusb: "⊞",
    pluscir: "⨢",
    plus: "+",
    plusdo: "∔",
    plusdu: "⨥",
    pluse: "⩲",
    PlusMinus: "±",
    plusmn: "±",
    plussim: "⨦",
    plustwo: "⨧",
    pm: "±",
    Poincareplane: "ℌ",
    pointint: "⨕",
    popf: "𝕡",
    Popf: "ℙ",
    pound: "£",
    prap: "⪷",
    Pr: "⪻",
    pr: "≺",
    prcue: "≼",
    precapprox: "⪷",
    prec: "≺",
    preccurlyeq: "≼",
    Precedes: "≺",
    PrecedesEqual: "⪯",
    PrecedesSlantEqual: "≼",
    PrecedesTilde: "≾",
    preceq: "⪯",
    precnapprox: "⪹",
    precneqq: "⪵",
    precnsim: "⋨",
    pre: "⪯",
    prE: "⪳",
    precsim: "≾",
    prime: "′",
    Prime: "″",
    primes: "ℙ",
    prnap: "⪹",
    prnE: "⪵",
    prnsim: "⋨",
    prod: "∏",
    Product: "∏",
    profalar: "⌮",
    profline: "⌒",
    profsurf: "⌓",
    prop: "∝",
    Proportional: "∝",
    Proportion: "∷",
    propto: "∝",
    prsim: "≾",
    prurel: "⊰",
    Pscr: "𝒫",
    pscr: "𝓅",
    Psi: "Ψ",
    psi: "ψ",
    puncsp: "\u2008",
    Qfr: "𝔔",
    qfr: "𝔮",
    qint: "⨌",
    qopf: "𝕢",
    Qopf: "ℚ",
    qprime: "⁗",
    Qscr: "𝒬",
    qscr: "𝓆",
    quaternions: "ℍ",
    quatint: "⨖",
    quest: "?",
    questeq: "≟",
    quot: "\"",
    QUOT: "\"",
    rAarr: "⇛",
    race: "∽̱",
    Racute: "Ŕ",
    racute: "ŕ",
    radic: "√",
    raemptyv: "⦳",
    rang: "⟩",
    Rang: "⟫",
    rangd: "⦒",
    range: "⦥",
    rangle: "⟩",
    raquo: "»",
    rarrap: "⥵",
    rarrb: "⇥",
    rarrbfs: "⤠",
    rarrc: "⤳",
    rarr: "→",
    Rarr: "↠",
    rArr: "⇒",
    rarrfs: "⤞",
    rarrhk: "↪",
    rarrlp: "↬",
    rarrpl: "⥅",
    rarrsim: "⥴",
    Rarrtl: "⤖",
    rarrtl: "↣",
    rarrw: "↝",
    ratail: "⤚",
    rAtail: "⤜",
    ratio: "∶",
    rationals: "ℚ",
    rbarr: "⤍",
    rBarr: "⤏",
    RBarr: "⤐",
    rbbrk: "❳",
    rbrace: "}",
    rbrack: "]",
    rbrke: "⦌",
    rbrksld: "⦎",
    rbrkslu: "⦐",
    Rcaron: "Ř",
    rcaron: "ř",
    Rcedil: "Ŗ",
    rcedil: "ŗ",
    rceil: "⌉",
    rcub: "}",
    Rcy: "Р",
    rcy: "р",
    rdca: "⤷",
    rdldhar: "⥩",
    rdquo: "”",
    rdquor: "”",
    rdsh: "↳",
    real: "ℜ",
    realine: "ℛ",
    realpart: "ℜ",
    reals: "ℝ",
    Re: "ℜ",
    rect: "▭",
    reg: "®",
    REG: "®",
    ReverseElement: "∋",
    ReverseEquilibrium: "⇋",
    ReverseUpEquilibrium: "⥯",
    rfisht: "⥽",
    rfloor: "⌋",
    rfr: "𝔯",
    Rfr: "ℜ",
    rHar: "⥤",
    rhard: "⇁",
    rharu: "⇀",
    rharul: "⥬",
    Rho: "Ρ",
    rho: "ρ",
    rhov: "ϱ",
    RightAngleBracket: "⟩",
    RightArrowBar: "⇥",
    rightarrow: "→",
    RightArrow: "→",
    Rightarrow: "⇒",
    RightArrowLeftArrow: "⇄",
    rightarrowtail: "↣",
    RightCeiling: "⌉",
    RightDoubleBracket: "⟧",
    RightDownTeeVector: "⥝",
    RightDownVectorBar: "⥕",
    RightDownVector: "⇂",
    RightFloor: "⌋",
    rightharpoondown: "⇁",
    rightharpoonup: "⇀",
    rightleftarrows: "⇄",
    rightleftharpoons: "⇌",
    rightrightarrows: "⇉",
    rightsquigarrow: "↝",
    RightTeeArrow: "↦",
    RightTee: "⊢",
    RightTeeVector: "⥛",
    rightthreetimes: "⋌",
    RightTriangleBar: "⧐",
    RightTriangle: "⊳",
    RightTriangleEqual: "⊵",
    RightUpDownVector: "⥏",
    RightUpTeeVector: "⥜",
    RightUpVectorBar: "⥔",
    RightUpVector: "↾",
    RightVectorBar: "⥓",
    RightVector: "⇀",
    ring: "˚",
    risingdotseq: "≓",
    rlarr: "⇄",
    rlhar: "⇌",
    rlm: "‏",
    rmoustache: "⎱",
    rmoust: "⎱",
    rnmid: "⫮",
    roang: "⟭",
    roarr: "⇾",
    robrk: "⟧",
    ropar: "⦆",
    ropf: "𝕣",
    Ropf: "ℝ",
    roplus: "⨮",
    rotimes: "⨵",
    RoundImplies: "⥰",
    rpar: ")",
    rpargt: "⦔",
    rppolint: "⨒",
    rrarr: "⇉",
    Rrightarrow: "⇛",
    rsaquo: "›",
    rscr: "𝓇",
    Rscr: "ℛ",
    rsh: "↱",
    Rsh: "↱",
    rsqb: "]",
    rsquo: "’",
    rsquor: "’",
    rthree: "⋌",
    rtimes: "⋊",
    rtri: "▹",
    rtrie: "⊵",
    rtrif: "▸",
    rtriltri: "⧎",
    RuleDelayed: "⧴",
    ruluhar: "⥨",
    rx: "℞",
    Sacute: "Ś",
    sacute: "ś",
    sbquo: "‚",
    scap: "⪸",
    Scaron: "Š",
    scaron: "š",
    Sc: "⪼",
    sc: "≻",
    sccue: "≽",
    sce: "⪰",
    scE: "⪴",
    Scedil: "Ş",
    scedil: "ş",
    Scirc: "Ŝ",
    scirc: "ŝ",
    scnap: "⪺",
    scnE: "⪶",
    scnsim: "⋩",
    scpolint: "⨓",
    scsim: "≿",
    Scy: "С",
    scy: "с",
    sdotb: "⊡",
    sdot: "⋅",
    sdote: "⩦",
    searhk: "⤥",
    searr: "↘",
    seArr: "⇘",
    searrow: "↘",
    sect: "§",
    semi: ";",
    seswar: "⤩",
    setminus: "∖",
    setmn: "∖",
    sext: "✶",
    Sfr: "𝔖",
    sfr: "𝔰",
    sfrown: "⌢",
    sharp: "♯",
    SHCHcy: "Щ",
    shchcy: "щ",
    SHcy: "Ш",
    shcy: "ш",
    ShortDownArrow: "↓",
    ShortLeftArrow: "←",
    shortmid: "∣",
    shortparallel: "∥",
    ShortRightArrow: "→",
    ShortUpArrow: "↑",
    shy: "­",
    Sigma: "Σ",
    sigma: "σ",
    sigmaf: "ς",
    sigmav: "ς",
    sim: "∼",
    simdot: "⩪",
    sime: "≃",
    simeq: "≃",
    simg: "⪞",
    simgE: "⪠",
    siml: "⪝",
    simlE: "⪟",
    simne: "≆",
    simplus: "⨤",
    simrarr: "⥲",
    slarr: "←",
    SmallCircle: "∘",
    smallsetminus: "∖",
    smashp: "⨳",
    smeparsl: "⧤",
    smid: "∣",
    smile: "⌣",
    smt: "⪪",
    smte: "⪬",
    smtes: "⪬︀",
    SOFTcy: "Ь",
    softcy: "ь",
    solbar: "⌿",
    solb: "⧄",
    sol: "/",
    Sopf: "𝕊",
    sopf: "𝕤",
    spades: "♠",
    spadesuit: "♠",
    spar: "∥",
    sqcap: "⊓",
    sqcaps: "⊓︀",
    sqcup: "⊔",
    sqcups: "⊔︀",
    Sqrt: "√",
    sqsub: "⊏",
    sqsube: "⊑",
    sqsubset: "⊏",
    sqsubseteq: "⊑",
    sqsup: "⊐",
    sqsupe: "⊒",
    sqsupset: "⊐",
    sqsupseteq: "⊒",
    square: "□",
    Square: "□",
    SquareIntersection: "⊓",
    SquareSubset: "⊏",
    SquareSubsetEqual: "⊑",
    SquareSuperset: "⊐",
    SquareSupersetEqual: "⊒",
    SquareUnion: "⊔",
    squarf: "▪",
    squ: "□",
    squf: "▪",
    srarr: "→",
    Sscr: "𝒮",
    sscr: "𝓈",
    ssetmn: "∖",
    ssmile: "⌣",
    sstarf: "⋆",
    Star: "⋆",
    star: "☆",
    starf: "★",
    straightepsilon: "ϵ",
    straightphi: "ϕ",
    strns: "¯",
    sub: "⊂",
    Sub: "⋐",
    subdot: "⪽",
    subE: "⫅",
    sube: "⊆",
    subedot: "⫃",
    submult: "⫁",
    subnE: "⫋",
    subne: "⊊",
    subplus: "⪿",
    subrarr: "⥹",
    subset: "⊂",
    Subset: "⋐",
    subseteq: "⊆",
    subseteqq: "⫅",
    SubsetEqual: "⊆",
    subsetneq: "⊊",
    subsetneqq: "⫋",
    subsim: "⫇",
    subsub: "⫕",
    subsup: "⫓",
    succapprox: "⪸",
    succ: "≻",
    succcurlyeq: "≽",
    Succeeds: "≻",
    SucceedsEqual: "⪰",
    SucceedsSlantEqual: "≽",
    SucceedsTilde: "≿",
    succeq: "⪰",
    succnapprox: "⪺",
    succneqq: "⪶",
    succnsim: "⋩",
    succsim: "≿",
    SuchThat: "∋",
    sum: "∑",
    Sum: "∑",
    sung: "♪",
    sup1: "¹",
    sup2: "²",
    sup3: "³",
    sup: "⊃",
    Sup: "⋑",
    supdot: "⪾",
    supdsub: "⫘",
    supE: "⫆",
    supe: "⊇",
    supedot: "⫄",
    Superset: "⊃",
    SupersetEqual: "⊇",
    suphsol: "⟉",
    suphsub: "⫗",
    suplarr: "⥻",
    supmult: "⫂",
    supnE: "⫌",
    supne: "⊋",
    supplus: "⫀",
    supset: "⊃",
    Supset: "⋑",
    supseteq: "⊇",
    supseteqq: "⫆",
    supsetneq: "⊋",
    supsetneqq: "⫌",
    supsim: "⫈",
    supsub: "⫔",
    supsup: "⫖",
    swarhk: "⤦",
    swarr: "↙",
    swArr: "⇙",
    swarrow: "↙",
    swnwar: "⤪",
    szlig: "ß",
    Tab: "\t",
    target: "⌖",
    Tau: "Τ",
    tau: "τ",
    tbrk: "⎴",
    Tcaron: "Ť",
    tcaron: "ť",
    Tcedil: "Ţ",
    tcedil: "ţ",
    Tcy: "Т",
    tcy: "т",
    tdot: "⃛",
    telrec: "⌕",
    Tfr: "𝔗",
    tfr: "𝔱",
    there4: "∴",
    therefore: "∴",
    Therefore: "∴",
    Theta: "Θ",
    theta: "θ",
    thetasym: "ϑ",
    thetav: "ϑ",
    thickapprox: "≈",
    thicksim: "∼",
    ThickSpace: "\u205F\u200A",
    ThinSpace: "\u2009",
    thinsp: "\u2009",
    thkap: "≈",
    thksim: "∼",
    THORN: "Þ",
    thorn: "þ",
    tilde: "˜",
    Tilde: "∼",
    TildeEqual: "≃",
    TildeFullEqual: "≅",
    TildeTilde: "≈",
    timesbar: "⨱",
    timesb: "⊠",
    times: "×",
    timesd: "⨰",
    tint: "∭",
    toea: "⤨",
    topbot: "⌶",
    topcir: "⫱",
    top: "⊤",
    Topf: "𝕋",
    topf: "𝕥",
    topfork: "⫚",
    tosa: "⤩",
    tprime: "‴",
    trade: "™",
    TRADE: "™",
    triangle: "▵",
    triangledown: "▿",
    triangleleft: "◃",
    trianglelefteq: "⊴",
    triangleq: "≜",
    triangleright: "▹",
    trianglerighteq: "⊵",
    tridot: "◬",
    trie: "≜",
    triminus: "⨺",
    TripleDot: "⃛",
    triplus: "⨹",
    trisb: "⧍",
    tritime: "⨻",
    trpezium: "⏢",
    Tscr: "𝒯",
    tscr: "𝓉",
    TScy: "Ц",
    tscy: "ц",
    TSHcy: "Ћ",
    tshcy: "ћ",
    Tstrok: "Ŧ",
    tstrok: "ŧ",
    twixt: "≬",
    twoheadleftarrow: "↞",
    twoheadrightarrow: "↠",
    Uacute: "Ú",
    uacute: "ú",
    uarr: "↑",
    Uarr: "↟",
    uArr: "⇑",
    Uarrocir: "⥉",
    Ubrcy: "Ў",
    ubrcy: "ў",
    Ubreve: "Ŭ",
    ubreve: "ŭ",
    Ucirc: "Û",
    ucirc: "û",
    Ucy: "У",
    ucy: "у",
    udarr: "⇅",
    Udblac: "Ű",
    udblac: "ű",
    udhar: "⥮",
    ufisht: "⥾",
    Ufr: "𝔘",
    ufr: "𝔲",
    Ugrave: "Ù",
    ugrave: "ù",
    uHar: "⥣",
    uharl: "↿",
    uharr: "↾",
    uhblk: "▀",
    ulcorn: "⌜",
    ulcorner: "⌜",
    ulcrop: "⌏",
    ultri: "◸",
    Umacr: "Ū",
    umacr: "ū",
    uml: "¨",
    UnderBar: "_",
    UnderBrace: "⏟",
    UnderBracket: "⎵",
    UnderParenthesis: "⏝",
    Union: "⋃",
    UnionPlus: "⊎",
    Uogon: "Ų",
    uogon: "ų",
    Uopf: "𝕌",
    uopf: "𝕦",
    UpArrowBar: "⤒",
    uparrow: "↑",
    UpArrow: "↑",
    Uparrow: "⇑",
    UpArrowDownArrow: "⇅",
    updownarrow: "↕",
    UpDownArrow: "↕",
    Updownarrow: "⇕",
    UpEquilibrium: "⥮",
    upharpoonleft: "↿",
    upharpoonright: "↾",
    uplus: "⊎",
    UpperLeftArrow: "↖",
    UpperRightArrow: "↗",
    upsi: "υ",
    Upsi: "ϒ",
    upsih: "ϒ",
    Upsilon: "Υ",
    upsilon: "υ",
    UpTeeArrow: "↥",
    UpTee: "⊥",
    upuparrows: "⇈",
    urcorn: "⌝",
    urcorner: "⌝",
    urcrop: "⌎",
    Uring: "Ů",
    uring: "ů",
    urtri: "◹",
    Uscr: "𝒰",
    uscr: "𝓊",
    utdot: "⋰",
    Utilde: "Ũ",
    utilde: "ũ",
    utri: "▵",
    utrif: "▴",
    uuarr: "⇈",
    Uuml: "Ü",
    uuml: "ü",
    uwangle: "⦧",
    vangrt: "⦜",
    varepsilon: "ϵ",
    varkappa: "ϰ",
    varnothing: "∅",
    varphi: "ϕ",
    varpi: "ϖ",
    varpropto: "∝",
    varr: "↕",
    vArr: "⇕",
    varrho: "ϱ",
    varsigma: "ς",
    varsubsetneq: "⊊︀",
    varsubsetneqq: "⫋︀",
    varsupsetneq: "⊋︀",
    varsupsetneqq: "⫌︀",
    vartheta: "ϑ",
    vartriangleleft: "⊲",
    vartriangleright: "⊳",
    vBar: "⫨",
    Vbar: "⫫",
    vBarv: "⫩",
    Vcy: "В",
    vcy: "в",
    vdash: "⊢",
    vDash: "⊨",
    Vdash: "⊩",
    VDash: "⊫",
    Vdashl: "⫦",
    veebar: "⊻",
    vee: "∨",
    Vee: "⋁",
    veeeq: "≚",
    vellip: "⋮",
    verbar: "|",
    Verbar: "‖",
    vert: "|",
    Vert: "‖",
    VerticalBar: "∣",
    VerticalLine: "|",
    VerticalSeparator: "❘",
    VerticalTilde: "≀",
    VeryThinSpace: "\u200A",
    Vfr: "𝔙",
    vfr: "𝔳",
    vltri: "⊲",
    vnsub: "⊂⃒",
    vnsup: "⊃⃒",
    Vopf: "𝕍",
    vopf: "𝕧",
    vprop: "∝",
    vrtri: "⊳",
    Vscr: "𝒱",
    vscr: "𝓋",
    vsubnE: "⫋︀",
    vsubne: "⊊︀",
    vsupnE: "⫌︀",
    vsupne: "⊋︀",
    Vvdash: "⊪",
    vzigzag: "⦚",
    Wcirc: "Ŵ",
    wcirc: "ŵ",
    wedbar: "⩟",
    wedge: "∧",
    Wedge: "⋀",
    wedgeq: "≙",
    weierp: "℘",
    Wfr: "𝔚",
    wfr: "𝔴",
    Wopf: "𝕎",
    wopf: "𝕨",
    wp: "℘",
    wr: "≀",
    wreath: "≀",
    Wscr: "𝒲",
    wscr: "𝓌",
    xcap: "⋂",
    xcirc: "◯",
    xcup: "⋃",
    xdtri: "▽",
    Xfr: "𝔛",
    xfr: "𝔵",
    xharr: "⟷",
    xhArr: "⟺",
    Xi: "Ξ",
    xi: "ξ",
    xlarr: "⟵",
    xlArr: "⟸",
    xmap: "⟼",
    xnis: "⋻",
    xodot: "⨀",
    Xopf: "𝕏",
    xopf: "𝕩",
    xoplus: "⨁",
    xotime: "⨂",
    xrarr: "⟶",
    xrArr: "⟹",
    Xscr: "𝒳",
    xscr: "𝓍",
    xsqcup: "⨆",
    xuplus: "⨄",
    xutri: "△",
    xvee: "⋁",
    xwedge: "⋀",
    Yacute: "Ý",
    yacute: "ý",
    YAcy: "Я",
    yacy: "я",
    Ycirc: "Ŷ",
    ycirc: "ŷ",
    Ycy: "Ы",
    ycy: "ы",
    yen: "¥",
    Yfr: "𝔜",
    yfr: "𝔶",
    YIcy: "Ї",
    yicy: "ї",
    Yopf: "𝕐",
    yopf: "𝕪",
    Yscr: "𝒴",
    yscr: "𝓎",
    YUcy: "Ю",
    yucy: "ю",
    yuml: "ÿ",
    Yuml: "Ÿ",
    Zacute: "Ź",
    zacute: "ź",
    Zcaron: "Ž",
    zcaron: "ž",
    Zcy: "З",
    zcy: "з",
    Zdot: "Ż",
    zdot: "ż",
    zeetrf: "ℨ",
    ZeroWidthSpace: "​",
    Zeta: "Ζ",
    zeta: "ζ",
    zfr: "𝔷",
    Zfr: "ℨ",
    ZHcy: "Ж",
    zhcy: "ж",
    zigrarr: "⇝",
    zopf: "𝕫",
    Zopf: "ℤ",
    Zscr: "𝒵",
    zscr: "𝓏",
    zwj: "‍",
    zwnj: "‌"
  };
}, function (e, t, n) {
  "use strict";

  var r = {};
  function i(e, t, n) {
    var a;
    var o;
    var s;
    var l;
    var c;
    var u = "";
    if (typeof t != "string") {
      n = t;
      t = i.defaultChars;
    }
    if (n === undefined) {
      n = true;
    }
    c = function (e) {
      var t;
      var n;
      var i = r[e];
      if (i) {
        return i;
      }
      i = r[e] = [];
      t = 0;
      for (; t < 128; t++) {
        n = String.fromCharCode(t);
        if (/^[0-9a-z]$/i.test(n)) {
          i.push(n);
        } else {
          i.push("%" + ("0" + t.toString(16).toUpperCase()).slice(-2));
        }
      }
      for (t = 0; t < e.length; t++) {
        i[e.charCodeAt(t)] = e[t];
      }
      return i;
    }(t);
    a = 0;
    o = e.length;
    for (; a < o; a++) {
      s = e.charCodeAt(a);
      if (n && s === 37 && a + 2 < o && /^[0-9a-f]{2}$/i.test(e.slice(a + 1, a + 3))) {
        u += e.slice(a, a + 3);
        a += 2;
      } else if (s < 128) {
        u += c[s];
      } else if (s >= 55296 && s <= 57343) {
        if (s >= 55296 && s <= 56319 && a + 1 < o && (l = e.charCodeAt(a + 1)) >= 56320 && l <= 57343) {
          u += encodeURIComponent(e[a] + e[a + 1]);
          a++;
          continue;
        }
        u += "%EF%BF%BD";
      } else {
        u += encodeURIComponent(e[a]);
      }
    }
    return u;
  }
  i.defaultChars = ";/?:@&=+$,-_.!~*'()#";
  i.componentChars = "-_.!~*'()";
  e.exports = i;
}, function (e, t, n) {
  "use strict";

  var r = {};
  function i(e, t) {
    var n;
    if (typeof t != "string") {
      t = i.defaultChars;
    }
    n = function (e) {
      var t;
      var n;
      var i = r[e];
      if (i) {
        return i;
      }
      i = r[e] = [];
      t = 0;
      for (; t < 128; t++) {
        n = String.fromCharCode(t);
        i.push(n);
      }
      for (t = 0; t < e.length; t++) {
        i[n = e.charCodeAt(t)] = "%" + ("0" + n.toString(16).toUpperCase()).slice(-2);
      }
      return i;
    }(t);
    return e.replace(/(%[a-f0-9]{2})+/gi, function (e) {
      var t;
      var r;
      var i;
      var a;
      var o;
      var s;
      var l;
      var c = "";
      t = 0;
      r = e.length;
      for (; t < r; t += 3) {
        if ((i = parseInt(e.slice(t + 1, t + 3), 16)) < 128) {
          c += n[i];
        } else if ((i & 224) == 192 && t + 3 < r && ((a = parseInt(e.slice(t + 4, t + 6), 16)) & 192) == 128) {
          c += (l = i << 6 & 1984 | a & 63) < 128 ? "��" : String.fromCharCode(l);
          t += 3;
        } else if ((i & 240) == 224 && t + 6 < r && (a = parseInt(e.slice(t + 4, t + 6), 16), o = parseInt(e.slice(t + 7, t + 9), 16), (a & 192) == 128 && (o & 192) == 128)) {
          c += (l = i << 12 & 61440 | a << 6 & 4032 | o & 63) < 2048 || l >= 55296 && l <= 57343 ? "���" : String.fromCharCode(l);
          t += 6;
        } else if ((i & 248) == 240 && t + 9 < r && (a = parseInt(e.slice(t + 4, t + 6), 16), o = parseInt(e.slice(t + 7, t + 9), 16), s = parseInt(e.slice(t + 10, t + 12), 16), (a & 192) == 128 && (o & 192) == 128 && (s & 192) == 128)) {
          if ((l = i << 18 & 1835008 | a << 12 & 258048 | o << 6 & 4032 | s & 63) < 65536 || l > 1114111) {
            c += "����";
          } else {
            l -= 65536;
            c += String.fromCharCode(55296 + (l >> 10), 56320 + (l & 1023));
          }
          t += 9;
        } else {
          c += "�";
        }
      }
      return c;
    });
  }
  i.defaultChars = ";/?:@&=+$,#";
  i.componentChars = "";
  e.exports = i;
}, function (e, t, n) {
  "use strict";

  e.exports = function (e) {
    var t = "";
    t += e.protocol || "";
    t += e.slashes ? "//" : "";
    t += e.auth ? e.auth + "@" : "";
    if (e.hostname && e.hostname.indexOf(":") !== -1) {
      t += "[" + e.hostname + "]";
    } else {
      t += e.hostname || "";
    }
    t += e.port ? ":" + e.port : "";
    t += e.pathname || "";
    return (t += e.search || "") + (e.hash || "");
  };
}, function (e, t, n) {
  "use strict";

  function r() {
    this.protocol = null;
    this.slashes = null;
    this.auth = null;
    this.port = null;
    this.hostname = null;
    this.hash = null;
    this.search = null;
    this.pathname = null;
  }
  var i = /^([a-z0-9.+-]+:)/i;
  var a = /:[0-9]*$/;
  var o = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/;
  var s = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", "\"", "`", " ", "\r", "\n", "\t"]);
  var l = ["'"].concat(s);
  var c = ["%", "/", "?", ";", "#"].concat(l);
  var u = ["/", "?", "#"];
  var p = /^[+a-z0-9A-Z_-]{0,63}$/;
  var d = /^([+a-z0-9A-Z_-]{0,63})(.*)$/;
  var h = {
    javascript: true,
    "javascript:": true
  };
  var g = {
    http: true,
    https: true,
    ftp: true,
    gopher: true,
    file: true,
    "http:": true,
    "https:": true,
    "ftp:": true,
    "gopher:": true,
    "file:": true
  };
  r.prototype.parse = function (e, t) {
    var n;
    var r;
    var a;
    var s;
    var l;
    var f = e;
    f = f.trim();
    if (!t && e.split("#").length === 1) {
      var m = o.exec(f);
      if (m) {
        this.pathname = m[1];
        if (m[2]) {
          this.search = m[2];
        }
        return this;
      }
    }
    var b = i.exec(f);
    if (b) {
      a = (b = b[0]).toLowerCase();
      this.protocol = b;
      f = f.substr(b.length);
    }
    if (t || b || f.match(/^\/\/[^@\/]+@[^@\/]+/)) {
      if (!!(l = f.substr(0, 2) === "//") && (!b || !h[b])) {
        f = f.substr(2);
        this.slashes = true;
      }
    }
    if (!h[b] && (l || b && !g[b])) {
      var x;
      var y;
      var v = -1;
      for (n = 0; n < u.length; n++) {
        if ((s = f.indexOf(u[n])) !== -1 && (v === -1 || s < v)) {
          v = s;
        }
      }
      if ((y = v === -1 ? f.lastIndexOf("@") : f.lastIndexOf("@", v)) !== -1) {
        x = f.slice(0, y);
        f = f.slice(y + 1);
        this.auth = x;
      }
      v = -1;
      n = 0;
      for (; n < c.length; n++) {
        if ((s = f.indexOf(c[n])) !== -1 && (v === -1 || s < v)) {
          v = s;
        }
      }
      if (v === -1) {
        v = f.length;
      }
      if (f[v - 1] === ":") {
        v--;
      }
      var w = f.slice(0, v);
      f = f.slice(v);
      this.parseHost(w);
      this.hostname = this.hostname || "";
      var A = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
      if (!A) {
        var k = this.hostname.split(/\./);
        n = 0;
        r = k.length;
        for (; n < r; n++) {
          var S = k[n];
          if (S && !S.match(p)) {
            var C = "";
            for (var E = 0, I = S.length; E < I; E++) {
              if (S.charCodeAt(E) > 127) {
                C += "x";
              } else {
                C += S[E];
              }
            }
            if (!C.match(p)) {
              var T = k.slice(0, n);
              var D = k.slice(n + 1);
              var _ = S.match(d);
              if (_) {
                T.push(_[1]);
                D.unshift(_[2]);
              }
              if (D.length) {
                f = D.join(".") + f;
              }
              this.hostname = T.join(".");
              break;
            }
          }
        }
      }
      if (this.hostname.length > 255) {
        this.hostname = "";
      }
      if (A) {
        this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      }
    }
    var M = f.indexOf("#");
    if (M !== -1) {
      this.hash = f.substr(M);
      f = f.slice(0, M);
    }
    var F = f.indexOf("?");
    if (F !== -1) {
      this.search = f.substr(F);
      f = f.slice(0, F);
    }
    if (f) {
      this.pathname = f;
    }
    if (g[a] && this.hostname && !this.pathname) {
      this.pathname = "";
    }
    return this;
  };
  r.prototype.parseHost = function (e) {
    var t = a.exec(e);
    if (t) {
      if ((t = t[0]) !== ":") {
        this.port = t.substr(1);
      }
      e = e.substr(0, e.length - t.length);
    }
    if (e) {
      this.hostname = e;
    }
  };
  e.exports = function (e, t) {
    if (e && e instanceof r) {
      return e;
    }
    var n = new r();
    n.parse(e, t);
    return n;
  };
}, function (e, t, n) {
  "use strict";

  t.Any = n(9);
  t.Cc = n(10);
  t.Cf = n(27);
  t.P = n(3);
  t.Z = n(11);
}, function (e, t) {
  e.exports = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/;
}, function (e, t, n) {
  "use strict";

  t.parseLinkLabel = n(29);
  t.parseLinkDestination = n(30);
  t.parseLinkTitle = n(31);
}, function (e, t, n) {
  "use strict";

  e.exports = function (e, t, n) {
    var r;
    var i;
    var a;
    var o;
    var s = -1;
    var l = e.posMax;
    var c = e.pos;
    e.pos = t + 1;
    r = 1;
    while (e.pos < l) {
      if ((a = e.src.charCodeAt(e.pos)) === 93 && --r == 0) {
        i = true;
        break;
      }
      o = e.pos;
      e.md.inline.skipToken(e);
      if (a === 91) {
        if (o === e.pos - 1) {
          r++;
        } else if (n) {
          e.pos = c;
          return -1;
        }
      }
    }
    if (i) {
      s = e.pos;
    }
    e.pos = c;
    return s;
  };
}, function (e, t, n) {
  "use strict";

  var r = n(0).unescapeAll;
  e.exports = function (e, t, n) {
    var i;
    var a;
    var o = t;
    var s = {
      ok: false,
      pos: 0,
      lines: 0,
      str: ""
    };
    if (e.charCodeAt(t) === 60) {
      for (t++; t < n;) {
        if ((i = e.charCodeAt(t)) === 10) {
          return s;
        }
        if (i === 60) {
          return s;
        }
        if (i === 62) {
          s.pos = t + 1;
          s.str = r(e.slice(o + 1, t));
          s.ok = true;
          return s;
        }
        if (i === 92 && t + 1 < n) {
          t += 2;
        } else {
          t++;
        }
      }
      return s;
    }
    for (a = 0; t < n && (i = e.charCodeAt(t)) !== 32 && !(i < 32) && i !== 127;) {
      if (i === 92 && t + 1 < n) {
        if (e.charCodeAt(t + 1) === 32) {
          break;
        }
        t += 2;
      } else {
        if (i === 40 && ++a > 32) {
          return s;
        }
        if (i === 41) {
          if (a === 0) {
            break;
          }
          a--;
        }
        t++;
      }
    }
    if (o !== t && a === 0) {
      s.str = r(e.slice(o, t));
      s.lines = 0;
      s.pos = t;
      s.ok = true;
    }
    return s;
  };
}, function (e, t, n) {
  "use strict";

  var r = n(0).unescapeAll;
  e.exports = function (e, t, n) {
    var i;
    var a;
    var o = 0;
    var s = t;
    var l = {
      ok: false,
      pos: 0,
      lines: 0,
      str: ""
    };
    if (t >= n) {
      return l;
    }
    if ((a = e.charCodeAt(t)) !== 34 && a !== 39 && a !== 40) {
      return l;
    }
    t++;
    if (a === 40) {
      a = 41;
    }
    while (t < n) {
      if ((i = e.charCodeAt(t)) === a) {
        l.pos = t + 1;
        l.lines = o;
        l.str = r(e.slice(s + 1, t));
        l.ok = true;
        return l;
      }
      if (i === 40 && a === 41) {
        return l;
      }
      if (i === 10) {
        o++;
      } else if (i === 92 && t + 1 < n) {
        t++;
        if (e.charCodeAt(t) === 10) {
          o++;
        }
      }
      t++;
    }
    return l;
  };
}, function (e, t, n) {
  "use strict";

  var r = n(0).assign;
  var i = n(0).unescapeAll;
  var a = n(0).escapeHtml;
  var o = {};
  function s() {
    this.rules = r({}, o);
  }
  o.code_inline = function (e, t, n, r, i) {
    var o = e[t];
    return "<code" + i.renderAttrs(o) + ">" + a(e[t].content) + "</code>";
  };
  o.code_block = function (e, t, n, r, i) {
    var o = e[t];
    return "<pre" + i.renderAttrs(o) + "><code>" + a(e[t].content) + "</code></pre>\n";
  };
  o.fence = function (e, t, n, r, o) {
    var s;
    var l;
    var c;
    var u;
    var p;
    var d = e[t];
    var h = d.info ? i(d.info).trim() : "";
    var g = "";
    var f = "";
    if (h) {
      g = (c = h.split(/(\s+)/g))[0];
      f = c.slice(2).join("");
    }
    if ((s = n.highlight && n.highlight(d.content, g, f) || a(d.content)).indexOf("<pre") === 0) {
      return s + "\n";
    } else if (h) {
      l = d.attrIndex("class");
      u = d.attrs ? d.attrs.slice() : [];
      if (l < 0) {
        u.push(["class", n.langPrefix + g]);
      } else {
        u[l] = u[l].slice();
        u[l][1] += " " + n.langPrefix + g;
      }
      p = {
        attrs: u
      };
      return "<pre><code" + o.renderAttrs(p) + ">" + s + "</code></pre>\n";
    } else {
      return "<pre><code" + o.renderAttrs(d) + ">" + s + "</code></pre>\n";
    }
  };
  o.image = function (e, t, n, r, i) {
    var a = e[t];
    a.attrs[a.attrIndex("alt")][1] = i.renderInlineAsText(a.children, n, r);
    return i.renderToken(e, t, n);
  };
  o.hardbreak = function (e, t, n) {
    if (n.xhtmlOut) {
      return "<br />\n";
    } else {
      return "<br>\n";
    }
  };
  o.softbreak = function (e, t, n) {
    if (n.breaks) {
      if (n.xhtmlOut) {
        return "<br />\n";
      } else {
        return "<br>\n";
      }
    } else {
      return "\n";
    }
  };
  o.text = function (e, t) {
    return a(e[t].content);
  };
  o.html_block = function (e, t) {
    return e[t].content;
  };
  o.html_inline = function (e, t) {
    return e[t].content;
  };
  s.prototype.renderAttrs = function (e) {
    var t;
    var n;
    var r;
    if (!e.attrs) {
      return "";
    }
    r = "";
    t = 0;
    n = e.attrs.length;
    for (; t < n; t++) {
      r += " " + a(e.attrs[t][0]) + "=\"" + a(e.attrs[t][1]) + "\"";
    }
    return r;
  };
  s.prototype.renderToken = function (e, t, n) {
    var r;
    var i = "";
    var a = false;
    var o = e[t];
    if (o.hidden) {
      return "";
    } else {
      if (o.block && o.nesting !== -1 && t && e[t - 1].hidden) {
        i += "\n";
      }
      i += (o.nesting === -1 ? "</" : "<") + o.tag;
      i += this.renderAttrs(o);
      if (o.nesting === 0 && n.xhtmlOut) {
        i += " /";
      }
      if (o.block) {
        a = true;
        if (o.nesting === 1 && t + 1 < e.length && ((r = e[t + 1]).type === "inline" || r.hidden || r.nesting === -1 && r.tag === o.tag)) {
          a = false;
        }
      }
      return i += a ? ">\n" : ">";
    }
  };
  s.prototype.renderInline = function (e, t, n) {
    var r;
    var i = "";
    var a = this.rules;
    for (var o = 0, s = e.length; o < s; o++) {
      if (a[r = e[o].type] !== undefined) {
        i += a[r](e, o, t, n, this);
      } else {
        i += this.renderToken(e, o, t);
      }
    }
    return i;
  };
  s.prototype.renderInlineAsText = function (e, t, n) {
    var r = "";
    for (var i = 0, a = e.length; i < a; i++) {
      if (e[i].type === "text") {
        r += e[i].content;
      } else if (e[i].type === "image") {
        r += this.renderInlineAsText(e[i].children, t, n);
      } else if (e[i].type === "softbreak") {
        r += "\n";
      }
    }
    return r;
  };
  s.prototype.render = function (e, t, n) {
    var r;
    var i;
    var a;
    var o = "";
    var s = this.rules;
    r = 0;
    i = e.length;
    for (; r < i; r++) {
      if ((a = e[r].type) === "inline") {
        o += this.renderInline(e[r].children, t, n);
      } else if (s[a] !== undefined) {
        o += s[e[r].type](e, r, t, n, this);
      } else {
        o += this.renderToken(e, r, t, n);
      }
    }
    return o;
  };
  e.exports = s;
}, function (e, t, n) {
  "use strict";

  var r = n(4);
  var i = [["normalize", n(34)], ["block", n(35)], ["inline", n(36)], ["linkify", n(37)], ["replacements", n(38)], ["smartquotes", n(39)]];
  function a() {
    this.ruler = new r();
    for (var e = 0; e < i.length; e++) {
      this.ruler.push(i[e][0], i[e][1]);
    }
  }
  a.prototype.process = function (e) {
    var t;
    var n;
    var r;
    t = 0;
    n = (r = this.ruler.getRules("")).length;
    for (; t < n; t++) {
      r[t](e);
    }
  };
  a.prototype.State = n(40);
  e.exports = a;
}, function (e, t, n) {
  "use strict";

  var r = /\r\n?|\n/g;
  var i = /\0/g;
  e.exports = function (e) {
    var t;
    t = (t = e.src.replace(r, "\n")).replace(i, "�");
    e.src = t;
  };
}, function (e, t, n) {
  "use strict";

  e.exports = function (e) {
    var t;
    if (e.inlineMode) {
      (t = new e.Token("inline", "", 0)).content = e.src;
      t.map = [0, 1];
      t.children = [];
      e.tokens.push(t);
    } else {
      e.md.block.parse(e.src, e.md, e.env, e.tokens);
    }
  };
}, function (e, t, n) {
  "use strict";

  e.exports = function (e) {
    var t;
    var n;
    var r;
    var i = e.tokens;
    n = 0;
    r = i.length;
    for (; n < r; n++) {
      if ((t = i[n]).type === "inline") {
        e.md.inline.parse(t.content, e.md, e.env, t.children);
      }
    }
  };
}, function (e, t, n) {
  "use strict";

  var r = n(0).arrayReplaceAt;
  function i(e) {
    return /^<\/a\s*>/i.test(e);
  }
  e.exports = function (e) {
    var t;
    var n;
    var a;
    var o;
    var s;
    var l;
    var c;
    var u;
    var p;
    var d;
    var h;
    var g;
    var f;
    var m;
    var b;
    var x;
    var y;
    var v;
    var w = e.tokens;
    if (e.md.options.linkify) {
      n = 0;
      a = w.length;
      for (; n < a; n++) {
        if (w[n].type === "inline" && e.md.linkify.pretest(w[n].content)) {
          f = 0;
          t = (o = w[n].children).length - 1;
          for (; t >= 0; t--) {
            if ((l = o[t]).type !== "link_close") {
              if (l.type === "html_inline") {
                v = l.content;
                if (/^<a[>\s]/i.test(v) && f > 0) {
                  f--;
                }
                if (i(l.content)) {
                  f++;
                }
              }
              if (!(f > 0) && l.type === "text" && e.md.linkify.test(l.content)) {
                p = l.content;
                y = e.md.linkify.match(p);
                c = [];
                g = l.level;
                h = 0;
                u = 0;
                for (; u < y.length; u++) {
                  m = y[u].url;
                  b = e.md.normalizeLink(m);
                  if (e.md.validateLink(b)) {
                    x = y[u].text;
                    x = y[u].schema ? y[u].schema !== "mailto:" || /^mailto:/i.test(x) ? e.md.normalizeLinkText(x) : e.md.normalizeLinkText("mailto:" + x).replace(/^mailto:/, "") : e.md.normalizeLinkText("http://" + x).replace(/^http:\/\//, "");
                    if ((d = y[u].index) > h) {
                      (s = new e.Token("text", "", 0)).content = p.slice(h, d);
                      s.level = g;
                      c.push(s);
                    }
                    (s = new e.Token("link_open", "a", 1)).attrs = [["href", b]];
                    s.level = g++;
                    s.markup = "linkify";
                    s.info = "auto";
                    c.push(s);
                    (s = new e.Token("text", "", 0)).content = x;
                    s.level = g;
                    c.push(s);
                    (s = new e.Token("link_close", "a", -1)).level = --g;
                    s.markup = "linkify";
                    s.info = "auto";
                    c.push(s);
                    h = y[u].lastIndex;
                  }
                }
                if (h < p.length) {
                  (s = new e.Token("text", "", 0)).content = p.slice(h);
                  s.level = g;
                  c.push(s);
                }
                w[n].children = o = r(o, t, c);
              }
            } else {
              for (t--; o[t].level !== l.level && o[t].type !== "link_open";) {
                t--;
              }
            }
          }
        }
      }
    }
  };
}, function (e, t, n) {
  "use strict";

  var r = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/;
  var i = /\((c|tm|r|p)\)/i;
  var a = /\((c|tm|r|p)\)/gi;
  var o = {
    c: "©",
    r: "®",
    p: "§",
    tm: "™"
  };
  function s(e, t) {
    return o[t.toLowerCase()];
  }
  function l(e) {
    var t;
    var n;
    var r = 0;
    for (t = e.length - 1; t >= 0; t--) {
      if ((n = e[t]).type === "text" && !r) {
        n.content = n.content.replace(a, s);
      }
      if (n.type === "link_open" && n.info === "auto") {
        r--;
      }
      if (n.type === "link_close" && n.info === "auto") {
        r++;
      }
    }
  }
  function c(e) {
    var t;
    var n;
    var i = 0;
    for (t = e.length - 1; t >= 0; t--) {
      if ((n = e[t]).type === "text" && !i) {
        if (r.test(n.content)) {
          n.content = n.content.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/gm, "$1—").replace(/(^|\s)--(?=\s|$)/gm, "$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/gm, "$1–");
        }
      }
      if (n.type === "link_open" && n.info === "auto") {
        i--;
      }
      if (n.type === "link_close" && n.info === "auto") {
        i++;
      }
    }
  }
  e.exports = function (e) {
    var t;
    if (e.md.options.typographer) {
      for (t = e.tokens.length - 1; t >= 0; t--) {
        if (e.tokens[t].type === "inline") {
          if (i.test(e.tokens[t].content)) {
            l(e.tokens[t].children);
          }
          if (r.test(e.tokens[t].content)) {
            c(e.tokens[t].children);
          }
        }
      }
    }
  };
}, function (e, t, n) {
  "use strict";

  var r = n(0).isWhiteSpace;
  var i = n(0).isPunctChar;
  var a = n(0).isMdAsciiPunct;
  var o = /['"]/;
  var s = /['"]/g;
  function l(e, t, n) {
    return e.substr(0, t) + n + e.substr(t + 1);
  }
  function c(e, t) {
    var n;
    var o;
    var c;
    var u;
    var p;
    var d;
    var h;
    var g;
    var f;
    var m;
    var b;
    var x;
    var y;
    var v;
    var w;
    var A;
    var k;
    var S;
    var C;
    var E;
    var I;
    C = [];
    n = 0;
    for (; n < e.length; n++) {
      o = e[n];
      h = e[n].level;
      k = C.length - 1;
      for (; k >= 0 && !(C[k].level <= h); k--);
      C.length = k + 1;
      if (o.type === "text") {
        p = 0;
        d = (c = o.content).length;
        e: while (p < d && (s.lastIndex = p, u = s.exec(c))) {
          w = A = true;
          p = u.index + 1;
          S = u[0] === "'";
          f = 32;
          if (u.index - 1 >= 0) {
            f = c.charCodeAt(u.index - 1);
          } else {
            for (k = n - 1; k >= 0 && e[k].type !== "softbreak" && e[k].type !== "hardbreak"; k--) {
              if (e[k].content) {
                f = e[k].content.charCodeAt(e[k].content.length - 1);
                break;
              }
            }
          }
          m = 32;
          if (p < d) {
            m = c.charCodeAt(p);
          } else {
            for (k = n + 1; k < e.length && e[k].type !== "softbreak" && e[k].type !== "hardbreak"; k++) {
              if (e[k].content) {
                m = e[k].content.charCodeAt(0);
                break;
              }
            }
          }
          b = a(f) || i(String.fromCharCode(f));
          x = a(m) || i(String.fromCharCode(m));
          y = r(f);
          if (v = r(m)) {
            w = false;
          } else if (x) {
            if (!y && !b) {
              w = false;
            }
          }
          if (y) {
            A = false;
          } else if (b) {
            if (!v && !x) {
              A = false;
            }
          }
          if (m === 34 && u[0] === "\"" && f >= 48 && f <= 57) {
            A = w = false;
          }
          if (w && A) {
            w = b;
            A = x;
          }
          if (w || A) {
            if (A) {
              for (k = C.length - 1; k >= 0 && (g = C[k], !(C[k].level < h)); k--) {
                if (g.single === S && C[k].level === h) {
                  g = C[k];
                  if (S) {
                    E = t.md.options.quotes[2];
                    I = t.md.options.quotes[3];
                  } else {
                    E = t.md.options.quotes[0];
                    I = t.md.options.quotes[1];
                  }
                  o.content = l(o.content, u.index, I);
                  e[g.token].content = l(e[g.token].content, g.pos, E);
                  p += I.length - 1;
                  if (g.token === n) {
                    p += E.length - 1;
                  }
                  d = (c = o.content).length;
                  C.length = k;
                  continue e;
                }
              }
            }
            if (w) {
              C.push({
                token: n,
                pos: u.index,
                single: S,
                level: h
              });
            } else if (A && S) {
              o.content = l(o.content, u.index, "’");
            }
          } else if (S) {
            o.content = l(o.content, u.index, "’");
          }
        }
      }
    }
  }
  e.exports = function (e) {
    var t;
    if (e.md.options.typographer) {
      for (t = e.tokens.length - 1; t >= 0; t--) {
        if (e.tokens[t].type === "inline" && o.test(e.tokens[t].content)) {
          c(e.tokens[t].children, e);
        }
      }
    }
  };
}, function (e, t, n) {
  "use strict";

  var r = n(5);
  function i(e, t, n) {
    this.src = e;
    this.env = n;
    this.tokens = [];
    this.inlineMode = false;
    this.md = t;
  }
  i.prototype.Token = r;
  e.exports = i;
}, function (e, t, n) {
  "use strict";

  var r = n(4);
  var i = [["table", n(42), ["paragraph", "reference"]], ["code", n(43)], ["fence", n(44), ["paragraph", "reference", "blockquote", "list"]], ["blockquote", n(45), ["paragraph", "reference", "blockquote", "list"]], ["hr", n(46), ["paragraph", "reference", "blockquote", "list"]], ["list", n(47), ["paragraph", "reference", "blockquote"]], ["reference", n(48)], ["html_block", n(49), ["paragraph", "reference", "blockquote"]], ["heading", n(51), ["paragraph", "reference", "blockquote"]], ["lheading", n(52)], ["paragraph", n(53)]];
  function a() {
    this.ruler = new r();
    for (var e = 0; e < i.length; e++) {
      this.ruler.push(i[e][0], i[e][1], {
        alt: (i[e][2] || []).slice()
      });
    }
  }
  a.prototype.tokenize = function (e, t, n) {
    var r;
    var i = this.ruler.getRules("");
    var a = i.length;
    for (var o = t, s = false, l = e.md.options.maxNesting; o < n && (e.line = o = e.skipEmptyLines(o), !(o >= n)) && !(e.sCount[o] < e.blkIndent);) {
      if (e.level >= l) {
        e.line = n;
        break;
      }
      for (r = 0; r < a && !i[r](e, o, n, false); r++);
      e.tight = !s;
      if (e.isEmpty(e.line - 1)) {
        s = true;
      }
      if ((o = e.line) < n && e.isEmpty(o)) {
        s = true;
        o++;
        e.line = o;
      }
    }
  };
  a.prototype.parse = function (e, t, n, r) {
    var i;
    if (e) {
      i = new this.State(e, t, n, r);
      this.tokenize(i, i.line, i.lineMax);
    }
  };
  a.prototype.State = n(54);
  e.exports = a;
}, function (e, t, n) {
  "use strict";

  var r = n(0).isSpace;
  function i(e, t) {
    var n = e.bMarks[t] + e.tShift[t];
    var r = e.eMarks[t];
    return e.src.substr(n, r - n);
  }
  function a(e) {
    var t;
    var n = [];
    var r = 0;
    var i = e.length;
    var a = false;
    var o = 0;
    var s = "";
    for (t = e.charCodeAt(r); r < i;) {
      if (t === 124) {
        if (a) {
          s += e.substring(o, r - 1);
          o = r;
        } else {
          n.push(s + e.substring(o, r));
          s = "";
          o = r + 1;
        }
      }
      a = t === 92;
      r++;
      t = e.charCodeAt(r);
    }
    n.push(s + e.substring(o));
    return n;
  }
  e.exports = function (e, t, n, o) {
    var s;
    var l;
    var c;
    var u;
    var p;
    var d;
    var h;
    var g;
    var f;
    var m;
    var b;
    var x;
    var y;
    var v;
    var w;
    var A;
    var k;
    var S;
    if (t + 2 > n) {
      return false;
    }
    d = t + 1;
    if (e.sCount[d] < e.blkIndent) {
      return false;
    }
    if (e.sCount[d] - e.blkIndent >= 4) {
      return false;
    }
    if ((c = e.bMarks[d] + e.tShift[d]) >= e.eMarks[d]) {
      return false;
    }
    if ((k = e.src.charCodeAt(c++)) !== 124 && k !== 45 && k !== 58) {
      return false;
    }
    if (c >= e.eMarks[d]) {
      return false;
    }
    if ((S = e.src.charCodeAt(c++)) !== 124 && S !== 45 && S !== 58 && !r(S)) {
      return false;
    }
    if (k === 45 && r(S)) {
      return false;
    }
    while (c < e.eMarks[d]) {
      if ((s = e.src.charCodeAt(c)) !== 124 && s !== 45 && s !== 58 && !r(s)) {
        return false;
      }
      c++;
    }
    h = (l = i(e, t + 1)).split("|");
    m = [];
    u = 0;
    for (; u < h.length; u++) {
      if (!(b = h[u].trim())) {
        if (u === 0 || u === h.length - 1) {
          continue;
        }
        return false;
      }
      if (!/^:?-+:?$/.test(b)) {
        return false;
      }
      if (b.charCodeAt(b.length - 1) === 58) {
        m.push(b.charCodeAt(0) === 58 ? "center" : "right");
      } else if (b.charCodeAt(0) === 58) {
        m.push("left");
      } else {
        m.push("");
      }
    }
    if ((l = i(e, t).trim()).indexOf("|") === -1) {
      return false;
    }
    if (e.sCount[t] - e.blkIndent >= 4) {
      return false;
    }
    if ((h = a(l)).length && h[0] === "") {
      h.shift();
    }
    if (h.length && h[h.length - 1] === "") {
      h.pop();
    }
    if ((g = h.length) === 0 || g !== m.length) {
      return false;
    }
    if (o) {
      return true;
    }
    v = e.parentType;
    e.parentType = "table";
    A = e.md.block.ruler.getRules("blockquote");
    (f = e.push("table_open", "table", 1)).map = x = [t, 0];
    (f = e.push("thead_open", "thead", 1)).map = [t, t + 1];
    (f = e.push("tr_open", "tr", 1)).map = [t, t + 1];
    u = 0;
    for (; u < h.length; u++) {
      f = e.push("th_open", "th", 1);
      if (m[u]) {
        f.attrs = [["style", "text-align:" + m[u]]];
      }
      (f = e.push("inline", "", 0)).content = h[u].trim();
      f.children = [];
      f = e.push("th_close", "th", -1);
    }
    f = e.push("tr_close", "tr", -1);
    f = e.push("thead_close", "thead", -1);
    d = t + 2;
    for (; d < n && !(e.sCount[d] < e.blkIndent); d++) {
      w = false;
      u = 0;
      p = A.length;
      for (; u < p; u++) {
        if (A[u](e, d, n, true)) {
          w = true;
          break;
        }
      }
      if (w) {
        break;
      }
      if (!(l = i(e, d).trim())) {
        break;
      }
      if (e.sCount[d] - e.blkIndent >= 4) {
        break;
      }
      if ((h = a(l)).length && h[0] === "") {
        h.shift();
      }
      if (h.length && h[h.length - 1] === "") {
        h.pop();
      }
      if (d === t + 2) {
        (f = e.push("tbody_open", "tbody", 1)).map = y = [t + 2, 0];
      }
      (f = e.push("tr_open", "tr", 1)).map = [d, d + 1];
      u = 0;
      for (; u < g; u++) {
        f = e.push("td_open", "td", 1);
        if (m[u]) {
          f.attrs = [["style", "text-align:" + m[u]]];
        }
        (f = e.push("inline", "", 0)).content = h[u] ? h[u].trim() : "";
        f.children = [];
        f = e.push("td_close", "td", -1);
      }
      f = e.push("tr_close", "tr", -1);
    }
    if (y) {
      f = e.push("tbody_close", "tbody", -1);
      y[1] = d;
    }
    f = e.push("table_close", "table", -1);
    x[1] = d;
    e.parentType = v;
    e.line = d;
    return true;
  };
}, function (e, t, n) {
  "use strict";

  e.exports = function (e, t, n) {
    var r;
    var i;
    var a;
    if (e.sCount[t] - e.blkIndent < 4) {
      return false;
    }
    for (i = r = t + 1; r < n;) {
      if (e.isEmpty(r)) {
        r++;
      } else {
        if (!(e.sCount[r] - e.blkIndent >= 4)) {
          break;
        }
        i = ++r;
      }
    }
    e.line = i;
    (a = e.push("code_block", "code", 0)).content = e.getLines(t, i, 4 + e.blkIndent, false) + "\n";
    a.map = [t, e.line];
    return true;
  };
}, function (e, t, n) {
  "use strict";

  e.exports = function (e, t, n, r) {
    var i;
    var a;
    var o;
    var s;
    var l;
    var c;
    var u;
    var p = false;
    var d = e.bMarks[t] + e.tShift[t];
    var h = e.eMarks[t];
    if (e.sCount[t] - e.blkIndent >= 4) {
      return false;
    }
    if (d + 3 > h) {
      return false;
    }
    if ((i = e.src.charCodeAt(d)) !== 126 && i !== 96) {
      return false;
    }
    l = d;
    if ((a = (d = e.skipChars(d, i)) - l) < 3) {
      return false;
    }
    u = e.src.slice(l, d);
    o = e.src.slice(d, h);
    if (i === 96 && o.indexOf(String.fromCharCode(i)) >= 0) {
      return false;
    }
    if (r) {
      return true;
    }
    for (s = t; !(++s >= n) && (!((d = l = e.bMarks[s] + e.tShift[s]) < (h = e.eMarks[s])) || !(e.sCount[s] < e.blkIndent));) {
      if (e.src.charCodeAt(d) === i && !(e.sCount[s] - e.blkIndent >= 4) && !((d = e.skipChars(d, i)) - l < a) && !((d = e.skipSpaces(d)) < h)) {
        p = true;
        break;
      }
    }
    a = e.sCount[t];
    e.line = s + (p ? 1 : 0);
    (c = e.push("fence", "code", 0)).info = o;
    c.content = e.getLines(t + 1, s, a, true);
    c.markup = u;
    c.map = [t, e.line];
    return true;
  };
}, function (e, t, n) {
  "use strict";

  var r = n(0).isSpace;
  e.exports = function (e, t, n, i) {
    var a;
    var o;
    var s;
    var l;
    var c;
    var u;
    var p;
    var d;
    var h;
    var g;
    var f;
    var m;
    var b;
    var x;
    var y;
    var v;
    var w;
    var A;
    var k;
    var S;
    var C = e.lineMax;
    var E = e.bMarks[t] + e.tShift[t];
    var I = e.eMarks[t];
    if (e.sCount[t] - e.blkIndent >= 4) {
      return false;
    }
    if (e.src.charCodeAt(E++) !== 62) {
      return false;
    }
    if (i) {
      return true;
    }
    l = h = e.sCount[t] + 1;
    if (e.src.charCodeAt(E) === 32) {
      E++;
      l++;
      h++;
      a = false;
      v = true;
    } else if (e.src.charCodeAt(E) === 9) {
      v = true;
      if ((e.bsCount[t] + h) % 4 == 3) {
        E++;
        l++;
        h++;
        a = false;
      } else {
        a = true;
      }
    } else {
      v = false;
    }
    g = [e.bMarks[t]];
    e.bMarks[t] = E;
    while (E < I && (o = e.src.charCodeAt(E), r(o))) {
      if (o === 9) {
        h += 4 - (h + e.bsCount[t] + (a ? 1 : 0)) % 4;
      } else {
        h++;
      }
      E++;
    }
    f = [e.bsCount[t]];
    e.bsCount[t] = e.sCount[t] + 1 + (v ? 1 : 0);
    u = E >= I;
    x = [e.sCount[t]];
    e.sCount[t] = h - l;
    y = [e.tShift[t]];
    e.tShift[t] = E - e.bMarks[t];
    A = e.md.block.ruler.getRules("blockquote");
    b = e.parentType;
    e.parentType = "blockquote";
    d = t + 1;
    for (; d < n && (S = e.sCount[d] < e.blkIndent, !((E = e.bMarks[d] + e.tShift[d]) >= (I = e.eMarks[d]))); d++) {
      if (e.src.charCodeAt(E++) !== 62 || S) {
        if (u) {
          break;
        }
        w = false;
        s = 0;
        c = A.length;
        for (; s < c; s++) {
          if (A[s](e, d, n, true)) {
            w = true;
            break;
          }
        }
        if (w) {
          e.lineMax = d;
          if (e.blkIndent !== 0) {
            g.push(e.bMarks[d]);
            f.push(e.bsCount[d]);
            y.push(e.tShift[d]);
            x.push(e.sCount[d]);
            e.sCount[d] -= e.blkIndent;
          }
          break;
        }
        g.push(e.bMarks[d]);
        f.push(e.bsCount[d]);
        y.push(e.tShift[d]);
        x.push(e.sCount[d]);
        e.sCount[d] = -1;
      } else {
        l = h = e.sCount[d] + 1;
        if (e.src.charCodeAt(E) === 32) {
          E++;
          l++;
          h++;
          a = false;
          v = true;
        } else if (e.src.charCodeAt(E) === 9) {
          v = true;
          if ((e.bsCount[d] + h) % 4 == 3) {
            E++;
            l++;
            h++;
            a = false;
          } else {
            a = true;
          }
        } else {
          v = false;
        }
        g.push(e.bMarks[d]);
        e.bMarks[d] = E;
        while (E < I && (o = e.src.charCodeAt(E), r(o))) {
          if (o === 9) {
            h += 4 - (h + e.bsCount[d] + (a ? 1 : 0)) % 4;
          } else {
            h++;
          }
          E++;
        }
        u = E >= I;
        f.push(e.bsCount[d]);
        e.bsCount[d] = e.sCount[d] + 1 + (v ? 1 : 0);
        x.push(e.sCount[d]);
        e.sCount[d] = h - l;
        y.push(e.tShift[d]);
        e.tShift[d] = E - e.bMarks[d];
      }
    }
    m = e.blkIndent;
    e.blkIndent = 0;
    (k = e.push("blockquote_open", "blockquote", 1)).markup = ">";
    k.map = p = [t, 0];
    e.md.block.tokenize(e, t, d);
    (k = e.push("blockquote_close", "blockquote", -1)).markup = ">";
    e.lineMax = C;
    e.parentType = b;
    p[1] = e.line;
    s = 0;
    for (; s < y.length; s++) {
      e.bMarks[s + t] = g[s];
      e.tShift[s + t] = y[s];
      e.sCount[s + t] = x[s];
      e.bsCount[s + t] = f[s];
    }
    e.blkIndent = m;
    return true;
  };
}, function (e, t, n) {
  "use strict";

  var r = n(0).isSpace;
  e.exports = function (e, t, n, i) {
    var a;
    var o;
    var s;
    var l;
    var c = e.bMarks[t] + e.tShift[t];
    var u = e.eMarks[t];
    if (e.sCount[t] - e.blkIndent >= 4) {
      return false;
    }
    if ((a = e.src.charCodeAt(c++)) !== 42 && a !== 45 && a !== 95) {
      return false;
    }
    for (o = 1; c < u;) {
      if ((s = e.src.charCodeAt(c++)) !== a && !r(s)) {
        return false;
      }
      if (s === a) {
        o++;
      }
    }
    return !(o < 3) && !(i || (e.line = t + 1, (l = e.push("hr", "hr", 0)).map = [t, e.line], l.markup = Array(o + 1).join(String.fromCharCode(a))), 0);
  };
}, function (e, t, n) {
  "use strict";

  var r = n(0).isSpace;
  function i(e, t) {
    var n;
    var i;
    var a;
    var o;
    i = e.bMarks[t] + e.tShift[t];
    a = e.eMarks[t];
    if ((n = e.src.charCodeAt(i++)) !== 42 && n !== 45 && n !== 43 || i < a && (o = e.src.charCodeAt(i), !r(o))) {
      return -1;
    } else {
      return i;
    }
  }
  function a(e, t) {
    var n;
    var i = e.bMarks[t] + e.tShift[t];
    var a = i;
    var o = e.eMarks[t];
    if (a + 1 >= o) {
      return -1;
    }
    if ((n = e.src.charCodeAt(a++)) < 48 || n > 57) {
      return -1;
    }
    while (true) {
      if (a >= o) {
        return -1;
      }
      if (!((n = e.src.charCodeAt(a++)) >= 48) || !(n <= 57)) {
        if (n === 41 || n === 46) {
          break;
        }
        return -1;
      }
      if (a - i >= 10) {
        return -1;
      }
    }
    if (a < o && (n = e.src.charCodeAt(a), !r(n))) {
      return -1;
    } else {
      return a;
    }
  }
  e.exports = function (e, t, n, r) {
    var o;
    var s;
    var l;
    var c;
    var u;
    var p;
    var d;
    var h;
    var g;
    var f;
    var m;
    var b;
    var x;
    var y;
    var v;
    var w;
    var A;
    var k;
    var S;
    var C;
    var E;
    var I;
    var T;
    var D;
    var _;
    var M;
    var F;
    var z;
    var R = false;
    var B = true;
    if (e.sCount[t] - e.blkIndent >= 4) {
      return false;
    }
    if (e.listIndent >= 0 && e.sCount[t] - e.listIndent >= 4 && e.sCount[t] < e.blkIndent) {
      return false;
    }
    if (r && e.parentType === "paragraph" && e.sCount[t] >= e.blkIndent) {
      R = true;
    }
    if ((T = a(e, t)) >= 0) {
      d = true;
      _ = e.bMarks[t] + e.tShift[t];
      x = Number(e.src.slice(_, T - 1));
      if (R && x !== 1) {
        return false;
      }
    } else {
      if (!((T = i(e, t)) >= 0)) {
        return false;
      }
      d = false;
    }
    if (R && e.skipSpaces(T) >= e.eMarks[t]) {
      return false;
    }
    b = e.src.charCodeAt(T - 1);
    if (r) {
      return true;
    }
    m = e.tokens.length;
    if (d) {
      z = e.push("ordered_list_open", "ol", 1);
      if (x !== 1) {
        z.attrs = [["start", x]];
      }
    } else {
      z = e.push("bullet_list_open", "ul", 1);
    }
    z.map = f = [t, 0];
    z.markup = String.fromCharCode(b);
    v = t;
    D = false;
    F = e.md.block.ruler.getRules("list");
    k = e.parentType;
    e.parentType = "list";
    while (v < n) {
      I = T;
      y = e.eMarks[v];
      p = w = e.sCount[v] + T - (e.bMarks[t] + e.tShift[t]);
      while (I < y) {
        if ((o = e.src.charCodeAt(I)) === 9) {
          w += 4 - (w + e.bsCount[v]) % 4;
        } else {
          if (o !== 32) {
            break;
          }
          w++;
        }
        I++;
      }
      if ((u = (s = I) >= y ? 1 : w - p) > 4) {
        u = 1;
      }
      c = p + u;
      (z = e.push("list_item_open", "li", 1)).markup = String.fromCharCode(b);
      z.map = h = [t, 0];
      if (d) {
        z.info = e.src.slice(_, T - 1);
      }
      E = e.tight;
      C = e.tShift[t];
      S = e.sCount[t];
      A = e.listIndent;
      e.listIndent = e.blkIndent;
      e.blkIndent = c;
      e.tight = true;
      e.tShift[t] = s - e.bMarks[t];
      e.sCount[t] = w;
      if (s >= y && e.isEmpty(t + 1)) {
        e.line = Math.min(e.line + 2, n);
      } else {
        e.md.block.tokenize(e, t, n, true);
      }
      if (!e.tight || !!D) {
        B = false;
      }
      D = e.line - t > 1 && e.isEmpty(e.line - 1);
      e.blkIndent = e.listIndent;
      e.listIndent = A;
      e.tShift[t] = C;
      e.sCount[t] = S;
      e.tight = E;
      (z = e.push("list_item_close", "li", -1)).markup = String.fromCharCode(b);
      v = t = e.line;
      h[1] = v;
      s = e.bMarks[t];
      if (v >= n) {
        break;
      }
      if (e.sCount[v] < e.blkIndent) {
        break;
      }
      if (e.sCount[t] - e.blkIndent >= 4) {
        break;
      }
      M = false;
      l = 0;
      g = F.length;
      for (; l < g; l++) {
        if (F[l](e, v, n, true)) {
          M = true;
          break;
        }
      }
      if (M) {
        break;
      }
      if (d) {
        if ((T = a(e, v)) < 0) {
          break;
        }
        _ = e.bMarks[v] + e.tShift[v];
      } else if ((T = i(e, v)) < 0) {
        break;
      }
      if (b !== e.src.charCodeAt(T - 1)) {
        break;
      }
    }
    (z = d ? e.push("ordered_list_close", "ol", -1) : e.push("bullet_list_close", "ul", -1)).markup = String.fromCharCode(b);
    f[1] = v;
    e.line = v;
    e.parentType = k;
    if (B) {
      (function (e, t) {
        var n;
        var r;
        var i = e.level + 2;
        n = t + 2;
        r = e.tokens.length - 2;
        for (; n < r; n++) {
          if (e.tokens[n].level === i && e.tokens[n].type === "paragraph_open") {
            e.tokens[n + 2].hidden = true;
            e.tokens[n].hidden = true;
            n += 2;
          }
        }
      })(e, m);
    }
    return true;
  };
}, function (e, t, n) {
  "use strict";

  var r = n(0).normalizeReference;
  var i = n(0).isSpace;
  e.exports = function (e, t, n, a) {
    var o;
    var s;
    var l;
    var c;
    var u;
    var p;
    var d;
    var h;
    var g;
    var f;
    var m;
    var b;
    var x;
    var y;
    var v;
    var w;
    var A = 0;
    var k = e.bMarks[t] + e.tShift[t];
    var S = e.eMarks[t];
    var C = t + 1;
    if (e.sCount[t] - e.blkIndent >= 4) {
      return false;
    }
    if (e.src.charCodeAt(k) !== 91) {
      return false;
    }
    while (++k < S) {
      if (e.src.charCodeAt(k) === 93 && e.src.charCodeAt(k - 1) !== 92) {
        if (k + 1 === S) {
          return false;
        }
        if (e.src.charCodeAt(k + 1) !== 58) {
          return false;
        }
        break;
      }
    }
    c = e.lineMax;
    v = e.md.block.ruler.getRules("reference");
    f = e.parentType;
    e.parentType = "reference";
    for (; C < c && !e.isEmpty(C); C++) {
      if (!(e.sCount[C] - e.blkIndent > 3) && !(e.sCount[C] < 0)) {
        y = false;
        p = 0;
        d = v.length;
        for (; p < d; p++) {
          if (v[p](e, C, c, true)) {
            y = true;
            break;
          }
        }
        if (y) {
          break;
        }
      }
    }
    S = (x = e.getLines(t, C, e.blkIndent, false).trim()).length;
    k = 1;
    for (; k < S; k++) {
      if ((o = x.charCodeAt(k)) === 91) {
        return false;
      }
      if (o === 93) {
        g = k;
        break;
      }
      if (o === 10 || o === 92 && ++k < S && x.charCodeAt(k) === 10) {
        A++;
      }
    }
    if (g < 0 || x.charCodeAt(g + 1) !== 58) {
      return false;
    }
    for (k = g + 2; k < S; k++) {
      if ((o = x.charCodeAt(k)) === 10) {
        A++;
      } else if (!i(o)) {
        break;
      }
    }
    if (!(m = e.md.helpers.parseLinkDestination(x, k, S)).ok) {
      return false;
    }
    u = e.md.normalizeLink(m.str);
    if (!e.md.validateLink(u)) {
      return false;
    }
    s = k = m.pos;
    l = A += m.lines;
    b = k;
    for (; k < S; k++) {
      if ((o = x.charCodeAt(k)) === 10) {
        A++;
      } else if (!i(o)) {
        break;
      }
    }
    m = e.md.helpers.parseLinkTitle(x, k, S);
    if (k < S && b !== k && m.ok) {
      w = m.str;
      k = m.pos;
      A += m.lines;
    } else {
      w = "";
      k = s;
      A = l;
    }
    while (k < S && (o = x.charCodeAt(k), i(o))) {
      k++;
    }
    if (k < S && x.charCodeAt(k) !== 10 && w) {
      w = "";
      k = s;
      A = l;
      while (k < S && (o = x.charCodeAt(k), i(o))) {
        k++;
      }
    }
    return (!(k < S) || x.charCodeAt(k) === 10) && !!(h = r(x.slice(1, g))) && !(a || (e.env.references === undefined && (e.env.references = {}), e.env.references[h] === undefined && (e.env.references[h] = {
      title: w,
      href: u
    }), e.parentType = f, e.line = t + A + 1), 0);
  };
}, function (e, t, n) {
  "use strict";

  var r = n(50);
  var i = n(12).HTML_OPEN_CLOSE_TAG_RE;
  var a = [[/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, true], [/^<!--/, /-->/, true], [/^<\?/, /\?>/, true], [/^<![A-Z]/, />/, true], [/^<!\[CDATA\[/, /\]\]>/, true], [new RegExp("^</?(" + r.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, true], [new RegExp(i.source + "\\s*$"), /^$/, false]];
  e.exports = function (e, t, n, r) {
    var i;
    var o;
    var s;
    var l;
    var c = e.bMarks[t] + e.tShift[t];
    var u = e.eMarks[t];
    if (e.sCount[t] - e.blkIndent >= 4) {
      return false;
    }
    if (!e.md.options.html) {
      return false;
    }
    if (e.src.charCodeAt(c) !== 60) {
      return false;
    }
    l = e.src.slice(c, u);
    i = 0;
    for (; i < a.length && !a[i][0].test(l); i++);
    if (i === a.length) {
      return false;
    }
    if (r) {
      return a[i][2];
    }
    o = t + 1;
    if (!a[i][1].test(l)) {
      for (; o < n && !(e.sCount[o] < e.blkIndent); o++) {
        c = e.bMarks[o] + e.tShift[o];
        u = e.eMarks[o];
        l = e.src.slice(c, u);
        if (a[i][1].test(l)) {
          if (l.length !== 0) {
            o++;
          }
          break;
        }
      }
    }
    e.line = o;
    (s = e.push("html_block", "", 0)).map = [t, o];
    s.content = e.getLines(t, o, e.blkIndent, true);
    return true;
  };
}, function (e, t, n) {
  "use strict";

  e.exports = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "section", "source", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"];
}, function (e, t, n) {
  "use strict";

  var r = n(0).isSpace;
  e.exports = function (e, t, n, i) {
    var a;
    var o;
    var s;
    var l;
    var c = e.bMarks[t] + e.tShift[t];
    var u = e.eMarks[t];
    if (e.sCount[t] - e.blkIndent >= 4) {
      return false;
    }
    if ((a = e.src.charCodeAt(c)) !== 35 || c >= u) {
      return false;
    }
    o = 1;
    a = e.src.charCodeAt(++c);
    while (a === 35 && c < u && o <= 6) {
      o++;
      a = e.src.charCodeAt(++c);
    }
    return !(o > 6) && (!(c < u) || !!r(a)) && !(i || (u = e.skipSpacesBack(u, c), (s = e.skipCharsBack(u, 35, c)) > c && r(e.src.charCodeAt(s - 1)) && (u = s), e.line = t + 1, (l = e.push("heading_open", "h" + String(o), 1)).markup = "########".slice(0, o), l.map = [t, e.line], (l = e.push("inline", "", 0)).content = e.src.slice(c, u).trim(), l.map = [t, e.line], l.children = [], (l = e.push("heading_close", "h" + String(o), -1)).markup = "########".slice(0, o)), 0);
  };
}, function (e, t, n) {
  "use strict";

  e.exports = function (e, t, n) {
    var r;
    var i;
    var a;
    var o;
    var s;
    var l;
    var c;
    var u;
    var p;
    var d;
    var h = t + 1;
    var g = e.md.block.ruler.getRules("paragraph");
    if (e.sCount[t] - e.blkIndent >= 4) {
      return false;
    }
    d = e.parentType;
    e.parentType = "paragraph";
    for (; h < n && !e.isEmpty(h); h++) {
      if (!(e.sCount[h] - e.blkIndent > 3)) {
        if (e.sCount[h] >= e.blkIndent && (l = e.bMarks[h] + e.tShift[h]) < (c = e.eMarks[h]) && ((p = e.src.charCodeAt(l)) === 45 || p === 61) && (l = e.skipChars(l, p), (l = e.skipSpaces(l)) >= c)) {
          u = p === 61 ? 1 : 2;
          break;
        }
        if (!(e.sCount[h] < 0)) {
          i = false;
          a = 0;
          o = g.length;
          for (; a < o; a++) {
            if (g[a](e, h, n, true)) {
              i = true;
              break;
            }
          }
          if (i) {
            break;
          }
        }
      }
    }
    return !!u && (r = e.getLines(t, h, e.blkIndent, false).trim(), e.line = h + 1, (s = e.push("heading_open", "h" + String(u), 1)).markup = String.fromCharCode(p), s.map = [t, e.line], (s = e.push("inline", "", 0)).content = r, s.map = [t, e.line - 1], s.children = [], (s = e.push("heading_close", "h" + String(u), -1)).markup = String.fromCharCode(p), e.parentType = d, true);
  };
}, function (e, t, n) {
  "use strict";

  e.exports = function (e, t) {
    var n;
    var r;
    var i;
    var a;
    var o;
    var s;
    var l = t + 1;
    var c = e.md.block.ruler.getRules("paragraph");
    var u = e.lineMax;
    s = e.parentType;
    e.parentType = "paragraph";
    for (; l < u && !e.isEmpty(l); l++) {
      if (!(e.sCount[l] - e.blkIndent > 3) && !(e.sCount[l] < 0)) {
        r = false;
        i = 0;
        a = c.length;
        for (; i < a; i++) {
          if (c[i](e, l, u, true)) {
            r = true;
            break;
          }
        }
        if (r) {
          break;
        }
      }
    }
    n = e.getLines(t, l, e.blkIndent, false).trim();
    e.line = l;
    (o = e.push("paragraph_open", "p", 1)).map = [t, e.line];
    (o = e.push("inline", "", 0)).content = n;
    o.map = [t, e.line];
    o.children = [];
    o = e.push("paragraph_close", "p", -1);
    e.parentType = s;
    return true;
  };
}, function (e, t, n) {
  "use strict";

  var r = n(5);
  var i = n(0).isSpace;
  function a(e, t, n, r) {
    var a;
    var o;
    var s;
    var l;
    var c;
    var u;
    var p;
    var d;
    this.src = e;
    this.md = t;
    this.env = n;
    this.tokens = r;
    this.bMarks = [];
    this.eMarks = [];
    this.tShift = [];
    this.sCount = [];
    this.bsCount = [];
    this.blkIndent = 0;
    this.line = 0;
    this.lineMax = 0;
    this.tight = false;
    this.ddIndent = -1;
    this.listIndent = -1;
    this.parentType = "root";
    this.level = 0;
    this.result = "";
    d = false;
    s = l = u = p = 0;
    c = (o = this.src).length;
    for (; l < c; l++) {
      a = o.charCodeAt(l);
      if (!d) {
        if (i(a)) {
          u++;
          if (a === 9) {
            p += 4 - p % 4;
          } else {
            p++;
          }
          continue;
        }
        d = true;
      }
      if (a === 10 || l === c - 1) {
        if (a !== 10) {
          l++;
        }
        this.bMarks.push(s);
        this.eMarks.push(l);
        this.tShift.push(u);
        this.sCount.push(p);
        this.bsCount.push(0);
        d = false;
        u = 0;
        p = 0;
        s = l + 1;
      }
    }
    this.bMarks.push(o.length);
    this.eMarks.push(o.length);
    this.tShift.push(0);
    this.sCount.push(0);
    this.bsCount.push(0);
    this.lineMax = this.bMarks.length - 1;
  }
  a.prototype.push = function (e, t, n) {
    var i = new r(e, t, n);
    i.block = true;
    if (n < 0) {
      this.level--;
    }
    i.level = this.level;
    if (n > 0) {
      this.level++;
    }
    this.tokens.push(i);
    return i;
  };
  a.prototype.isEmpty = function (e) {
    return this.bMarks[e] + this.tShift[e] >= this.eMarks[e];
  };
  a.prototype.skipEmptyLines = function (e) {
    for (var t = this.lineMax; e < t && !(this.bMarks[e] + this.tShift[e] < this.eMarks[e]); e++);
    return e;
  };
  a.prototype.skipSpaces = function (e) {
    for (var t, n = this.src.length; e < n && (t = this.src.charCodeAt(e), i(t)); e++);
    return e;
  };
  a.prototype.skipSpacesBack = function (e, t) {
    if (e <= t) {
      return e;
    }
    while (e > t) {
      if (!i(this.src.charCodeAt(--e))) {
        return e + 1;
      }
    }
    return e;
  };
  a.prototype.skipChars = function (e, t) {
    for (var n = this.src.length; e < n && this.src.charCodeAt(e) === t; e++);
    return e;
  };
  a.prototype.skipCharsBack = function (e, t, n) {
    if (e <= n) {
      return e;
    }
    while (e > n) {
      if (t !== this.src.charCodeAt(--e)) {
        return e + 1;
      }
    }
    return e;
  };
  a.prototype.getLines = function (e, t, n, r) {
    var a;
    var o;
    var s;
    var l;
    var c;
    var u;
    var p;
    var d = e;
    if (e >= t) {
      return "";
    }
    u = new Array(t - e);
    a = 0;
    for (; d < t; d++, a++) {
      o = 0;
      p = l = this.bMarks[d];
      c = d + 1 < t || r ? this.eMarks[d] + 1 : this.eMarks[d];
      while (l < c && o < n) {
        s = this.src.charCodeAt(l);
        if (i(s)) {
          if (s === 9) {
            o += 4 - (o + this.bsCount[d]) % 4;
          } else {
            o++;
          }
        } else {
          if (!(l - p < this.tShift[d])) {
            break;
          }
          o++;
        }
        l++;
      }
      u[a] = o > n ? new Array(o - n + 1).join(" ") + this.src.slice(l, c) : this.src.slice(l, c);
    }
    return u.join("");
  };
  a.prototype.Token = r;
  e.exports = a;
}, function (e, t, n) {
  "use strict";

  var r = n(4);
  var i = [["text", n(56)], ["newline", n(57)], ["escape", n(58)], ["backticks", n(59)], ["strikethrough", n(13).tokenize], ["emphasis", n(14).tokenize], ["link", n(60)], ["image", n(61)], ["autolink", n(62)], ["html_inline", n(63)], ["entity", n(64)]];
  var a = [["balance_pairs", n(65)], ["strikethrough", n(13).postProcess], ["emphasis", n(14).postProcess], ["text_collapse", n(66)]];
  function o() {
    var e;
    this.ruler = new r();
    e = 0;
    for (; e < i.length; e++) {
      this.ruler.push(i[e][0], i[e][1]);
    }
    this.ruler2 = new r();
    e = 0;
    for (; e < a.length; e++) {
      this.ruler2.push(a[e][0], a[e][1]);
    }
  }
  o.prototype.skipToken = function (e) {
    var t;
    var n;
    var r = e.pos;
    var i = this.ruler.getRules("");
    var a = i.length;
    var o = e.md.options.maxNesting;
    var s = e.cache;
    if (s[r] === undefined) {
      if (e.level < o) {
        for (n = 0; n < a && (e.level++, t = i[n](e, true), e.level--, !t); n++);
      } else {
        e.pos = e.posMax;
      }
      if (!t) {
        e.pos++;
      }
      s[r] = e.pos;
    } else {
      e.pos = s[r];
    }
  };
  o.prototype.tokenize = function (e) {
    var t;
    var n;
    var r = this.ruler.getRules("");
    var i = r.length;
    for (var a = e.posMax, o = e.md.options.maxNesting; e.pos < a;) {
      if (e.level < o) {
        for (n = 0; n < i && !(t = r[n](e, false)); n++);
      }
      if (t) {
        if (e.pos >= a) {
          break;
        }
      } else {
        e.pending += e.src[e.pos++];
      }
    }
    if (e.pending) {
      e.pushPending();
    }
  };
  o.prototype.parse = function (e, t, n, r) {
    var i;
    var a;
    var o;
    var s = new this.State(e, t, n, r);
    this.tokenize(s);
    o = (a = this.ruler2.getRules("")).length;
    i = 0;
    for (; i < o; i++) {
      a[i](s);
    }
  };
  o.prototype.State = n(67);
  e.exports = o;
}, function (e, t, n) {
  "use strict";

  function r(e) {
    switch (e) {
      case 10:
      case 33:
      case 35:
      case 36:
      case 37:
      case 38:
      case 42:
      case 43:
      case 45:
      case 58:
      case 60:
      case 61:
      case 62:
      case 64:
      case 91:
      case 92:
      case 93:
      case 94:
      case 95:
      case 96:
      case 123:
      case 125:
      case 126:
        return true;
      default:
        return false;
    }
  }
  e.exports = function (e, t) {
    for (var n = e.pos; n < e.posMax && !r(e.src.charCodeAt(n));) {
      n++;
    }
    return n !== e.pos && (t || (e.pending += e.src.slice(e.pos, n)), e.pos = n, true);
  };
}, function (e, t, n) {
  "use strict";

  var r = n(0).isSpace;
  e.exports = function (e, t) {
    var n;
    var i;
    var a;
    var o = e.pos;
    if (e.src.charCodeAt(o) !== 10) {
      return false;
    }
    n = e.pending.length - 1;
    i = e.posMax;
    if (!t) {
      if (n >= 0 && e.pending.charCodeAt(n) === 32) {
        if (n >= 1 && e.pending.charCodeAt(n - 1) === 32) {
          for (a = n - 1; a >= 1 && e.pending.charCodeAt(a - 1) === 32;) {
            a--;
          }
          e.pending = e.pending.slice(0, a);
          e.push("hardbreak", "br", 0);
        } else {
          e.pending = e.pending.slice(0, -1);
          e.push("softbreak", "br", 0);
        }
      } else {
        e.push("softbreak", "br", 0);
      }
    }
    for (o++; o < i && r(e.src.charCodeAt(o));) {
      o++;
    }
    e.pos = o;
    return true;
  };
}, function (e, t, n) {
  "use strict";

  var r = n(0).isSpace;
  var i = [];
  for (var a = 0; a < 256; a++) {
    i.push(0);
  }
  "\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function (e) {
    i[e.charCodeAt(0)] = 1;
  });
  e.exports = function (e, t) {
    var n;
    var a = e.pos;
    var o = e.posMax;
    if (e.src.charCodeAt(a) !== 92) {
      return false;
    }
    if (++a < o) {
      if ((n = e.src.charCodeAt(a)) < 256 && i[n] !== 0) {
        if (!t) {
          e.pending += e.src[a];
        }
        e.pos += 2;
        return true;
      }
      if (n === 10) {
        if (!t) {
          e.push("hardbreak", "br", 0);
        }
        a++;
        while (a < o && (n = e.src.charCodeAt(a), r(n))) {
          a++;
        }
        e.pos = a;
        return true;
      }
    }
    if (!t) {
      e.pending += "\\";
    }
    e.pos++;
    return true;
  };
}, function (e, t, n) {
  "use strict";

  e.exports = function (e, t) {
    var n;
    var r;
    var i;
    var a;
    var o;
    var s;
    var l;
    var c;
    var u = e.pos;
    if (e.src.charCodeAt(u) !== 96) {
      return false;
    }
    n = u;
    u++;
    r = e.posMax;
    while (u < r && e.src.charCodeAt(u) === 96) {
      u++;
    }
    l = (i = e.src.slice(n, u)).length;
    if (e.backticksScanned && (e.backticks[l] || 0) <= n) {
      if (!t) {
        e.pending += i;
      }
      e.pos += l;
      return true;
    }
    for (o = s = u; (o = e.src.indexOf("`", s)) !== -1;) {
      for (s = o + 1; s < r && e.src.charCodeAt(s) === 96;) {
        s++;
      }
      if ((c = s - o) === l) {
        if (!t) {
          (a = e.push("code_inline", "code", 0)).markup = i;
          a.content = e.src.slice(u, o).replace(/\n/g, " ").replace(/^ (.+) $/, "$1");
        }
        e.pos = s;
        return true;
      }
      e.backticks[c] = o;
    }
    e.backticksScanned = true;
    if (!t) {
      e.pending += i;
    }
    e.pos += l;
    return true;
  };
}, function (e, t, n) {
  "use strict";

  var r = n(0).normalizeReference;
  var i = n(0).isSpace;
  e.exports = function (e, t) {
    var n;
    var a;
    var o;
    var s;
    var l;
    var c;
    var u;
    var p;
    var d = "";
    var h = "";
    var g = e.pos;
    var f = e.posMax;
    var m = e.pos;
    var b = true;
    if (e.src.charCodeAt(e.pos) !== 91) {
      return false;
    }
    l = e.pos + 1;
    if ((s = e.md.helpers.parseLinkLabel(e, e.pos, true)) < 0) {
      return false;
    }
    if ((c = s + 1) < f && e.src.charCodeAt(c) === 40) {
      b = false;
      c++;
      for (; c < f && (a = e.src.charCodeAt(c), i(a) || a === 10); c++);
      if (c >= f) {
        return false;
      }
      m = c;
      if ((u = e.md.helpers.parseLinkDestination(e.src, c, e.posMax)).ok) {
        d = e.md.normalizeLink(u.str);
        if (e.md.validateLink(d)) {
          c = u.pos;
        } else {
          d = "";
        }
        m = c;
        for (; c < f && (a = e.src.charCodeAt(c), i(a) || a === 10); c++);
        u = e.md.helpers.parseLinkTitle(e.src, c, e.posMax);
        if (c < f && m !== c && u.ok) {
          h = u.str;
          c = u.pos;
          for (; c < f && (a = e.src.charCodeAt(c), i(a) || a === 10); c++);
        }
      }
      if (c >= f || e.src.charCodeAt(c) !== 41) {
        b = true;
      }
      c++;
    }
    if (b) {
      if (e.env.references === undefined) {
        return false;
      }
      if (c < f && e.src.charCodeAt(c) === 91) {
        m = c + 1;
        if ((c = e.md.helpers.parseLinkLabel(e, c)) >= 0) {
          o = e.src.slice(m, c++);
        } else {
          c = s + 1;
        }
      } else {
        c = s + 1;
      }
      o ||= e.src.slice(l, s);
      if (!(p = e.env.references[r(o)])) {
        e.pos = g;
        return false;
      }
      d = p.href;
      h = p.title;
    }
    if (!t) {
      e.pos = l;
      e.posMax = s;
      e.push("link_open", "a", 1).attrs = n = [["href", d]];
      if (h) {
        n.push(["title", h]);
      }
      e.md.inline.tokenize(e);
      e.push("link_close", "a", -1);
    }
    e.pos = c;
    e.posMax = f;
    return true;
  };
}, function (e, t, n) {
  "use strict";

  var r = n(0).normalizeReference;
  var i = n(0).isSpace;
  e.exports = function (e, t) {
    var n;
    var a;
    var o;
    var s;
    var l;
    var c;
    var u;
    var p;
    var d;
    var h;
    var g;
    var f;
    var m;
    var b = "";
    var x = e.pos;
    var y = e.posMax;
    if (e.src.charCodeAt(e.pos) !== 33) {
      return false;
    }
    if (e.src.charCodeAt(e.pos + 1) !== 91) {
      return false;
    }
    c = e.pos + 2;
    if ((l = e.md.helpers.parseLinkLabel(e, e.pos + 1, false)) < 0) {
      return false;
    }
    if ((u = l + 1) < y && e.src.charCodeAt(u) === 40) {
      for (u++; u < y && (a = e.src.charCodeAt(u), i(a) || a === 10); u++);
      if (u >= y) {
        return false;
      }
      m = u;
      if ((d = e.md.helpers.parseLinkDestination(e.src, u, e.posMax)).ok) {
        b = e.md.normalizeLink(d.str);
        if (e.md.validateLink(b)) {
          u = d.pos;
        } else {
          b = "";
        }
      }
      m = u;
      for (; u < y && (a = e.src.charCodeAt(u), i(a) || a === 10); u++);
      d = e.md.helpers.parseLinkTitle(e.src, u, e.posMax);
      if (u < y && m !== u && d.ok) {
        h = d.str;
        u = d.pos;
        for (; u < y && (a = e.src.charCodeAt(u), i(a) || a === 10); u++);
      } else {
        h = "";
      }
      if (u >= y || e.src.charCodeAt(u) !== 41) {
        e.pos = x;
        return false;
      }
      u++;
    } else {
      if (e.env.references === undefined) {
        return false;
      }
      if (u < y && e.src.charCodeAt(u) === 91) {
        m = u + 1;
        if ((u = e.md.helpers.parseLinkLabel(e, u)) >= 0) {
          s = e.src.slice(m, u++);
        } else {
          u = l + 1;
        }
      } else {
        u = l + 1;
      }
      s ||= e.src.slice(c, l);
      if (!(p = e.env.references[r(s)])) {
        e.pos = x;
        return false;
      }
      b = p.href;
      h = p.title;
    }
    if (!t) {
      o = e.src.slice(c, l);
      e.md.inline.parse(o, e.md, e.env, f = []);
      (g = e.push("image", "img", 0)).attrs = n = [["src", b], ["alt", ""]];
      g.children = f;
      g.content = o;
      if (h) {
        n.push(["title", h]);
      }
    }
    e.pos = u;
    e.posMax = y;
    return true;
  };
}, function (e, t, n) {
  "use strict";

  var r = /^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/;
  var i = /^([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)$/;
  e.exports = function (e, t) {
    var n;
    var a;
    var o;
    var s;
    var l;
    var c;
    var u = e.pos;
    if (e.src.charCodeAt(u) !== 60) {
      return false;
    }
    l = e.pos;
    c = e.posMax;
    while (true) {
      if (++u >= c) {
        return false;
      }
      if ((s = e.src.charCodeAt(u)) === 60) {
        return false;
      }
      if (s === 62) {
        break;
      }
    }
    n = e.src.slice(l + 1, u);
    if (i.test(n)) {
      a = e.md.normalizeLink(n);
      return !!e.md.validateLink(a) && (t || ((o = e.push("link_open", "a", 1)).attrs = [["href", a]], o.markup = "autolink", o.info = "auto", (o = e.push("text", "", 0)).content = e.md.normalizeLinkText(n), (o = e.push("link_close", "a", -1)).markup = "autolink", o.info = "auto"), e.pos += n.length + 2, true);
    } else {
      return !!r.test(n) && (a = e.md.normalizeLink("mailto:" + n), !!e.md.validateLink(a) && (t || ((o = e.push("link_open", "a", 1)).attrs = [["href", a]], o.markup = "autolink", o.info = "auto", (o = e.push("text", "", 0)).content = e.md.normalizeLinkText(n), (o = e.push("link_close", "a", -1)).markup = "autolink", o.info = "auto"), e.pos += n.length + 2, true));
    }
  };
}, function (e, t, n) {
  "use strict";

  var r = n(12).HTML_TAG_RE;
  e.exports = function (e, t) {
    var n;
    var i;
    var a;
    var o = e.pos;
    return !!e.md.options.html && !(a = e.posMax, e.src.charCodeAt(o) !== 60 || o + 2 >= a || (n = e.src.charCodeAt(o + 1)) !== 33 && n !== 63 && n !== 47 && !function (e) {
      var t = e | 32;
      return t >= 97 && t <= 122;
    }(n) || !(i = e.src.slice(o).match(r)) || (t || (e.push("html_inline", "", 0).content = e.src.slice(o, o + i[0].length)), e.pos += i[0].length, 0));
  };
}, function (e, t, n) {
  "use strict";

  var r = n(7);
  var i = n(0).has;
  var a = n(0).isValidEntityCode;
  var o = n(0).fromCodePoint;
  var s = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i;
  var l = /^&([a-z][a-z0-9]{1,31});/i;
  e.exports = function (e, t) {
    var n;
    var c;
    var u = e.pos;
    var p = e.posMax;
    if (e.src.charCodeAt(u) !== 38) {
      return false;
    }
    if (u + 1 < p) {
      if (e.src.charCodeAt(u + 1) === 35) {
        if (c = e.src.slice(u).match(s)) {
          if (!t) {
            n = c[1][0].toLowerCase() === "x" ? parseInt(c[1].slice(1), 16) : parseInt(c[1], 10);
            e.pending += a(n) ? o(n) : o(65533);
          }
          e.pos += c[0].length;
          return true;
        }
      } else if ((c = e.src.slice(u).match(l)) && i(r, c[1])) {
        if (!t) {
          e.pending += r[c[1]];
        }
        e.pos += c[0].length;
        return true;
      }
    }
    if (!t) {
      e.pending += "&";
    }
    e.pos++;
    return true;
  };
}, function (e, t, n) {
  "use strict";

  function r(e, t) {
    var n;
    var r;
    var i;
    var a;
    var o;
    var s;
    var l;
    var c;
    var u = {};
    var p = t.length;
    if (p) {
      var d = 0;
      var h = -2;
      var g = [];
      for (n = 0; n < p; n++) {
        i = t[n];
        g.push(0);
        if (t[d].marker !== i.marker || h !== i.token - 1) {
          d = n;
        }
        h = i.token;
        i.length = i.length || 0;
        if (i.close) {
          if (!u.hasOwnProperty(i.marker)) {
            u[i.marker] = [-1, -1, -1, -1, -1, -1];
          }
          o = u[i.marker][(i.open ? 3 : 0) + i.length % 3];
          s = r = d - g[d] - 1;
          for (; r > o; r -= g[r] + 1) {
            if ((a = t[r]).marker === i.marker && a.open && a.end < 0 && (l = false, (a.close || i.open) && (a.length + i.length) % 3 == 0 && (a.length % 3 == 0 && i.length % 3 == 0 || (l = true)), !l)) {
              c = r > 0 && !t[r - 1].open ? g[r - 1] + 1 : 0;
              g[n] = n - r + c;
              g[r] = c;
              i.open = false;
              a.end = n;
              a.close = false;
              s = -1;
              h = -2;
              break;
            }
          }
          if (s !== -1) {
            u[i.marker][(i.open ? 3 : 0) + (i.length || 0) % 3] = s;
          }
        }
      }
    }
  }
  e.exports = function (e) {
    var t;
    var n = e.tokens_meta;
    var i = e.tokens_meta.length;
    r(0, e.delimiters);
    t = 0;
    for (; t < i; t++) {
      if (n[t] && n[t].delimiters) {
        r(0, n[t].delimiters);
      }
    }
  };
}, function (e, t, n) {
  "use strict";

  e.exports = function (e) {
    var t;
    var n;
    var r = 0;
    var i = e.tokens;
    var a = e.tokens.length;
    for (t = n = 0; t < a; t++) {
      if (i[t].nesting < 0) {
        r--;
      }
      i[t].level = r;
      if (i[t].nesting > 0) {
        r++;
      }
      if (i[t].type === "text" && t + 1 < a && i[t + 1].type === "text") {
        i[t + 1].content = i[t].content + i[t + 1].content;
      } else {
        if (t !== n) {
          i[n] = i[t];
        }
        n++;
      }
    }
    if (t !== n) {
      i.length = n;
    }
  };
}, function (e, t, n) {
  "use strict";

  var r = n(5);
  var i = n(0).isWhiteSpace;
  var a = n(0).isPunctChar;
  var o = n(0).isMdAsciiPunct;
  function s(e, t, n, r) {
    this.src = e;
    this.env = n;
    this.md = t;
    this.tokens = r;
    this.tokens_meta = Array(r.length);
    this.pos = 0;
    this.posMax = this.src.length;
    this.level = 0;
    this.pending = "";
    this.pendingLevel = 0;
    this.cache = {};
    this.delimiters = [];
    this._prev_delimiters = [];
    this.backticks = {};
    this.backticksScanned = false;
  }
  s.prototype.pushPending = function () {
    var e = new r("text", "", 0);
    e.content = this.pending;
    e.level = this.pendingLevel;
    this.tokens.push(e);
    this.pending = "";
    return e;
  };
  s.prototype.push = function (e, t, n) {
    if (this.pending) {
      this.pushPending();
    }
    var i = new r(e, t, n);
    var a = null;
    if (n < 0) {
      this.level--;
      this.delimiters = this._prev_delimiters.pop();
    }
    i.level = this.level;
    if (n > 0) {
      this.level++;
      this._prev_delimiters.push(this.delimiters);
      this.delimiters = [];
      a = {
        delimiters: this.delimiters
      };
    }
    this.pendingLevel = this.level;
    this.tokens.push(i);
    this.tokens_meta.push(a);
    return i;
  };
  s.prototype.scanDelims = function (e, t) {
    var n;
    var r;
    var s;
    var l;
    var c;
    var u;
    var p;
    var d;
    var h;
    var g = e;
    var f = true;
    var m = true;
    var b = this.posMax;
    var x = this.src.charCodeAt(e);
    for (n = e > 0 ? this.src.charCodeAt(e - 1) : 32; g < b && this.src.charCodeAt(g) === x;) {
      g++;
    }
    s = g - e;
    r = g < b ? this.src.charCodeAt(g) : 32;
    p = o(n) || a(String.fromCharCode(n));
    h = o(r) || a(String.fromCharCode(r));
    u = i(n);
    if (d = i(r)) {
      f = false;
    } else if (h) {
      if (!u && !p) {
        f = false;
      }
    }
    if (u) {
      m = false;
    } else if (p) {
      if (!d && !h) {
        m = false;
      }
    }
    if (t) {
      l = f;
      c = m;
    } else {
      l = f && (!m || p);
      c = m && (!f || h);
    }
    return {
      can_open: l,
      can_close: c,
      length: s
    };
  };
  s.prototype.Token = r;
  e.exports = s;
}, function (e, t, n) {
  "use strict";

  function r(e) {
    Array.prototype.slice.call(arguments, 1).forEach(function (t) {
      if (t) {
        Object.keys(t).forEach(function (n) {
          e[n] = t[n];
        });
      }
    });
    return e;
  }
  function i(e) {
    return Object.prototype.toString.call(e);
  }
  function a(e) {
    return i(e) === "[object Function]";
  }
  function o(e) {
    return e.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
  }
  var s = {
    fuzzyLink: true,
    fuzzyEmail: true,
    fuzzyIP: false
  };
  var l = {
    "http:": {
      validate: function (e, t, n) {
        var r = e.slice(t);
        n.re.http ||= new RegExp("^\\/\\/" + n.re.src_auth + n.re.src_host_port_strict + n.re.src_path, "i");
        if (n.re.http.test(r)) {
          return r.match(n.re.http)[0].length;
        } else {
          return 0;
        }
      }
    },
    "https:": "http:",
    "ftp:": "http:",
    "//": {
      validate: function (e, t, n) {
        var r = e.slice(t);
        n.re.no_http ||= new RegExp("^" + n.re.src_auth + "(?:localhost|(?:(?:" + n.re.src_domain + ")\\.)+" + n.re.src_domain_root + ")" + n.re.src_port + n.re.src_host_terminator + n.re.src_path, "i");
        if (n.re.no_http.test(r)) {
          if (t >= 3 && e[t - 3] === ":" || t >= 3 && e[t - 3] === "/") {
            return 0;
          } else {
            return r.match(n.re.no_http)[0].length;
          }
        } else {
          return 0;
        }
      }
    },
    "mailto:": {
      validate: function (e, t, n) {
        var r = e.slice(t);
        n.re.mailto ||= new RegExp("^" + n.re.src_email_name + "@" + n.re.src_host_strict, "i");
        if (n.re.mailto.test(r)) {
          return r.match(n.re.mailto)[0].length;
        } else {
          return 0;
        }
      }
    }
  };
  var c = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");
  function u(e) {
    var t = e.re = n(69)(e.__opts__);
    var r = e.__tlds__.slice();
    function s(e) {
      return e.replace("%TLDS%", t.src_tlds);
    }
    e.onCompile();
    if (!e.__tlds_replaced__) {
      r.push("a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]");
    }
    r.push(t.src_xn);
    t.src_tlds = r.join("|");
    t.email_fuzzy = RegExp(s(t.tpl_email_fuzzy), "i");
    t.link_fuzzy = RegExp(s(t.tpl_link_fuzzy), "i");
    t.link_no_ip_fuzzy = RegExp(s(t.tpl_link_no_ip_fuzzy), "i");
    t.host_fuzzy_test = RegExp(s(t.tpl_host_fuzzy_test), "i");
    var l = [];
    function c(e, t) {
      throw new Error("(LinkifyIt) Invalid schema \"" + e + "\": " + t);
    }
    e.__compiled__ = {};
    Object.keys(e.__schemas__).forEach(function (t) {
      var n = e.__schemas__[t];
      if (n !== null) {
        var r = {
          validate: null,
          link: null
        };
        e.__compiled__[t] = r;
        if (i(n) === "[object Object]") {
          if (function (e) {
            return i(e) === "[object RegExp]";
          }(n.validate)) {
            r.validate = function (e) {
              return function (t, n) {
                var r = t.slice(n);
                if (e.test(r)) {
                  return r.match(e)[0].length;
                } else {
                  return 0;
                }
              };
            }(n.validate);
          } else if (a(n.validate)) {
            r.validate = n.validate;
          } else {
            c(t, n);
          }
          if (a(n.normalize)) {
            r.normalize = n.normalize;
          } else if (n.normalize) {
            c(t, n);
          } else {
            r.normalize = function (e, t) {
              t.normalize(e);
            };
          }
          return;
        }
        if (!function (e) {
          return i(e) === "[object String]";
        }(n)) {
          c(t, n);
        } else {
          l.push(t);
        }
      }
    });
    l.forEach(function (t) {
      if (e.__compiled__[e.__schemas__[t]]) {
        e.__compiled__[t].validate = e.__compiled__[e.__schemas__[t]].validate;
        e.__compiled__[t].normalize = e.__compiled__[e.__schemas__[t]].normalize;
      }
    });
    e.__compiled__[""] = {
      validate: null,
      normalize: function (e, t) {
        t.normalize(e);
      }
    };
    var u = Object.keys(e.__compiled__).filter(function (t) {
      return t.length > 0 && e.__compiled__[t];
    }).map(o).join("|");
    e.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + u + ")", "i");
    e.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + u + ")", "ig");
    e.re.pretest = RegExp("(" + e.re.schema_test.source + ")|(" + e.re.host_fuzzy_test.source + ")|@", "i");
    (function (e) {
      e.__index__ = -1;
      e.__text_cache__ = "";
    })(e);
  }
  function p(e, t) {
    var n = e.__index__;
    var r = e.__last_index__;
    var i = e.__text_cache__.slice(n, r);
    this.schema = e.__schema__.toLowerCase();
    this.index = n + t;
    this.lastIndex = r + t;
    this.raw = i;
    this.text = i;
    this.url = i;
  }
  function d(e, t) {
    var n = new p(e, t);
    e.__compiled__[n.schema].normalize(n, e);
    return n;
  }
  function h(e, t) {
    if (!(this instanceof h)) {
      return new h(e, t);
    }
    var n;
    if (!t) {
      n = e;
      if (Object.keys(n || {}).reduce(function (e, t) {
        return e || s.hasOwnProperty(t);
      }, false)) {
        t = e;
        e = {};
      }
    }
    this.__opts__ = r({}, s, t);
    this.__index__ = -1;
    this.__last_index__ = -1;
    this.__schema__ = "";
    this.__text_cache__ = "";
    this.__schemas__ = r({}, l, e);
    this.__compiled__ = {};
    this.__tlds__ = c;
    this.__tlds_replaced__ = false;
    this.re = {};
    u(this);
  }
  h.prototype.add = function (e, t) {
    this.__schemas__[e] = t;
    u(this);
    return this;
  };
  h.prototype.set = function (e) {
    this.__opts__ = r(this.__opts__, e);
    return this;
  };
  h.prototype.test = function (e) {
    this.__text_cache__ = e;
    this.__index__ = -1;
    if (!e.length) {
      return false;
    }
    var t;
    var n;
    var r;
    var i;
    var a;
    var o;
    var s;
    var l;
    if (this.re.schema_test.test(e)) {
      for ((s = this.re.schema_search).lastIndex = 0; (t = s.exec(e)) !== null;) {
        if (i = this.testSchemaAt(e, t[2], s.lastIndex)) {
          this.__schema__ = t[2];
          this.__index__ = t.index + t[1].length;
          this.__last_index__ = t.index + t[0].length + i;
          break;
        }
      }
    }
    if (this.__opts__.fuzzyLink && this.__compiled__["http:"] && (l = e.search(this.re.host_fuzzy_test)) >= 0 && (this.__index__ < 0 || l < this.__index__) && (n = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null) {
      a = n.index + n[1].length;
      if (this.__index__ < 0 || a < this.__index__) {
        this.__schema__ = "";
        this.__index__ = a;
        this.__last_index__ = n.index + n[0].length;
      }
    }
    if (this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && e.indexOf("@") >= 0 && (r = e.match(this.re.email_fuzzy)) !== null) {
      a = r.index + r[1].length;
      o = r.index + r[0].length;
      if (this.__index__ < 0 || a < this.__index__ || a === this.__index__ && o > this.__last_index__) {
        this.__schema__ = "mailto:";
        this.__index__ = a;
        this.__last_index__ = o;
      }
    }
    return this.__index__ >= 0;
  };
  h.prototype.pretest = function (e) {
    return this.re.pretest.test(e);
  };
  h.prototype.testSchemaAt = function (e, t, n) {
    if (this.__compiled__[t.toLowerCase()]) {
      return this.__compiled__[t.toLowerCase()].validate(e, n, this);
    } else {
      return 0;
    }
  };
  h.prototype.match = function (e) {
    var t = 0;
    var n = [];
    if (this.__index__ >= 0 && this.__text_cache__ === e) {
      n.push(d(this, t));
      t = this.__last_index__;
    }
    for (var r = t ? e.slice(t) : e; this.test(r);) {
      n.push(d(this, t));
      r = r.slice(this.__last_index__);
      t += this.__last_index__;
    }
    if (n.length) {
      return n;
    } else {
      return null;
    }
  };
  h.prototype.tlds = function (e, t) {
    e = Array.isArray(e) ? e : [e];
    if (t) {
      this.__tlds__ = this.__tlds__.concat(e).sort().filter(function (e, t, n) {
        return e !== n[t - 1];
      }).reverse();
      u(this);
      return this;
    } else {
      this.__tlds__ = e.slice();
      this.__tlds_replaced__ = true;
      u(this);
      return this;
    }
  };
  h.prototype.normalize = function (e) {
    if (!e.schema) {
      e.url = "http://" + e.url;
    }
    if (e.schema === "mailto:" && !/^mailto:/i.test(e.url)) {
      e.url = "mailto:" + e.url;
    }
  };
  h.prototype.onCompile = function () {};
  e.exports = h;
}, function (e, t, n) {
  "use strict";

  e.exports = function (e) {
    var t = {};
    t.src_Any = n(9).source;
    t.src_Cc = n(10).source;
    t.src_Z = n(11).source;
    t.src_P = n(3).source;
    t.src_ZPCc = [t.src_Z, t.src_P, t.src_Cc].join("|");
    t.src_ZCc = [t.src_Z, t.src_Cc].join("|");
    t.src_pseudo_letter = "(?:(?![><｜]|" + t.src_ZPCc + ")" + t.src_Any + ")";
    t.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)";
    t.src_auth = "(?:(?:(?!" + t.src_ZCc + "|[@/\\[\\]()]).)+@)?";
    t.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?";
    t.src_host_terminator = "(?=$|[><｜]|" + t.src_ZPCc + ")(?!-|_|:\\d|\\.-|\\.(?!$|" + t.src_ZPCc + "))";
    t.src_path = "(?:[/?#](?:(?!" + t.src_ZCc + "|[><｜]|[()[\\]{}.,\"'?!\\-]).|\\[(?:(?!" + t.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + t.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + t.src_ZCc + "|[}]).)*\\}|\\\"(?:(?!" + t.src_ZCc + "|[\"]).)+\\\"|\\'(?:(?!" + t.src_ZCc + "|[']).)+\\'|\\'(?=" + t.src_pseudo_letter + "|[-]).|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + t.src_ZCc + "|[.]).|" + (e && e["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + "\\,(?!" + t.src_ZCc + ").|\\!+(?!" + t.src_ZCc + "|[!]).|\\?(?!" + t.src_ZCc + "|[?]).)+|\\/)?";
    t.src_email_name = "[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\\"\\.a-zA-Z0-9_]*";
    t.src_xn = "xn--[a-z0-9\\-]{1,59}";
    t.src_domain_root = "(?:" + t.src_xn + "|" + t.src_pseudo_letter + "{1,63})";
    t.src_domain = "(?:" + t.src_xn + "|(?:" + t.src_pseudo_letter + ")|(?:" + t.src_pseudo_letter + "(?:-|" + t.src_pseudo_letter + "){0,61}" + t.src_pseudo_letter + "))";
    t.src_host = "(?:(?:(?:(?:" + t.src_domain + ")\\.)*" + t.src_domain + "))";
    t.tpl_host_fuzzy = "(?:" + t.src_ip4 + "|(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%)))";
    t.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%))";
    t.src_host_strict = t.src_host + t.src_host_terminator;
    t.tpl_host_fuzzy_strict = t.tpl_host_fuzzy + t.src_host_terminator;
    t.src_host_port_strict = t.src_host + t.src_port + t.src_host_terminator;
    t.tpl_host_port_fuzzy_strict = t.tpl_host_fuzzy + t.src_port + t.src_host_terminator;
    t.tpl_host_port_no_ip_fuzzy_strict = t.tpl_host_no_ip_fuzzy + t.src_port + t.src_host_terminator;
    t.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + t.src_ZPCc + "|>|$))";
    t.tpl_email_fuzzy = "(^|[><｜]|\"|\\(|" + t.src_ZCc + ")(" + t.src_email_name + "@" + t.tpl_host_fuzzy_strict + ")";
    t.tpl_link_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_fuzzy_strict + t.src_path + ")";
    t.tpl_link_no_ip_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_no_ip_fuzzy_strict + t.src_path + ")";
    return t;
  };
}, function (e, t, n) {
  (function (e, r) {
    var i;
    (function (a) {
      if (t) {
        t.nodeType;
      }
      if (e) {
        e.nodeType;
      }
      var o = typeof r == "object" && r;
      if (o.global !== o && o.window !== o) {
        o.self;
      }
      var s;
      var l = 2147483647;
      var c = /^xn--/;
      var u = /[^\x20-\x7E]/;
      var p = /[\x2E\u3002\uFF0E\uFF61]/g;
      var d = {
        overflow: "Overflow: input needs wider integers to process",
        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
        "invalid-input": "Invalid input"
      };
      var h = Math.floor;
      var g = String.fromCharCode;
      function f(e) {
        throw new RangeError(d[e]);
      }
      function m(e, t) {
        for (var n = e.length, r = []; n--;) {
          r[n] = t(e[n]);
        }
        return r;
      }
      function b(e, t) {
        var n = e.split("@");
        var r = "";
        if (n.length > 1) {
          r = n[0] + "@";
          e = n[1];
        }
        return r + m((e = e.replace(p, ".")).split("."), t).join(".");
      }
      function x(e) {
        for (var t, n, r = [], i = 0, a = e.length; i < a;) {
          if ((t = e.charCodeAt(i++)) >= 55296 && t <= 56319 && i < a) {
            if (((n = e.charCodeAt(i++)) & 64512) == 56320) {
              r.push(((t & 1023) << 10) + (n & 1023) + 65536);
            } else {
              r.push(t);
              i--;
            }
          } else {
            r.push(t);
          }
        }
        return r;
      }
      function y(e) {
        return m(e, function (e) {
          var t = "";
          if (e > 65535) {
            t += g((e -= 65536) >>> 10 & 1023 | 55296);
            e = e & 1023 | 56320;
          }
          return t + g(e);
        }).join("");
      }
      function v(e, t) {
        return e + 22 + (e < 26) * 75 - ((t != 0) << 5);
      }
      function w(e, t, n) {
        var r = 0;
        e = n ? h(e / 700) : e >> 1;
        e += h(e / t);
        for (; e > 455; r += 36) {
          e = h(e / 35);
        }
        return h(r + e * 36 / (e + 38));
      }
      function A(e) {
        var t;
        var n;
        var r;
        var i;
        var a;
        var o;
        var s;
        var c;
        var u;
        var p;
        var d;
        var g = [];
        var m = e.length;
        var b = 0;
        var x = 128;
        var v = 72;
        if ((n = e.lastIndexOf("-")) < 0) {
          n = 0;
        }
        r = 0;
        for (; r < n; ++r) {
          if (e.charCodeAt(r) >= 128) {
            f("not-basic");
          }
          g.push(e.charCodeAt(r));
        }
        for (i = n > 0 ? n + 1 : 0; i < m;) {
          a = b;
          o = 1;
          s = 36;
          for (; i >= m && f("invalid-input"), ((c = (d = e.charCodeAt(i++)) - 48 < 10 ? d - 22 : d - 65 < 26 ? d - 65 : d - 97 < 26 ? d - 97 : 36) >= 36 || c > h((l - b) / o)) && f("overflow"), b += c * o, !(c < (u = s <= v ? 1 : s >= v + 26 ? 26 : s - v)); s += 36) {
            if (o > h(l / (p = 36 - u))) {
              f("overflow");
            }
            o *= p;
          }
          v = w(b - a, t = g.length + 1, a == 0);
          if (h(b / t) > l - x) {
            f("overflow");
          }
          x += h(b / t);
          b %= t;
          g.splice(b++, 0, x);
        }
        return y(g);
      }
      function k(e) {
        var t;
        var n;
        var r;
        var i;
        var a;
        var o;
        var s;
        var c;
        var u;
        var p;
        var d;
        var m;
        var b;
        var y;
        var A;
        var k = [];
        m = (e = x(e)).length;
        t = 128;
        n = 0;
        a = 72;
        o = 0;
        for (; o < m; ++o) {
          if ((d = e[o]) < 128) {
            k.push(g(d));
          }
        }
        r = i = k.length;
        if (i) {
          k.push("-");
        }
        while (r < m) {
          s = l;
          o = 0;
          for (; o < m; ++o) {
            if ((d = e[o]) >= t && d < s) {
              s = d;
            }
          }
          if (s - t > h((l - n) / (b = r + 1))) {
            f("overflow");
          }
          n += (s - t) * b;
          t = s;
          o = 0;
          for (; o < m; ++o) {
            if ((d = e[o]) < t && ++n > l) {
              f("overflow");
            }
            if (d == t) {
              c = n;
              u = 36;
              for (; !(c < (p = u <= a ? 1 : u >= a + 26 ? 26 : u - a)); u += 36) {
                A = c - p;
                y = 36 - p;
                k.push(g(v(p + A % y, 0)));
                c = h(A / y);
              }
              k.push(g(v(c, 0)));
              a = w(n, b, r == i);
              n = 0;
              ++r;
            }
          }
          ++n;
          ++t;
        }
        return k.join("");
      }
      s = {
        version: "1.4.1",
        ucs2: {
          decode: x,
          encode: y
        },
        decode: A,
        encode: k,
        toASCII: function (e) {
          return b(e, function (e) {
            if (u.test(e)) {
              return "xn--" + k(e);
            } else {
              return e;
            }
          });
        },
        toUnicode: function (e) {
          return b(e, function (e) {
            if (c.test(e)) {
              return A(e.slice(4).toLowerCase());
            } else {
              return e;
            }
          });
        }
      };
      if ((i = function () {
        return s;
      }.call(t, n, t, e)) !== undefined) {
        e.exports = i;
      }
    })();
  }).call(this, n(71)(e), n(72));
}, function (e, t) {
  e.exports = function (e) {
    if (!e.webpackPolyfill) {
      e.deprecate = function () {};
      e.paths = [];
      e.children ||= [];
      Object.defineProperty(e, "loaded", {
        enumerable: true,
        get: function () {
          return e.l;
        }
      });
      Object.defineProperty(e, "id", {
        enumerable: true,
        get: function () {
          return e.i;
        }
      });
      e.webpackPolyfill = 1;
    }
    return e;
  };
}, function (e, t) {
  var n;
  n = function () {
    return this;
  }();
  try {
    n = n || new Function("return this")();
  } catch (e) {
    if (typeof window == "object") {
      n = window;
    }
  }
  e.exports = n;
}, function (e, t, n) {
  "use strict";

  e.exports = {
    options: {
      html: false,
      xhtmlOut: false,
      breaks: false,
      langPrefix: "language-",
      linkify: false,
      typographer: false,
      quotes: "“”‘’",
      highlight: null,
      maxNesting: 100
    },
    components: {
      core: {},
      block: {},
      inline: {}
    }
  };
}, function (e, t, n) {
  "use strict";

  e.exports = {
    options: {
      html: false,
      xhtmlOut: false,
      breaks: false,
      langPrefix: "language-",
      linkify: false,
      typographer: false,
      quotes: "“”‘’",
      highlight: null,
      maxNesting: 20
    },
    components: {
      core: {
        rules: ["normalize", "block", "inline"]
      },
      block: {
        rules: ["paragraph"]
      },
      inline: {
        rules: ["text"],
        rules2: ["balance_pairs", "text_collapse"]
      }
    }
  };
}, function (e, t, n) {
  "use strict";

  e.exports = {
    options: {
      html: true,
      xhtmlOut: true,
      breaks: false,
      langPrefix: "language-",
      linkify: false,
      typographer: false,
      quotes: "“”‘’",
      highlight: null,
      maxNesting: 20
    },
    components: {
      core: {
        rules: ["normalize", "block", "inline"]
      },
      block: {
        rules: ["blockquote", "code", "fence", "heading", "hr", "html_block", "lheading", "list", "reference", "paragraph"]
      },
      inline: {
        rules: ["autolink", "backticks", "emphasis", "entity", "escape", "html_inline", "image", "link", "newline", "text"],
        rules2: ["balance_pairs", "emphasis", "text_collapse"]
      }
    }
  };
},, function (e, t, n) {
  "use strict";

  n.r(t);
  n.d(t, "default", function () {
    return a;
  });
  var r = n(17);
  var i = n(2);
  function a(e) {
    var t = e === undefined ? {} : e;
    var n = t.Prism;
    var a = t.baseConfig;
    var o = t.codeBlockClass;
    var s = t.codeHighlightExtensionMap;
    var l = s === undefined ? {} : s;
    var c = Object(r.default)(a);
    c.extend(function (e) {
      e.set({
        highlight: Object(i.a)({
          codeHighlightExtensionMap: l,
          hasLang: function (e) {
            return n.languages[e];
          },
          codeBlockClass: o,
          highlight: function (e, t) {
            return n.highlight(e, n.languages[t], t);
          }
        })
      });
    });
    return {
      previewClass: "markdown-body",
      extend: function (e) {
        c.extend(function () {
          for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++) {
            r[i] = arguments[i];
          }
          e.apply(undefined, r.concat([n]));
        });
      },
      markdownParser: c.markdownParser
    };
  }
},, function (e, t, n) {
  "use strict";

  n.r(t);
  var r = n(1);
  var i = n(77);
  t.default = function (e, t = {}) {
    var n = t;
    var a = n.extend;
    var o = n.config;
    var s = n.codeHighlightExtensionMap;
    var l = function (e) {
      var t = Object(i.default)({
        Prism: e.Prism,
        codeHighlightExtensionMap: e.codeHighlightExtensionMap || {},
        codeBlockClass: e.codeBlockClass || function (e) {
          return "v-md-prism-" + e;
        },
        baseConfig: Object(r.a)({
          link: {
            openLinkIcon: true
          }
        }, e.baseConfig)
      });
      return {
        previewClass: "vuepress-markdown-body",
        extend: function (e) {
          t.extend(e);
        },
        markdownParser: t.markdownParser
      };
    }({
      Prism: n.Prism,
      baseConfig: o,
      codeHighlightExtensionMap: s
    });
    if (a) {
      l.extend(a);
    }
    e.theme(l);
  };
}, function (e, t, n) {}, function (e, t, n) {
  "use strict";

  e.exports = function (e, t, n) {
    var r = (n = n || {}).marker || ":";
    var i = r.charCodeAt(0);
    var a = r.length;
    var o = n.validate || function (e) {
      return e.trim().split(" ", 2)[0] === t;
    };
    var s = n.render || function (e, n, r, i, a) {
      if (e[n].nesting === 1) {
        e[n].attrJoin("class", t);
      }
      return a.renderToken(e, n, r, i, a);
    };
    e.block.ruler.before("fence", "container_" + t, function (e, n, s, l) {
      var c;
      var u;
      var p;
      var d;
      var h;
      var g;
      var f;
      var m;
      var b = false;
      var x = e.bMarks[n] + e.tShift[n];
      var y = e.eMarks[n];
      if (i !== e.src.charCodeAt(x)) {
        return false;
      }
      for (c = x + 1; c <= y && r[(c - x) % a] === e.src[c]; c++);
      if ((p = Math.floor((c - x) / a)) < 3) {
        return false;
      }
      c -= (c - x) % a;
      d = e.src.slice(x, c);
      h = e.src.slice(c, y);
      if (!o(h, d)) {
        return false;
      }
      if (l) {
        return true;
      }
      for (u = n; !(++u >= s) && (!((x = e.bMarks[u] + e.tShift[u]) < (y = e.eMarks[u])) || !(e.sCount[u] < e.blkIndent));) {
        if (i === e.src.charCodeAt(x) && !(e.sCount[u] - e.blkIndent >= 4)) {
          for (c = x + 1; c <= y && r[(c - x) % a] === e.src[c]; c++);
          if (!(Math.floor((c - x) / a) < p) && !(c -= (c - x) % a, (c = e.skipSpaces(c)) < y)) {
            b = true;
            break;
          }
        }
      }
      f = e.parentType;
      m = e.lineMax;
      e.parentType = "container";
      e.lineMax = u;
      (g = e.push("container_" + t + "_open", "div", 1)).markup = d;
      g.block = true;
      g.info = h;
      g.map = [n, u];
      e.md.block.tokenize(e, n + 1, u);
      (g = e.push("container_" + t + "_close", "div", -1)).markup = e.src.slice(x, c);
      g.block = true;
      e.parentType = f;
      e.lineMax = m;
      e.line = u + (b ? 1 : 0);
      return true;
    }, {
      alt: ["paragraph", "reference", "blockquote", "list"]
    });
    e.renderer.rules["container_" + t + "_open"] = s;
    e.renderer.rules["container_" + t + "_close"] = s;
  };
},,, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {
  "use strict";

  n.r(t);
  var r = n(79);
  var i = n(81);
  var a = n.n(i);
  function o(e) {
    if (typeof e == "string") {
      return function () {
        return e;
      };
    } else {
      return e;
    }
  }
  function s(e, t) {
    var n;
    var r;
    var i = t.validate;
    var s = t.marker;
    var l = t.render;
    var c = t.type;
    var u = t.before;
    var p = t.after;
    var d = t.defaultTitle;
    var h = d === undefined ? c.toUpperCase() : d;
    var g = t.blockClass;
    var f = g === undefined ? "custom-block" : g;
    if (c) {
      if (!l) {
        if (u !== undefined && p !== undefined) {
          n = o(u);
          r = o(p);
        } else {
          n = function (e) {
            return "<div class=\"" + f + " " + c + "\">" + (e ? "<p class=\"" + f + "-title\">" + e + "</p>" : "") + "\n";
          };
          r = function () {
            return "</div>\n";
          };
        }
        l = function (e, t) {
          var i = e[t];
          var a = i.info.trim().slice(c.length).trim();
          if (!a && h) {
            a = typeof h == "function" ? h() : h;
          }
          if (i.nesting === 1) {
            return n(a);
          } else {
            return r(a);
          }
        };
      }
      e.use(a.a, c, {
        render: l,
        validate: i,
        marker: s
      });
    }
  }
  function l(e) {
    e.extendMarkdown(function (t) {
      function n() {
        var t = e.lang.config;
        return t.langConfig[t.lang];
      }
      s(t, {
        type: "tip",
        defaultTitle: function () {
          return n().tip.tip.defaultTitle;
        },
        blockClass: "v-md-plugin-tip"
      });
      s(t, {
        type: "warning",
        defaultTitle: function () {
          return n().tip.warning.defaultTitle;
        },
        blockClass: "v-md-plugin-tip"
      });
      s(t, {
        type: "danger",
        defaultTitle: function () {
          return n().tip.danger.defaultTitle;
        },
        blockClass: "v-md-plugin-tip"
      });
      s(t, {
        type: "details",
        defaultTitle: function () {
          return n().tip.details.defaultTitle;
        },
        before: function (e) {
          return "<details class=\"v-md-plugin-tip details\">" + (e ? "<summary>" + e + "</summary>" : "") + "\n";
        },
        after: function () {
          return "</details>\n";
        }
      });
    });
    e.lang.add({
      "zh-CN": {
        tip: {
          tip: {
            defaultTitle: "提示"
          },
          warning: {
            defaultTitle: "注意"
          },
          danger: {
            defaultTitle: "警告"
          },
          details: {
            defaultTitle: "详细信息"
          }
        }
      },
      "en-US": {
        tip: {
          tip: {
            defaultTitle: "TIP"
          },
          warning: {
            defaultTitle: "WARNING"
          },
          danger: {
            defaultTitle: "DANGER"
          },
          details: {
            defaultTitle: "DETAILS"
          }
        }
      }
    });
  }
  n(80);
  n(84);
  n(85);
  t.default = {
    install: function (e, t) {
      var n;
      var i;
      var a;
      var o;
      var s;
      var c;
      var u;
      var p;
      var d;
      a = (i = n === undefined ? {} : n).name;
      o = a === undefined ? "tip" : a;
      c = (s = i.icon) === undefined ? "v-md-icon-tip" : s;
      u = i.text;
      p = function (e, t = "tip") {
        e.insert(function (n) {
          var r = n || e.langConfig.tip[t].placeholder;
          return {
            text: "::: " + t + "\n  " + r + "\n:::",
            selected: r
          };
        });
      };
      d = {
        title: function (e) {
          return e.langConfig.tip.toolbar;
        },
        icon: c,
        text: u,
        menus: [{
          name: "tip",
          text: function (e) {
            return e.langConfig.tip.tip.toolbar;
          },
          action: function (e) {
            e.execCommand(o);
          }
        }, {
          name: "warning",
          text: function (e) {
            return e.langConfig.tip.warning.toolbar;
          },
          action: function (e) {
            e.execCommand(o, "warning");
          }
        }, {
          name: "danger",
          text: function (e) {
            return e.langConfig.tip.danger.toolbar;
          },
          action: function (e) {
            e.execCommand(o, "danger");
          }
        }, {
          name: "details",
          text: function (e) {
            return e.langConfig.tip.details.toolbar;
          },
          action: function (e) {
            e.execCommand(o, "details");
          }
        }]
      };
      var h = {
        install: function (e) {
          if (e.name === "v-md-editor") {
            e.command(o, p);
            e.toolbar(o, d);
            e.lang.add({
              "zh-CN": {
                tip: {
                  toolbar: "插入提示",
                  tip: {
                    toolbar: "提示",
                    placeholder: "在此输入内容"
                  },
                  warning: {
                    toolbar: "注意",
                    placeholder: "在此输入内容"
                  },
                  danger: {
                    toolbar: "警告",
                    placeholder: "在此输入内容"
                  },
                  details: {
                    toolbar: "详细信息",
                    placeholder: "内容"
                  }
                }
              },
              "en-US": {
                tip: {
                  toolbar: "Insert tip",
                  tip: {
                    toolbar: "Tip",
                    placeholder: "Insert content"
                  },
                  warning: {
                    toolbar: "Warning",
                    placeholder: "Insert content"
                  },
                  danger: {
                    toolbar: "Danger",
                    placeholder: "Insert content"
                  },
                  details: {
                    toolbar: "Details",
                    placeholder: "Content"
                  }
                }
              }
            });
          }
          e.vMdParser.use(l);
        }
      };
      e.vMdParser.use(r.default, t);
      e.use(h);
    }
  };
}]).default;