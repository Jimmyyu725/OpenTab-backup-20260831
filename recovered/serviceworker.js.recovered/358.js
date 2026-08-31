var r;
var o = require("./359.js");
var i = require("./32.js");
var s = require("./5.js");
var a = require("./25.js");
var c = require("./23.js");
var u = require("./164.js");
var f = require("./37.js");
var l = require("./39.js");
var h = require("./38.js").f;
var p = require("./360.js");
var d = require("./160.js");
var y = require("./11.js");
var m = require("./100.js");
var g = s.Int8Array;
var v = g && g.prototype;
var b = s.Uint8ClampedArray;
var w = b && b.prototype;
var _ = g && p(g);
var x = v && p(v);
var T = Object.prototype;
var E = T.isPrototypeOf;
var O = y("toStringTag");
var S = m("TYPED_ARRAY_TAG");
var I = o && !!d && u(s.opera) !== "Opera";
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
function D(t) {
  if (!a(t)) {
    return false;
  }
  var e = u(t);
  return c(N, e) || c(j, e);
}
for (r in N) {
  if (!s[r]) {
    I = false;
  }
}
if ((!I || typeof _ != "function" || _ === Function.prototype) && (_ = function () {
  throw TypeError("Incorrect invocation");
}, I)) {
  for (r in N) {
    if (s[r]) {
      d(s[r], _);
    }
  }
}
if ((!I || !x || x === T) && (x = _.prototype, I)) {
  for (r in N) {
    if (s[r]) {
      d(s[r].prototype, x);
    }
  }
}
if (I && p(w) !== x) {
  d(w, x);
}
if (i && !c(x, O)) {
  A = true;
  h(x, O, {
    get: function () {
      if (a(this)) {
        return this[S];
      } else {
        return undefined;
      }
    }
  });
  for (r in N) {
    if (s[r]) {
      f(s[r], S, r);
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
      if (E.call(_, t)) {
        return t;
      }
    } else {
      for (var e in N) {
        if (c(N, r)) {
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
    if (i) {
      if (n) {
        for (var r in N) {
          var o = s[r];
          if (o && c(o.prototype, t)) {
            try {
              delete o.prototype[t];
            } catch (t) {}
          }
        }
      }
      if (!x[t] || !!n) {
        l(x, t, n ? e : I && v[t] || e);
      }
    }
  },
  exportTypedArrayStaticMethod: function (t, e, n) {
    var r;
    var o;
    if (i) {
      if (d) {
        if (n) {
          for (r in N) {
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
          return l(_, t, n ? e : I && _[t] || e);
        } catch (t) {}
      }
      for (r in N) {
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
    var e = u(t);
    return e === "DataView" || c(N, e) || c(j, e);
  },
  isTypedArray: D,
  TypedArray: _,
  TypedArrayPrototype: x
};