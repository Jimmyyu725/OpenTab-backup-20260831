var r = require("./160.js");
var i = require("./75.js");
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
export class a {
  constructor(t, e, n) {
    this.__parts = [];
    this.template = t;
    this.processor = e;
    this.options = n;
  }
  update(t) {
    let e = 0;
    for (const n of this.__parts) {
      if (n !== undefined) {
        n.setValue(t[e]);
      }
      e++;
    }
    for (const t of this.__parts) {
      if (t !== undefined) {
        t.commit();
      }
    }
  }
  _clone() {
    const t = r.a ? this.template.element.content.cloneNode(true) : document.importNode(this.template.element.content, true);
    const e = [];
    const n = this.template.parts;
    const o = document.createTreeWalker(t, 133, null, false);
    let s;
    let a = 0;
    let c = 0;
    let u = o.nextNode();
    while (a < n.length) {
      s = n[a];
      if (Object(i.d)(s)) {
        while (c < s.index) {
          c++;
          if (u.nodeName === "TEMPLATE") {
            e.push(u);
            o.currentNode = u.content;
          }
          if ((u = o.nextNode()) === null) {
            o.currentNode = e.pop();
            u = o.nextNode();
          }
        }
        if (s.type === "node") {
          const t = this.processor.handleTextExpression(this.options);
          t.insertAfterNode(u.previousSibling);
          this.__parts.push(t);
        } else {
          this.__parts.push(...this.processor.handleAttributeExpressions(u, s.name, s.strings, this.options));
        }
        a++;
      } else {
        this.__parts.push(undefined);
        a++;
      }
    }
    if (r.a) {
      document.adoptNode(t);
      customElements.upgrade(t);
    }
    return t;
  }
}