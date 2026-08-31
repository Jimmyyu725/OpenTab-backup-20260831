var r = require("./10.js");
var o = require("./379.js");
var i = require("./213.js");
var s = require("./214.js");
function a(t) {
  if (t.cancelToken) {
    t.cancelToken.throwIfRequested();
  }
}
module.exports = function (t) {
  a(t);
  t.headers = t.headers || {};
  t.data = o(t.data, t.headers, t.transformRequest);
  t.headers = r.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers);
  r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (e) {
    delete t.headers[e];
  });
  return (t.adapter || s.adapter)(t).then(function (e) {
    a(t);
    e.data = o(e.data, e.headers, t.transformResponse);
    return e;
  }, function (e) {
    if (!i(e)) {
      a(t);
      if (e && e.response) {
        e.response.data = o(e.response.data, e.response.headers, t.transformResponse);
      }
    }
    return Promise.reject(e);
  });
};