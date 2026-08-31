var r;
var i;
var o;
var a = require("./14.js");
var s = require("./29.js");
var c = require("./139.js");
var u = require("./197.js");
var l = require("./138.js");
var f = require("./203.js");
var h = require("./150.js");
var p = a.location;
var d = a.setImmediate;
var m = a.clearImmediate;
var g = a.process;
var y = a.MessageChannel;
var b = a.Dispatch;
var w = 0;
var v = {};
function _(t) {
  if (v.hasOwnProperty(t)) {
    var e = v[t];
    delete v[t];
    e();
  }
}
function E(t) {
  return function () {
    _(t);
  };
}
function x(t) {
  _(t.data);
}
function T(t) {
  a.postMessage(t + "", p.protocol + "//" + p.host);
}
if (!d || !m) {
  d = function (t) {
    var e = [];
    for (var n = 1; arguments.length > n;) {
      e.push(arguments[n++]);
    }
    v[++w] = function () {
      (typeof t == "function" ? t : Function(t)).apply(undefined, e);
    };
    r(w);
    return w;
  };
  m = function (t) {
    delete v[t];
  };
  if (h) {
    r = function (t) {
      g.nextTick(E(t));
    };
  } else if (b && b.now) {
    r = function (t) {
      b.now(E(t));
    };
  } else if (y && !f) {
    o = (i = new y()).port2;
    i.port1.onmessage = x;
    r = c(o.postMessage, o, 1);
  } else if (a.addEventListener && typeof postMessage == "function" && !a.importScripts && p && p.protocol !== "file:" && !s(T)) {
    r = T;
    a.addEventListener("message", x, false);
  } else {
    r = "onreadystatechange" in l("script") ? function (t) {
      u.appendChild(l("script")).onreadystatechange = function () {
        u.removeChild(this);
        _(t);
      };
    } : function (t) {
      setTimeout(E(t), 0);
    };
  }
}
module.exports = {
  set: d,
  clear: m
};