var r;
var o;
var i;
var c = require("./4.js");
var u = require("./9.js");
var a = require("./71.js");
var f = require("./87.js");
var s = require("./53.js");
var p = require("./73.js");
var l = require("./43.js");
var v = c.location;
var h = c.setImmediate;
var d = c.clearImmediate;
var y = c.process;
var m = c.MessageChannel;
var g = c.Dispatch;
var x = 0;
var b = {};
function w(t) {
  if (b.hasOwnProperty(t)) {
    var n = b[t];
    delete b[t];
    n();
  }
}
function j(t) {
  return function () {
    w(t);
  };
}
function O(t) {
  w(t.data);
}
function S(t) {
  c.postMessage(t + "", v.protocol + "//" + v.host);
}
if (!h || !d) {
  h = function (t) {
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
  d = function (t) {
    delete b[t];
  };
  if (l) {
    r = function (t) {
      y.nextTick(j(t));
    };
  } else if (g && g.now) {
    r = function (t) {
      g.now(j(t));
    };
  } else if (m && !p) {
    i = (o = new m()).port2;
    o.port1.onmessage = O;
    r = a(i.postMessage, i, 1);
  } else if (c.addEventListener && typeof postMessage == "function" && !c.importScripts && v && v.protocol !== "file:" && !u(S)) {
    r = S;
    c.addEventListener("message", O, false);
  } else {
    r = "onreadystatechange" in s("script") ? function (t) {
      f.appendChild(s("script")).onreadystatechange = function () {
        f.removeChild(this);
        w(t);
      };
    } : function (t) {
      setTimeout(j(t), 0);
    };
  }
}
module.exports = {
  set: h,
  clear: d
};