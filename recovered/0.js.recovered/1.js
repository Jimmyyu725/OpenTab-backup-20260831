export let e = _d.f;
var s = require("./160.js");
var r = require("./75.js");
function _i(t, e) {
  const {
    element: {
      content: n
    },
    parts: s
  } = t;
  const r = document.createTreeWalker(n, 133, null, false);
  let i = _a(s);
  let o = s[i];
  let c = -1;
  let l = 0;
  const u = [];
  let d = null;
  while (r.nextNode()) {
    c++;
    const t = r.currentNode;
    if (t.previousSibling === d) {
      d = null;
    }
    if (e.has(t)) {
      u.push(t);
      if (d === null) {
        d = t;
      }
    }
    if (d !== null) {
      l++;
    }
    while (o !== undefined && o.index === c) {
      o.index = d !== null ? -1 : o.index - l;
      i = _a(s, i);
      o = s[i];
    }
  }
  u.forEach(t => t.parentNode.removeChild(t));
}
const o = t => {
  let e = t.nodeType === 11 ? 0 : 1;
  const n = document.createTreeWalker(t, 133, null, false);
  while (n.nextNode()) {
    e++;
  }
  return e;
};
const _a = (t, e = -1) => {
  for (let n = e + 1; n < t.length; n++) {
    const e = t[n];
    if (Object(r.d)(e)) {
      return n;
    }
  }
  return -1;
};
var _c = require("./223.js");
var l = require("./222.js");
var u = require("./307.js");
var _d = require("./136.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const _h = (t, e) => `${t}--${e}`;
let p = true;
if (window.ShadyCSS === undefined) {
  p = false;
} else if (window.ShadyCSS.prepareTemplateDom === undefined) {
  console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1.");
  p = false;
}
const _f = t => e => {
  const n = _h(e.type, t);
  let s = l.a.get(n);
  if (s === undefined) {
    s = {
      stringsArray: new WeakMap(),
      keyString: new Map()
    };
    l.a.set(n, s);
  }
  let i = s.stringsArray.get(e.strings);
  if (i !== undefined) {
    return i;
  }
  const o = e.strings.join(r.f);
  i = s.keyString.get(o);
  if (i === undefined) {
    const n = e.getTemplateElement();
    if (p) {
      window.ShadyCSS.prepareTemplateDom(n, t);
    }
    i = new r.a(e, n);
    s.keyString.set(o, i);
  }
  s.stringsArray.set(e.strings, i);
  return i;
};
const m = ["html", "svg"];
const _ = new Set();
const y = (t, e, n) => {
  _.add(t);
  const s = n ? n.element : document.createElement("template");
  const r = e.querySelectorAll("style");
  const {
    length: c
  } = r;
  if (c === 0) {
    window.ShadyCSS.prepareTemplateStyles(s, t);
    return;
  }
  const u = document.createElement("style");
  for (let t = 0; t < c; t++) {
    const e = r[t];
    e.parentNode.removeChild(e);
    u.textContent += e.textContent;
  }
  (t => {
    m.forEach(e => {
      const n = l.a.get(_h(e, t));
      if (n !== undefined) {
        n.keyString.forEach(t => {
          const {
            element: {
              content: e
            }
          } = t;
          const n = new Set();
          Array.from(e.querySelectorAll("style")).forEach(t => {
            n.add(t);
          });
          _i(t, n);
        });
      }
    });
  })(t);
  const d = s.content;
  if (n) {
    (function (t, e, n = null) {
      const {
        element: {
          content: s
        },
        parts: r
      } = t;
      if (n == null) {
        s.appendChild(e);
        return;
      }
      const i = document.createTreeWalker(s, 133, null, false);
      let c = _a(r);
      let l = 0;
      let u = -1;
      while (i.nextNode()) {
        u++;
        for (i.currentNode === n && (l = o(e), n.parentNode.insertBefore(e, n)); c !== -1 && r[c].index === u;) {
          if (l > 0) {
            while (c !== -1) {
              r[c].index += l;
              c = _a(r, c);
            }
            return;
          }
          c = _a(r, c);
        }
      }
    })(n, u, d.firstChild);
  } else {
    d.insertBefore(u, d.firstChild);
  }
  window.ShadyCSS.prepareTemplateStyles(s, t);
  const p = d.querySelector("style");
  if (window.ShadyCSS.nativeShadow && p !== null) {
    e.insertBefore(p.cloneNode(true), e.firstChild);
  } else if (n) {
    d.insertBefore(u, d.firstChild);
    const t = new Set();
    t.add(u);
    _i(n, t);
  }
};
require(/*webcrack:missing*/"./7.js");
var _g = require(/*webcrack:missing*/"./5.js");
var S = _g;
window.JSCompiler_renameProperty = (t, e) => t;
const v = {
  toAttribute(t, e) {
    switch (e) {
      case Boolean:
        if (t) {
          return "";
        } else {
          return null;
        }
      case Object:
      case Array:
        if (t == null) {
          return t;
        } else {
          return JSON.stringify(t);
        }
    }
    return t;
  },
  fromAttribute(t, e) {
    switch (e) {
      case Boolean:
        return t !== null;
      case Number:
        if (t === null) {
          return null;
        } else {
          return Number(t);
        }
      case Object:
      case Array:
        return JSON.parse(t);
    }
    return t;
  }
};
const _b = (t, e) => e !== t && (e == e || t == t);
const w = {
  attribute: true,
  type: String,
  converter: v,
  reflect: false,
  hasChanged: _b
};
class x extends HTMLElement {
  constructor() {
    super();
    this.initialize();
  }
  static get observedAttributes() {
    this.finalize();
    const t = [];
    this._classProperties.forEach((e, n) => {
      const s = this._attributeNameForProperty(n, e);
      if (s !== undefined) {
        this._attributeToPropertyMap.set(s, n);
        t.push(s);
      }
    });
    return t;
  }
  static _ensureClassProperties() {
    if (!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))) {
      this._classProperties = new Map();
      const t = Object.getPrototypeOf(this)._classProperties;
      if (t !== undefined) {
        t.forEach((t, e) => this._classProperties.set(e, t));
      }
    }
  }
  static createProperty(t, e = w) {
    this._ensureClassProperties();
    this._classProperties.set(t, e);
    if (e.noAccessor || this.prototype.hasOwnProperty(t)) {
      return;
    }
    const n = typeof t == "symbol" ? Symbol() : "__" + t;
    const s = this.getPropertyDescriptor(t, n, e);
    if (s !== undefined) {
      Object.defineProperty(this.prototype, t, s);
    }
  }
  static getPropertyDescriptor(t, e, n) {
    return {
      get() {
        return this[e];
      },
      set(s) {
        const r = this[t];
        this[e] = s;
        this.requestUpdateInternal(t, r, n);
      },
      configurable: true,
      enumerable: true
    };
  }
  static getPropertyOptions(t) {
    return this._classProperties && this._classProperties.get(t) || w;
  }
  static finalize() {
    const t = Object.getPrototypeOf(this);
    if (!t.hasOwnProperty("finalized")) {
      t.finalize();
    }
    this.finalized = true;
    this._ensureClassProperties();
    this._attributeToPropertyMap = new Map();
    if (this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
      const t = this.properties;
      const e = [...Object.getOwnPropertyNames(t), ...(typeof Object.getOwnPropertySymbols == "function" ? Object.getOwnPropertySymbols(t) : [])];
      for (const n of e) {
        this.createProperty(n, t[n]);
      }
    }
  }
  static _attributeNameForProperty(t, e) {
    const n = e.attribute;
    if (n === false) {
      return undefined;
    } else if (typeof n == "string") {
      return n;
    } else if (typeof t == "string") {
      return t.toLowerCase();
    } else {
      return undefined;
    }
  }
  static _valueHasChanged(t, e, n = _b) {
    return n(t, e);
  }
  static _propertyValueFromAttribute(t, e) {
    const n = e.type;
    const s = e.converter || v;
    const r = typeof s == "function" ? s : s.fromAttribute;
    if (r) {
      return r(t, n);
    } else {
      return t;
    }
  }
  static _propertyValueToAttribute(t, e) {
    if (e.reflect === undefined) {
      return;
    }
    const n = e.type;
    const s = e.converter;
    return (s && s.toAttribute || v.toAttribute)(t, n);
  }
  initialize() {
    this._updateState = 0;
    this._updatePromise = new S(t => this._enableUpdatingResolver = t);
    this._changedProperties = new Map();
    this._saveInstanceProperties();
    this.requestUpdateInternal();
  }
  _saveInstanceProperties() {
    this.constructor._classProperties.forEach((t, e) => {
      if (this.hasOwnProperty(e)) {
        const t = this[e];
        delete this[e];
        this._instanceProperties ||= new Map();
        this._instanceProperties.set(e, t);
      }
    });
  }
  _applyInstanceProperties() {
    this._instanceProperties.forEach((t, e) => this[e] = t);
    this._instanceProperties = undefined;
  }
  connectedCallback() {
    this.enableUpdating();
  }
  enableUpdating() {
    if (this._enableUpdatingResolver !== undefined) {
      this._enableUpdatingResolver();
      this._enableUpdatingResolver = undefined;
    }
  }
  disconnectedCallback() {}
  attributeChangedCallback(t, e, n) {
    if (e !== n) {
      this._attributeToProperty(t, n);
    }
  }
  _propertyToAttribute(t, e, n = w) {
    const s = this.constructor;
    const r = s._attributeNameForProperty(t, n);
    if (r !== undefined) {
      const t = s._propertyValueToAttribute(e, n);
      if (t === undefined) {
        return;
      }
      this._updateState = this._updateState | 8;
      if (t == null) {
        this.removeAttribute(r);
      } else {
        this.setAttribute(r, t);
      }
      this._updateState = this._updateState & -9;
    }
  }
  _attributeToProperty(t, e) {
    if (this._updateState & 8) {
      return;
    }
    const n = this.constructor;
    const s = n._attributeToPropertyMap.get(t);
    if (s !== undefined) {
      const t = n.getPropertyOptions(s);
      this._updateState = this._updateState | 16;
      this[s] = n._propertyValueFromAttribute(e, t);
      this._updateState = this._updateState & -17;
    }
  }
  requestUpdateInternal(t, e, n) {
    let s = true;
    if (t !== undefined) {
      const r = this.constructor;
      n = n || r.getPropertyOptions(t);
      if (r._valueHasChanged(this[t], e, n.hasChanged)) {
        if (!this._changedProperties.has(t)) {
          this._changedProperties.set(t, e);
        }
        if (n.reflect === true && !(this._updateState & 16)) {
          if (this._reflectingProperties === undefined) {
            this._reflectingProperties = new Map();
          }
          this._reflectingProperties.set(t, n);
        }
      } else {
        s = false;
      }
    }
    if (!this._hasRequestedUpdate && s) {
      this._updatePromise = this._enqueueUpdate();
    }
  }
  requestUpdate(t, e) {
    this.requestUpdateInternal(t, e);
    return this.updateComplete;
  }
  async _enqueueUpdate() {
    this._updateState = this._updateState | 4;
    try {
      await this._updatePromise;
    } catch (t) {}
    const t = this.performUpdate();
    if (t != null) {
      await t;
    }
    return !this._hasRequestedUpdate;
  }
  get _hasRequestedUpdate() {
    return this._updateState & 4;
  }
  get hasUpdated() {
    return this._updateState & 1;
  }
  performUpdate() {
    if (!this._hasRequestedUpdate) {
      return;
    }
    if (this._instanceProperties) {
      this._applyInstanceProperties();
    }
    let t = false;
    const e = this._changedProperties;
    try {
      t = this.shouldUpdate(e);
      if (t) {
        this.update(e);
      } else {
        this._markUpdated();
      }
    } catch (e) {
      t = false;
      this._markUpdated();
      throw e;
    }
    if (t) {
      if (!(this._updateState & 1)) {
        this._updateState = this._updateState | 1;
        this.firstUpdated(e);
      }
      this.updated(e);
    }
  }
  _markUpdated() {
    this._changedProperties = new Map();
    this._updateState = this._updateState & -5;
  }
  get updateComplete() {
    return this._getUpdateComplete();
  }
  _getUpdateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._updatePromise;
  }
  shouldUpdate(t) {
    return true;
  }
  update(t) {
    if (this._reflectingProperties !== undefined && this._reflectingProperties.size > 0) {
      this._reflectingProperties.forEach((t, e) => this._propertyToAttribute(e, this[e], t));
      this._reflectingProperties = undefined;
    }
    this._markUpdated();
  }
  updated(t) {}
  firstUpdated(t) {}
}
x.finalized = true;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
export const c = t => e => typeof e == "function" ? ((t, e) => {
  window.customElements.define(t, e);
  return e;
})(t, e) : ((t, e) => {
  const {
    kind: n,
    elements: s
  } = e;
  return {
    kind: n,
    elements: s,
    finisher(e) {
      window.customElements.define(t, e);
    }
  };
})(t, e);
const C = (t, e) => e.kind === "method" && e.descriptor && !("value" in e.descriptor) ? Object.assign(Object.assign({}, e), {
  finisher(n) {
    n.createProperty(e.key, t);
  }
}) : {
  kind: "field",
  key: Symbol(),
  placement: "own",
  descriptor: {},
  initializer() {
    if (typeof e.initializer == "function") {
      this[e.key] = e.initializer.call(this);
    }
  },
  finisher(n) {
    n.createProperty(e.key, t);
  }
};
export function g(t) {
  return (e, n) => n !== undefined ? ((t, e, n) => {
    e.constructor.createProperty(n, t);
  })(t, e, n) : C(t, e);
}
export function f(t) {
  return g({
    attribute: false,
    hasChanged: t == null ? undefined : t.hasChanged
  });
}
export function h(t, e) {
  return (n, s) => {
    const r = {
      get() {
        return this.renderRoot.querySelector(t);
      },
      enumerable: true,
      configurable: true
    };
    if (e) {
      const e = s !== undefined ? s : n.key;
      const i = typeof e == "symbol" ? Symbol() : "__" + e;
      r.get = function () {
        if (this[i] === undefined) {
          this[i] = this.renderRoot.querySelector(t);
        }
        return this[i];
      };
    }
    if (s !== undefined) {
      return k(r, n, s);
    } else {
      return V(r, n);
    }
  };
}
export function j(t) {
  return (e, n) => {
    const s = {
      async get() {
        await this.updateComplete;
        return this.renderRoot.querySelector(t);
      },
      enumerable: true,
      configurable: true
    };
    if (n !== undefined) {
      return k(s, e, n);
    } else {
      return V(s, e);
    }
  };
}
export function i(t) {
  return (e, n) => {
    const s = {
      get() {
        return this.renderRoot.querySelectorAll(t);
      },
      enumerable: true,
      configurable: true
    };
    if (n !== undefined) {
      return k(s, e, n);
    } else {
      return V(s, e);
    }
  };
}
const k = (t, e, n) => {
  Object.defineProperty(e, n, t);
};
const V = (t, e) => ({
  kind: "method",
  placement: "prototype",
  key: e.key,
  descriptor: t
});
export function d(t) {
  return (e, n) => n !== undefined ? ((t, e, n) => {
    Object.assign(e[n], t);
  })(t, e, n) : ((t, e) => Object.assign(Object.assign({}, e), {
    finisher(n) {
      Object.assign(n.prototype[e.key], t);
    }
  }))(t, e);
}
const U = Element.prototype;
if (!U.msMatchesSelector) {
  U.webkitMatchesSelector;
}
require(/*webcrack:missing*/"./19.js");
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const R = window.ShadowRoot && (window.ShadyCSS === undefined || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
const M = Symbol();
class q {
  constructor(t, e) {
    if (e !== M) {
      throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    }
    this.cssText = t;
  }
  get styleSheet() {
    if (this._styleSheet === undefined) {
      if (R) {
        this._styleSheet = new CSSStyleSheet();
        this._styleSheet.replaceSync(this.cssText);
      } else {
        this._styleSheet = null;
      }
    }
    return this._styleSheet;
  }
  toString() {
    return this.cssText;
  }
}
export const b = (t, ...e) => {
  const n = e.reduce((e, n, s) => e + (t => {
    if (t instanceof q) {
      return t.cssText;
    }
    if (typeof t == "number") {
      return t;
    }
    throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`);
  })(n) + t[s + 1], t[0]);
  return new q(n, M);
};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions ||= []).push("2.5.1");
const L = {};
export class a extends x {
  static getStyles() {
    return this.styles;
  }
  static _getUniqueStyles() {
    if (this.hasOwnProperty(JSCompiler_renameProperty("_styles", this))) {
      return;
    }
    const t = this.getStyles();
    if (Array.isArray(t)) {
      const e = (t, n) => t.reduceRight((t, n) => Array.isArray(n) ? e(n, t) : (t.add(n), t), n);
      const n = e(t, new Set());
      const s = [];
      n.forEach(t => s.unshift(t));
      this._styles = s;
    } else {
      this._styles = t === undefined ? [] : [t];
    }
    this._styles = this._styles.map(t => {
      if (t instanceof CSSStyleSheet && !R) {
        const e = Array.prototype.slice.call(t.cssRules).reduce((t, e) => t + e.cssText, "");
        return new q(String(e), M);
      }
      return t;
    });
  }
  initialize() {
    super.initialize();
    this.constructor._getUniqueStyles();
    this.renderRoot = this.createRenderRoot();
    if (window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot) {
      this.adoptStyles();
    }
  }
  createRenderRoot() {
    return this.attachShadow(this.constructor.shadowRootOptions);
  }
  adoptStyles() {
    const t = this.constructor._styles;
    if (t.length !== 0) {
      if (window.ShadyCSS === undefined || window.ShadyCSS.nativeShadow) {
        if (R) {
          this.renderRoot.adoptedStyleSheets = t.map(t => t instanceof CSSStyleSheet ? t : t.styleSheet);
        } else {
          this._needsShimAdoptedStyleSheets = true;
        }
      } else {
        window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t => t.cssText), this.localName);
      }
    }
  }
  connectedCallback() {
    super.connectedCallback();
    if (this.hasUpdated && window.ShadyCSS !== undefined) {
      window.ShadyCSS.styleElement(this);
    }
  }
  update(t) {
    const e = this.render();
    super.update(t);
    if (e !== L) {
      this.constructor.render(e, this.renderRoot, {
        scopeName: this.localName,
        eventContext: this
      });
    }
    if (this._needsShimAdoptedStyleSheets) {
      this._needsShimAdoptedStyleSheets = false;
      this.constructor._styles.forEach(t => {
        const e = document.createElement("style");
        e.textContent = t.cssText;
        this.renderRoot.appendChild(e);
      });
    }
  }
  render() {
    return L;
  }
}
a.finalized = true;
a.render = (t, e, n) => {
  if (!n || typeof n != "object" || !n.scopeName) {
    throw new Error("The `scopeName` option is required.");
  }
  const r = n.scopeName;
  const i = _c.a.has(e);
  const o = p && e.nodeType === 11 && !!e.host;
  const a = o && !_.has(r);
  const l = a ? document.createDocumentFragment() : e;
  Object(_c.b)(t, l, Object.assign({
    templateFactory: _f(r)
  }, n));
  if (a) {
    const t = _c.a.get(l);
    _c.a.delete(l);
    const n = t.value instanceof u.a ? t.value.template : undefined;
    y(r, l, n);
    Object(s.b)(e, e.firstChild);
    e.appendChild(l);
    _c.a.set(e, t);
  }
  if (!i && o) {
    window.ShadyCSS.styleElement(e.host);
  }
};
a.shadowRootOptions = {
  mode: "open"
};