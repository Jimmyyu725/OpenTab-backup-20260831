var n = require(/*webcrack:missing*/"./3829.js");
var o = require("./7796.js");
var a = require("./7132.js");
function i(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function") {
    throw new TypeError("Expected a function");
  }
  function r() {
    var n = arguments;
    var o = t ? t.apply(this, n) : n[0];
    var a = r.cache;
    if (a.has(o)) {
      return a.get(o);
    }
    var i = e.apply(this, n);
    r.cache = a.set(o, i) || a;
    return i;
  }
  r.cache = new (i.Cache || a.Z)();
  return r;
}
i.Cache = a.Z;
const c = i;
var s = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var l = /\\(\\)?/g;
const u = function (e) {
  var t = c(e, function (e) {
    if (r.size === 500) {
      r.clear();
    }
    return e;
  });
  var r = t.cache;
  return t;
}(function (e) {
  var t = [];
  if (e.charCodeAt(0) === 46) {
    t.push("");
  }
  e.replace(s, function (e, r, n, o) {
    t.push(n ? o.replace(l, "$1") : r || e);
  });
  return t;
});
var f = require(/*webcrack:missing*/"./6223.js");
export const Z = function (e, t) {
  if ((0, n.Z)(e)) {
    return e;
  } else if ((0, o.Z)(e, t)) {
    return [e];
  } else {
    return u((0, f.Z)(e));
  }
};