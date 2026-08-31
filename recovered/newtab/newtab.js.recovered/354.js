/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
var r = require("./153.js");
var i = r.Buffer;
function o(t, e) {
  for (var n in t) {
    e[n] = t[n];
  }
}
function a(t, e, n) {
  return i(t, e, n);
}
if (i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow) {
  module.exports = r;
} else {
  o(r, exports);
  exports.Buffer = a;
}
a.prototype = Object.create(i.prototype);
o(i, a);
a.from = function (t, e, n) {
  if (typeof t == "number") {
    throw new TypeError("Argument must not be a number");
  }
  return i(t, e, n);
};
a.alloc = function (t, e, n) {
  if (typeof t != "number") {
    throw new TypeError("Argument must be a number");
  }
  var r = i(t);
  if (e !== undefined) {
    if (typeof n == "string") {
      r.fill(e, n);
    } else {
      r.fill(e);
    }
  } else {
    r.fill(0);
  }
  return r;
};
a.allocUnsafe = function (t) {
  if (typeof t != "number") {
    throw new TypeError("Argument must be a number");
  }
  return i(t);
};
a.allocUnsafeSlow = function (t) {
  if (typeof t != "number") {
    throw new TypeError("Argument must be a number");
  }
  return r.SlowBuffer(t);
};