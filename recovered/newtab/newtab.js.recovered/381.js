const {
  MAX_SAFE_COMPONENT_LENGTH: r,
  MAX_SAFE_BUILD_LENGTH: i,
  MAX_LENGTH: o
} = require("./390.js");
const a = require("./391.js");
const s = (exports = module.exports = {}).re = [];
const c = exports.safeRe = [];
const u = exports.src = [];
const l = exports.t = {};
let f = 0;
const h = [["\\s", 1], ["\\d", o], ["[a-zA-Z0-9-]", i]];
const p = (t, e, n) => {
  const r = (t => {
    for (const [e, n] of h) {
      t = t.split(e + "*").join(`${e}{0,${n}}`).split(e + "+").join(`${e}{1,${n}}`);
    }
    return t;
  })(e);
  const i = f++;
  a(t, i, e);
  l[t] = i;
  u[i] = e;
  s[i] = new RegExp(e, n ? "g" : undefined);
  c[i] = new RegExp(r, n ? "g" : undefined);
};
p("NUMERICIDENTIFIER", "0|[1-9]\\d*");
p("NUMERICIDENTIFIERLOOSE", "\\d+");
p("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*");
p("MAINVERSION", `(${u[l.NUMERICIDENTIFIER]})\\.(${u[l.NUMERICIDENTIFIER]})\\.(${u[l.NUMERICIDENTIFIER]})`);
p("MAINVERSIONLOOSE", `(${u[l.NUMERICIDENTIFIERLOOSE]})\\.(${u[l.NUMERICIDENTIFIERLOOSE]})\\.(${u[l.NUMERICIDENTIFIERLOOSE]})`);
p("PRERELEASEIDENTIFIER", `(?:${u[l.NUMERICIDENTIFIER]}|${u[l.NONNUMERICIDENTIFIER]})`);
p("PRERELEASEIDENTIFIERLOOSE", `(?:${u[l.NUMERICIDENTIFIERLOOSE]}|${u[l.NONNUMERICIDENTIFIER]})`);
p("PRERELEASE", `(?:-(${u[l.PRERELEASEIDENTIFIER]}(?:\\.${u[l.PRERELEASEIDENTIFIER]})*))`);
p("PRERELEASELOOSE", `(?:-?(${u[l.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${u[l.PRERELEASEIDENTIFIERLOOSE]})*))`);
p("BUILDIDENTIFIER", "[a-zA-Z0-9-]+");
p("BUILD", `(?:\\+(${u[l.BUILDIDENTIFIER]}(?:\\.${u[l.BUILDIDENTIFIER]})*))`);
p("FULLPLAIN", `v?${u[l.MAINVERSION]}${u[l.PRERELEASE]}?${u[l.BUILD]}?`);
p("FULL", `^${u[l.FULLPLAIN]}$`);
p("LOOSEPLAIN", `[v=\\s]*${u[l.MAINVERSIONLOOSE]}${u[l.PRERELEASELOOSE]}?${u[l.BUILD]}?`);
p("LOOSE", `^${u[l.LOOSEPLAIN]}$`);
p("GTLT", "((?:<|>)?=?)");
p("XRANGEIDENTIFIERLOOSE", u[l.NUMERICIDENTIFIERLOOSE] + "|x|X|\\*");
p("XRANGEIDENTIFIER", u[l.NUMERICIDENTIFIER] + "|x|X|\\*");
p("XRANGEPLAIN", `[v=\\s]*(${u[l.XRANGEIDENTIFIER]})(?:\\.(${u[l.XRANGEIDENTIFIER]})(?:\\.(${u[l.XRANGEIDENTIFIER]})(?:${u[l.PRERELEASE]})?${u[l.BUILD]}?)?)?`);
p("XRANGEPLAINLOOSE", `[v=\\s]*(${u[l.XRANGEIDENTIFIERLOOSE]})(?:\\.(${u[l.XRANGEIDENTIFIERLOOSE]})(?:\\.(${u[l.XRANGEIDENTIFIERLOOSE]})(?:${u[l.PRERELEASELOOSE]})?${u[l.BUILD]}?)?)?`);
p("XRANGE", `^${u[l.GTLT]}\\s*${u[l.XRANGEPLAIN]}$`);
p("XRANGELOOSE", `^${u[l.GTLT]}\\s*${u[l.XRANGEPLAINLOOSE]}$`);
p("COERCEPLAIN", `(^|[^\\d])(\\d{1,${r}})(?:\\.(\\d{1,${r}}))?(?:\\.(\\d{1,${r}}))?`);
p("COERCE", u[l.COERCEPLAIN] + "(?:$|[^\\d])");
p("COERCEFULL", `${u[l.COERCEPLAIN]}(?:${u[l.PRERELEASE]})?(?:${u[l.BUILD]})?(?:$|[^\\d])`);
p("COERCERTL", u[l.COERCE], true);
p("COERCERTLFULL", u[l.COERCEFULL], true);
p("LONETILDE", "(?:~>?)");
p("TILDETRIM", `(\\s*)${u[l.LONETILDE]}\\s+`, true);
exports.tildeTrimReplace = "$1~";
p("TILDE", `^${u[l.LONETILDE]}${u[l.XRANGEPLAIN]}$`);
p("TILDELOOSE", `^${u[l.LONETILDE]}${u[l.XRANGEPLAINLOOSE]}$`);
p("LONECARET", "(?:\\^)");
p("CARETTRIM", `(\\s*)${u[l.LONECARET]}\\s+`, true);
exports.caretTrimReplace = "$1^";
p("CARET", `^${u[l.LONECARET]}${u[l.XRANGEPLAIN]}$`);
p("CARETLOOSE", `^${u[l.LONECARET]}${u[l.XRANGEPLAINLOOSE]}$`);
p("COMPARATORLOOSE", `^${u[l.GTLT]}\\s*(${u[l.LOOSEPLAIN]})$|^$`);
p("COMPARATOR", `^${u[l.GTLT]}\\s*(${u[l.FULLPLAIN]})$|^$`);
p("COMPARATORTRIM", `(\\s*)${u[l.GTLT]}\\s*(${u[l.LOOSEPLAIN]}|${u[l.XRANGEPLAIN]})`, true);
exports.comparatorTrimReplace = "$1$2$3";
p("HYPHENRANGE", `^\\s*(${u[l.XRANGEPLAIN]})\\s+-\\s+(${u[l.XRANGEPLAIN]})\\s*$`);
p("HYPHENRANGELOOSE", `^\\s*(${u[l.XRANGEPLAINLOOSE]})\\s+-\\s+(${u[l.XRANGEPLAINLOOSE]})\\s*$`);
p("STAR", "(<|>)?=?\\s*\\*");
p("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
p("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");