var t = require(/*webcrack:missing*/"./25.js");
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
var r = require("./346.js");
var o = require("./347.js");
var i = require("./240.js");
function s() {
  if (c.TYPED_ARRAY_SUPPORT) {
    return 2147483647;
  } else {
    return 1073741823;
  }
}
function a(t, e) {
  if (s() < e) {
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
    return h(this, t);
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
        t = p(t, e);
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
      var o = (t = a(t, r)).write(e, n);
      if (o !== r) {
        t = t.slice(0, o);
      }
      return t;
    }(t, e, n);
  } else {
    return function (t, e) {
      if (c.isBuffer(e)) {
        var n = f(e.length) | 0;
        if ((t = a(t, n)).length !== 0) {
          e.copy(t, 0, 0, n);
        }
        return t;
      }
      if (e) {
        if (typeof ArrayBuffer != "undefined" && e.buffer instanceof ArrayBuffer || "length" in e) {
          if (typeof e.length != "number" || (r = e.length) != r) {
            return a(t, 0);
          } else {
            return p(t, e);
          }
        }
        if (e.type === "Buffer" && i(e.data)) {
          return p(t, e.data);
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
function h(t, e) {
  l(e);
  t = a(t, e < 0 ? 0 : f(e) | 0);
  if (!c.TYPED_ARRAY_SUPPORT) {
    for (var n = 0; n < e; ++n) {
      t[n] = 0;
    }
  }
  return t;
}
function p(t, e) {
  var n = e.length < 0 ? 0 : f(e.length) | 0;
  t = a(t, n);
  for (var r = 0; r < n; r += 1) {
    t[r] = e[r] & 255;
  }
  return t;
}
function f(t) {
  if (t >= s()) {
    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s().toString(16) + " bytes");
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
  for (;;) {
    switch (e) {
      case "ascii":
      case "latin1":
      case "binary":
        return n;
      case "utf8":
      case "utf-8":
      case undefined:
        return F(t).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return n * 2;
      case "hex":
        return n >>> 1;
      case "base64":
        return q(t).length;
      default:
        if (r) {
          return F(t).length;
        }
        e = ("" + e).toLowerCase();
        r = true;
    }
  }
}
function g(t, e, n) {
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
        return k(this, e, n);
      case "utf8":
      case "utf-8":
        return O(this, e, n);
      case "ascii":
        return I(this, e, n);
      case "latin1":
      case "binary":
        return A(this, e, n);
      case "base64":
        return S(this, e, n);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return C(this, e, n);
      default:
        if (r) {
          throw new TypeError("Unknown encoding: " + t);
        }
        t = (t + "").toLowerCase();
        r = true;
    }
  }
}
function y(t, e, n) {
  var r = t[e];
  t[e] = t[n];
  t[n] = r;
}
function m(t, e, n, r, o) {
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
    n = o ? 0 : t.length - 1;
  }
  if (n < 0) {
    n = t.length + n;
  }
  if (n >= t.length) {
    if (o) {
      return -1;
    }
    n = t.length - 1;
  } else if (n < 0) {
    if (!o) {
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
      return b(t, e, n, r, o);
    }
  }
  if (typeof e == "number") {
    e &= 255;
    if (c.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf == "function") {
      if (o) {
        return Uint8Array.prototype.indexOf.call(t, e, n);
      } else {
        return Uint8Array.prototype.lastIndexOf.call(t, e, n);
      }
    } else {
      return b(t, [e], n, r, o);
    }
  }
  throw new TypeError("val must be string, number or Buffer");
}
function b(t, e, n, r, o) {
  var i;
  var s = 1;
  var a = t.length;
  var c = e.length;
  if (r !== undefined && ((r = String(r).toLowerCase()) === "ucs2" || r === "ucs-2" || r === "utf16le" || r === "utf-16le")) {
    if (t.length < 2 || e.length < 2) {
      return -1;
    }
    s = 2;
    a /= 2;
    c /= 2;
    n /= 2;
  }
  function u(t, e) {
    if (s === 1) {
      return t[e];
    } else {
      return t.readUInt16BE(e * s);
    }
  }
  if (o) {
    var l = -1;
    for (i = n; i < a; i++) {
      if (u(t, i) === u(e, l === -1 ? 0 : i - l)) {
        if (l === -1) {
          l = i;
        }
        if (i - l + 1 === c) {
          return l * s;
        }
      } else {
        if (l !== -1) {
          i -= i - l;
        }
        l = -1;
      }
    }
  } else {
    if (n + c > a) {
      n = a - c;
    }
    i = n;
    for (; i >= 0; i--) {
      var h = true;
      for (var p = 0; p < c; p++) {
        if (u(t, i + p) !== u(e, p)) {
          h = false;
          break;
        }
      }
      if (h) {
        return i;
      }
    }
  }
  return -1;
}
function w(t, e, n, r) {
  n = Number(n) || 0;
  var o = t.length - n;
  if (r) {
    if ((r = Number(r)) > o) {
      r = o;
    }
  } else {
    r = o;
  }
  var i = e.length;
  if (i % 2 != 0) {
    throw new TypeError("Invalid hex string");
  }
  if (r > i / 2) {
    r = i / 2;
  }
  for (var s = 0; s < r; ++s) {
    var a = parseInt(e.substr(s * 2, 2), 16);
    if (isNaN(a)) {
      return s;
    }
    t[n + s] = a;
  }
  return s;
}
function v(t, e, n, r) {
  return V(F(e, t.length - n), t, n, r);
}
function _(t, e, n, r) {
  return V(function (t) {
    var e = [];
    for (var n = 0; n < t.length; ++n) {
      e.push(t.charCodeAt(n) & 255);
    }
    return e;
  }(e), t, n, r);
}
function T(t, e, n, r) {
  return _(t, e, n, r);
}
function E(t, e, n, r) {
  return V(q(e), t, n, r);
}
function x(t, e, n, r) {
  return V(function (t, e) {
    var n;
    var r;
    var o;
    var i = [];
    for (var s = 0; s < t.length && !((e -= 2) < 0); ++s) {
      n = t.charCodeAt(s);
      r = n >> 8;
      o = n % 256;
      i.push(o);
      i.push(r);
    }
    return i;
  }(e, t.length - n), t, n, r);
}
function S(t, e, n) {
  if (e === 0 && n === t.length) {
    return r.fromByteArray(t);
  } else {
    return r.fromByteArray(t.slice(e, n));
  }
}
function O(t, e, n) {
  n = Math.min(t.length, n);
  var r = [];
  for (var o = e; o < n;) {
    var i;
    var s;
    var a;
    var c;
    var u = t[o];
    var l = null;
    var h = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
    if (o + h <= n) {
      switch (h) {
        case 1:
          if (u < 128) {
            l = u;
          }
          break;
        case 2:
          if (((i = t[o + 1]) & 192) == 128 && (c = (u & 31) << 6 | i & 63) > 127) {
            l = c;
          }
          break;
        case 3:
          i = t[o + 1];
          s = t[o + 2];
          if ((i & 192) == 128 && (s & 192) == 128 && (c = (u & 15) << 12 | (i & 63) << 6 | s & 63) > 2047 && (c < 55296 || c > 57343)) {
            l = c;
          }
          break;
        case 4:
          i = t[o + 1];
          s = t[o + 2];
          a = t[o + 3];
          if ((i & 192) == 128 && (s & 192) == 128 && (a & 192) == 128 && (c = (u & 15) << 18 | (i & 63) << 12 | (s & 63) << 6 | a & 63) > 65535 && c < 1114112) {
            l = c;
          }
      }
    }
    if (l === null) {
      l = 65533;
      h = 1;
    } else if (l > 65535) {
      l -= 65536;
      r.push(l >>> 10 & 1023 | 55296);
      l = l & 1023 | 56320;
    }
    r.push(l);
    o += h;
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
exports.kMaxLength = s();
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
      return a(t, e);
    } else if (n !== undefined) {
      if (typeof r == "string") {
        return a(t, e).fill(n, r);
      } else {
        return a(t, e).fill(n);
      }
    } else {
      return a(t, e);
    }
  }(null, t, e, n);
};
c.allocUnsafe = function (t) {
  return h(null, t);
};
c.allocUnsafeSlow = function (t) {
  return h(null, t);
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
  for (var o = 0, i = Math.min(n, r); o < i; ++o) {
    if (t[o] !== e[o]) {
      n = t[o];
      r = e[o];
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
  if (!i(t)) {
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
  var o = 0;
  for (n = 0; n < t.length; ++n) {
    var s = t[n];
    if (!c.isBuffer(s)) {
      throw new TypeError("\"list\" argument must be an Array of Buffers");
    }
    s.copy(r, o);
    o += s.length;
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
    y(this, e, e + 1);
  }
  return this;
};
c.prototype.swap32 = function () {
  var t = this.length;
  if (t % 4 != 0) {
    throw new RangeError("Buffer size must be a multiple of 32-bits");
  }
  for (var e = 0; e < t; e += 4) {
    y(this, e, e + 3);
    y(this, e + 1, e + 2);
  }
  return this;
};
c.prototype.swap64 = function () {
  var t = this.length;
  if (t % 8 != 0) {
    throw new RangeError("Buffer size must be a multiple of 64-bits");
  }
  for (var e = 0; e < t; e += 8) {
    y(this, e, e + 7);
    y(this, e + 1, e + 6);
    y(this, e + 2, e + 5);
    y(this, e + 3, e + 4);
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
    return g.apply(this, arguments);
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
c.prototype.compare = function (t, e, n, r, o) {
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
  if (o === undefined) {
    o = this.length;
  }
  if (e < 0 || n > t.length || r < 0 || o > this.length) {
    throw new RangeError("out of range index");
  }
  if (r >= o && e >= n) {
    return 0;
  }
  if (r >= o) {
    return -1;
  }
  if (e >= n) {
    return 1;
  }
  if (this === t) {
    return 0;
  }
  var i = (o >>>= 0) - (r >>>= 0);
  var s = (n >>>= 0) - (e >>>= 0);
  for (var a = Math.min(i, s), u = this.slice(r, o), l = t.slice(e, n), h = 0; h < a; ++h) {
    if (u[h] !== l[h]) {
      i = u[h];
      s = l[h];
      break;
    }
  }
  if (i < s) {
    return -1;
  } else if (s < i) {
    return 1;
  } else {
    return 0;
  }
};
c.prototype.includes = function (t, e, n) {
  return this.indexOf(t, e, n) !== -1;
};
c.prototype.indexOf = function (t, e, n) {
  return m(this, t, e, n, true);
};
c.prototype.lastIndexOf = function (t, e, n) {
  return m(this, t, e, n, false);
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
  var o = this.length - e;
  if (n === undefined || n > o) {
    n = o;
  }
  if (t.length > 0 && (n < 0 || e < 0) || e > this.length) {
    throw new RangeError("Attempt to write outside buffer bounds");
  }
  r ||= "utf8";
  var i = false;
  for (;;) {
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
        return T(this, t, e, n);
      case "base64":
        return E(this, t, e, n);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return x(this, t, e, n);
      default:
        if (i) {
          throw new TypeError("Unknown encoding: " + r);
        }
        r = ("" + r).toLowerCase();
        i = true;
    }
  }
};
c.prototype.toJSON = function () {
  return {
    type: "Buffer",
    data: Array.prototype.slice.call(this._arr || this, 0)
  };
};
function I(t, e, n) {
  var r = "";
  n = Math.min(t.length, n);
  for (var o = e; o < n; ++o) {
    r += String.fromCharCode(t[o] & 127);
  }
  return r;
}
function A(t, e, n) {
  var r = "";
  n = Math.min(t.length, n);
  for (var o = e; o < n; ++o) {
    r += String.fromCharCode(t[o]);
  }
  return r;
}
function k(t, e, n) {
  var r = t.length;
  if (!e || e < 0) {
    e = 0;
  }
  if (!n || n < 0 || n > r) {
    n = r;
  }
  var o = "";
  for (var i = e; i < n; ++i) {
    o += U(t[i]);
  }
  return o;
}
function C(t, e, n) {
  for (var r = t.slice(e, n), o = "", i = 0; i < r.length; i += 2) {
    o += String.fromCharCode(r[i] + r[i + 1] * 256);
  }
  return o;
}
function D(t, e, n) {
  if (t % 1 != 0 || t < 0) {
    throw new RangeError("offset is not uint");
  }
  if (t + e > n) {
    throw new RangeError("Trying to access beyond buffer length");
  }
}
function N(t, e, n, r, o, i) {
  if (!c.isBuffer(t)) {
    throw new TypeError("\"buffer\" argument must be a Buffer instance");
  }
  if (e > o || e < i) {
    throw new RangeError("\"value\" argument is out of bounds");
  }
  if (n + r > t.length) {
    throw new RangeError("Index out of range");
  }
}
function j(t, e, n, r) {
  if (e < 0) {
    e = 65535 + e + 1;
  }
  for (var o = 0, i = Math.min(t.length - n, 2); o < i; ++o) {
    t[n + o] = (e & 255 << (r ? o : 1 - o) * 8) >>> (r ? o : 1 - o) * 8;
  }
}
function P(t, e, n, r) {
  if (e < 0) {
    e = 4294967295 + e + 1;
  }
  for (var o = 0, i = Math.min(t.length - n, 4); o < i; ++o) {
    t[n + o] = e >>> (r ? o : 3 - o) * 8 & 255;
  }
}
function L(t, e, n, r, o, i) {
  if (n + r > t.length) {
    throw new RangeError("Index out of range");
  }
  if (n < 0) {
    throw new RangeError("Index out of range");
  }
}
function R(t, e, n, r, i) {
  if (!i) {
    L(t, 0, n, 4);
  }
  o.write(t, e, n, r, 23, 4);
  return n + 4;
}
function M(t, e, n, r, i) {
  if (!i) {
    L(t, 0, n, 8);
  }
  o.write(t, e, n, r, 52, 8);
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
    var o = e - t;
    n = new c(o, undefined);
    for (var i = 0; i < o; ++i) {
      n[i] = this[i + t];
    }
  }
  return n;
};
c.prototype.readUIntLE = function (t, e, n) {
  t |= 0;
  e |= 0;
  if (!n) {
    D(t, e, this.length);
  }
  var r = this[t];
  for (var o = 1, i = 0; ++i < e && (o *= 256);) {
    r += this[t + i] * o;
  }
  return r;
};
c.prototype.readUIntBE = function (t, e, n) {
  t |= 0;
  e |= 0;
  if (!n) {
    D(t, e, this.length);
  }
  var r = this[t + --e];
  for (var o = 1; e > 0 && (o *= 256);) {
    r += this[t + --e] * o;
  }
  return r;
};
c.prototype.readUInt8 = function (t, e) {
  if (!e) {
    D(t, 1, this.length);
  }
  return this[t];
};
c.prototype.readUInt16LE = function (t, e) {
  if (!e) {
    D(t, 2, this.length);
  }
  return this[t] | this[t + 1] << 8;
};
c.prototype.readUInt16BE = function (t, e) {
  if (!e) {
    D(t, 2, this.length);
  }
  return this[t] << 8 | this[t + 1];
};
c.prototype.readUInt32LE = function (t, e) {
  if (!e) {
    D(t, 4, this.length);
  }
  return (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + this[t + 3] * 16777216;
};
c.prototype.readUInt32BE = function (t, e) {
  if (!e) {
    D(t, 4, this.length);
  }
  return this[t] * 16777216 + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);
};
c.prototype.readIntLE = function (t, e, n) {
  t |= 0;
  e |= 0;
  if (!n) {
    D(t, e, this.length);
  }
  var r = this[t];
  for (var o = 1, i = 0; ++i < e && (o *= 256);) {
    r += this[t + i] * o;
  }
  if (r >= (o *= 128)) {
    r -= Math.pow(2, e * 8);
  }
  return r;
};
c.prototype.readIntBE = function (t, e, n) {
  t |= 0;
  e |= 0;
  if (!n) {
    D(t, e, this.length);
  }
  for (var r = e, o = 1, i = this[t + --r]; r > 0 && (o *= 256);) {
    i += this[t + --r] * o;
  }
  if (i >= (o *= 128)) {
    i -= Math.pow(2, e * 8);
  }
  return i;
};
c.prototype.readInt8 = function (t, e) {
  if (!e) {
    D(t, 1, this.length);
  }
  if (this[t] & 128) {
    return (255 - this[t] + 1) * -1;
  } else {
    return this[t];
  }
};
c.prototype.readInt16LE = function (t, e) {
  if (!e) {
    D(t, 2, this.length);
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
    D(t, 2, this.length);
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
    D(t, 4, this.length);
  }
  return this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;
};
c.prototype.readInt32BE = function (t, e) {
  if (!e) {
    D(t, 4, this.length);
  }
  return this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];
};
c.prototype.readFloatLE = function (t, e) {
  if (!e) {
    D(t, 4, this.length);
  }
  return o.read(this, t, true, 23, 4);
};
c.prototype.readFloatBE = function (t, e) {
  if (!e) {
    D(t, 4, this.length);
  }
  return o.read(this, t, false, 23, 4);
};
c.prototype.readDoubleLE = function (t, e) {
  if (!e) {
    D(t, 8, this.length);
  }
  return o.read(this, t, true, 52, 8);
};
c.prototype.readDoubleBE = function (t, e) {
  if (!e) {
    D(t, 8, this.length);
  }
  return o.read(this, t, false, 52, 8);
};
c.prototype.writeUIntLE = function (t, e, n, r) {
  if (!(t = +t, e |= 0, n |= 0, r)) {
    N(this, t, e, n, Math.pow(2, n * 8) - 1, 0);
  }
  var o = 1;
  var i = 0;
  for (this[e] = t & 255; ++i < n && (o *= 256);) {
    this[e + i] = t / o & 255;
  }
  return e + n;
};
c.prototype.writeUIntBE = function (t, e, n, r) {
  if (!(t = +t, e |= 0, n |= 0, r)) {
    N(this, t, e, n, Math.pow(2, n * 8) - 1, 0);
  }
  var o = n - 1;
  var i = 1;
  for (this[e + o] = t & 255; --o >= 0 && (i *= 256);) {
    this[e + o] = t / i & 255;
  }
  return e + n;
};
c.prototype.writeUInt8 = function (t, e, n) {
  t = +t;
  e |= 0;
  if (!n) {
    N(this, t, e, 1, 255, 0);
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
    N(this, t, e, 2, 65535, 0);
  }
  if (c.TYPED_ARRAY_SUPPORT) {
    this[e] = t & 255;
    this[e + 1] = t >>> 8;
  } else {
    j(this, t, e, true);
  }
  return e + 2;
};
c.prototype.writeUInt16BE = function (t, e, n) {
  t = +t;
  e |= 0;
  if (!n) {
    N(this, t, e, 2, 65535, 0);
  }
  if (c.TYPED_ARRAY_SUPPORT) {
    this[e] = t >>> 8;
    this[e + 1] = t & 255;
  } else {
    j(this, t, e, false);
  }
  return e + 2;
};
c.prototype.writeUInt32LE = function (t, e, n) {
  t = +t;
  e |= 0;
  if (!n) {
    N(this, t, e, 4, 4294967295, 0);
  }
  if (c.TYPED_ARRAY_SUPPORT) {
    this[e + 3] = t >>> 24;
    this[e + 2] = t >>> 16;
    this[e + 1] = t >>> 8;
    this[e] = t & 255;
  } else {
    P(this, t, e, true);
  }
  return e + 4;
};
c.prototype.writeUInt32BE = function (t, e, n) {
  t = +t;
  e |= 0;
  if (!n) {
    N(this, t, e, 4, 4294967295, 0);
  }
  if (c.TYPED_ARRAY_SUPPORT) {
    this[e] = t >>> 24;
    this[e + 1] = t >>> 16;
    this[e + 2] = t >>> 8;
    this[e + 3] = t & 255;
  } else {
    P(this, t, e, false);
  }
  return e + 4;
};
c.prototype.writeIntLE = function (t, e, n, r) {
  t = +t;
  e |= 0;
  if (!r) {
    var o = Math.pow(2, n * 8 - 1);
    N(this, t, e, n, o - 1, -o);
  }
  var i = 0;
  var s = 1;
  var a = 0;
  for (this[e] = t & 255; ++i < n && (s *= 256);) {
    if (t < 0 && a === 0 && this[e + i - 1] !== 0) {
      a = 1;
    }
    this[e + i] = (t / s >> 0) - a & 255;
  }
  return e + n;
};
c.prototype.writeIntBE = function (t, e, n, r) {
  t = +t;
  e |= 0;
  if (!r) {
    var o = Math.pow(2, n * 8 - 1);
    N(this, t, e, n, o - 1, -o);
  }
  var i = n - 1;
  var s = 1;
  var a = 0;
  for (this[e + i] = t & 255; --i >= 0 && (s *= 256);) {
    if (t < 0 && a === 0 && this[e + i + 1] !== 0) {
      a = 1;
    }
    this[e + i] = (t / s >> 0) - a & 255;
  }
  return e + n;
};
c.prototype.writeInt8 = function (t, e, n) {
  t = +t;
  e |= 0;
  if (!n) {
    N(this, t, e, 1, 127, -128);
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
    N(this, t, e, 2, 32767, -32768);
  }
  if (c.TYPED_ARRAY_SUPPORT) {
    this[e] = t & 255;
    this[e + 1] = t >>> 8;
  } else {
    j(this, t, e, true);
  }
  return e + 2;
};
c.prototype.writeInt16BE = function (t, e, n) {
  t = +t;
  e |= 0;
  if (!n) {
    N(this, t, e, 2, 32767, -32768);
  }
  if (c.TYPED_ARRAY_SUPPORT) {
    this[e] = t >>> 8;
    this[e + 1] = t & 255;
  } else {
    j(this, t, e, false);
  }
  return e + 2;
};
c.prototype.writeInt32LE = function (t, e, n) {
  t = +t;
  e |= 0;
  if (!n) {
    N(this, t, e, 4, 2147483647, -2147483648);
  }
  if (c.TYPED_ARRAY_SUPPORT) {
    this[e] = t & 255;
    this[e + 1] = t >>> 8;
    this[e + 2] = t >>> 16;
    this[e + 3] = t >>> 24;
  } else {
    P(this, t, e, true);
  }
  return e + 4;
};
c.prototype.writeInt32BE = function (t, e, n) {
  t = +t;
  e |= 0;
  if (!n) {
    N(this, t, e, 4, 2147483647, -2147483648);
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
    P(this, t, e, false);
  }
  return e + 4;
};
c.prototype.writeFloatLE = function (t, e, n) {
  return R(this, t, e, true, n);
};
c.prototype.writeFloatBE = function (t, e, n) {
  return R(this, t, e, false, n);
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
  var o;
  var i = r - n;
  if (this === t && n < e && e < r) {
    for (o = i - 1; o >= 0; --o) {
      t[o + e] = this[o + n];
    }
  } else if (i < 1000 || !c.TYPED_ARRAY_SUPPORT) {
    for (o = 0; o < i; ++o) {
      t[o + e] = this[o + n];
    }
  } else {
    Uint8Array.prototype.set.call(t, this.subarray(n, n + i), e);
  }
  return i;
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
      var o = t.charCodeAt(0);
      if (o < 256) {
        t = o;
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
  var i;
  e >>>= 0;
  n = n === undefined ? this.length : n >>> 0;
  t ||= 0;
  if (typeof t == "number") {
    for (i = e; i < n; ++i) {
      this[i] = t;
    }
  } else {
    var s = c.isBuffer(t) ? t : F(new c(t, r).toString());
    var a = s.length;
    for (i = 0; i < n - e; ++i) {
      this[i + e] = s[i % a];
    }
  }
  return this;
};
var B = /[^+\/0-9A-Za-z-_]/g;
function U(t) {
  if (t < 16) {
    return "0" + t.toString(16);
  } else {
    return t.toString(16);
  }
}
function F(t, e) {
  var n;
  e = e || Infinity;
  for (var r = t.length, o = null, i = [], s = 0; s < r; ++s) {
    if ((n = t.charCodeAt(s)) > 55295 && n < 57344) {
      if (!o) {
        if (n > 56319) {
          if ((e -= 3) > -1) {
            i.push(239, 191, 189);
          }
          continue;
        }
        if (s + 1 === r) {
          if ((e -= 3) > -1) {
            i.push(239, 191, 189);
          }
          continue;
        }
        o = n;
        continue;
      }
      if (n < 56320) {
        if ((e -= 3) > -1) {
          i.push(239, 191, 189);
        }
        o = n;
        continue;
      }
      n = 65536 + (o - 55296 << 10 | n - 56320);
    } else if (o && (e -= 3) > -1) {
      i.push(239, 191, 189);
    }
    o = null;
    if (n < 128) {
      if ((e -= 1) < 0) {
        break;
      }
      i.push(n);
    } else if (n < 2048) {
      if ((e -= 2) < 0) {
        break;
      }
      i.push(n >> 6 | 192, n & 63 | 128);
    } else if (n < 65536) {
      if ((e -= 3) < 0) {
        break;
      }
      i.push(n >> 12 | 224, n >> 6 & 63 | 128, n & 63 | 128);
    } else {
      if (!(n < 1114112)) {
        throw new Error("Invalid code point");
      }
      if ((e -= 4) < 0) {
        break;
      }
      i.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, n & 63 | 128);
    }
  }
  return i;
}
function q(t) {
  return r.toByteArray(function (t) {
    if ((t = function (t) {
      if (t.trim) {
        return t.trim();
      } else {
        return t.replace(/^\s+|\s+$/g, "");
      }
    }(t).replace(B, "")).length < 2) {
      return "";
    }
    while (t.length % 4 != 0) {
      t += "=";
    }
    return t;
  }(t));
}
function V(t, e, n, r) {
  for (var o = 0; o < r && !(o + n >= e.length) && !(o >= t.length); ++o) {
    e[o + n] = t[o];
  }
  return o;
}