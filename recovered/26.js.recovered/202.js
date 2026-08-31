var r;
var o;
var i;
var s = require("./14.js");
var a = require("./29.js");
var c = require("./139.js");
var u = require("./197.js");
var l = require("./138.js");
var h = require("./203.js");
var p = require("./150.js");
var f = s.location;
var d = s.setImmediate;
var g = s.clearImmediate;
var y = s.process;
var m = s.MessageChannel;
var b = s.Dispatch;
var w = 0;
var v = {};
function _(t) {
  if (v.hasOwnProperty(t)) {
    var e = v[t];
    delete v[t];
    e();
  }
}
function T(t) {
  return function () {
    _(t);
  };
}
function E(t) {
  _(t.data);
}
function x(t) {
  s.postMessage(t + "", f.protocol + "//" + f.host);
}
if (!d || !g) {
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
  g = function (t) {
    delete v[t];
  };
  if (p) {
    r = function (t) {
      y.nextTick(T(t));
    };
  } else if (b && b.now) {
    r = function (t) {
      b.now(T(t));
    };
  } else if (m && !h) {
    i = (o = new m()).port2;
    o.port1.onmessage = E;
    r = c(i.postMessage, i, 1);
  } else if (s.addEventListener && typeof postMessage == "function" && !s.importScripts && f && f.protocol !== "file:" && !a(x)) {
    r = x;
    s.addEventListener("message", E, false);
  } else {
    r = "onreadystatechange" in l("script") ? function (t) {
      u.appendChild(l("script")).onreadystatechange = function () {
        u.removeChild(this);
        _(t);
      };
    } : function (t) {
      setTimeout(T(t), 0);
    };
  }
}
module.exports = {
  set: d,
  clear: g
};