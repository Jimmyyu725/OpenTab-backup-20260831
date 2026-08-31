var r = require("./92.js");
var i = require("./136.js");
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
const o = new WeakMap();
export const a = Object(i.e)(t => e => {
  if (!(e instanceof i.b)) {
    throw new Error("unsafeHTML can only be used in text bindings");
  }
  const n = o.get(e);
  if (n !== undefined && Object(r.h)(t) && t === n.value && e.value === n.fragment) {
    return;
  }
  const s = document.createElement("template");
  s.innerHTML = t;
  const a = document.importNode(s.content, true);
  e.setValue(a);
  o.set(e, {
    value: t,
    fragment: a
  });
});