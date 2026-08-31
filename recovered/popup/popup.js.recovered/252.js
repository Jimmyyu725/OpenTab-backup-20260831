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
const o = window.trustedTypes && trustedTypes.createPolicy("lit-html", {
  createHTML: t => t
});
const s = ` ${i.f} `;
export class b {
  constructor(t, e, n, r) {
    this.strings = t;
    this.values = e;
    this.type = n;
    this.processor = r;
  }
  getHTML() {
    const t = this.strings.length - 1;
    let e = "";
    let n = false;
    for (let r = 0; r < t; r++) {
      const t = this.strings[r];
      const o = t.lastIndexOf("<!--");
      n = (o > -1 || n) && t.indexOf("-->", o + 1) === -1;
      const a = i.e.exec(t);
      e += a === null ? t + (n ? s : i.g) : t.substr(0, a.index) + a[1] + a[2] + i.b + a[3] + i.f;
    }
    e += this.strings[t];
    return e;
  }
  getTemplateElement() {
    const t = document.createElement("template");
    let e = this.getHTML();
    if (o !== undefined) {
      e = o.createHTML(e);
    }
    t.innerHTML = e;
    return t;
  }
}
export class a extends b {
  getHTML() {
    return `<svg>${super.getHTML()}</svg>`;
  }
  getTemplateElement() {
    const t = super.getTemplateElement();
    const e = t.content;
    const n = e.firstChild;
    e.removeChild(n);
    Object(r.c)(e, n.firstChild);
    return t;
  }
}