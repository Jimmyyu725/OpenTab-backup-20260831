var e = require("./94.js");
var r = require("./31.js");
var o = require("./323.js");
var i = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function s(t, e) {
  if (!r.isUndefined(t) && r.isUndefined(t["Content-Type"])) {
    t["Content-Type"] = e;
  }
}
var a;
var u = {
  adapter: ((typeof XMLHttpRequest != "undefined" || e !== undefined && Object.prototype.toString.call(e) === "[object process]") && (a = require("./230.js")), a),
  transformRequest: [function (t, e) {
    o(e, "Accept");
    o(e, "Content-Type");
    if (r.isFormData(t) || r.isArrayBuffer(t) || r.isBuffer(t) || r.isStream(t) || r.isFile(t) || r.isBlob(t)) {
      return t;
    } else if (r.isArrayBufferView(t)) {
      return t.buffer;
    } else if (r.isURLSearchParams(t)) {
      s(e, "application/x-www-form-urlencoded;charset=utf-8");
      return t.toString();
    } else if (r.isObject(t)) {
      s(e, "application/json;charset=utf-8");
      return JSON.stringify(t);
    } else {
      return t;
    }
  }],
  transformResponse: [function (t) {
    if (typeof t == "string") {
      try {
        t = JSON.parse(t);
      } catch (t) {}
    }
    return t;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  }
};
u.headers = {
  common: {
    Accept: "application/json, text/plain, */*"
  }
};
r.forEach(["delete", "get", "head"], function (t) {
  u.headers[t] = {};
});
r.forEach(["post", "put", "patch"], function (t) {
  u.headers[t] = r.merge(i);
});
module.exports = u;