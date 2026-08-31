var r = require("./136.js");
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
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
class i {
  constructor(t) {
    this.classes = new Set();
    this.changed = false;
    this.element = t;
    const e = (t.getAttribute("class") || "").split(/\s+/);
    for (const t of e) {
      this.classes.add(t);
    }
  }
  add(t) {
    this.classes.add(t);
    this.changed = true;
  }
  remove(t) {
    this.classes.delete(t);
    this.changed = true;
  }
  commit() {
    if (this.changed) {
      let t = "";
      this.classes.forEach(e => t += e + " ");
      this.element.setAttribute("class", t);
    }
  }
}
const o = new WeakMap();
export const a = Object(r.e)(t => e => {
  if (!(e instanceof r.a) || e instanceof r.c || e.committer.name !== "class" || e.committer.parts.length > 1) {
    throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");
  }
  const {
    committer: n
  } = e;
  const {
    element: s
  } = n;
  let a = o.get(e);
  if (a === undefined) {
    s.setAttribute("class", n.strings.join(" "));
    o.set(e, a = new Set());
  }
  const c = s.classList || new i(s);
  a.forEach(e => {
    if (!(e in t)) {
      c.remove(e);
      a.delete(e);
    }
  });
  for (const e in t) {
    const n = t[e];
    if (n != a.has(e)) {
      if (n) {
        c.add(e);
        a.add(e);
      } else {
        c.remove(e);
        a.delete(e);
      }
    }
  }
  if (typeof c.commit == "function") {
    c.commit();
  }
});