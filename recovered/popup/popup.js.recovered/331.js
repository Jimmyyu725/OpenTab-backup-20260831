var r = require("./31.js");
module.exports = r.isStandardBrowserEnv() ? {
  write: function (t, e, n, i, o, s) {
    var a = [];
    a.push(t + "=" + encodeURIComponent(e));
    if (r.isNumber(n)) {
      a.push("expires=" + new Date(n).toGMTString());
    }
    if (r.isString(i)) {
      a.push("path=" + i);
    }
    if (r.isString(o)) {
      a.push("domain=" + o);
    }
    if (s === true) {
      a.push("secure");
    }
    document.cookie = a.join("; ");
  },
  read: function (t) {
    var e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
    if (e) {
      return decodeURIComponent(e[3]);
    } else {
      return null;
    }
  },
  remove: function (t) {
    this.write(t, "", Date.now() - 86400000);
  }
} : {
  write: function () {},
  read: function () {
    return null;
  },
  remove: function () {}
};