var t = require(/*webcrack:missing*/"./25.js");
module.exports = function e(t, n, r) {
  function o(a, u) {
    if (!n[a]) {
      if (!t[a]) {
        if (i) {
          return i(a, true);
        }
        var c = new Error("Cannot find module '" + a + "'");
        c.code = "MODULE_NOT_FOUND";
        throw c;
      }
      var s = n[a] = {
        exports: {}
      };
      t[a][0].call(s.exports, function (e) {
        var n = t[a][1][e];
        return o(n || e);
      }, s, s.exports, e, t, n, r);
    }
    return n[a].exports;
  }
  var i = false;
  for (var a = 0; a < r.length; a++) {
    o(r[a]);
  }
  return o;
}({
  1: [function (e, n, r) {
    (function (e) {
      "use strict";

      var t;
      var r;
      var o = e.MutationObserver || e.WebKitMutationObserver;
      if (o) {
        var i = 0;
        var a = new o(f);
        var u = e.document.createTextNode("");
        a.observe(u, {
          characterData: true
        });
        t = function () {
          u.data = i = ++i % 2;
        };
      } else if (e.setImmediate || e.MessageChannel === undefined) {
        t = "document" in e && "onreadystatechange" in e.document.createElement("script") ? function () {
          var t = e.document.createElement("script");
          t.onreadystatechange = function () {
            f();
            t.onreadystatechange = null;
            t.parentNode.removeChild(t);
            t = null;
          };
          e.document.documentElement.appendChild(t);
        } : function () {
          setTimeout(f, 0);
        };
      } else {
        var c = new e.MessageChannel();
        c.port1.onmessage = f;
        t = function () {
          c.port2.postMessage(0);
        };
      }
      var s = [];
      function f() {
        var e;
        var t;
        r = true;
        for (var n = s.length; n;) {
          t = s;
          s = [];
          e = -1;
          while (++e < n) {
            t[e]();
          }
          n = s.length;
        }
        r = false;
      }
      n.exports = function (e) {
        if (s.push(e) === 1 && !r) {
          t();
        }
      };
    }).call(this, t !== undefined ? t : typeof self != "undefined" ? self : typeof window != "undefined" ? window : {});
  }, {}],
  2: [function (e, t, n) {
    "use strict";

    var r = e(1);
    function o() {}
    var i = {};
    var a = ["REJECTED"];
    var u = ["FULFILLED"];
    var c = ["PENDING"];
    function s(e) {
      if (typeof e != "function") {
        throw new TypeError("resolver must be a function");
      }
      this.state = c;
      this.queue = [];
      this.outcome = undefined;
      if (e !== o) {
        h(this, e);
      }
    }
    function f(e, t, n) {
      this.promise = e;
      if (typeof t == "function") {
        this.onFulfilled = t;
        this.callFulfilled = this.otherCallFulfilled;
      }
      if (typeof n == "function") {
        this.onRejected = n;
        this.callRejected = this.otherCallRejected;
      }
    }
    function l(e, t, n) {
      r(function () {
        var r;
        try {
          r = t(n);
        } catch (t) {
          return i.reject(e, t);
        }
        if (r === e) {
          i.reject(e, new TypeError("Cannot resolve promise with itself"));
        } else {
          i.resolve(e, r);
        }
      });
    }
    function d(e) {
      var t = e && e.then;
      if (e && (typeof e == "object" || typeof e == "function") && typeof t == "function") {
        return function () {
          t.apply(e, arguments);
        };
      }
    }
    function h(e, t) {
      var n = false;
      function r(t) {
        if (!n) {
          n = true;
          i.reject(e, t);
        }
      }
      function o(t) {
        if (!n) {
          n = true;
          i.resolve(e, t);
        }
      }
      var a = p(function () {
        t(o, r);
      });
      if (a.status === "error") {
        r(a.value);
      }
    }
    function p(e, t) {
      var n = {};
      try {
        n.value = e(t);
        n.status = "success";
      } catch (e) {
        n.status = "error";
        n.value = e;
      }
      return n;
    }
    t.exports = s;
    s.prototype.catch = function (e) {
      return this.then(null, e);
    };
    s.prototype.then = function (e, t) {
      if (typeof e != "function" && this.state === u || typeof t != "function" && this.state === a) {
        return this;
      }
      var n = new this.constructor(o);
      if (this.state !== c) {
        l(n, this.state === u ? e : t, this.outcome);
      } else {
        this.queue.push(new f(n, e, t));
      }
      return n;
    };
    f.prototype.callFulfilled = function (e) {
      i.resolve(this.promise, e);
    };
    f.prototype.otherCallFulfilled = function (e) {
      l(this.promise, this.onFulfilled, e);
    };
    f.prototype.callRejected = function (e) {
      i.reject(this.promise, e);
    };
    f.prototype.otherCallRejected = function (e) {
      l(this.promise, this.onRejected, e);
    };
    i.resolve = function (e, t) {
      var n = p(d, t);
      if (n.status === "error") {
        return i.reject(e, n.value);
      }
      var r = n.value;
      if (r) {
        h(e, r);
      } else {
        e.state = u;
        e.outcome = t;
        for (var o = -1, a = e.queue.length; ++o < a;) {
          e.queue[o].callFulfilled(t);
        }
      }
      return e;
    };
    i.reject = function (e, t) {
      e.state = a;
      e.outcome = t;
      for (var n = -1, r = e.queue.length; ++n < r;) {
        e.queue[n].callRejected(t);
      }
      return e;
    };
    s.resolve = function (e) {
      if (e instanceof this) {
        return e;
      } else {
        return i.resolve(new this(o), e);
      }
    };
    s.reject = function (e) {
      var t = new this(o);
      return i.reject(t, e);
    };
    s.all = function (e) {
      var t = this;
      if (Object.prototype.toString.call(e) !== "[object Array]") {
        return this.reject(new TypeError("must be an array"));
      }
      var n = e.length;
      var r = false;
      if (!n) {
        return this.resolve([]);
      }
      var a = new Array(n);
      var u = 0;
      for (var c = -1, s = new this(o); ++c < n;) {
        f(e[c], c);
      }
      return s;
      function f(e, o) {
        t.resolve(e).then(function (e) {
          a[o] = e;
          if (++u === n && !r) {
            r = true;
            i.resolve(s, a);
          }
        }, function (e) {
          if (!r) {
            r = true;
            i.reject(s, e);
          }
        });
      }
    };
    s.race = function (e) {
      var t = this;
      if (Object.prototype.toString.call(e) !== "[object Array]") {
        return this.reject(new TypeError("must be an array"));
      }
      var n = e.length;
      var r = false;
      if (!n) {
        return this.resolve([]);
      }
      var a;
      for (var u = -1, c = new this(o); ++u < n;) {
        a = e[u];
        t.resolve(a).then(function (e) {
          if (!r) {
            r = true;
            i.resolve(c, e);
          }
        }, function (e) {
          if (!r) {
            r = true;
            i.reject(c, e);
          }
        });
      }
      return c;
    };
  }, {
    1: 1
  }],
  3: [function (e, n, r) {
    (function (t) {
      "use strict";

      if (typeof t.Promise != "function") {
        t.Promise = e(2);
      }
    }).call(this, t !== undefined ? t : typeof self != "undefined" ? self : typeof window != "undefined" ? window : {});
  }, {
    2: 2
  }],
  4: [function (e, t, n) {
    "use strict";

    var r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
      return typeof e;
    } : function (e) {
      if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
        return "symbol";
      } else {
        return typeof e;
      }
    };
    var o = function () {
      try {
        if (typeof indexedDB != "undefined") {
          return indexedDB;
        }
        if (typeof webkitIndexedDB != "undefined") {
          return webkitIndexedDB;
        }
        if (typeof mozIndexedDB != "undefined") {
          return mozIndexedDB;
        }
        if (typeof OIndexedDB != "undefined") {
          return OIndexedDB;
        }
        if (typeof msIndexedDB != "undefined") {
          return msIndexedDB;
        }
      } catch (e) {
        return;
      }
    }();
    function i(e, t) {
      e = e || [];
      t = t || {};
      try {
        return new Blob(e, t);
      } catch (o) {
        if (o.name !== "TypeError") {
          throw o;
        }
        var n = new (typeof BlobBuilder != "undefined" ? BlobBuilder : typeof MSBlobBuilder != "undefined" ? MSBlobBuilder : typeof MozBlobBuilder != "undefined" ? MozBlobBuilder : WebKitBlobBuilder)();
        for (var r = 0; r < e.length; r += 1) {
          n.append(e[r]);
        }
        return n.getBlob(t.type);
      }
    }
    if (typeof Promise == "undefined") {
      e(3);
    }
    var a = Promise;
    function u(e, t) {
      if (t) {
        e.then(function (e) {
          t(null, e);
        }, function (e) {
          t(e);
        });
      }
    }
    function c(e, t, n) {
      if (typeof t == "function") {
        e.then(t);
      }
      if (typeof n == "function") {
        e.catch(n);
      }
    }
    function s(e) {
      if (typeof e != "string") {
        console.warn(e + " used as a key, but it is not a string.");
        e = String(e);
      }
      return e;
    }
    function f() {
      if (arguments.length && typeof arguments[arguments.length - 1] == "function") {
        return arguments[arguments.length - 1];
      }
    }
    var l = undefined;
    var d = {};
    var h = Object.prototype.toString;
    function p(e) {
      if (typeof l == "boolean") {
        return a.resolve(l);
      } else {
        return function (e) {
          return new a(function (t) {
            var n = e.transaction("local-forage-detect-blob-support", "readwrite");
            var r = i([""]);
            n.objectStore("local-forage-detect-blob-support").put(r, "key");
            n.onabort = function (e) {
              e.preventDefault();
              e.stopPropagation();
              t(false);
            };
            n.oncomplete = function () {
              var e = navigator.userAgent.match(/Chrome\/(\d+)/);
              var n = navigator.userAgent.match(/Edge\//);
              t(n || !e || parseInt(e[1], 10) >= 43);
            };
          }).catch(function () {
            return false;
          });
        }(e).then(function (e) {
          return l = e;
        });
      }
    }
    function v(e) {
      var t = d[e.name];
      var n = {};
      n.promise = new a(function (e, t) {
        n.resolve = e;
        n.reject = t;
      });
      t.deferredOperations.push(n);
      if (t.dbReady) {
        t.dbReady = t.dbReady.then(function () {
          return n.promise;
        });
      } else {
        t.dbReady = n.promise;
      }
    }
    function y(e) {
      var t = d[e.name].deferredOperations.pop();
      if (t) {
        t.resolve();
        return t.promise;
      }
    }
    function m(e, t) {
      var n = d[e.name].deferredOperations.pop();
      if (n) {
        n.reject(t);
        return n.promise;
      }
    }
    function g(e, t) {
      return new a(function (n, r) {
        d[e.name] = d[e.name] || {
          forages: [],
          db: null,
          dbReady: null,
          deferredOperations: []
        };
        if (e.db) {
          if (!t) {
            return n(e.db);
          }
          v(e);
          e.db.close();
        }
        var i = [e.name];
        if (t) {
          i.push(e.version);
        }
        var a = o.open.apply(o, i);
        if (t) {
          a.onupgradeneeded = function (t) {
            var n = a.result;
            try {
              n.createObjectStore(e.storeName);
              if (t.oldVersion <= 1) {
                n.createObjectStore("local-forage-detect-blob-support");
              }
            } catch (n) {
              if (n.name !== "ConstraintError") {
                throw n;
              }
              console.warn("The database \"" + e.name + "\" has been upgraded from version " + t.oldVersion + " to version " + t.newVersion + ", but the storage \"" + e.storeName + "\" already exists.");
            }
          };
        }
        a.onerror = function (e) {
          e.preventDefault();
          r(a.error);
        };
        a.onsuccess = function () {
          n(a.result);
          y(e);
        };
      });
    }
    function b(e) {
      return g(e, false);
    }
    function w(e) {
      return g(e, true);
    }
    function _(e, t) {
      if (!e.db) {
        return true;
      }
      var n = !e.db.objectStoreNames.contains(e.storeName);
      var r = e.version < e.db.version;
      var o = e.version > e.db.version;
      if (r) {
        if (e.version !== t) {
          console.warn("The database \"" + e.name + "\" can't be downgraded from version " + e.db.version + " to version " + e.version + ".");
        }
        e.version = e.db.version;
      }
      if (o || n) {
        if (n) {
          var i = e.db.version + 1;
          if (i > e.version) {
            e.version = i;
          }
        }
        return true;
      }
      return false;
    }
    function x(e) {
      return i([function (e) {
        for (var t = e.length, n = new ArrayBuffer(t), r = new Uint8Array(n), o = 0; o < t; o++) {
          r[o] = e.charCodeAt(o);
        }
        return n;
      }(atob(e.data))], {
        type: e.type
      });
    }
    function S(e) {
      return e && e.__local_forage_encoded_blob;
    }
    function E(e) {
      var t = this;
      var n = t._initReady().then(function () {
        var e = d[t._dbInfo.name];
        if (e && e.dbReady) {
          return e.dbReady;
        }
      });
      c(n, e, e);
      return n;
    }
    function I(e, t, n, r = 1) {
      try {
        var o = e.db.transaction(e.storeName, t);
        n(null, o);
      } catch (o) {
        if (r > 0 && (!e.db || o.name === "InvalidStateError" || o.name === "NotFoundError")) {
          return a.resolve().then(function () {
            if (!e.db || o.name === "NotFoundError" && !e.db.objectStoreNames.contains(e.storeName) && e.version <= e.db.version) {
              if (e.db) {
                e.version = e.db.version + 1;
              }
              return w(e);
            }
          }).then(function () {
            return function (e) {
              v(e);
              var t = d[e.name];
              for (var n = t.forages, r = 0; r < n.length; r++) {
                var o = n[r];
                if (o._dbInfo.db) {
                  o._dbInfo.db.close();
                  o._dbInfo.db = null;
                }
              }
              e.db = null;
              return b(e).then(function (t) {
                e.db = t;
                if (_(e)) {
                  return w(e);
                } else {
                  return t;
                }
              }).then(function (r) {
                e.db = t.db = r;
                for (var o = 0; o < n.length; o++) {
                  n[o]._dbInfo.db = r;
                }
              }).catch(function (t) {
                m(e, t);
                throw t;
              });
            }(e).then(function () {
              I(e, t, n, r - 1);
            });
          }).catch(n);
        }
        n(o);
      }
    }
    var N = {
      _driver: "asyncStorage",
      _initStorage: function (e) {
        var t = this;
        var n = {
          db: null
        };
        if (e) {
          for (var r in e) {
            n[r] = e[r];
          }
        }
        var o = d[n.name];
        if (!o) {
          o = {
            forages: [],
            db: null,
            dbReady: null,
            deferredOperations: []
          };
          d[n.name] = o;
        }
        o.forages.push(t);
        if (!t._initReady) {
          t._initReady = t.ready;
          t.ready = E;
        }
        var i = [];
        function u() {
          return a.resolve();
        }
        for (var c = 0; c < o.forages.length; c++) {
          var s = o.forages[c];
          if (s !== t) {
            i.push(s._initReady().catch(u));
          }
        }
        var f = o.forages.slice(0);
        return a.all(i).then(function () {
          n.db = o.db;
          return b(n);
        }).then(function (e) {
          n.db = e;
          if (_(n, t._defaultConfig.version)) {
            return w(n);
          } else {
            return e;
          }
        }).then(function (e) {
          n.db = o.db = e;
          t._dbInfo = n;
          for (var r = 0; r < f.length; r++) {
            var i = f[r];
            if (i !== t) {
              i._dbInfo.db = n.db;
              i._dbInfo.version = n.version;
            }
          }
        });
      },
      _support: function () {
        try {
          if (!o || !o.open) {
            return false;
          }
          var e = typeof openDatabase != "undefined" && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform);
          var t = typeof fetch == "function" && fetch.toString().indexOf("[native code") !== -1;
          return (!e || t) && typeof indexedDB != "undefined" && typeof IDBKeyRange != "undefined";
        } catch (e) {
          return false;
        }
      }(),
      iterate: function (e, t) {
        var n = this;
        var r = new a(function (t, r) {
          n.ready().then(function () {
            I(n._dbInfo, "readonly", function (o, i) {
              if (o) {
                return r(o);
              }
              try {
                var a = i.objectStore(n._dbInfo.storeName).openCursor();
                var u = 1;
                a.onsuccess = function () {
                  var n = a.result;
                  if (n) {
                    var r = n.value;
                    if (S(r)) {
                      r = x(r);
                    }
                    var o = e(r, n.key, u++);
                    if (o !== undefined) {
                      t(o);
                    } else {
                      n.continue();
                    }
                  } else {
                    t();
                  }
                };
                a.onerror = function () {
                  r(a.error);
                };
              } catch (e) {
                r(e);
              }
            });
          }).catch(r);
        });
        u(r, t);
        return r;
      },
      getItem: function (e, t) {
        var n = this;
        e = s(e);
        var r = new a(function (t, r) {
          n.ready().then(function () {
            I(n._dbInfo, "readonly", function (o, i) {
              if (o) {
                return r(o);
              }
              try {
                var a = i.objectStore(n._dbInfo.storeName).get(e);
                a.onsuccess = function () {
                  var e = a.result;
                  if (e === undefined) {
                    e = null;
                  }
                  if (S(e)) {
                    e = x(e);
                  }
                  t(e);
                };
                a.onerror = function () {
                  r(a.error);
                };
              } catch (e) {
                r(e);
              }
            });
          }).catch(r);
        });
        u(r, t);
        return r;
      },
      setItem: function (e, t, n) {
        var r = this;
        e = s(e);
        var o = new a(function (n, o) {
          var i;
          r.ready().then(function () {
            i = r._dbInfo;
            if (h.call(t) === "[object Blob]") {
              return p(i.db).then(function (e) {
                if (e) {
                  return t;
                } else {
                  n = t;
                  return new a(function (e, t) {
                    var r = new FileReader();
                    r.onerror = t;
                    r.onloadend = function (t) {
                      var r = btoa(t.target.result || "");
                      e({
                        __local_forage_encoded_blob: true,
                        data: r,
                        type: n.type
                      });
                    };
                    r.readAsBinaryString(n);
                  });
                }
                var n;
              });
            } else {
              return t;
            }
          }).then(function (t) {
            I(r._dbInfo, "readwrite", function (i, a) {
              if (i) {
                return o(i);
              }
              try {
                var u = a.objectStore(r._dbInfo.storeName);
                if (t === null) {
                  t = undefined;
                }
                var c = u.put(t, e);
                a.oncomplete = function () {
                  if (t === undefined) {
                    t = null;
                  }
                  n(t);
                };
                a.onabort = a.onerror = function () {
                  var e = c.error ? c.error : c.transaction.error;
                  o(e);
                };
              } catch (e) {
                o(e);
              }
            });
          }).catch(o);
        });
        u(o, n);
        return o;
      },
      removeItem: function (e, t) {
        var n = this;
        e = s(e);
        var r = new a(function (t, r) {
          n.ready().then(function () {
            I(n._dbInfo, "readwrite", function (o, i) {
              if (o) {
                return r(o);
              }
              try {
                var a = i.objectStore(n._dbInfo.storeName).delete(e);
                i.oncomplete = function () {
                  t();
                };
                i.onerror = function () {
                  r(a.error);
                };
                i.onabort = function () {
                  var e = a.error ? a.error : a.transaction.error;
                  r(e);
                };
              } catch (e) {
                r(e);
              }
            });
          }).catch(r);
        });
        u(r, t);
        return r;
      },
      clear: function (e) {
        var t = this;
        var n = new a(function (e, n) {
          t.ready().then(function () {
            I(t._dbInfo, "readwrite", function (r, o) {
              if (r) {
                return n(r);
              }
              try {
                var i = o.objectStore(t._dbInfo.storeName).clear();
                o.oncomplete = function () {
                  e();
                };
                o.onabort = o.onerror = function () {
                  var e = i.error ? i.error : i.transaction.error;
                  n(e);
                };
              } catch (e) {
                n(e);
              }
            });
          }).catch(n);
        });
        u(n, e);
        return n;
      },
      length: function (e) {
        var t = this;
        var n = new a(function (e, n) {
          t.ready().then(function () {
            I(t._dbInfo, "readonly", function (r, o) {
              if (r) {
                return n(r);
              }
              try {
                var i = o.objectStore(t._dbInfo.storeName).count();
                i.onsuccess = function () {
                  e(i.result);
                };
                i.onerror = function () {
                  n(i.error);
                };
              } catch (e) {
                n(e);
              }
            });
          }).catch(n);
        });
        u(n, e);
        return n;
      },
      key: function (e, t) {
        var n = this;
        var r = new a(function (t, r) {
          if (e < 0) {
            t(null);
          } else {
            n.ready().then(function () {
              I(n._dbInfo, "readonly", function (o, i) {
                if (o) {
                  return r(o);
                }
                try {
                  var a = i.objectStore(n._dbInfo.storeName);
                  var u = false;
                  var c = a.openKeyCursor();
                  c.onsuccess = function () {
                    var n = c.result;
                    if (n) {
                      if (e === 0 || u) {
                        t(n.key);
                      } else {
                        u = true;
                        n.advance(e);
                      }
                    } else {
                      t(null);
                    }
                  };
                  c.onerror = function () {
                    r(c.error);
                  };
                } catch (e) {
                  r(e);
                }
              });
            }).catch(r);
          }
        });
        u(r, t);
        return r;
      },
      keys: function (e) {
        var t = this;
        var n = new a(function (e, n) {
          t.ready().then(function () {
            I(t._dbInfo, "readonly", function (r, o) {
              if (r) {
                return n(r);
              }
              try {
                var i = o.objectStore(t._dbInfo.storeName).openKeyCursor();
                var a = [];
                i.onsuccess = function () {
                  var t = i.result;
                  if (t) {
                    a.push(t.key);
                    t.continue();
                  } else {
                    e(a);
                  }
                };
                i.onerror = function () {
                  n(i.error);
                };
              } catch (e) {
                n(e);
              }
            });
          }).catch(n);
        });
        u(n, e);
        return n;
      },
      dropInstance: function (e, t) {
        t = f.apply(this, arguments);
        var n = this.config();
        if (!(e = typeof e != "function" && e || {}).name) {
          e.name = e.name || n.name;
          e.storeName = e.storeName || n.storeName;
        }
        var r;
        var i = this;
        if (e.name) {
          var c = e.name === n.name && i._dbInfo.db;
          var s = c ? a.resolve(i._dbInfo.db) : b(e).then(function (t) {
            var n = d[e.name];
            var r = n.forages;
            n.db = t;
            for (var o = 0; o < r.length; o++) {
              r[o]._dbInfo.db = t;
            }
            return t;
          });
          r = e.storeName ? s.then(function (t) {
            if (t.objectStoreNames.contains(e.storeName)) {
              var n = t.version + 1;
              v(e);
              var r = d[e.name];
              var i = r.forages;
              t.close();
              for (var u = 0; u < i.length; u++) {
                var c = i[u];
                c._dbInfo.db = null;
                c._dbInfo.version = n;
              }
              return new a(function (t, r) {
                var i = o.open(e.name, n);
                i.onerror = function (e) {
                  i.result.close();
                  r(e);
                };
                i.onupgradeneeded = function () {
                  i.result.deleteObjectStore(e.storeName);
                };
                i.onsuccess = function () {
                  var e = i.result;
                  e.close();
                  t(e);
                };
              }).then(function (e) {
                r.db = e;
                for (var t = 0; t < i.length; t++) {
                  var n = i[t];
                  n._dbInfo.db = e;
                  y(n._dbInfo);
                }
              }).catch(function (t) {
                (m(e, t) || a.resolve()).catch(function () {});
                throw t;
              });
            }
          }) : s.then(function (t) {
            v(e);
            var n = d[e.name];
            var r = n.forages;
            t.close();
            for (var i = 0; i < r.length; i++) {
              r[i]._dbInfo.db = null;
            }
            return new a(function (t, n) {
              var r = o.deleteDatabase(e.name);
              r.onerror = r.onblocked = function (e) {
                var t = r.result;
                if (t) {
                  t.close();
                }
                n(e);
              };
              r.onsuccess = function () {
                var e = r.result;
                if (e) {
                  e.close();
                }
                t(e);
              };
            }).then(function (e) {
              n.db = e;
              for (var t = 0; t < r.length; t++) {
                y(r[t]._dbInfo);
              }
            }).catch(function (t) {
              (m(e, t) || a.resolve()).catch(function () {});
              throw t;
            });
          });
        } else {
          r = a.reject("Invalid arguments");
        }
        u(r, t);
        return r;
      }
    };
    var R = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var j = /^~~local_forage_type~([^~]+)~/;
    var A = "__lfsc__:".length;
    var O = A + "arbf".length;
    var T = Object.prototype.toString;
    function C(e) {
      var t;
      var n;
      var r;
      var o;
      var i;
      var a = e.length * 0.75;
      var u = e.length;
      var c = 0;
      if (e[e.length - 1] === "=") {
        a--;
        if (e[e.length - 2] === "=") {
          a--;
        }
      }
      var s = new ArrayBuffer(a);
      var f = new Uint8Array(s);
      for (t = 0; t < u; t += 4) {
        n = R.indexOf(e[t]);
        r = R.indexOf(e[t + 1]);
        o = R.indexOf(e[t + 2]);
        i = R.indexOf(e[t + 3]);
        f[c++] = n << 2 | r >> 4;
        f[c++] = (r & 15) << 4 | o >> 2;
        f[c++] = (o & 3) << 6 | i & 63;
      }
      return s;
    }
    function k(e) {
      var t;
      var n = new Uint8Array(e);
      var r = "";
      for (t = 0; t < n.length; t += 3) {
        r += R[n[t] >> 2];
        r += R[(n[t] & 3) << 4 | n[t + 1] >> 4];
        r += R[(n[t + 1] & 15) << 2 | n[t + 2] >> 6];
        r += R[n[t + 2] & 63];
      }
      if (n.length % 3 == 2) {
        r = r.substring(0, r.length - 1) + "=";
      } else if (n.length % 3 == 1) {
        r = r.substring(0, r.length - 2) + "==";
      }
      return r;
    }
    var B = {
      serialize: function (e, t) {
        var n = "";
        if (e) {
          n = T.call(e);
        }
        if (e && (n === "[object ArrayBuffer]" || e.buffer && T.call(e.buffer) === "[object ArrayBuffer]")) {
          var r;
          var o = "__lfsc__:";
          if (e instanceof ArrayBuffer) {
            r = e;
            o += "arbf";
          } else {
            r = e.buffer;
            if (n === "[object Int8Array]") {
              o += "si08";
            } else if (n === "[object Uint8Array]") {
              o += "ui08";
            } else if (n === "[object Uint8ClampedArray]") {
              o += "uic8";
            } else if (n === "[object Int16Array]") {
              o += "si16";
            } else if (n === "[object Uint16Array]") {
              o += "ur16";
            } else if (n === "[object Int32Array]") {
              o += "si32";
            } else if (n === "[object Uint32Array]") {
              o += "ui32";
            } else if (n === "[object Float32Array]") {
              o += "fl32";
            } else if (n === "[object Float64Array]") {
              o += "fl64";
            } else {
              t(new Error("Failed to get type for BinaryArray"));
            }
          }
          t(o + k(r));
        } else if (n === "[object Blob]") {
          var i = new FileReader();
          i.onload = function () {
            var n = "~~local_forage_type~" + e.type + "~" + k(this.result);
            t("__lfsc__:blob" + n);
          };
          i.readAsArrayBuffer(e);
        } else {
          try {
            t(JSON.stringify(e));
          } catch (n) {
            console.error("Couldn't convert value into a JSON string: ", e);
            t(null, n);
          }
        }
      },
      deserialize: function (e) {
        if (e.substring(0, A) !== "__lfsc__:") {
          return JSON.parse(e);
        }
        var t;
        var n = e.substring(O);
        var r = e.substring(A, O);
        if (r === "blob" && j.test(n)) {
          var o = n.match(j);
          t = o[1];
          n = n.substring(o[0].length);
        }
        var a = C(n);
        switch (r) {
          case "arbf":
            return a;
          case "blob":
            return i([a], {
              type: t
            });
          case "si08":
            return new Int8Array(a);
          case "ui08":
            return new Uint8Array(a);
          case "uic8":
            return new Uint8ClampedArray(a);
          case "si16":
            return new Int16Array(a);
          case "ur16":
            return new Uint16Array(a);
          case "si32":
            return new Int32Array(a);
          case "ui32":
            return new Uint32Array(a);
          case "fl32":
            return new Float32Array(a);
          case "fl64":
            return new Float64Array(a);
          default:
            throw new Error("Unkown type: " + r);
        }
      },
      stringToBuffer: C,
      bufferToString: k
    };
    function D(e, t, n, r) {
      e.executeSql("CREATE TABLE IF NOT EXISTS " + t.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], n, r);
    }
    function L(e, t, n, r, o, i) {
      e.executeSql(n, r, o, function (e, a) {
        if (a.code === a.SYNTAX_ERR) {
          e.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [t.storeName], function (e, u) {
            if (u.rows.length) {
              i(e, a);
            } else {
              D(e, t, function () {
                e.executeSql(n, r, o, i);
              }, i);
            }
          }, i);
        } else {
          i(e, a);
        }
      }, i);
    }
    function P(e, t, n, r) {
      var o = this;
      e = s(e);
      var i = new a(function (i, a) {
        o.ready().then(function () {
          if (t === undefined) {
            t = null;
          }
          var u = t;
          var c = o._dbInfo;
          c.serializer.serialize(t, function (t, s) {
            if (s) {
              a(s);
            } else {
              c.db.transaction(function (n) {
                L(n, c, "INSERT OR REPLACE INTO " + c.storeName + " (key, value) VALUES (?, ?)", [e, t], function () {
                  i(u);
                }, function (e, t) {
                  a(t);
                });
              }, function (t) {
                if (t.code === t.QUOTA_ERR) {
                  if (r > 0) {
                    i(P.apply(o, [e, u, n, r - 1]));
                    return;
                  }
                  a(t);
                }
              });
            }
          });
        }).catch(a);
      });
      u(i, n);
      return i;
    }
    function F(e) {
      return new a(function (t, n) {
        e.transaction(function (r) {
          r.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function (n, r) {
            var o = [];
            for (var i = 0; i < r.rows.length; i++) {
              o.push(r.rows.item(i).name);
            }
            t({
              db: e,
              storeNames: o
            });
          }, function (e, t) {
            n(t);
          });
        }, function (e) {
          n(e);
        });
      });
    }
    var U = {
      _driver: "webSQLStorage",
      _initStorage: function (e) {
        var t = this;
        var n = {
          db: null
        };
        if (e) {
          for (var r in e) {
            n[r] = typeof e[r] != "string" ? e[r].toString() : e[r];
          }
        }
        var o = new a(function (e, r) {
          try {
            n.db = openDatabase(n.name, String(n.version), n.description, n.size);
          } catch (e) {
            return r(e);
          }
          n.db.transaction(function (o) {
            D(o, n, function () {
              t._dbInfo = n;
              e();
            }, function (e, t) {
              r(t);
            });
          }, r);
        });
        n.serializer = B;
        return o;
      },
      _support: typeof openDatabase == "function",
      iterate: function (e, t) {
        var n = this;
        var r = new a(function (t, r) {
          n.ready().then(function () {
            var o = n._dbInfo;
            o.db.transaction(function (n) {
              L(n, o, "SELECT * FROM " + o.storeName, [], function (n, r) {
                var i = r.rows;
                for (var a = i.length, u = 0; u < a; u++) {
                  var c = i.item(u);
                  var s = c.value;
                  s &&= o.serializer.deserialize(s);
                  if ((s = e(s, c.key, u + 1)) !== undefined) {
                    t(s);
                    return;
                  }
                }
                t();
              }, function (e, t) {
                r(t);
              });
            });
          }).catch(r);
        });
        u(r, t);
        return r;
      },
      getItem: function (e, t) {
        var n = this;
        e = s(e);
        var r = new a(function (t, r) {
          n.ready().then(function () {
            var o = n._dbInfo;
            o.db.transaction(function (n) {
              L(n, o, "SELECT * FROM " + o.storeName + " WHERE key = ? LIMIT 1", [e], function (e, n) {
                var r = n.rows.length ? n.rows.item(0).value : null;
                r &&= o.serializer.deserialize(r);
                t(r);
              }, function (e, t) {
                r(t);
              });
            });
          }).catch(r);
        });
        u(r, t);
        return r;
      },
      setItem: function (e, t, n) {
        return P.apply(this, [e, t, n, 1]);
      },
      removeItem: function (e, t) {
        var n = this;
        e = s(e);
        var r = new a(function (t, r) {
          n.ready().then(function () {
            var o = n._dbInfo;
            o.db.transaction(function (n) {
              L(n, o, "DELETE FROM " + o.storeName + " WHERE key = ?", [e], function () {
                t();
              }, function (e, t) {
                r(t);
              });
            });
          }).catch(r);
        });
        u(r, t);
        return r;
      },
      clear: function (e) {
        var t = this;
        var n = new a(function (e, n) {
          t.ready().then(function () {
            var r = t._dbInfo;
            r.db.transaction(function (t) {
              L(t, r, "DELETE FROM " + r.storeName, [], function () {
                e();
              }, function (e, t) {
                n(t);
              });
            });
          }).catch(n);
        });
        u(n, e);
        return n;
      },
      length: function (e) {
        var t = this;
        var n = new a(function (e, n) {
          t.ready().then(function () {
            var r = t._dbInfo;
            r.db.transaction(function (t) {
              L(t, r, "SELECT COUNT(key) as c FROM " + r.storeName, [], function (t, n) {
                var r = n.rows.item(0).c;
                e(r);
              }, function (e, t) {
                n(t);
              });
            });
          }).catch(n);
        });
        u(n, e);
        return n;
      },
      key: function (e, t) {
        var n = this;
        var r = new a(function (t, r) {
          n.ready().then(function () {
            var o = n._dbInfo;
            o.db.transaction(function (n) {
              L(n, o, "SELECT key FROM " + o.storeName + " WHERE id = ? LIMIT 1", [e + 1], function (e, n) {
                var r = n.rows.length ? n.rows.item(0).key : null;
                t(r);
              }, function (e, t) {
                r(t);
              });
            });
          }).catch(r);
        });
        u(r, t);
        return r;
      },
      keys: function (e) {
        var t = this;
        var n = new a(function (e, n) {
          t.ready().then(function () {
            var r = t._dbInfo;
            r.db.transaction(function (t) {
              L(t, r, "SELECT key FROM " + r.storeName, [], function (t, n) {
                var r = [];
                for (var o = 0; o < n.rows.length; o++) {
                  r.push(n.rows.item(o).key);
                }
                e(r);
              }, function (e, t) {
                n(t);
              });
            });
          }).catch(n);
        });
        u(n, e);
        return n;
      },
      dropInstance: function (e, t) {
        t = f.apply(this, arguments);
        var n = this.config();
        if (!(e = typeof e != "function" && e || {}).name) {
          e.name = e.name || n.name;
          e.storeName = e.storeName || n.storeName;
        }
        var r;
        var o = this;
        u(r = e.name ? new a(function (t) {
          var r;
          r = e.name === n.name ? o._dbInfo.db : openDatabase(e.name, "", "", 0);
          if (e.storeName) {
            t({
              db: r,
              storeNames: [e.storeName]
            });
          } else {
            t(F(r));
          }
        }).then(function (e) {
          return new a(function (t, n) {
            e.db.transaction(function (r) {
              function o(e) {
                return new a(function (t, n) {
                  r.executeSql("DROP TABLE IF EXISTS " + e, [], function () {
                    t();
                  }, function (e, t) {
                    n(t);
                  });
                });
              }
              var i = [];
              for (var u = 0, c = e.storeNames.length; u < c; u++) {
                i.push(o(e.storeNames[u]));
              }
              a.all(i).then(function () {
                t();
              }).catch(function (e) {
                n(e);
              });
            }, function (e) {
              n(e);
            });
          });
        }) : a.reject("Invalid arguments"), t);
        return r;
      }
    };
    function M(e, t) {
      var n = e.name + "/";
      if (e.storeName !== t.storeName) {
        n += e.storeName + "/";
      }
      return n;
    }
    function q() {
      return !function () {
        try {
          localStorage.setItem("_localforage_support_test", true);
          localStorage.removeItem("_localforage_support_test");
          return false;
        } catch (e) {
          return true;
        }
      }() || localStorage.length > 0;
    }
    var z = {
      _driver: "localStorageWrapper",
      _initStorage: function (e) {
        var t = {};
        if (e) {
          for (var n in e) {
            t[n] = e[n];
          }
        }
        t.keyPrefix = M(e, this._defaultConfig);
        if (q()) {
          this._dbInfo = t;
          t.serializer = B;
          return a.resolve();
        } else {
          return a.reject();
        }
      },
      _support: function () {
        try {
          return typeof localStorage != "undefined" && "setItem" in localStorage && !!localStorage.setItem;
        } catch (e) {
          return false;
        }
      }(),
      iterate: function (e, t) {
        var n = this;
        var r = n.ready().then(function () {
          var t = n._dbInfo;
          var r = t.keyPrefix;
          var o = r.length;
          for (var i = localStorage.length, a = 1, u = 0; u < i; u++) {
            var c = localStorage.key(u);
            if (c.indexOf(r) === 0) {
              var s = localStorage.getItem(c);
              s &&= t.serializer.deserialize(s);
              if ((s = e(s, c.substring(o), a++)) !== undefined) {
                return s;
              }
            }
          }
        });
        u(r, t);
        return r;
      },
      getItem: function (e, t) {
        var n = this;
        e = s(e);
        var r = n.ready().then(function () {
          var t = n._dbInfo;
          var r = localStorage.getItem(t.keyPrefix + e);
          r &&= t.serializer.deserialize(r);
          return r;
        });
        u(r, t);
        return r;
      },
      setItem: function (e, t, n) {
        var r = this;
        e = s(e);
        var o = r.ready().then(function () {
          if (t === undefined) {
            t = null;
          }
          var n = t;
          return new a(function (o, i) {
            var a = r._dbInfo;
            a.serializer.serialize(t, function (t, r) {
              if (r) {
                i(r);
              } else {
                try {
                  localStorage.setItem(a.keyPrefix + e, t);
                  o(n);
                } catch (e) {
                  if (e.name === "QuotaExceededError" || e.name === "NS_ERROR_DOM_QUOTA_REACHED") {
                    i(e);
                  }
                  i(e);
                }
              }
            });
          });
        });
        u(o, n);
        return o;
      },
      removeItem: function (e, t) {
        var n = this;
        e = s(e);
        var r = n.ready().then(function () {
          var t = n._dbInfo;
          localStorage.removeItem(t.keyPrefix + e);
        });
        u(r, t);
        return r;
      },
      clear: function (e) {
        var t = this;
        var n = t.ready().then(function () {
          var e = t._dbInfo.keyPrefix;
          for (var n = localStorage.length - 1; n >= 0; n--) {
            var r = localStorage.key(n);
            if (r.indexOf(e) === 0) {
              localStorage.removeItem(r);
            }
          }
        });
        u(n, e);
        return n;
      },
      length: function (e) {
        var t = this.keys().then(function (e) {
          return e.length;
        });
        u(t, e);
        return t;
      },
      key: function (e, t) {
        var n = this;
        var r = n.ready().then(function () {
          var t;
          var r = n._dbInfo;
          try {
            t = localStorage.key(e);
          } catch (e) {
            t = null;
          }
          t &&= t.substring(r.keyPrefix.length);
          return t;
        });
        u(r, t);
        return r;
      },
      keys: function (e) {
        var t = this;
        var n = t.ready().then(function () {
          var e = t._dbInfo;
          for (var n = localStorage.length, r = [], o = 0; o < n; o++) {
            var i = localStorage.key(o);
            if (i.indexOf(e.keyPrefix) === 0) {
              r.push(i.substring(e.keyPrefix.length));
            }
          }
          return r;
        });
        u(n, e);
        return n;
      },
      dropInstance: function (e, t) {
        t = f.apply(this, arguments);
        if (!(e = typeof e != "function" && e || {}).name) {
          var n = this.config();
          e.name = e.name || n.name;
          e.storeName = e.storeName || n.storeName;
        }
        var r;
        var o = this;
        u(r = e.name ? new a(function (t) {
          if (e.storeName) {
            t(M(e, o._defaultConfig));
          } else {
            t(e.name + "/");
          }
        }).then(function (e) {
          for (var t = localStorage.length - 1; t >= 0; t--) {
            var n = localStorage.key(t);
            if (n.indexOf(e) === 0) {
              localStorage.removeItem(n);
            }
          }
        }) : a.reject("Invalid arguments"), t);
        return r;
      }
    };
    function $(e, t) {
      var n;
      var r;
      for (var o = e.length, i = 0; i < o;) {
        if ((n = e[i]) === (r = t) || typeof n == "number" && typeof r == "number" && isNaN(n) && isNaN(r)) {
          return true;
        }
        i++;
      }
      return false;
    }
    var W = Array.isArray || function (e) {
      return Object.prototype.toString.call(e) === "[object Array]";
    };
    var H = {};
    var K = {};
    var X = {
      INDEXEDDB: N,
      WEBSQL: U,
      LOCALSTORAGE: z
    };
    var J = [X.INDEXEDDB._driver, X.WEBSQL._driver, X.LOCALSTORAGE._driver];
    var V = ["dropInstance"];
    var Q = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(V);
    var G = {
      description: "",
      driver: J.slice(),
      name: "localforage",
      size: 4980736,
      storeName: "keyvaluepairs",
      version: 1
    };
    function Y(e, t) {
      e[t] = function () {
        var n = arguments;
        return e.ready().then(function () {
          return e[t].apply(e, n);
        });
      };
    }
    function Z() {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        if (t) {
          for (var n in t) {
            if (t.hasOwnProperty(n)) {
              if (W(t[n])) {
                arguments[0][n] = t[n].slice();
              } else {
                arguments[0][n] = t[n];
              }
            }
          }
        }
      }
      return arguments[0];
    }
    var ee = new (function () {
      function e(t) {
        (function (e, t) {
          if (!(e instanceof t)) {
            throw new TypeError("Cannot call a class as a function");
          }
        })(this, e);
        for (var n in X) {
          if (X.hasOwnProperty(n)) {
            var r = X[n];
            var o = r._driver;
            this[n] = o;
            if (!H[o]) {
              this.defineDriver(r);
            }
          }
        }
        this._defaultConfig = Z({}, G);
        this._config = Z({}, this._defaultConfig, t);
        this._driverSet = null;
        this._initDriver = null;
        this._ready = false;
        this._dbInfo = null;
        this._wrapLibraryMethodsWithReady();
        this.setDriver(this._config.driver).catch(function () {});
      }
      e.prototype.config = function (e) {
        if ((e === undefined ? "undefined" : r(e)) === "object") {
          if (this._ready) {
            return new Error("Can't call config() after localforage has been used.");
          }
          for (var t in e) {
            if (t === "storeName") {
              e[t] = e[t].replace(/\W/g, "_");
            }
            if (t === "version" && typeof e[t] != "number") {
              return new Error("Database version must be a number.");
            }
            this._config[t] = e[t];
          }
          return !("driver" in e) || !e.driver || this.setDriver(this._config.driver);
        }
        if (typeof e == "string") {
          return this._config[e];
        } else {
          return this._config;
        }
      };
      e.prototype.defineDriver = function (e, t, n) {
        var r = new a(function (t, n) {
          try {
            var r = e._driver;
            var o = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
            if (!e._driver) {
              n(o);
              return;
            }
            var i = Q.concat("_initStorage");
            for (var c = 0, s = i.length; c < s; c++) {
              var f = i[c];
              if ((!$(V, f) || e[f]) && typeof e[f] != "function") {
                n(o);
                return;
              }
            }
            (function () {
              var t = function (e) {
                return function () {
                  var t = new Error("Method " + e + " is not implemented by the current driver");
                  var n = a.reject(t);
                  u(n, arguments[arguments.length - 1]);
                  return n;
                };
              };
              for (var n = 0, r = V.length; n < r; n++) {
                var o = V[n];
                e[o] ||= t(o);
              }
            })();
            function l(n) {
              if (H[r]) {
                console.info("Redefining LocalForage driver: " + r);
              }
              H[r] = e;
              K[r] = n;
              t();
            }
            if ("_support" in e) {
              if (e._support && typeof e._support == "function") {
                e._support().then(l, n);
              } else {
                l(!!e._support);
              }
            } else {
              l(true);
            }
          } catch (e) {
            n(e);
          }
        });
        c(r, t, n);
        return r;
      };
      e.prototype.driver = function () {
        return this._driver || null;
      };
      e.prototype.getDriver = function (e, t, n) {
        var r = H[e] ? a.resolve(H[e]) : a.reject(new Error("Driver not found."));
        c(r, t, n);
        return r;
      };
      e.prototype.getSerializer = function (e) {
        var t = a.resolve(B);
        c(t, e);
        return t;
      };
      e.prototype.ready = function (e) {
        var t = this;
        var n = t._driverSet.then(function () {
          if (t._ready === null) {
            t._ready = t._initDriver();
          }
          return t._ready;
        });
        c(n, e, e);
        return n;
      };
      e.prototype.setDriver = function (e, t, n) {
        var r = this;
        if (!W(e)) {
          e = [e];
        }
        var o = this._getSupportedDrivers(e);
        function i() {
          r._config.driver = r.driver();
        }
        function u(e) {
          r._extend(e);
          i();
          r._ready = r._initStorage(r._config);
          return r._ready;
        }
        var s = this._driverSet !== null ? this._driverSet.catch(function () {
          return a.resolve();
        }) : a.resolve();
        this._driverSet = s.then(function () {
          var e = o[0];
          r._dbInfo = null;
          r._ready = null;
          return r.getDriver(e).then(function (e) {
            r._driver = e._driver;
            i();
            r._wrapLibraryMethodsWithReady();
            r._initDriver = function (e) {
              return function () {
                var t = 0;
                return function n() {
                  while (t < e.length) {
                    var o = e[t];
                    t++;
                    r._dbInfo = null;
                    r._ready = null;
                    return r.getDriver(o).then(u).catch(n);
                  }
                  i();
                  var c = new Error("No available storage method found.");
                  r._driverSet = a.reject(c);
                  return r._driverSet;
                }();
              };
            }(o);
          });
        }).catch(function () {
          i();
          var e = new Error("No available storage method found.");
          r._driverSet = a.reject(e);
          return r._driverSet;
        });
        c(this._driverSet, t, n);
        return this._driverSet;
      };
      e.prototype.supports = function (e) {
        return !!K[e];
      };
      e.prototype._extend = function (e) {
        Z(this, e);
      };
      e.prototype._getSupportedDrivers = function (e) {
        var t = [];
        for (var n = 0, r = e.length; n < r; n++) {
          var o = e[n];
          if (this.supports(o)) {
            t.push(o);
          }
        }
        return t;
      };
      e.prototype._wrapLibraryMethodsWithReady = function () {
        for (var e = 0, t = Q.length; e < t; e++) {
          Y(this, Q[e]);
        }
      };
      e.prototype.createInstance = function (t) {
        return new e(t);
      };
      return e;
    }())();
    t.exports = ee;
  }, {
    3: 3
  }]
}, {}, [4])(4);