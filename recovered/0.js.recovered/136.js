export let e = o.a;
export let g = a.c;
export let a = s.b;
export let b = s.e;
export let c = s.g;
export let d = i.b;
var s = require("./92.js");
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
const r = new class {
  handleAttributeExpressions(t, e, n, r) {
    const i = e[0];
    if (i === ".") {
      return new s.f(t, e.slice(1), n).parts;
    }
    if (i === "@") {
      return [new s.d(t, e.slice(1), r.eventContext)];
    }
    if (i === "?") {
      return [new s.c(t, e.slice(1), n)];
    }
    return new s.a(t, e, n).parts;
  }
  handleTextExpression(t) {
    return new s.e(t);
  }
}();
var i = require("./252.js");
var o = require("./224.js");
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
export const f = (t, ...e) => new i.b(t, e, "html", r);