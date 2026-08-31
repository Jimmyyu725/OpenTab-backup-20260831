export let e = s.a;
export let g = a.c;
export let a = r.b;
export let b = r.e;
export let c = r.g;
export let d = o.b;
var r = require("./92.js");
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
const i = new class {
  handleAttributeExpressions(t, e, n, i) {
    const o = e[0];
    if (o === ".") {
      return new r.f(t, e.slice(1), n).parts;
    }
    if (o === "@") {
      return [new r.d(t, e.slice(1), i.eventContext)];
    }
    if (o === "?") {
      return [new r.c(t, e.slice(1), n)];
    }
    return new r.a(t, e, n).parts;
  }
  handleTextExpression(t) {
    return new r.e(t);
  }
}();
var o = require("./252.js");
var s = require("./224.js");
var a = require("./160.js");
require("./135.js");
require("./223.js");
require("./222.js");
require("./307.js");
require("./75.js");
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
if (typeof window != "undefined") {
  (window.litHtmlVersions ||= []).push("1.4.1");
}
export const f = (t, ...e) => new o.b(t, e, "html", i);