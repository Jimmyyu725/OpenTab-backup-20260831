var t = require("./25.js");
require("./397.js");
require("./19.js");
require("./64.js");
var r = require("./380.js");
var i = r;
var o = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//;
var _a = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i;
var s = new RegExp("^[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]+");
function c(t) {
  return (t || "").toString().replace(s, "");
}
var u = [["#", "hash"], ["?", "query"], function (t) {
  return t.replace("\\", "/");
}, ["/", "pathname"], ["@", "auth", 1], [NaN, "host", undefined, 1, 1], [/:(\d+)$/, "port", undefined, 1], [NaN, "hostname", undefined, 1, 1]];
var l = {
  hash: 1,
  query: 1
};
function f(e) {
  var n;
  var r = (typeof window != "undefined" ? window : t !== undefined ? t : typeof self != "undefined" ? self : {}).location || {};
  var i = {};
  var _a2 = typeof (e = e || r);
  if (e.protocol === "blob:") {
    i = new a(unescape(e.pathname), {});
  } else if (_a2 === "string") {
    i = new a(e, {});
    for (n in l) {
      delete i[n];
    }
  } else if (_a2 === "object") {
    for (n in e) {
      if (!(n in l)) {
        i[n] = e[n];
      }
    }
    if (i.slashes === undefined) {
      i.slashes = o.test(e.href);
    }
  }
  return i;
}
function h(t) {
  t = c(t);
  var e = _a.exec(t);
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
  var o;
  var a;
  var s;
  var l;
  var p = u.slice();
  var d = this;
  var m = 0;
  e = f(e);
  n = !(r = h(t || "")).protocol && !r.slashes;
  d.slashes = r.slashes || n && e.slashes;
  d.protocol = r.protocol || e.protocol || "";
  t = r.rest;
  if (!r.slashes) {
    p[3] = [/(.*)/, "pathname"];
  }
  for (; m < p.length; m++) {
    if (typeof (a = p[m]) != "function") {
      o = a[0];
      l = a[1];
      if (o != o) {
        d[l] = t;
      } else if (typeof o == "string") {
        if (~(s = t.indexOf(o))) {
          if (typeof a[2] == "number") {
            d[l] = t.slice(0, s);
            t = t.slice(s + a[2]);
          } else {
            d[l] = t.slice(s);
            t = t.slice(0, s);
          }
        }
      } else if (s = o.exec(t)) {
        d[l] = s[1];
        t = t.slice(0, s.index);
      }
      d[l] = d[l] || n && a[3] && e[l] || "";
      if (a[4]) {
        d[l] = d[l].toLowerCase();
      }
    } else {
      t = a(t);
    }
  }
  if (n && e.slashes && d.pathname.charAt(0) !== "/" && (d.pathname !== "" || e.pathname !== "")) {
    d.pathname = function (t, e) {
      if (t === "") {
        return e;
      }
      var n = (e || "/").split("/").slice(0, -1).concat(t.split("/"));
      for (var r = n.length, i = n[r - 1], o = false, a = 0; r--;) {
        if (n[r] === ".") {
          n.splice(r, 1);
        } else if (n[r] === "..") {
          n.splice(r, 1);
          a++;
        } else if (a) {
          if (r === 0) {
            o = true;
          }
          n.splice(r, 1);
          a--;
        }
      }
      if (o) {
        n.unshift("");
      }
      if (i === "." || i === "..") {
        n.push("");
      }
      return n.join("/");
    }(d.pathname, e.pathname);
  }
  if (!i(d.port, d.protocol)) {
    d.host = d.hostname;
    d.port = "";
  }
  d.username = d.password = "";
  if (d.auth) {
    a = d.auth.split(":");
    d.username = a[0] || "";
    d.password = a[1] || "";
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
a.extractProtocol = h;
a.location = f;
a.trimLeft = c;