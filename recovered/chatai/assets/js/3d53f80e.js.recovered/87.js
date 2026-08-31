(function (e) {
  function t(e) {
    return RegExp(/(\()/.source + "(?:" + e + ")" + /(?=[\s\)])/.source);
  }
  function n(e) {
    return RegExp(/([\s([])/.source + "(?:" + e + ")" + /(?=[\s)])/.source);
  }
  var r = /(?!\d)[-+*/~!@$%^=<>{}\w]+/.source;
  var i = "&" + r;
  var a = "(\\()";
  var o = /(?:[^()]|\((?:[^()]|\((?:[^()]|\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\))*\))*\))*/.source;
  var s = {
    heading: {
      pattern: /;;;.*/,
      alias: ["comment", "title"]
    },
    comment: /;.*/,
    string: {
      pattern: /"(?:[^"\\]|\\.)*"/,
      greedy: true,
      inside: {
        argument: /[-A-Z]+(?=[.,\s])/,
        symbol: RegExp("`" + r + "'")
      }
    },
    "quoted-symbol": {
      pattern: RegExp("#?'" + r),
      alias: ["variable", "symbol"]
    },
    "lisp-property": {
      pattern: RegExp(":" + r),
      alias: "property"
    },
    splice: {
      pattern: RegExp(",@?" + r),
      alias: ["symbol", "variable"]
    },
    keyword: [{
      pattern: RegExp("(\\()(?:and|(?:cl-)?letf|cl-loop|cond|cons|error|if|(?:lexical-)?let\\*?|message|not|null|or|provide|require|setq|unless|use-package|when|while)(?=\\s)"),
      lookbehind: true
    }, {
      pattern: RegExp("(\\()(?:append|by|collect|concat|do|finally|for|in|return)(?=\\s)"),
      lookbehind: true
    }],
    declare: {
      pattern: t(/declare/.source),
      lookbehind: true,
      alias: "keyword"
    },
    interactive: {
      pattern: t(/interactive/.source),
      lookbehind: true,
      alias: "keyword"
    },
    boolean: {
      pattern: n(/nil|t/.source),
      lookbehind: true
    },
    number: {
      pattern: n(/[-+]?\d+(?:\.\d*)?/.source),
      lookbehind: true
    },
    defvar: {
      pattern: RegExp("(\\()def(?:const|custom|group|var)\\s+" + r),
      lookbehind: true,
      inside: {
        keyword: /^def[a-z]+/,
        variable: RegExp(r)
      }
    },
    defun: {
      pattern: RegExp(a + /(?:cl-)?(?:defmacro|defun\*?)\s+/.source + r + /\s+\(/.source + o + /\)/.source),
      lookbehind: true,
      greedy: true,
      inside: {
        keyword: /^(?:cl-)?def\S+/,
        arguments: null,
        function: {
          pattern: RegExp("(^\\s)" + r),
          lookbehind: true
        },
        punctuation: /[()]/
      }
    },
    lambda: {
      pattern: RegExp("(\\()lambda\\s+\\(\\s*(?:&?" + r + "(?:\\s+&?" + r + ")*\\s*)?\\)"),
      lookbehind: true,
      greedy: true,
      inside: {
        keyword: /^lambda/,
        arguments: null,
        punctuation: /[()]/
      }
    },
    car: {
      pattern: RegExp(a + r),
      lookbehind: true
    },
    punctuation: [/(?:['`,]?\(|[)\[\]])/, {
      pattern: /(\s)\.(?=\s)/,
      lookbehind: true
    }]
  };
  var l = {
    "lisp-marker": RegExp(i),
    varform: {
      pattern: RegExp(/\(/.source + r + /\s+(?=\S)/.source + o + /\)/.source),
      inside: s
    },
    argument: {
      pattern: RegExp(/(^|[\s(])/.source + r),
      lookbehind: true,
      alias: "variable"
    },
    rest: s
  };
  var c = "\\S+(?:\\s+\\S+)*";
  var u = {
    pattern: RegExp(a + o + "(?=\\))"),
    lookbehind: true,
    inside: {
      "rest-vars": {
        pattern: RegExp("&(?:body|rest)\\s+" + c),
        inside: l
      },
      "other-marker-vars": {
        pattern: RegExp("&(?:aux|optional)\\s+" + c),
        inside: l
      },
      keys: {
        pattern: RegExp("&key\\s+" + c + "(?:\\s+&allow-other-keys)?"),
        inside: l
      },
      argument: {
        pattern: RegExp(r),
        alias: "variable"
      },
      punctuation: /[()]/
    }
  };
  s.lambda.inside.arguments = u;
  s.defun.inside.arguments = e.util.clone(u);
  s.defun.inside.arguments.inside.sublist = u;
  e.languages.lisp = s;
  e.languages.elisp = s;
  e.languages.emacs = s;
  e.languages["emacs-lisp"] = s;
})(Prism);