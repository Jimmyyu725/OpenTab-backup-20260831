var r = require("./31.js");
var i = require("./322.js");
var o = require("./228.js");
var a = require("./229.js");
function s(t) {
  if (t.cancelToken) {
    t.cancelToken.throwIfRequested();
  }
}
module.exports = function (t) {
  s(t);
  t.headers = t.headers || {};
  t.data = i(t.data, t.headers, t.transformRequest);
  t.headers = r.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers);
  r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (e) {
    delete t.headers[e];
  });
  return (t.adapter || a.adapter)(t).then(function (e) {
    s(t);
    e.data = i(e.data, e.headers, t.transformResponse);
    return e;
  }, function (e) {
    if (!o(e)) {
      s(t);
      if (e && e.response) {
        e.response.data = i(e.response.data, e.response.headers, t.transformResponse);
      }
    }
    return Promise.reject(e);
  });
};