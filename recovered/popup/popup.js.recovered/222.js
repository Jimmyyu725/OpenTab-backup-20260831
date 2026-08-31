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
export function b(t) {
  let e = a.get(t.type);
  if (e === undefined) {
    e = {
      stringsArray: new WeakMap(),
      keyString: new Map()
    };
    a.set(t.type, e);
  }
  let n = e.stringsArray.get(t.strings);
  if (n !== undefined) {
    return n;
  }
  const i = t.strings.join(r.f);
  n = e.keyString.get(i);
  if (n === undefined) {
    n = new r.a(t, t.getTemplateElement());
    e.keyString.set(i, n);
  }
  e.stringsArray.set(t.strings, n);
  return n;
}
export const a = new Map();