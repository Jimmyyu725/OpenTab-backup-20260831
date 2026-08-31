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
const i = new RegExp(`${f}|${g}`);
export const b = "$lit$";
export class a {
  constructor(t, e) {
    this.parts = [];
    this.element = e;
    const n = [];
    const r = [];
    const a = document.createTreeWalker(e.content, 133, null, false);
    let l = 0;
    let h = -1;
    let p = 0;
    const {
      strings: _f,
      values: {
        length: m
      }
    } = t;
    while (p < m) {
      const t = a.nextNode();
      if (t !== null) {
        h++;
        if (t.nodeType === 1) {
          if (t.hasAttributes()) {
            const e = t.attributes;
            const {
              length: n
            } = e;
            let s = 0;
            for (let t = 0; t < n; t++) {
              if (_c(e[t].name, b)) {
                s++;
              }
            }
            while (s-- > 0) {
              const _e = _f[p];
              const n = e.exec(_e)[2];
              const s = n.toLowerCase() + b;
              const r = t.getAttribute(s);
              t.removeAttribute(s);
              const a = r.split(i);
              this.parts.push({
                type: "attribute",
                index: h,
                name: n,
                strings: a
              });
              p += a.length - 1;
            }
          }
          if (t.tagName === "TEMPLATE") {
            r.push(t);
            a.currentNode = t.content;
          }
        } else if (t.nodeType === 3) {
          const e = t.data;
          if (e.indexOf(f) >= 0) {
            const s = t.parentNode;
            const r = e.split(i);
            const a = r.length - 1;
            for (let _e2 = 0; _e2 < a; _e2++) {
              let n;
              let i = r[_e2];
              if (i === "") {
                n = c();
              } else {
                const t = e.exec(i);
                if (t !== null && _c(t[2], b)) {
                  i = i.slice(0, t.index) + t[1] + t[2].slice(0, -b.length) + t[3];
                }
                n = document.createTextNode(i);
              }
              s.insertBefore(n, t);
              this.parts.push({
                type: "node",
                index: ++h
              });
            }
            if (r[a] === "") {
              s.insertBefore(c(), t);
              n.push(t);
            } else {
              t.data = r[a];
            }
            p += a;
          }
        } else if (t.nodeType === 8) {
          if (t.data === f) {
            const e = t.parentNode;
            if (t.previousSibling === null || h === l) {
              h++;
              e.insertBefore(c(), t);
            }
            l = h;
            this.parts.push({
              type: "node",
              index: h
            });
            if (t.nextSibling === null) {
              t.data = "";
            } else {
              n.push(t);
              h--;
            }
            p++;
          } else {
            let e = -1;
            while ((e = t.data.indexOf(f, e + 1)) !== -1) {
              this.parts.push({
                type: "node",
                index: -1
              });
              p++;
            }
          }
        }
      } else {
        a.currentNode = r.pop();
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