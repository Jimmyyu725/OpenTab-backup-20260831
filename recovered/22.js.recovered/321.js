var r = require("./31.js");
var i = require("./322.js");
var o = require("./228.js");
var s = require("./229.js");
function a(t) {
  if (t.cancelToken) {
    t.cancelToken.throwIfRequested();
  }
}
module.exports = function (t) {
  a(t);
  t.headers = t.headers || {};
  t.data = i(t.data, t.headers, t.transformRequest);
  t.headers = r.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers);
  r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (e) {
    delete t.headers[e];
  });
  return (t.adapter || s.adapter)(t).then(function (e) {
    a(t);
    e.data = i(e.data, e.headers, t.transformResponse);
    return e;
  }, function (e) {
    if (!o(e)) {
      a(t);
      if (e && e.response) {
        e.response.data = i(e.response.data, e.response.headers, t.transformResponse);
      }
    }
    return Promise.reject(e);
  });
};