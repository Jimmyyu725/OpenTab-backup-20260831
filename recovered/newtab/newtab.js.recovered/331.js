var r = require("./31.js");
module.exports = r.isStandardBrowserEnv() ? {
  write: function (t, e, n, i, o, a) {
    var s = [];
    s.push(t + "=" + encodeURIComponent(e));
    if (r.isNumber(n)) {
      s.push("expires=" + new Date(n).toGMTString());
    }
    if (r.isString(i)) {
      s.push("path=" + i);
    }
    if (r.isString(o)) {
      s.push("domain=" + o);
    }
    if (a === true) {
      s.push("secure");
    }
    document.cookie = s.join("; ");
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