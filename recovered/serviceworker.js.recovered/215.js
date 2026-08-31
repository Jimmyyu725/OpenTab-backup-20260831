var r = require("./10.js");
var o = require("./381.js");
var i = require("./212.js");
var s = require("./383.js");
var a = require("./386.js");
var c = require("./387.js");
var u = require("./216.js");
module.exports = function (t) {
  return new Promise(function (e, f) {
    var l = t.data;
    var h = t.headers;
    if (r.isFormData(l)) {
      delete h["Content-Type"];
    }
    var p = new XMLHttpRequest();
    if (t.auth) {
      var d = t.auth.username || "";
      var y = t.auth.password || "";
      h.Authorization = "Basic " + btoa(d + ":" + y);
    }
    var m = s(t.baseURL, t.url);
    p.open(t.method.toUpperCase(), i(m, t.params, t.paramsSerializer), true);
    p.timeout = t.timeout;
    p.onreadystatechange = function () {
      if (p && p.readyState === 4 && (p.status !== 0 || p.responseURL && p.responseURL.indexOf("file:") === 0)) {
        var n = "getAllResponseHeaders" in p ? a(p.getAllResponseHeaders()) : null;
        var r = {
          data: t.responseType && t.responseType !== "text" ? p.response : p.responseText,
          status: p.status,
          statusText: p.statusText,
          headers: n,
          config: t,
          request: p
        };
        o(e, f, r);
        p = null;
      }
    };
    p.onabort = function () {
      if (p) {
        f(u("Request aborted", t, "ECONNABORTED", p));
        p = null;
      }
    };
    p.onerror = function () {
      f(u("Network Error", t, null, p));
      p = null;
    };
    p.ontimeout = function () {
      var e = "timeout of " + t.timeout + "ms exceeded";
      if (t.timeoutErrorMessage) {
        e = t.timeoutErrorMessage;
      }
      f(u(e, t, "ECONNABORTED", p));
      p = null;
    };
    if (r.isStandardBrowserEnv()) {
      var g = require("./388.js");
      var v = (t.withCredentials || c(m)) && t.xsrfCookieName ? g.read(t.xsrfCookieName) : undefined;
      if (v) {
        h[t.xsrfHeaderName] = v;
      }
    }
    if ("setRequestHeader" in p) {
      r.forEach(h, function (t, e) {
        if (l === undefined && e.toLowerCase() === "content-type") {
          delete h[e];
        } else {
          p.setRequestHeader(e, t);
        }
      });
    }
    if (!r.isUndefined(t.withCredentials)) {
      p.withCredentials = !!t.withCredentials;
    }
    if (t.responseType) {
      try {
        p.responseType = t.responseType;
      } catch (e) {
        if (t.responseType !== "json") {
          throw e;
        }
      }
    }
    if (typeof t.onDownloadProgress == "function") {
      p.addEventListener("progress", t.onDownloadProgress);
    }
    if (typeof t.onUploadProgress == "function" && p.upload) {
      p.upload.addEventListener("progress", t.onUploadProgress);
    }
    if (t.cancelToken) {
      t.cancelToken.promise.then(function (t) {
        if (p) {
          p.abort();
          f(t);
          p = null;
        }
      });
    }
    if (l === undefined) {
      l = null;
    }
    p.send(l);
  });
};