export let e = _h.f;
var r = require("./160.js");
var _i = require("./75.js");
function o(t, e) {
  const {
    element: {
      content: n
    },
    parts: r
  } = t;
  const i = document.createTreeWalker(n, 133, null, false);
  let o = _a(r);
  let s = r[o];
  let c = -1;
  let u = 0;
  const l = [];
  let h = null;
  while (i.nextNode()) {
    c++;
    const t = i.currentNode;
    if (t.previousSibling === h) {
      h = null;
    }
    if (e.has(t)) {
      l.push(t);
      if (h === null) {
        h = t;
      }
    }
    if (h !== null) {
      u++;
    }
    while (s !== undefined && s.index === c) {
      s.index = h !== null ? -1 : s.index - u;
      o = _a(r, o);
      s = r[o];
    }
  }
  l.forEach(t => t.parentNode.removeChild(t));
}
const s = t => {
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
    if (Object(_i.d)(e)) {
      return n;
    }
  }
  return -1;
};
var _c = require("./223.js");
var u = require("./222.js");
var l = require("./307.js");
var _h = require("./136.js");
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
const p = (t, e) => `${t}--${e}`;
let _d = true;
if (window.ShadyCSS === undefined) {
  _d = false;
} else if (window.ShadyCSS.prepareTemplateDom === undefined) {
  console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1.");
  _d = false;
}
const _f = t => e => {
  const n = p(e.type, t);
  let r = u.a.get(n);
  if (r === undefined) {
    r = {
      stringsArray: new WeakMap(),
      keyString: new Map()
    };
    u.a.set(n, r);
  }
  let o = r.stringsArray.get(e.strings);
  if (o !== undefined) {
    return o;
  }
  const s = e.strings.join(_i.f);
  o = r.keyString.get(s);
  if (o === undefined) {
    const n = e.getTemplateElement();
    if (_d) {
      window.ShadyCSS.prepareTemplateDom(n, t);
    }
    o = new _i.a(e, n);
    r.keyString.set(s, o);
  }
  r.stringsArray.set(e.strings, o);
  return o;
};
const _g = ["html", "svg"];
const y = new Set();
const m = (t, e, n) => {
  y.add(t);
  const r = n ? n.element : document.createElement("template");
  const i = e.querySelectorAll("style");
  const {
    length: c
  } = i;
  if (c === 0) {
    window.ShadyCSS.prepareTemplateStyles(r, t);
    return;
  }
  const l = document.createElement("style");
  for (let t = 0; t < c; t++) {
    const e = i[t];
    e.parentNode.removeChild(e);
    l.textContent += e.textContent;
  }
  (t => {
    _g.forEach(e => {
      const n = u.a.get(p(e, t));
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
          o(t, n);
        });
      }
    });
  })(t);
  const h = r.content;
  if (n) {
    (function (t, e, n = null) {
      const {
        element: {
          content: r
        },
        parts: i
      } = t;
      if (n == null) {
        r.appendChild(e);
        return;
      }
      const o = document.createTreeWalker(r, 133, null, false);
      let c = _a(i);
      let u = 0;
      let l = -1;
      while (o.nextNode()) {
        l++;
        for (o.currentNode === n && (u = s(e), n.parentNode.insertBefore(e, n)); c !== -1 && i[c].index === l;) {
          if (u > 0) {
            while (c !== -1) {
              i[c].index += u;
              c = _a(i, c);
            }
            return;
          }
          c = _a(i, c);
        }
      }
    })(n, l, h.firstChild);
  } else {
    h.insertBefore(l, h.firstChild);
  }
  window.ShadyCSS.prepareTemplateStyles(r, t);
  const d = h.querySelector("style");
  if (window.ShadyCSS.nativeShadow && d !== null) {
    e.insertBefore(d.cloneNode(true), e.firstChild);
  } else if (n) {
    h.insertBefore(l, h.firstChild);
    const t = new Set();
    t.add(l);
    o(n, t);
  }
};
require("./7.js");
var _b = require("./5.js");
var v = _b;
window.JSCompiler_renameProperty = (t, e) => t;
const w = {
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
const x = (t, e) => e !== t && (e == e || t == t);
const _ = {
  attribute: true,
  type: String,
  converter: w,
  reflect: false,
  hasChanged: x
};
class O extends HTMLElement {
  constructor() {
    super();
    this.initialize();
  }
  static get observedAttributes() {
    this.finalize();
    const t = [];
    this._classProperties.forEach((e, n) => {
      const r = this._attributeNameForProperty(n, e);
      if (r !== undefined) {
        this._attributeToPropertyMap.set(r, n);
        t.push(r);
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
  static createProperty(t, e = _) {
    this._ensureClassProperties();
    this._classProperties.set(t, e);
    if (e.noAccessor || this.prototype.hasOwnProperty(t)) {
      return;
    }
    const n = typeof t == "symbol" ? Symbol() : "__" + t;
    const r = this.getPropertyDescriptor(t, n, e);
    if (r !== undefined) {
      Object.defineProperty(this.prototype, t, r);
    }
  }
  static getPropertyDescriptor(t, e, n) {
    return {
      get() {
        return this[e];
      },
      set(r) {
        const i = this[t];
        this[e] = r;
        this.requestUpdateInternal(t, i, n);
      },
      configurable: true,
      enumerable: true
    };
  }
  static getPropertyOptions(t) {
    return this._classProperties && this._classProperties.get(t) || _;
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
  static _valueHasChanged(t, e, n = x) {
    return n(t, e);
  }
  static _propertyValueFromAttribute(t, e) {
    const n = e.type;
    const r = e.converter || w;
    const i = typeof r == "function" ? r : r.fromAttribute;
    if (i) {
      return i(t, n);
    } else {
      return t;
    }
  }
  static _propertyValueToAttribute(t, e) {
    if (e.reflect === undefined) {
      return;
    }
    const n = e.type;
    const r = e.converter;
    return (r && r.toAttribute || w.toAttribute)(t, n);
  }
  initialize() {
    this._updateState = 0;
    this._updatePromise = new v(t => this._enableUpdatingResolver = t);
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
  _propertyToAttribute(t, e, n = _) {
    const r = this.constructor;
    const i = r._attributeNameForProperty(t, n);
    if (i !== undefined) {
      const t = r._propertyValueToAttribute(e, n);
      if (t === undefined) {
        return;
      }
      this._updateState = this._updateState | 8;
      if (t == null) {
        this.removeAttribute(i);
      } else {
        this.setAttribute(i, t);
      }
      this._updateState = this._updateState & -9;
    }
  }
  _attributeToProperty(t, e) {
    if (this._updateState & 8) {
      return;
    }
    const n = this.constructor;
    const r = n._attributeToPropertyMap.get(t);
    if (r !== undefined) {
      const t = n.getPropertyOptions(r);
      this._updateState = this._updateState | 16;
      this[r] = n._propertyValueFromAttribute(e, t);
      this._updateState = this._updateState & -17;
    }
  }
  requestUpdateInternal(t, e, n) {
    let r = true;
    if (t !== undefined) {
      const i = this.constructor;
      n = n || i.getPropertyOptions(t);
      if (i._valueHasChanged(this[t], e, n.hasChanged)) {
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
        r = false;
      }
    }
    if (!this._hasRequestedUpdate && r) {
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
O.finalized = true;
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
    elements: r
  } = e;
  return {
    kind: n,
    elements: r,
    finisher(e) {
      window.customElements.define(t, e);
    }
  };
})(t, e);
const S = (t, e) => e.kind === "method" && e.descriptor && !("value" in e.descriptor) ? Object.assign(Object.assign({}, e), {
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
  })(t, e, n) : S(t, e);
}
export function f(t) {
  return g({
    attribute: false,
    hasChanged: t == null ? undefined : t.hasChanged
  });
}
export function h(t, e) {
  return (n, r) => {
    const i = {
      get() {
        return this.renderRoot.querySelector(t);
      },
      enumerable: true,
      configurable: true
    };
    if (e) {
      const e = r !== undefined ? r : n.key;
      const o = typeof e == "symbol" ? Symbol() : "__" + e;
      i.get = function () {
        if (this[o] === undefined) {
          this[o] = this.renderRoot.querySelector(t);
        }
        return this[o];
      };
    }
    if (r !== undefined) {
      return I(i, n, r);
    } else {
      return P(i, n);
    }
  };
}
export function j(t) {
  return (e, n) => {
    const r = {
      async get() {
        await this.updateComplete;
        return this.renderRoot.querySelector(t);
      },
      enumerable: true,
      configurable: true
    };
    if (n !== undefined) {
      return I(r, e, n);
    } else {
      return P(r, e);
    }
  };
}
export function i(t) {
  return (e, n) => {
    const r = {
      get() {
        return this.renderRoot.querySelectorAll(t);
      },
      enumerable: true,
      configurable: true
    };
    if (n !== undefined) {
      return I(r, e, n);
    } else {
      return P(r, e);
    }
  };
}
const I = (t, e, n) => {
  Object.defineProperty(e, n, t);
};
const P = (t, e) => ({
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
const R = Element.prototype;
if (!R.msMatchesSelector) {
  R.webkitMatchesSelector;
}
require("./19.js");
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
const N = window.ShadowRoot && (window.ShadyCSS === undefined || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
const L = Symbol();
class M {
  constructor(t, e) {
    if (e !== L) {
      throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    }
    this.cssText = t;
  }
  get styleSheet() {
    if (this._styleSheet === undefined) {
      if (N) {
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
  const n = e.reduce((e, n, r) => e + (t => {
    if (t instanceof M) {
      return t.cssText;
    }
    if (typeof t == "number") {
      return t;
    }
    throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`);
  })(n) + t[r + 1], t[0]);
  return new M(n, L);
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
const U = {};
export class a extends O {
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
      const r = [];
      n.forEach(t => r.unshift(t));
      this._styles = r;
    } else {
      this._styles = t === undefined ? [] : [t];
    }
    this._styles = this._styles.map(t => {
      if (t instanceof CSSStyleSheet && !N) {
        const e = Array.prototype.slice.call(t.cssRules).reduce((t, e) => t + e.cssText, "");
        return new M(String(e), L);
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
        if (N) {
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
    if (e !== U) {
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
    return U;
  }
}
a.finalized = true;
a.render = (t, e, n) => {
  if (!n || typeof n != "object" || !n.scopeName) {
    throw new Error("The `scopeName` option is required.");
  }
  const i = n.scopeName;
  const o = _c.a.has(e);
  const s = _d && e.nodeType === 11 && !!e.host;
  const a = s && !y.has(i);
  const u = a ? document.createDocumentFragment() : e;
  Object(_c.b)(t, u, Object.assign({
    templateFactory: _f(i)
  }, n));
  if (a) {
    const t = _c.a.get(u);
    _c.a.delete(u);
    const n = t.value instanceof l.a ? t.value.template : undefined;
    m(i, u, n);
    Object(r.b)(e, e.firstChild);
    e.appendChild(u);
    _c.a.set(e, t);
  }
  if (!o && s) {
    window.ShadyCSS.styleElement(e.host);
  }
};
a.shadowRootOptions = {
  mode: "open"
};