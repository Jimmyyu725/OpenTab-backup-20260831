Prism.languages.graphql = {
  comment: /#.*/,
  description: {
    pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
    greedy: true,
    alias: "string",
    inside: {
      "language-markdown": {
        pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
        lookbehind: true,
        inside: Prism.languages.markdown
      }
    }
  },
  string: {
    pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,
    greedy: true
  },
  number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
  boolean: /\b(?:false|true)\b/,
  variable: /\$[a-z_]\w*/i,
  directive: {
    pattern: /@[a-z_]\w*/i,
    alias: "function"
  },
  "attr-name": {
    pattern: /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
    greedy: true
  },
  "atom-input": {
    pattern: /\b[A-Z]\w*Input\b/,
    alias: "class-name"
  },
  scalar: /\b(?:Boolean|Float|ID|Int|String)\b/,
  constant: /\b[A-Z][A-Z_\d]*\b/,
  "class-name": {
    pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,
    lookbehind: true
  },
  fragment: {
    pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
    lookbehind: true,
    alias: "function"
  },
  "definition-mutation": {
    pattern: /(\bmutation\s+)[a-zA-Z_]\w*/,
    lookbehind: true,
    alias: "function"
  },
  "definition-query": {
    pattern: /(\bquery\s+)[a-zA-Z_]\w*/,
    lookbehind: true,
    alias: "function"
  },
  keyword: /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
  operator: /[!=|&]|\.{3}/,
  "property-query": /\w+(?=\s*\()/,
  object: /\w+(?=\s*\{)/,
  punctuation: /[!(){}\[\]:=,]/,
  property: /\w+/
};
Prism.hooks.add("after-tokenize", function (e) {
  if (e.language === "graphql") {
    for (var t = e.tokens.filter(function (e) {
        return typeof e != "string" && e.type !== "comment" && e.type !== "scalar";
      }), n = 0; n < t.length;) {
      var r = t[n++];
      if (r.type === "keyword" && r.content === "mutation") {
        var i = [];
        if (p(["definition-mutation", "punctuation"]) && u(1).content === "(") {
          n += 2;
          var a = d(/^\($/, /^\)$/);
          if (a === -1) {
            continue;
          }
          for (; n < a; n++) {
            var o = u(0);
            if (o.type === "variable") {
              h(o, "variable-input");
              i.push(o.content);
            }
          }
          n = a + 1;
        }
        if (p(["punctuation", "property-query"]) && u(0).content === "{" && (n++, h(u(0), "property-mutation"), i.length > 0)) {
          var s = d(/^\{$/, /^\}$/);
          if (s === -1) {
            continue;
          }
          for (var l = n; l < s; l++) {
            var c = t[l];
            if (c.type === "variable" && i.indexOf(c.content) >= 0) {
              h(c, "variable-input");
            }
          }
        }
      }
    }
  }
  function u(e) {
    return t[n + e];
  }
  function p(e, t) {
    t = t || 0;
    for (var n = 0; n < e.length; n++) {
      var r = u(n + t);
      if (!r || r.type !== e[n]) {
        return false;
      }
    }
    return true;
  }
  function d(e, r) {
    var i = 1;
    for (var a = n; a < t.length; a++) {
      var o = t[a];
      var s = o.content;
      if (o.type === "punctuation" && typeof s == "string") {
        if (e.test(s)) {
          i++;
        } else if (r.test(s) && --i === 0) {
          return a;
        }
      }
    }
    return -1;
  }
  function h(e, t) {
    var n = e.alias;
    if (n) {
      if (!Array.isArray(n)) {
        e.alias = n = [n];
      }
    } else {
      e.alias = n = [];
    }
    n.push(t);
  }
});