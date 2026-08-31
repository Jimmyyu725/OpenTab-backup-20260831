module.exports = function (e) {
  var t = {};
  function r(n) {
    if (t[n]) {
      return t[n].exports;
    }
    var o = t[n] = {
      exports: {},
      id: n,
      loaded: false
    };
    e[n].call(o.exports, o, o.exports, r);
    o.loaded = true;
    return o.exports;
  }
  r.m = e;
  r.c = t;
  r.p = "";
  return r(0);
}([function (e, t, r) {
  "use strict";

  var n = r(1);
  var o = typeof importScripts == "function";
  e.exports = n(o ? self : window);
}, function (e, t, r) {
  "use strict";

  function n(e) {
    if (Array.isArray(e)) {
      for (var t = 0, r = Array(e.length); t < e.length; t++) {
        r[t] = e[t];
      }
      return r;
    }
    return Array.from(e);
  }
  var o = [];
  function a(e) {
    for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) {
      r[a - 1] = arguments[a];
    }
    var i = o.reduce(function (e, t) {
      return [t].concat(e);
    }, []);
    var c = Promise.resolve(r);
    i.forEach(function (e) {
      var t = e.request;
      var r = e.requestError;
      if (t || r) {
        c = c.then(function (e) {
          return t.apply(undefined, n(e));
        }, r);
      }
    });
    c = c.then(function (t) {
      var r = new (Function.prototype.bind.apply(Request, [null].concat(n(t))))();
      return e(r).then(function (e) {
        e.request = r;
        return e;
      }).catch(function (e) {
        e.request = r;
        return Promise.reject(e);
      });
    });
    i.forEach(function (e) {
      var t = e.response;
      var r = e.responseError;
      if (t || r) {
        c = c.then(t, r);
      }
    });
    return c;
  }
  e.exports = function (e) {
    if (!e.fetch) {
      try {
        r(2);
      } catch (e) {
        throw Error("No fetch available. Unable to register fetch-intercept");
      }
    }
    e.fetch = function (e) {
      return function () {
        for (var t = arguments.length, r = Array(t), n = 0; n < t; n++) {
          r[n] = arguments[n];
        }
        return a.apply(undefined, [e].concat(r));
      };
    }(e.fetch);
    return {
      register: function (e) {
        o.push(e);
        return function () {
          var t = o.indexOf(e);
          if (t >= 0) {
            o.splice(t, 1);
          }
        };
      },
      clear: function () {
        o = [];
      }
    };
  };
}, function (e, t) {
  e.exports = require("./7469.js");
}]);