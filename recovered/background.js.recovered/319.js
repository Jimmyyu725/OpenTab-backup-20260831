var r = require("./31.js");
var o = require("./227.js");
var i = require("./320.js");
var s = require("./321.js");
var a = require("./232.js");
function u(t) {
  this.defaults = t;
  this.interceptors = {
    request: new i(),
    response: new i()
  };
}
u.prototype.request = function (t) {
  if (typeof t == "string") {
    (t = arguments[1] || {}).url = arguments[0];
  } else {
    t = t || {};
  }
  if ((t = a(this.defaults, t)).method) {
    t.method = t.method.toLowerCase();
  } else if (this.defaults.method) {
    t.method = this.defaults.method.toLowerCase();
  } else {
    t.method = "get";
  }
  var e = [s, undefined];
  var n = Promise.resolve(t);
  this.interceptors.request.forEach(function (t) {
    e.unshift(t.fulfilled, t.rejected);
  });
  this.interceptors.response.forEach(function (t) {
    e.push(t.fulfilled, t.rejected);
  });
  while (e.length) {
    n = n.then(e.shift(), e.shift());
  }
  return n;
};
u.prototype.getUri = function (t) {
  t = a(this.defaults, t);
  return o(t.url, t.params, t.paramsSerializer).replace(/^\?/, "");
};
r.forEach(["delete", "get", "head", "options"], function (t) {
  u.prototype[t] = function (e, n) {
    return this.request(r.merge(n || {}, {
      method: t,
      url: e
    }));
  };
});
r.forEach(["post", "put", "patch"], function (t) {
  u.prototype[t] = function (e, n, o) {
    return this.request(r.merge(o || {}, {
      method: t,
      url: e,
      data: n
    }));
  };
});
module.exports = u;