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
export const f = `{{lit-${String(Math.random()).slice(2)}}}`;
export const g = `\x3c!--${f}--\x3e`;
const o = new RegExp(`${f}|${g}`);
export const b = "$lit$";
export class a {
  constructor(t, e) {
    this.parts = [];
    this.element = e;
    const n = [];
    const i = [];
    const a = document.createTreeWalker(e.content, 133, null, false);
    let u = 0;
    let p = -1;
    let d = 0;
    const {
      strings: _f,
      values: {
        length: g
      }
    } = t;
    while (d < g) {
      const t = a.nextNode();
      if (t !== null) {
        p++;
        if (t.nodeType === 1) {
          if (t.hasAttributes()) {
            const e = t.attributes;
            const {
              length: n
            } = e;
            let r = 0;
            for (let t = 0; t < n; t++) {
              if (_c(e[t].name, b)) {
                r++;
              }
            }
            while (r-- > 0) {
              const _e = _f[d];
              const n = e.exec(_e)[2];
              const r = n.toLowerCase() + b;
              const i = t.getAttribute(r);
              t.removeAttribute(r);
              const a = i.split(o);
              this.parts.push({
                type: "attribute",
                index: p,
                name: n,
                strings: a
              });
              d += a.length - 1;
            }
          }
          if (t.tagName === "TEMPLATE") {
            i.push(t);
            a.currentNode = t.content;
          }
        } else if (t.nodeType === 3) {
          const e = t.data;
          if (e.indexOf(f) >= 0) {
            const r = t.parentNode;
            const i = e.split(o);
            const a = i.length - 1;
            for (let _e2 = 0; _e2 < a; _e2++) {
              let n;
              let o = i[_e2];
              if (o === "") {
                n = c();
              } else {
                const t = e.exec(o);
                if (t !== null && _c(t[2], b)) {
                  o = o.slice(0, t.index) + t[1] + t[2].slice(0, -b.length) + t[3];
                }
                n = document.createTextNode(o);
              }
              r.insertBefore(n, t);
              this.parts.push({
                type: "node",
                index: ++p
              });
            }
            if (i[a] === "") {
              r.insertBefore(c(), t);
              n.push(t);
            } else {
              t.data = i[a];
            }
            d += a;
          }
        } else if (t.nodeType === 8) {
          if (t.data === f) {
            const e = t.parentNode;
            if (t.previousSibling === null || p === u) {
              p++;
              e.insertBefore(c(), t);
            }
            u = p;
            this.parts.push({
              type: "node",
              index: p
            });
            if (t.nextSibling === null) {
              t.data = "";
            } else {
              n.push(t);
              p--;
            }
            d++;
          } else {
            let e = -1;
            while ((e = t.data.indexOf(f, e + 1)) !== -1) {
              this.parts.push({
                type: "node",
                index: -1
              });
              d++;
            }
          }
        }
      } else {
        a.currentNode = i.pop();
      }
    }
    for (const t of n) {
      t.parentNode.removeChild(t);
    }
  }
}
const _c = (t, e) => {
  const n = t.length - e.length;
  return n >= 0 && t.slice(n) === e;
};
export const d = t => t.index !== -1;
export const c = () => document.createComment("");
export const e = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;