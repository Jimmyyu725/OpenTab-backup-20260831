var r = require("./226.js");
var o = Object.prototype.toString;
function i(t) {
  return o.call(t) === "[object Array]";
}
function s(t) {
  return t === undefined;
}
function a(t) {
  return t !== null && typeof t == "object";
}
function u(t) {
  return o.call(t) === "[object Function]";
}
function c(t, e) {
  if (t != null) {
    if (typeof t != "object") {
      t = [t];
    }
    if (i(t)) {
      for (var n = 0, r = t.length; n < r; n++) {
        e.call(null, t[n], n, t);
      }
    } else {
      for (var o in t) {
        if (Object.prototype.hasOwnProperty.call(t, o)) {
          e.call(null, t[o], o, t);
        }
      }
    }
  }
}
module.exports = {
  isArray: i,
  isArrayBuffer: function (t) {
    return o.call(t) === "[object ArrayBuffer]";
  },
  isBuffer: function (t) {
    return t !== null && !s(t) && t.constructor !== null && !s(t.constructor) && typeof t.constructor.isBuffer == "function" && t.constructor.isBuffer(t);
  },
  isFormData: function (t) {
    return typeof FormData != "undefined" && t instanceof FormData;
  },
  isArrayBufferView: function (t) {
    if (typeof ArrayBuffer != "undefined" && ArrayBuffer.isView) {
      return ArrayBuffer.isView(t);
    } else {
      return t && t.buffer && t.buffer instanceof ArrayBuffer;
    }
  },
  isString: function (t) {
    return typeof t == "string";
  },
  isNumber: function (t) {
    return typeof t == "number";
  },
  isObject: a,
  isUndefined: s,
  isDate: function (t) {
    return o.call(t) === "[object Date]";
  },
  isFile: function (t) {
    return o.call(t) === "[object File]";
  },
  isBlob: function (t) {
    return o.call(t) === "[object Blob]";
  },
  isFunction: u,
  isStream: function (t) {
    return a(t) && u(t.pipe);
  },
  isURLSearchParams: function (t) {
    return typeof URLSearchParams != "undefined" && t instanceof URLSearchParams;
  },
  isStandardBrowserEnv: function () {
    return (typeof navigator == "undefined" || navigator.product !== "ReactNative" && navigator.product !== "NativeScript" && navigator.product !== "NS") && typeof window != "undefined" && typeof document != "undefined";
  },
  forEach: c,
  merge: function t() {
    var e = {};
    function n(n, r) {
      if (typeof e[r] == "object" && typeof n == "object") {
        e[r] = t(e[r], n);
      } else {
        e[r] = n;
      }
    }
    for (var r = 0, o = arguments.length; r < o; r++) {
      c(arguments[r], n);
    }
    return e;
  },
  deepMerge: function t() {
    var e = {};
    function n(n, r) {
      if (typeof e[r] == "object" && typeof n == "object") {
        e[r] = t(e[r], n);
      } else {
        e[r] = typeof n == "object" ? t({}, n) : n;
      }
    }
    for (var r = 0, o = arguments.length; r < o; r++) {
      c(arguments[r], n);
    }
    return e;
  },
  extend: function (t, e, n) {
    c(e, function (e, o) {
      t[o] = n && typeof e == "function" ? r(e, n) : e;
    });
    return t;
  },
  trim: function (t) {
    return t.replace(/^\s*/, "").replace(/\s*$/, "");
  }
};