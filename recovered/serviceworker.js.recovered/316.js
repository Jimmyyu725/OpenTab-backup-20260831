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
  var c = new i(function (t, e, n) {
    return (e + n) * 3 / 4 - n;
  }(0, s, a));
  var f = 0;
  var l = a > 0 ? s - 4 : s;
  for (n = 0; n < l; n += 4) {
    e = o[t.charCodeAt(n)] << 18 | o[t.charCodeAt(n + 1)] << 12 | o[t.charCodeAt(n + 2)] << 6 | o[t.charCodeAt(n + 3)];
    c[f++] = e >> 16 & 255;
    c[f++] = e >> 8 & 255;
    c[f++] = e & 255;
  }
  if (a === 2) {
    e = o[t.charCodeAt(n)] << 2 | o[t.charCodeAt(n + 1)] >> 4;
    c[f++] = e & 255;
  }
  if (a === 1) {
    e = o[t.charCodeAt(n)] << 10 | o[t.charCodeAt(n + 1)] << 4 | o[t.charCodeAt(n + 2)] >> 2;
    c[f++] = e >> 8 & 255;
    c[f++] = e & 255;
  }
  return c;
};
exports.fromByteArray = function (t) {
  var e;
  var n = t.length;
  var o = n % 3;
  var i = [];
  for (var s = 0, a = n - o; s < a; s += 16383) {
    i.push(f(t, s, s + 16383 > a ? a : s + 16383));
  }
  if (o === 1) {
    e = t[n - 1];
    i.push(r[e >> 2] + r[e << 4 & 63] + "==");
  } else if (o === 2) {
    e = (t[n - 2] << 8) + t[n - 1];
    i.push(r[e >> 10] + r[e >> 4 & 63] + r[e << 2 & 63] + "=");
  }
  return i.join("");
};
var r = [];
var o = [];
var i = typeof Uint8Array != "undefined" ? Uint8Array : Array;
var s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var a = 0, c = s.length; a < c; ++a) {
  r[a] = s[a];
  o[s.charCodeAt(a)] = a;
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
function f(t, e, n) {
  var o;
  var i;
  var s = [];
  for (var a = e; a < n; a += 3) {
    o = (t[a] << 16 & 16711680) + (t[a + 1] << 8 & 65280) + (t[a + 2] & 255);
    s.push(r[(i = o) >> 18 & 63] + r[i >> 12 & 63] + r[i >> 6 & 63] + r[i & 63]);
  }
  return s.join("");
}
o["-".charCodeAt(0)] = 62;
o["_".charCodeAt(0)] = 63;