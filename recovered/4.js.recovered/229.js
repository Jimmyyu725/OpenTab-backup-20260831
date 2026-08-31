var t = require("./94.js");
var r = require("./31.js");
var o = require("./323.js");
var i = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function a(e, t) {
  if (!r.isUndefined(e) && r.isUndefined(e["Content-Type"])) {
    e["Content-Type"] = t;
  }
}
var u;
var c = {
  adapter: ((typeof XMLHttpRequest != "undefined" || t !== undefined && Object.prototype.toString.call(t) === "[object process]") && (u = require("./230.js")), u),
  transformRequest: [function (e, t) {
    o(t, "Accept");
    o(t, "Content-Type");
    if (r.isFormData(e) || r.isArrayBuffer(e) || r.isBuffer(e) || r.isStream(e) || r.isFile(e) || r.isBlob(e)) {
      return e;
    } else if (r.isArrayBufferView(e)) {
      return e.buffer;
    } else if (r.isURLSearchParams(e)) {
      a(t, "application/x-www-form-urlencoded;charset=utf-8");
      return e.toString();
    } else if (r.isObject(e)) {
      a(t, "application/json;charset=utf-8");
      return JSON.stringify(e);
    } else {
      return e;
    }
  }],
  transformResponse: [function (e) {
    if (typeof e == "string") {
      try {
        e = JSON.parse(e);
      } catch (e) {}
    }
    return e;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  validateStatus: function (e) {
    return e >= 200 && e < 300;
  }
};
c.headers = {
  common: {
    Accept: "application/json, text/plain, */*"
  }
};
r.forEach(["delete", "get", "head"], function (e) {
  c.headers[e] = {};
});
r.forEach(["post", "put", "patch"], function (e) {
  c.headers[e] = r.merge(i);
});
module.exports = c;