var _n = require("./7856.js");
var o = require("./4099.js");
var a = o;
const i = {
  add: function (e) {
    if (typeof WorkerGlobalScope == "function" && self instanceof WorkerGlobalScope) ;else {
      if (typeof window.addEventListener != "function") {
        return;
      }
      window.addEventListener("beforeunload", function () {
        e();
      }, true);
      window.addEventListener("unload", function () {
        e();
      }, true);
    }
  }
};
var c = require("./199.js");
var s = c;
var l = a ? s : i;
var u = new Set();
var f = false;
function d(e) {
  if (!f) {
    f = true;
    l.add(h);
  }
  if (typeof e != "function") {
    throw new Error("Listener is no function");
  }
  u.add(e);
  return {
    remove: function () {
      return u.delete(e);
    },
    run: function () {
      u.delete(e);
      return e();
    }
  };
}
function h() {
  var e = [];
  u.forEach(function (t) {
    e.push(t());
    u.delete(t);
  });
  return Promise.all(e);
}
function p(e, t) {
  var r = this;
  this.broadcastChannel = e;
  this._options = t;
  this.isLeader = false;
  this.hasLeader = false;
  this.isDead = false;
  this.token = (0, _n.JQ)();
  this._aplQ = _n.hU;
  this._aplQC = 0;
  this._unl = [];
  this._lstns = [];
  this._dpL = function () {};
  this._dpLC = false;
  function o(e) {
    if (e.context === "leader") {
      if (e.action === "death") {
        r.hasLeader = false;
      }
      if (e.action === "tell") {
        r.hasLeader = true;
      }
    }
  }
  this.broadcastChannel.addEventListener("internal", o);
  this._lstns.push(o);
}
function g(e, t) {
  var r = {
    context: "leader",
    action: t,
    token: e.token
  };
  return e.broadcastChannel.postInternal(r);
}
p.prototype = {
  applyOnce: function (e) {
    var t = this;
    if (this.isLeader) {
      return (0, _n._v)(0, true);
    }
    if (this.isDead) {
      return (0, _n._v)(0, false);
    }
    if (this._aplQC > 1) {
      return this._aplQ;
    }
    function r() {
      if (t.isLeader) {
        return _n.Ob;
      }
      var r;
      var o = false;
      var a = new Promise(function (e) {
        r = function () {
          o = true;
          e();
        };
      });
      var i = [];
      function c(e) {
        if (e.context === "leader" && e.token != t.token) {
          i.push(e);
          if (e.action === "apply" && e.token > t.token) {
            r();
          }
          if (e.action === "tell") {
            r();
            t.hasLeader = true;
          }
        }
      }
      t.broadcastChannel.addEventListener("internal", c);
      var s = e ? t._options.responseTime * 4 : t._options.responseTime;
      return g(t, "apply").then(function () {
        return Promise.race([(0, _n._v)(s), a.then(function () {
          return Promise.reject(new Error());
        })]);
      }).then(function () {
        return g(t, "apply");
      }).then(function () {
        return Promise.race([(0, _n._v)(s), a.then(function () {
          return Promise.reject(new Error());
        })]);
      }).catch(function () {}).then(function () {
        t.broadcastChannel.removeEventListener("internal", c);
        return !o && function (e) {
          e.isLeader = true;
          e.hasLeader = true;
          var t = d(function () {
            return e.die();
          });
          e._unl.push(t);
          function r(t) {
            if (t.context === "leader" && t.action === "apply") {
              g(e, "tell");
            }
            if (t.context === "leader" && t.action === "tell" && !e._dpLC) {
              e._dpLC = true;
              e._dpL();
              g(e, "tell");
            }
          }
          e.broadcastChannel.addEventListener("internal", r);
          e._lstns.push(r);
          return g(e, "tell");
        }(t).then(function () {
          return true;
        });
      });
    }
    this._aplQC = this._aplQC + 1;
    this._aplQ = this._aplQ.then(function () {
      return r();
    }).then(function () {
      t._aplQC = t._aplQC - 1;
    });
    return this._aplQ.then(function () {
      return t.isLeader;
    });
  },
  awaitLeadership: function () {
    this._aLP ||= function (e) {
      if (e.isLeader) {
        return _n.hU;
      }
      return new Promise(function (t) {
        var r = false;
        function o() {
          if (!r) {
            r = true;
            e.broadcastChannel.removeEventListener("internal", a);
            t(true);
          }
        }
        e.applyOnce().then(function () {
          if (e.isLeader) {
            o();
          }
        });
        (function t() {
          return (0, _n._v)(e._options.fallbackInterval).then(function () {
            if (!e.isDead && !r) {
              if (e.isLeader) {
                o();
                return;
              } else {
                return e.applyOnce(true).then(function () {
                  if (e.isLeader) {
                    o();
                  } else {
                    t();
                  }
                });
              }
            }
          });
        })();
        function a(t) {
          if (t.context === "leader" && t.action === "death") {
            e.hasLeader = false;
            e.applyOnce().then(function () {
              if (e.isLeader) {
                o();
              }
            });
          }
        }
        e.broadcastChannel.addEventListener("internal", a);
        e._lstns.push(a);
      });
    }(this);
    return this._aLP;
  },
  set onduplicate(e) {
    this._dpL = e;
  },
  die: function () {
    var e = this;
    this._lstns.forEach(function (t) {
      return e.broadcastChannel.removeEventListener("internal", t);
    });
    this._lstns = [];
    this._unl.forEach(function (e) {
      return e.remove();
    });
    this._unl = [];
    if (this.isLeader) {
      this.hasLeader = false;
      this.isLeader = false;
    }
    this.isDead = true;
    return g(this, "death");
  }
};
const y = function (e, t) {
  if (e._leaderElector) {
    throw new Error("BroadcastChannel already has a leader-elector");
  }
  t = function (e, t) {
    e ||= {};
    if (!(e = JSON.parse(JSON.stringify(e))).fallbackInterval) {
      e.fallbackInterval = 3000;
    }
    e.responseTime ||= t.method.averageResponseTime(t.options);
    return e;
  }(t, e);
  var r = new p(e, t);
  e._befC.push(function () {
    return r.die();
  });
  e._leaderElector = r;
  return r;
}(new (require("./7346.js").g0)("leader-channel"));
y.awaitLeadership();
export const n = () => new Promise(e => {
  setTimeout(() => {
    e(false);
  }, 1000);
  y.awaitLeadership().then(() => e(true));
});