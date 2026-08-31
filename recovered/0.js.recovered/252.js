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
const i = window.trustedTypes && trustedTypes.createPolicy("lit-html", {
  createHTML: t => t
});
const o = ` ${r.f} `;
export class b {
  constructor(t, e, n, s) {
    this.strings = t;
    this.values = e;
    this.type = n;
    this.processor = s;
  }
  getHTML() {
    const t = this.strings.length - 1;
    let e = "";
    let n = false;
    for (let s = 0; s < t; s++) {
      const t = this.strings[s];
      const i = t.lastIndexOf("<!--");
      n = (i > -1 || n) && t.indexOf("-->", i + 1) === -1;
      const a = r.e.exec(t);
      e += a === null ? t + (n ? o : r.g) : t.substr(0, a.index) + a[1] + a[2] + r.b + a[3] + r.f;
    }
    e += this.strings[t];
    return e;
  }
  getTemplateElement() {
    const t = document.createElement("template");
    let e = this.getHTML();
    if (i !== undefined) {
      e = i.createHTML(e);
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
    Object(s.c)(e, n.firstChild);
    return t;
  }
}