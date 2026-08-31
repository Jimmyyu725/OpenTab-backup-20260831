var r;
var i;
var o;
var s = require("./14.js");
var a = require("./29.js");
var c = require("./139.js");
var u = require("./197.js");
var l = require("./138.js");
var h = require("./203.js");
var p = require("./150.js");
var d = s.location;
var f = s.setImmediate;
var g = s.clearImmediate;
var y = s.process;
var m = s.MessageChannel;
var b = s.Dispatch;
var v = 0;
var w = {};
function x(t) {
  if (w.hasOwnProperty(t)) {
    var e = w[t];
    delete w[t];
    e();
  }
}
function _(t) {
  return function () {
    x(t);
  };
}
function O(t) {
  x(t.data);
}
function T(t) {
  s.postMessage(t + "", d.protocol + "//" + d.host);
}
if (!f || !g) {
  f = function (t) {
    var e = [];
    for (var n = 1; arguments.length > n;) {
      e.push(arguments[n++]);
    }
    w[++v] = function () {
      (typeof t == "function" ? t : Function(t)).apply(undefined, e);
    };
    r(v);
    return v;
  };
  g = function (t) {
    delete w[t];
  };
  if (p) {
    r = function (t) {
      y.nextTick(_(t));
    };
  } else if (b && b.now) {
    r = function (t) {
      b.now(_(t));
    };
  } else if (m && !h) {
    o = (i = new m()).port2;
    i.port1.onmessage = O;
    r = c(o.postMessage, o, 1);
  } else if (s.addEventListener && typeof postMessage == "function" && !s.importScripts && d && d.protocol !== "file:" && !a(T)) {
    r = T;
    s.addEventListener("message", O, false);
  } else {
    r = "onreadystatechange" in l("script") ? function (t) {
      u.appendChild(l("script")).onreadystatechange = function () {
        u.removeChild(this);
        x(t);
      };
    } : function (t) {
      setTimeout(_(t), 0);
    };
  }
}
module.exports = {
  set: f,
  clear: g
};