var e = require(/*webcrack:missing*/"./25.js");
module.exports = function t(e, n, r) {
  function i(s, a) {
    if (!n[s]) {
      if (!e[s]) {
        if (o) {
          return o(s, true);
        }
        var c = new Error("Cannot find module '" + s + "'");
        c.code = "MODULE_NOT_FOUND";
        throw c;
      }
      var u = n[s] = {
        exports: {}
      };
      e[s][0].call(u.exports, function (t) {
        var n = e[s][1][t];
        return i(n || t);
      }, u, u.exports, t, e, n, r);
    }
    return n[s].exports;
  }
  var o = false;
  for (var s = 0; s < r.length; s++) {
    i(r[s]);
  }
  return i;
}({
  1: [function (t, n, r) {
    (function (t) {
      "use strict";

      var e;
      var r;
      var i = t.MutationObserver || t.WebKitMutationObserver;
      if (i) {
        var o = 0;
        var s = new i(l);
        var a = t.document.createTextNode("");
        s.observe(a, {
          characterData: true
        });
        e = function () {
          a.data = o = ++o % 2;
        };
      } else if (t.setImmediate || t.MessageChannel === undefined) {
        e = "document" in t && "onreadystatechange" in t.document.createElement("script") ? function () {
          var e = t.document.createElement("script");
          e.onreadystatechange = function () {
            l();
            e.onreadystatechange = null;
            e.parentNode.removeChild(e);
            e = null;
          };
          t.document.documentElement.appendChild(e);
        } : function () {
          setTimeout(l, 0);
        };
      } else {
        var c = new t.MessageChannel();
        c.port1.onmessage = l;
        e = function () {
          c.port2.postMessage(0);
        };
      }
      var u = [];
      function l() {
        var t;
        var e;
        r = true;
        for (var n = u.length; n;) {
          e = u;
          u = [];
          t = -1;
          while (++t < n) {
            e[t]();
          }
          n = u.length;
        }
        r = false;
      }
      n.exports = function (t) {
        if (u.push(t) === 1 && !r) {
          e();
        }
      };
    }).call(this, e !== undefined ? e : typeof self != "undefined" ? self : typeof window != "undefined" ? window : {});
  }, {}],
  2: [function (t, e, n) {
    "use strict";

    var r = t(1);
    function i() {}
    var o = {};
    var s = ["REJECTED"];
    var a = ["FULFILLED"];
    var c = ["PENDING"];
    function u(t) {
      if (typeof t != "function") {
        throw new TypeError("resolver must be a function");
      }
      this.state = c;
      this.queue = [];
      this.outcome = undefined;
      if (t !== i) {
        f(this, t);
      }
    }
    function l(t, e, n) {
      this.promise = t;
      if (typeof e == "function") {
        this.onFulfilled = e;
        this.callFulfilled = this.otherCallFulfilled;
      }
      if (typeof n == "function") {
        this.onRejected = n;
        this.callRejected = this.otherCallRejected;
      }
    }
    function h(t, e, n) {
      r(function () {
        var r;
        try {
          r = e(n);
        } catch (e) {
          return o.reject(t, e);
        }
        if (r === t) {
          o.reject(t, new TypeError("Cannot resolve promise with itself"));
        } else {
          o.resolve(t, r);
        }
      });
    }
    function p(t) {
      var e = t && t.then;
      if (t && (typeof t == "object" || typeof t == "function") && typeof e == "function") {
        return function () {
          e.apply(t, arguments);
        };
      }
    }
    function f(t, e) {
      var n = false;
      function r(e) {
        if (!n) {
          n = true;
          o.reject(t, e);
        }
      }
      function i(e) {
        if (!n) {
          n = true;
          o.resolve(t, e);
        }
      }
      var s = d(function () {
        e(i, r);
      });
      if (s.status === "error") {
        r(s.value);
      }
    }
    function d(t, e) {
      var n = {};
      try {
        n.value = t(e);
        n.status = "success";
      } catch (t) {
        n.status = "error";
        n.value = t;
      }
      return n;
    }
    e.exports = u;
    u.prototype.catch = function (t) {
      return this.then(null, t);
    };
    u.prototype.then = function (t, e) {
      if (typeof t != "function" && this.state === a || typeof e != "function" && this.state === s) {
        return this;
      }
      var n = new this.constructor(i);
      if (this.state !== c) {
        h(n, this.state === a ? t : e, this.outcome);
      } else {
        this.queue.push(new l(n, t, e));
      }
      return n;
    };
    l.prototype.callFulfilled = function (t) {
      o.resolve(this.promise, t);
    };
    l.prototype.otherCallFulfilled = function (t) {
      h(this.promise, this.onFulfilled, t);
    };
    l.prototype.callRejected = function (t) {
      o.reject(this.promise, t);
    };
    l.prototype.otherCallRejected = function (t) {
      h(this.promise, this.onRejected, t);
    };
    o.resolve = function (t, e) {
      var n = d(p, e);
      if (n.status === "error") {
        return o.reject(t, n.value);
      }
      var r = n.value;
      if (r) {
        f(t, r);
      } else {
        t.state = a;
        t.outcome = e;
        for (var i = -1, s = t.queue.length; ++i < s;) {
          t.queue[i].callFulfilled(e);
        }
      }
      return t;
    };
    o.reject = function (t, e) {
      t.state = s;
      t.outcome = e;
      for (var n = -1, r = t.queue.length; ++n < r;) {
        t.queue[n].callRejected(e);
      }
      return t;
    };
    u.resolve = function (t) {
      if (t instanceof this) {
        return t;
      } else {
        return o.resolve(new this(i), t);
      }
    };
    u.reject = function (t) {
      var e = new this(i);
      return o.reject(e, t);
    };
    u.all = function (t) {
      var e = this;
      if (Object.prototype.toString.call(t) !== "[object Array]") {
        return this.reject(new TypeError("must be an array"));
      }
      var n = t.length;
      var r = false;
      if (!n) {
        return this.resolve([]);
      }
      var s = new Array(n);
      var a = 0;
      for (var c = -1, u = new this(i); ++c < n;) {
        l(t[c], c);
      }
      return u;
      function l(t, i) {
        e.resolve(t).then(function (t) {
          s[i] = t;
          if (++a === n && !r) {
            r = true;
            o.resolve(u, s);
          }
        }, function (t) {
          if (!r) {
            r = true;
            o.reject(u, t);
          }
        });
      }
    };
    u.race = function (t) {
      var e = this;
      if (Object.prototype.toString.call(t) !== "[object Array]") {
        return this.reject(new TypeError("must be an array"));
      }
      var n = t.length;
      var r = false;
      if (!n) {
        return this.resolve([]);
      }
      var s;
      for (var a = -1, c = new this(i); ++a < n;) {
        s = t[a];
        e.resolve(s).then(function (t) {
          if (!r) {
            r = true;
            o.resolve(c, t);
          }
        }, function (t) {
          if (!r) {
            r = true;
            o.reject(c, t);
          }
        });
      }
      return c;
    };
  }, {
    1: 1
  }],
  3: [function (t, n, r) {
    (function (e) {
      "use strict";

      if (typeof e.Promise != "function") {
        e.Promise = t(2);
      }
    }).call(this, e !== undefined ? e : typeof self != "undefined" ? self : typeof window != "undefined" ? window : {});
  }, {
    2: 2
  }],
  4: [function (t, e, n) {
    "use strict";

    var r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (t) {
      return typeof t;
    } : function (t) {
      if (t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype) {
        return "symbol";
      } else {
        return typeof t;
      }
    };
    var i = function () {
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
      } catch (t) {
        return;
      }
    }();
    function o(t, e) {
      t = t || [];
      e = e || {};
      try {
        return new Blob(t, e);
      } catch (i) {
        if (i.name !== "TypeError") {
          throw i;
        }
        var n = new (typeof BlobBuilder != "undefined" ? BlobBuilder : typeof MSBlobBuilder != "undefined" ? MSBlobBuilder : typeof MozBlobBuilder != "undefined" ? MozBlobBuilder : WebKitBlobBuilder)();
        for (var r = 0; r < t.length; r += 1) {
          n.append(t[r]);
        }
        return n.getBlob(e.type);
      }
    }
    if (typeof Promise == "undefined") {
      t(3);
    }
    var s = Promise;
    function a(t, e) {
      if (e) {
        t.then(function (t) {
          e(null, t);
        }, function (t) {
          e(t);
        });
      }
    }
    function c(t, e, n) {
      if (typeof e == "function") {
        t.then(e);
      }
      if (typeof n == "function") {
        t.catch(n);
      }
    }
    function u(t) {
      if (typeof t != "string") {
        console.warn(t + " used as a key, but it is not a string.");
        t = String(t);
      }
      return t;
    }
    function l() {
      if (arguments.length && typeof arguments[arguments.length - 1] == "function") {
        return arguments[arguments.length - 1];
      }
    }
    var h = undefined;
    var p = {};
    var f = Object.prototype.toString;
    function d(t) {
      if (typeof h == "boolean") {
        return s.resolve(h);
      } else {
        return function (t) {
          return new s(function (e) {
            var n = t.transaction("local-forage-detect-blob-support", "readwrite");
            var r = o([""]);
            n.objectStore("local-forage-detect-blob-support").put(r, "key");
            n.onabort = function (t) {
              t.preventDefault();
              t.stopPropagation();
              e(false);
            };
            n.oncomplete = function () {
              var t = navigator.userAgent.match(/Chrome\/(\d+)/);
              var n = navigator.userAgent.match(/Edge\//);
              e(n || !t || parseInt(t[1], 10) >= 43);
            };
          }).catch(function () {
            return false;
          });
        }(t).then(function (t) {
          return h = t;
        });
      }
    }
    function g(t) {
      var e = p[t.name];
      var n = {};
      n.promise = new s(function (t, e) {
        n.resolve = t;
        n.reject = e;
      });
      e.deferredOperations.push(n);
      if (e.dbReady) {
        e.dbReady = e.dbReady.then(function () {
          return n.promise;
        });
      } else {
        e.dbReady = n.promise;
      }
    }
    function m(t) {
      var e = p[t.name].deferredOperations.pop();
      if (e) {
        e.resolve();
        return e.promise;
      }
    }
    function y(t, e) {
      var n = p[t.name].deferredOperations.pop();
      if (n) {
        n.reject(e);
        return n.promise;
      }
    }
    function b(t, e) {
      return new s(function (n, r) {
        p[t.name] = p[t.name] || {
          forages: [],
          db: null,
          dbReady: null,
          deferredOperations: []
        };
        if (t.db) {
          if (!e) {
            return n(t.db);
          }
          g(t);
          t.db.close();
        }
        var o = [t.name];
        if (e) {
          o.push(t.version);
        }
        var s = i.open.apply(i, o);
        if (e) {
          s.onupgradeneeded = function (e) {
            var n = s.result;
            try {
              n.createObjectStore(t.storeName);
              if (e.oldVersion <= 1) {
                n.createObjectStore("local-forage-detect-blob-support");
              }
            } catch (n) {
              if (n.name !== "ConstraintError") {
                throw n;
              }
              console.warn("The database \"" + t.name + "\" has been upgraded from version " + e.oldVersion + " to version " + e.newVersion + ", but the storage \"" + t.storeName + "\" already exists.");
            }
          };
        }
        s.onerror = function (t) {
          t.preventDefault();
          r(s.error);
        };
        s.onsuccess = function () {
          n(s.result);
          m(t);
        };
      });
    }
    function v(t) {
      return b(t, false);
    }
    function w(t) {
      return b(t, true);
    }
    function x(t, e) {
      if (!t.db) {
        return true;
      }
      var n = !t.db.objectStoreNames.contains(t.storeName);
      var r = t.version < t.db.version;
      var i = t.version > t.db.version;
      if (r) {
        if (t.version !== e) {
          console.warn("The database \"" + t.name + "\" can't be downgraded from version " + t.db.version + " to version " + t.version + ".");
        }
        t.version = t.db.version;
      }
      if (i || n) {
        if (n) {
          var o = t.db.version + 1;
          if (o > t.version) {
            t.version = o;
          }
        }
        return true;
      }
      return false;
    }
    function _(t) {
      return o([function (t) {
        for (var e = t.length, n = new ArrayBuffer(e), r = new Uint8Array(n), i = 0; i < e; i++) {
          r[i] = t.charCodeAt(i);
        }
        return n;
      }(atob(t.data))], {
        type: t.type
      });
    }
    function T(t) {
      return t && t.__local_forage_encoded_blob;
    }
    function E(t) {
      var e = this;
      var n = e._initReady().then(function () {
        var t = p[e._dbInfo.name];
        if (t && t.dbReady) {
          return t.dbReady;
        }
      });
      c(n, t, t);
      return n;
    }
    function O(t, e, n, r = 1) {
      try {
        var i = t.db.transaction(t.storeName, e);
        n(null, i);
      } catch (i) {
        if (r > 0 && (!t.db || i.name === "InvalidStateError" || i.name === "NotFoundError")) {
          return s.resolve().then(function () {
            if (!t.db || i.name === "NotFoundError" && !t.db.objectStoreNames.contains(t.storeName) && t.version <= t.db.version) {
              if (t.db) {
                t.version = t.db.version + 1;
              }
              return w(t);
            }
          }).then(function () {
            return function (t) {
              g(t);
              var e = p[t.name];
              for (var n = e.forages, r = 0; r < n.length; r++) {
                var i = n[r];
                if (i._dbInfo.db) {
                  i._dbInfo.db.close();
                  i._dbInfo.db = null;
                }
              }
              t.db = null;
              return v(t).then(function (e) {
                t.db = e;
                if (x(t)) {
                  return w(t);
                } else {
                  return e;
                }
              }).then(function (r) {
                t.db = e.db = r;
                for (var i = 0; i < n.length; i++) {
                  n[i]._dbInfo.db = r;
                }
              }).catch(function (e) {
                y(t, e);
                throw e;
              });
            }(t).then(function () {
              O(t, e, n, r - 1);
            });
          }).catch(n);
        }
        n(i);
      }
    }
    var S = {
      _driver: "asyncStorage",
      _initStorage: function (t) {
        var e = this;
        var n = {
          db: null
        };
        if (t) {
          for (var r in t) {
            n[r] = t[r];
          }
        }
        var i = p[n.name];
        if (!i) {
          i = {
            forages: [],
            db: null,
            dbReady: null,
            deferredOperations: []
          };
          p[n.name] = i;
        }
        i.forages.push(e);
        if (!e._initReady) {
          e._initReady = e.ready;
          e.ready = E;
        }
        var o = [];
        function a() {
          return s.resolve();
        }
        for (var c = 0; c < i.forages.length; c++) {
          var u = i.forages[c];
          if (u !== e) {
            o.push(u._initReady().catch(a));
          }
        }
        var l = i.forages.slice(0);
        return s.all(o).then(function () {
          n.db = i.db;
          return v(n);
        }).then(function (t) {
          n.db = t;
          if (x(n, e._defaultConfig.version)) {
            return w(n);
          } else {
            return t;
          }
        }).then(function (t) {
          n.db = i.db = t;
          e._dbInfo = n;
          for (var r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== e) {
              o._dbInfo.db = n.db;
              o._dbInfo.version = n.version;
            }
          }
        });
      },
      _support: function () {
        try {
          if (!i || !i.open) {
            return false;
          }
          var t = typeof openDatabase != "undefined" && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform);
          var e = typeof fetch == "function" && fetch.toString().indexOf("[native code") !== -1;
          return (!t || e) && typeof indexedDB != "undefined" && typeof IDBKeyRange != "undefined";
        } catch (t) {
          return false;
        }
      }(),
      iterate: function (t, e) {
        var n = this;
        var r = new s(function (e, r) {
          n.ready().then(function () {
            O(n._dbInfo, "readonly", function (i, o) {
              if (i) {
                return r(i);
              }
              try {
                var s = o.objectStore(n._dbInfo.storeName).openCursor();
                var a = 1;
                s.onsuccess = function () {
                  var n = s.result;
                  if (n) {
                    var r = n.value;
                    if (T(r)) {
                      r = _(r);
                    }
                    var i = t(r, n.key, a++);
                    if (i !== undefined) {
                      e(i);
                    } else {
                      n.continue();
                    }
                  } else {
                    e();
                  }
                };
                s.onerror = function () {
                  r(s.error);
                };
              } catch (t) {
                r(t);
              }
            });
          }).catch(r);
        });
        a(r, e);
        return r;
      },
      getItem: function (t, e) {
        var n = this;
        t = u(t);
        var r = new s(function (e, r) {
          n.ready().then(function () {
            O(n._dbInfo, "readonly", function (i, o) {
              if (i) {
                return r(i);
              }
              try {
                var s = o.objectStore(n._dbInfo.storeName).get(t);
                s.onsuccess = function () {
                  var t = s.result;
                  if (t === undefined) {
                    t = null;
                  }
                  if (T(t)) {
                    t = _(t);
                  }
                  e(t);
                };
                s.onerror = function () {
                  r(s.error);
                };
              } catch (t) {
                r(t);
              }
            });
          }).catch(r);
        });
        a(r, e);
        return r;
      },
      setItem: function (t, e, n) {
        var r = this;
        t = u(t);
        var i = new s(function (n, i) {
          var o;
          r.ready().then(function () {
            o = r._dbInfo;
            if (f.call(e) === "[object Blob]") {
              return d(o.db).then(function (t) {
                if (t) {
                  return e;
                } else {
                  n = e;
                  return new s(function (t, e) {
                    var r = new FileReader();
                    r.onerror = e;
                    r.onloadend = function (e) {
                      var r = btoa(e.target.result || "");
                      t({
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
              return e;
            }
          }).then(function (e) {
            O(r._dbInfo, "readwrite", function (o, s) {
              if (o) {
                return i(o);
              }
              try {
                var a = s.objectStore(r._dbInfo.storeName);
                if (e === null) {
                  e = undefined;
                }
                var c = a.put(e, t);
                s.oncomplete = function () {
                  if (e === undefined) {
                    e = null;
                  }
                  n(e);
                };
                s.onabort = s.onerror = function () {
                  var t = c.error ? c.error : c.transaction.error;
                  i(t);
                };
              } catch (t) {
                i(t);
              }
            });
          }).catch(i);
        });
        a(i, n);
        return i;
      },
      removeItem: function (t, e) {
        var n = this;
        t = u(t);
        var r = new s(function (e, r) {
          n.ready().then(function () {
            O(n._dbInfo, "readwrite", function (i, o) {
              if (i) {
                return r(i);
              }
              try {
                var s = o.objectStore(n._dbInfo.storeName).delete(t);
                o.oncomplete = function () {
                  e();
                };
                o.onerror = function () {
                  r(s.error);
                };
                o.onabort = function () {
                  var t = s.error ? s.error : s.transaction.error;
                  r(t);
                };
              } catch (t) {
                r(t);
              }
            });
          }).catch(r);
        });
        a(r, e);
        return r;
      },
      clear: function (t) {
        var e = this;
        var n = new s(function (t, n) {
          e.ready().then(function () {
            O(e._dbInfo, "readwrite", function (r, i) {
              if (r) {
                return n(r);
              }
              try {
                var o = i.objectStore(e._dbInfo.storeName).clear();
                i.oncomplete = function () {
                  t();
                };
                i.onabort = i.onerror = function () {
                  var t = o.error ? o.error : o.transaction.error;
                  n(t);
                };
              } catch (t) {
                n(t);
              }
            });
          }).catch(n);
        });
        a(n, t);
        return n;
      },
      length: function (t) {
        var e = this;
        var n = new s(function (t, n) {
          e.ready().then(function () {
            O(e._dbInfo, "readonly", function (r, i) {
              if (r) {
                return n(r);
              }
              try {
                var o = i.objectStore(e._dbInfo.storeName).count();
                o.onsuccess = function () {
                  t(o.result);
                };
                o.onerror = function () {
                  n(o.error);
                };
              } catch (t) {
                n(t);
              }
            });
          }).catch(n);
        });
        a(n, t);
        return n;
      },
      key: function (t, e) {
        var n = this;
        var r = new s(function (e, r) {
          if (t < 0) {
            e(null);
          } else {
            n.ready().then(function () {
              O(n._dbInfo, "readonly", function (i, o) {
                if (i) {
                  return r(i);
                }
                try {
                  var s = o.objectStore(n._dbInfo.storeName);
                  var a = false;
                  var c = s.openKeyCursor();
                  c.onsuccess = function () {
                    var n = c.result;
                    if (n) {
                      if (t === 0 || a) {
                        e(n.key);
                      } else {
                        a = true;
                        n.advance(t);
                      }
                    } else {
                      e(null);
                    }
                  };
                  c.onerror = function () {
                    r(c.error);
                  };
                } catch (t) {
                  r(t);
                }
              });
            }).catch(r);
          }
        });
        a(r, e);
        return r;
      },
      keys: function (t) {
        var e = this;
        var n = new s(function (t, n) {
          e.ready().then(function () {
            O(e._dbInfo, "readonly", function (r, i) {
              if (r) {
                return n(r);
              }
              try {
                var o = i.objectStore(e._dbInfo.storeName).openKeyCursor();
                var s = [];
                o.onsuccess = function () {
                  var e = o.result;
                  if (e) {
                    s.push(e.key);
                    e.continue();
                  } else {
                    t(s);
                  }
                };
                o.onerror = function () {
                  n(o.error);
                };
              } catch (t) {
                n(t);
              }
            });
          }).catch(n);
        });
        a(n, t);
        return n;
      },
      dropInstance: function (t, e) {
        e = l.apply(this, arguments);
        var n = this.config();
        if (!(t = typeof t != "function" && t || {}).name) {
          t.name = t.name || n.name;
          t.storeName = t.storeName || n.storeName;
        }
        var r;
        var o = this;
        if (t.name) {
          var c = t.name === n.name && o._dbInfo.db;
          var u = c ? s.resolve(o._dbInfo.db) : v(t).then(function (e) {
            var n = p[t.name];
            var r = n.forages;
            n.db = e;
            for (var i = 0; i < r.length; i++) {
              r[i]._dbInfo.db = e;
            }
            return e;
          });
          r = t.storeName ? u.then(function (e) {
            if (e.objectStoreNames.contains(t.storeName)) {
              var n = e.version + 1;
              g(t);
              var r = p[t.name];
              var o = r.forages;
              e.close();
              for (var a = 0; a < o.length; a++) {
                var c = o[a];
                c._dbInfo.db = null;
                c._dbInfo.version = n;
              }
              return new s(function (e, r) {
                var o = i.open(t.name, n);
                o.onerror = function (t) {
                  o.result.close();
                  r(t);
                };
                o.onupgradeneeded = function () {
                  o.result.deleteObjectStore(t.storeName);
                };
                o.onsuccess = function () {
                  var t = o.result;
                  t.close();
                  e(t);
                };
              }).then(function (t) {
                r.db = t;
                for (var e = 0; e < o.length; e++) {
                  var n = o[e];
                  n._dbInfo.db = t;
                  m(n._dbInfo);
                }
              }).catch(function (e) {
                (y(t, e) || s.resolve()).catch(function () {});
                throw e;
              });
            }
          }) : u.then(function (e) {
            g(t);
            var n = p[t.name];
            var r = n.forages;
            e.close();
            for (var o = 0; o < r.length; o++) {
              r[o]._dbInfo.db = null;
            }
            return new s(function (e, n) {
              var r = i.deleteDatabase(t.name);
              r.onerror = r.onblocked = function (t) {
                var e = r.result;
                if (e) {
                  e.close();
                }
                n(t);
              };
              r.onsuccess = function () {
                var t = r.result;
                if (t) {
                  t.close();
                }
                e(t);
              };
            }).then(function (t) {
              n.db = t;
              for (var e = 0; e < r.length; e++) {
                m(r[e]._dbInfo);
              }
            }).catch(function (e) {
              (y(t, e) || s.resolve()).catch(function () {});
              throw e;
            });
          });
        } else {
          r = s.reject("Invalid arguments");
        }
        a(r, e);
        return r;
      }
    };
    var I = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var A = /^~~local_forage_type~([^~]+)~/;
    var k = "__lfsc__:".length;
    var C = k + "arbf".length;
    var D = Object.prototype.toString;
    function j(t) {
      var e;
      var n;
      var r;
      var i;
      var o;
      var s = t.length * 0.75;
      var a = t.length;
      var c = 0;
      if (t[t.length - 1] === "=") {
        s--;
        if (t[t.length - 2] === "=") {
          s--;
        }
      }
      var u = new ArrayBuffer(s);
      var l = new Uint8Array(u);
      for (e = 0; e < a; e += 4) {
        n = I.indexOf(t[e]);
        r = I.indexOf(t[e + 1]);
        i = I.indexOf(t[e + 2]);
        o = I.indexOf(t[e + 3]);
        l[c++] = n << 2 | r >> 4;
        l[c++] = (r & 15) << 4 | i >> 2;
        l[c++] = (i & 3) << 6 | o & 63;
      }
      return u;
    }
    function N(t) {
      var e;
      var n = new Uint8Array(t);
      var r = "";
      for (e = 0; e < n.length; e += 3) {
        r += I[n[e] >> 2];
        r += I[(n[e] & 3) << 4 | n[e + 1] >> 4];
        r += I[(n[e + 1] & 15) << 2 | n[e + 2] >> 6];
        r += I[n[e + 2] & 63];
      }
      if (n.length % 3 == 2) {
        r = r.substring(0, r.length - 1) + "=";
      } else if (n.length % 3 == 1) {
        r = r.substring(0, r.length - 2) + "==";
      }
      return r;
    }
    var P = {
      serialize: function (t, e) {
        var n = "";
        if (t) {
          n = D.call(t);
        }
        if (t && (n === "[object ArrayBuffer]" || t.buffer && D.call(t.buffer) === "[object ArrayBuffer]")) {
          var r;
          var i = "__lfsc__:";
          if (t instanceof ArrayBuffer) {
            r = t;
            i += "arbf";
          } else {
            r = t.buffer;
            if (n === "[object Int8Array]") {
              i += "si08";
            } else if (n === "[object Uint8Array]") {
              i += "ui08";
            } else if (n === "[object Uint8ClampedArray]") {
              i += "uic8";
            } else if (n === "[object Int16Array]") {
              i += "si16";
            } else if (n === "[object Uint16Array]") {
              i += "ur16";
            } else if (n === "[object Int32Array]") {
              i += "si32";
            } else if (n === "[object Uint32Array]") {
              i += "ui32";
            } else if (n === "[object Float32Array]") {
              i += "fl32";
            } else if (n === "[object Float64Array]") {
              i += "fl64";
            } else {
              e(new Error("Failed to get type for BinaryArray"));
            }
          }
          e(i + N(r));
        } else if (n === "[object Blob]") {
          var o = new FileReader();
          o.onload = function () {
            var n = "~~local_forage_type~" + t.type + "~" + N(this.result);
            e("__lfsc__:blob" + n);
          };
          o.readAsArrayBuffer(t);
        } else {
          try {
            e(JSON.stringify(t));
          } catch (n) {
            console.error("Couldn't convert value into a JSON string: ", t);
            e(null, n);
          }
        }
      },
      deserialize: function (t) {
        if (t.substring(0, k) !== "__lfsc__:") {
          return JSON.parse(t);
        }
        var e;
        var n = t.substring(C);
        var r = t.substring(k, C);
        if (r === "blob" && A.test(n)) {
          var i = n.match(A);
          e = i[1];
          n = n.substring(i[0].length);
        }
        var s = j(n);
        switch (r) {
          case "arbf":
            return s;
          case "blob":
            return o([s], {
              type: e
            });
          case "si08":
            return new Int8Array(s);
          case "ui08":
            return new Uint8Array(s);
          case "uic8":
            return new Uint8ClampedArray(s);
          case "si16":
            return new Int16Array(s);
          case "ur16":
            return new Uint16Array(s);
          case "si32":
            return new Int32Array(s);
          case "ui32":
            return new Uint32Array(s);
          case "fl32":
            return new Float32Array(s);
          case "fl64":
            return new Float64Array(s);
          default:
            throw new Error("Unkown type: " + r);
        }
      },
      stringToBuffer: j,
      bufferToString: N
    };
    function L(t, e, n, r) {
      t.executeSql("CREATE TABLE IF NOT EXISTS " + e.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], n, r);
    }
    function R(t, e, n, r, i, o) {
      t.executeSql(n, r, i, function (t, s) {
        if (s.code === s.SYNTAX_ERR) {
          t.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [e.storeName], function (t, a) {
            if (a.rows.length) {
              o(t, s);
            } else {
              L(t, e, function () {
                t.executeSql(n, r, i, o);
              }, o);
            }
          }, o);
        } else {
          o(t, s);
        }
      }, o);
    }
    function M(t, e, n, r) {
      var i = this;
      t = u(t);
      var o = new s(function (o, s) {
        i.ready().then(function () {
          if (e === undefined) {
            e = null;
          }
          var a = e;
          var c = i._dbInfo;
          c.serializer.serialize(e, function (e, u) {
            if (u) {
              s(u);
            } else {
              c.db.transaction(function (n) {
                R(n, c, "INSERT OR REPLACE INTO " + c.storeName + " (key, value) VALUES (?, ?)", [t, e], function () {
                  o(a);
                }, function (t, e) {
                  s(e);
                });
              }, function (e) {
                if (e.code === e.QUOTA_ERR) {
                  if (r > 0) {
                    o(M.apply(i, [t, a, n, r - 1]));
                    return;
                  }
                  s(e);
                }
              });
            }
          });
        }).catch(s);
      });
      a(o, n);
      return o;
    }
    function B(t) {
      return new s(function (e, n) {
        t.transaction(function (r) {
          r.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function (n, r) {
            var i = [];
            for (var o = 0; o < r.rows.length; o++) {
              i.push(r.rows.item(o).name);
            }
            e({
              db: t,
              storeNames: i
            });
          }, function (t, e) {
            n(e);
          });
        }, function (t) {
          n(t);
        });
      });
    }
    var U = {
      _driver: "webSQLStorage",
      _initStorage: function (t) {
        var e = this;
        var n = {
          db: null
        };
        if (t) {
          for (var r in t) {
            n[r] = typeof t[r] != "string" ? t[r].toString() : t[r];
          }
        }
        var i = new s(function (t, r) {
          try {
            n.db = openDatabase(n.name, String(n.version), n.description, n.size);
          } catch (t) {
            return r(t);
          }
          n.db.transaction(function (i) {
            L(i, n, function () {
              e._dbInfo = n;
              t();
            }, function (t, e) {
              r(e);
            });
          }, r);
        });
        n.serializer = P;
        return i;
      },
      _support: typeof openDatabase == "function",
      iterate: function (t, e) {
        var n = this;
        var r = new s(function (e, r) {
          n.ready().then(function () {
            var i = n._dbInfo;
            i.db.transaction(function (n) {
              R(n, i, "SELECT * FROM " + i.storeName, [], function (n, r) {
                var o = r.rows;
                for (var s = o.length, a = 0; a < s; a++) {
                  var c = o.item(a);
                  var u = c.value;
                  u &&= i.serializer.deserialize(u);
                  if ((u = t(u, c.key, a + 1)) !== undefined) {
                    e(u);
                    return;
                  }
                }
                e();
              }, function (t, e) {
                r(e);
              });
            });
          }).catch(r);
        });
        a(r, e);
        return r;
      },
      getItem: function (t, e) {
        var n = this;
        t = u(t);
        var r = new s(function (e, r) {
          n.ready().then(function () {
            var i = n._dbInfo;
            i.db.transaction(function (n) {
              R(n, i, "SELECT * FROM " + i.storeName + " WHERE key = ? LIMIT 1", [t], function (t, n) {
                var r = n.rows.length ? n.rows.item(0).value : null;
                r &&= i.serializer.deserialize(r);
                e(r);
              }, function (t, e) {
                r(e);
              });
            });
          }).catch(r);
        });
        a(r, e);
        return r;
      },
      setItem: function (t, e, n) {
        return M.apply(this, [t, e, n, 1]);
      },
      removeItem: function (t, e) {
        var n = this;
        t = u(t);
        var r = new s(function (e, r) {
          n.ready().then(function () {
            var i = n._dbInfo;
            i.db.transaction(function (n) {
              R(n, i, "DELETE FROM " + i.storeName + " WHERE key = ?", [t], function () {
                e();
              }, function (t, e) {
                r(e);
              });
            });
          }).catch(r);
        });
        a(r, e);
        return r;
      },
      clear: function (t) {
        var e = this;
        var n = new s(function (t, n) {
          e.ready().then(function () {
            var r = e._dbInfo;
            r.db.transaction(function (e) {
              R(e, r, "DELETE FROM " + r.storeName, [], function () {
                t();
              }, function (t, e) {
                n(e);
              });
            });
          }).catch(n);
        });
        a(n, t);
        return n;
      },
      length: function (t) {
        var e = this;
        var n = new s(function (t, n) {
          e.ready().then(function () {
            var r = e._dbInfo;
            r.db.transaction(function (e) {
              R(e, r, "SELECT COUNT(key) as c FROM " + r.storeName, [], function (e, n) {
                var r = n.rows.item(0).c;
                t(r);
              }, function (t, e) {
                n(e);
              });
            });
          }).catch(n);
        });
        a(n, t);
        return n;
      },
      key: function (t, e) {
        var n = this;
        var r = new s(function (e, r) {
          n.ready().then(function () {
            var i = n._dbInfo;
            i.db.transaction(function (n) {
              R(n, i, "SELECT key FROM " + i.storeName + " WHERE id = ? LIMIT 1", [t + 1], function (t, n) {
                var r = n.rows.length ? n.rows.item(0).key : null;
                e(r);
              }, function (t, e) {
                r(e);
              });
            });
          }).catch(r);
        });
        a(r, e);
        return r;
      },
      keys: function (t) {
        var e = this;
        var n = new s(function (t, n) {
          e.ready().then(function () {
            var r = e._dbInfo;
            r.db.transaction(function (e) {
              R(e, r, "SELECT key FROM " + r.storeName, [], function (e, n) {
                var r = [];
                for (var i = 0; i < n.rows.length; i++) {
                  r.push(n.rows.item(i).key);
                }
                t(r);
              }, function (t, e) {
                n(e);
              });
            });
          }).catch(n);
        });
        a(n, t);
        return n;
      },
      dropInstance: function (t, e) {
        e = l.apply(this, arguments);
        var n = this.config();
        if (!(t = typeof t != "function" && t || {}).name) {
          t.name = t.name || n.name;
          t.storeName = t.storeName || n.storeName;
        }
        var r;
        var i = this;
        a(r = t.name ? new s(function (e) {
          var r;
          r = t.name === n.name ? i._dbInfo.db : openDatabase(t.name, "", "", 0);
          if (t.storeName) {
            e({
              db: r,
              storeNames: [t.storeName]
            });
          } else {
            e(B(r));
          }
        }).then(function (t) {
          return new s(function (e, n) {
            t.db.transaction(function (r) {
              function i(t) {
                return new s(function (e, n) {
                  r.executeSql("DROP TABLE IF EXISTS " + t, [], function () {
                    e();
                  }, function (t, e) {
                    n(e);
                  });
                });
              }
              var o = [];
              for (var a = 0, c = t.storeNames.length; a < c; a++) {
                o.push(i(t.storeNames[a]));
              }
              s.all(o).then(function () {
                e();
              }).catch(function (t) {
                n(t);
              });
            }, function (t) {
              n(t);
            });
          });
        }) : s.reject("Invalid arguments"), e);
        return r;
      }
    };
    function F(t, e) {
      var n = t.name + "/";
      if (t.storeName !== e.storeName) {
        n += t.storeName + "/";
      }
      return n;
    }
    function W() {
      return !function () {
        try {
          localStorage.setItem("_localforage_support_test", true);
          localStorage.removeItem("_localforage_support_test");
          return false;
        } catch (t) {
          return true;
        }
      }() || localStorage.length > 0;
    }
    var z = {
      _driver: "localStorageWrapper",
      _initStorage: function (t) {
        var e = {};
        if (t) {
          for (var n in t) {
            e[n] = t[n];
          }
        }
        e.keyPrefix = F(t, this._defaultConfig);
        if (W()) {
          this._dbInfo = e;
          e.serializer = P;
          return s.resolve();
        } else {
          return s.reject();
        }
      },
      _support: function () {
        try {
          return typeof localStorage != "undefined" && "setItem" in localStorage && !!localStorage.setItem;
        } catch (t) {
          return false;
        }
      }(),
      iterate: function (t, e) {
        var n = this;
        var r = n.ready().then(function () {
          var e = n._dbInfo;
          var r = e.keyPrefix;
          var i = r.length;
          for (var o = localStorage.length, s = 1, a = 0; a < o; a++) {
            var c = localStorage.key(a);
            if (c.indexOf(r) === 0) {
              var u = localStorage.getItem(c);
              u &&= e.serializer.deserialize(u);
              if ((u = t(u, c.substring(i), s++)) !== undefined) {
                return u;
              }
            }
          }
        });
        a(r, e);
        return r;
      },
      getItem: function (t, e) {
        var n = this;
        t = u(t);
        var r = n.ready().then(function () {
          var e = n._dbInfo;
          var r = localStorage.getItem(e.keyPrefix + t);
          r &&= e.serializer.deserialize(r);
          return r;
        });
        a(r, e);
        return r;
      },
      setItem: function (t, e, n) {
        var r = this;
        t = u(t);
        var i = r.ready().then(function () {
          if (e === undefined) {
            e = null;
          }
          var n = e;
          return new s(function (i, o) {
            var s = r._dbInfo;
            s.serializer.serialize(e, function (e, r) {
              if (r) {
                o(r);
              } else {
                try {
                  localStorage.setItem(s.keyPrefix + t, e);
                  i(n);
                } catch (t) {
                  if (t.name === "QuotaExceededError" || t.name === "NS_ERROR_DOM_QUOTA_REACHED") {
                    o(t);
                  }
                  o(t);
                }
              }
            });
          });
        });
        a(i, n);
        return i;
      },
      removeItem: function (t, e) {
        var n = this;
        t = u(t);
        var r = n.ready().then(function () {
          var e = n._dbInfo;
          localStorage.removeItem(e.keyPrefix + t);
        });
        a(r, e);
        return r;
      },
      clear: function (t) {
        var e = this;
        var n = e.ready().then(function () {
          var t = e._dbInfo.keyPrefix;
          for (var n = localStorage.length - 1; n >= 0; n--) {
            var r = localStorage.key(n);
            if (r.indexOf(t) === 0) {
              localStorage.removeItem(r);
            }
          }
        });
        a(n, t);
        return n;
      },
      length: function (t) {
        var e = this.keys().then(function (t) {
          return t.length;
        });
        a(e, t);
        return e;
      },
      key: function (t, e) {
        var n = this;
        var r = n.ready().then(function () {
          var e;
          var r = n._dbInfo;
          try {
            e = localStorage.key(t);
          } catch (t) {
            e = null;
          }
          e &&= e.substring(r.keyPrefix.length);
          return e;
        });
        a(r, e);
        return r;
      },
      keys: function (t) {
        var e = this;
        var n = e.ready().then(function () {
          var t = e._dbInfo;
          for (var n = localStorage.length, r = [], i = 0; i < n; i++) {
            var o = localStorage.key(i);
            if (o.indexOf(t.keyPrefix) === 0) {
              r.push(o.substring(t.keyPrefix.length));
            }
          }
          return r;
        });
        a(n, t);
        return n;
      },
      dropInstance: function (t, e) {
        e = l.apply(this, arguments);
        if (!(t = typeof t != "function" && t || {}).name) {
          var n = this.config();
          t.name = t.name || n.name;
          t.storeName = t.storeName || n.storeName;
        }
        var r;
        var i = this;
        a(r = t.name ? new s(function (e) {
          if (t.storeName) {
            e(F(t, i._defaultConfig));
          } else {
            e(t.name + "/");
          }
        }).then(function (t) {
          for (var e = localStorage.length - 1; e >= 0; e--) {
            var n = localStorage.key(e);
            if (n.indexOf(t) === 0) {
              localStorage.removeItem(n);
            }
          }
        }) : s.reject("Invalid arguments"), e);
        return r;
      }
    };
    function q(t, e) {
      var n;
      var r;
      for (var i = t.length, o = 0; o < i;) {
        if ((n = t[o]) === (r = e) || typeof n == "number" && typeof r == "number" && isNaN(n) && isNaN(r)) {
          return true;
        }
        o++;
      }
      return false;
    }
    var V = Array.isArray || function (t) {
      return Object.prototype.toString.call(t) === "[object Array]";
    };
    var $ = {};
    var H = {};
    var Y = {
      INDEXEDDB: S,
      WEBSQL: U,
      LOCALSTORAGE: z
    };
    var G = [Y.INDEXEDDB._driver, Y.WEBSQL._driver, Y.LOCALSTORAGE._driver];
    var X = ["dropInstance"];
    var K = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(X);
    var Q = {
      description: "",
      driver: G.slice(),
      name: "localforage",
      size: 4980736,
      storeName: "keyvaluepairs",
      version: 1
    };
    function J(t, e) {
      t[e] = function () {
        var n = arguments;
        return t.ready().then(function () {
          return t[e].apply(t, n);
        });
      };
    }
    function Z() {
      for (var t = 1; t < arguments.length; t++) {
        var e = arguments[t];
        if (e) {
          for (var n in e) {
            if (e.hasOwnProperty(n)) {
              if (V(e[n])) {
                arguments[0][n] = e[n].slice();
              } else {
                arguments[0][n] = e[n];
              }
            }
          }
        }
      }
      return arguments[0];
    }
    var tt = new (function () {
      function t(e) {
        (function (t, e) {
          if (!(t instanceof e)) {
            throw new TypeError("Cannot call a class as a function");
          }
        })(this, t);
        for (var n in Y) {
          if (Y.hasOwnProperty(n)) {
            var r = Y[n];
            var i = r._driver;
            this[n] = i;
            if (!$[i]) {
              this.defineDriver(r);
            }
          }
        }
        this._defaultConfig = Z({}, Q);
        this._config = Z({}, this._defaultConfig, e);
        this._driverSet = null;
        this._initDriver = null;
        this._ready = false;
        this._dbInfo = null;
        this._wrapLibraryMethodsWithReady();
        this.setDriver(this._config.driver).catch(function () {});
      }
      t.prototype.config = function (t) {
        if ((t === undefined ? "undefined" : r(t)) === "object") {
          if (this._ready) {
            return new Error("Can't call config() after localforage has been used.");
          }
          for (var e in t) {
            if (e === "storeName") {
              t[e] = t[e].replace(/\W/g, "_");
            }
            if (e === "version" && typeof t[e] != "number") {
              return new Error("Database version must be a number.");
            }
            this._config[e] = t[e];
          }
          return !("driver" in t) || !t.driver || this.setDriver(this._config.driver);
        }
        if (typeof t == "string") {
          return this._config[t];
        } else {
          return this._config;
        }
      };
      t.prototype.defineDriver = function (t, e, n) {
        var r = new s(function (e, n) {
          try {
            var r = t._driver;
            var i = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
            if (!t._driver) {
              n(i);
              return;
            }
            var o = K.concat("_initStorage");
            for (var c = 0, u = o.length; c < u; c++) {
              var l = o[c];
              if ((!q(X, l) || t[l]) && typeof t[l] != "function") {
                n(i);
                return;
              }
            }
            (function () {
              var e = function (t) {
                return function () {
                  var e = new Error("Method " + t + " is not implemented by the current driver");
                  var n = s.reject(e);
                  a(n, arguments[arguments.length - 1]);
                  return n;
                };
              };
              for (var n = 0, r = X.length; n < r; n++) {
                var i = X[n];
                t[i] ||= e(i);
              }
            })();
            function h(n) {
              if ($[r]) {
                console.info("Redefining LocalForage driver: " + r);
              }
              $[r] = t;
              H[r] = n;
              e();
            }
            if ("_support" in t) {
              if (t._support && typeof t._support == "function") {
                t._support().then(h, n);
              } else {
                h(!!t._support);
              }
            } else {
              h(true);
            }
          } catch (t) {
            n(t);
          }
        });
        c(r, e, n);
        return r;
      };
      t.prototype.driver = function () {
        return this._driver || null;
      };
      t.prototype.getDriver = function (t, e, n) {
        var r = $[t] ? s.resolve($[t]) : s.reject(new Error("Driver not found."));
        c(r, e, n);
        return r;
      };
      t.prototype.getSerializer = function (t) {
        var e = s.resolve(P);
        c(e, t);
        return e;
      };
      t.prototype.ready = function (t) {
        var e = this;
        var n = e._driverSet.then(function () {
          if (e._ready === null) {
            e._ready = e._initDriver();
          }
          return e._ready;
        });
        c(n, t, t);
        return n;
      };
      t.prototype.setDriver = function (t, e, n) {
        var r = this;
        if (!V(t)) {
          t = [t];
        }
        var i = this._getSupportedDrivers(t);
        function o() {
          r._config.driver = r.driver();
        }
        function a(t) {
          r._extend(t);
          o();
          r._ready = r._initStorage(r._config);
          return r._ready;
        }
        var u = this._driverSet !== null ? this._driverSet.catch(function () {
          return s.resolve();
        }) : s.resolve();
        this._driverSet = u.then(function () {
          var t = i[0];
          r._dbInfo = null;
          r._ready = null;
          return r.getDriver(t).then(function (t) {
            r._driver = t._driver;
            o();
            r._wrapLibraryMethodsWithReady();
            r._initDriver = function (t) {
              return function () {
                var e = 0;
                return function n() {
                  while (e < t.length) {
                    var i = t[e];
                    e++;
                    r._dbInfo = null;
                    r._ready = null;
                    return r.getDriver(i).then(a).catch(n);
                  }
                  o();
                  var c = new Error("No available storage method found.");
                  r._driverSet = s.reject(c);
                  return r._driverSet;
                }();
              };
            }(i);
          });
        }).catch(function () {
          o();
          var t = new Error("No available storage method found.");
          r._driverSet = s.reject(t);
          return r._driverSet;
        });
        c(this._driverSet, e, n);
        return this._driverSet;
      };
      t.prototype.supports = function (t) {
        return !!H[t];
      };
      t.prototype._extend = function (t) {
        Z(this, t);
      };
      t.prototype._getSupportedDrivers = function (t) {
        var e = [];
        for (var n = 0, r = t.length; n < r; n++) {
          var i = t[n];
          if (this.supports(i)) {
            e.push(i);
          }
        }
        return e;
      };
      t.prototype._wrapLibraryMethodsWithReady = function () {
        for (var t = 0, e = K.length; t < e; t++) {
          J(this, K[t]);
        }
      };
      t.prototype.createInstance = function (e) {
        return new t(e);
      };
      return t;
    }())();
    e.exports = tt;
  }, {
    3: 3
  }]
}, {}, [4])(4);