var r = require("./68.js");
var o = r.Buffer;
function i(t, e) {
  for (var n in t) {
    e[n] = t[n];
  }
}
function s(t, e, n) {
  return o(t, e, n);
}
if (o.from && o.alloc && o.allocUnsafe && o.allocUnsafeSlow) {
  module.exports = r;
} else {
  i(r, exports);
  exports.Buffer = s;
}
i(o, s);
s.from = function (t, e, n) {
  if (typeof t == "number") {
    throw new TypeError("Argument must not be a number");
  }
  return o(t, e, n);
};
s.alloc = function (t, e, n) {
  if (typeof t != "number") {
    throw new TypeError("Argument must be a number");
  }
  var r = o(t);
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
s.allocUnsafe = function (t) {
  if (typeof t != "number") {
    throw new TypeError("Argument must be a number");
  }
  return o(t);
};
s.allocUnsafeSlow = function (t) {
  if (typeof t != "number") {
    throw new TypeError("Argument must be a number");
  }
  return r.SlowBuffer(t);
};