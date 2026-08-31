var n = require(/*webcrack:missing*/"./92.js");
var s = require(/*webcrack:missing*/"./136.js");
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
const _a = new WeakMap();
export const a = Object(s.e)(t => e => {
  if (!(e instanceof s.b)) {
    throw new Error("unsafeHTML can only be used in text bindings");
  }
  const i = _a.get(e);
  if (i !== undefined && Object(n.h)(t) && t === i.value && e.value === i.fragment) {
    return;
  }
  const o = document.createElement("template");
  o.innerHTML = t;
  const r = document.importNode(o.content, true);
  e.setValue(r);
  _a.set(e, {
    value: t,
    fragment: r
  });
});