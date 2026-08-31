var e;
var o;
var i;
var c = require("./14.js");
var u = require("./29.js");
var a = require("./139.js");
var f = require("./197.js");
var s = require("./138.js");
var p = require("./203.js");
var l = require("./150.js");
var v = c.location;
var h = c.setImmediate;
var y = c.clearImmediate;
var d = c.process;
var g = c.MessageChannel;
var x = c.Dispatch;
var m = 0;
var w = {};
function b(t) {
  if (w.hasOwnProperty(t)) {
    var n = w[t];
    delete w[t];
    n();
  }
}
function S(t) {
  return function () {
    b(t);
  };
}
function j(t) {
  b(t.data);
}
function O(t) {
  c.postMessage(t + "", v.protocol + "//" + v.host);
}
if (!h || !y) {
  h = function (t) {
    var n = [];
    for (var r = 1; arguments.length > r;) {
      n.push(arguments[r++]);
    }
    w[++m] = function () {
      (typeof t == "function" ? t : Function(t)).apply(undefined, n);
    };
    e(m);
    return m;
  };
  y = function (t) {
    delete w[t];
  };
  if (l) {
    e = function (t) {
      d.nextTick(S(t));
    };
  } else if (x && x.now) {
    e = function (t) {
      x.now(S(t));
    };
  } else if (g && !p) {
    i = (o = new g()).port2;
    o.port1.onmessage = j;
    e = a(i.postMessage, i, 1);
  } else if (c.addEventListener && typeof postMessage == "function" && !c.importScripts && v && v.protocol !== "file:" && !u(O)) {
    e = O;
    c.addEventListener("message", j, false);
  } else {
    e = "onreadystatechange" in s("script") ? function (t) {
      f.appendChild(s("script")).onreadystatechange = function () {
        f.removeChild(this);
        b(t);
      };
    } : function (t) {
      setTimeout(S(t), 0);
    };
  }
}
module.exports = {
  set: h,
  clear: y
};