var r = require("./31.js");
var o = require("./324.js");
var i = require("./227.js");
var a = require("./326.js");
var u = require("./329.js");
var c = require("./330.js");
var s = require("./231.js");
module.exports = function (e) {
  return new Promise(function (t, f) {
    var l = e.data;
    var d = e.headers;
    if (r.isFormData(l)) {
      delete d["Content-Type"];
    }
    var h = new XMLHttpRequest();
    if (e.auth) {
      var p = e.auth.username || "";
      var v = e.auth.password || "";
      d.Authorization = "Basic " + btoa(p + ":" + v);
    }
    var y = a(e.baseURL, e.url);
    h.open(e.method.toUpperCase(), i(y, e.params, e.paramsSerializer), true);
    h.timeout = e.timeout;
    h.onreadystatechange = function () {
      if (h && h.readyState === 4 && (h.status !== 0 || h.responseURL && h.responseURL.indexOf("file:") === 0)) {
        var n = "getAllResponseHeaders" in h ? u(h.getAllResponseHeaders()) : null;
        var r = {
          data: e.responseType && e.responseType !== "text" ? h.response : h.responseText,
          status: h.status,
          statusText: h.statusText,
          headers: n,
          config: e,
          request: h
        };
        o(t, f, r);
        h = null;
      }
    };
    h.onabort = function () {
      if (h) {
        f(s("Request aborted", e, "ECONNABORTED", h));
        h = null;
      }
    };
    h.onerror = function () {
      f(s("Network Error", e, null, h));
      h = null;
    };
    h.ontimeout = function () {
      var t = "timeout of " + e.timeout + "ms exceeded";
      if (e.timeoutErrorMessage) {
        t = e.timeoutErrorMessage;
      }
      f(s(t, e, "ECONNABORTED", h));
      h = null;
    };
    if (r.isStandardBrowserEnv()) {
      var m = require("./331.js");
      var g = (e.withCredentials || c(y)) && e.xsrfCookieName ? m.read(e.xsrfCookieName) : undefined;
      if (g) {
        d[e.xsrfHeaderName] = g;
      }
    }
    if ("setRequestHeader" in h) {
      r.forEach(d, function (e, t) {
        if (l === undefined && t.toLowerCase() === "content-type") {
          delete d[t];
        } else {
          h.setRequestHeader(t, e);
        }
      });
    }
    if (!r.isUndefined(e.withCredentials)) {
      h.withCredentials = !!e.withCredentials;
    }
    if (e.responseType) {
      try {
        h.responseType = e.responseType;
      } catch (t) {
        if (e.responseType !== "json") {
          throw t;
        }
      }
    }
    if (typeof e.onDownloadProgress == "function") {
      h.addEventListener("progress", e.onDownloadProgress);
    }
    if (typeof e.onUploadProgress == "function" && h.upload) {
      h.upload.addEventListener("progress", e.onUploadProgress);
    }
    if (e.cancelToken) {
      e.cancelToken.promise.then(function (e) {
        if (h) {
          h.abort();
          f(e);
          h = null;
        }
      });
    }
    if (l === undefined) {
      l = null;
    }
    h.send(l);
  });
};