(function (e) {
  function t(e, t) {
    return "___" + e.toUpperCase() + t + "___";
  }
  Object.defineProperties(e.languages["markup-templating"] = {}, {
    buildPlaceholders: {
      value: function (n, r, i, a) {
        if (n.language === r) {
          var o = n.tokenStack = [];
          n.code = n.code.replace(i, function (e) {
            if (typeof a == "function" && !a(e)) {
              return e;
            }
            for (var i, s = o.length; n.code.indexOf(i = t(r, s)) !== -1;) {
              ++s;
            }
            o[s] = e;
            return i;
          });
          n.grammar = e.languages.markup;
        }
      }
    },
    tokenizePlaceholders: {
      value: function (n, r) {
        if (n.language === r && n.tokenStack) {
          n.grammar = e.languages[r];
          var i = 0;
          var a = Object.keys(n.tokenStack);
          (function o(s) {
            for (var l = 0; l < s.length && !(i >= a.length); l++) {
              var c = s[l];
              if (typeof c == "string" || c.content && typeof c.content == "string") {
                var u = a[i];
                var p = n.tokenStack[u];
                var d = typeof c == "string" ? c : c.content;
                var h = t(r, u);
                var g = d.indexOf(h);
                if (g > -1) {
                  ++i;
                  var f = d.substring(0, g);
                  var m = new e.Token(r, e.tokenize(p, n.grammar), "language-" + r, p);
                  var b = d.substring(g + h.length);
                  var x = [];
                  if (f) {
                    x.push.apply(x, o([f]));
                  }
                  x.push(m);
                  if (b) {
                    x.push.apply(x, o([b]));
                  }
                  if (typeof c == "string") {
                    s.splice.apply(s, [l, 1].concat(x));
                  } else {
                    c.content = x;
                  }
                }
              } else if (c.content) {
                o(c.content);
              }
            }
            return s;
          })(n.tokens);
        }
      }
    }
  });
})(Prism);