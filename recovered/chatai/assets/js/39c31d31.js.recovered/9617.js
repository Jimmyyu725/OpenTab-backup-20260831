Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require(/*webcrack:missing*/"./2370.js");
var o = require(/*webcrack:missing*/"./8398.js");
var r = require(/*webcrack:missing*/"./4209.js");
function c(e) {
  if (e && e.__esModule) {
    return e;
  }
  var t = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (n) {
      t[n] = e[n];
    });
  }
  t.default = e;
  return Object.freeze(t);
}
var u = c(o);
const s = Object.create(null);
function l(e, t) {
  if (!r.isString(e)) {
    if (!e.nodeType) {
      return r.NOOP;
    }
    e = e.innerHTML;
  }
  const n = e;
  const o = s[n];
  if (o) {
    return o;
  }
  if (e[0] === "#") {
    const t = document.querySelector(e);
    e = t ? t.innerHTML : "";
  }
  const c = r.extend({
    hoistStatic: true,
    onError: undefined,
    onWarn: r.NOOP
  }, t);
  if (!c.isCustomElement && typeof customElements != "undefined") {
    c.isCustomElement = e => !!customElements.get(e);
  }
  const {
    code: l
  } = i.compile(e, c);
  const f = new Function("Vue", l)(u);
  f._rc = true;
  return s[n] = f;
}
o.registerRuntimeCompiler(l);
Object.keys(o).forEach(function (e) {
  if (e !== "default") {
    exports[e] = o[e];
  }
});
exports.compile = l;