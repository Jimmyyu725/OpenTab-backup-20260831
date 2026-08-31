var r;
var i = require("./362.js");
var o = require("./16.js");
var a = require("./4.js");
var s = require("./12.js");
var c = require("./11.js");
var u = require("./93.js");
var l = require("./20.js");
var f = require("./26.js");
var h = require("./21.js").f;
var p = require("./363.js");
var d = require("./83.js");
var m = require("./8.js");
var g = require("./58.js");
var y = a.Int8Array;
var b = y && y.prototype;
var w = a.Uint8ClampedArray;
var v = w && w.prototype;
var _ = y && p(y);
var E = b && p(b);
var x = Object.prototype;
var T = x.isPrototypeOf;
var I = m("toStringTag");
var O = g("TYPED_ARRAY_TAG");
var S = i && !!d && u(a.opera) !== "Opera";
var A = false;
var N = {
  Int8Array: 1,
  Uint8Array: 1,
  Uint8ClampedArray: 1,
  Int16Array: 2,
  Uint16Array: 2,
  Int32Array: 4,
  Uint32Array: 4,
  Float32Array: 4,
  Float64Array: 8
};
var j = {
  BigInt64Array: 8,
  BigUint64Array: 8
};
function C(t) {
  if (!s(t)) {
    return false;
  }
  var e = u(t);
  return c(N, e) || c(j, e);
}
for (r in N) {
  if (!a[r]) {
    S = false;
  }
}
if ((!S || typeof _ != "function" || _ === Function.prototype) && (_ = function () {
  throw TypeError("Incorrect invocation");
}, S)) {
  for (r in N) {
    if (a[r]) {
      d(a[r], _);
    }
  }
}
if ((!S || !E || E === x) && (E = _.prototype, S)) {
  for (r in N) {
    if (a[r]) {
      d(a[r].prototype, E);
    }
  }
}
if (S && p(v) !== E) {
  d(v, E);
}
if (o && !c(E, I)) {
  A = true;
  h(E, I, {
    get: function () {
      if (s(this)) {
        return this[O];
      } else {
        return undefined;
      }
    }
  });
  for (r in N) {
    if (a[r]) {
      l(a[r], O, r);
    }
  }
}
module.exports = {
  NATIVE_ARRAY_BUFFER_VIEWS: S,
  TYPED_ARRAY_TAG: A && O,
  aTypedArray: function (t) {
    if (C(t)) {
      return t;
    }
    throw TypeError("Target is not a typed array");
  },
  aTypedArrayConstructor: function (t) {
    if (d) {
      if (T.call(_, t)) {
        return t;
      }
    } else {
      for (var e in N) {
        if (c(N, r)) {
          var n = a[e];
          if (n && (t === n || T.call(n, t))) {
            return t;
          }
        }
      }
    }
    throw TypeError("Target is not a typed array constructor");
  },
  exportTypedArrayMethod: function (t, e, n) {
    if (o) {
      if (n) {
        for (var r in N) {
          var i = a[r];
          if (i && c(i.prototype, t)) {
            try {
              delete i.prototype[t];
            } catch (t) {}
          }
        }
      }
      if (!E[t] || !!n) {
        f(E, t, n ? e : S && b[t] || e);
      }
    }
  },
  exportTypedArrayStaticMethod: function (t, e, n) {
    var r;
    var i;
    if (o) {
      if (d) {
        if (n) {
          for (r in N) {
            if ((i = a[r]) && c(i, t)) {
              try {
                delete i[t];
              } catch (t) {}
            }
          }
        }
        if (_[t] && !n) {
          return;
        }
        try {
          return f(_, t, n ? e : S && _[t] || e);
        } catch (t) {}
      }
      for (r in N) {
        if (!!(i = a[r]) && (!i[t] || !!n)) {
          f(i, t, e);
        }
      }
    }
  },
  isView: function (t) {
    if (!s(t)) {
      return false;
    }
    var e = u(t);
    return e === "DataView" || c(N, e) || c(j, e);
  },
  isTypedArray: C,
  TypedArray: _,
  TypedArrayPrototype: E
};