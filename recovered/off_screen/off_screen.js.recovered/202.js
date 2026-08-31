var r;
var o;
var i;
var c = require("./14.js");
var u = require("./29.js");
var a = require("./139.js");
var s = require("./197.js");
var f = require("./138.js");
var l = require("./203.js");
var p = require("./150.js");
var v = c.location;
var d = c.setImmediate;
var h = c.clearImmediate;
var y = c.process;
var g = c.MessageChannel;
var m = c.Dispatch;
var x = 0;
var b = {};
function w(t) {
  if (b.hasOwnProperty(t)) {
    var n = b[t];
    delete b[t];
    n();
  }
}
function O(t) {
  return function () {
    w(t);
  };
}
function S(t) {
  w(t.data);
}
function j(t) {
  c.postMessage(t + "", v.protocol + "//" + v.host);
}
if (!d || !h) {
  d = function (t) {
    var n = [];
    for (var e = 1; arguments.length > e;) {
      n.push(arguments[e++]);
    }
    b[++x] = function () {
      (typeof t == "function" ? t : Function(t)).apply(undefined, n);
    };
    r(x);
    return x;
  };
  h = function (t) {
    delete b[t];
  };
  if (p) {
    r = function (t) {
      y.nextTick(O(t));
    };
  } else if (m && m.now) {
    r = function (t) {
      m.now(O(t));
    };
  } else if (g && !l) {
    i = (o = new g()).port2;
    o.port1.onmessage = S;
    r = a(i.postMessage, i, 1);
  } else if (c.addEventListener && typeof postMessage == "function" && !c.importScripts && v && v.protocol !== "file:" && !u(j)) {
    r = j;
    c.addEventListener("message", S, false);
  } else {
    r = "onreadystatechange" in f("script") ? function (t) {
      s.appendChild(f("script")).onreadystatechange = function () {
        s.removeChild(this);
        w(t);
      };
    } : function (t) {
      setTimeout(O(t), 0);
    };
  }
}
module.exports = {
  set: d,
  clear: h
};