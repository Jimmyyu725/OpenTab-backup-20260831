var t = require(/*webcrack:missing*/"./25.js");
require("./397.js");
require("./19.js");
require("./64.js");
var r = require("./380.js");
var o = r;
var i = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//;
var s = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i;
var _a = new RegExp("^[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]+");
function c(t) {
  return (t || "").toString().replace(_a, "");
}
var u = [["#", "hash"], ["?", "query"], function (t) {
  return t.replace("\\", "/");
}, ["/", "pathname"], ["@", "auth", 1], [NaN, "host", undefined, 1, 1], [/:(\d+)$/, "port", undefined, 1], [NaN, "hostname", undefined, 1, 1]];
var l = {
  hash: 1,
  query: 1
};
function h(e) {
  var n;
  var r = (typeof window != "undefined" ? window : t !== undefined ? t : typeof self != "undefined" ? self : {}).location || {};
  var o = {};
  var s = typeof (e = e || r);
  if (e.protocol === "blob:") {
    o = new a(unescape(e.pathname), {});
  } else if (s === "string") {
    o = new a(e, {});
    for (n in l) {
      delete o[n];
    }
  } else if (s === "object") {
    for (n in e) {
      if (!(n in l)) {
        o[n] = e[n];
      }
    }
    if (o.slashes === undefined) {
      o.slashes = i.test(e.href);
    }
  }
  return o;
}
function p(t) {
  t = c(t);
  var e = s.exec(t);
  return {
    protocol: e[1] ? e[1].toLowerCase() : "",
    slashes: !!e[2],
    rest: e[3]
  };
}
export function a(t, e) {
  t = c(t);
  var n;
  var r;
  var i;
  var s;
  var a;
  var l;
  var f = u.slice();
  var d = this;
  var g = 0;
  e = h(e);
  n = !(r = p(t || "")).protocol && !r.slashes;
  d.slashes = r.slashes || n && e.slashes;
  d.protocol = r.protocol || e.protocol || "";
  t = r.rest;
  if (!r.slashes) {
    f[3] = [/(.*)/, "pathname"];
  }
  for (; g < f.length; g++) {
    if (typeof (s = f[g]) != "function") {
      i = s[0];
      l = s[1];
      if (i != i) {
        d[l] = t;
      } else if (typeof i == "string") {
        if (~(a = t.indexOf(i))) {
          if (typeof s[2] == "number") {
            d[l] = t.slice(0, a);
            t = t.slice(a + s[2]);
          } else {
            d[l] = t.slice(a);
            t = t.slice(0, a);
          }
        }
      } else if (a = i.exec(t)) {
        d[l] = a[1];
        t = t.slice(0, a.index);
      }
      d[l] = d[l] || n && s[3] && e[l] || "";
      if (s[4]) {
        d[l] = d[l].toLowerCase();
      }
    } else {
      t = s(t);
    }
  }
  if (n && e.slashes && d.pathname.charAt(0) !== "/" && (d.pathname !== "" || e.pathname !== "")) {
    d.pathname = function (t, e) {
      if (t === "") {
        return e;
      }
      var n = (e || "/").split("/").slice(0, -1).concat(t.split("/"));
      for (var r = n.length, o = n[r - 1], i = false, s = 0; r--;) {
        if (n[r] === ".") {
          n.splice(r, 1);
        } else if (n[r] === "..") {
          n.splice(r, 1);
          s++;
        } else if (s) {
          if (r === 0) {
            i = true;
          }
          n.splice(r, 1);
          s--;
        }
      }
      if (i) {
        n.unshift("");
      }
      if (o === "." || o === "..") {
        n.push("");
      }
      return n.join("/");
    }(d.pathname, e.pathname);
  }
  if (!o(d.port, d.protocol)) {
    d.host = d.hostname;
    d.port = "";
  }
  d.username = d.password = "";
  if (d.auth) {
    s = d.auth.split(":");
    d.username = s[0] || "";
    d.password = s[1] || "";
  }
  d.origin = d.protocol && d.host && d.protocol !== "file:" ? d.protocol + "//" + d.host : "null";
  d.href = d.toString();
}
a.prototype = {
  toString: function () {
    var t;
    var e = this;
    var n = e.protocol;
    if (n && n.charAt(n.length - 1) !== ":") {
      n += ":";
    }
    var r = n + (e.slashes ? "//" : "");
    if (e.username) {
      r += e.username;
      if (e.password) {
        r += ":" + e.password;
      }
      r += "@";
    }
    r += e.host + e.pathname;
    if (t = e.query) {
      r += t.charAt(0) !== "?" ? "?" + t : t;
    }
    if (e.hash) {
      r += e.hash;
    }
    return r;
  }
};
a.extractProtocol = p;
a.location = h;
a.trimLeft = c;