var r;
var o;
var i;
var s = require("./14.js");
var a = require("./29.js");
var u = require("./139.js");
var c = require("./197.js");
var f = require("./138.js");
var l = require("./203.js");
var h = require("./150.js");
var p = s.location;
var d = s.setImmediate;
var y = s.clearImmediate;
var m = s.process;
var g = s.MessageChannel;
var v = s.Dispatch;
var b = 0;
var w = {};
function _(t) {
  if (w.hasOwnProperty(t)) {
    var e = w[t];
    delete w[t];
    e();
  }
}
function E(t) {
  return function () {
    _(t);
  };
}
function T(t) {
  _(t.data);
}
function x(t) {
  s.postMessage(t + "", p.protocol + "//" + p.host);
}
if (!d || !y) {
  d = function (t) {
    var e = [];
    for (var n = 1; arguments.length > n;) {
      e.push(arguments[n++]);
    }
    w[++b] = function () {
      (typeof t == "function" ? t : Function(t)).apply(undefined, e);
    };
    r(b);
    return b;
  };
  y = function (t) {
    delete w[t];
  };
  if (h) {
    r = function (t) {
      m.nextTick(E(t));
    };
  } else if (v && v.now) {
    r = function (t) {
      v.now(E(t));
    };
  } else if (g && !l) {
    i = (o = new g()).port2;
    o.port1.onmessage = T;
    r = u(i.postMessage, i, 1);
  } else if (s.addEventListener && typeof postMessage == "function" && !s.importScripts && p && p.protocol !== "file:" && !a(x)) {
    r = x;
    s.addEventListener("message", T, false);
  } else {
    r = "onreadystatechange" in f("script") ? function (t) {
      c.appendChild(f("script")).onreadystatechange = function () {
        c.removeChild(this);
        _(t);
      };
    } : function (t) {
      setTimeout(E(t), 0);
    };
  }
}
module.exports = {
  set: d,
  clear: y
};