var r = require(/*webcrack:missing*/"./136.js");
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
const i = new WeakMap();
export const a = Object(r.e)(t => e => {
  if (!(e instanceof r.a) || e instanceof r.c || e.committer.name !== "style" || e.committer.parts.length > 1) {
    throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");
  }
  const {
    committer: n
  } = e;
  const {
    style: o
  } = n.element;
  let s = i.get(e);
  if (s === undefined) {
    o.cssText = n.strings.join(" ");
    i.set(e, s = new Set());
  }
  s.forEach(e => {
    if (!(e in t)) {
      s.delete(e);
      if (e.indexOf("-") === -1) {
        o[e] = null;
      } else {
        o.removeProperty(e);
      }
    }
  });
  for (const e in t) {
    s.add(e);
    if (e.indexOf("-") === -1) {
      o[e] = t[e];
    } else {
      o.setProperty(e, t[e]);
    }
  }
});