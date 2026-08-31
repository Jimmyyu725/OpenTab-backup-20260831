var r = require("./31.js");
module.exports = r.isStandardBrowserEnv() ? {
  write: function (e, t, n, o, i, a) {
    var u = [];
    u.push(e + "=" + encodeURIComponent(t));
    if (r.isNumber(n)) {
      u.push("expires=" + new Date(n).toGMTString());
    }
    if (r.isString(o)) {
      u.push("path=" + o);
    }
    if (r.isString(i)) {
      u.push("domain=" + i);
    }
    if (a === true) {
      u.push("secure");
    }
    document.cookie = u.join("; ");
  },
  read: function (e) {
    var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
    if (t) {
      return decodeURIComponent(t[3]);
    } else {
      return null;
    }
  },
  remove: function (e) {
    this.write(e, "", Date.now() - 86400000);
  }
} : {
  write: function () {},
  read: function () {
    return null;
  },
  remove: function () {}
};