var r = require("./31.js");
var o = require("./227.js");
var i = require("./320.js");
var a = require("./321.js");
var u = require("./232.js");
function c(e) {
  this.defaults = e;
  this.interceptors = {
    request: new i(),
    response: new i()
  };
}
c.prototype.request = function (e) {
  if (typeof e == "string") {
    (e = arguments[1] || {}).url = arguments[0];
  } else {
    e = e || {};
  }
  if ((e = u(this.defaults, e)).method) {
    e.method = e.method.toLowerCase();
  } else if (this.defaults.method) {
    e.method = this.defaults.method.toLowerCase();
  } else {
    e.method = "get";
  }
  var t = [a, undefined];
  var n = Promise.resolve(e);
  this.interceptors.request.forEach(function (e) {
    t.unshift(e.fulfilled, e.rejected);
  });
  this.interceptors.response.forEach(function (e) {
    t.push(e.fulfilled, e.rejected);
  });
  while (t.length) {
    n = n.then(t.shift(), t.shift());
  }
  return n;
};
c.prototype.getUri = function (e) {
  e = u(this.defaults, e);
  return o(e.url, e.params, e.paramsSerializer).replace(/^\?/, "");
};
r.forEach(["delete", "get", "head", "options"], function (e) {
  c.prototype[e] = function (t, n) {
    return this.request(r.merge(n || {}, {
      method: e,
      url: t
    }));
  };
});
r.forEach(["post", "put", "patch"], function (e) {
  c.prototype[e] = function (t, n, o) {
    return this.request(r.merge(o || {}, {
      method: e,
      url: t,
      data: n
    }));
  };
});
module.exports = c;