var r = require("./31.js");
var o = require("./322.js");
var i = require("./228.js");
var a = require("./229.js");
function u(e) {
  if (e.cancelToken) {
    e.cancelToken.throwIfRequested();
  }
}
module.exports = function (e) {
  u(e);
  e.headers = e.headers || {};
  e.data = o(e.data, e.headers, e.transformRequest);
  e.headers = r.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers);
  r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (t) {
    delete e.headers[t];
  });
  return (e.adapter || a.adapter)(e).then(function (t) {
    u(e);
    t.data = o(t.data, t.headers, e.transformResponse);
    return t;
  }, function (t) {
    if (!i(t)) {
      u(e);
      if (t && t.response) {
        t.response.data = o(t.response.data, t.response.headers, e.transformResponse);
      }
    }
    return Promise.reject(t);
  });
};