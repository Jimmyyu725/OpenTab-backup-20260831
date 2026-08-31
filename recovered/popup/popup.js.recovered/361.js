var r;
var i = require("./362.js");
var o = require("./16.js");
var s = require("./4.js");
var a = require("./12.js");
var c = require("./11.js");
var u = require("./93.js");
var l = require("./20.js");
var h = require("./26.js");
var p = require("./21.js").f;
var d = require("./363.js");
var f = require("./83.js");
var g = require("./8.js");
var y = require("./58.js");
var m = s.Int8Array;
var b = m && m.prototype;
var v = s.Uint8ClampedArray;
var w = v && v.prototype;
var x = m && d(m);
var _ = b && d(b);
var O = Object.prototype;
var T = O.isPrototypeOf;
var S = g("toStringTag");
var E = y("TYPED_ARRAY_TAG");
var j = i && !!f && u(s.opera) !== "Opera";
var k = false;
var A = {
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
var C = {
  BigInt64Array: 8,
  BigUint64Array: 8
};
function I(t) {
  if (!a(t)) {
    return false;
  }
  var e = u(t);
  return c(A, e) || c(C, e);
}
for (r in A) {
  if (!s[r]) {
    j = false;
  }
}
if ((!j || typeof x != "function" || x === Function.prototype) && (x = function () {
  throw TypeError("Incorrect invocation");
}, j)) {
  for (r in A) {
    if (s[r]) {
      f(s[r], x);
    }
  }
}
if ((!j || !_ || _ === O) && (_ = x.prototype, j)) {
  for (r in A) {
    if (s[r]) {
      f(s[r].prototype, _);
    }
  }
}
if (j && d(w) !== _) {
  f(w, _);
}
if (o && !c(_, S)) {
  k = true;
  p(_, S, {
    get: function () {
      if (a(this)) {
        return this[E];
      } else {
        return undefined;
      }
    }
  });
  for (r in A) {
    if (s[r]) {
      l(s[r], E, r);
    }
  }
}
module.exports = {
  NATIVE_ARRAY_BUFFER_VIEWS: j,
  TYPED_ARRAY_TAG: k && E,
  aTypedArray: function (t) {
    if (I(t)) {
      return t;
    }
    throw TypeError("Target is not a typed array");
  },
  aTypedArrayConstructor: function (t) {
    if (f) {
      if (T.call(x, t)) {
        return t;
      }
    } else {
      for (var e in A) {
        if (c(A, r)) {
          var n = s[e];
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
        for (var r in A) {
          var i = s[r];
          if (i && c(i.prototype, t)) {
            try {
              delete i.prototype[t];
            } catch (t) {}
          }
        }
      }
      if (!_[t] || !!n) {
        h(_, t, n ? e : j && b[t] || e);
      }
    }
  },
  exportTypedArrayStaticMethod: function (t, e, n) {
    var r;
    var i;
    if (o) {
      if (f) {
        if (n) {
          for (r in A) {
            if ((i = s[r]) && c(i, t)) {
              try {
                delete i[t];
              } catch (t) {}
            }
          }
        }
        if (x[t] && !n) {
          return;
        }
        try {
          return h(x, t, n ? e : j && x[t] || e);
        } catch (t) {}
      }
      for (r in A) {
        if (!!(i = s[r]) && (!i[t] || !!n)) {
          h(i, t, e);
        }
      }
    }
  },
  isView: function (t) {
    if (!a(t)) {
      return false;
    }
    var e = u(t);
    return e === "DataView" || c(A, e) || c(C, e);
  },
  isTypedArray: I,
  TypedArray: x,
  TypedArrayPrototype: _
};