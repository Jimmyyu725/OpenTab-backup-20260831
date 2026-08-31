var n = require("./7856.js");
const o = {
  create: function (e) {
    var t = {
      messagesCallback: null,
      bc: new BroadcastChannel(e),
      subFns: []
    };
    t.bc.onmessage = function (e) {
      if (t.messagesCallback) {
        t.messagesCallback(e.data);
      }
    };
    return t;
  },
  close: function (e) {
    e.bc.close();
    e.subFns = [];
  },
  onMessage: function (e, t) {
    e.messagesCallback = t;
  },
  postMessage: function (e, t) {
    try {
      e.bc.postMessage(t, false);
      return n.hU;
    } catch (e) {
      return Promise.reject(e);
    }
  },
  canBeUsed: function () {
    if (n.UG && typeof window == "undefined") {
      return false;
    }
    if (typeof BroadcastChannel == "function") {
      if (BroadcastChannel._pubkey) {
        throw new Error("BroadcastChannel: Do not overwrite window.BroadcastChannel with this module, this is not a polyfill");
      }
      return true;
    }
    return false;
  },
  type: "native",
  averageResponseTime: function () {
    return 150;
  },
  microSeconds: n.Xu
};
var a = function () {
  function e(e) {
    this.ttl = e;
    this.set = new Set();
    this.timeMap = new Map();
  }
  e.prototype.has = function (e) {
    return this.set.has(e);
  };
  e.prototype.add = function (e) {
    var t = this;
    this.timeMap.set(e, i());
    this.set.add(e);
    setTimeout(function () {
      (function (e) {
        var t = i() - e.ttl;
        var r = e.set[Symbol.iterator]();
        while (true) {
          var n = r.next().value;
          if (!n) {
            return;
          }
          if (!(e.timeMap.get(n) < t)) {
            return;
          }
          e.timeMap.delete(n);
          e.set.delete(n);
        }
      })(t);
    }, 0);
  };
  e.prototype.clear = function () {
    this.set.clear();
    this.timeMap.clear();
  };
  return e;
}();
function i() {
  return new Date().getTime();
}
function c(e = {}) {
  var t = JSON.parse(JSON.stringify(e));
  if (t.webWorkerSupport === undefined) {
    t.webWorkerSupport = true;
  }
  t.idb ||= {};
  t.idb.ttl ||= 45000;
  t.idb.fallbackInterval ||= 150;
  if (e.idb && typeof e.idb.onclose == "function") {
    t.idb.onclose = e.idb.onclose;
  }
  t.localstorage ||= {};
  t.localstorage.removeTimeout ||= 60000;
  if (e.methods) {
    t.methods = e.methods;
  }
  t.node ||= {};
  t.node.ttl ||= 120000;
  t.node.maxParallelWrites ||= 2048;
  if (t.node.useFastPath === undefined) {
    t.node.useFastPath = true;
  }
  return t;
}
var s = n.Xu;
var l = "messages";
function u() {
  if (typeof indexedDB != "undefined") {
    return indexedDB;
  }
  if (typeof window != "undefined") {
    if (window.mozIndexedDB !== undefined) {
      return window.mozIndexedDB;
    }
    if (window.webkitIndexedDB !== undefined) {
      return window.webkitIndexedDB;
    }
    if (window.msIndexedDB !== undefined) {
      return window.msIndexedDB;
    }
  }
  return false;
}
function f(e, t) {
  var r = e.transaction(l).objectStore(l);
  var n = [];
  return new Promise(function (e) {
    (function () {
      try {
        var e = IDBKeyRange.bound(t + 1, Infinity);
        return r.openCursor(e);
      } catch (e) {
        return r.openCursor();
      }
    })().onsuccess = function (r) {
      var o = r.target.result;
      if (o) {
        if (o.value.id < t + 1) {
          o.continue(t + 1);
        } else {
          n.push(o.value);
          o.continue();
        }
      } else {
        e(n);
      }
    };
  });
}
function d(e, t) {
  return function (e, t) {
    var r = new Date().getTime() - t;
    var n = e.transaction(l).objectStore(l);
    var o = [];
    return new Promise(function (e) {
      n.openCursor().onsuccess = function (t) {
        var n = t.target.result;
        if (n) {
          var a = n.value;
          if (!(a.time < r)) {
            e(o);
            return;
          }
          o.push(a);
          n.continue();
        } else {
          e(o);
        }
      };
    });
  }(e, t).then(function (t) {
    return Promise.all(t.map(function (t) {
      return function (e, t) {
        var r = e.transaction([l], "readwrite").objectStore(l).delete(t);
        return new Promise(function (e) {
          r.onsuccess = function () {
            return e();
          };
        });
      }(e, t.id);
    }));
  });
}
function h(e) {
  if (!e.closed) {
    p(e).then(function () {
      return (0, n._v)(e.options.idb.fallbackInterval);
    }).then(function () {
      return h(e);
    });
  }
}
function p(e) {
  if (e.closed) {
    return n.hU;
  } else if (e.messagesCallback) {
    return f(e.db, e.lastCursorId).then(function (t) {
      var r = t.filter(function (e) {
        return !!e;
      }).map(function (t) {
        if (t.id > e.lastCursorId) {
          e.lastCursorId = t.id;
        }
        return t;
      }).filter(function (t) {
        return function (e, t) {
          return e.uuid !== t.uuid && !t.eMIs.has(e.id) && !(e.data.time < t.messagesCallbackTime);
        }(t, e);
      }).sort(function (e, t) {
        return e.time - t.time;
      });
      r.forEach(function (t) {
        if (e.messagesCallback) {
          e.eMIs.add(t.id);
          e.messagesCallback(t.data);
        }
      });
      return n.hU;
    });
  } else {
    return n.hU;
  }
}
const g = {
  create: function (e, t) {
    t = c(t);
    return function (e) {
      var t = "pubkey.broadcast-channel-0-" + e;
      var r = u().open(t, 1);
      r.onupgradeneeded = function (e) {
        e.target.result.createObjectStore(l, {
          keyPath: "id",
          autoIncrement: true
        });
      };
      return new Promise(function (e, t) {
        r.onerror = function (e) {
          return t(e);
        };
        r.onsuccess = function () {
          e(r.result);
        };
      });
    }(e).then(function (r) {
      var o = {
        closed: false,
        lastCursorId: 0,
        channelName: e,
        options: t,
        uuid: (0, n.JQ)(),
        eMIs: new a(t.idb.ttl * 2),
        writeBlockPromise: n.hU,
        messagesCallback: null,
        readQueuePromises: [],
        db: r
      };
      r.onclose = function () {
        o.closed = true;
        if (t.idb.onclose) {
          t.idb.onclose();
        }
      };
      h(o);
      return o;
    });
  },
  close: function (e) {
    e.closed = true;
    e.db.close();
  },
  onMessage: function (e, t, r) {
    e.messagesCallbackTime = r;
    e.messagesCallback = t;
    p(e);
  },
  postMessage: function (e, t) {
    e.writeBlockPromise = e.writeBlockPromise.then(function () {
      return function (e, t, r) {
        var n = {
          uuid: t,
          time: new Date().getTime(),
          data: r
        };
        var o = e.transaction([l], "readwrite");
        return new Promise(function (e, t) {
          o.oncomplete = function () {
            return e();
          };
          o.onerror = function (e) {
            return t(e);
          };
          o.objectStore(l).add(n);
        });
      }(e.db, e.uuid, t);
    }).then(function () {
      if ((0, n.Iy)(0, 10) === 0) {
        d(e.db, e.options.idb.ttl);
      }
    });
    return e.writeBlockPromise;
  },
  canBeUsed: function () {
    return !n.UG && !!u();
  },
  type: "idb",
  averageResponseTime: function (e) {
    return e.idb.fallbackInterval * 2;
  },
  microSeconds: s
};
var y = n.Xu;
function v() {
  var e;
  if (typeof window == "undefined") {
    return null;
  }
  try {
    e = window.localStorage;
    e = window["ie8-eventlistener/storage"] || window.localStorage;
  } catch (e) {}
  return e;
}
function b(e) {
  return "pubkey.broadcastChannel-" + e;
}
function m() {
  if (n.UG) {
    return false;
  }
  var e = v();
  if (!e) {
    return false;
  }
  try {
    var t = "__broadcastchannel_check";
    e.setItem(t, "works");
    e.removeItem(t);
  } catch (e) {
    return false;
  }
  return true;
}
const w = {
  create: function (e, t) {
    t = c(t);
    if (!m()) {
      throw new Error("BroadcastChannel: localstorage cannot be used");
    }
    var r = (0, n.JQ)();
    var o = new a(t.localstorage.removeTimeout);
    var i = {
      channelName: e,
      uuid: r,
      eMIs: o
    };
    i.listener = function (e, t) {
      var r = b(e);
      function n(e) {
        if (e.key === r) {
          t(JSON.parse(e.newValue));
        }
      }
      window.addEventListener("storage", n);
      return n;
    }(e, function (e) {
      if (i.messagesCallback && e.uuid !== r && e.token && !o.has(e.token)) {
        if (!e.data.time || !(e.data.time < i.messagesCallbackTime)) {
          o.add(e.token);
          i.messagesCallback(e.data);
        }
      }
    });
    return i;
  },
  close: function (e) {
    var t;
    t = e.listener;
    window.removeEventListener("storage", t);
  },
  onMessage: function (e, t, r) {
    e.messagesCallbackTime = r;
    e.messagesCallback = t;
  },
  postMessage: function (e, t) {
    return new Promise(function (r) {
      (0, n._v)().then(function () {
        var o = b(e.channelName);
        var a = {
          token: (0, n.JQ)(),
          time: new Date().getTime(),
          data: t,
          uuid: e.uuid
        };
        var i = JSON.stringify(a);
        v().setItem(o, i);
        var c = document.createEvent("Event");
        c.initEvent("storage", true, true);
        c.key = o;
        c.newValue = i;
        window.dispatchEvent(c);
        r();
      });
    });
  },
  canBeUsed: m,
  type: "localstorage",
  averageResponseTime: function () {
    var e = navigator.userAgent.toLowerCase();
    if (e.includes("safari") && !e.includes("chrome")) {
      return 240;
    } else {
      return 120;
    }
  },
  microSeconds: y
};
var _ = n.Xu;
var k = new Set();
const A = {
  create: function (e) {
    var t = {
      name: e,
      messagesCallback: null
    };
    k.add(t);
    return t;
  },
  close: function (e) {
    k.delete(e);
  },
  onMessage: function (e, t) {
    e.messagesCallback = t;
  },
  postMessage: function (e, t) {
    return new Promise(function (r) {
      return setTimeout(function () {
        Array.from(k).filter(function (t) {
          return t.name === e.name;
        }).filter(function (t) {
          return t !== e;
        }).filter(function (e) {
          return !!e.messagesCallback;
        }).forEach(function (e) {
          return e.messagesCallback(t);
        });
        r();
      }, 5);
    });
  },
  canBeUsed: function () {
    return true;
  },
  type: "simulate",
  averageResponseTime: function () {
    return 5;
  },
  microSeconds: _
};
var E = [o, g, w];
var C;
var x = new Set();
var S = 0;
export function g0(e, t) {
  var r;
  var o;
  this.id = S++;
  x.add(this);
  this.name = e;
  if (C) {
    t = C;
  }
  this.options = c(t);
  this.method = function (e) {
    var t = [].concat(e.methods, E).filter(Boolean);
    if (e.type) {
      if (e.type === "simulate") {
        return A;
      }
      var r = t.find(function (t) {
        return t.type === e.type;
      });
      if (r) {
        return r;
      }
      throw new Error("method-type " + e.type + " not found");
    }
    if (!e.webWorkerSupport && !n.UG) {
      t = t.filter(function (e) {
        return e.type !== "idb";
      });
    }
    var o = t.find(function (e) {
      return e.canBeUsed();
    });
    if (o) {
      return o;
    }
    throw new Error("No useable method found in " + JSON.stringify(E.map(function (e) {
      return e.type;
    })));
  }(this.options);
  this._iL = false;
  this._onML = null;
  this._addEL = {
    message: [],
    internal: []
  };
  this._uMP = new Set();
  this._befC = [];
  this._prepP = null;
  o = (r = this).method.create(r.name, r.options);
  if ((0, n.tI)(o)) {
    r._prepP = o;
    o.then(function (e) {
      r._state = e;
    });
  } else {
    r._state = o;
  }
}
function B(e, t, r) {
  var o = {
    time: e.method.microSeconds(),
    type: t,
    data: r
  };
  return (e._prepP ? e._prepP : n.hU).then(function () {
    var t = e.method.postMessage(e._state, o);
    e._uMP.add(t);
    t.catch().then(function () {
      return e._uMP.delete(t);
    });
    return t;
  });
}
function j(e) {
  return e._addEL.message.length > 0 || e._addEL.internal.length > 0;
}
function D(e, t, r) {
  e._addEL[t].push(r);
  (function (e) {
    if (!e._iL && j(e)) {
      function t(t) {
        e._addEL[t.type].forEach(function (e) {
          var r = 100000;
          var n = e.time - r;
          if (t.time >= n) {
            e.fn(t.data);
          }
        });
      }
      var r = e.method.microSeconds();
      if (e._prepP) {
        e._prepP.then(function () {
          e._iL = true;
          e.method.onMessage(e._state, t, r);
        });
      } else {
        e._iL = true;
        e.method.onMessage(e._state, t, r);
      }
    }
  })(e);
}
function F(e, t, r) {
  e._addEL[t] = e._addEL[t].filter(function (e) {
    return e !== r;
  });
  (function (e) {
    if (e._iL && !j(e)) {
      e._iL = false;
      var t = e.method.microSeconds();
      e.method.onMessage(e._state, null, t);
    }
  })(e);
}
g0._pubkey = true;
g0.prototype = {
  postMessage: function (e) {
    if (this.closed) {
      throw new Error("BroadcastChannel.postMessage(): Cannot post message after channel has closed " + JSON.stringify(e));
    }
    return B(this, "message", e);
  },
  postInternal: function (e) {
    return B(this, "internal", e);
  },
  set onmessage(e) {
    var t = {
      time: this.method.microSeconds(),
      fn: e
    };
    F(this, "message", this._onML);
    if (e && typeof e == "function") {
      this._onML = t;
      D(this, "message", t);
    } else {
      this._onML = null;
    }
  },
  addEventListener: function (e, t) {
    D(this, e, {
      time: this.method.microSeconds(),
      fn: t
    });
  },
  removeEventListener: function (e, t) {
    F(this, e, this._addEL[e].find(function (e) {
      return e.fn === t;
    }));
  },
  close: function () {
    var e = this;
    if (!this.closed) {
      x.delete(this);
      this.closed = true;
      var t = this._prepP ? this._prepP : n.hU;
      this._onML = null;
      this._addEL.message = [];
      return t.then(function () {
        return Promise.all(Array.from(e._uMP));
      }).then(function () {
        return Promise.all(e._befC.map(function (e) {
          return e();
        }));
      }).then(function () {
        return e.method.close(e._state);
      });
    }
  },
  get type() {
    return this.method.type;
  },
  get isClosed() {
    return this.closed;
  }
};