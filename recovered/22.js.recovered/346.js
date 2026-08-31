exports.byteLength = function (t) {
  var e = u(t);
  var n = e[0];
  var r = e[1];
  return (n + r) * 3 / 4 - r;
};
exports.toByteArray = function (t) {
  var e;
  var n;
  var r = u(t);
  var s = r[0];
  var a = r[1];
  var c = new o(function (t, e, n) {
    return (e + n) * 3 / 4 - n;
  }(0, s, a));
  var l = 0;
  var h = a > 0 ? s - 4 : s;
  for (n = 0; n < h; n += 4) {
    e = i[t.charCodeAt(n)] << 18 | i[t.charCodeAt(n + 1)] << 12 | i[t.charCodeAt(n + 2)] << 6 | i[t.charCodeAt(n + 3)];
    c[l++] = e >> 16 & 255;
    c[l++] = e >> 8 & 255;
    c[l++] = e & 255;
  }
  if (a === 2) {
    e = i[t.charCodeAt(n)] << 2 | i[t.charCodeAt(n + 1)] >> 4;
    c[l++] = e & 255;
  }
  if (a === 1) {
    e = i[t.charCodeAt(n)] << 10 | i[t.charCodeAt(n + 1)] << 4 | i[t.charCodeAt(n + 2)] >> 2;
    c[l++] = e >> 8 & 255;
    c[l++] = e & 255;
  }
  return c;
};
exports.fromByteArray = function (t) {
  var e;
  var n = t.length;
  var i = n % 3;
  var o = [];
  for (var s = 0, a = n - i; s < a; s += 16383) {
    o.push(l(t, s, s + 16383 > a ? a : s + 16383));
  }
  if (i === 1) {
    e = t[n - 1];
    o.push(r[e >> 2] + r[e << 4 & 63] + "==");
  } else if (i === 2) {
    e = (t[n - 2] << 8) + t[n - 1];
    o.push(r[e >> 10] + r[e >> 4 & 63] + r[e << 2 & 63] + "=");
  }
  return o.join("");
};
var r = [];
var i = [];
var o = typeof Uint8Array != "undefined" ? Uint8Array : Array;
var s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var a = 0, c = s.length; a < c; ++a) {
  r[a] = s[a];
  i[s.charCodeAt(a)] = a;
}
function u(t) {
  var e = t.length;
  if (e % 4 > 0) {
    throw new Error("Invalid string. Length must be a multiple of 4");
  }
  var n = t.indexOf("=");
  if (n === -1) {
    n = e;
  }
  return [n, n === e ? 0 : 4 - n % 4];
}
function l(t, e, n) {
  var i;
  var o;
  var s = [];
  for (var a = e; a < n; a += 3) {
    i = (t[a] << 16 & 16711680) + (t[a + 1] << 8 & 65280) + (t[a + 2] & 255);
    s.push(r[(o = i) >> 18 & 63] + r[o >> 12 & 63] + r[o >> 6 & 63] + r[o & 63]);
  }
  return s.join("");
}
i["-".charCodeAt(0)] = 62;
i["_".charCodeAt(0)] = 63;