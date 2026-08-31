var r;
var o;
var i;
var s = require("./7.js");
var a = require("./18.js");
var c = require("./109.js");
var u = require("./185.js");
var f = require("./108.js");
var l = require("./205.js");
var h = require("./141.js");
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
function x(t) {
  return function () {
    _(t);
  };
}
function T(t) {
  _(t.data);
}
function E(t) {
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
      m.nextTick(x(t));
    };
  } else if (v && v.now) {
    r = function (t) {
      v.now(x(t));
    };
  } else if (g && !l) {
    i = (o = new g()).port2;
    o.port1.onmessage = T;
    r = c(i.postMessage, i, 1);
  } else if (s.addEventListener && typeof postMessage == "function" && !s.importScripts && p && p.protocol !== "file:" && !a(E)) {
    r = E;
    s.addEventListener("message", T, false);
  } else {
    r = "onreadystatechange" in f("script") ? function (t) {
      u.appendChild(f("script")).onreadystatechange = function () {
        u.removeChild(this);
        _(t);
      };
    } : function (t) {
      setTimeout(x(t), 0);
    };
  }
}
module.exports = {
  set: d,
  clear: y
};