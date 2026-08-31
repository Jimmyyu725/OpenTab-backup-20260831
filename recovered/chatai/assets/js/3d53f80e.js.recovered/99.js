(function (e) {
  function t(e, t) {
    return e.replace(/<<(\d+)>>/g, function (e, n) {
      return "(?:" + t[+n] + ")";
    });
  }
  function n(e, n, r) {
    return RegExp(t(e, n), r || "");
  }
  function r(e, t) {
    for (var n = 0; n < t; n++) {
      e = e.replace(/<<self>>/g, function () {
        return "(?:" + e + ")";
      });
    }
    return e.replace(/<<self>>/g, "[^\\s\\S]");
  }
  var i = "bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void";
  var a = "class enum interface record struct";
  var o = "add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)";
  var s = "abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield";
  function l(e) {
    return "\\b(?:" + e.trim().replace(/ /g, "|") + ")\\b";
  }
  var c = l(a);
  var u = RegExp(l(i + " " + a + " " + o + " " + s));
  var p = l(a + " " + o + " " + s);
  var d = l(i + " " + a + " " + s);
  var h = r(/<(?:[^<>;=+\-*/%&|^]|<<self>>)*>/.source, 2);
  var g = r(/\((?:[^()]|<<self>>)*\)/.source, 2);
  var f = /@?\b[A-Za-z_]\w*\b/.source;
  var m = t(/<<0>>(?:\s*<<1>>)?/.source, [f, h]);
  var b = t(/(?!<<0>>)<<1>>(?:\s*\.\s*<<1>>)*/.source, [p, m]);
  var x = /\[\s*(?:,\s*)*\]/.source;
  var y = t(/<<0>>(?:\s*(?:\?\s*)?<<1>>)*(?:\s*\?)?/.source, [b, x]);
  var v = t(/[^,()<>[\];=+\-*/%&|^]|<<0>>|<<1>>|<<2>>/.source, [h, g, x]);
  var w = t(/\(<<0>>+(?:,<<0>>+)+\)/.source, [v]);
  var A = t(/(?:<<0>>|<<1>>)(?:\s*(?:\?\s*)?<<2>>)*(?:\s*\?)?/.source, [w, b, x]);
  var k = {
    keyword: u,
    punctuation: /[<>()?,.:[\]]/
  };
  var S = /'(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'/.source;
  var C = /"(?:\\.|[^\\"\r\n])*"/.source;
  var E = /@"(?:""|\\[\s\S]|[^\\"])*"(?!")/.source;
  e.languages.csharp = e.languages.extend("clike", {
    string: [{
      pattern: n(/(^|[^$\\])<<0>>/.source, [E]),
      lookbehind: true,
      greedy: true
    }, {
      pattern: n(/(^|[^@$\\])<<0>>/.source, [C]),
      lookbehind: true,
      greedy: true
    }],
    "class-name": [{
      pattern: n(/(\busing\s+static\s+)<<0>>(?=\s*;)/.source, [b]),
      lookbehind: true,
      inside: k
    }, {
      pattern: n(/(\busing\s+<<0>>\s*=\s*)<<1>>(?=\s*;)/.source, [f, A]),
      lookbehind: true,
      inside: k
    }, {
      pattern: n(/(\busing\s+)<<0>>(?=\s*=)/.source, [f]),
      lookbehind: true
    }, {
      pattern: n(/(\b<<0>>\s+)<<1>>/.source, [c, m]),
      lookbehind: true,
      inside: k
    }, {
      pattern: n(/(\bcatch\s*\(\s*)<<0>>/.source, [b]),
      lookbehind: true,
      inside: k
    }, {
      pattern: n(/(\bwhere\s+)<<0>>/.source, [f]),
      lookbehind: true
    }, {
      pattern: n(/(\b(?:is(?:\s+not)?|as)\s+)<<0>>/.source, [y]),
      lookbehind: true,
      inside: k
    }, {
      pattern: n(/\b<<0>>(?=\s+(?!<<1>>|with\s*\{)<<2>>(?:\s*[=,;:{)\]]|\s+(?:in|when)\b))/.source, [A, d, f]),
      inside: k
    }],
    keyword: u,
    number: /(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,
    operator: />>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,
    punctuation: /\?\.?|::|[{}[\];(),.:]/
  });
  e.languages.insertBefore("csharp", "number", {
    range: {
      pattern: /\.\./,
      alias: "operator"
    }
  });
  e.languages.insertBefore("csharp", "punctuation", {
    "named-parameter": {
      pattern: n(/([(,]\s*)<<0>>(?=\s*:)/.source, [f]),
      lookbehind: true,
      alias: "punctuation"
    }
  });
  e.languages.insertBefore("csharp", "class-name", {
    namespace: {
      pattern: n(/(\b(?:namespace|using)\s+)<<0>>(?:\s*\.\s*<<0>>)*(?=\s*[;{])/.source, [f]),
      lookbehind: true,
      inside: {
        punctuation: /\./
      }
    },
    "type-expression": {
      pattern: n(/(\b(?:default|sizeof|typeof)\s*\(\s*(?!\s))(?:[^()\s]|\s(?!\s)|<<0>>)*(?=\s*\))/.source, [g]),
      lookbehind: true,
      alias: "class-name",
      inside: k
    },
    "return-type": {
      pattern: n(/<<0>>(?=\s+(?:<<1>>\s*(?:=>|[({]|\.\s*this\s*\[)|this\s*\[))/.source, [A, b]),
      inside: k,
      alias: "class-name"
    },
    "constructor-invocation": {
      pattern: n(/(\bnew\s+)<<0>>(?=\s*[[({])/.source, [A]),
      lookbehind: true,
      inside: k,
      alias: "class-name"
    },
    "generic-method": {
      pattern: n(/<<0>>\s*<<1>>(?=\s*\()/.source, [f, h]),
      inside: {
        function: n(/^<<0>>/.source, [f]),
        generic: {
          pattern: RegExp(h),
          alias: "class-name",
          inside: k
        }
      }
    },
    "type-list": {
      pattern: n(/\b((?:<<0>>\s+<<1>>|record\s+<<1>>\s*<<5>>|where\s+<<2>>)\s*:\s*)(?:<<3>>|<<4>>|<<1>>\s*<<5>>|<<6>>)(?:\s*,\s*(?:<<3>>|<<4>>|<<6>>))*(?=\s*(?:where|[{;]|=>|$))/.source, [c, m, f, A, u.source, g, /\bnew\s*\(\s*\)/.source]),
      lookbehind: true,
      inside: {
        "record-arguments": {
          pattern: n(/(^(?!new\s*\()<<0>>\s*)<<1>>/.source, [m, g]),
          lookbehind: true,
          greedy: true,
          inside: e.languages.csharp
        },
        keyword: u,
        "class-name": {
          pattern: RegExp(A),
          greedy: true,
          inside: k
        },
        punctuation: /[,()]/
      }
    },
    preprocessor: {
      pattern: /(^[\t ]*)#.*/m,
      lookbehind: true,
      alias: "property",
      inside: {
        directive: {
          pattern: /(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,
          lookbehind: true,
          alias: "keyword"
        }
      }
    }
  });
  var I = C + "|" + S;
  var T = t(/\/(?![*/])|\/\/[^\r\n]*[\r\n]|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>/.source, [I]);
  var D = r(t(/[^"'/()]|<<0>>|\(<<self>>*\)/.source, [T]), 2);
  var _ = /\b(?:assembly|event|field|method|module|param|property|return|type)\b/.source;
  var M = t(/<<0>>(?:\s*\(<<1>>*\))?/.source, [b, D]);
  e.languages.insertBefore("csharp", "class-name", {
    attribute: {
      pattern: n(/((?:^|[^\s\w>)?])\s*\[\s*)(?:<<0>>\s*:\s*)?<<1>>(?:\s*,\s*<<1>>)*(?=\s*\])/.source, [_, M]),
      lookbehind: true,
      greedy: true,
      inside: {
        target: {
          pattern: n(/^<<0>>(?=\s*:)/.source, [_]),
          alias: "keyword"
        },
        "attribute-arguments": {
          pattern: n(/\(<<0>>*\)/.source, [D]),
          inside: e.languages.csharp
        },
        "class-name": {
          pattern: RegExp(b),
          inside: {
            punctuation: /\./
          }
        },
        punctuation: /[:,]/
      }
    }
  });
  var F = /:[^}\r\n]+/.source;
  var z = r(t(/[^"'/()]|<<0>>|\(<<self>>*\)/.source, [T]), 2);
  var R = t(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source, [z, F]);
  var B = r(t(/[^"'/()]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>|\(<<self>>*\)/.source, [I]), 2);
  var N = t(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source, [B, F]);
  function L(t, r) {
    return {
      interpolation: {
        pattern: n(/((?:^|[^{])(?:\{\{)*)<<0>>/.source, [t]),
        lookbehind: true,
        inside: {
          "format-string": {
            pattern: n(/(^\{(?:(?![}:])<<0>>)*)<<1>>(?=\}$)/.source, [r, F]),
            lookbehind: true,
            inside: {
              punctuation: /^:/
            }
          },
          punctuation: /^\{|\}$/,
          expression: {
            pattern: /[\s\S]+/,
            alias: "language-csharp",
            inside: e.languages.csharp
          }
        }
      },
      string: /[\s\S]+/
    };
  }
  e.languages.insertBefore("csharp", "string", {
    "interpolation-string": [{
      pattern: n(/(^|[^\\])(?:\$@|@\$)"(?:""|\\[\s\S]|\{\{|<<0>>|[^\\{"])*"/.source, [R]),
      lookbehind: true,
      greedy: true,
      inside: L(R, z)
    }, {
      pattern: n(/(^|[^@\\])\$"(?:\\.|\{\{|<<0>>|[^\\"{])*"/.source, [N]),
      lookbehind: true,
      greedy: true,
      inside: L(N, B)
    }],
    char: {
      pattern: RegExp(S),
      greedy: true
    }
  });
  e.languages.dotnet = e.languages.cs = e.languages.csharp;
})(Prism);