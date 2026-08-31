var r = require("./160.js");
var i = require("./92.js");
var o = require("./222.js");
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
export const a = new WeakMap();
export const b = (t, e, n) => {
  let _a2 = a.get(e);
  if (_a2 === undefined) {
    Object(r.b)(e, e.firstChild);
    a.set(e, _a2 = new i.e(Object.assign({
      templateFactory: o.b
    }, n)));
    _a2.appendInto(e);
  }
  _a2.setValue(t);
  _a2.commit();
};