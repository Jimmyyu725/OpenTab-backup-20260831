var r;
if (typeof self != "undefined") {
  self;
}
r = function (e) {
  return function (e) {
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
    return n(n.s = 9);
  }([function (t, n) {
    t.exports = e;
  },, function (e, t, n) {
    "use strict";

    n.d(t, "f", function () {
      return i;
    });
    n.d(t, "a", function () {
      return o;
    });
    n.d(t, "c", function () {
      return s;
    });
    n.d(t, "d", function () {
      return l;
    });
    n.d(t, "e", function () {
      return c;
    });
    n.d(t, "b", function () {
      return u;
    });
    var r = Object.prototype.toString;
    function i(e) {
      return r.call(e) === "[object Object]";
    }
    function a(e, t) {
      Object.keys(t).forEach(function (n) {
        e[n] = t[n];
      });
      return e;
    }
    function o(e) {
      var t = {};
      for (var n = 0; n < e.length; n++) {
        if (e[n]) {
          a(t, e[n]);
        }
      }
      return t;
    }
    function s(e, t) {
      t.keys().forEach(function (n) {
        e[n] = t(n);
      });
    }
    var l = typeof window != "undefined";
    function c(e) {
      return /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(e);
    }
    function u(e) {
      var t;
      var n;
      var r = e.selected;
      var i = e.InsertGetter;
      var a = e.selectedGetter;
      var o = a === undefined ? function (e) {
        return e;
      } : a;
      var s = e.ignoreEmptyLine;
      var l = s === undefined || s;
      if (r) {
        n = o(r);
        t = i(r, 1);
        if (r.indexOf("\n") !== -1) {
          n = t = r.split("\n").map(function (e, t) {
            if (l && !e) {
              return "";
            } else {
              return i(e, t + 1).replace(o(null), "");
            }
          }).join("\n");
        }
      } else {
        t = i(null, 1);
        n = o(r);
      }
      return {
        insertContent: t,
        newSelected: n
      };
    }
  }, function (e, t, n) {
    "use strict";

    n.d(t, "c", function () {
      return r;
    });
    n.d(t, "b", function () {
      return i;
    });
    n.d(t, "a", function () {
      return a;
    });
    var r = "data-v-md-line";
    var i = "data-v-md-heading";
    var a = "data-v-md-anchor";
  },, function (e, t, n) {
    "use strict";

    function r() {
      r = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) {
            if (Object.prototype.hasOwnProperty.call(n, r)) {
              e[r] = n[r];
            }
          }
        }
        return e;
      };
      return r.apply(this, arguments);
    }
    n.d(t, "a", function () {
      return r;
    });
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      var t = 0;
      if (e === window) {
        t = e.pageYOffset;
      } else if (e) {
        t = e.scrollTop;
      }
      return t;
    }
    function i(e, t) {
      if (e === window) {
        window.scrollTo(window.pageYOffset, t);
      } else if (e) {
        e.scrollTop = t;
      }
    }
    n.d(t, "a", function () {
      return r;
    });
    n.d(t, "b", function () {
      return i;
    });
  }, function (e, t, n) {
    "use strict";

    var r = n(5);
    var i = n(11);
    var a = n.n(i);
    var o = {
      svg: [],
      altGlyph: [],
      altGlyphDef: [],
      altGlyphItem: [],
      animate: [],
      animateColor: [],
      animateMotion: [],
      animateTransform: [],
      circle: [],
      clipPath: [],
      "color-profile": [],
      cursor: [],
      "definition-src": [],
      defs: [],
      desc: [],
      ellipse: [],
      feBlend: [],
      feColorMatrix: [],
      feComponentTransfer: [],
      feComposite: [],
      feConvolveMatrix: [],
      feDiffuseLighting: [],
      feDisplacementMap: [],
      feDistantLight: [],
      feFlood: [],
      feFuncA: [],
      feFuncB: [],
      feFuncG: [],
      feFuncR: [],
      feGaussianBlur: [],
      feImage: [],
      feMerge: [],
      feMergeNode: [],
      feMorphology: [],
      feOffset: [],
      fePointLight: [],
      feSpecularLighting: [],
      feSpotLight: [],
      feTile: [],
      feTurbulence: [],
      filter: [],
      font: [],
      foreignObject: [],
      g: [],
      glyph: [],
      glyphRef: [],
      hkern: [],
      image: [],
      line: [],
      linearGradient: [],
      marker: [],
      mask: [],
      metadata: [],
      "missing-glyph": [],
      mpath: [],
      path: [],
      pattern: [],
      polygon: [],
      polyline: [],
      radialGradient: [],
      rect: [],
      set: [],
      stop: [],
      style: [],
      switch: [],
      symbol: [],
      text: [],
      textPath: [],
      title: [],
      tref: [],
      tspan: [],
      use: [],
      view: [],
      vkern: []
    };
    var s = {
      math: [],
      annotation: [],
      semantics: [],
      mtext: [],
      mn: [],
      mo: [],
      mi: [],
      mspace: [],
      mover: [],
      munder: [],
      munderover: [],
      msup: [],
      msub: [],
      msubsup: [],
      mfrac: [],
      mroot: [],
      msqrt: [],
      mtable: [],
      mtr: [],
      mtd: [],
      mlabeledtr: [],
      mrow: [],
      menclose: [],
      mstyle: [],
      mpadded: [],
      mphantom: [],
      mglyph: []
    };
    var l = ["style", "align", "class", "id"];
    var c = ["data-"];
    var u = Object(r.a)({}, {
      input: ["type"],
      ol: ["reversed", "start", "type"],
      button: ["type"],
      summary: []
    }, s, o);
    var p = {
      whiteList: Object(r.a)({}, a.a.getDefaultWhiteList(), u),
      onIgnoreTagAttr: function (e, t, n) {
        if (o[e] || s[e] || l.find(function (e) {
          return e === t;
        }) || c.find(function (e) {
          return t.startsWith(e);
        })) {
          return t + "=\"" + a.a.escapeAttrValue(n) + "\"";
        }
      }
    };
    var d = new a.a.FilterXSS(p);
    d.extend = function (e) {
      var t = d.options;
      Object.keys(e).forEach(function (n) {
        if (n === "whiteList") {
          Object.keys(e.whiteList).forEach(function (n) {
            var r = e.whiteList[n];
            var i = t.whiteList;
            if (i[n]) {
              i[n] = [].concat(i[n], r);
            } else {
              i[n] = r;
            }
          });
        } else if (n === "onIgnoreTagAttr") {
          var r = t.onIgnoreTagAttr;
          t.onIgnoreTagAttr = function () {
            var t;
            for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) {
              i[a] = arguments[a];
            }
            var o = r.call.apply(r, [this].concat(i));
            var s = (t = e.onIgnoreTagAttr).call.apply(t, [this].concat(i));
            return o || s;
          };
        } else {
          t[n] = e[n];
        }
      });
    };
    t.a = d;
  }, function (e, t, n) {
    "use strict";

    n.d(t, "b", function () {
      return i;
    });
    n.d(t, "a", function () {
      return a;
    });
    var r = n(6);
    function i(e) {
      var t = e.currentScrollTop;
      var n = e.scrollToTop;
      var r = e.scrollFn;
      var i = e.percent;
      var a = i === undefined ? 10 : i;
      var o = e.onScrollEnd;
      var s = n > t ? "down" : "up";
      var l = a / 100 * (n - t);
      window.requestAnimationFrame(function e() {
        t += l;
        if (s === "down" && t >= n || s === "up" && t <= n) {
          r(n);
          window.cancelAnimationFrame(undefined);
          if (o) {
            window.requestAnimationFrame(o);
          }
        } else {
          r(t);
          window.requestAnimationFrame(e);
        }
      });
    }
    function a(e) {
      var t = e.scrollTarget;
      var n = e.scrollToTop;
      var a = e.percent;
      var o = a === undefined ? 10 : a;
      var s = e.onScrollEnd;
      i({
        currentScrollTop: Object(r.a)(t),
        scrollToTop: n,
        scrollFn: function (e) {
          return Object(r.b)(t, e);
        },
        percent: o,
        onScrollEnd: s
      });
    }
  }, function (e, t, n) {
    "use strict";

    n.r(t);
    var r = n(0);
    var i = n(7);
    var a = n(13);
    var o = function () {
      function e() {
        this.lang = new a.a();
      }
      var t = e.prototype;
      t.defaultMarkdownLoader = function (e) {
        return e;
      };
      t.use = function (e, t) {
        if (typeof e == "function") {
          e(this, t);
        } else {
          e.install(this, t);
        }
        return this;
      };
      t.theme = function (e) {
        this.themeConfig = e;
      };
      t.extendMarkdown = function (e) {
        if (this.themeConfig) {
          e(this.themeConfig.markdownParser);
        }
      };
      t.parse = function (e) {
        var t;
        var n = this.themeConfig.markdownParser;
        var r = (n == null || (t = n.render) == null ? undefined : t.bind(n)) || this.defaultMarkdownLoader;
        if (typeof r == "function") {
          this.defaultMarkdownLoader;
        }
        return r(e);
      };
      return e;
    }();
    var s = {
      name: "v-md-preview",
      mixins: [n(16).a],
      props: {
        text: {
          type: String,
          default: ""
        },
        theme: Object,
        beforeChange: Function
      },
      emits: ["change"],
      data: function () {
        return {
          html: ""
        };
      },
      watch: {
        text: function () {
          this.handleTextChange();
        },
        langConfig: function () {
          this.handleTextChange();
        }
      },
      computed: {
        vMdParser: function () {
          return this.$options.vMdParser;
        },
        previewClass: function () {
          return this.vMdParser.themeConfig.previewClass;
        },
        langConfig: function () {
          return this.vMdParser.lang.langConfig;
        }
      },
      created: function () {
        this.handleTextChange();
      },
      methods: {
        handleTextChange: function () {
          var e = this;
          function t(t) {
            e.html = i.a.process(e.$options.vMdParser.parse(t));
            e.$emit("change", t, e.html);
          }
          if (this.beforeChange) {
            this.beforeChange(this.text, t);
          } else {
            t(this.text);
          }
        }
      }
    };
    var l = new o();
    l.lang.config = Object(r.reactive)(l.lang.config);
    s.vMdParser = new o();
    var c = s;
    c.render = function (e, t, n, i, a, o) {
      Object(r.openBlock)();
      return Object(r.createBlock)("div", {
        class: "v-md-editor-preview",
        style: {
          tabSize: e.tabSize,
          "-moz-tab-size": e.tabSize,
          "-o-tab-size": e.tabSize
        },
        onClick: t[1] ||= function () {
          return e.handlePreviewClick.apply(e, arguments);
        }
      }, [Object(r.createVNode)("div", {
        class: [e.previewClass],
        innerHTML: e.html
      }, null, 10, ["innerHTML"])], 4);
    };
    var u = c;
    n(18);
    u.version = "2.3.15";
    u.install = function (e) {
      e.component(u.name, u);
    };
    u.xss = i.a;
    u.use = function (e, t) {
      if (typeof e == "function") {
        e(u, t);
      } else {
        e.install(u, t);
      }
      return u;
    };
    t.default = u;
  },, function (e, t, n) {
    var r = n(19);
    var i = n(22);
    var a = n(26);
    function o(e, t) {
      return new a(t).process(e);
    }
    (t = e.exports = o).filterXSS = o;
    t.FilterXSS = a;
    for (var s in r) {
      t[s] = r[s];
    }
    for (var s in i) {
      t[s] = i[s];
    }
    if (typeof window != "undefined") {
      window.filterXSS = e.exports;
    }
    if (typeof self != "undefined" && typeof DedicatedWorkerGlobalScope != "undefined" && self instanceof DedicatedWorkerGlobalScope) {
      self.filterXSS = e.exports;
    }
  },, function (e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return o;
    });
    var r = n(2);
    var i = Object.prototype.hasOwnProperty;
    function a(e, t) {
      Object.keys(t).forEach(function (n) {
        (function (e, t, n) {
          var o = t[n];
          if (o != null) {
            if (i.call(e, n) && Object(r.f)(o)) {
              e[n] = a(Object(e[n]), t[n]);
            } else {
              e[n] = o;
            }
          }
        })(e, t, n);
      });
      return e;
    }
    var o = function () {
      function e(e = {}) {
        this.config = {
          lang: "zh-CN",
          langConfig: {
            "zh-CN": {}
          }
        };
        this.options = e;
      }
      var t = e.prototype;
      t.use = function (e, t) {
        var n;
        this.config.lang = e;
        this.add(((n = {})[e] = t, n));
        if (this.options.afterUse) {
          this.options.afterUse(e, t);
        }
      };
      t.add = function (e = {}) {
        a(this.config.langConfig, e);
      };
      return e;
    }();
  }, function (e, t, n) {
    var r = n(20);
    var i = n(24);
    (t = e.exports = function (e, t) {
      return new i(t).process(e);
    }).FilterCSS = i;
    for (var a in r) {
      t[a] = r[a];
    }
    if (typeof window != "undefined") {
      window.filterCSS = e.exports;
    }
  }, function (e, t) {
    e.exports = {
      indexOf: function (e, t) {
        var n;
        var r;
        if (Array.prototype.indexOf) {
          return e.indexOf(t);
        }
        n = 0;
        r = e.length;
        for (; n < r; n++) {
          if (e[n] === t) {
            return n;
          }
        }
        return -1;
      },
      forEach: function (e, t, n) {
        var r;
        var i;
        if (Array.prototype.forEach) {
          return e.forEach(t, n);
        }
        r = 0;
        i = e.length;
        for (; r < i; r++) {
          t.call(n, e[r], r, e);
        }
      },
      trim: function (e) {
        if (String.prototype.trim) {
          return e.trim();
        } else {
          return e.replace(/(^\s*)|(\s*$)/g, "");
        }
      },
      spaceIndex: function (e) {
        var t = /\s|\n|\t/.exec(e);
        if (t) {
          return t.index;
        } else {
          return -1;
        }
      }
    };
  }, function (e, t, n) {
    "use strict";

    var r = n(6);
    var i = n(8);
    var a = n(3);
    t.a = {
      props: {
        tabSize: {
          type: Number,
          default: 2
        },
        scrollContainer: {
          type: Function,
          default: function () {
            return window;
          }
        },
        top: {
          type: Number,
          default: 0
        }
      },
      emits: ["image-click"],
      methods: {
        handlePreviewClick: function (e) {
          var t = e.target;
          if (t.tagName !== "IMG") {
            var n = t.getAttribute(a.a);
            var r = this.$el.querySelector("[" + a.b + "=\"" + n + "\"]");
            if (r) {
              this.scrollToTarget({
                target: r
              });
            }
          } else {
            if (!t.getAttribute("src")) {
              return;
            }
            var i = Array.from(this.$el.querySelectorAll("img"));
            var o = i.map(function (e) {
              return e.getAttribute("src");
            }).filter(function (e) {
              return e;
            });
            var s = i.indexOf(t);
            this.$emit("image-click", o, s);
          }
        },
        getOffsetTop: function (e, t) {
          var n = e.getBoundingClientRect();
          if (t === window || t === document.documentElement) {
            return n.top;
          } else {
            return n.top - t.getBoundingClientRect().top;
          }
        },
        scrollToTarget: function (e) {
          var t = e.target;
          var n = e.scrollContainer;
          var a = n === undefined ? this.scrollContainer() : n;
          var o = e.top;
          var s = o === undefined ? this.top : o;
          var l = e.onScrollEnd;
          var c = this.getOffsetTop(t, a);
          var u = Object(r.a)(a) + c - s;
          Object(i.a)({
            scrollTarget: a,
            scrollToTop: u,
            onScrollEnd: l
          });
        },
        scrollToLine: function (e) {
          var t = e.lineIndex;
          var n = e.onScrollEnd;
          if (t) {
            var r = this.$el.querySelector("[" + a.c + "=\"" + t + "\"]");
            if (r) {
              this.scrollToTarget({
                target: r,
                onScrollEnd: n
              });
            }
          }
        }
      }
    };
  },, function (e, t, n) {}, function (e, t, n) {
    var r = n(14).FilterCSS;
    var i = n(14).getDefaultWhiteList;
    var a = n(15);
    function o() {
      return {
        a: ["target", "href", "title"],
        abbr: ["title"],
        address: [],
        area: ["shape", "coords", "href", "alt"],
        article: [],
        aside: [],
        audio: ["autoplay", "controls", "crossorigin", "loop", "muted", "preload", "src"],
        b: [],
        bdi: ["dir"],
        bdo: ["dir"],
        big: [],
        blockquote: ["cite"],
        br: [],
        caption: [],
        center: [],
        cite: [],
        code: [],
        col: ["align", "valign", "span", "width"],
        colgroup: ["align", "valign", "span", "width"],
        dd: [],
        del: ["datetime"],
        details: ["open"],
        div: [],
        dl: [],
        dt: [],
        em: [],
        figcaption: [],
        figure: [],
        font: ["color", "size", "face"],
        footer: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        header: [],
        hr: [],
        i: [],
        img: ["src", "alt", "title", "width", "height"],
        ins: ["datetime"],
        li: [],
        mark: [],
        nav: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        section: [],
        small: [],
        span: [],
        sub: [],
        summary: [],
        sup: [],
        strong: [],
        strike: [],
        table: ["width", "border", "align", "valign"],
        tbody: ["align", "valign"],
        td: ["width", "rowspan", "colspan", "align", "valign"],
        tfoot: ["align", "valign"],
        th: ["width", "rowspan", "colspan", "align", "valign"],
        thead: ["align", "valign"],
        tr: ["rowspan", "align", "valign"],
        tt: [],
        u: [],
        ul: [],
        video: ["autoplay", "controls", "crossorigin", "loop", "muted", "playsinline", "poster", "preload", "src", "height", "width"]
      };
    }
    var s = new r();
    function l(e) {
      return e.replace(c, "&lt;").replace(u, "&gt;");
    }
    var c = /</g;
    var u = />/g;
    var p = /"/g;
    var d = /&quot;/g;
    var h = /&#([a-zA-Z0-9]*);?/gim;
    var g = /&colon;?/gim;
    var f = /&newline;?/gim;
    var m = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/gi;
    var b = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi;
    var x = /u\s*r\s*l\s*\(.*/gi;
    function y(e) {
      return e.replace(p, "&quot;");
    }
    function v(e) {
      return e.replace(d, "\"");
    }
    function w(e) {
      return e.replace(h, function (e, t) {
        if (t[0] === "x" || t[0] === "X") {
          return String.fromCharCode(parseInt(t.substr(1), 16));
        } else {
          return String.fromCharCode(parseInt(t, 10));
        }
      });
    }
    function A(e) {
      return e.replace(g, ":").replace(f, " ");
    }
    function k(e) {
      var t = "";
      for (var n = 0, r = e.length; n < r; n++) {
        t += e.charCodeAt(n) < 32 ? " " : e.charAt(n);
      }
      return a.trim(t);
    }
    function S(e) {
      return e = k(e = A(e = w(e = v(e))));
    }
    function C(e) {
      return e = l(e = y(e));
    }
    var E = /<!--[\s\S]*?-->/g;
    t.whiteList = {
      a: ["target", "href", "title"],
      abbr: ["title"],
      address: [],
      area: ["shape", "coords", "href", "alt"],
      article: [],
      aside: [],
      audio: ["autoplay", "controls", "crossorigin", "loop", "muted", "preload", "src"],
      b: [],
      bdi: ["dir"],
      bdo: ["dir"],
      big: [],
      blockquote: ["cite"],
      br: [],
      caption: [],
      center: [],
      cite: [],
      code: [],
      col: ["align", "valign", "span", "width"],
      colgroup: ["align", "valign", "span", "width"],
      dd: [],
      del: ["datetime"],
      details: ["open"],
      div: [],
      dl: [],
      dt: [],
      em: [],
      figcaption: [],
      figure: [],
      font: ["color", "size", "face"],
      footer: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      header: [],
      hr: [],
      i: [],
      img: ["src", "alt", "title", "width", "height"],
      ins: ["datetime"],
      li: [],
      mark: [],
      nav: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      section: [],
      small: [],
      span: [],
      sub: [],
      summary: [],
      sup: [],
      strong: [],
      strike: [],
      table: ["width", "border", "align", "valign"],
      tbody: ["align", "valign"],
      td: ["width", "rowspan", "colspan", "align", "valign"],
      tfoot: ["align", "valign"],
      th: ["width", "rowspan", "colspan", "align", "valign"],
      thead: ["align", "valign"],
      tr: ["rowspan", "align", "valign"],
      tt: [],
      u: [],
      ul: [],
      video: ["autoplay", "controls", "crossorigin", "loop", "muted", "playsinline", "poster", "preload", "src", "height", "width"]
    };
    t.getDefaultWhiteList = o;
    t.onTag = function (e, t, n) {};
    t.onIgnoreTag = function (e, t, n) {};
    t.onTagAttr = function (e, t, n) {};
    t.onIgnoreTagAttr = function (e, t, n) {};
    t.safeAttrValue = function (e, t, n, r) {
      n = S(n);
      if (t === "href" || t === "src") {
        if ((n = a.trim(n)) === "#") {
          return "#";
        }
        if (n.substr(0, 7) !== "http://" && n.substr(0, 8) !== "https://" && n.substr(0, 7) !== "mailto:" && n.substr(0, 4) !== "tel:" && n.substr(0, 11) !== "data:image/" && n.substr(0, 6) !== "ftp://" && n.substr(0, 2) !== "./" && n.substr(0, 3) !== "../" && n[0] !== "#" && n[0] !== "/") {
          return "";
        }
      } else if (t === "background") {
        m.lastIndex = 0;
        if (m.test(n)) {
          return "";
        }
      } else if (t === "style") {
        b.lastIndex = 0;
        if (b.test(n)) {
          return "";
        }
        x.lastIndex = 0;
        if (x.test(n) && (m.lastIndex = 0, m.test(n))) {
          return "";
        }
        if (r !== false) {
          n = (r = r || s).process(n);
        }
      }
      return n = C(n);
    };
    t.escapeHtml = l;
    t.escapeQuote = y;
    t.unescapeQuote = v;
    t.escapeHtmlEntities = w;
    t.escapeDangerHtml5Entities = A;
    t.clearNonPrintableCharacter = k;
    t.friendlyAttrValue = S;
    t.escapeAttrValue = C;
    t.onIgnoreTagStripAll = function () {
      return "";
    };
    t.StripTagBody = function (e, t) {
      if (typeof t != "function") {
        t = function () {};
      }
      var n = !Array.isArray(e);
      var r = [];
      var i = false;
      return {
        onIgnoreTag: function (o, s, l) {
          if (function (t) {
            return !!n || a.indexOf(e, t) !== -1;
          }(o)) {
            if (l.isClosing) {
              var c = "[/removed]";
              var u = l.position + c.length;
              r.push([i !== false ? i : l.position, u]);
              i = false;
              return c;
            }
            i ||= l.position;
            return "[removed]";
          }
          return t(o, s, l);
        },
        remove: function (e) {
          var t = "";
          var n = 0;
          a.forEach(r, function (r) {
            t += e.slice(n, r[0]);
            n = r[1];
          });
          return t += e.slice(n);
        }
      };
    };
    t.stripCommentTag = function (e) {
      return e.replace(E, "");
    };
    t.stripBlankChar = function (e) {
      var t = e.split("");
      return (t = t.filter(function (e) {
        var t = e.charCodeAt(0);
        return t !== 127 && (!(t <= 31) || t === 10 || t === 13);
      })).join("");
    };
    t.cssFilter = s;
    t.getDefaultCSSWhiteList = i;
  }, function (e, t) {
    function n() {
      var e = {
        "align-content": false,
        "align-items": false,
        "align-self": false,
        "alignment-adjust": false,
        "alignment-baseline": false,
        all: false,
        "anchor-point": false,
        animation: false,
        "animation-delay": false,
        "animation-direction": false,
        "animation-duration": false,
        "animation-fill-mode": false,
        "animation-iteration-count": false,
        "animation-name": false,
        "animation-play-state": false,
        "animation-timing-function": false,
        azimuth: false,
        "backface-visibility": false,
        background: true,
        "background-attachment": true,
        "background-clip": true,
        "background-color": true,
        "background-image": true,
        "background-origin": true,
        "background-position": true,
        "background-repeat": true,
        "background-size": true,
        "baseline-shift": false,
        binding: false,
        bleed: false,
        "bookmark-label": false,
        "bookmark-level": false,
        "bookmark-state": false,
        border: true,
        "border-bottom": true,
        "border-bottom-color": true,
        "border-bottom-left-radius": true,
        "border-bottom-right-radius": true,
        "border-bottom-style": true,
        "border-bottom-width": true,
        "border-collapse": true,
        "border-color": true,
        "border-image": true,
        "border-image-outset": true,
        "border-image-repeat": true,
        "border-image-slice": true,
        "border-image-source": true,
        "border-image-width": true,
        "border-left": true,
        "border-left-color": true,
        "border-left-style": true,
        "border-left-width": true,
        "border-radius": true,
        "border-right": true,
        "border-right-color": true,
        "border-right-style": true,
        "border-right-width": true,
        "border-spacing": true,
        "border-style": true,
        "border-top": true,
        "border-top-color": true,
        "border-top-left-radius": true,
        "border-top-right-radius": true,
        "border-top-style": true,
        "border-top-width": true,
        "border-width": true,
        bottom: false,
        "box-decoration-break": true,
        "box-shadow": true,
        "box-sizing": true,
        "box-snap": true,
        "box-suppress": true,
        "break-after": true,
        "break-before": true,
        "break-inside": true,
        "caption-side": false,
        chains: false,
        clear: true,
        clip: false,
        "clip-path": false,
        "clip-rule": false,
        color: true,
        "color-interpolation-filters": true,
        "column-count": false,
        "column-fill": false,
        "column-gap": false,
        "column-rule": false,
        "column-rule-color": false,
        "column-rule-style": false,
        "column-rule-width": false,
        "column-span": false,
        "column-width": false,
        columns: false,
        contain: false,
        content: false,
        "counter-increment": false,
        "counter-reset": false,
        "counter-set": false,
        crop: false,
        cue: false,
        "cue-after": false,
        "cue-before": false,
        cursor: false,
        direction: false,
        display: true,
        "display-inside": true,
        "display-list": true,
        "display-outside": true,
        "dominant-baseline": false,
        elevation: false,
        "empty-cells": false,
        filter: false,
        flex: false,
        "flex-basis": false,
        "flex-direction": false,
        "flex-flow": false,
        "flex-grow": false,
        "flex-shrink": false,
        "flex-wrap": false,
        float: false,
        "float-offset": false,
        "flood-color": false,
        "flood-opacity": false,
        "flow-from": false,
        "flow-into": false,
        font: true,
        "font-family": true,
        "font-feature-settings": true,
        "font-kerning": true,
        "font-language-override": true,
        "font-size": true,
        "font-size-adjust": true,
        "font-stretch": true,
        "font-style": true,
        "font-synthesis": true,
        "font-variant": true,
        "font-variant-alternates": true,
        "font-variant-caps": true,
        "font-variant-east-asian": true,
        "font-variant-ligatures": true,
        "font-variant-numeric": true,
        "font-variant-position": true,
        "font-weight": true,
        grid: false,
        "grid-area": false,
        "grid-auto-columns": false,
        "grid-auto-flow": false,
        "grid-auto-rows": false,
        "grid-column": false,
        "grid-column-end": false,
        "grid-column-start": false,
        "grid-row": false,
        "grid-row-end": false,
        "grid-row-start": false,
        "grid-template": false,
        "grid-template-areas": false,
        "grid-template-columns": false,
        "grid-template-rows": false,
        "hanging-punctuation": false,
        height: true,
        hyphens: false,
        icon: false,
        "image-orientation": false,
        "image-resolution": false,
        "ime-mode": false,
        "initial-letters": false,
        "inline-box-align": false,
        "justify-content": false,
        "justify-items": false,
        "justify-self": false,
        left: false,
        "letter-spacing": true,
        "lighting-color": true,
        "line-box-contain": false,
        "line-break": false,
        "line-grid": false,
        "line-height": false,
        "line-snap": false,
        "line-stacking": false,
        "line-stacking-ruby": false,
        "line-stacking-shift": false,
        "line-stacking-strategy": false,
        "list-style": true,
        "list-style-image": true,
        "list-style-position": true,
        "list-style-type": true,
        margin: true,
        "margin-bottom": true,
        "margin-left": true,
        "margin-right": true,
        "margin-top": true,
        "marker-offset": false,
        "marker-side": false,
        marks: false,
        mask: false,
        "mask-box": false,
        "mask-box-outset": false,
        "mask-box-repeat": false,
        "mask-box-slice": false,
        "mask-box-source": false,
        "mask-box-width": false,
        "mask-clip": false,
        "mask-image": false,
        "mask-origin": false,
        "mask-position": false,
        "mask-repeat": false,
        "mask-size": false,
        "mask-source-type": false,
        "mask-type": false,
        "max-height": true,
        "max-lines": false,
        "max-width": true,
        "min-height": true,
        "min-width": true,
        "move-to": false,
        "nav-down": false,
        "nav-index": false,
        "nav-left": false,
        "nav-right": false,
        "nav-up": false,
        "object-fit": false,
        "object-position": false,
        opacity: false,
        order: false,
        orphans: false,
        outline: false,
        "outline-color": false,
        "outline-offset": false,
        "outline-style": false,
        "outline-width": false,
        overflow: false,
        "overflow-wrap": false,
        "overflow-x": false,
        "overflow-y": false,
        padding: true,
        "padding-bottom": true,
        "padding-left": true,
        "padding-right": true,
        "padding-top": true,
        page: false,
        "page-break-after": false,
        "page-break-before": false,
        "page-break-inside": false,
        "page-policy": false,
        pause: false,
        "pause-after": false,
        "pause-before": false,
        perspective: false,
        "perspective-origin": false,
        pitch: false,
        "pitch-range": false,
        "play-during": false,
        position: false,
        "presentation-level": false,
        quotes: false,
        "region-fragment": false,
        resize: false,
        rest: false,
        "rest-after": false,
        "rest-before": false,
        richness: false,
        right: false,
        rotation: false,
        "rotation-point": false,
        "ruby-align": false,
        "ruby-merge": false,
        "ruby-position": false,
        "shape-image-threshold": false,
        "shape-outside": false,
        "shape-margin": false,
        size: false,
        speak: false,
        "speak-as": false,
        "speak-header": false,
        "speak-numeral": false,
        "speak-punctuation": false,
        "speech-rate": false,
        stress: false,
        "string-set": false,
        "tab-size": false,
        "table-layout": false,
        "text-align": true,
        "text-align-last": true,
        "text-combine-upright": true,
        "text-decoration": true,
        "text-decoration-color": true,
        "text-decoration-line": true,
        "text-decoration-skip": true,
        "text-decoration-style": true,
        "text-emphasis": true,
        "text-emphasis-color": true,
        "text-emphasis-position": true,
        "text-emphasis-style": true,
        "text-height": true,
        "text-indent": true,
        "text-justify": true,
        "text-orientation": true,
        "text-overflow": true,
        "text-shadow": true,
        "text-space-collapse": true,
        "text-transform": true,
        "text-underline-position": true,
        "text-wrap": true,
        top: false,
        transform: false,
        "transform-origin": false,
        "transform-style": false,
        transition: false,
        "transition-delay": false,
        "transition-duration": false,
        "transition-property": false,
        "transition-timing-function": false,
        "unicode-bidi": false,
        "vertical-align": false,
        visibility: false,
        "voice-balance": false,
        "voice-duration": false,
        "voice-family": false,
        "voice-pitch": false,
        "voice-range": false,
        "voice-rate": false,
        "voice-stress": false,
        "voice-volume": false,
        volume: false,
        "white-space": false,
        widows: false,
        width: true,
        "will-change": false,
        "word-break": true,
        "word-spacing": true,
        "word-wrap": true,
        "wrap-flow": false,
        "wrap-through": false,
        "writing-mode": false,
        "z-index": false
      };
      return e;
    }
    var r = /javascript\s*\:/gim;
    t.whiteList = n();
    t.getDefaultWhiteList = n;
    t.onAttr = function (e, t, n) {};
    t.onIgnoreAttr = function (e, t, n) {};
    t.safeAttrValue = function (e, t) {
      if (r.test(t)) {
        return "";
      } else {
        return t;
      }
    };
  }, function (e, t) {
    e.exports = {
      indexOf: function (e, t) {
        var n;
        var r;
        if (Array.prototype.indexOf) {
          return e.indexOf(t);
        }
        n = 0;
        r = e.length;
        for (; n < r; n++) {
          if (e[n] === t) {
            return n;
          }
        }
        return -1;
      },
      forEach: function (e, t, n) {
        var r;
        var i;
        if (Array.prototype.forEach) {
          return e.forEach(t, n);
        }
        r = 0;
        i = e.length;
        for (; r < i; r++) {
          t.call(n, e[r], r, e);
        }
      },
      trim: function (e) {
        if (String.prototype.trim) {
          return e.trim();
        } else {
          return e.replace(/(^\s*)|(\s*$)/g, "");
        }
      },
      trimRight: function (e) {
        if (String.prototype.trimRight) {
          return e.trimRight();
        } else {
          return e.replace(/(\s*$)/g, "");
        }
      }
    };
  }, function (e, t, n) {
    var r = n(15);
    function i(e) {
      var t = r.spaceIndex(e);
      if (t === -1) {
        var n = e.slice(1, -1);
      } else {
        n = e.slice(1, t + 1);
      }
      if ((n = r.trim(n).toLowerCase()).slice(0, 1) === "/") {
        n = n.slice(1);
      }
      if (n.slice(-1) === "/") {
        n = n.slice(0, -1);
      }
      return n;
    }
    function a(e) {
      return e.slice(0, 2) === "</";
    }
    var o = /[^a-zA-Z0-9_:\.\-]/gim;
    function s(e, t) {
      for (; t < e.length; t++) {
        var n = e[t];
        if (n !== " ") {
          if (n === "=") {
            return t;
          } else {
            return -1;
          }
        }
      }
    }
    function l(e, t) {
      for (; t > 0; t--) {
        var n = e[t];
        if (n !== " ") {
          if (n === "=") {
            return t;
          } else {
            return -1;
          }
        }
      }
    }
    function c(e) {
      if (function (e) {
        return e[0] === "\"" && e[e.length - 1] === "\"" || e[0] === "'" && e[e.length - 1] === "'";
      }(e)) {
        return e.substr(1, e.length - 2);
      } else {
        return e;
      }
    }
    t.parseTag = function (e, t, n) {
      "use strict";

      var r = "";
      var o = 0;
      var s = false;
      var l = false;
      var c = 0;
      var u = e.length;
      var p = "";
      var d = "";
      e: for (c = 0; c < u; c++) {
        var h = e.charAt(c);
        if (s === false) {
          if (h === "<") {
            s = c;
            continue;
          }
        } else if (l === false) {
          if (h === "<") {
            r += n(e.slice(o, c));
            s = c;
            o = c;
            continue;
          }
          if (h === ">") {
            r += n(e.slice(o, s));
            p = i(d = e.slice(s, c + 1));
            r += t(s, r.length, p, d, a(d));
            o = c + 1;
            s = false;
            continue;
          }
          if (h === "\"" || h === "'") {
            var g = 1;
            for (var f = e.charAt(c - g); f.trim() === "" || f === "=";) {
              if (f === "=") {
                l = h;
                continue e;
              }
              f = e.charAt(c - ++g);
            }
          }
        } else if (h === l) {
          l = false;
          continue;
        }
      }
      if (o < e.length) {
        r += n(e.substr(o));
      }
      return r;
    };
    t.parseAttr = function (e, t) {
      "use strict";

      var n = 0;
      var i = [];
      var a = false;
      var u = e.length;
      function p(e, n) {
        if (!((e = (e = r.trim(e)).replace(o, "").toLowerCase()).length < 1)) {
          var a = t(e, n || "");
          if (a) {
            i.push(a);
          }
        }
      }
      for (var d = 0; d < u; d++) {
        var h;
        var g = e.charAt(d);
        if (a !== false || g !== "=") {
          if (a === false || d !== n || g !== "\"" && g !== "'" || e.charAt(d - 1) !== "=") {
            if (/\s|\n|\t/.test(g)) {
              e = e.replace(/\s|\n|\t/g, " ");
              if (a === false) {
                if ((h = s(e, d)) === -1) {
                  p(r.trim(e.slice(n, d)));
                  a = false;
                  n = d + 1;
                  continue;
                }
                d = h - 1;
                continue;
              }
              if ((h = l(e, d - 1)) === -1) {
                p(a, c(r.trim(e.slice(n, d))));
                a = false;
                n = d + 1;
                continue;
              }
            }
          } else {
            if ((h = e.indexOf(g, d + 1)) === -1) {
              break;
            }
            p(a, r.trim(e.slice(n + 1, h)));
            a = false;
            n = (d = h) + 1;
          }
        } else {
          a = e.slice(n, d);
          n = d + 1;
        }
      }
      if (n < e.length) {
        if (a === false) {
          p(e.slice(n));
        } else {
          p(a, c(r.trim(e.slice(n))));
        }
      }
      return r.trim(i.join(" "));
    };
  },, function (e, t, n) {
    var r = n(20);
    var i = n(25);
    function a(e) {
      return e == null;
    }
    function o(e) {
      (e = function (e) {
        var t = {};
        for (var n in e) {
          t[n] = e[n];
        }
        return t;
      }(e || {})).whiteList = e.whiteList || r.whiteList;
      e.onAttr = e.onAttr || r.onAttr;
      e.onIgnoreAttr = e.onIgnoreAttr || r.onIgnoreAttr;
      e.safeAttrValue = e.safeAttrValue || r.safeAttrValue;
      this.options = e;
    }
    n(21);
    o.prototype.process = function (e) {
      if (!(e = (e = e || "").toString())) {
        return "";
      }
      var t = this.options;
      var n = t.whiteList;
      var r = t.onAttr;
      var o = t.onIgnoreAttr;
      var s = t.safeAttrValue;
      return i(e, function (e, t, i, l, c) {
        var u = n[i];
        var p = false;
        if (u === true) {
          p = u;
        } else if (typeof u == "function") {
          p = u(l);
        } else if (u instanceof RegExp) {
          p = u.test(l);
        }
        if (p !== true) {
          p = false;
        }
        if (l = s(i, l)) {
          var d;
          var h = {
            position: t,
            sourcePosition: e,
            source: c,
            isWhite: p
          };
          if (p) {
            if (a(d = r(i, l, h))) {
              return i + ":" + l;
            } else {
              return d;
            }
          } else if (a(d = o(i, l, h))) {
            return undefined;
          } else {
            return d;
          }
        }
      });
    };
    e.exports = o;
  }, function (e, t, n) {
    var r = n(21);
    e.exports = function (e, t) {
      if ((e = r.trimRight(e))[e.length - 1] !== ";") {
        e += ";";
      }
      var n = e.length;
      var i = false;
      var a = 0;
      var o = 0;
      var s = "";
      function l() {
        if (!i) {
          var n = r.trim(e.slice(a, o));
          var l = n.indexOf(":");
          if (l !== -1) {
            var c = r.trim(n.slice(0, l));
            var u = r.trim(n.slice(l + 1));
            if (c) {
              var p = t(a, s.length, c, u, n);
              if (p) {
                s += p + "; ";
              }
            }
          }
        }
        a = o + 1;
      }
      for (; o < n; o++) {
        var c = e[o];
        if (c === "/" && e[o + 1] === "*") {
          var u = e.indexOf("*/", o + 2);
          if (u === -1) {
            break;
          }
          a = (o = u + 1) + 1;
          i = false;
        } else if (c === "(") {
          i = true;
        } else if (c === ")") {
          i = false;
        } else if (c === ";") {
          if (!i) {
            l();
          }
        } else if (c === "\n") {
          l();
        }
      }
      return r.trim(s);
    };
  }, function (e, t, n) {
    var r = n(14).FilterCSS;
    var i = n(19);
    var a = n(22);
    var o = a.parseTag;
    var s = a.parseAttr;
    var l = n(15);
    function c(e) {
      return e == null;
    }
    function u(e) {
      if ((e = function (e) {
        var t = {};
        for (var n in e) {
          t[n] = e[n];
        }
        return t;
      }(e || {})).stripIgnoreTag) {
        e.onIgnoreTag;
        e.onIgnoreTag = i.onIgnoreTagStripAll;
      }
      e.whiteList = e.whiteList || i.whiteList;
      e.onTag = e.onTag || i.onTag;
      e.onTagAttr = e.onTagAttr || i.onTagAttr;
      e.onIgnoreTag = e.onIgnoreTag || i.onIgnoreTag;
      e.onIgnoreTagAttr = e.onIgnoreTagAttr || i.onIgnoreTagAttr;
      e.safeAttrValue = e.safeAttrValue || i.safeAttrValue;
      e.escapeHtml = e.escapeHtml || i.escapeHtml;
      this.options = e;
      if (e.css === false) {
        this.cssFilter = false;
      } else {
        e.css = e.css || {};
        this.cssFilter = new r(e.css);
      }
    }
    u.prototype.process = function (e) {
      if (!(e = (e = e || "").toString())) {
        return "";
      }
      var t = this.options;
      var n = t.whiteList;
      var r = t.onTag;
      var a = t.onIgnoreTag;
      var u = t.onTagAttr;
      var p = t.onIgnoreTagAttr;
      var d = t.safeAttrValue;
      var h = t.escapeHtml;
      var g = this.cssFilter;
      if (t.stripBlankChar) {
        e = i.stripBlankChar(e);
      }
      if (!t.allowCommentTag) {
        e = i.stripCommentTag(e);
      }
      var f = false;
      if (t.stripIgnoreTagBody) {
        f = i.StripTagBody(t.stripIgnoreTagBody, a);
        a = f.onIgnoreTag;
      }
      var m = o(e, function (e, t, i, o, f) {
        var m;
        var b = {
          sourcePosition: e,
          position: t,
          isClosing: f,
          isWhite: n.hasOwnProperty(i)
        };
        if (!c(m = r(i, o, b))) {
          return m;
        }
        if (b.isWhite) {
          if (b.isClosing) {
            return "</" + i + ">";
          }
          var x = function (e) {
            var t = l.spaceIndex(e);
            if (t === -1) {
              return {
                html: "",
                closing: e[e.length - 2] === "/"
              };
            }
            var n = (e = l.trim(e.slice(t + 1, -1)))[e.length - 1] === "/";
            if (n) {
              e = l.trim(e.slice(0, -1));
            }
            return {
              html: e,
              closing: n
            };
          }(o);
          var y = n[i];
          var v = s(x.html, function (e, t) {
            var n;
            var r = l.indexOf(y, e) !== -1;
            if (c(n = u(i, e, t, r))) {
              if (r) {
                if (t = d(i, e, t, g)) {
                  return e + "=\"" + t + "\"";
                } else {
                  return e;
                }
              } else if (c(n = p(i, e, t, r))) {
                return undefined;
              } else {
                return n;
              }
            } else {
              return n;
            }
          });
          o = "<" + i;
          if (v) {
            o += " " + v;
          }
          if (x.closing) {
            o += " /";
          }
          return o += ">";
        }
        if (c(m = a(i, o, b))) {
          return h(o);
        } else {
          return m;
        }
      }, h);
      if (f) {
        m = f.remove(m);
      }
      return m;
    };
    e.exports = u;
  }]).default;
};
module.exports = r(require(/*webcrack:missing*/"./4942.js"));