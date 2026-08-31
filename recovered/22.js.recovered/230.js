var r = require("./31.js");
var i = require("./324.js");
var o = require("./227.js");
var s = require("./326.js");
var a = require("./329.js");
var c = require("./330.js");
var u = require("./231.js");
module.exports = function (t) {
  return new Promise(function (e, l) {
    var h = t.data;
    var p = t.headers;
    if (r.isFormData(h)) {
      delete p["Content-Type"];
    }
    var f = new XMLHttpRequest();
    if (t.auth) {
      var d = t.auth.username || "";
      var g = t.auth.password || "";
      p.Authorization = "Basic " + btoa(d + ":" + g);
    }
    var m = s(t.baseURL, t.url);
    f.open(t.method.toUpperCase(), o(m, t.params, t.paramsSerializer), true);
    f.timeout = t.timeout;
    f.onreadystatechange = function () {
      if (f && f.readyState === 4 && (f.status !== 0 || f.responseURL && f.responseURL.indexOf("file:") === 0)) {
        var n = "getAllResponseHeaders" in f ? a(f.getAllResponseHeaders()) : null;
        var r = {
          data: t.responseType && t.responseType !== "text" ? f.response : f.responseText,
          status: f.status,
          statusText: f.statusText,
          headers: n,
          config: t,
          request: f
        };
        i(e, l, r);
        f = null;
      }
    };
    f.onabort = function () {
      if (f) {
        l(u("Request aborted", t, "ECONNABORTED", f));
        f = null;
      }
    };
    f.onerror = function () {
      l(u("Network Error", t, null, f));
      f = null;
    };
    f.ontimeout = function () {
      var e = "timeout of " + t.timeout + "ms exceeded";
      if (t.timeoutErrorMessage) {
        e = t.timeoutErrorMessage;
      }
      l(u(e, t, "ECONNABORTED", f));
      f = null;
    };
    if (r.isStandardBrowserEnv()) {
      var y = require("./331.js");
      var b = (t.withCredentials || c(m)) && t.xsrfCookieName ? y.read(t.xsrfCookieName) : undefined;
      if (b) {
        p[t.xsrfHeaderName] = b;
      }
    }
    if ("setRequestHeader" in f) {
      r.forEach(p, function (t, e) {
        if (h === undefined && e.toLowerCase() === "content-type") {
          delete p[e];
        } else {
          f.setRequestHeader(e, t);
        }
      });
    }
    if (!r.isUndefined(t.withCredentials)) {
      f.withCredentials = !!t.withCredentials;
    }
    if (t.responseType) {
      try {
        f.responseType = t.responseType;
      } catch (e) {
        if (t.responseType !== "json") {
          throw e;
        }
      }
    }
    if (typeof t.onDownloadProgress == "function") {
      f.addEventListener("progress", t.onDownloadProgress);
    }
    if (typeof t.onUploadProgress == "function" && f.upload) {
      f.upload.addEventListener("progress", t.onUploadProgress);
    }
    if (t.cancelToken) {
      t.cancelToken.promise.then(function (t) {
        if (f) {
          f.abort();
          l(t);
          f = null;
        }
      });
    }
    if (h === undefined) {
      h = null;
    }
    f.send(h);
  });
};