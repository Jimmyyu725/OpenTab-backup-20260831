var r = require("./226.js");
var i = Object.prototype.toString;
function o(t) {
  return i.call(t) === "[object Array]";
}
function a(t) {
  return t === undefined;
}
function s(t) {
  return t !== null && typeof t == "object";
}
function c(t) {
  return i.call(t) === "[object Function]";
}
function u(t, e) {
  if (t != null) {
    if (typeof t != "object") {
      t = [t];
    }
    if (o(t)) {
      for (var n = 0, r = t.length; n < r; n++) {
        e.call(null, t[n], n, t);
      }
    } else {
      for (var i in t) {
        if (Object.prototype.hasOwnProperty.call(t, i)) {
          e.call(null, t[i], i, t);
        }
      }
    }
  }
}
module.exports = {
  isArray: o,
  isArrayBuffer: function (t) {
    return i.call(t) === "[object ArrayBuffer]";
  },
  isBuffer: function (t) {
    return t !== null && !a(t) && t.constructor !== null && !a(t.constructor) && typeof t.constructor.isBuffer == "function" && t.constructor.isBuffer(t);
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
  isObject: s,
  isUndefined: a,
  isDate: function (t) {
    return i.call(t) === "[object Date]";
  },
  isFile: function (t) {
    return i.call(t) === "[object File]";
  },
  isBlob: function (t) {
    return i.call(t) === "[object Blob]";
  },
  isFunction: c,
  isStream: function (t) {
    return s(t) && c(t.pipe);
  },
  isURLSearchParams: function (t) {
    return typeof URLSearchParams != "undefined" && t instanceof URLSearchParams;
  },
  isStandardBrowserEnv: function () {
    return (typeof navigator == "undefined" || navigator.product !== "ReactNative" && navigator.product !== "NativeScript" && navigator.product !== "NS") && typeof window != "undefined" && typeof document != "undefined";
  },
  forEach: u,
  merge: function t() {
    var e = {};
    function n(n, r) {
      if (typeof e[r] == "object" && typeof n == "object") {
        e[r] = t(e[r], n);
      } else {
        e[r] = n;
      }
    }
    for (var r = 0, i = arguments.length; r < i; r++) {
      u(arguments[r], n);
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
    for (var r = 0, i = arguments.length; r < i; r++) {
      u(arguments[r], n);
    }
    return e;
  },
  extend: function (t, e, n) {
    u(e, function (e, i) {
      t[i] = n && typeof e == "function" ? r(e, n) : e;
    });
    return t;
  },
  trim: function (t) {
    return t.replace(/^\s*/, "").replace(/\s*$/, "");
  }
};