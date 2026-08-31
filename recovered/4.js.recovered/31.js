var r = require("./226.js");
var o = Object.prototype.toString;
function i(e) {
  return o.call(e) === "[object Array]";
}
function a(e) {
  return e === undefined;
}
function u(e) {
  return e !== null && typeof e == "object";
}
function c(e) {
  return o.call(e) === "[object Function]";
}
function s(e, t) {
  if (e != null) {
    if (typeof e != "object") {
      e = [e];
    }
    if (i(e)) {
      for (var n = 0, r = e.length; n < r; n++) {
        t.call(null, e[n], n, e);
      }
    } else {
      for (var o in e) {
        if (Object.prototype.hasOwnProperty.call(e, o)) {
          t.call(null, e[o], o, e);
        }
      }
    }
  }
}
module.exports = {
  isArray: i,
  isArrayBuffer: function (e) {
    return o.call(e) === "[object ArrayBuffer]";
  },
  isBuffer: function (e) {
    return e !== null && !a(e) && e.constructor !== null && !a(e.constructor) && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
  },
  isFormData: function (e) {
    return typeof FormData != "undefined" && e instanceof FormData;
  },
  isArrayBufferView: function (e) {
    if (typeof ArrayBuffer != "undefined" && ArrayBuffer.isView) {
      return ArrayBuffer.isView(e);
    } else {
      return e && e.buffer && e.buffer instanceof ArrayBuffer;
    }
  },
  isString: function (e) {
    return typeof e == "string";
  },
  isNumber: function (e) {
    return typeof e == "number";
  },
  isObject: u,
  isUndefined: a,
  isDate: function (e) {
    return o.call(e) === "[object Date]";
  },
  isFile: function (e) {
    return o.call(e) === "[object File]";
  },
  isBlob: function (e) {
    return o.call(e) === "[object Blob]";
  },
  isFunction: c,
  isStream: function (e) {
    return u(e) && c(e.pipe);
  },
  isURLSearchParams: function (e) {
    return typeof URLSearchParams != "undefined" && e instanceof URLSearchParams;
  },
  isStandardBrowserEnv: function () {
    return (typeof navigator == "undefined" || navigator.product !== "ReactNative" && navigator.product !== "NativeScript" && navigator.product !== "NS") && typeof window != "undefined" && typeof document != "undefined";
  },
  forEach: s,
  merge: function e() {
    var t = {};
    function n(n, r) {
      if (typeof t[r] == "object" && typeof n == "object") {
        t[r] = e(t[r], n);
      } else {
        t[r] = n;
      }
    }
    for (var r = 0, o = arguments.length; r < o; r++) {
      s(arguments[r], n);
    }
    return t;
  },
  deepMerge: function e() {
    var t = {};
    function n(n, r) {
      if (typeof t[r] == "object" && typeof n == "object") {
        t[r] = e(t[r], n);
      } else {
        t[r] = typeof n == "object" ? e({}, n) : n;
      }
    }
    for (var r = 0, o = arguments.length; r < o; r++) {
      s(arguments[r], n);
    }
    return t;
  },
  extend: function (e, t, n) {
    s(t, function (t, o) {
      e[o] = n && typeof t == "function" ? r(t, n) : t;
    });
    return e;
  },
  trim: function (e) {
    return e.replace(/^\s*/, "").replace(/\s*$/, "");
  }
};