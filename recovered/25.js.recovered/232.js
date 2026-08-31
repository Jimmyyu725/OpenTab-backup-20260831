var r = require("./31.js");
module.exports = function (t, e) {
  e = e || {};
  var n = {};
  var o = ["url", "method", "params", "data"];
  var i = ["headers", "auth", "proxy"];
  var s = ["baseURL", "url", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "maxContentLength", "validateStatus", "maxRedirects", "httpAgent", "httpsAgent", "cancelToken", "socketPath"];
  r.forEach(o, function (t) {
    if (e[t] !== undefined) {
      n[t] = e[t];
    }
  });
  r.forEach(i, function (o) {
    if (r.isObject(e[o])) {
      n[o] = r.deepMerge(t[o], e[o]);
    } else if (e[o] !== undefined) {
      n[o] = e[o];
    } else if (r.isObject(t[o])) {
      n[o] = r.deepMerge(t[o]);
    } else if (t[o] !== undefined) {
      n[o] = t[o];
    }
  });
  r.forEach(s, function (r) {
    if (e[r] !== undefined) {
      n[r] = e[r];
    } else if (t[r] !== undefined) {
      n[r] = t[r];
    }
  });
  var a = o.concat(i).concat(s);
  var c = Object.keys(e).filter(function (t) {
    return a.indexOf(t) === -1;
  });
  r.forEach(c, function (r) {
    if (e[r] !== undefined) {
      n[r] = e[r];
    } else if (t[r] !== undefined) {
      n[r] = t[r];
    }
  });
  return n;
};