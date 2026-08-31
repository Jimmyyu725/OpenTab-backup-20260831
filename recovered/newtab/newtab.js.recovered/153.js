var t = require("./25.js");
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
var r = require("./346.js");
var i = require("./347.js");
var o = require("./240.js");
function a() {
  if (c.TYPED_ARRAY_SUPPORT) {
    return 2147483647;
  } else {
    return 1073741823;
  }
}
function s(t, e) {
  if (a() < e) {
    throw new RangeError("Invalid typed array length");
  }
  if (c.TYPED_ARRAY_SUPPORT) {
    (t = new Uint8Array(e)).__proto__ = c.prototype;
  } else {
    if (t === null) {
      t = new c(e);
    }
    t.length = e;
  }
  return t;
}
function c(t, e, n) {
  if (!c.TYPED_ARRAY_SUPPORT && !(this instanceof c)) {
    return new c(t, e, n);
  }
  if (typeof t == "number") {
    if (typeof e == "string") {
      throw new Error("If encoding is specified then the first argument must be a string");
    }
    return f(this, t);
  }
  return u(this, t, e, n);
}
function u(t, e, n, r) {
  if (typeof e == "number") {
    throw new TypeError("\"value\" argument must not be a number");
  }
  if (typeof ArrayBuffer != "undefined" && e instanceof ArrayBuffer) {
    return function (t, e, n, r) {
      e.byteLength;
      if (n < 0 || e.byteLength < n) {
        throw new RangeError("'offset' is out of bounds");
      }
      if (e.byteLength < n + (r || 0)) {
        throw new RangeError("'length' is out of bounds");
      }
      e = n === undefined && r === undefined ? new Uint8Array(e) : r === undefined ? new Uint8Array(e, n) : new Uint8Array(e, n, r);
      if (c.TYPED_ARRAY_SUPPORT) {
        (t = e).__proto__ = c.prototype;
      } else {
        t = h(t, e);
      }
      return t;
    }(t, e, n, r);
  } else if (typeof e == "string") {
    return function (t, e, n) {
      if (typeof n != "string" || n === "") {
        n = "utf8";
      }
      if (!c.isEncoding(n)) {
        throw new TypeError("\"encoding\" must be a valid string encoding");
      }
      var r = d(e, n) | 0;
      var i = (t = s(t, r)).write(e, n);
      if (i !== r) {
        t = t.slice(0, i);
      }
      return t;
    }(t, e, n);
  } else {
    return function (t, e) {
      if (c.isBuffer(e)) {
        var n = p(e.length) | 0;
        if ((t = s(t, n)).length !== 0) {
          e.copy(t, 0, 0, n);
        }
        return t;
      }
      if (e) {
        if (typeof ArrayBuffer != "undefined" && e.buffer instanceof ArrayBuffer || "length" in e) {
          if (typeof e.length != "number" || (r = e.length) != r) {
            return s(t, 0);
          } else {
            return h(t, e);
          }
        }
        if (e.type === "Buffer" && o(e.data)) {
          return h(t, e.data);
        }
      }
      var r;
      throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
    }(t, e);
  }
}
function l(t) {
  if (typeof t != "number") {
    throw new TypeError("\"size\" argument must be a number");
  }
  if (t < 0) {
    throw new RangeError("\"size\" argument must not be negative");
  }
}
function f(t, e) {
  l(e);
  t = s(t, e < 0 ? 0 : p(e) | 0);
  if (!c.TYPED_ARRAY_SUPPORT) {
    for (var n = 0; n < e; ++n) {
      t[n] = 0;
    }
  }
  return t;
}
function h(t, e) {
  var n = e.length < 0 ? 0 : p(e.length) | 0;
  t = s(t, n);
  for (var r = 0; r < n; r += 1) {
    t[r] = e[r] & 255;
  }
  return t;
}
function p(t) {
  if (t >= a()) {
    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a().toString(16) + " bytes");
  }
  return t | 0;
}
function d(t, e) {
  if (c.isBuffer(t)) {
    return t.length;
  }
  if (typeof ArrayBuffer != "undefined" && typeof ArrayBuffer.isView == "function" && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) {
    return t.byteLength;
  }
  if (typeof t != "string") {
    t = "" + t;
  }
  var n = t.length;
  if (n === 0) {
    return 0;
  }
  var r = false;
  while (true) {
    switch (e) {
      case "ascii":
      case "latin1":
      case "binary":
        return n;
      case "utf8":
      case "utf-8":
      case undefined:
        return B(t).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return n * 2;
      case "hex":
        return n >>> 1;
      case "base64":
        return $(t).length;
      default:
        if (r) {
          return B(t).length;
        }
        e = ("" + e).toLowerCase();
        r = true;
    }
  }
}
function m(t, e, n) {
  var r = false;
  if (e === undefined || e < 0) {
    e = 0;
  }
  if (e > this.length) {
    return "";
  }
  if (n === undefined || n > this.length) {
    n = this.length;
  }
  if (n <= 0) {
    return "";
  }
  if ((n >>>= 0) <= (e >>>= 0)) {
    return "";
  }
  for (t ||= "utf8";;) {
    switch (t) {
      case "hex":
        return N(this, e, n);
      case "utf8":
      case "utf-8":
        return O(this, e, n);
      case "ascii":
        return S(this, e, n);
      case "latin1":
      case "binary":
        return A(this, e, n);
      case "base64":
        return I(this, e, n);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return j(this, e, n);
      default:
        if (r) {
          throw new TypeError("Unknown encoding: " + t);
        }
        t = (t + "").toLowerCase();
        r = true;
    }
  }
}
function g(t, e, n) {
  var r = t[e];
  t[e] = t[n];
  t[n] = r;
}
function y(t, e, n, r, i) {
  if (t.length === 0) {
    return -1;
  }
  if (typeof n == "string") {
    r = n;
    n = 0;
  } else if (n > 2147483647) {
    n = 2147483647;
  } else if (n < -2147483648) {
    n = -2147483648;
  }
  n = +n;
  if (isNaN(n)) {
    n = i ? 0 : t.length - 1;
  }
  if (n < 0) {
    n = t.length + n;
  }
  if (n >= t.length) {
    if (i) {
      return -1;
    }
    n = t.length - 1;
  } else if (n < 0) {
    if (!i) {
      return -1;
    }
    n = 0;
  }
  if (typeof e == "string") {
    e = c.from(e, r);
  }
  if (c.isBuffer(e)) {
    if (e.length === 0) {
      return -1;
    } else {
      return b(t, e, n, r, i);
    }
  }
  if (typeof e == "number") {
    e &= 255;
    if (c.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf == "function") {
      if (i) {
        return Uint8Array.prototype.indexOf.call(t, e, n);
      } else {
        return Uint8Array.prototype.lastIndexOf.call(t, e, n);
      }
    } else {
      return b(t, [e], n, r, i);
    }
  }
  throw new TypeError("val must be string, number or Buffer");
}
function b(t, e, n, r, i) {
  var o;
  var a = 1;
  var s = t.length;
  var c = e.length;
  if (r !== undefined && ((r = String(r).toLowerCase()) === "ucs2" || r === "ucs-2" || r === "utf16le" || r === "utf-16le")) {
    if (t.length < 2 || e.length < 2) {
      return -1;
    }
    a = 2;
    s /= 2;
    c /= 2;
    n /= 2;
  }
  function u(t, e) {
    if (a === 1) {
      return t[e];
    } else {
      return t.readUInt16BE(e * a);
    }
  }
  if (i) {
    var l = -1;
    for (o = n; o < s; o++) {
      if (u(t, o) === u(e, l === -1 ? 0 : o - l)) {
        if (l === -1) {
          l = o;
        }
        if (o - l + 1 === c) {
          return l * a;
        }
      } else {
        if (l !== -1) {
          o -= o - l;
        }
        l = -1;
      }
    }
  } else {
    if (n + c > s) {
      n = s - c;
    }
    o = n;
    for (; o >= 0; o--) {
      var f = true;
      for (var h = 0; h < c; h++) {
        if (u(t, o + h) !== u(e, h)) {
          f = false;
          break;
        }
      }
      if (f) {
        return o;
      }
    }
  }
  return -1;
}
function w(t, e, n, r) {
  n = Number(n) || 0;
  var i = t.length - n;
  if (r) {
    if ((r = Number(r)) > i) {
      r = i;
    }
  } else {
    r = i;
  }
  var o = e.length;
  if (o % 2 != 0) {
    throw new TypeError("Invalid hex string");
  }
  if (r > o / 2) {
    r = o / 2;
  }
  for (var a = 0; a < r; ++a) {
    var s = parseInt(e.substr(a * 2, 2), 16);
    if (isNaN(s)) {
      return a;
    }
    t[n + a] = s;
  }
  return a;
}
function v(t, e, n, r) {
  return q(B(e, t.length - n), t, n, r);
}
function _(t, e, n, r) {
  return q(function (t) {
    var e = [];
    for (var n = 0; n < t.length; ++n) {
      e.push(t.charCodeAt(n) & 255);
    }
    return e;
  }(e), t, n, r);
}
function E(t, e, n, r) {
  return _(t, e, n, r);
}
function x(t, e, n, r) {
  return q($(e), t, n, r);
}
function T(t, e, n, r) {
  return q(function (t, e) {
    var n;
    var r;
    var i;
    var o = [];
    for (var a = 0; a < t.length && !((e -= 2) < 0); ++a) {
      n = t.charCodeAt(a);
      r = n >> 8;
      i = n % 256;
      o.push(i);
      o.push(r);
    }
    return o;
  }(e, t.length - n), t, n, r);
}
function I(t, e, n) {
  if (e === 0 && n === t.length) {
    return r.fromByteArray(t);
  } else {
    return r.fromByteArray(t.slice(e, n));
  }
}
function O(t, e, n) {
  n = Math.min(t.length, n);
  var r = [];
  for (var i = e; i < n;) {
    var o;
    var a;
    var s;
    var c;
    var u = t[i];
    var l = null;
    var f = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
    if (i + f <= n) {
      switch (f) {
        case 1:
          if (u < 128) {
            l = u;
          }
          break;
        case 2:
          if (((o = t[i + 1]) & 192) == 128 && (c = (u & 31) << 6 | o & 63) > 127) {
            l = c;
          }
          break;
        case 3:
          o = t[i + 1];
          a = t[i + 2];
          if ((o & 192) == 128 && (a & 192) == 128 && (c = (u & 15) << 12 | (o & 63) << 6 | a & 63) > 2047 && (c < 55296 || c > 57343)) {
            l = c;
          }
          break;
        case 4:
          o = t[i + 1];
          a = t[i + 2];
          s = t[i + 3];
          if ((o & 192) == 128 && (a & 192) == 128 && (s & 192) == 128 && (c = (u & 15) << 18 | (o & 63) << 12 | (a & 63) << 6 | s & 63) > 65535 && c < 1114112) {
            l = c;
          }
      }
    }
    if (l === null) {
      l = 65533;
      f = 1;
    } else if (l > 65535) {
      l -= 65536;
      r.push(l >>> 10 & 1023 | 55296);
      l = l & 1023 | 56320;
    }
    r.push(l);
    i += f;
  }
  return function (t) {
    var e = t.length;
    if (e <= 4096) {
      return String.fromCharCode.apply(String, t);
    }
    var n = "";
    var r = 0;
    while (r < e) {
      n += String.fromCharCode.apply(String, t.slice(r, r += 4096));
    }
    return n;
  }(r);
}
exports.Buffer = c;
exports.SlowBuffer = function (t) {
  if (+t != t) {
    t = 0;
  }
  return c.alloc(+t);
};
exports.INSPECT_MAX_BYTES = 50;
c.TYPED_ARRAY_SUPPORT = t.TYPED_ARRAY_SUPPORT !== undefined ? t.TYPED_ARRAY_SUPPORT : function () {
  try {
    var t = new Uint8Array(1);
    t.__proto__ = {
      __proto__: Uint8Array.prototype,
      foo: function () {
        return 42;
      }
    };
    return t.foo() === 42 && typeof t.subarray == "function" && t.subarray(1, 1).byteLength === 0;
  } catch (t) {
    return false;
  }
}();
exports.kMaxLength = a();
c.poolSize = 8192;
c._augment = function (t) {
  t.__proto__ = c.prototype;
  return t;
};
c.from = function (t, e, n) {
  return u(null, t, e, n);
};
if (c.TYPED_ARRAY_SUPPORT) {
  c.prototype.__proto__ = Uint8Array.prototype;
  c.__proto__ = Uint8Array;
  if (typeof Symbol != "undefined" && Symbol.species && c[Symbol.species] === c) {
    Object.defineProperty(c, Symbol.species, {
      value: null,
      configurable: true
    });
  }
}
c.alloc = function (t, e, n) {
  return function (t, e, n, r) {
    l(e);
    if (e <= 0) {
      return s(t, e);
    } else if (n !== undefined) {
      if (typeof r == "string") {
        return s(t, e).fill(n, r);
      } else {
        return s(t, e).fill(n);
      }
    } else {
      return s(t, e);
    }
  }(null, t, e, n);
};
c.allocUnsafe = function (t) {
  return f(null, t);
};
c.allocUnsafeSlow = function (t) {
  return f(null, t);
};
c.isBuffer = function (t) {
  return t != null && !!t._isBuffer;
};
c.compare = function (t, e) {
  if (!c.isBuffer(t) || !c.isBuffer(e)) {
    throw new TypeError("Arguments must be Buffers");
  }
  if (t === e) {
    return 0;
  }
  var n = t.length;
  var r = e.length;
  for (var i = 0, o = Math.min(n, r); i < o; ++i) {
    if (t[i] !== e[i]) {
      n = t[i];
      r = e[i];
      break;
    }
  }
  if (n < r) {
    return -1;
  } else if (r < n) {
    return 1;
  } else {
    return 0;
  }
};
c.isEncoding = function (t) {
  switch (String(t).toLowerCase()) {
    case "hex":
    case "utf8":
    case "utf-8":
    case "ascii":
    case "latin1":
    case "binary":
    case "base64":
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      return true;
    default:
      return false;
  }
};
c.concat = function (t, e) {
  if (!o(t)) {
    throw new TypeError("\"list\" argument must be an Array of Buffers");
  }
  if (t.length === 0) {
    return c.alloc(0);
  }
  var n;
  if (e === undefined) {
    e = 0;
    n = 0;
    for (; n < t.length; ++n) {
      e += t[n].length;
    }
  }
  var r = c.allocUnsafe(e);
  var i = 0;
  for (n = 0; n < t.length; ++n) {
    var a = t[n];
    if (!c.isBuffer(a)) {
      throw new TypeError("\"list\" argument must be an Array of Buffers");
    }
    a.copy(r, i);
    i += a.length;
  }
  return r;
};
c.byteLength = d;
c.prototype._isBuffer = true;
c.prototype.swap16 = function () {
  var t = this.length;
  if (t % 2 != 0) {
    throw new RangeError("Buffer size must be a multiple of 16-bits");
  }
  for (var e = 0; e < t; e += 2) {
    g(this, e, e + 1);
  }
  return this;
};
c.prototype.swap32 = function () {
  var t = this.length;
  if (t % 4 != 0) {
    throw new RangeError("Buffer size must be a multiple of 32-bits");
  }
  for (var e = 0; e < t; e += 4) {
    g(this, e, e + 3);
    g(this, e + 1, e + 2);
  }
  return this;
};
c.prototype.swap64 = function () {
  var t = this.length;
  if (t % 8 != 0) {
    throw new RangeError("Buffer size must be a multiple of 64-bits");
  }
  for (var e = 0; e < t; e += 8) {
    g(this, e, e + 7);
    g(this, e + 1, e + 6);
    g(this, e + 2, e + 5);
    g(this, e + 3, e + 4);
  }
  return this;
};
c.prototype.toString = function () {
  var t = this.length | 0;
  if (t === 0) {
    return "";
  } else if (arguments.length === 0) {
    return O(this, 0, t);
  } else {
    return m.apply(this, arguments);
  }
};
c.prototype.equals = function (t) {
  if (!c.isBuffer(t)) {
    throw new TypeError("Argument must be a Buffer");
  }
  return this === t || c.compare(this, t) === 0;
};
c.prototype.inspect = function () {
  var t = "";
  var n = exports.INSPECT_MAX_BYTES;
  if (this.length > 0) {
    t = this.toString("hex", 0, n).match(/.{2}/g).join(" ");
    if (this.length > n) {
      t += " ... ";
    }
  }
  return "<Buffer " + t + ">";
};
c.prototype.compare = function (t, e, n, r, i) {
  if (!c.isBuffer(t)) {
    throw new TypeError("Argument must be a Buffer");
  }
  if (e === undefined) {
    e = 0;
  }
  if (n === undefined) {
    n = t ? t.length : 0;
  }
  if (r === undefined) {
    r = 0;
  }
  if (i === undefined) {
    i = this.length;
  }
  if (e < 0 || n > t.length || r < 0 || i > this.length) {
    throw new RangeError("out of range index");
  }
  if (r >= i && e >= n) {
    return 0;
  }
  if (r >= i) {
    return -1;
  }
  if (e >= n) {
    return 1;
  }
  if (this === t) {
    return 0;
  }
  var o = (i >>>= 0) - (r >>>= 0);
  var a = (n >>>= 0) - (e >>>= 0);
  for (var s = Math.min(o, a), u = this.slice(r, i), l = t.slice(e, n), f = 0; f < s; ++f) {
    if (u[f] !== l[f]) {
      o = u[f];
      a = l[f];
      break;
    }
  }
  if (o < a) {
    return -1;
  } else if (a < o) {
    return 1;
  } else {
    return 0;
  }
};
c.prototype.includes = function (t, e, n) {
  return this.indexOf(t, e, n) !== -1;
};
c.prototype.indexOf = function (t, e, n) {
  return y(this, t, e, n, true);
};
c.prototype.lastIndexOf = function (t, e, n) {
  return y(this, t, e, n, false);
};
c.prototype.write = function (t, e, n, r) {
  if (e === undefined) {
    r = "utf8";
    n = this.length;
    e = 0;
  } else if (n === undefined && typeof e == "string") {
    r = e;
    n = this.length;
    e = 0;
  } else {
    if (!isFinite(e)) {
      throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    }
    e |= 0;
    if (isFinite(n)) {
      n |= 0;
      if (r === undefined) {
        r = "utf8";
      }
    } else {
      r = n;
      n = undefined;
    }
  }
  var i = this.length - e;
  if (n === undefined || n > i) {
    n = i;
  }
  if (t.length > 0 && (n < 0 || e < 0) || e > this.length) {
    throw new RangeError("Attempt to write outside buffer bounds");
  }
  r ||= "utf8";
  var o = false;
  while (true) {
    switch (r) {
      case "hex":
        return w(this, t, e, n);
      case "utf8":
      case "utf-8":
        return v(this, t, e, n);
      case "ascii":
        return _(this, t, e, n);
      case "latin1":
      case "binary":
        return E(this, t, e, n);
      case "base64":
        return x(this, t, e, n);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return T(this, t, e, n);
      default:
        if (o) {
          throw new TypeError("Unknown encoding: " + r);
        }
        r = ("" + r).toLowerCase();
        o = true;
    }
  }
};
c.prototype.toJSON = function () {
  return {
    type: "Buffer",
    data: Array.prototype.slice.call(this._arr || this, 0)
  };
};
function S(t, e, n) {
  var r = "";
  n = Math.min(t.length, n);
  for (var i = e; i < n; ++i) {
    r += String.fromCharCode(t[i] & 127);
  }
  return r;
}
function A(t, e, n) {
  var r = "";
  n = Math.min(t.length, n);
  for (var i = e; i < n; ++i) {
    r += String.fromCharCode(t[i]);
  }
  return r;
}
function N(t, e, n) {
  var r = t.length;
  if (!e || e < 0) {
    e = 0;
  }
  if (!n || n < 0 || n > r) {
    n = r;
  }
  var i = "";
  for (var o = e; o < n; ++o) {
    i += U(t[o]);
  }
  return i;
}
function j(t, e, n) {
  for (var r = t.slice(e, n), i = "", o = 0; o < r.length; o += 2) {
    i += String.fromCharCode(r[o] + r[o + 1] * 256);
  }
  return i;
}
function C(t, e, n) {
  if (t % 1 != 0 || t < 0) {
    throw new RangeError("offset is not uint");
  }
  if (t + e > n) {
    throw new RangeError("Trying to access beyond buffer length");
  }
}
function D(t, e, n, r, i, o) {
  if (!c.isBuffer(t)) {
    throw new TypeError("\"buffer\" argument must be a Buffer instance");
  }
  if (e > i || e < o) {
    throw new RangeError("\"value\" argument is out of bounds");
  }
  if (n + r > t.length) {
    throw new RangeError("Index out of range");
  }
}
function k(t, e, n, r) {
  if (e < 0) {
    e = 65535 + e + 1;
  }
  for (var i = 0, o = Math.min(t.length - n, 2); i < o; ++i) {
    t[n + i] = (e & 255 << (r ? i : 1 - i) * 8) >>> (r ? i : 1 - i) * 8;
  }
}
function R(t, e, n, r) {
  if (e < 0) {
    e = 4294967295 + e + 1;
  }
  for (var i = 0, o = Math.min(t.length - n, 4); i < o; ++i) {
    t[n + i] = e >>> (r ? i : 3 - i) * 8 & 255;
  }
}
function L(t, e, n, r, i, o) {
  if (n + r > t.length) {
    throw new RangeError("Index out of range");
  }
  if (n < 0) {
    throw new RangeError("Index out of range");
  }
}
function P(t, e, n, r, o) {
  if (!o) {
    L(t, 0, n, 4);
  }
  i.write(t, e, n, r, 23, 4);
  return n + 4;
}
function M(t, e, n, r, o) {
  if (!o) {
    L(t, 0, n, 8);
  }
  i.write(t, e, n, r, 52, 8);
  return n + 8;
}
c.prototype.slice = function (t, e) {
  var n;
  var r = this.length;
  if ((t = ~~t) < 0) {
    if ((t += r) < 0) {
      t = 0;
    }
  } else if (t > r) {
    t = r;
  }
  if ((e = e === undefined ? r : ~~e) < 0) {
    if ((e += r) < 0) {
      e = 0;
    }
  } else if (e > r) {
    e = r;
  }
  if (e < t) {
    e = t;
  }
  if (c.TYPED_ARRAY_SUPPORT) {
    (n = this.subarray(t, e)).__proto__ = c.prototype;
  } else {
    var i = e - t;
    n = new c(i, undefined);
    for (var o = 0; o < i; ++o) {
      n[o] = this[o + t];
    }
  }
  return n;
};
c.prototype.readUIntLE = function (t, e, n) {
  t |= 0;
  e |= 0;
  if (!n) {
    C(t, e, this.length);
  }
  var r = this[t];
  for (var i = 1, o = 0; ++o < e && (i *= 256);) {
    r += this[t + o] * i;
  }
  return r;
};
c.prototype.readUIntBE = function (t, e, n) {
  t |= 0;
  e |= 0;
  if (!n) {
    C(t, e, this.length);
  }
  var r = this[t + --e];
  for (var i = 1; e > 0 && (i *= 256);) {
    r += this[t + --e] * i;
  }
  return r;
};
c.prototype.readUInt8 = function (t, e) {
  if (!e) {
    C(t, 1, this.length);
  }
  return this[t];
};
c.prototype.readUInt16LE = function (t, e) {
  if (!e) {
    C(t, 2, this.length);
  }
  return this[t] | this[t + 1] << 8;
};
c.prototype.readUInt16BE = function (t, e) {
  if (!e) {
    C(t, 2, this.length);
  }
  return this[t] << 8 | this[t + 1];
};
c.prototype.readUInt32LE = function (t, e) {
  if (!e) {
    C(t, 4, this.length);
  }
  return (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + this[t + 3] * 16777216;
};
c.prototype.readUInt32BE = function (t, e) {
  if (!e) {
    C(t, 4, this.length);
  }
  return this[t] * 16777216 + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);
};
c.prototype.readIntLE = function (t, e, n) {
  t |= 0;
  e |= 0;
  if (!n) {
    C(t, e, this.length);
  }
  var r = this[t];
  for (var i = 1, o = 0; ++o < e && (i *= 256);) {
    r += this[t + o] * i;
  }
  if (r >= (i *= 128)) {
    r -= Math.pow(2, e * 8);
  }
  return r;
};
c.prototype.readIntBE = function (t, e, n) {
  t |= 0;
  e |= 0;
  if (!n) {
    C(t, e, this.length);
  }
  for (var r = e, i = 1, o = this[t + --r]; r > 0 && (i *= 256);) {
    o += this[t + --r] * i;
  }
  if (o >= (i *= 128)) {
    o -= Math.pow(2, e * 8);
  }
  return o;
};
c.prototype.readInt8 = function (t, e) {
  if (!e) {
    C(t, 1, this.length);
  }
  if (this[t] & 128) {
    return (255 - this[t] + 1) * -1;
  } else {
    return this[t];
  }
};
c.prototype.readInt16LE = function (t, e) {
  if (!e) {
    C(t, 2, this.length);
  }
  var n = this[t] | this[t + 1] << 8;
  if (n & 32768) {
    return n | -65536;
  } else {
    return n;
  }
};
c.prototype.readInt16BE = function (t, e) {
  if (!e) {
    C(t, 2, this.length);
  }
  var n = this[t + 1] | this[t] << 8;
  if (n & 32768) {
    return n | -65536;
  } else {
    return n;
  }
};
c.prototype.readInt32LE = function (t, e) {
  if (!e) {
    C(t, 4, this.length);
  }
  return this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;
};
c.prototype.readInt32BE = function (t, e) {
  if (!e) {
    C(t, 4, this.length);
  }
  return this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];
};
c.prototype.readFloatLE = function (t, e) {
  if (!e) {
    C(t, 4, this.length);
  }
  return i.read(this, t, true, 23, 4);
};
c.prototype.readFloatBE = function (t, e) {
  if (!e) {
    C(t, 4, this.length);
  }
  return i.read(this, t, false, 23, 4);
};
c.prototype.readDoubleLE = function (t, e) {
  if (!e) {
    C(t, 8, this.length);
  }
  return i.read(this, t, true, 52, 8);
};
c.prototype.readDoubleBE = function (t, e) {
  if (!e) {
    C(t, 8, this.length);
  }
  return i.read(this, t, false, 52, 8);
};
c.prototype.writeUIntLE = function (t, e, n, r) {
  if (!(t = +t, e |= 0, n |= 0, r)) {
    D(this, t, e, n, Math.pow(2, n * 8) - 1, 0);
  }
  var i = 1;
  var o = 0;
  for (this[e] = t & 255; ++o < n && (i *= 256);) {
    this[e + o] = t / i & 255;
  }
  return e + n;
};
c.prototype.writeUIntBE = function (t, e, n, r) {
  if (!(t = +t, e |= 0, n |= 0, r)) {
    D(this, t, e, n, Math.pow(2, n * 8) - 1, 0);
  }
  var i = n - 1;
  var o = 1;
  for (this[e + i] = t & 255; --i >= 0 && (o *= 256);) {
    this[e + i] = t / o & 255;
  }
  return e + n;
};
c.prototype.writeUInt8 = function (t, e, n) {
  t = +t;
  e |= 0;
  if (!n) {
    D(this, t, e, 1, 255, 0);
  }
  if (!c.TYPED_ARRAY_SUPPORT) {
    t = Math.floor(t);
  }
  this[e] = t & 255;
  return e + 1;
};
c.prototype.writeUInt16LE = function (t, e, n) {
  t = +t;
  e |= 0;
  if (!n) {
    D(this, t, e, 2, 65535, 0);
  }
  if (c.TYPED_ARRAY_SUPPORT) {
    this[e] = t & 255;
    this[e + 1] = t >>> 8;
  } else {
    k(this, t, e, true);
  }
  return e + 2;
};
c.prototype.writeUInt16BE = function (t, e, n) {
  t = +t;
  e |= 0;
  if (!n) {
    D(this, t, e, 2, 65535, 0);
  }
  if (c.TYPED_ARRAY_SUPPORT) {
    this[e] = t >>> 8;
    this[e + 1] = t & 255;
  } else {
    k(this, t, e, false);
  }
  return e + 2;
};
c.prototype.writeUInt32LE = function (t, e, n) {
  t = +t;
  e |= 0;
  if (!n) {
    D(this, t, e, 4, 4294967295, 0);
  }
  if (c.TYPED_ARRAY_SUPPORT) {
    this[e + 3] = t >>> 24;
    this[e + 2] = t >>> 16;
    this[e + 1] = t >>> 8;
    this[e] = t & 255;
  } else {
    R(this, t, e, true);
  }
  return e + 4;
};
c.prototype.writeUInt32BE = function (t, e, n) {
  t = +t;
  e |= 0;
  if (!n) {
    D(this, t, e, 4, 4294967295, 0);
  }
  if (c.TYPED_ARRAY_SUPPORT) {
    this[e] = t >>> 24;
    this[e + 1] = t >>> 16;
    this[e + 2] = t >>> 8;
    this[e + 3] = t & 255;
  } else {
    R(this, t, e, false);
  }
  return e + 4;
};
c.prototype.writeIntLE = function (t, e, n, r) {
  t = +t;
  e |= 0;
  if (!r) {
    var i = Math.pow(2, n * 8 - 1);
    D(this, t, e, n, i - 1, -i);
  }
  var o = 0;
  var a = 1;
  var s = 0;
  for (this[e] = t & 255; ++o < n && (a *= 256);) {
    if (t < 0 && s === 0 && this[e + o - 1] !== 0) {
      s = 1;
    }
    this[e + o] = (t / a >> 0) - s & 255;
  }
  return e + n;
};
c.prototype.writeIntBE = function (t, e, n, r) {
  t = +t;
  e |= 0;
  if (!r) {
    var i = Math.pow(2, n * 8 - 1);
    D(this, t, e, n, i - 1, -i);
  }
  var o = n - 1;
  var a = 1;
  var s = 0;
  for (this[e + o] = t & 255; --o >= 0 && (a *= 256);) {
    if (t < 0 && s === 0 && this[e + o + 1] !== 0) {
      s = 1;
    }
    this[e + o] = (t / a >> 0) - s & 255;
  }
  return e + n;
};
c.prototype.writeInt8 = function (t, e, n) {
  t = +t;
  e |= 0;
  if (!n) {
    D(this, t, e, 1, 127, -128);
  }
  if (!c.TYPED_ARRAY_SUPPORT) {
    t = Math.floor(t);
  }
  if (t < 0) {
    t = 255 + t + 1;
  }
  this[e] = t & 255;
  return e + 1;
};
c.prototype.writeInt16LE = function (t, e, n) {
  t = +t;
  e |= 0;
  if (!n) {
    D(this, t, e, 2, 32767, -32768);
  }
  if (c.TYPED_ARRAY_SUPPORT) {
    this[e] = t & 255;
    this[e + 1] = t >>> 8;
  } else {
    k(this, t, e, true);
  }
  return e + 2;
};
c.prototype.writeInt16BE = function (t, e, n) {
  t = +t;
  e |= 0;
  if (!n) {
    D(this, t, e, 2, 32767, -32768);
  }
  if (c.TYPED_ARRAY_SUPPORT) {
    this[e] = t >>> 8;
    this[e + 1] = t & 255;
  } else {
    k(this, t, e, false);
  }
  return e + 2;
};
c.prototype.writeInt32LE = function (t, e, n) {
  t = +t;
  e |= 0;
  if (!n) {
    D(this, t, e, 4, 2147483647, -2147483648);
  }
  if (c.TYPED_ARRAY_SUPPORT) {
    this[e] = t & 255;
    this[e + 1] = t >>> 8;
    this[e + 2] = t >>> 16;
    this[e + 3] = t >>> 24;
  } else {
    R(this, t, e, true);
  }
  return e + 4;
};
c.prototype.writeInt32BE = function (t, e, n) {
  t = +t;
  e |= 0;
  if (!n) {
    D(this, t, e, 4, 2147483647, -2147483648);
  }
  if (t < 0) {
    t = 4294967295 + t + 1;
  }
  if (c.TYPED_ARRAY_SUPPORT) {
    this[e] = t >>> 24;
    this[e + 1] = t >>> 16;
    this[e + 2] = t >>> 8;
    this[e + 3] = t & 255;
  } else {
    R(this, t, e, false);
  }
  return e + 4;
};
c.prototype.writeFloatLE = function (t, e, n) {
  return P(this, t, e, true, n);
};
c.prototype.writeFloatBE = function (t, e, n) {
  return P(this, t, e, false, n);
};
c.prototype.writeDoubleLE = function (t, e, n) {
  return M(this, t, e, true, n);
};
c.prototype.writeDoubleBE = function (t, e, n) {
  return M(this, t, e, false, n);
};
c.prototype.copy = function (t, e, n, r) {
  n ||= 0;
  if (!r && r !== 0) {
    r = this.length;
  }
  if (e >= t.length) {
    e = t.length;
  }
  e ||= 0;
  if (r > 0 && r < n) {
    r = n;
  }
  if (r === n) {
    return 0;
  }
  if (t.length === 0 || this.length === 0) {
    return 0;
  }
  if (e < 0) {
    throw new RangeError("targetStart out of bounds");
  }
  if (n < 0 || n >= this.length) {
    throw new RangeError("sourceStart out of bounds");
  }
  if (r < 0) {
    throw new RangeError("sourceEnd out of bounds");
  }
  if (r > this.length) {
    r = this.length;
  }
  if (t.length - e < r - n) {
    r = t.length - e + n;
  }
  var i;
  var o = r - n;
  if (this === t && n < e && e < r) {
    for (i = o - 1; i >= 0; --i) {
      t[i + e] = this[i + n];
    }
  } else if (o < 1000 || !c.TYPED_ARRAY_SUPPORT) {
    for (i = 0; i < o; ++i) {
      t[i + e] = this[i + n];
    }
  } else {
    Uint8Array.prototype.set.call(t, this.subarray(n, n + o), e);
  }
  return o;
};
c.prototype.fill = function (t, e, n, r) {
  if (typeof t == "string") {
    if (typeof e == "string") {
      r = e;
      e = 0;
      n = this.length;
    } else if (typeof n == "string") {
      r = n;
      n = this.length;
    }
    if (t.length === 1) {
      var i = t.charCodeAt(0);
      if (i < 256) {
        t = i;
      }
    }
    if (r !== undefined && typeof r != "string") {
      throw new TypeError("encoding must be a string");
    }
    if (typeof r == "string" && !c.isEncoding(r)) {
      throw new TypeError("Unknown encoding: " + r);
    }
  } else if (typeof t == "number") {
    t &= 255;
  }
  if (e < 0 || this.length < e || this.length < n) {
    throw new RangeError("Out of range index");
  }
  if (n <= e) {
    return this;
  }
  var o;
  e >>>= 0;
  n = n === undefined ? this.length : n >>> 0;
  t ||= 0;
  if (typeof t == "number") {
    for (o = e; o < n; ++o) {
      this[o] = t;
    }
  } else {
    var a = c.isBuffer(t) ? t : B(new c(t, r).toString());
    var s = a.length;
    for (o = 0; o < n - e; ++o) {
      this[o + e] = a[o % s];
    }
  }
  return this;
};
var F = /[^+\/0-9A-Za-z-_]/g;
function U(t) {
  if (t < 16) {
    return "0" + t.toString(16);
  } else {
    return t.toString(16);
  }
}
function B(t, e) {
  var n;
  e = e || Infinity;
  for (var r = t.length, i = null, o = [], a = 0; a < r; ++a) {
    if ((n = t.charCodeAt(a)) > 55295 && n < 57344) {
      if (!i) {
        if (n > 56319) {
          if ((e -= 3) > -1) {
            o.push(239, 191, 189);
          }
          continue;
        }
        if (a + 1 === r) {
          if ((e -= 3) > -1) {
            o.push(239, 191, 189);
          }
          continue;
        }
        i = n;
        continue;
      }
      if (n < 56320) {
        if ((e -= 3) > -1) {
          o.push(239, 191, 189);
        }
        i = n;
        continue;
      }
      n = 65536 + (i - 55296 << 10 | n - 56320);
    } else if (i && (e -= 3) > -1) {
      o.push(239, 191, 189);
    }
    i = null;
    if (n < 128) {
      if ((e -= 1) < 0) {
        break;
      }
      o.push(n);
    } else if (n < 2048) {
      if ((e -= 2) < 0) {
        break;
      }
      o.push(n >> 6 | 192, n & 63 | 128);
    } else if (n < 65536) {
      if ((e -= 3) < 0) {
        break;
      }
      o.push(n >> 12 | 224, n >> 6 & 63 | 128, n & 63 | 128);
    } else {
      if (!(n < 1114112)) {
        throw new Error("Invalid code point");
      }
      if ((e -= 4) < 0) {
        break;
      }
      o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, n & 63 | 128);
    }
  }
  return o;
}
function $(t) {
  return r.toByteArray(function (t) {
    if ((t = function (t) {
      if (t.trim) {
        return t.trim();
      } else {
        return t.replace(/^\s+|\s+$/g, "");
      }
    }(t).replace(F, "")).length < 2) {
      return "";
    }
    while (t.length % 4 != 0) {
      t += "=";
    }
    return t;
  }(t));
}
function q(t, e, n, r) {
  for (var i = 0; i < r && !(i + n >= e.length) && !(i >= t.length); ++i) {
    e[i + n] = t[i];
  }
  return i;
}