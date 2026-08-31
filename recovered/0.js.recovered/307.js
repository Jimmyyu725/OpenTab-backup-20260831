var s = require("./160.js");
var r = require("./75.js");
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
    const t = s.a ? this.template.element.content.cloneNode(true) : document.importNode(this.template.element.content, true);
    const e = [];
    const n = this.template.parts;
    const i = document.createTreeWalker(t, 133, null, false);
    let o;
    let a = 0;
    let c = 0;
    let l = i.nextNode();
    while (a < n.length) {
      o = n[a];
      if (Object(r.d)(o)) {
        while (c < o.index) {
          c++;
          if (l.nodeName === "TEMPLATE") {
            e.push(l);
            i.currentNode = l.content;
          }
          if ((l = i.nextNode()) === null) {
            i.currentNode = e.pop();
            l = i.nextNode();
          }
        }
        if (o.type === "node") {
          const t = this.processor.handleTextExpression(this.options);
          t.insertAfterNode(l.previousSibling);
          this.__parts.push(t);
        } else {
          this.__parts.push(...this.processor.handleAttributeExpressions(l, o.name, o.strings, this.options));
        }
        a++;
      } else {
        this.__parts.push(undefined);
        a++;
      }
    }
    if (s.a) {
      document.adoptNode(t);
      customElements.upgrade(t);
    }
    return t;
  }
}