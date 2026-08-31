export let generateCodeFrame = r.generateCodeFrame;
import * as r from /*webcrack:missing*/"./4209.js";
function i(e) {
  throw e;
}
function a(e) {}
export function createCompilerError(e, t, n, r) {
  const i = new SyntaxError(String(e));
  i.code = e;
  i.loc = t;
  return i;
}
export const FRAGMENT = Symbol("");
export const TELEPORT = Symbol("");
export const SUSPENSE = Symbol("");
export const KEEP_ALIVE = Symbol("");
export const BASE_TRANSITION = Symbol("");
export const OPEN_BLOCK = Symbol("");
export const CREATE_BLOCK = Symbol("");
export const CREATE_ELEMENT_BLOCK = Symbol("");
export const CREATE_VNODE = Symbol("");
export const CREATE_ELEMENT_VNODE = Symbol("");
export const CREATE_COMMENT = Symbol("");
export const CREATE_TEXT = Symbol("");
export const CREATE_STATIC = Symbol("");
export const RESOLVE_COMPONENT = Symbol("");
export const RESOLVE_DYNAMIC_COMPONENT = Symbol("");
export const RESOLVE_DIRECTIVE = Symbol("");
export const RESOLVE_FILTER = Symbol("");
export const WITH_DIRECTIVES = Symbol("");
export const RENDER_LIST = Symbol("");
export const RENDER_SLOT = Symbol("");
export const CREATE_SLOTS = Symbol("");
export const TO_DISPLAY_STRING = Symbol("");
export const MERGE_PROPS = Symbol("");
export const NORMALIZE_CLASS = Symbol("");
export const NORMALIZE_STYLE = Symbol("");
export const NORMALIZE_PROPS = Symbol("");
export const GUARD_REACTIVE_PROPS = Symbol("");
export const TO_HANDLERS = Symbol("");
export const CAMELIZE = Symbol("");
export const CAPITALIZE = Symbol("");
export const TO_HANDLER_KEY = Symbol("");
export const SET_BLOCK_TRACKING = Symbol("");
export const PUSH_SCOPE_ID = Symbol("");
export const POP_SCOPE_ID = Symbol("");
export const WITH_CTX = Symbol("");
export const UNREF = Symbol("");
export const IS_REF = Symbol("");
export const WITH_MEMO = Symbol("");
export const IS_MEMO_SAME = Symbol("");
export const helperNameMap = {
  [FRAGMENT]: "Fragment",
  [TELEPORT]: "Teleport",
  [SUSPENSE]: "Suspense",
  [KEEP_ALIVE]: "KeepAlive",
  [BASE_TRANSITION]: "BaseTransition",
  [OPEN_BLOCK]: "openBlock",
  [CREATE_BLOCK]: "createBlock",
  [CREATE_ELEMENT_BLOCK]: "createElementBlock",
  [CREATE_VNODE]: "createVNode",
  [CREATE_ELEMENT_VNODE]: "createElementVNode",
  [CREATE_COMMENT]: "createCommentVNode",
  [CREATE_TEXT]: "createTextVNode",
  [CREATE_STATIC]: "createStaticVNode",
  [RESOLVE_COMPONENT]: "resolveComponent",
  [RESOLVE_DYNAMIC_COMPONENT]: "resolveDynamicComponent",
  [RESOLVE_DIRECTIVE]: "resolveDirective",
  [RESOLVE_FILTER]: "resolveFilter",
  [WITH_DIRECTIVES]: "withDirectives",
  [RENDER_LIST]: "renderList",
  [RENDER_SLOT]: "renderSlot",
  [CREATE_SLOTS]: "createSlots",
  [TO_DISPLAY_STRING]: "toDisplayString",
  [MERGE_PROPS]: "mergeProps",
  [NORMALIZE_CLASS]: "normalizeClass",
  [NORMALIZE_STYLE]: "normalizeStyle",
  [NORMALIZE_PROPS]: "normalizeProps",
  [GUARD_REACTIVE_PROPS]: "guardReactiveProps",
  [TO_HANDLERS]: "toHandlers",
  [CAMELIZE]: "camelize",
  [CAPITALIZE]: "capitalize",
  [TO_HANDLER_KEY]: "toHandlerKey",
  [SET_BLOCK_TRACKING]: "setBlockTracking",
  [PUSH_SCOPE_ID]: "pushScopeId",
  [POP_SCOPE_ID]: "popScopeId",
  [WITH_CTX]: "withCtx",
  [UNREF]: "unref",
  [IS_REF]: "isRef",
  [WITH_MEMO]: "withMemo",
  [IS_MEMO_SAME]: "isMemoSame"
};
export function registerRuntimeHelpers(e) {
  Object.getOwnPropertySymbols(e).forEach(t => {
    helperNameMap[t] = e[t];
  });
}
export const locStub = {
  source: "",
  start: {
    line: 1,
    column: 1,
    offset: 0
  },
  end: {
    line: 1,
    column: 1,
    offset: 0
  }
};
export function createRoot(e, t = locStub) {
  return {
    type: 0,
    children: e,
    helpers: [],
    components: [],
    directives: [],
    hoists: [],
    imports: [],
    cached: 0,
    temps: 0,
    codegenNode: undefined,
    loc: t
  };
}
export function createVNodeCall(e, t, n, r, i, a, o, s = false, l = false, c = false, u = locStub) {
  if (e) {
    if (s) {
      e.helper(OPEN_BLOCK);
      e.helper(getVNodeBlockHelper(e.inSSR, c));
    } else {
      e.helper(getVNodeHelper(e.inSSR, c));
    }
    if (o) {
      e.helper(WITH_DIRECTIVES);
    }
  }
  return {
    type: 13,
    tag: t,
    props: n,
    children: r,
    patchFlag: i,
    dynamicProps: a,
    directives: o,
    isBlock: s,
    disableTracking: l,
    isComponent: c,
    loc: u
  };
}
export function createArrayExpression(e, t = locStub) {
  return {
    type: 17,
    loc: t,
    elements: e
  };
}
export function createObjectExpression(e, t = locStub) {
  return {
    type: 15,
    loc: t,
    properties: e
  };
}
export function createObjectProperty(e, t) {
  return {
    type: 16,
    loc: locStub,
    key: (0, r.isString)(e) ? createSimpleExpression(e, true) : e,
    value: t
  };
}
export function createSimpleExpression(e, t = false, n = locStub, r = 0) {
  return {
    type: 4,
    loc: n,
    content: e,
    isStatic: t,
    constType: t ? 3 : r
  };
}
export function createInterpolation(e, t) {
  return {
    type: 5,
    loc: t,
    content: (0, r.isString)(e) ? createSimpleExpression(e, false, t) : e
  };
}
export function createCompoundExpression(e, t = locStub) {
  return {
    type: 8,
    loc: t,
    children: e
  };
}
export function createCallExpression(e, t = [], n = locStub) {
  return {
    type: 14,
    loc: n,
    callee: e,
    arguments: t
  };
}
export function createFunctionExpression(e, t, n = false, r = false, i = locStub) {
  return {
    type: 18,
    params: e,
    returns: t,
    newline: n,
    isSlot: r,
    loc: i
  };
}
export function createConditionalExpression(e, t, n, r = true) {
  return {
    type: 19,
    test: e,
    consequent: t,
    alternate: n,
    newline: r,
    loc: locStub
  };
}
export function createCacheExpression(e, t, n = false) {
  return {
    type: 20,
    index: e,
    value: t,
    isVNode: n,
    loc: locStub
  };
}
export function createBlockStatement(e) {
  return {
    type: 21,
    body: e,
    loc: locStub
  };
}
export function createTemplateLiteral(e) {
  return {
    type: 22,
    elements: e,
    loc: locStub
  };
}
export function createIfStatement(e, t, n) {
  return {
    type: 23,
    test: e,
    consequent: t,
    alternate: n,
    loc: locStub
  };
}
export function createAssignmentExpression(e, t) {
  return {
    type: 24,
    left: e,
    right: t,
    loc: locStub
  };
}
export function createSequenceExpression(e) {
  return {
    type: 25,
    expressions: e,
    loc: locStub
  };
}
export function createReturnStatement(e) {
  return {
    type: 26,
    returns: e,
    loc: locStub
  };
}
export const isStaticExp = e => e.type === 4 && e.isStatic;
export const isBuiltInType = (e, t) => e === t || e === (0, r.hyphenate)(t);
export function isCoreComponent(e) {
  if (isBuiltInType(e, "Teleport")) {
    return TELEPORT;
  } else if (isBuiltInType(e, "Suspense")) {
    return SUSPENSE;
  } else if (isBuiltInType(e, "KeepAlive")) {
    return KEEP_ALIVE;
  } else if (isBuiltInType(e, "BaseTransition")) {
    return BASE_TRANSITION;
  } else {
    return undefined;
  }
}
const me = /^\d|[^\$\w]/;
export const isSimpleIdentifier = e => !me.test(e);
const xe = /[A-Za-z_$\xA0-\uFFFF]/;
const ye = /[\.\?\w$\xA0-\uFFFF]/;
const ve = /\s+[.[]\s*|\s*[.[]\s+/g;
export const isMemberExpressionBrowser = e => {
  e = e.trim().replace(ve, e => e.trim());
  let t = 0;
  let n = [];
  let r = 0;
  let i = 0;
  let a = null;
  for (let o = 0; o < e.length; o++) {
    const s = e.charAt(o);
    switch (t) {
      case 0:
        if (s === "[") {
          n.push(t);
          t = 1;
          r++;
        } else if (s === "(") {
          n.push(t);
          t = 2;
          i++;
        } else if (!(o === 0 ? xe : ye).test(s)) {
          return false;
        }
        break;
      case 1:
        if (s === "'" || s === "\"" || s === "`") {
          n.push(t);
          t = 3;
          a = s;
        } else if (s === "[") {
          r++;
        } else if (s === "]") {
          if (! --r) {
            t = n.pop();
          }
        }
        break;
      case 2:
        if (s === "'" || s === "\"" || s === "`") {
          n.push(t);
          t = 3;
          a = s;
        } else if (s === "(") {
          i++;
        } else if (s === ")") {
          if (o === e.length - 1) {
            return false;
          }
          if (! --i) {
            t = n.pop();
          }
        }
        break;
      case 3:
        if (s === a) {
          t = n.pop();
          a = null;
        }
    }
  }
  return !r && !i;
};
export const isMemberExpressionNode = r.NOOP;
export const isMemberExpression = isMemberExpressionBrowser;
export function getInnerRange(e, t, n) {
  const r = {
    source: e.source.slice(t, t + n),
    start: advancePositionWithClone(e.start, e.source, t),
    end: e.end
  };
  if (n != null) {
    r.end = advancePositionWithClone(e.start, e.source, t + n);
  }
  return r;
}
export function advancePositionWithClone(e, t, n = t.length) {
  return advancePositionWithMutation((0, r.extend)({}, e), t, n);
}
export function advancePositionWithMutation(e, t, n = t.length) {
  let r = 0;
  let i = -1;
  for (let e = 0; e < n; e++) {
    if (t.charCodeAt(e) === 10) {
      r++;
      i = e;
    }
  }
  e.offset += n;
  e.line += r;
  e.column = i === -1 ? e.column + n : n - i;
  return e;
}
export function assert(e, t) {
  if (!e) {
    throw new Error(t || "unexpected compiler condition");
  }
}
export function findDir(e, t, n = false) {
  for (let i = 0; i < e.props.length; i++) {
    const a = e.props[i];
    if (a.type === 7 && (n || a.exp) && ((0, r.isString)(t) ? a.name === t : t.test(a.name))) {
      return a;
    }
  }
}
export function findProp(e, t, n = false, r = false) {
  for (let i = 0; i < e.props.length; i++) {
    const a = e.props[i];
    if (a.type === 6) {
      if (n) {
        continue;
      }
      if (a.name === t && (a.value || r)) {
        return a;
      }
    } else if (a.name === "bind" && (a.exp || r) && isStaticArgOf(a.arg, t)) {
      return a;
    }
  }
}
export function isStaticArgOf(e, t) {
  return !!e && !!isStaticExp(e) && e.content === t;
}
export function hasDynamicKeyVBind(e) {
  return e.props.some(e => e.type === 7 && e.name === "bind" && (!e.arg || e.arg.type !== 4 || !e.arg.isStatic));
}
export function isText(e) {
  return e.type === 5 || e.type === 2;
}
export function isVSlot(e) {
  return e.type === 7 && e.name === "slot";
}
export function isTemplateNode(e) {
  return e.type === 1 && e.tagType === 3;
}
export function isSlotOutlet(e) {
  return e.type === 1 && e.tagType === 2;
}
export function getVNodeHelper(e, t) {
  if (e || t) {
    return CREATE_VNODE;
  } else {
    return CREATE_ELEMENT_VNODE;
  }
}
export function getVNodeBlockHelper(e, t) {
  if (e || t) {
    return CREATE_BLOCK;
  } else {
    return CREATE_ELEMENT_BLOCK;
  }
}
const Pe = new Set([NORMALIZE_PROPS, GUARD_REACTIVE_PROPS]);
function Oe(e, t = []) {
  if (e && !(0, r.isString)(e) && e.type === 14) {
    const n = e.callee;
    if (!(0, r.isString)(n) && Pe.has(n)) {
      return Oe(e.arguments[0], t.concat(e));
    }
  }
  return [e, t];
}
export function injectProp(e, t, n) {
  let i;
  let a;
  let o = e.type === 13 ? e.props : e.arguments[2];
  let s = [];
  if (o && !(0, r.isString)(o) && o.type === 14) {
    const e = Oe(o);
    o = e[0];
    s = e[1];
    a = s[s.length - 1];
  }
  if (o == null || (0, r.isString)(o)) {
    i = createObjectExpression([t]);
  } else if (o.type === 14) {
    const e = o.arguments[0];
    if ((0, r.isString)(e) || e.type !== 15) {
      if (o.callee === TO_HANDLERS) {
        i = createCallExpression(n.helper(MERGE_PROPS), [createObjectExpression([t]), o]);
      } else {
        o.arguments.unshift(createObjectExpression([t]));
      }
    } else {
      e.properties.unshift(t);
    }
    if (!i) {
      i = o;
    }
  } else if (o.type === 15) {
    let e = false;
    if (t.key.type === 4) {
      const n = t.key.content;
      e = o.properties.some(e => e.key.type === 4 && e.key.content === n);
    }
    if (!e) {
      o.properties.unshift(t);
    }
    i = o;
  } else {
    i = createCallExpression(n.helper(MERGE_PROPS), [createObjectExpression([t]), o]);
    if (a && a.callee === GUARD_REACTIVE_PROPS) {
      a = s[s.length - 2];
    }
  }
  if (e.type === 13) {
    if (a) {
      a.arguments[0] = i;
    } else {
      e.props = i;
    }
  } else if (a) {
    a.arguments[0] = i;
  } else {
    e.arguments[2] = i;
  }
}
export function toValidAssetId(e, t) {
  return `_${t}_${e.replace(/[^\w]/g, (t, n) => t === "-" ? "_" : e.charCodeAt(n).toString())}`;
}
export function hasScopeRef(e, t) {
  if (!e || Object.keys(t).length === 0) {
    return false;
  }
  switch (e.type) {
    case 1:
      for (let n = 0; n < e.props.length; n++) {
        const r = e.props[n];
        if (r.type === 7 && (hasScopeRef(r.arg, t) || hasScopeRef(r.exp, t))) {
          return true;
        }
      }
      return e.children.some(e => hasScopeRef(e, t));
    case 11:
      return !!hasScopeRef(e.source, t) || e.children.some(e => hasScopeRef(e, t));
    case 9:
      return e.branches.some(e => hasScopeRef(e, t));
    case 10:
      return !!hasScopeRef(e.condition, t) || e.children.some(e => hasScopeRef(e, t));
    case 4:
      return !e.isStatic && isSimpleIdentifier(e.content) && !!t[e.content];
    case 8:
      return e.children.some(e => (0, r.isObject)(e) && hasScopeRef(e, t));
    case 5:
    case 12:
      return hasScopeRef(e.content, t);
    default:
      return false;
  }
}
export function getMemoedVNodeCall(e) {
  if (e.type === 14 && e.callee === WITH_MEMO) {
    return e.arguments[1].returns;
  } else {
    return e;
  }
}
export function makeBlock(e, {
  helper: t,
  removeHelper: n,
  inSSR: r
}) {
  if (!e.isBlock) {
    e.isBlock = true;
    n(getVNodeHelper(r, e.isComponent));
    t(OPEN_BLOCK);
    t(getVNodeBlockHelper(r, e.isComponent));
  }
}
const Ge = {
  COMPILER_IS_ON_ELEMENT: {
    message: "Platform-native elements with \"is\" prop will no longer be treated as components in Vue 3 unless the \"is\" value is explicitly prefixed with \"vue:\".",
    link: "https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html"
  },
  COMPILER_V_BIND_SYNC: {
    message: e => `.sync modifier for v-bind has been removed. Use v-model with argument instead. \`v-bind:${e}.sync\` should be changed to \`v-model:${e}\`.`,
    link: "https://v3-migration.vuejs.org/breaking-changes/v-model.html"
  },
  COMPILER_V_BIND_PROP: {
    message: ".prop modifier for v-bind has been removed and no longer necessary. Vue 3 will automatically set a binding as DOM property when appropriate."
  },
  COMPILER_V_BIND_OBJECT_ORDER: {
    message: "v-bind=\"obj\" usage is now order sensitive and behaves like JavaScript object spread: it will now overwrite an existing non-mergeable attribute that appears before v-bind in the case of conflict. To retain 2.x behavior, move v-bind to make it the first attribute. You can also suppress this warning if the usage is intended.",
    link: "https://v3-migration.vuejs.org/breaking-changes/v-bind.html"
  },
  COMPILER_V_ON_NATIVE: {
    message: ".native modifier for v-on has been removed as is no longer necessary.",
    link: "https://v3-migration.vuejs.org/breaking-changes/v-on-native-modifier-removed.html"
  },
  COMPILER_V_IF_V_FOR_PRECEDENCE: {
    message: "v-if / v-for precedence when used on the same element has changed in Vue 3: v-if now takes higher precedence and will no longer have access to v-for scope variables. It is best to avoid the ambiguity with <template> tags or use a computed property that filters v-for data source.",
    link: "https://v3-migration.vuejs.org/breaking-changes/v-if-v-for.html"
  },
  COMPILER_NATIVE_TEMPLATE: {
    message: "<template> with no special directives will render as a native template element instead of its inner content in Vue 3."
  },
  COMPILER_INLINE_TEMPLATE: {
    message: "\"inline-template\" has been removed in Vue 3.",
    link: "https://v3-migration.vuejs.org/breaking-changes/inline-template-attribute.html"
  },
  COMPILER_FILTER: {
    message: "filters have been removed in Vue 3. The \"|\" symbol will be treated as native JavaScript bitwise OR operator. Use method calls or computed properties instead.",
    link: "https://v3-migration.vuejs.org/breaking-changes/filters.html"
  }
};
function Ye(e, t) {
  const n = t.options ? t.options.compatConfig : t.compatConfig;
  const r = n && n[e];
  if (e === "MODE") {
    return r || 3;
  } else {
    return r;
  }
}
function Ze(e, t) {
  const n = Ye("MODE", t);
  const r = Ye(e, t);
  if (n === 3) {
    return r === true;
  } else {
    return r !== false;
  }
}
export function checkCompatEnabled(e, t, n, ...r) {
  return Ze(e, t);
}
export function warnDeprecation(e, t, n, ...r) {
  if (Ye(e, t) === "suppress-warning") {
    return;
  }
  const {
    message: i,
    link: a
  } = Ge[e];
  const o = `(deprecation ${e}) ${typeof i == "function" ? i(...r) : i}${a ? `\n  Details: ${a}` : ""}`;
  const s = new SyntaxError(o);
  s.code = e;
  if (n) {
    s.loc = n;
  }
  t.onWarn(s);
}
const Ke = /&(gt|lt|amp|apos|quot);/g;
const Xe = {
  gt: ">",
  lt: "<",
  amp: "&",
  apos: "'",
  quot: "\""
};
const Je = {
  delimiters: ["{{", "}}"],
  getNamespace: () => 0,
  getTextMode: () => 0,
  isVoidTag: r.NO,
  isPreTag: r.NO,
  isCustomElement: r.NO,
  decodeEntities: e => e.replace(Ke, (e, t) => Xe[t]),
  onError: i,
  onWarn: a,
  comments: false
};
export function baseParse(e, t = {}) {
  const n = function (e, t) {
    const n = (0, r.extend)({}, Je);
    let i;
    for (i in t) {
      n[i] = t[i] === undefined ? Je[i] : t[i];
    }
    return {
      options: n,
      column: 1,
      line: 1,
      offset: 0,
      originalSource: e,
      source: e,
      inPre: false,
      inVPre: false,
      onWarn: n.onWarn
    };
  }(e, t);
  const i = ht(n);
  return createRoot(et(n, 0, []), gt(n, i));
}
function et(e, t, n) {
  const i = ft(n);
  const a = i ? i.ns : 0;
  const o = [];
  while (!wt(e, t, n)) {
    const s = e.source;
    let l;
    if (t === 0 || t === 1) {
      if (!e.inVPre && mt(s, e.options.delimiters[0])) {
        l = ut(e, t);
      } else if (t === 0 && s[0] === "<") {
        if (s.length === 1) {
          vt(e, 5, 1);
        } else if (s[1] === "!") {
          if (mt(s, "<!--")) {
            l = rt(e);
          } else if (mt(s, "<!DOCTYPE")) {
            l = it(e);
          } else if (mt(s, "<![CDATA[")) {
            if (a !== 0) {
              l = nt(e, n);
            } else {
              vt(e, 1);
              l = it(e);
            }
          } else {
            vt(e, 11);
            l = it(e);
          }
        } else if (s[1] === "/") {
          if (s.length === 2) {
            vt(e, 5, 2);
          } else {
            if (s[2] === ">") {
              vt(e, 14, 2);
              bt(e, 3);
              continue;
            }
            if (/[a-z]/i.test(s[2])) {
              vt(e, 23);
              st(e, 1, i);
              continue;
            }
            vt(e, 12, 2);
            l = it(e);
          }
        } else if (/[a-z]/i.test(s[1])) {
          l = at(e, n);
          if (Ze("COMPILER_NATIVE_TEMPLATE", e) && l && l.tag === "template" && !l.props.some(e => e.type === 7 && ot(e.name))) {
            l = l.children;
          }
        } else if (s[1] === "?") {
          vt(e, 21, 1);
          l = it(e);
        } else {
          vt(e, 12, 1);
        }
      }
    }
    l ||= pt(e, t);
    if ((0, r.isArray)(l)) {
      for (let e = 0; e < l.length; e++) {
        tt(o, l[e]);
      }
    } else {
      tt(o, l);
    }
  }
  let s = false;
  if (t !== 2 && t !== 1) {
    const t = e.options.whitespace !== "preserve";
    for (let n = 0; n < o.length; n++) {
      const r = o[n];
      if (e.inPre || r.type !== 2) {
        if (r.type === 3 && !e.options.comments) {
          s = true;
          o[n] = null;
        }
      } else if (/[^\t\r\n\f ]/.test(r.content)) {
        if (t) {
          r.content = r.content.replace(/[\t\r\n\f ]+/g, " ");
        }
      } else {
        const e = o[n - 1];
        const i = o[n + 1];
        if (!e || !i || t && (e.type === 3 || i.type === 3 || e.type === 1 && i.type === 1 && /[\r\n]/.test(r.content))) {
          s = true;
          o[n] = null;
        } else {
          r.content = " ";
        }
      }
    }
    if (e.inPre && i && e.options.isPreTag(i.tag)) {
      const e = o[0];
      if (e && e.type === 2) {
        e.content = e.content.replace(/^\r?\n/, "");
      }
    }
  }
  if (s) {
    return o.filter(Boolean);
  } else {
    return o;
  }
}
function tt(e, t) {
  if (t.type === 2) {
    const n = ft(e);
    if (n && n.type === 2 && n.loc.end.offset === t.loc.start.offset) {
      n.content += t.content;
      n.loc.end = t.loc.end;
      n.loc.source += t.loc.source;
      return;
    }
  }
  e.push(t);
}
function nt(e, t) {
  bt(e, 9);
  const n = et(e, 3, t);
  if (e.source.length === 0) {
    vt(e, 6);
  } else {
    bt(e, 3);
  }
  return n;
}
function rt(e) {
  const t = ht(e);
  let n;
  const r = /--(\!)?>/.exec(e.source);
  if (r) {
    if (r.index <= 3) {
      vt(e, 0);
    }
    if (r[1]) {
      vt(e, 10);
    }
    n = e.source.slice(4, r.index);
    const t = e.source.slice(0, r.index);
    let i = 1;
    let a = 0;
    while ((a = t.indexOf("<!--", i)) !== -1) {
      bt(e, a - i + 1);
      if (a + 4 < t.length) {
        vt(e, 16);
      }
      i = a + 1;
    }
    bt(e, r.index + r[0].length - i + 1);
  } else {
    n = e.source.slice(4);
    bt(e, e.source.length);
    vt(e, 7);
  }
  return {
    type: 3,
    content: n,
    loc: gt(e, t)
  };
}
function it(e) {
  const t = ht(e);
  const n = e.source[1] === "?" ? 1 : 2;
  let r;
  const i = e.source.indexOf(">");
  if (i === -1) {
    r = e.source.slice(n);
    bt(e, e.source.length);
  } else {
    r = e.source.slice(n, i);
    bt(e, i + 1);
  }
  return {
    type: 3,
    content: r,
    loc: gt(e, t)
  };
}
function at(e, t) {
  const n = e.inPre;
  const r = e.inVPre;
  const i = ft(t);
  const a = st(e, 0, i);
  const o = e.inPre && !n;
  const s = e.inVPre && !r;
  if (a.isSelfClosing || e.options.isVoidTag(a.tag)) {
    if (o) {
      e.inPre = false;
    }
    if (s) {
      e.inVPre = false;
    }
    return a;
  }
  t.push(a);
  const l = e.options.getTextMode(a, i);
  const c = et(e, l, t);
  t.pop();
  {
    const t = a.props.find(e => e.type === 6 && e.name === "inline-template");
    if (t && checkCompatEnabled("COMPILER_INLINE_TEMPLATE", e, t.loc)) {
      const n = gt(e, a.loc.end);
      t.value = {
        type: 2,
        content: n.source,
        loc: n
      };
    }
  }
  a.children = c;
  if (At(e.source, a.tag)) {
    st(e, 1, i);
  } else {
    vt(e, 24, 0, a.loc.start);
    if (e.source.length === 0 && a.tag.toLowerCase() === "script") {
      const t = c[0];
      if (t && mt(t.loc.source, "<!--")) {
        vt(e, 8);
      }
    }
  }
  a.loc = gt(e, a.loc.start);
  if (o) {
    e.inPre = false;
  }
  if (s) {
    e.inVPre = false;
  }
  return a;
}
const ot = (0, r.makeMap)("if,else,else-if,for,slot");
function st(e, t, n) {
  const i = ht(e);
  const a = /^<\/?([a-z][^\t\r\n\f />]*)/i.exec(e.source);
  const o = a[1];
  const s = e.options.getNamespace(o, n);
  bt(e, a[0].length);
  xt(e);
  const l = ht(e);
  const c = e.source;
  if (e.options.isPreTag(o)) {
    e.inPre = true;
  }
  let u = lt(e, t);
  if (t === 0 && !e.inVPre && u.some(e => e.type === 7 && e.name === "pre")) {
    e.inVPre = true;
    (0, r.extend)(e, l);
    e.source = c;
    u = lt(e, t).filter(e => e.name !== "v-pre");
  }
  let p = false;
  if (e.source.length === 0) {
    vt(e, 9);
  } else {
    p = mt(e.source, "/>");
    if (t === 1 && p) {
      vt(e, 4);
    }
    bt(e, p ? 2 : 1);
  }
  if (t === 1) {
    return;
  }
  let d = 0;
  if (!e.inVPre) {
    if (o === "slot") {
      d = 2;
    } else if (o === "template") {
      if (u.some(e => e.type === 7 && ot(e.name))) {
        d = 3;
      }
    } else if (function (e, t, n) {
      const r = n.options;
      if (r.isCustomElement(e)) {
        return false;
      }
      if (e === "component" || /^[A-Z]/.test(e) || isCoreComponent(e) || r.isBuiltInComponent && r.isBuiltInComponent(e) || r.isNativeTag && !r.isNativeTag(e)) {
        return true;
      }
      for (let e = 0; e < t.length; e++) {
        const r = t[e];
        if (r.type === 6) {
          if (r.name === "is" && r.value) {
            if (r.value.content.startsWith("vue:")) {
              return true;
            }
            if (checkCompatEnabled("COMPILER_IS_ON_ELEMENT", n, r.loc)) {
              return true;
            }
          }
        } else {
          if (r.name === "is") {
            return true;
          }
          if (r.name === "bind" && isStaticArgOf(r.arg, "is") && checkCompatEnabled("COMPILER_IS_ON_ELEMENT", n, r.loc)) {
            return true;
          }
        }
      }
    }(o, u, e)) {
      d = 1;
    }
  }
  return {
    type: 1,
    ns: s,
    tag: o,
    tagType: d,
    props: u,
    isSelfClosing: p,
    children: [],
    loc: gt(e, i),
    codegenNode: undefined
  };
}
function lt(e, t) {
  const n = [];
  const r = new Set();
  while (e.source.length > 0 && !mt(e.source, ">") && !mt(e.source, "/>")) {
    if (mt(e.source, "/")) {
      vt(e, 22);
      bt(e, 1);
      xt(e);
      continue;
    }
    if (t === 1) {
      vt(e, 3);
    }
    const i = ct(e, r);
    if (i.type === 6 && i.value && i.name === "class") {
      i.value.content = i.value.content.replace(/\s+/g, " ").trim();
    }
    if (t === 0) {
      n.push(i);
    }
    if (/^[^\t\r\n\f />]/.test(e.source)) {
      vt(e, 15);
    }
    xt(e);
  }
  return n;
}
function ct(e, t) {
  const n = ht(e);
  const r = /^[^\t\r\n\f />][^\t\r\n\f />=]*/.exec(e.source)[0];
  if (t.has(r)) {
    vt(e, 2);
  }
  t.add(r);
  if (r[0] === "=") {
    vt(e, 19);
  }
  {
    const t = /["'<]/g;
    let n;
    while (n = t.exec(r)) {
      vt(e, 17, n.index);
    }
  }
  let i;
  bt(e, r.length);
  if (/^[\t\r\n\f ]*=/.test(e.source)) {
    xt(e);
    bt(e, 1);
    xt(e);
    i = function (e) {
      const t = ht(e);
      let n;
      const r = e.source[0];
      const i = r === "\"" || r === "'";
      if (i) {
        bt(e, 1);
        const t = e.source.indexOf(r);
        if (t === -1) {
          n = dt(e, e.source.length, 4);
        } else {
          n = dt(e, t, 4);
          bt(e, 1);
        }
      } else {
        const t = /^[^\t\r\n\f >]+/.exec(e.source);
        if (!t) {
          return;
        }
        const r = /["'<=`]/g;
        let i;
        while (i = r.exec(t[0])) {
          vt(e, 18, i.index);
        }
        n = dt(e, t[0].length, 4);
      }
      return {
        content: n,
        isQuoted: i,
        loc: gt(e, t)
      };
    }(e);
    if (!i) {
      vt(e, 13);
    }
  }
  const a = gt(e, n);
  if (!e.inVPre && /^(v-[A-Za-z0-9-]|:|\.|@|#)/.test(r)) {
    const t = /(?:^v-([a-z0-9-]+))?(?:(?::|^\.|^@|^#)(\[[^\]]+\]|[^\.]+))?(.+)?$/i.exec(r);
    let o;
    let s = mt(r, ".");
    let l = t[1] || (s || mt(r, ":") ? "bind" : mt(r, "@") ? "on" : "slot");
    if (t[2]) {
      const i = l === "slot";
      const a = r.lastIndexOf(t[2]);
      const s = gt(e, yt(e, n, a), yt(e, n, a + t[2].length + (i && t[3] || "").length));
      let c = t[2];
      let u = true;
      if (c.startsWith("[")) {
        u = false;
        if (c.endsWith("]")) {
          c = c.slice(1, c.length - 1);
        } else {
          vt(e, 27);
          c = c.slice(1);
        }
      } else if (i) {
        c += t[3] || "";
      }
      o = {
        type: 4,
        content: c,
        isStatic: u,
        constType: u ? 3 : 0,
        loc: s
      };
    }
    if (i && i.isQuoted) {
      const e = i.loc;
      e.start.offset++;
      e.start.column++;
      e.end = advancePositionWithClone(e.start, i.content);
      e.source = e.source.slice(1, -1);
    }
    const c = t[3] ? t[3].slice(1).split(".") : [];
    if (s) {
      c.push("prop");
    }
    if (l === "bind" && o && c.includes("sync") && checkCompatEnabled("COMPILER_V_BIND_SYNC", e, 0, o.loc.source)) {
      l = "model";
      c.splice(c.indexOf("sync"), 1);
    }
    return {
      type: 7,
      name: l,
      exp: i && {
        type: 4,
        content: i.content,
        isStatic: false,
        constType: 0,
        loc: i.loc
      },
      arg: o,
      modifiers: c,
      loc: a
    };
  }
  if (!e.inVPre && mt(r, "v-")) {
    vt(e, 26);
  }
  return {
    type: 6,
    name: r,
    value: i && {
      type: 2,
      content: i.content,
      loc: i.loc
    },
    loc: a
  };
}
function ut(e, t) {
  const [n, r] = e.options.delimiters;
  const i = e.source.indexOf(r, n.length);
  if (i === -1) {
    vt(e, 25);
    return;
  }
  const a = ht(e);
  bt(e, n.length);
  const o = ht(e);
  const s = ht(e);
  const l = i - n.length;
  const c = e.source.slice(0, l);
  const u = dt(e, l, t);
  const p = u.trim();
  const d = u.indexOf(p);
  if (d > 0) {
    advancePositionWithMutation(o, c, d);
  }
  advancePositionWithMutation(s, c, l - (u.length - p.length - d));
  bt(e, r.length);
  return {
    type: 5,
    content: {
      type: 4,
      isStatic: false,
      constType: 0,
      content: p,
      loc: gt(e, o, s)
    },
    loc: gt(e, a)
  };
}
function pt(e, t) {
  const n = t === 3 ? ["]]>"] : ["<", e.options.delimiters[0]];
  let r = e.source.length;
  for (let t = 0; t < n.length; t++) {
    const i = e.source.indexOf(n[t], 1);
    if (i !== -1 && r > i) {
      r = i;
    }
  }
  const i = ht(e);
  return {
    type: 2,
    content: dt(e, r, t),
    loc: gt(e, i)
  };
}
function dt(e, t, n) {
  const r = e.source.slice(0, t);
  bt(e, t);
  if (n !== 2 && n !== 3 && r.includes("&")) {
    return e.options.decodeEntities(r, n === 4);
  } else {
    return r;
  }
}
function ht(e) {
  const {
    column: t,
    line: n,
    offset: r
  } = e;
  return {
    column: t,
    line: n,
    offset: r
  };
}
function gt(e, t, n) {
  return {
    start: t,
    end: n = n || ht(e),
    source: e.originalSource.slice(t.offset, n.offset)
  };
}
function ft(e) {
  return e[e.length - 1];
}
function mt(e, t) {
  return e.startsWith(t);
}
function bt(e, t) {
  const {
    source: n
  } = e;
  advancePositionWithMutation(e, n, t);
  e.source = n.slice(t);
}
function xt(e) {
  const t = /^[\t\r\n\f ]+/.exec(e.source);
  if (t) {
    bt(e, t[0].length);
  }
}
function yt(e, t, n) {
  return advancePositionWithClone(t, e.originalSource.slice(t.offset, n), n);
}
function vt(e, t, n, r = ht(e)) {
  if (n) {
    r.offset += n;
    r.column += n;
  }
  e.options.onError(createCompilerError(t, {
    start: r,
    end: r,
    source: ""
  }));
}
function wt(e, t, n) {
  const r = e.source;
  switch (t) {
    case 0:
      if (mt(r, "</")) {
        for (let e = n.length - 1; e >= 0; --e) {
          if (At(r, n[e].tag)) {
            return true;
          }
        }
      }
      break;
    case 1:
    case 2:
      {
        const e = ft(n);
        if (e && At(r, e.tag)) {
          return true;
        }
        break;
      }
    case 3:
      if (mt(r, "]]>")) {
        return true;
      }
  }
  return !r;
}
function At(e, t) {
  return mt(e, "</") && e.slice(2, 2 + t.length).toLowerCase() === t.toLowerCase() && /[\t\r\n\f />]/.test(e[2 + t.length] || ">");
}
function kt(e, t) {
  Ct(e, t, St(e, e.children[0]));
}
function St(e, t) {
  const {
    children: n
  } = e;
  return n.length === 1 && t.type === 1 && !isSlotOutlet(t);
}
function Ct(e, t, n = false) {
  const {
    children: i
  } = e;
  const a = i.length;
  let o = 0;
  for (let e = 0; e < i.length; e++) {
    const r = i[e];
    if (r.type === 1 && r.tagType === 0) {
      const e = n ? 0 : Et(r, t);
      if (e > 0) {
        if (e >= 2) {
          r.codegenNode.patchFlag = "-1";
          r.codegenNode = t.hoist(r.codegenNode);
          o++;
          continue;
        }
      } else {
        const e = r.codegenNode;
        if (e.type === 13) {
          const n = Mt(e);
          if ((!n || n === 512 || n === 1) && Dt(r, t) >= 2) {
            const n = _t(r);
            if (n) {
              e.props = t.hoist(n);
            }
          }
          e.dynamicProps &&= t.hoist(e.dynamicProps);
        }
      }
    } else if (r.type === 12 && Et(r.content, t) >= 2) {
      r.codegenNode = t.hoist(r.codegenNode);
      o++;
    }
    if (r.type === 1) {
      const e = r.tagType === 1;
      if (e) {
        t.scopes.vSlot++;
      }
      Ct(r, t);
      if (e) {
        t.scopes.vSlot--;
      }
    } else if (r.type === 11) {
      Ct(r, t, r.children.length === 1);
    } else if (r.type === 9) {
      for (let e = 0; e < r.branches.length; e++) {
        Ct(r.branches[e], t, r.branches[e].children.length === 1);
      }
    }
  }
  if (o && t.transformHoist) {
    t.transformHoist(i, t, e);
  }
  if (o && o === a && e.type === 1 && e.tagType === 0 && e.codegenNode && e.codegenNode.type === 13 && (0, r.isArray)(e.codegenNode.children)) {
    e.codegenNode.children = t.hoist(createArrayExpression(e.codegenNode.children));
  }
}
function Et(e, t) {
  const {
    constantCache: n
  } = t;
  switch (e.type) {
    case 1:
      if (e.tagType !== 0) {
        return 0;
      }
      const i = n.get(e);
      if (i !== undefined) {
        return i;
      }
      const a = e.codegenNode;
      if (a.type !== 13) {
        return 0;
      }
      if (a.isBlock && e.tag !== "svg" && e.tag !== "foreignObject") {
        return 0;
      }
      if (Mt(a)) {
        n.set(e, 0);
        return 0;
      }
      {
        let r = 3;
        const i = Dt(e, t);
        if (i === 0) {
          n.set(e, 0);
          return 0;
        }
        if (i < r) {
          r = i;
        }
        for (let i = 0; i < e.children.length; i++) {
          const a = Et(e.children[i], t);
          if (a === 0) {
            n.set(e, 0);
            return 0;
          }
          if (a < r) {
            r = a;
          }
        }
        if (r > 1) {
          for (let i = 0; i < e.props.length; i++) {
            const a = e.props[i];
            if (a.type === 7 && a.name === "bind" && a.exp) {
              const i = Et(a.exp, t);
              if (i === 0) {
                n.set(e, 0);
                return 0;
              }
              if (i < r) {
                r = i;
              }
            }
          }
        }
        if (a.isBlock) {
          t.removeHelper(OPEN_BLOCK);
          t.removeHelper(getVNodeBlockHelper(t.inSSR, a.isComponent));
          a.isBlock = false;
          t.helper(getVNodeHelper(t.inSSR, a.isComponent));
        }
        n.set(e, r);
        return r;
      }
    case 2:
    case 3:
      return 3;
    case 9:
    case 11:
    case 10:
    default:
      return 0;
    case 5:
    case 12:
      return Et(e.content, t);
    case 4:
      return e.constType;
    case 8:
      let o = 3;
      for (let n = 0; n < e.children.length; n++) {
        const i = e.children[n];
        if ((0, r.isString)(i) || (0, r.isSymbol)(i)) {
          continue;
        }
        const a = Et(i, t);
        if (a === 0) {
          return 0;
        }
        if (a < o) {
          o = a;
        }
      }
      return o;
  }
}
const It = new Set([NORMALIZE_CLASS, NORMALIZE_STYLE, NORMALIZE_PROPS, GUARD_REACTIVE_PROPS]);
function Tt(e, t) {
  if (e.type === 14 && !(0, r.isString)(e.callee) && It.has(e.callee)) {
    const n = e.arguments[0];
    if (n.type === 4) {
      return Et(n, t);
    }
    if (n.type === 14) {
      return Tt(n, t);
    }
  }
  return 0;
}
function Dt(e, t) {
  let n = 3;
  const r = _t(e);
  if (r && r.type === 15) {
    const {
      properties: e
    } = r;
    for (let r = 0; r < e.length; r++) {
      const {
        key: i,
        value: a
      } = e[r];
      const o = Et(i, t);
      if (o === 0) {
        return o;
      }
      let s;
      if (o < n) {
        n = o;
      }
      s = a.type === 4 ? Et(a, t) : a.type === 14 ? Tt(a, t) : 0;
      if (s === 0) {
        return s;
      }
      if (s < n) {
        n = s;
      }
    }
  }
  return n;
}
function _t(e) {
  const t = e.codegenNode;
  if (t.type === 13) {
    return t.props;
  }
}
function Mt(e) {
  const t = e.patchFlag;
  if (t) {
    return parseInt(t, 10);
  } else {
    return undefined;
  }
}
export function createTransformContext(e, {
  filename: t = "",
  prefixIdentifiers: n = false,
  hoistStatic: o = false,
  cacheHandlers: s = false,
  nodeTransforms: l = [],
  directiveTransforms: c = {},
  transformHoist: u = null,
  isBuiltInComponent: p = r.NOOP,
  isCustomElement: d = r.NOOP,
  expressionPlugins: h = [],
  scopeId: g = null,
  slotted: f = true,
  ssr: m = false,
  inSSR: b = false,
  ssrCssVars: x = "",
  bindingMetadata: y = r.EMPTY_OBJ,
  inline: v = false,
  isTS: w = false,
  onError: A = i,
  onWarn: k = a,
  compatConfig: S
}) {
  const C = t.replace(/\?.*$/, "").match(/([^/\\]+)\.\w+$/);
  const E = {
    selfName: C && (0, r.capitalize)((0, r.camelize)(C[1])),
    prefixIdentifiers: n,
    hoistStatic: o,
    cacheHandlers: s,
    nodeTransforms: l,
    directiveTransforms: c,
    transformHoist: u,
    isBuiltInComponent: p,
    isCustomElement: d,
    expressionPlugins: h,
    scopeId: g,
    slotted: f,
    ssr: m,
    inSSR: b,
    ssrCssVars: x,
    bindingMetadata: y,
    inline: v,
    isTS: w,
    onError: A,
    onWarn: k,
    compatConfig: S,
    root: e,
    helpers: new Map(),
    components: new Set(),
    directives: new Set(),
    hoists: [],
    imports: [],
    constantCache: new Map(),
    temps: 0,
    cached: 0,
    identifiers: Object.create(null),
    scopes: {
      vFor: 0,
      vSlot: 0,
      vPre: 0,
      vOnce: 0
    },
    parent: null,
    currentNode: e,
    childIndex: 0,
    inVOnce: false,
    helper(e) {
      const t = E.helpers.get(e) || 0;
      E.helpers.set(e, t + 1);
      return e;
    },
    removeHelper(e) {
      const t = E.helpers.get(e);
      if (t) {
        const n = t - 1;
        if (n) {
          E.helpers.set(e, n);
        } else {
          E.helpers.delete(e);
        }
      }
    },
    helperString: e => `_${helperNameMap[E.helper(e)]}`,
    replaceNode(e) {
      E.parent.children[E.childIndex] = E.currentNode = e;
    },
    removeNode(e) {
      const t = E.parent.children;
      const n = e ? t.indexOf(e) : E.currentNode ? E.childIndex : -1;
      if (e && e !== E.currentNode) {
        if (E.childIndex > n) {
          E.childIndex--;
          E.onNodeRemoved();
        }
      } else {
        E.currentNode = null;
        E.onNodeRemoved();
      }
      E.parent.children.splice(n, 1);
    },
    onNodeRemoved: () => {},
    addIdentifiers(e) {},
    removeIdentifiers(e) {},
    hoist(e) {
      if ((0, r.isString)(e)) {
        e = createSimpleExpression(e);
      }
      E.hoists.push(e);
      const t = createSimpleExpression(`_hoisted_${E.hoists.length}`, false, e.loc, 2);
      t.hoisted = e;
      return t;
    },
    cache: (e, t = false) => createCacheExpression(E.cached++, e, t)
  };
  E.filters = new Set();
  return E;
}
export function transform(e, t) {
  const n = createTransformContext(e, t);
  traverseNode(e, n);
  if (t.hoistStatic) {
    kt(e, n);
  }
  if (!t.ssr) {
    (function (e, t) {
      const {
        helper: n
      } = t;
      const {
        children: i
      } = e;
      if (i.length === 1) {
        const n = i[0];
        if (St(e, n) && n.codegenNode) {
          const r = n.codegenNode;
          if (r.type === 13) {
            makeBlock(r, t);
          }
          e.codegenNode = r;
        } else {
          e.codegenNode = n;
        }
      } else if (i.length > 1) {
        let i = 64;
        r.PatchFlagNames[64];
        0;
        e.codegenNode = createVNodeCall(t, n(FRAGMENT), undefined, e.children, i + "", undefined, undefined, true, undefined, false);
      }
    })(e, n);
  }
  e.helpers = [...n.helpers.keys()];
  e.components = [...n.components];
  e.directives = [...n.directives];
  e.imports = n.imports;
  e.hoists = n.hoists;
  e.temps = n.temps;
  e.cached = n.cached;
  e.filters = [...n.filters];
}
export function traverseNode(e, t) {
  t.currentNode = e;
  const {
    nodeTransforms: n
  } = t;
  const i = [];
  for (let a = 0; a < n.length; a++) {
    const o = n[a](e, t);
    if (o) {
      if ((0, r.isArray)(o)) {
        i.push(...o);
      } else {
        i.push(o);
      }
    }
    if (!t.currentNode) {
      return;
    }
    e = t.currentNode;
  }
  switch (e.type) {
    case 3:
      if (!t.ssr) {
        t.helper(CREATE_COMMENT);
      }
      break;
    case 5:
      if (!t.ssr) {
        t.helper(TO_DISPLAY_STRING);
      }
      break;
    case 9:
      for (let n = 0; n < e.branches.length; n++) {
        traverseNode(e.branches[n], t);
      }
      break;
    case 10:
    case 11:
    case 1:
    case 0:
      (function (e, t) {
        let n = 0;
        const i = () => {
          n--;
        };
        for (; n < e.children.length; n++) {
          const a = e.children[n];
          if (!(0, r.isString)(a)) {
            t.parent = e;
            t.childIndex = n;
            t.onNodeRemoved = i;
            traverseNode(a, t);
          }
        }
      })(e, t);
  }
  t.currentNode = e;
  let a = i.length;
  while (a--) {
    i[a]();
  }
}
export function createStructuralDirectiveTransform(e, t) {
  const n = (0, r.isString)(e) ? t => t === e : t => e.test(t);
  return (e, r) => {
    if (e.type === 1) {
      const {
        props: i
      } = e;
      if (e.tagType === 3 && i.some(isVSlot)) {
        return;
      }
      const a = [];
      for (let o = 0; o < i.length; o++) {
        const s = i[o];
        if (s.type === 7 && n(s.name)) {
          i.splice(o, 1);
          o--;
          const n = t(e, s, r);
          if (n) {
            a.push(n);
          }
        }
      }
      return a;
    }
  };
}
const Nt = "/*#__PURE__*/";
export function generate(e, t = {}) {
  const n = function (e, {
    mode: t = "function",
    prefixIdentifiers: n = t === "module",
    sourceMap: r = false,
    filename: i = "template.vue.html",
    scopeId: a = null,
    optimizeImports: o = false,
    runtimeGlobalName: s = "Vue",
    runtimeModuleName: l = "vue",
    ssrRuntimeModuleName: c = "vue/server-renderer",
    ssr: u = false,
    isTS: p = false,
    inSSR: d = false
  }) {
    const h = {
      mode: t,
      prefixIdentifiers: n,
      sourceMap: r,
      filename: i,
      scopeId: a,
      optimizeImports: o,
      runtimeGlobalName: s,
      runtimeModuleName: l,
      ssrRuntimeModuleName: c,
      ssr: u,
      isTS: p,
      inSSR: d,
      source: e.loc.source,
      code: "",
      column: 1,
      line: 1,
      offset: 0,
      indentLevel: 0,
      pure: false,
      map: undefined,
      helper: e => `_${helperNameMap[e]}`,
      push(e, t) {
        h.code += e;
      },
      indent() {
        g(++h.indentLevel);
      },
      deindent(e = false) {
        if (e) {
          --h.indentLevel;
        } else {
          g(--h.indentLevel);
        }
      },
      newline() {
        g(h.indentLevel);
      }
    };
    function g(e) {
      h.push("\n" + "  ".repeat(e));
    }
    return h;
  }(e, t);
  if (t.onContextCreated) {
    t.onContextCreated(n);
  }
  const {
    mode: r,
    push: i,
    prefixIdentifiers: a,
    indent: o,
    deindent: s,
    newline: l,
    scopeId: c,
    ssr: u
  } = n;
  const p = e.helpers.length > 0;
  const d = !a && r !== "module";
  (function (e, t) {
    const {
      ssr: n,
      prefixIdentifiers: r,
      push: i,
      newline: a,
      runtimeModuleName: o,
      runtimeGlobalName: s,
      ssrRuntimeModuleName: l
    } = t;
    const c = s;
    const u = e => `${helperNameMap[e]}: _${helperNameMap[e]}`;
    if (e.helpers.length > 0 && (i(`const _Vue = ${c}\n`), e.hoists.length)) {
      i(`const { ${[CREATE_VNODE, CREATE_ELEMENT_VNODE, CREATE_COMMENT, CREATE_TEXT, CREATE_STATIC].filter(t => e.helpers.includes(t)).map(u).join(", ")} } = _Vue\n`);
    }
    (function (e, t) {
      if (!e.length) {
        return;
      }
      t.pure = true;
      const {
        push: n,
        newline: r,
        helper: i,
        scopeId: a,
        mode: o
      } = t;
      r();
      for (let i = 0; i < e.length; i++) {
        const a = e[i];
        if (a) {
          n(`const _hoisted_${i + 1} = `);
          Ut(a, t);
          r();
        }
      }
      t.pure = false;
    })(e.hoists, t);
    a();
    i("return ");
  })(e, n);
  i(`function ${u ? "ssrRender" : "render"}(${(u ? ["_ctx", "_push", "_parent", "_attrs"] : ["_ctx", "_cache"]).join(", ")}) {`);
  o();
  if (d) {
    i("with (_ctx) {");
    o();
    if (p) {
      i(`const { ${e.helpers.map(e => `${helperNameMap[e]}: _${helperNameMap[e]}`).join(", ")} } = _Vue`);
      i("\n");
      l();
    }
  }
  if (e.components.length) {
    Pt(e.components, "component", n);
    if (e.directives.length || e.temps > 0) {
      l();
    }
  }
  if (e.directives.length) {
    Pt(e.directives, "directive", n);
    if (e.temps > 0) {
      l();
    }
  }
  if (e.filters && e.filters.length) {
    l();
    Pt(e.filters, "filter", n);
    l();
  }
  if (e.temps > 0) {
    i("let ");
    for (let t = 0; t < e.temps; t++) {
      i(`${t > 0 ? ", " : ""}_temp${t}`);
    }
  }
  if (e.components.length || e.directives.length || e.temps) {
    i("\n");
    l();
  }
  if (!u) {
    i("return ");
  }
  if (e.codegenNode) {
    Ut(e.codegenNode, n);
  } else {
    i("null");
  }
  if (d) {
    s();
    i("}");
  }
  s();
  i("}");
  return {
    ast: e,
    code: n.code,
    preamble: "",
    map: n.map ? n.map.toJSON() : undefined
  };
}
function Pt(e, t, {
  helper: n,
  push: r,
  newline: i,
  isTS: a
}) {
  const o = n(t === "filter" ? RESOLVE_FILTER : t === "component" ? RESOLVE_COMPONENT : RESOLVE_DIRECTIVE);
  for (let n = 0; n < e.length; n++) {
    let s = e[n];
    const l = s.endsWith("__self");
    if (l) {
      s = s.slice(0, -6);
    }
    r(`const ${toValidAssetId(s, t)} = ${o}(${JSON.stringify(s)}${l ? ", true" : ""})${a ? "!" : ""}`);
    if (n < e.length - 1) {
      i();
    }
  }
}
function Ot(e, t) {
  const n = e.length > 3 || false;
  t.push("[");
  if (n) {
    t.indent();
  }
  qt(e, t, n);
  if (n) {
    t.deindent();
  }
  t.push("]");
}
function qt(e, t, n = false, i = true) {
  const {
    push: a,
    newline: o
  } = t;
  for (let s = 0; s < e.length; s++) {
    const l = e[s];
    if ((0, r.isString)(l)) {
      a(l);
    } else if ((0, r.isArray)(l)) {
      Ot(l, t);
    } else {
      Ut(l, t);
    }
    if (s < e.length - 1) {
      if (n) {
        if (i) {
          a(",");
        }
        o();
      } else if (i) {
        a(", ");
      }
    }
  }
}
function Ut(e, t) {
  if ((0, r.isString)(e)) {
    t.push(e);
  } else if ((0, r.isSymbol)(e)) {
    t.push(t.helper(e));
  } else {
    switch (e.type) {
      case 1:
      case 9:
      case 11:
      case 12:
        Ut(e.codegenNode, t);
        break;
      case 2:
        (function (e, t) {
          t.push(JSON.stringify(e.content), e);
        })(e, t);
        break;
      case 4:
        jt(e, t);
        break;
      case 5:
        (function (e, t) {
          const {
            push: n,
            helper: r,
            pure: i
          } = t;
          if (i) {
            n(Nt);
          }
          n(`${r(TO_DISPLAY_STRING)}(`);
          Ut(e.content, t);
          n(")");
        })(e, t);
        break;
      case 8:
        Ht(e, t);
        break;
      case 3:
        (function (e, t) {
          const {
            push: n,
            helper: r,
            pure: i
          } = t;
          if (i) {
            n(Nt);
          }
          n(`${r(CREATE_COMMENT)}(${JSON.stringify(e.content)})`, e);
        })(e, t);
        break;
      case 13:
        (function (e, t) {
          const {
            push: n,
            helper: r,
            pure: i
          } = t;
          const {
            tag: a,
            props: o,
            children: s,
            patchFlag: l,
            dynamicProps: c,
            directives: u,
            isBlock: p,
            disableTracking: h,
            isComponent: g
          } = e;
          if (u) {
            n(r(WITH_DIRECTIVES) + "(");
          }
          if (p) {
            n(`(${r(OPEN_BLOCK)}(${h ? "true" : ""}), `);
          }
          if (i) {
            n(Nt);
          }
          const f = p ? getVNodeBlockHelper(t.inSSR, g) : getVNodeHelper(t.inSSR, g);
          n(r(f) + "(", e);
          qt(function (e) {
            let t = e.length;
            while (t-- && e[t] == null);
            return e.slice(0, t + 1).map(e => e || "null");
          }([a, o, s, l, c]), t);
          n(")");
          if (p) {
            n(")");
          }
          if (u) {
            n(", ");
            Ut(u, t);
            n(")");
          }
        })(e, t);
        break;
      case 14:
        (function (e, t) {
          const {
            push: n,
            helper: i,
            pure: a
          } = t;
          const o = (0, r.isString)(e.callee) ? e.callee : i(e.callee);
          if (a) {
            n(Nt);
          }
          n(o + "(", e);
          qt(e.arguments, t);
          n(")");
        })(e, t);
        break;
      case 15:
        (function (e, t) {
          const {
            push: n,
            indent: r,
            deindent: i,
            newline: a
          } = t;
          const {
            properties: o
          } = e;
          if (!o.length) {
            n("{}", e);
            return;
          }
          const s = o.length > 1 || false;
          n(s ? "{" : "{ ");
          if (s) {
            r();
          }
          for (let e = 0; e < o.length; e++) {
            const {
              key: r,
              value: i
            } = o[e];
            Vt(r, t);
            n(": ");
            Ut(i, t);
            if (e < o.length - 1) {
              n(",");
              a();
            }
          }
          if (s) {
            i();
          }
          n(s ? "}" : " }");
        })(e, t);
        break;
      case 17:
        (function (e, t) {
          Ot(e.elements, t);
        })(e, t);
        break;
      case 18:
        (function (e, t) {
          const {
            push: n,
            indent: i,
            deindent: a
          } = t;
          const {
            params: o,
            returns: s,
            body: l,
            newline: c,
            isSlot: u
          } = e;
          if (u) {
            n(`_${helperNameMap[WITH_CTX]}(`);
          }
          n("(", e);
          if ((0, r.isArray)(o)) {
            qt(o, t);
          } else if (o) {
            Ut(o, t);
          }
          n(") => ");
          if (c || l) {
            n("{");
            i();
          }
          if (s) {
            if (c) {
              n("return ");
            }
            if ((0, r.isArray)(s)) {
              Ot(s, t);
            } else {
              Ut(s, t);
            }
          } else if (l) {
            Ut(l, t);
          }
          if (c || l) {
            a();
            n("}");
          }
          if (u) {
            if (e.isNonScopedSlot) {
              n(", undefined, true");
            }
            n(")");
          }
        })(e, t);
        break;
      case 19:
        (function (e, t) {
          const {
            test: n,
            consequent: r,
            alternate: i,
            newline: a
          } = e;
          const {
            push: o,
            indent: s,
            deindent: l,
            newline: c
          } = t;
          if (n.type === 4) {
            const e = !isSimpleIdentifier(n.content);
            if (e) {
              o("(");
            }
            jt(n, t);
            if (e) {
              o(")");
            }
          } else {
            o("(");
            Ut(n, t);
            o(")");
          }
          if (a) {
            s();
          }
          t.indentLevel++;
          if (!a) {
            o(" ");
          }
          o("? ");
          Ut(r, t);
          t.indentLevel--;
          if (a) {
            c();
          }
          if (!a) {
            o(" ");
          }
          o(": ");
          const u = i.type === 19;
          if (!u) {
            t.indentLevel++;
          }
          Ut(i, t);
          if (!u) {
            t.indentLevel--;
          }
          if (a) {
            l(true);
          }
        })(e, t);
        break;
      case 20:
        (function (e, t) {
          const {
            push: n,
            helper: r,
            indent: i,
            deindent: a,
            newline: o
          } = t;
          n(`_cache[${e.index}] || (`);
          if (e.isVNode) {
            i();
            n(`${r(SET_BLOCK_TRACKING)}(-1),`);
            o();
          }
          n(`_cache[${e.index}] = `);
          Ut(e.value, t);
          if (e.isVNode) {
            n(",");
            o();
            n(`${r(SET_BLOCK_TRACKING)}(1),`);
            o();
            n(`_cache[${e.index}]`);
            a();
          }
          n(")");
        })(e, t);
        break;
      case 21:
        qt(e.body, t, true, false);
    }
  }
}
function jt(e, t) {
  const {
    content: n,
    isStatic: r
  } = e;
  t.push(r ? JSON.stringify(n) : n, e);
}
function Ht(e, t) {
  for (let n = 0; n < e.children.length; n++) {
    const i = e.children[n];
    if ((0, r.isString)(i)) {
      t.push(i);
    } else {
      Ut(i, t);
    }
  }
}
function Vt(e, t) {
  const {
    push: n
  } = t;
  if (e.type === 8) {
    n("[");
    Ht(e, t);
    n("]");
  } else if (e.isStatic) {
    n(isSimpleIdentifier(e.content) ? e.content : JSON.stringify(e.content), e);
  } else {
    n(`[${e.content}]`, e);
  }
}
export function walkIdentifiers(e, t, n = false, r = [], i = Object.create(null)) {}
export function isReferencedIdentifier(e, t, n) {
  return false;
}
export function isInDestructureAssignment(e, t) {
  if (e && (e.type === "ObjectProperty" || e.type === "ArrayPattern")) {
    let e = t.length;
    while (e--) {
      const n = t[e];
      if (n.type === "AssignmentExpression") {
        return true;
      }
      if (n.type !== "ObjectProperty" && !n.type.endsWith("Pattern")) {
        break;
      }
    }
  }
  return false;
}
export function walkFunctionParams(e, t) {
  for (const n of e.params) {
    for (const e of extractIdentifiers(n)) {
      t(e);
    }
  }
}
export function walkBlockDeclarations(e, t) {
  for (const n of e.body) {
    if (n.type === "VariableDeclaration") {
      if (n.declare) {
        continue;
      }
      for (const e of n.declarations) {
        for (const n of extractIdentifiers(e.id)) {
          t(n);
        }
      }
    } else if (n.type === "FunctionDeclaration" || n.type === "ClassDeclaration") {
      if (n.declare || !n.id) {
        continue;
      }
      t(n.id);
    }
  }
}
export function extractIdentifiers(e, t = []) {
  switch (e.type) {
    case "Identifier":
      t.push(e);
      break;
    case "MemberExpression":
      let n = e;
      while (n.type === "MemberExpression") {
        n = n.object;
      }
      t.push(n);
      break;
    case "ObjectPattern":
      for (const n of e.properties) {
        if (n.type === "RestElement") {
          extractIdentifiers(n.argument, t);
        } else {
          extractIdentifiers(n.value, t);
        }
      }
      break;
    case "ArrayPattern":
      e.elements.forEach(e => {
        if (e) {
          extractIdentifiers(e, t);
        }
      });
      break;
    case "RestElement":
      extractIdentifiers(e.argument, t);
      break;
    case "AssignmentPattern":
      extractIdentifiers(e.left, t);
  }
  return t;
}
export const isFunctionType = e => /Function(?:Expression|Declaration)$|Method$/.test(e.type);
export const isStaticProperty = e => e && (e.type === "ObjectProperty" || e.type === "ObjectMethod") && !e.computed;
export const isStaticPropertyKey = (e, t) => isStaticProperty(t) && t.key === e;
new RegExp("\\b" + "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments,typeof,void".split(",").join("\\b|\\b") + "\\b");
export const transformExpression = (e, t) => {
  if (e.type === 5) {
    e.content = processExpression(e.content, t);
  } else if (e.type === 1) {
    for (let n = 0; n < e.props.length; n++) {
      const r = e.props[n];
      if (r.type === 7 && r.name !== "for") {
        const e = r.exp;
        const n = r.arg;
        if (!!e && e.type === 4 && (r.name !== "on" || !n)) {
          r.exp = processExpression(e, t, r.name === "slot");
        }
        if (n && n.type === 4 && !n.isStatic) {
          r.arg = processExpression(n, t);
        }
      }
    }
  }
};
export function processExpression(e, t, n = false, r = false, i = Object.create(t.identifiers)) {
  return e;
}
const nn = createStructuralDirectiveTransform(/^(if|else|else-if)$/, (e, t, n) => processIf(e, t, n, (e, t, r) => {
  const i = n.parent.children;
  let a = i.indexOf(e);
  let o = 0;
  while (a-- >= 0) {
    const e = i[a];
    if (e && e.type === 9) {
      o += e.branches.length;
    }
  }
  return () => {
    if (r) {
      e.codegenNode = on(t, o, n);
    } else {
      const r = function (e) {
        while (true) {
          if (e.type === 19) {
            if (e.alternate.type !== 19) {
              return e;
            }
            e = e.alternate;
          } else if (e.type === 20) {
            e = e.value;
          }
        }
      }(e.codegenNode);
      r.alternate = on(t, o + e.branches.length - 1, n);
    }
  };
}));
export function processIf(e, t, n, r) {
  if (t.name !== "else" && (!t.exp || !t.exp.content.trim())) {
    const r = t.exp ? t.exp.loc : e.loc;
    n.onError(createCompilerError(28, t.loc));
    t.exp = createSimpleExpression("true", false, r);
  }
  if (t.name === "if") {
    const i = an(e, t);
    const a = {
      type: 9,
      loc: e.loc,
      branches: [i]
    };
    n.replaceNode(a);
    if (r) {
      return r(a, i, true);
    }
  } else {
    const i = n.parent.children;
    let a = i.indexOf(e);
    while (a-- >= -1) {
      const s = i[a];
      if (!s || s.type !== 2 || s.content.trim().length) {
        if (s && s.type === 9) {
          if (t.name === "else-if" && s.branches[s.branches.length - 1].condition === undefined) {
            n.onError(createCompilerError(30, e.loc));
          }
          n.removeNode();
          const i = an(e, t);
          0;
          s.branches.push(i);
          const a = r && r(s, i, false);
          traverseNode(i, n);
          if (a) {
            a();
          }
          n.currentNode = null;
        } else {
          n.onError(createCompilerError(30, e.loc));
        }
        break;
      }
      n.removeNode(s);
    }
  }
}
function an(e, t) {
  return {
    type: 10,
    loc: e.loc,
    condition: t.name === "else" ? undefined : t.exp,
    children: e.tagType !== 3 || findDir(e, "for") ? [e] : e.children,
    userKey: findProp(e, "key")
  };
}
function on(e, t, n) {
  if (e.condition) {
    return createConditionalExpression(e.condition, sn(e, t, n), createCallExpression(n.helper(CREATE_COMMENT), ["\"\"", "true"]));
  } else {
    return sn(e, t, n);
  }
}
function sn(e, t, n) {
  const {
    helper: i
  } = n;
  const a = createObjectProperty("key", createSimpleExpression(`${t}`, false, locStub, 2));
  const {
    children: o
  } = e;
  const l = o[0];
  if (o.length !== 1 || l.type !== 1) {
    if (o.length === 1 && l.type === 11) {
      const e = l.codegenNode;
      injectProp(e, a, n);
      return e;
    }
    {
      let t = 64;
      r.PatchFlagNames[64];
      return createVNodeCall(n, i(FRAGMENT), createObjectExpression([a]), o, t + "", undefined, undefined, true, false, false, e.loc);
    }
  }
  {
    const e = l.codegenNode;
    const t = getMemoedVNodeCall(e);
    if (t.type === 13) {
      makeBlock(t, n);
    }
    injectProp(t, a, n);
    return e;
  }
}
const ln = createStructuralDirectiveTransform("for", (e, t, n) => {
  const {
    helper: r,
    removeHelper: i
  } = n;
  return processFor(e, t, n, t => {
    const a = createCallExpression(r(RENDER_LIST), [t.source]);
    const o = isTemplateNode(e);
    const l = findDir(e, "memo");
    const c = findProp(e, "key");
    const u = c && (c.type === 6 ? createSimpleExpression(c.value.content, true) : c.exp);
    const p = c ? createObjectProperty("key", u) : null;
    const h = t.source.type === 4 && t.source.constType > 0;
    const g = h ? 64 : c ? 128 : 256;
    t.codegenNode = createVNodeCall(n, r(FRAGMENT), undefined, a, g + "", undefined, undefined, true, !h, false, e.loc);
    return () => {
      let c;
      const {
        children: g
      } = t;
      const f = g.length !== 1 || g[0].type !== 1;
      const m = isSlotOutlet(e) ? e : o && e.children.length === 1 && isSlotOutlet(e.children[0]) ? e.children[0] : null;
      if (m) {
        c = m.codegenNode;
        if (o && p) {
          injectProp(c, p, n);
        }
      } else if (f) {
        c = createVNodeCall(n, r(FRAGMENT), p ? createObjectExpression([p]) : undefined, e.children, "64", undefined, undefined, true, undefined, false);
      } else {
        c = g[0].codegenNode;
        if (o && p) {
          injectProp(c, p, n);
        }
        if (c.isBlock !== !h) {
          if (c.isBlock) {
            i(OPEN_BLOCK);
            i(getVNodeBlockHelper(n.inSSR, c.isComponent));
          } else {
            i(getVNodeHelper(n.inSSR, c.isComponent));
          }
        }
        c.isBlock = !h;
        if (c.isBlock) {
          r(OPEN_BLOCK);
          r(getVNodeBlockHelper(n.inSSR, c.isComponent));
        } else {
          r(getVNodeHelper(n.inSSR, c.isComponent));
        }
      }
      if (l) {
        const e = createFunctionExpression(createForLoopParams(t.parseResult, [createSimpleExpression("_cached")]));
        e.body = createBlockStatement([createCompoundExpression(["const _memo = (", l.exp, ")"]), createCompoundExpression(["if (_cached", ...(u ? [" && _cached.key === ", u] : []), ` && ${n.helperString(IS_MEMO_SAME)}(_cached, _memo)) return _cached`]), createCompoundExpression(["const _item = ", c]), createSimpleExpression("_item.memo = _memo"), createSimpleExpression("return _item")]);
        a.arguments.push(e, createSimpleExpression("_cache"), createSimpleExpression(String(n.cached++)));
      } else {
        a.arguments.push(createFunctionExpression(createForLoopParams(t.parseResult), c, true));
      }
    };
  });
});
export function processFor(e, t, n, r) {
  if (!t.exp) {
    n.onError(createCompilerError(31, t.loc));
    return;
  }
  const i = hn(t.exp, n);
  if (!i) {
    n.onError(createCompilerError(32, t.loc));
    return;
  }
  const {
    addIdentifiers: a,
    removeIdentifiers: s,
    scopes: l
  } = n;
  const {
    source: c,
    value: u,
    key: p,
    index: d
  } = i;
  const h = {
    type: 11,
    loc: t.loc,
    source: c,
    valueAlias: u,
    keyAlias: p,
    objectIndexAlias: d,
    parseResult: i,
    children: isTemplateNode(e) ? e.children : [e]
  };
  n.replaceNode(h);
  l.vFor++;
  const g = r && r(h);
  return () => {
    l.vFor--;
    if (g) {
      g();
    }
  };
}
const un = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
const pn = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
const dn = /^\(|\)$/g;
function hn(e, t) {
  const n = e.loc;
  const r = e.content;
  const i = r.match(un);
  if (!i) {
    return;
  }
  const [, a, o] = i;
  const s = {
    source: gn(n, o.trim(), r.indexOf(o, a.length)),
    value: undefined,
    key: undefined,
    index: undefined
  };
  let l = a.trim().replace(dn, "").trim();
  const c = a.indexOf(l);
  const u = l.match(pn);
  if (u) {
    l = l.replace(pn, "").trim();
    const e = u[1].trim();
    let t;
    if (e) {
      t = r.indexOf(e, c + l.length);
      s.key = gn(n, e, t);
    }
    if (u[2]) {
      const i = u[2].trim();
      if (i) {
        s.index = gn(n, i, r.indexOf(i, s.key ? t + e.length : c + l.length));
      }
    }
  }
  if (l) {
    s.value = gn(n, l, c);
  }
  return s;
}
function gn(e, t, n) {
  return createSimpleExpression(t, false, getInnerRange(e, n, t.length));
}
export function createForLoopParams({
  value: e,
  key: t,
  index: n
}, r = []) {
  return function (e) {
    let t = e.length;
    while (t-- && !e[t]);
    return e.slice(0, t + 1).map((e, t) => e || createSimpleExpression("_".repeat(t + 1), false));
  }([e, t, n, ...r]);
}
const mn = createSimpleExpression("undefined", false);
export const trackSlotScopes = (e, t) => {
  if (e.type === 1 && (e.tagType === 1 || e.tagType === 3)) {
    const n = findDir(e, "slot");
    if (n) {
      n.exp;
      t.scopes.vSlot++;
      return () => {
        t.scopes.vSlot--;
      };
    }
  }
};
export const trackVForSlotScopes = (e, t) => {
  let n;
  if (isTemplateNode(e) && e.props.some(isVSlot) && (n = findDir(e, "for"))) {
    const e = n.parseResult = hn(n.exp);
    if (e) {
      const {
        value: n,
        key: r,
        index: i
      } = e;
      const {
        addIdentifiers: a,
        removeIdentifiers: o
      } = t;
      if (n) {
        a(n);
      }
      if (r) {
        a(r);
      }
      if (i) {
        a(i);
      }
      return () => {
        if (n) {
          o(n);
        }
        if (r) {
          o(r);
        }
        if (i) {
          o(i);
        }
      };
    }
  }
};
const yn = (e, t, n) => createFunctionExpression(e, t, false, true, t.length ? t[0].loc : n);
export function buildSlots(e, t, n = yn) {
  t.helper(WITH_CTX);
  const {
    children: r,
    loc: i
  } = e;
  const a = [];
  const s = [];
  let l = t.scopes.vSlot > 0 || t.scopes.vFor > 0;
  const c = findDir(e, "slot", true);
  if (c) {
    const {
      arg: e,
      exp: t
    } = c;
    if (e && !isStaticExp(e)) {
      l = true;
    }
    a.push(createObjectProperty(e || createSimpleExpression("default", true), n(t, r, i)));
  }
  let u = false;
  let p = false;
  const d = [];
  const h = new Set();
  for (let e = 0; e < r.length; e++) {
    const i = r[e];
    let g;
    if (!isTemplateNode(i) || !(g = findDir(i, "slot", true))) {
      if (i.type !== 3) {
        d.push(i);
      }
      continue;
    }
    if (c) {
      t.onError(createCompilerError(37, g.loc));
      break;
    }
    u = true;
    const {
      children: f,
      loc: m
    } = i;
    const {
      arg: b = createSimpleExpression("default", true),
      exp: x,
      loc: y
    } = g;
    let v;
    if (isStaticExp(b)) {
      v = b ? b.content : "default";
    } else {
      l = true;
    }
    const w = n(x, f, m);
    let A;
    let k;
    let S;
    if (A = findDir(i, "if")) {
      l = true;
      s.push(createConditionalExpression(A.exp, wn(b, w), mn));
    } else if (k = findDir(i, /^else(-if)?$/, true)) {
      let n;
      let i = e;
      while (i-- && (n = r[i], n.type === 3));
      if (n && isTemplateNode(n) && findDir(n, "if")) {
        r.splice(e, 1);
        e--;
        let t = s[s.length - 1];
        while (t.alternate.type === 19) {
          t = t.alternate;
        }
        t.alternate = k.exp ? createConditionalExpression(k.exp, wn(b, w), mn) : wn(b, w);
      } else {
        t.onError(createCompilerError(30, k.loc));
      }
    } else if (S = findDir(i, "for")) {
      l = true;
      const e = S.parseResult || hn(S.exp);
      if (e) {
        s.push(createCallExpression(t.helper(RENDER_LIST), [e.source, createFunctionExpression(createForLoopParams(e), wn(b, w), true)]));
      } else {
        t.onError(createCompilerError(32, S.loc));
      }
    } else {
      if (v) {
        if (h.has(v)) {
          t.onError(createCompilerError(38, y));
          continue;
        }
        h.add(v);
        if (v === "default") {
          p = true;
        }
      }
      a.push(createObjectProperty(b, w));
    }
  }
  if (!c) {
    const e = (e, r) => {
      const a = n(e, r, i);
      if (t.compatConfig) {
        a.isNonScopedSlot = true;
      }
      return createObjectProperty("default", a);
    };
    if (u) {
      if (d.length && d.some(e => kn(e))) {
        if (p) {
          t.onError(createCompilerError(39, d[0].loc));
        } else {
          a.push(e(undefined, d));
        }
      }
    } else {
      a.push(e(undefined, r));
    }
  }
  const g = l ? 2 : An(e.children) ? 3 : 1;
  let f = createObjectExpression(a.concat(createObjectProperty("_", createSimpleExpression(g + "", false))), i);
  if (s.length) {
    f = createCallExpression(t.helper(CREATE_SLOTS), [f, createArrayExpression(s)]);
  }
  return {
    slots: f,
    hasDynamicSlots: l
  };
}
function wn(e, t) {
  return createObjectExpression([createObjectProperty("name", e), createObjectProperty("fn", t)]);
}
function An(e) {
  for (let t = 0; t < e.length; t++) {
    const n = e[t];
    switch (n.type) {
      case 1:
        if (n.tagType === 2 || An(n.children)) {
          return true;
        }
        break;
      case 9:
        if (An(n.branches)) {
          return true;
        }
        break;
      case 10:
      case 11:
        if (An(n.children)) {
          return true;
        }
    }
  }
  return false;
}
function kn(e) {
  return e.type !== 2 && e.type !== 12 || (e.type === 2 ? !!e.content.trim() : kn(e.content));
}
const Sn = new WeakMap();
export const transformElement = (e, t) => function () {
  if ((e = t.currentNode).type !== 1 || e.tagType !== 0 && e.tagType !== 1) {
    return;
  }
  const {
    tag: n,
    props: i
  } = e;
  const a = e.tagType === 1;
  let o = a ? resolveComponentType(e, t) : `"${n}"`;
  let s;
  let p;
  let d;
  let h;
  let g;
  let f;
  let m = 0;
  let b = (0, r.isObject)(o) && o.callee === RESOLVE_DYNAMIC_COMPONENT || o === TELEPORT || o === SUSPENSE || !a && (n === "svg" || n === "foreignObject");
  if (i.length > 0) {
    const n = buildProps(e, t);
    s = n.props;
    m = n.patchFlag;
    g = n.dynamicPropNames;
    const r = n.directives;
    f = r && r.length ? createArrayExpression(r.map(e => buildDirectiveArgs(e, t))) : undefined;
    if (n.shouldUseBlock) {
      b = true;
    }
  }
  if (e.children.length > 0) {
    if (o === KEEP_ALIVE) {
      b = true;
      m |= 1024;
    }
    if (a && o !== TELEPORT && o !== KEEP_ALIVE) {
      const {
        slots: n,
        hasDynamicSlots: r
      } = buildSlots(e, t);
      p = n;
      if (r) {
        m |= 1024;
      }
    } else if (e.children.length === 1 && o !== TELEPORT) {
      const n = e.children[0];
      const r = n.type;
      const i = r === 5 || r === 8;
      if (i && Et(n, t) === 0) {
        m |= 1;
      }
      p = i || r === 2 ? n : e.children;
    } else {
      p = e.children;
    }
  }
  if (m !== 0) {
    d = String(m);
    if (g && g.length) {
      h = function (e) {
        let t = "[";
        for (let n = 0, r = e.length; n < r; n++) {
          t += JSON.stringify(e[n]);
          if (n < r - 1) {
            t += ", ";
          }
        }
        return t + "]";
      }(g);
    }
  }
  e.codegenNode = createVNodeCall(t, o, s, p, d, h, f, !!b, false, a, e.loc);
};
export function resolveComponentType(e, t, n = false) {
  let {
    tag: r
  } = e;
  const i = Mn(r);
  const a = findProp(e, "is");
  if (a) {
    if (i || Ze("COMPILER_IS_ON_ELEMENT", t)) {
      const e = a.type === 6 ? a.value && createSimpleExpression(a.value.content, true) : a.exp;
      if (e) {
        return createCallExpression(t.helper(RESOLVE_DYNAMIC_COMPONENT), [e]);
      }
    } else if (a.type === 6 && a.value.content.startsWith("vue:")) {
      r = a.value.content.slice(4);
    }
  }
  const o = !i && findDir(e, "is");
  if (o && o.exp) {
    return createCallExpression(t.helper(RESOLVE_DYNAMIC_COMPONENT), [o.exp]);
  }
  const s = isCoreComponent(r) || t.isBuiltInComponent(r);
  if (s) {
    if (!n) {
      t.helper(s);
    }
    return s;
  } else {
    t.helper(RESOLVE_COMPONENT);
    t.components.add(r);
    return toValidAssetId(r, "component");
  }
}
export function buildProps(e, t, n = e.props, i = false) {
  const {
    tag: a,
    loc: s,
    children: l
  } = e;
  const c = e.tagType === 1;
  let u = [];
  const p = [];
  const d = [];
  const h = l.length > 0;
  let g = false;
  let f = 0;
  let m = false;
  let b = false;
  let x = false;
  let y = false;
  let v = false;
  let w = false;
  const A = [];
  const k = ({
    key: e,
    value: n
  }) => {
    if (isStaticExp(e)) {
      const i = e.content;
      const a = (0, r.isOn)(i);
      if (!c && !!a && i.toLowerCase() !== "onclick" && i !== "onUpdate:modelValue" && !(0, r.isReservedProp)(i)) {
        y = true;
      }
      if (a && (0, r.isReservedProp)(i)) {
        w = true;
      }
      if (n.type === 20 || (n.type === 4 || n.type === 8) && Et(n, t) > 0) {
        return;
      }
      if (i === "ref") {
        m = true;
      } else if (i === "class") {
        b = true;
      } else if (i === "style") {
        x = true;
      } else if (i !== "key" && !A.includes(i)) {
        A.push(i);
      }
      if (!!c && (i === "class" || i === "style") && !A.includes(i)) {
        A.push(i);
      }
    } else {
      v = true;
    }
  };
  for (let l = 0; l < n.length; l++) {
    const f = n[l];
    if (f.type === 6) {
      const {
        loc: e,
        name: n,
        value: r
      } = f;
      let i = true;
      if (n === "ref") {
        m = true;
        if (t.scopes.vFor > 0) {
          u.push(createObjectProperty(createSimpleExpression("ref_for", true), createSimpleExpression("true")));
        }
      }
      if (n === "is" && (Mn(a) || r && r.content.startsWith("vue:") || Ze("COMPILER_IS_ON_ELEMENT", t))) {
        continue;
      }
      u.push(createObjectProperty(createSimpleExpression(n, true, getInnerRange(e, 0, n.length)), createSimpleExpression(r ? r.content : "", i, r ? r.loc : e)));
    } else {
      const {
        name: n,
        arg: l,
        exp: m,
        loc: b
      } = f;
      const x = n === "bind";
      const y = n === "on";
      if (n === "slot") {
        if (!c) {
          t.onError(createCompilerError(40, b));
        }
        continue;
      }
      if (n === "once" || n === "memo") {
        continue;
      }
      if (n === "is" || x && isStaticArgOf(l, "is") && (Mn(a) || Ze("COMPILER_IS_ON_ELEMENT", t))) {
        continue;
      }
      if (y && i) {
        continue;
      }
      if (x && isStaticArgOf(l, "key") || y && h && isStaticArgOf(l, "vue:before-update")) {
        g = true;
      }
      if (x && isStaticArgOf(l, "ref") && t.scopes.vFor > 0) {
        u.push(createObjectProperty(createSimpleExpression("ref_for", true), createSimpleExpression("true")));
      }
      if (!l && (x || y)) {
        v = true;
        if (m) {
          if (u.length) {
            p.push(createObjectExpression(Tn(u), s));
            u = [];
          }
          if (x) {
            if (Ze("COMPILER_V_BIND_OBJECT_ORDER", t)) {
              p.unshift(m);
              continue;
            }
            p.push(m);
          } else {
            p.push({
              type: 14,
              loc: b,
              callee: t.helper(TO_HANDLERS),
              arguments: [m]
            });
          }
        } else {
          t.onError(createCompilerError(x ? 34 : 35, b));
        }
        continue;
      }
      const w = t.directiveTransforms[n];
      if (w) {
        const {
          props: n,
          needRuntime: a
        } = w(f, e, t);
        if (!i) {
          n.forEach(k);
        }
        u.push(...n);
        if (a) {
          d.push(f);
          if ((0, r.isSymbol)(a)) {
            Sn.set(f, a);
          }
        }
      } else if (!(0, r.isBuiltInDirective)(n)) {
        d.push(f);
        if (h) {
          g = true;
        }
      }
    }
  }
  let S;
  if (p.length) {
    if (u.length) {
      p.push(createObjectExpression(Tn(u), s));
    }
    S = p.length > 1 ? createCallExpression(t.helper(MERGE_PROPS), p, s) : p[0];
  } else if (u.length) {
    S = createObjectExpression(Tn(u), s);
  }
  if (v) {
    f |= 16;
  } else {
    if (b && !c) {
      f |= 2;
    }
    if (x && !c) {
      f |= 4;
    }
    if (A.length) {
      f |= 8;
    }
    if (y) {
      f |= 32;
    }
  }
  if (!g && (f === 0 || f === 32) && (!!m || !!w || !!(d.length > 0))) {
    f |= 512;
  }
  if (!t.inSSR && S) {
    switch (S.type) {
      case 15:
        let e = -1;
        let n = -1;
        let r = false;
        for (let t = 0; t < S.properties.length; t++) {
          const i = S.properties[t].key;
          if (isStaticExp(i)) {
            if (i.content === "class") {
              e = t;
            } else if (i.content === "style") {
              n = t;
            }
          } else if (!i.isHandlerKey) {
            r = true;
          }
        }
        const i = S.properties[e];
        const a = S.properties[n];
        if (r) {
          S = createCallExpression(t.helper(NORMALIZE_PROPS), [S]);
        } else {
          if (i && !isStaticExp(i.value)) {
            i.value = createCallExpression(t.helper(NORMALIZE_CLASS), [i.value]);
          }
          if (!!a && !isStaticExp(a.value) && (!!x || a.value.type === 17)) {
            a.value = createCallExpression(t.helper(NORMALIZE_STYLE), [a.value]);
          }
        }
        break;
      case 14:
        break;
      default:
        S = createCallExpression(t.helper(NORMALIZE_PROPS), [createCallExpression(t.helper(GUARD_REACTIVE_PROPS), [S])]);
    }
  }
  return {
    props: S,
    directives: d,
    patchFlag: f,
    dynamicPropNames: A,
    shouldUseBlock: g
  };
}
function Tn(e) {
  const t = new Map();
  const n = [];
  for (let i = 0; i < e.length; i++) {
    const a = e[i];
    if (a.key.type === 8 || !a.key.isStatic) {
      n.push(a);
      continue;
    }
    const o = a.key.content;
    const s = t.get(o);
    if (s) {
      if (o === "style" || o === "class" || (0, r.isOn)(o)) {
        Dn(s, a);
      }
    } else {
      t.set(o, a);
      n.push(a);
    }
  }
  return n;
}
function Dn(e, t) {
  if (e.value.type === 17) {
    e.value.elements.push(t.value);
  } else {
    e.value = createArrayExpression([e.value, t.value], e.loc);
  }
}
export function buildDirectiveArgs(e, t) {
  const n = [];
  const r = Sn.get(e);
  if (r) {
    n.push(t.helperString(r));
  } else {
    t.helper(RESOLVE_DIRECTIVE);
    t.directives.add(e.name);
    n.push(toValidAssetId(e.name, "directive"));
  }
  const {
    loc: i
  } = e;
  if (e.exp) {
    n.push(e.exp);
  }
  if (e.arg) {
    if (!e.exp) {
      n.push("void 0");
    }
    n.push(e.arg);
  }
  if (Object.keys(e.modifiers).length) {
    if (!e.arg) {
      if (!e.exp) {
        n.push("void 0");
      }
      n.push("void 0");
    }
    const t = createSimpleExpression("true", false, i);
    n.push(createObjectExpression(e.modifiers.map(e => createObjectProperty(e, t)), i));
  }
  return createArrayExpression(n, e.loc);
}
function Mn(e) {
  return e === "component" || e === "Component";
}
const Fn = /-(\w)/g;
const zn = (e => {
  const t = Object.create(null);
  return n => t[n] ||= e(n);
})(e => e.replace(Fn, (e, t) => t ? t.toUpperCase() : ""));
const Rn = (e, t) => {
  if (isSlotOutlet(e)) {
    const {
      children: n,
      loc: r
    } = e;
    const {
      slotName: i,
      slotProps: a
    } = processSlotOutlet(e, t);
    const o = [t.prefixIdentifiers ? "_ctx.$slots" : "$slots", i, "{}", "undefined", "true"];
    let s = 2;
    if (a) {
      o[2] = a;
      s = 3;
    }
    if (n.length) {
      o[3] = createFunctionExpression([], n, false, false, r);
      s = 4;
    }
    if (t.scopeId && !t.slotted) {
      s = 5;
    }
    o.splice(s);
    e.codegenNode = createCallExpression(t.helper(RENDER_SLOT), o, r);
  }
};
export function processSlotOutlet(e, t) {
  let n;
  let r = "\"default\"";
  const i = [];
  for (let t = 0; t < e.props.length; t++) {
    const n = e.props[t];
    if (n.type === 6) {
      if (n.value) {
        if (n.name === "name") {
          r = JSON.stringify(n.value.content);
        } else {
          n.name = zn(n.name);
          i.push(n);
        }
      }
    } else if (n.name === "bind" && isStaticArgOf(n.arg, "name")) {
      if (n.exp) {
        r = n.exp;
      }
    } else {
      if (n.name === "bind" && n.arg && isStaticExp(n.arg)) {
        n.arg.content = zn(n.arg.content);
      }
      i.push(n);
    }
  }
  if (i.length > 0) {
    const {
      props: r,
      directives: a
    } = buildProps(e, t, i);
    n = r;
    if (a.length) {
      t.onError(createCompilerError(36, a[0].loc));
    }
  }
  return {
    slotName: r,
    slotProps: n
  };
}
const Nn = /^\s*([\w$_]+|(async\s*)?\([^)]*?\))\s*=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/;
export const transformOn = (e, t, n, i) => {
  const {
    loc: a,
    modifiers: s,
    arg: l
  } = e;
  let c;
  if (!e.exp && !s.length) {
    n.onError(createCompilerError(35, a));
  }
  if (l.type === 4) {
    if (l.isStatic) {
      let e = l.content;
      if (e.startsWith("vue:")) {
        e = `vnode-${e.slice(4)}`;
      }
      c = createSimpleExpression((0, r.toHandlerKey)((0, r.camelize)(e)), true, l.loc);
    } else {
      c = createCompoundExpression([`${n.helperString(TO_HANDLER_KEY)}(`, l, ")"]);
    }
  } else {
    c = l;
    c.children.unshift(`${n.helperString(TO_HANDLER_KEY)}(`);
    c.children.push(")");
  }
  let u = e.exp;
  if (u && !u.content.trim()) {
    u = undefined;
  }
  let p = n.cacheHandlers && !u && !n.inVOnce;
  if (u) {
    const e = isMemberExpression(u.content);
    const t = !e && !Nn.test(u.content);
    const n = u.content.includes(";");
    0;
    if (t || p && e) {
      u = createCompoundExpression([`${t ? "$event" : "(...args)"} => ${n ? "{" : "("}`, u, n ? "}" : ")"]);
    }
  }
  let d = {
    props: [createObjectProperty(c, u || createSimpleExpression("() => {}", false, a))]
  };
  if (i) {
    d = i(d);
  }
  if (p) {
    d.props[0].value = n.cache(d.props[0].value);
  }
  d.props.forEach(e => e.key.isHandlerKey = true);
  return d;
};
export const transformBind = (e, t, n) => {
  const {
    exp: i,
    modifiers: a,
    loc: s
  } = e;
  const l = e.arg;
  if (l.type !== 4) {
    l.children.unshift("(");
    l.children.push(") || \"\"");
  } else if (!l.isStatic) {
    l.content = `${l.content} || ""`;
  }
  if (a.includes("camel")) {
    if (l.type === 4) {
      if (l.isStatic) {
        l.content = (0, r.camelize)(l.content);
      } else {
        l.content = `${n.helperString(CAMELIZE)}(${l.content})`;
      }
    } else {
      l.children.unshift(`${n.helperString(CAMELIZE)}(`);
      l.children.push(")");
    }
  }
  if (!n.inSSR) {
    if (a.includes("prop")) {
      On(l, ".");
    }
    if (a.includes("attr")) {
      On(l, "^");
    }
  }
  if (!i || i.type === 4 && !i.content.trim()) {
    n.onError(createCompilerError(34, s));
    return {
      props: [createObjectProperty(l, createSimpleExpression("", true, s))]
    };
  } else {
    return {
      props: [createObjectProperty(l, i)]
    };
  }
};
const On = (e, t) => {
  if (e.type === 4) {
    if (e.isStatic) {
      e.content = t + e.content;
    } else {
      e.content = `\`${t}\${${e.content}}\``;
    }
  } else {
    e.children.unshift(`'${t}' + (`);
    e.children.push(")");
  }
};
const qn = (e, t) => {
  if (e.type === 0 || e.type === 1 || e.type === 11 || e.type === 10) {
    return () => {
      const n = e.children;
      let r;
      let i = false;
      for (let e = 0; e < n.length; e++) {
        const t = n[e];
        if (isText(t)) {
          i = true;
          for (let i = e + 1; i < n.length; i++) {
            const a = n[i];
            if (!isText(a)) {
              r = undefined;
              break;
            }
            r ||= n[e] = {
              type: 8,
              loc: t.loc,
              children: [t]
            };
            r.children.push(" + ", a);
            n.splice(i, 1);
            i--;
          }
        }
      }
      if (i && (n.length !== 1 || e.type !== 0 && (e.type !== 1 || e.tagType !== 0 || e.props.find(e => e.type === 7 && !t.directiveTransforms[e.name]) || e.tag === "template"))) {
        for (let e = 0; e < n.length; e++) {
          const r = n[e];
          if (isText(r) || r.type === 8) {
            const i = [];
            if (r.type !== 2 || r.content !== " ") {
              i.push(r);
            }
            if (!t.ssr && Et(r, t) === 0) {
              i.push("1");
            }
            n[e] = {
              type: 12,
              content: r,
              loc: r.loc,
              codegenNode: createCallExpression(t.helper(CREATE_TEXT), i)
            };
          }
        }
      }
    };
  }
};
const Un = new WeakSet();
const jn = (e, t) => {
  if (e.type === 1 && findDir(e, "once", true)) {
    if (Un.has(e) || t.inVOnce) {
      return;
    }
    Un.add(e);
    t.inVOnce = true;
    t.helper(SET_BLOCK_TRACKING);
    return () => {
      t.inVOnce = false;
      const e = t.currentNode;
      e.codegenNode &&= t.cache(e.codegenNode, true);
    };
  }
};
export const transformModel = (e, t, n) => {
  const {
    exp: r,
    arg: i
  } = e;
  if (!r) {
    n.onError(createCompilerError(41, e.loc));
    return Vn();
  }
  const a = r.loc.source;
  const s = r.type === 4 ? r.content : a;
  n.bindingMetadata[a];
  if (!s.trim() || !isMemberExpression(s)) {
    n.onError(createCompilerError(42, r.loc));
    return Vn();
  }
  const l = i || createSimpleExpression("modelValue", true);
  const c = i ? isStaticExp(i) ? `onUpdate:${i.content}` : createCompoundExpression(["\"onUpdate:\" + ", i]) : "onUpdate:modelValue";
  let u;
  u = createCompoundExpression([`${n.isTS ? "($event: any)" : "$event"} => ((`, r, ") = $event)"]);
  const p = [createObjectProperty(l, e.exp), createObjectProperty(c, u)];
  if (e.modifiers.length && t.tagType === 1) {
    const t = e.modifiers.map(e => (isSimpleIdentifier(e) ? e : JSON.stringify(e)) + ": true").join(", ");
    const n = i ? isStaticExp(i) ? `${i.content}Modifiers` : createCompoundExpression([i, " + \"Modifiers\""]) : "modelModifiers";
    p.push(createObjectProperty(n, createSimpleExpression(`{ ${t} }`, false, e.loc, 2)));
  }
  return Vn(p);
};
function Vn(e = []) {
  return {
    props: e
  };
}
const Gn = /[\w).+\-_$\]]/;
const Yn = (e, t) => {
  if (Ze("COMPILER_FILTER", t)) {
    if (e.type === 5) {
      Zn(e.content, t);
    }
    if (e.type === 1) {
      e.props.forEach(e => {
        if (e.type === 7 && e.name !== "for" && e.exp) {
          Zn(e.exp, t);
        }
      });
    }
  }
};
function Zn(e, t) {
  if (e.type === 4) {
    Wn(e, t);
  } else {
    for (let n = 0; n < e.children.length; n++) {
      const r = e.children[n];
      if (typeof r == "object") {
        if (r.type === 4) {
          Wn(r, t);
        } else if (r.type === 8) {
          Zn(e, t);
        } else if (r.type === 5) {
          Zn(r.content, t);
        }
      }
    }
  }
}
function Wn(e, t) {
  const n = e.content;
  let r;
  let i;
  let a;
  let o;
  let s = false;
  let l = false;
  let c = false;
  let u = false;
  let p = 0;
  let d = 0;
  let h = 0;
  let g = 0;
  let f = [];
  for (a = 0; a < n.length; a++) {
    i = r;
    r = n.charCodeAt(a);
    if (s) {
      if (r === 39 && i !== 92) {
        s = false;
      }
    } else if (l) {
      if (r === 34 && i !== 92) {
        l = false;
      }
    } else if (c) {
      if (r === 96 && i !== 92) {
        c = false;
      }
    } else if (u) {
      if (r === 47 && i !== 92) {
        u = false;
      }
    } else if (r !== 124 || n.charCodeAt(a + 1) === 124 || n.charCodeAt(a - 1) === 124 || p || d || h) {
      switch (r) {
        case 34:
          l = true;
          break;
        case 39:
          s = true;
          break;
        case 96:
          c = true;
          break;
        case 40:
          h++;
          break;
        case 41:
          h--;
          break;
        case 91:
          d++;
          break;
        case 93:
          d--;
          break;
        case 123:
          p++;
          break;
        case 125:
          p--;
      }
      if (r === 47) {
        let e;
        let t = a - 1;
        for (; t >= 0 && (e = n.charAt(t), e === " "); t--);
        if (!e || !Gn.test(e)) {
          u = true;
        }
      }
    } else if (o === undefined) {
      g = a + 1;
      o = n.slice(0, a).trim();
    } else {
      m();
    }
  }
  function m() {
    f.push(n.slice(g, a).trim());
    g = a + 1;
  }
  if (o === undefined) {
    o = n.slice(0, a).trim();
  } else if (g !== 0) {
    m();
  }
  if (f.length) {
    for (a = 0; a < f.length; a++) {
      o = Qn(o, f[a], t);
    }
    e.content = o;
  }
}
function Qn(e, t, n) {
  n.helper(RESOLVE_FILTER);
  const r = t.indexOf("(");
  if (r < 0) {
    n.filters.add(t);
    return `${toValidAssetId(t, "filter")}(${e})`;
  }
  {
    const i = t.slice(0, r);
    const a = t.slice(r + 1);
    n.filters.add(i);
    return `${toValidAssetId(i, "filter")}(${e}${a !== ")" ? "," + a : a}`;
  }
}
const Kn = new WeakSet();
const Xn = (e, t) => {
  if (e.type === 1) {
    const n = findDir(e, "memo");
    if (!n || Kn.has(e)) {
      return;
    }
    Kn.add(e);
    return () => {
      const r = e.codegenNode || t.currentNode.codegenNode;
      if (r && r.type === 13) {
        if (e.tagType !== 1) {
          makeBlock(r, t);
        }
        e.codegenNode = createCallExpression(t.helper(WITH_MEMO), [n.exp, createFunctionExpression(undefined, r), "_cache", String(t.cached++)]);
      }
    };
  }
};
export function getBaseTransformPreset(e) {
  return [[jn, nn, Xn, ln, Yn, Rn, transformElement, trackSlotScopes, qn], {
    on: transformOn,
    bind: transformBind,
    model: transformModel
  }];
}
export function baseCompile(e, t = {}) {
  const n = t.onError || i;
  const a = t.mode === "module";
  if (t.prefixIdentifiers === true) {
    n(createCompilerError(46));
  } else if (a) {
    n(createCompilerError(47));
  }
  if (t.cacheHandlers) {
    n(createCompilerError(48));
  }
  if (t.scopeId && !a) {
    n(createCompilerError(49));
  }
  const s = (0, r.isString)(e) ? baseParse(e, t) : e;
  const [l, c] = getBaseTransformPreset();
  transform(s, (0, r.extend)({}, t, {
    prefixIdentifiers: false,
    nodeTransforms: [...l, ...(t.nodeTransforms || [])],
    directiveTransforms: (0, r.extend)({}, c, t.directiveTransforms || {})
  }));
  return generate(s, (0, r.extend)({}, t, {
    prefixIdentifiers: false
  }));
}
export const noopDirectiveTransform = () => ({
  props: []
});
export const V_MODEL_RADIO = Symbol("");
export const V_MODEL_CHECKBOX = Symbol("");
export const V_MODEL_TEXT = Symbol("");
export const V_MODEL_SELECT = Symbol("");
export const V_MODEL_DYNAMIC = Symbol("");
export const V_ON_WITH_MODIFIERS = Symbol("");
export const V_ON_WITH_KEYS = Symbol("");
export const V_SHOW = Symbol("");
export const TRANSITION = Symbol("");
export const TRANSITION_GROUP = Symbol("");
let pr;
registerRuntimeHelpers({
  [V_MODEL_RADIO]: "vModelRadio",
  [V_MODEL_CHECKBOX]: "vModelCheckbox",
  [V_MODEL_TEXT]: "vModelText",
  [V_MODEL_SELECT]: "vModelSelect",
  [V_MODEL_DYNAMIC]: "vModelDynamic",
  [V_ON_WITH_MODIFIERS]: "withModifiers",
  [V_ON_WITH_KEYS]: "withKeys",
  [V_SHOW]: "vShow",
  [TRANSITION]: "Transition",
  [TRANSITION_GROUP]: "TransitionGroup"
});
const dr = (0, r.makeMap)("style,iframe,script,noscript", true);
export const parserOptions = {
  isVoidTag: r.isVoidTag,
  isNativeTag: e => (0, r.isHTMLTag)(e) || (0, r.isSVGTag)(e),
  isPreTag: e => e === "pre",
  decodeEntities: function (e, t = false) {
    pr ||= document.createElement("div");
    if (t) {
      pr.innerHTML = `<div foo="${e.replace(/"/g, "&quot;")}">`;
      return pr.children[0].getAttribute("foo");
    } else {
      pr.innerHTML = e;
      return pr.textContent;
    }
  },
  isBuiltInComponent: e => isBuiltInType(e, "Transition") ? TRANSITION : isBuiltInType(e, "TransitionGroup") ? TRANSITION_GROUP : undefined,
  getNamespace(e, t) {
    let n = t ? t.ns : 0;
    if (t && n === 2) {
      if (t.tag === "annotation-xml") {
        if (e === "svg") {
          return 1;
        }
        if (t.props.some(e => e.type === 6 && e.name === "encoding" && e.value != null && (e.value.content === "text/html" || e.value.content === "application/xhtml+xml"))) {
          n = 0;
        }
      } else if (/^m(?:[ions]|text)$/.test(t.tag) && e !== "mglyph" && e !== "malignmark") {
        n = 0;
      }
    } else if (t && n === 1) {
      if (t.tag === "foreignObject" || t.tag === "desc" || t.tag === "title") {
        n = 0;
      }
    }
    if (n === 0) {
      if (e === "svg") {
        return 1;
      }
      if (e === "math") {
        return 2;
      }
    }
    return n;
  },
  getTextMode({
    tag: e,
    ns: t
  }) {
    if (t === 0) {
      if (e === "textarea" || e === "title") {
        return 1;
      }
      if (dr(e)) {
        return 2;
      }
    }
    return 0;
  }
};
export const transformStyle = e => {
  if (e.type === 1) {
    e.props.forEach((t, n) => {
      if (t.type === 6 && t.name === "style" && t.value) {
        e.props[n] = {
          type: 7,
          name: "bind",
          arg: createSimpleExpression("style", true, t.loc),
          exp: fr(t.value.content, t.loc),
          modifiers: [],
          loc: t.loc
        };
      }
    });
  }
};
const fr = (e, t) => {
  const n = (0, r.parseStringStyle)(e);
  return createSimpleExpression(JSON.stringify(n), false, t, 3);
};
export function createDOMCompilerError(e, t) {
  return createCompilerError(e, t);
}
const br = (0, r.makeMap)("passive,once,capture");
const xr = (0, r.makeMap)("stop,prevent,self,ctrl,shift,alt,meta,exact,middle");
const yr = (0, r.makeMap)("left,right");
const vr = (0, r.makeMap)("onkeyup,onkeydown,onkeypress", true);
const wr = (e, t) => isStaticExp(e) && e.content.toLowerCase() === "onclick" ? createSimpleExpression(t, true) : e.type !== 4 ? createCompoundExpression(["(", e, `) === "onClick" ? "${t}" : (`, e, ")"]) : e;
const Ar = (e, t) => {
  if (e.type === 1 && e.tagType === 0 && (e.tag === "script" || e.tag === "style")) {
    t.onError(createDOMCompilerError(60, e.loc));
    t.removeNode();
  }
};
export const DOMNodeTransforms = [transformStyle];
export const DOMDirectiveTransforms = {
  cloak: noopDirectiveTransform,
  html: (e, t, n) => {
    const {
      exp: r,
      loc: i
    } = e;
    if (!r) {
      n.onError(createDOMCompilerError(50, i));
    }
    if (t.children.length) {
      n.onError(createDOMCompilerError(51, i));
      t.children.length = 0;
    }
    return {
      props: [createObjectProperty(createSimpleExpression("innerHTML", true, i), r || createSimpleExpression("", true))]
    };
  },
  text: (e, t, n) => {
    const {
      exp: r,
      loc: i
    } = e;
    if (!r) {
      n.onError(createDOMCompilerError(52, i));
    }
    if (t.children.length) {
      n.onError(createDOMCompilerError(53, i));
      t.children.length = 0;
    }
    return {
      props: [createObjectProperty(createSimpleExpression("textContent", true), r ? createCallExpression(n.helperString(TO_DISPLAY_STRING), [r], i) : createSimpleExpression("", true))]
    };
  },
  model: (e, t, n) => {
    const r = transformModel(e, t, n);
    if (!r.props.length || t.tagType === 1) {
      return r;
    }
    if (e.arg) {
      n.onError(createDOMCompilerError(55, e.arg.loc));
    }
    const {
      tag: i
    } = t;
    const a = n.isCustomElement(i);
    if (i === "input" || i === "textarea" || i === "select" || a) {
      let o = V_MODEL_TEXT;
      let s = false;
      if (i === "input" || a) {
        const r = findProp(t, "type");
        if (r) {
          if (r.type === 7) {
            o = V_MODEL_DYNAMIC;
          } else if (r.value) {
            switch (r.value.content) {
              case "radio":
                o = V_MODEL_RADIO;
                break;
              case "checkbox":
                o = V_MODEL_CHECKBOX;
                break;
              case "file":
                s = true;
                n.onError(createDOMCompilerError(56, e.loc));
            }
          }
        } else if (hasDynamicKeyVBind(t)) {
          o = V_MODEL_DYNAMIC;
        }
      } else if (i === "select") {
        o = V_MODEL_SELECT;
      }
      if (!s) {
        r.needRuntime = n.helper(o);
      }
    } else {
      n.onError(createDOMCompilerError(54, e.loc));
    }
    r.props = r.props.filter(e => e.key.type !== 4 || e.key.content !== "modelValue");
    return r;
  },
  on: (e, t, n) => transformOn(e, t, n, t => {
    const {
      modifiers: i
    } = e;
    if (!i.length) {
      return t;
    }
    let {
      key: a,
      value: o
    } = t.props[0];
    const {
      keyModifiers: s,
      nonKeyModifiers: l,
      eventOptionModifiers: c
    } = ((e, t, n, r) => {
      const i = [];
      const a = [];
      const o = [];
      for (let r = 0; r < t.length; r++) {
        const s = t[r];
        if (s === "native" && checkCompatEnabled("COMPILER_V_ON_NATIVE", n) || br(s)) {
          o.push(s);
        } else if (yr(s)) {
          if (isStaticExp(e)) {
            if (vr(e.content)) {
              i.push(s);
            } else {
              a.push(s);
            }
          } else {
            i.push(s);
            a.push(s);
          }
        } else if (xr(s)) {
          a.push(s);
        } else {
          i.push(s);
        }
      }
      return {
        keyModifiers: i,
        nonKeyModifiers: a,
        eventOptionModifiers: o
      };
    })(a, i, n, e.loc);
    if (l.includes("right")) {
      a = wr(a, "onContextmenu");
    }
    if (l.includes("middle")) {
      a = wr(a, "onMouseup");
    }
    if (l.length) {
      o = createCallExpression(n.helper(V_ON_WITH_MODIFIERS), [o, JSON.stringify(l)]);
    }
    if (!!s.length && (!isStaticExp(a) || !!vr(a.content))) {
      o = createCallExpression(n.helper(V_ON_WITH_KEYS), [o, JSON.stringify(s)]);
    }
    if (c.length) {
      const e = c.map(r.capitalize).join("");
      a = isStaticExp(a) ? createSimpleExpression(`${a.content}${e}`, true) : createCompoundExpression(["(", a, `) + "${e}"`]);
    }
    return {
      props: [createObjectProperty(a, o)]
    };
  }),
  show: (e, t, n) => {
    const {
      exp: r,
      loc: i
    } = e;
    if (!r) {
      n.onError(createDOMCompilerError(58, i));
    }
    return {
      props: [],
      needRuntime: n.helper(V_SHOW)
    };
  }
};
export function compile(e, t = {}) {
  return baseCompile(e, (0, r.extend)({}, parserOptions, t, {
    nodeTransforms: [Ar, ...DOMNodeTransforms, ...(t.nodeTransforms || [])],
    directiveTransforms: (0, r.extend)({}, DOMDirectiveTransforms, t.directiveTransforms || {}),
    transformHoist: null
  }));
}
export function parse(e, t = {}) {
  return baseParse(e, (0, r.extend)({}, parserOptions, t));
}