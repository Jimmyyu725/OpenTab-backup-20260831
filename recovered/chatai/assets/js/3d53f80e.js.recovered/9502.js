(function (e) {
  var t = /\\[\r\n](?:\s|\\[\r\n]|#.*(?!.))*(?![\s#]|\\[\r\n])/.source;
  var n = /(?:[ \t]+(?![ \t])(?:<SP_BS>)?|<SP_BS>)/.source.replace(/<SP_BS>/g, function () {
    return t;
  });
  var r = /"(?:[^"\\\r\n]|\\(?:\r\n|[\s\S]))*"|'(?:[^'\\\r\n]|\\(?:\r\n|[\s\S]))*'/.source;
  var i = /--[\w-]+=(?:<STR>|(?!["'])(?:[^\s\\]|\\.)+)/.source.replace(/<STR>/g, function () {
    return r;
  });
  var a = {
    pattern: RegExp(r),
    greedy: true
  };
  var o = {
    pattern: /(^[ \t]*)#.*/m,
    lookbehind: true,
    greedy: true
  };
  function s(e, t) {
    e = e.replace(/<OPT>/g, function () {
      return i;
    }).replace(/<SP>/g, function () {
      return n;
    });
    return RegExp(e, t);
  }
  e.languages.docker = {
    instruction: {
      pattern: /(^[ \t]*)(?:ADD|ARG|CMD|COPY|ENTRYPOINT|ENV|EXPOSE|FROM|HEALTHCHECK|LABEL|MAINTAINER|ONBUILD|RUN|SHELL|STOPSIGNAL|USER|VOLUME|WORKDIR)(?=\s)(?:\\.|[^\r\n\\])*(?:\\$(?:\s|#.*$)*(?![\s#])(?:\\.|[^\r\n\\])*)*/im,
      lookbehind: true,
      greedy: true,
      inside: {
        options: {
          pattern: s(/(^(?:ONBUILD<SP>)?\w+<SP>)<OPT>(?:<SP><OPT>)*/.source, "i"),
          lookbehind: true,
          greedy: true,
          inside: {
            property: {
              pattern: /(^|\s)--[\w-]+/,
              lookbehind: true
            },
            string: [a, {
              pattern: /(=)(?!["'])(?:[^\s\\]|\\.)+/,
              lookbehind: true
            }],
            operator: /\\$/m,
            punctuation: /=/
          }
        },
        keyword: [{
          pattern: s(/(^(?:ONBUILD<SP>)?HEALTHCHECK<SP>(?:<OPT><SP>)*)(?:CMD|NONE)\b/.source, "i"),
          lookbehind: true,
          greedy: true
        }, {
          pattern: s(/(^(?:ONBUILD<SP>)?FROM<SP>(?:<OPT><SP>)*(?!--)[^ \t\\]+<SP>)AS/.source, "i"),
          lookbehind: true,
          greedy: true
        }, {
          pattern: s(/(^ONBUILD<SP>)\w+/.source, "i"),
          lookbehind: true,
          greedy: true
        }, {
          pattern: /^\w+/,
          greedy: true
        }],
        comment: o,
        string: a,
        variable: /\$(?:\w+|\{[^{}"'\\]*\})/,
        operator: /\\$/m
      }
    },
    comment: o
  };
  e.languages.dockerfile = e.languages.docker;
})(Prism);