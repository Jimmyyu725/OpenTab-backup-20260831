var t = require("./25.js");
var e = require("./94.js");
(function (t, n) {
  "use strict";

  if (!t.setImmediate) {
    var r;
    var i;
    var o;
    var a;
    var s;
    var c = 1;
    var u = {};
    var l = false;
    var f = t.document;
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
        (o = new MessageChannel()).port1.onmessage = function (t) {
          d(t.data);
        };
        r = function (t) {
          o.port2.postMessage(t);
        };
      } else if (f && "onreadystatechange" in f.createElement("script")) {
        i = f.documentElement;
        r = function (t) {
          var e = f.createElement("script");
          e.onreadystatechange = function () {
            d(t);
            e.onreadystatechange = null;
            i.removeChild(e);
            e = null;
          };
          i.appendChild(e);
        };
      } else {
        r = function (t) {
          setTimeout(d, 0, t);
        };
      }
    } else {
      a = "setImmediate$" + Math.random() + "$";
      s = function (e) {
        if (e.source === t && typeof e.data == "string" && e.data.indexOf(a) === 0) {
          d(+e.data.slice(a.length));
        }
      };
      if (t.addEventListener) {
        t.addEventListener("message", s, false);
      } else {
        t.attachEvent("onmessage", s);
      }
      r = function (e) {
        t.postMessage(a + e, "*");
      };
    }
    h.setImmediate = function (t) {
      if (typeof t != "function") {
        t = new Function("" + t);
      }
      for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++) {
        e[n] = arguments[n + 1];
      }
      var i = {
        callback: t,
        args: e
      };
      u[c] = i;
      r(c);
      return c++;
    };
    h.clearImmediate = p;
  }
  function p(t) {
    delete u[t];
  }
  function d(t) {
    if (l) {
      setTimeout(d, 0, t);
    } else {
      var e = u[t];
      if (e) {
        l = true;
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
          l = false;
        }
      }
    }
  }
})(typeof self == "undefined" ? t === undefined ? this : t : self);