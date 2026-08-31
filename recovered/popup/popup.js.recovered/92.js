var r = require("./224.js");
var i = require("./160.js");
var o = require("./135.js");
var s = require("./307.js");
var _a = require("./252.js");
var _c = require("./75.js");
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
export const h = t => t === null || typeof t != "object" && typeof t != "function";
const l = t => Array.isArray(t) || !!t && !!t[Symbol.iterator];
export class a {
  constructor(t, e, n) {
    this.dirty = true;
    this.element = t;
    this.name = e;
    this.strings = n;
    this.parts = [];
    for (let t = 0; t < n.length - 1; t++) {
      this.parts[t] = this._createPart();
    }
  }
  _createPart() {
    return new b(this);
  }
  _getValue() {
    const t = this.strings;
    const e = t.length - 1;
    const n = this.parts;
    if (e === 1 && t[0] === "" && t[1] === "") {
      const t = n[0].value;
      if (typeof t == "symbol") {
        return String(t);
      }
      if (typeof t == "string" || !l(t)) {
        return t;
      }
    }
    let r = "";
    for (let i = 0; i < e; i++) {
      r += t[i];
      const e = n[i];
      if (e !== undefined) {
        const t = e.value;
        if (h(t) || !l(t)) {
          r += typeof t == "string" ? t : String(t);
        } else {
          for (const e of t) {
            r += typeof e == "string" ? e : String(e);
          }
        }
      }
    }
    r += t[e];
    return r;
  }
  commit() {
    if (this.dirty) {
      this.dirty = false;
      this.element.setAttribute(this.name, this._getValue());
    }
  }
}
export class b {
  constructor(t) {
    this.value = undefined;
    this.committer = t;
  }
  setValue(t) {
    if (t !== o.a && (!h(t) || t !== this.value)) {
      this.value = t;
      if (!Object(r.b)(t)) {
        this.committer.dirty = true;
      }
    }
  }
  commit() {
    while (Object(r.b)(this.value)) {
      const t = this.value;
      this.value = o.a;
      t(this);
    }
    if (this.value !== o.a) {
      this.committer.commit();
    }
  }
}
export class e {
  constructor(t) {
    this.value = undefined;
    this.__pendingValue = undefined;
    this.options = t;
  }
  appendInto(t) {
    this.startNode = t.appendChild(Object(_c.c)());
    this.endNode = t.appendChild(Object(_c.c)());
  }
  insertAfterNode(t) {
    this.startNode = t;
    this.endNode = t.nextSibling;
  }
  appendIntoPart(t) {
    t.__insert(this.startNode = Object(_c.c)());
    t.__insert(this.endNode = Object(_c.c)());
  }
  insertAfterPart(t) {
    t.__insert(this.startNode = Object(_c.c)());
    this.endNode = t.endNode;
    t.endNode = this.startNode;
  }
  setValue(t) {
    this.__pendingValue = t;
  }
  commit() {
    if (this.startNode.parentNode === null) {
      return;
    }
    while (Object(r.b)(this.__pendingValue)) {
      const t = this.__pendingValue;
      this.__pendingValue = o.a;
      t(this);
    }
    const t = this.__pendingValue;
    if (t !== o.a) {
      if (h(t)) {
        if (t !== this.value) {
          this.__commitText(t);
        }
      } else if (t instanceof _a.b) {
        this.__commitTemplateResult(t);
      } else if (t instanceof Node) {
        this.__commitNode(t);
      } else if (l(t)) {
        this.__commitIterable(t);
      } else if (t === o.b) {
        this.value = o.b;
        this.clear();
      } else {
        this.__commitText(t);
      }
    }
  }
  __insert(t) {
    this.endNode.parentNode.insertBefore(t, this.endNode);
  }
  __commitNode(t) {
    if (this.value !== t) {
      this.clear();
      this.__insert(t);
      this.value = t;
    }
  }
  __commitText(t) {
    const e = this.startNode.nextSibling;
    const n = typeof (t = t == null ? "" : t) == "string" ? t : String(t);
    if (e === this.endNode.previousSibling && e.nodeType === 3) {
      e.data = n;
    } else {
      this.__commitNode(document.createTextNode(n));
    }
    this.value = t;
  }
  __commitTemplateResult(t) {
    const e = this.options.templateFactory(t);
    if (this.value instanceof s.a && this.value.template === e) {
      this.value.update(t.values);
    } else {
      const n = new s.a(e, t.processor, this.options);
      const r = n._clone();
      n.update(t.values);
      this.__commitNode(r);
      this.value = n;
    }
  }
  __commitIterable(t) {
    if (!Array.isArray(this.value)) {
      this.value = [];
      this.clear();
    }
    const _e = this.value;
    let n;
    let r = 0;
    for (const i of t) {
      n = _e[r];
      if (n === undefined) {
        n = new e(this.options);
        _e.push(n);
        if (r === 0) {
          n.appendIntoPart(this);
        } else {
          n.insertAfterPart(_e[r - 1]);
        }
      }
      n.setValue(i);
      n.commit();
      r++;
    }
    if (r < _e.length) {
      _e.length = r;
      this.clear(n && n.endNode);
    }
  }
  clear(t = this.startNode) {
    Object(i.b)(this.startNode.parentNode, t.nextSibling, this.endNode);
  }
}
export class c {
  constructor(t, e, n) {
    this.value = undefined;
    this.__pendingValue = undefined;
    if (n.length !== 2 || n[0] !== "" || n[1] !== "") {
      throw new Error("Boolean attributes can only contain a single expression");
    }
    this.element = t;
    this.name = e;
    this.strings = n;
  }
  setValue(t) {
    this.__pendingValue = t;
  }
  commit() {
    while (Object(r.b)(this.__pendingValue)) {
      const t = this.__pendingValue;
      this.__pendingValue = o.a;
      t(this);
    }
    if (this.__pendingValue === o.a) {
      return;
    }
    const t = !!this.__pendingValue;
    if (this.value !== t) {
      if (t) {
        this.element.setAttribute(this.name, "");
      } else {
        this.element.removeAttribute(this.name);
      }
      this.value = t;
    }
    this.__pendingValue = o.a;
  }
}
export class f extends a {
  constructor(t, e, n) {
    super(t, e, n);
    this.single = n.length === 2 && n[0] === "" && n[1] === "";
  }
  _createPart() {
    return new g(this);
  }
  _getValue() {
    if (this.single) {
      return this.parts[0].value;
    } else {
      return super._getValue();
    }
  }
  commit() {
    if (this.dirty) {
      this.dirty = false;
      this.element[this.name] = this._getValue();
    }
  }
}
export class g extends b {}
let m = false;
(() => {
  try {
    const t = {
      get capture() {
        m = true;
        return false;
      }
    };
    window.addEventListener("test", t, t);
    window.removeEventListener("test", t, t);
  } catch (t) {}
})();
export class d {
  constructor(t, e, n) {
    this.value = undefined;
    this.__pendingValue = undefined;
    this.element = t;
    this.eventName = e;
    this.eventContext = n;
    this.__boundHandleEvent = t => this.handleEvent(t);
  }
  setValue(t) {
    this.__pendingValue = t;
  }
  commit() {
    while (Object(r.b)(this.__pendingValue)) {
      const t = this.__pendingValue;
      this.__pendingValue = o.a;
      t(this);
    }
    if (this.__pendingValue === o.a) {
      return;
    }
    const t = this.__pendingValue;
    const e = this.value;
    const n = t == null || e != null && (t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive);
    const i = t != null && (e == null || n);
    if (n) {
      this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options);
    }
    if (i) {
      this.__options = v(t);
      this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options);
    }
    this.value = t;
    this.__pendingValue = o.a;
  }
  handleEvent(t) {
    if (typeof this.value == "function") {
      this.value.call(this.eventContext || this.element, t);
    } else {
      this.value.handleEvent(t);
    }
  }
}
const v = t => t && (m ? {
  capture: t.capture,
  passive: t.passive,
  once: t.once
} : t.capture);