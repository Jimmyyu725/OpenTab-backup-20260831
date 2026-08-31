var r;
var i = require("./362.js");
var o = require(/*webcrack:missing*/"./16.js");
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
var m = require(/*webcrack:missing*/"./58.js");
var y = s.Int8Array;
var b = y && y.prototype;
var v = s.Uint8ClampedArray;
var w = v && v.prototype;
var x = y && f(y);
var _ = b && f(b);
var T = Object.prototype;
var E = T.isPrototypeOf;
var O = g("toStringTag");
var S = m("TYPED_ARRAY_TAG");
var I = i && !!d && u(s.opera) !== "Opera";
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
if ((!I || typeof x != "function" || x === Function.prototype) && (x = function () {
  throw TypeError("Incorrect invocation");
}, I)) {
  for (r in k) {
    if (s[r]) {
      d(s[r], x);
    }
  }
}
if ((!I || !_ || _ === T) && (_ = x.prototype, I)) {
  for (r in k) {
    if (s[r]) {
      d(s[r].prototype, _);
    }
  }
}
if (I && f(w) !== _) {
  d(w, _);
}
if (o && !c(_, O)) {
  A = true;
  p(_, O, {
    get: function () {
      if (a(this)) {
        return this[S];
      } else {
        return undefined;
      }
    }
  });
  for (r in k) {
    if (s[r]) {
      l(s[r], S, r);
    }
  }
}
module.exports = {
  NATIVE_ARRAY_BUFFER_VIEWS: I,
  TYPED_ARRAY_TAG: A && S,
  aTypedArray: function (t) {
    if (D(t)) {
      return t;
    }
    throw TypeError("Target is not a typed array");
  },
  aTypedArrayConstructor: function (t) {
    if (d) {
      if (E.call(x, t)) {
        return t;
      }
    } else {
      for (var e in k) {
        if (c(k, r)) {
          var n = s[e];
          if (n && (t === n || E.call(n, t))) {
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
        for (var r in k) {
          var i = s[r];
          if (i && c(i.prototype, t)) {
            try {
              delete i.prototype[t];
            } catch (t) {}
          }
        }
      }
      if (!_[t] || !!n) {
        h(_, t, n ? e : I && b[t] || e);
      }
    }
  },
  exportTypedArrayStaticMethod: function (t, e, n) {
    var r;
    var i;
    if (o) {
      if (d) {
        if (n) {
          for (r in k) {
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
          return h(x, t, n ? e : I && x[t] || e);
        } catch (t) {}
      }
      for (r in k) {
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
    return e === "DataView" || c(k, e) || c(C, e);
  },
  isTypedArray: D,
  TypedArray: x,
  TypedArrayPrototype: _
};