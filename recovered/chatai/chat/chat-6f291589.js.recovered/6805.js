var i;
var s;
var r;
var a = require("./4347.js");
var o = require("./8108.js");
var u = require("./2334.js");
var g = require("./4351.js");
var h = require("./8064.js");
var c = require("./2469.js");
var l = require("./6309.js");
var d = require("./9705.js");
var F = require("./9213.js");
var f = require("./1684.js");
var C = require("./9512.js").f;
var p = require("./5733.js");
var y = require("./5619.js");
var A = require("./7787.js");
var E = require("./2226.js");
var _ = require("./2995.js");
var D = u.Int8Array;
var x = D && D.prototype;
var m = u.Uint8ClampedArray;
var w = m && m.prototype;
var B = D && y(D);
var b = x && y(x);
var j = Object.prototype;
var S = u.TypeError;
var I = E("toStringTag");
var v = _("TYPED_ARRAY_TAG");
var z = _("TYPED_ARRAY_CONSTRUCTOR");
var k = a && !!A && l(u.opera) !== "Opera";
var M = false;
var T = {
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
var N = {
  BigInt64Array: 8,
  BigUint64Array: 8
};
function Y(e) {
  if (!h(e)) {
    return false;
  }
  var t = l(e);
  return c(T, t) || c(N, t);
}
for (i in T) {
  if (r = (s = u[i]) && s.prototype) {
    F(r, z, s);
  } else {
    k = false;
  }
}
for (i in N) {
  if (r = (s = u[i]) && s.prototype) {
    F(r, z, s);
  }
}
if ((!k || !g(B) || B === Function.prototype) && (B = function () {
  throw S("Incorrect invocation");
}, k)) {
  for (i in T) {
    if (u[i]) {
      A(u[i], B);
    }
  }
}
if ((!k || !b || b === j) && (b = B.prototype, k)) {
  for (i in T) {
    if (u[i]) {
      A(u[i].prototype, b);
    }
  }
}
if (k && y(w) !== b) {
  A(w, b);
}
if (o && !c(b, I)) {
  M = true;
  C(b, I, {
    get: function () {
      if (h(this)) {
        return this[v];
      } else {
        return undefined;
      }
    }
  });
  for (i in T) {
    if (u[i]) {
      F(u[i], v, i);
    }
  }
}
module.exports = {
  NATIVE_ARRAY_BUFFER_VIEWS: k,
  TYPED_ARRAY_CONSTRUCTOR: z,
  TYPED_ARRAY_TAG: M && v,
  aTypedArray: function (e) {
    if (Y(e)) {
      return e;
    }
    throw S("Target is not a typed array");
  },
  aTypedArrayConstructor: function (e) {
    if (g(e) && (!A || p(B, e))) {
      return e;
    }
    throw S(d(e) + " is not a typed array constructor");
  },
  exportTypedArrayMethod: function (e, t, n, i) {
    if (o) {
      if (n) {
        for (var s in T) {
          var r = u[s];
          if (r && c(r.prototype, e)) {
            try {
              delete r.prototype[e];
            } catch (n) {
              try {
                r.prototype[e] = t;
              } catch (e) {}
            }
          }
        }
      }
      if (!b[e] || !!n) {
        f(b, e, n ? t : k && x[e] || t, i);
      }
    }
  },
  exportTypedArrayStaticMethod: function (e, t, n) {
    var i;
    var s;
    if (o) {
      if (A) {
        if (n) {
          for (i in T) {
            if ((s = u[i]) && c(s, e)) {
              try {
                delete s[e];
              } catch (e) {}
            }
          }
        }
        if (B[e] && !n) {
          return;
        }
        try {
          return f(B, e, n ? t : k && B[e] || t);
        } catch (e) {}
      }
      for (i in T) {
        if (!!(s = u[i]) && (!s[e] || !!n)) {
          f(s, e, t);
        }
      }
    }
  },
  isView: function (e) {
    if (!h(e)) {
      return false;
    }
    var t = l(e);
    return t === "DataView" || c(T, t) || c(N, t);
  },
  isTypedArray: Y,
  TypedArray: B,
  TypedArrayPrototype: b
};