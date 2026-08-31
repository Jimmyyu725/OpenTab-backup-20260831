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
    var d = new XMLHttpRequest();
    if (t.auth) {
      var f = t.auth.username || "";
      var g = t.auth.password || "";
      p.Authorization = "Basic " + btoa(f + ":" + g);
    }
    var y = s(t.baseURL, t.url);
    d.open(t.method.toUpperCase(), o(y, t.params, t.paramsSerializer), true);
    d.timeout = t.timeout;
    d.onreadystatechange = function () {
      if (d && d.readyState === 4 && (d.status !== 0 || d.responseURL && d.responseURL.indexOf("file:") === 0)) {
        var n = "getAllResponseHeaders" in d ? a(d.getAllResponseHeaders()) : null;
        var r = {
          data: t.responseType && t.responseType !== "text" ? d.response : d.responseText,
          status: d.status,
          statusText: d.statusText,
          headers: n,
          config: t,
          request: d
        };
        i(e, l, r);
        d = null;
      }
    };
    d.onabort = function () {
      if (d) {
        l(u("Request aborted", t, "ECONNABORTED", d));
        d = null;
      }
    };
    d.onerror = function () {
      l(u("Network Error", t, null, d));
      d = null;
    };
    d.ontimeout = function () {
      var e = "timeout of " + t.timeout + "ms exceeded";
      if (t.timeoutErrorMessage) {
        e = t.timeoutErrorMessage;
      }
      l(u(e, t, "ECONNABORTED", d));
      d = null;
    };
    if (r.isStandardBrowserEnv()) {
      var m = require("./331.js");
      var b = (t.withCredentials || c(y)) && t.xsrfCookieName ? m.read(t.xsrfCookieName) : undefined;
      if (b) {
        p[t.xsrfHeaderName] = b;
      }
    }
    if ("setRequestHeader" in d) {
      r.forEach(p, function (t, e) {
        if (h === undefined && e.toLowerCase() === "content-type") {
          delete p[e];
        } else {
          d.setRequestHeader(e, t);
        }
      });
    }
    if (!r.isUndefined(t.withCredentials)) {
      d.withCredentials = !!t.withCredentials;
    }
    if (t.responseType) {
      try {
        d.responseType = t.responseType;
      } catch (e) {
        if (t.responseType !== "json") {
          throw e;
        }
      }
    }
    if (typeof t.onDownloadProgress == "function") {
      d.addEventListener("progress", t.onDownloadProgress);
    }
    if (typeof t.onUploadProgress == "function" && d.upload) {
      d.upload.addEventListener("progress", t.onUploadProgress);
    }
    if (t.cancelToken) {
      t.cancelToken.promise.then(function (t) {
        if (d) {
          d.abort();
          l(t);
          d = null;
        }
      });
    }
    if (h === undefined) {
      h = null;
    }
    d.send(h);
  });
};