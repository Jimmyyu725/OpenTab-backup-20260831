var r;
var n;
var o;
n = [exports, module];
r = function (e, t) {
  "use strict";

  var r = {
    timeout: 5000,
    jsonpCallback: "callback",
    jsonpCallbackFunction: null
  };
  function n() {
    return "jsonp_" + Date.now() + "_" + Math.ceil(Math.random() * 100000);
  }
  function o(e) {
    try {
      delete window[e];
    } catch (t) {
      window[e] = undefined;
    }
  }
  function a(e) {
    var t = document.getElementById(e);
    if (t) {
      document.getElementsByTagName("head")[0].removeChild(t);
    }
  }
  function i(e) {
    var t = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
    var i = e;
    var c = t.timeout || r.timeout;
    var s = t.jsonpCallback || r.jsonpCallback;
    var l = undefined;
    return new Promise(function (r, u) {
      var f = t.jsonpCallbackFunction || n();
      var d = s + "_" + f;
      window[f] = function (e) {
        r({
          ok: true,
          json: function () {
            return Promise.resolve(e);
          }
        });
        if (l) {
          clearTimeout(l);
        }
        a(d);
        o(f);
      };
      i += i.indexOf("?") === -1 ? "?" : "&";
      var h = document.createElement("script");
      h.setAttribute("src", "" + i + s + "=" + f);
      if (t.charset) {
        h.setAttribute("charset", t.charset);
      }
      if (t.nonce) {
        h.setAttribute("nonce", t.nonce);
      }
      if (t.referrerPolicy) {
        h.setAttribute("referrerPolicy", t.referrerPolicy);
      }
      h.id = d;
      document.getElementsByTagName("head")[0].appendChild(h);
      l = setTimeout(function () {
        u(new Error("JSONP request to " + e + " timed out"));
        o(f);
        a(d);
        window[f] = function () {
          o(f);
        };
      }, c);
      h.onerror = function () {
        u(new Error("JSONP request to " + e + " failed"));
        o(f);
        a(d);
        if (l) {
          clearTimeout(l);
        }
      };
    });
  }
  t.exports = i;
};
if ((o = typeof r == "function" ? r.apply(exports, n) : r) !== undefined) {
  module.exports = o;
}