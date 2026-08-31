(function (e) {
  var t = e.util.clone(e.languages.javascript);
  var n = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source;
  var r = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source;
  var i = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
  function a(e, t) {
    e = e.replace(/<S>/g, function () {
      return n;
    }).replace(/<BRACES>/g, function () {
      return r;
    }).replace(/<SPREAD>/g, function () {
      return i;
    });
    return RegExp(e, t);
  }
  i = a(i).source;
  e.languages.jsx = e.languages.extend("markup", t);
  e.languages.jsx.tag.pattern = a(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source);
  e.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/;
  e.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/;
  e.languages.jsx.tag.inside.tag.inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/;
  e.languages.jsx.tag.inside.comment = t.comment;
  e.languages.insertBefore("inside", "attr-name", {
    spread: {
      pattern: a(/<SPREAD>/.source),
      inside: e.languages.jsx
    }
  }, e.languages.jsx.tag);
  e.languages.insertBefore("inside", "special-attr", {
    script: {
      pattern: a(/=<BRACES>/.source),
      alias: "language-javascript",
      inside: {
        "script-punctuation": {
          pattern: /^=(?=\{)/,
          alias: "punctuation"
        },
        rest: e.languages.jsx
      }
    }
  }, e.languages.jsx.tag);
  function o(e) {
    if (e) {
      if (typeof e == "string") {
        return e;
      } else if (typeof e.content == "string") {
        return e.content;
      } else {
        return e.content.map(o).join("");
      }
    } else {
      return "";
    }
  }
  function s(t) {
    var n = [];
    for (var r = 0; r < t.length; r++) {
      var i = t[r];
      var a = false;
      if (typeof i != "string") {
        if (i.type === "tag" && i.content[0] && i.content[0].type === "tag") {
          if (i.content[0].content[0].content === "</") {
            if (n.length > 0 && n[n.length - 1].tagName === o(i.content[0].content[1])) {
              n.pop();
            }
          } else if (i.content[i.content.length - 1].content !== "/>") {
            n.push({
              tagName: o(i.content[0].content[1]),
              openedBraces: 0
            });
          }
        } else if (n.length > 0 && i.type === "punctuation" && i.content === "{") {
          n[n.length - 1].openedBraces++;
        } else if (n.length > 0 && n[n.length - 1].openedBraces > 0 && i.type === "punctuation" && i.content === "}") {
          n[n.length - 1].openedBraces--;
        } else {
          a = true;
        }
      }
      if ((a || typeof i == "string") && n.length > 0 && n[n.length - 1].openedBraces === 0) {
        var l = o(i);
        if (r < t.length - 1 && (typeof t[r + 1] == "string" || t[r + 1].type === "plain-text")) {
          l += o(t[r + 1]);
          t.splice(r + 1, 1);
        }
        if (r > 0 && (typeof t[r - 1] == "string" || t[r - 1].type === "plain-text")) {
          l = o(t[r - 1]) + l;
          t.splice(r - 1, 1);
          r--;
        }
        t[r] = new e.Token("plain-text", l, null, l);
      }
      if (i.content && typeof i.content != "string") {
        s(i.content);
      }
    }
  }
  e.hooks.add("after-tokenize", function (e) {
    if (e.language === "jsx" || e.language === "tsx") {
      s(e.tokens);
    }
  });
})(Prism);