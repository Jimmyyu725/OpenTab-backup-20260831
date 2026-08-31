var r = require("./31.js");
var i = require("./324.js");
var o = require("./227.js");
var a = require("./326.js");
var s = require("./329.js");
var c = require("./330.js");
var u = require("./231.js");
module.exports = function (t) {
  return new Promise(function (e, l) {
    var f = t.data;
    var h = t.headers;
    if (r.isFormData(f)) {
      delete h["Content-Type"];
    }
    var p = new XMLHttpRequest();
    if (t.auth) {
      var d = t.auth.username || "";
      var m = t.auth.password || "";
      h.Authorization = "Basic " + btoa(d + ":" + m);
    }
    var g = a(t.baseURL, t.url);
    p.open(t.method.toUpperCase(), o(g, t.params, t.paramsSerializer), true);
    p.timeout = t.timeout;
    p.onreadystatechange = function () {
      if (p && p.readyState === 4 && (p.status !== 0 || p.responseURL && p.responseURL.indexOf("file:") === 0)) {
        var n = "getAllResponseHeaders" in p ? s(p.getAllResponseHeaders()) : null;
        var r = {
          data: t.responseType && t.responseType !== "text" ? p.response : p.responseText,
          status: p.status,
          statusText: p.statusText,
          headers: n,
          config: t,
          request: p
        };
        i(e, l, r);
        p = null;
      }
    };
    p.onabort = function () {
      if (p) {
        l(u("Request aborted", t, "ECONNABORTED", p));
        p = null;
      }
    };
    p.onerror = function () {
      l(u("Network Error", t, null, p));
      p = null;
    };
    p.ontimeout = function () {
      var e = "timeout of " + t.timeout + "ms exceeded";
      if (t.timeoutErrorMessage) {
        e = t.timeoutErrorMessage;
      }
      l(u(e, t, "ECONNABORTED", p));
      p = null;
    };
    if (r.isStandardBrowserEnv()) {
      var y = require("./331.js");
      var b = (t.withCredentials || c(g)) && t.xsrfCookieName ? y.read(t.xsrfCookieName) : undefined;
      if (b) {
        h[t.xsrfHeaderName] = b;
      }
    }
    if ("setRequestHeader" in p) {
      r.forEach(h, function (t, e) {
        if (f === undefined && e.toLowerCase() === "content-type") {
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
          l(t);
          p = null;
        }
      });
    }
    if (f === undefined) {
      f = null;
    }
    p.send(f);
  });
};