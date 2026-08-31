var r;
var o = require("./362.js");
var i = require(/*webcrack:missing*/"./16.js");
var s = require(/*webcrack:missing*/"./4.js");
var a = require(/*webcrack:missing*/"./12.js");
var c = require(/*webcrack:missing*/"./11.js");
var u = require(/*webcrack:missing*/"./93.js");
var l = require(/*webcrack:missing*/"./20.js");
var h = require(/*webcrack:missing*/"./26.js");
var p = require(/*webcrack:missing*/"./21.js").f;
var f = require("./363.js");
var d = require(/*webcrack:missing*/"./83.js");
var g = require(/*webcrack:missing*/"./8.js");
var y = require(/*webcrack:missing*/"./58.js");
var m = s.Int8Array;
var b = m && m.prototype;
var w = s.Uint8ClampedArray;
var v = w && w.prototype;
var _ = m && f(m);
var T = b && f(b);
var E = Object.prototype;
var x = E.isPrototypeOf;
var S = g("toStringTag");
var O = y("TYPED_ARRAY_TAG");
var I = o && !!d && u(s.opera) !== "Opera";
var A = false;
var k = {
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
function D(t) {
  if (!a(t)) {
    return false;
  }
  var e = u(t);
  return c(k, e) || c(C, e);
}
for (r in k) {
  if (!s[r]) {
    I = false;
  }
}
if ((!I || typeof _ != "function" || _ === Function.prototype) && (_ = function () {
  throw TypeError("Incorrect invocation");
}, I)) {
  for (r in k) {
    if (s[r]) {
      d(s[r], _);
    }
  }
}
if ((!I || !T || T === E) && (T = _.prototype, I)) {
  for (r in k) {
    if (s[r]) {
      d(s[r].prototype, T);
    }
  }
}
if (I && f(v) !== T) {
  d(v, T);
}
if (i && !c(T, S)) {
  A = true;
  p(T, S, {
    get: function () {
      if (a(this)) {
        return this[O];
      } else {
        return undefined;
      }
    }
  });
  for (r in k) {
    if (s[r]) {
      l(s[r], O, r);
    }
  }
}
module.exports = {
  NATIVE_ARRAY_BUFFER_VIEWS: I,
  TYPED_ARRAY_TAG: A && O,
  aTypedArray: function (t) {
    if (D(t)) {
      return t;
    }
    throw TypeError("Target is not a typed array");
  },
  aTypedArrayConstructor: function (t) {
    if (d) {
      if (x.call(_, t)) {
        return t;
      }
    } else {
      for (var e in k) {
        if (c(k, r)) {
          var n = s[e];
          if (n && (t === n || x.call(n, t))) {
            return t;
          }
        }
      }
    }
    throw TypeError("Target is not a typed array constructor");
  },
  exportTypedArrayMethod: function (t, e, n) {
    if (i) {
      if (n) {
        for (var r in k) {
          var o = s[r];
          if (o && c(o.prototype, t)) {
            try {
              delete o.prototype[t];
            } catch (t) {}
          }
        }
      }
      if (!T[t] || !!n) {
        h(T, t, n ? e : I && b[t] || e);
      }
    }
  },
  exportTypedArrayStaticMethod: function (t, e, n) {
    var r;
    var o;
    if (i) {
      if (d) {
        if (n) {
          for (r in k) {
            if ((o = s[r]) && c(o, t)) {
              try {
                delete o[t];
              } catch (t) {}
            }
          }
        }
        if (_[t] && !n) {
          return;
        }
        try {
          return h(_, t, n ? e : I && _[t] || e);
        } catch (t) {}
      }
      for (r in k) {
        if (!!(o = s[r]) && (!o[t] || !!n)) {
          h(o, t, e);
        }
      }
    }
  },
  isView: function (t) {
    if (!a(t)) {
      return false;
    }
    var e = u(t);
    return e === "DataView" || c(k, e) || c(C, e);
  },
  isTypedArray: D,
  TypedArray: _,
  TypedArrayPrototype: T
};