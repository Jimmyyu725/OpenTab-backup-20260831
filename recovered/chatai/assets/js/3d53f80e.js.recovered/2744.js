var r = function (e) {
  var t = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i;
  var n = 0;
  var r = {};
  var i = {
    manual: e.Prism && e.Prism.manual,
    disableWorkerMessageHandler: e.Prism && e.Prism.disableWorkerMessageHandler,
    util: {
      encode: function e(t) {
        if (t instanceof a) {
          return new a(t.type, e(t.content), t.alias);
        } else if (Array.isArray(t)) {
          return t.map(e);
        } else {
          return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
        }
      },
      type: function (e) {
        return Object.prototype.toString.call(e).slice(8, -1);
      },
      objId: function (e) {
        if (!e.__id) {
          Object.defineProperty(e, "__id", {
            value: ++n
          });
        }
        return e.__id;
      },
      clone: function e(t, n) {
        var r;
        var a;
        n = n || {};
        switch (i.util.type(t)) {
          case "Object":
            a = i.util.objId(t);
            if (n[a]) {
              return n[a];
            }
            r = {};
            n[a] = r;
            for (var o in t) {
              if (t.hasOwnProperty(o)) {
                r[o] = e(t[o], n);
              }
            }
            return r;
          case "Array":
            a = i.util.objId(t);
            if (n[a]) {
              return n[a];
            } else {
              r = [];
              n[a] = r;
              t.forEach(function (t, i) {
                r[i] = e(t, n);
              });
              return r;
            }
          default:
            return t;
        }
      },
      getLanguage: function (e) {
        while (e) {
          var n = t.exec(e.className);
          if (n) {
            return n[1].toLowerCase();
          }
          e = e.parentElement;
        }
        return "none";
      },
      setLanguage: function (e, n) {
        e.className = e.className.replace(RegExp(t, "gi"), "");
        e.classList.add("language-" + n);
      },
      currentScript: function () {
        if (typeof document == "undefined") {
          return null;
        }
        if ("currentScript" in document) {
          return document.currentScript;
        }
        try {
          throw new Error();
        } catch (r) {
          var e = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r.stack) || [])[1];
          if (e) {
            var t = document.getElementsByTagName("script");
            for (var n in t) {
              if (t[n].src == e) {
                return t[n];
              }
            }
          }
          return null;
        }
      },
      isActive: function (e, t, n) {
        var r = "no-" + t;
        for (; e;) {
          var i = e.classList;
          if (i.contains(t)) {
            return true;
          }
          if (i.contains(r)) {
            return false;
          }
          e = e.parentElement;
        }
        return !!n;
      }
    },
    languages: {
      plain: r,
      plaintext: r,
      text: r,
      txt: r,
      extend: function (e, t) {
        var n = i.util.clone(i.languages[e]);
        for (var r in t) {
          n[r] = t[r];
        }
        return n;
      },
      insertBefore: function (e, t, n, r) {
        var a = (r = r || i.languages)[e];
        var o = {};
        for (var s in a) {
          if (a.hasOwnProperty(s)) {
            if (s == t) {
              for (var l in n) {
                if (n.hasOwnProperty(l)) {
                  o[l] = n[l];
                }
              }
            }
            if (!n.hasOwnProperty(s)) {
              o[s] = a[s];
            }
          }
        }
        var c = r[e];
        r[e] = o;
        i.languages.DFS(i.languages, function (t, n) {
          if (n === c && t != e) {
            this[t] = o;
          }
        });
        return o;
      },
      DFS: function e(t, n, r, a) {
        a = a || {};
        var o = i.util.objId;
        for (var s in t) {
          if (t.hasOwnProperty(s)) {
            n.call(t, s, t[s], r || s);
            var l = t[s];
            var c = i.util.type(l);
            if (c !== "Object" || a[o(l)]) {
              if (c === "Array" && !a[o(l)]) {
                a[o(l)] = true;
                e(l, n, s, a);
              }
            } else {
              a[o(l)] = true;
              e(l, n, null, a);
            }
          }
        }
      }
    },
    plugins: {},
    highlightAll: function (e, t) {
      i.highlightAllUnder(document, e, t);
    },
    highlightAllUnder: function (e, t, n) {
      var r = {
        callback: n,
        container: e,
        selector: "code[class*=\"language-\"], [class*=\"language-\"] code, code[class*=\"lang-\"], [class*=\"lang-\"] code"
      };
      i.hooks.run("before-highlightall", r);
      r.elements = Array.prototype.slice.apply(r.container.querySelectorAll(r.selector));
      i.hooks.run("before-all-elements-highlight", r);
      for (var a, o = 0; a = r.elements[o++];) {
        i.highlightElement(a, t === true, r.callback);
      }
    },
    highlightElement: function (t, n, r) {
      var a = i.util.getLanguage(t);
      var o = i.languages[a];
      i.util.setLanguage(t, a);
      var s = t.parentElement;
      if (s && s.nodeName.toLowerCase() === "pre") {
        i.util.setLanguage(s, a);
      }
      var l = {
        element: t,
        language: a,
        grammar: o,
        code: t.textContent
      };
      function c(e) {
        l.highlightedCode = e;
        i.hooks.run("before-insert", l);
        l.element.innerHTML = l.highlightedCode;
        i.hooks.run("after-highlight", l);
        i.hooks.run("complete", l);
        if (r) {
          r.call(l.element);
        }
      }
      i.hooks.run("before-sanity-check", l);
      if ((s = l.element.parentElement) && s.nodeName.toLowerCase() === "pre" && !s.hasAttribute("tabindex")) {
        s.setAttribute("tabindex", "0");
      }
      if (!l.code) {
        i.hooks.run("complete", l);
        if (r) {
          r.call(l.element);
        }
        return;
      }
      i.hooks.run("before-highlight", l);
      if (l.grammar) {
        if (n && e.Worker) {
          var u = new Worker(i.filename);
          u.onmessage = function (e) {
            c(e.data);
          };
          u.postMessage(JSON.stringify({
            language: l.language,
            code: l.code,
            immediateClose: true
          }));
        } else {
          c(i.highlight(l.code, l.grammar, l.language));
        }
      } else {
        c(i.util.encode(l.code));
      }
    },
    highlight: function (e, t, n) {
      var r = {
        code: e,
        grammar: t,
        language: n
      };
      i.hooks.run("before-tokenize", r);
      if (!r.grammar) {
        throw new Error("The language \"" + r.language + "\" has no grammar.");
      }
      r.tokens = i.tokenize(r.code, r.grammar);
      i.hooks.run("after-tokenize", r);
      return a.stringify(i.util.encode(r.tokens), r.language);
    },
    tokenize: function (e, t) {
      var n = t.rest;
      if (n) {
        for (var r in n) {
          t[r] = n[r];
        }
        delete t.rest;
      }
      var i = new l();
      c(i, i.head, e);
      s(e, i, t, i.head, 0);
      return function (e) {
        var t = [];
        var n = e.head.next;
        while (n !== e.tail) {
          t.push(n.value);
          n = n.next;
        }
        return t;
      }(i);
    },
    hooks: {
      all: {},
      add: function (e, t) {
        var n = i.hooks.all;
        n[e] = n[e] || [];
        n[e].push(t);
      },
      run: function (e, t) {
        var n = i.hooks.all[e];
        if (n && n.length) {
          for (var r, a = 0; r = n[a++];) {
            r(t);
          }
        }
      }
    },
    Token: a
  };
  function a(e, t, n, r) {
    this.type = e;
    this.content = t;
    this.alias = n;
    this.length = (r || "").length | 0;
  }
  function o(e, t, n, r) {
    e.lastIndex = t;
    var i = e.exec(n);
    if (i && r && i[1]) {
      var a = i[1].length;
      i.index += a;
      i[0] = i[0].slice(a);
    }
    return i;
  }
  function s(e, t, n, r, l, p) {
    for (var d in n) {
      if (n.hasOwnProperty(d) && n[d]) {
        var h = n[d];
        h = Array.isArray(h) ? h : [h];
        for (var g = 0; g < h.length; ++g) {
          if (p && p.cause == d + "," + g) {
            return;
          }
          var f = h[g];
          var m = f.inside;
          var b = !!f.lookbehind;
          var x = !!f.greedy;
          var y = f.alias;
          if (x && !f.pattern.global) {
            var v = f.pattern.toString().match(/[imsuy]*$/)[0];
            f.pattern = RegExp(f.pattern.source, v + "g");
          }
          var w = f.pattern || f;
          for (var A = r.next, k = l; A !== t.tail && (!p || !(k >= p.reach)); k += A.value.length, A = A.next) {
            var S = A.value;
            if (t.length > e.length) {
              return;
            }
            if (!(S instanceof a)) {
              var C;
              var E = 1;
              if (x) {
                if (!(C = o(w, k, e, b)) || C.index >= e.length) {
                  break;
                }
                var I = C.index;
                var T = C.index + C[0].length;
                var D = k;
                for (D += A.value.length; I >= D;) {
                  D += (A = A.next).value.length;
                }
                k = D -= A.value.length;
                if (A.value instanceof a) {
                  continue;
                }
                for (var _ = A; _ !== t.tail && (D < T || typeof _.value == "string"); _ = _.next) {
                  E++;
                  D += _.value.length;
                }
                E--;
                S = e.slice(k, D);
                C.index -= k;
              } else if (!(C = o(w, 0, S, b))) {
                continue;
              }
              I = C.index;
              var M = C[0];
              var F = S.slice(0, I);
              var z = S.slice(I + M.length);
              var R = k + S.length;
              if (p && R > p.reach) {
                p.reach = R;
              }
              var B = A.prev;
              if (F) {
                B = c(t, B, F);
                k += F.length;
              }
              u(t, B, E);
              A = c(t, B, new a(d, m ? i.tokenize(M, m) : M, y, M));
              if (z) {
                c(t, A, z);
              }
              if (E > 1) {
                var N = {
                  cause: d + "," + g,
                  reach: R
                };
                s(e, t, n, A.prev, k, N);
                if (p && N.reach > p.reach) {
                  p.reach = N.reach;
                }
              }
            }
          }
        }
      }
    }
  }
  function l() {
    var e = {
      value: null,
      prev: null,
      next: null
    };
    var t = {
      value: null,
      prev: e,
      next: null
    };
    e.next = t;
    this.head = e;
    this.tail = t;
    this.length = 0;
  }
  function c(e, t, n) {
    var r = t.next;
    var i = {
      value: n,
      prev: t,
      next: r
    };
    t.next = i;
    r.prev = i;
    e.length++;
    return i;
  }
  function u(e, t, n) {
    for (var r = t.next, i = 0; i < n && r !== e.tail; i++) {
      r = r.next;
    }
    t.next = r;
    r.prev = t;
    e.length -= i;
  }
  e.Prism = i;
  a.stringify = function e(t, n) {
    if (typeof t == "string") {
      return t;
    }
    if (Array.isArray(t)) {
      var r = "";
      t.forEach(function (t) {
        r += e(t, n);
      });
      return r;
    }
    var a = {
      type: t.type,
      content: e(t.content, n),
      tag: "span",
      classes: ["token", t.type],
      attributes: {},
      language: n
    };
    var o = t.alias;
    if (o) {
      if (Array.isArray(o)) {
        Array.prototype.push.apply(a.classes, o);
      } else {
        a.classes.push(o);
      }
    }
    i.hooks.run("wrap", a);
    var s = "";
    for (var l in a.attributes) {
      s += " " + l + "=\"" + (a.attributes[l] || "").replace(/"/g, "&quot;") + "\"";
    }
    return "<" + a.tag + " class=\"" + a.classes.join(" ") + "\"" + s + ">" + a.content + "</" + a.tag + ">";
  };
  if (!e.document) {
    if (e.addEventListener) {
      if (!i.disableWorkerMessageHandler) {
        e.addEventListener("message", function (t) {
          var n = JSON.parse(t.data);
          var r = n.language;
          var a = n.code;
          var o = n.immediateClose;
          e.postMessage(i.highlight(a, i.languages[r], r));
          if (o) {
            e.close();
          }
        }, false);
      }
      return i;
    } else {
      return i;
    }
  }
  var p = i.util.currentScript();
  function d() {
    if (!i.manual) {
      i.highlightAll();
    }
  }
  if (p) {
    i.filename = p.src;
    if (p.hasAttribute("data-manual")) {
      i.manual = true;
    }
  }
  if (!i.manual) {
    var h = document.readyState;
    if (h === "loading" || h === "interactive" && p && p.defer) {
      document.addEventListener("DOMContentLoaded", d);
    } else if (window.requestAnimationFrame) {
      window.requestAnimationFrame(d);
    } else {
      window.setTimeout(d, 16);
    }
  }
  return i;
}(typeof window != "undefined" ? window : typeof WorkerGlobalScope != "undefined" && self instanceof WorkerGlobalScope ? self : {});
module.exports &&= r;
if (require.g !== undefined) {
  require.g.Prism = r;
}