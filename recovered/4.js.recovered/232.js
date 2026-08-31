var r = require("./31.js");
module.exports = function (e, t) {
  t = t || {};
  var n = {};
  var o = ["url", "method", "params", "data"];
  var i = ["headers", "auth", "proxy"];
  var a = ["baseURL", "url", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "maxContentLength", "validateStatus", "maxRedirects", "httpAgent", "httpsAgent", "cancelToken", "socketPath"];
  r.forEach(o, function (e) {
    if (t[e] !== undefined) {
      n[e] = t[e];
    }
  });
  r.forEach(i, function (o) {
    if (r.isObject(t[o])) {
      n[o] = r.deepMerge(e[o], t[o]);
    } else if (t[o] !== undefined) {
      n[o] = t[o];
    } else if (r.isObject(e[o])) {
      n[o] = r.deepMerge(e[o]);
    } else if (e[o] !== undefined) {
      n[o] = e[o];
    }
  });
  r.forEach(a, function (r) {
    if (t[r] !== undefined) {
      n[r] = t[r];
    } else if (e[r] !== undefined) {
      n[r] = e[r];
    }
  });
  var u = o.concat(i).concat(a);
  var c = Object.keys(t).filter(function (e) {
    return u.indexOf(e) === -1;
  });
  r.forEach(c, function (r) {
    if (t[r] !== undefined) {
      n[r] = t[r];
    } else if (e[r] !== undefined) {
      n[r] = e[r];
    }
  });
  return n;
};