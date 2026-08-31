var n = require(/*webcrack:missing*/"./136.js");
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
class o {
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
const c = new WeakMap();
export const a = Object(n.e)(t => e => {
  if (!(e instanceof n.a) || e instanceof n.c || e.committer.name !== "class" || e.committer.parts.length > 1) {
    throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");
  }
  const {
    committer: r
  } = e;
  const {
    element: i
  } = r;
  let a = c.get(e);
  if (a === undefined) {
    i.setAttribute("class", r.strings.join(" "));
    c.set(e, a = new Set());
  }
  const u = i.classList || new o(i);
  a.forEach(e => {
    if (!(e in t)) {
      u.remove(e);
      a.delete(e);
    }
  });
  for (const e in t) {
    const r = t[e];
    if (r != a.has(e)) {
      if (r) {
        u.add(e);
        a.add(e);
      } else {
        u.remove(e);
        a.delete(e);
      }
    }
  }
  if (typeof u.commit == "function") {
    u.commit();
  }
});