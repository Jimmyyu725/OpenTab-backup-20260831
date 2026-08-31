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
export const a = typeof window != "undefined" && window.customElements != null && window.customElements.polyfillWrapFlushCallback !== undefined;
export const c = (t, e, n = null, s = null) => {
  while (e !== n) {
    const n = e.nextSibling;
    t.insertBefore(e, s);
    e = n;
  }
};
export const b = (t, e, n = null) => {
  while (e !== n) {
    const n = e.nextSibling;
    t.removeChild(e);
    e = n;
  }
};