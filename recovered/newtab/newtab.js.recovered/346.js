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
  var a = r[0];
  var s = r[1];
  var c = new o(function (t, e, n) {
    return (e + n) * 3 / 4 - n;
  }(0, a, s));
  var l = 0;
  var f = s > 0 ? a - 4 : a;
  for (n = 0; n < f; n += 4) {
    e = i[t.charCodeAt(n)] << 18 | i[t.charCodeAt(n + 1)] << 12 | i[t.charCodeAt(n + 2)] << 6 | i[t.charCodeAt(n + 3)];
    c[l++] = e >> 16 & 255;
    c[l++] = e >> 8 & 255;
    c[l++] = e & 255;
  }
  if (s === 2) {
    e = i[t.charCodeAt(n)] << 2 | i[t.charCodeAt(n + 1)] >> 4;
    c[l++] = e & 255;
  }
  if (s === 1) {
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
  for (var a = 0, s = n - i; a < s; a += 16383) {
    o.push(l(t, a, a + 16383 > s ? s : a + 16383));
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
var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var s = 0, c = a.length; s < c; ++s) {
  r[s] = a[s];
  i[a.charCodeAt(s)] = s;
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
  var a = [];
  for (var s = e; s < n; s += 3) {
    i = (t[s] << 16 & 16711680) + (t[s + 1] << 8 & 65280) + (t[s + 2] & 255);
    a.push(r[(o = i) >> 18 & 63] + r[o >> 12 & 63] + r[o >> 6 & 63] + r[o & 63]);
  }
  return a.join("");
}
i["-".charCodeAt(0)] = 62;
i["_".charCodeAt(0)] = 63;