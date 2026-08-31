var r;
var o = require("./362.js");
var i = require("./16.js");
var s = require("./4.js");
var a = require("./12.js");
var u = require("./11.js");
var c = require("./93.js");
var f = require("./20.js");
var l = require("./26.js");
var h = require("./21.js").f;
var p = require("./363.js");
var d = require("./83.js");
var y = require("./8.js");
var m = require("./58.js");
var g = s.Int8Array;
var v = g && g.prototype;
var b = s.Uint8ClampedArray;
var w = b && b.prototype;
var _ = g && p(g);
var E = v && p(v);
var T = Object.prototype;
var x = T.isPrototypeOf;
var O = y("toStringTag");
var I = m("TYPED_ARRAY_TAG");
var S = o && !!d && c(s.opera) !== "Opera";
var A = false;
var D = {
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
function C(t) {
  if (!a(t)) {
    return false;
  }
  var e = c(t);
  return u(D, e) || u(N, e);
}
for (r in D) {
  if (!s[r]) {
    S = false;
  }
}
if ((!S || typeof _ != "function" || _ === Function.prototype) && (_ = function () {
  throw TypeError("Incorrect invocation");
}, S)) {
  for (r in D) {
    if (s[r]) {
      d(s[r], _);
    }
  }
}
if ((!S || !E || E === T) && (E = _.prototype, S)) {
  for (r in D) {
    if (s[r]) {
      d(s[r].prototype, E);
    }
  }
}
if (S && p(w) !== E) {
  d(w, E);
}
if (i && !u(E, O)) {
  A = true;
  h(E, O, {
    get: function () {
      if (a(this)) {
        return this[I];
      } else {
        return undefined;
      }
    }
  });
  for (r in D) {
    if (s[r]) {
      f(s[r], I, r);
    }
  }
}
module.exports = {
  NATIVE_ARRAY_BUFFER_VIEWS: S,
  TYPED_ARRAY_TAG: A && I,
  aTypedArray: function (t) {
    if (C(t)) {
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
      for (var e in D) {
        if (u(D, r)) {
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
        for (var r in D) {
          var o = s[r];
          if (o && u(o.prototype, t)) {
            try {
              delete o.prototype[t];
            } catch (t) {}
          }
        }
      }
      if (!E[t] || !!n) {
        l(E, t, n ? e : S && v[t] || e);
      }
    }
  },
  exportTypedArrayStaticMethod: function (t, e, n) {
    var r;
    var o;
    if (i) {
      if (d) {
        if (n) {
          for (r in D) {
            if ((o = s[r]) && u(o, t)) {
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
          return l(_, t, n ? e : S && _[t] || e);
        } catch (t) {}
      }
      for (r in D) {
        if (!!(o = s[r]) && (!o[t] || !!n)) {
          l(o, t, e);
        }
      }
    }
  },
  isView: function (t) {
    if (!a(t)) {
      return false;
    }
    var e = c(t);
    return e === "DataView" || u(D, e) || u(N, e);
  },
  isTypedArray: C,
  TypedArray: _,
  TypedArrayPrototype: E
};