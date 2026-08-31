var t = require("./14.js");
var e = require("./51.js");
(function (t, n) {
  "use strict";

  if (!t.setImmediate) {
    var r;
    var o;
    var i;
    var s;
    var a;
    var c = 1;
    var u = {};
    var f = false;
    var l = t.document;
    var h = Object.getPrototypeOf && Object.getPrototypeOf(t);
    h = h && h.setTimeout ? h : t;
    if ({}.toString.call(t.process) === "[object process]") {
      r = function (t) {
        e.nextTick(function () {
          d(t);
        });
      };
    } else if (!function () {
      if (t.postMessage && !t.importScripts) {
        var e = true;
        var n = t.onmessage;
        t.onmessage = function () {
          e = false;
        };
        t.postMessage("", "*");
        t.onmessage = n;
        return e;
      }
    }()) {
      if (t.MessageChannel) {
        (i = new MessageChannel()).port1.onmessage = function (t) {
          d(t.data);
        };
        r = function (t) {
          i.port2.postMessage(t);
        };
      } else if (l && "onreadystatechange" in l.createElement("script")) {
        o = l.documentElement;
        r = function (t) {
          var e = l.createElement("script");
          e.onreadystatechange = function () {
            d(t);
            e.onreadystatechange = null;
            o.removeChild(e);
            e = null;
          };
          o.appendChild(e);
        };
      } else {
        r = function (t) {
          setTimeout(d, 0, t);
        };
      }
    } else {
      s = "setImmediate$" + Math.random() + "$";
      a = function (e) {
        if (e.source === t && typeof e.data == "string" && e.data.indexOf(s) === 0) {
          d(+e.data.slice(s.length));
        }
      };
      if (t.addEventListener) {
        t.addEventListener("message", a, false);
      } else {
        t.attachEvent("onmessage", a);
      }
      r = function (e) {
        t.postMessage(s + e, "*");
      };
    }
    h.setImmediate = function (t) {
      if (typeof t != "function") {
        t = new Function("" + t);
      }
      for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++) {
        e[n] = arguments[n + 1];
      }
      var o = {
        callback: t,
        args: e
      };
      u[c] = o;
      r(c);
      return c++;
    };
    h.clearImmediate = p;
  }
  function p(t) {
    delete u[t];
  }
  function d(t) {
    if (f) {
      setTimeout(d, 0, t);
    } else {
      var e = u[t];
      if (e) {
        f = true;
        try {
          (function (t) {
            var e = t.callback;
            var n = t.args;
            switch (n.length) {
              case 0:
                e();
                break;
              case 1:
                e(n[0]);
                break;
              case 2:
                e(n[0], n[1]);
                break;
              case 3:
                e(n[0], n[1], n[2]);
                break;
              default:
                e.apply(undefined, n);
            }
          })(e);
        } finally {
          p(t);
          f = false;
        }
      }
    }
  }
})(typeof self == "undefined" ? t === undefined ? this : t : self);