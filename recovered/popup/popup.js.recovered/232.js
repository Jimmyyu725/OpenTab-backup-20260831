var r = require("./31.js");
module.exports = function (t, e) {
  e = e || {};
  var n = {};
  var i = ["url", "method", "params", "data"];
  var o = ["headers", "auth", "proxy"];
  var s = ["baseURL", "url", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "maxContentLength", "validateStatus", "maxRedirects", "httpAgent", "httpsAgent", "cancelToken", "socketPath"];
  r.forEach(i, function (t) {
    if (e[t] !== undefined) {
      n[t] = e[t];
    }
  });
  r.forEach(o, function (i) {
    if (r.isObject(e[i])) {
      n[i] = r.deepMerge(t[i], e[i]);
    } else if (e[i] !== undefined) {
      n[i] = e[i];
    } else if (r.isObject(t[i])) {
      n[i] = r.deepMerge(t[i]);
    } else if (t[i] !== undefined) {
      n[i] = t[i];
    }
  });
  r.forEach(s, function (r) {
    if (e[r] !== undefined) {
      n[r] = e[r];
    } else if (t[r] !== undefined) {
      n[r] = t[r];
    }
  });
  var a = i.concat(o).concat(s);
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