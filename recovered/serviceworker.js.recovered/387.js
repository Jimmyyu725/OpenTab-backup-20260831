var r = require("./10.js");
module.exports = r.isStandardBrowserEnv() ? function () {
  var t;
  var e = /(msie|trident)/i.test(navigator.userAgent);
  var n = document.createElement("a");
  function o(t) {
    var r = t;
    if (e) {
      n.setAttribute("href", r);
      r = n.href;
    }
    n.setAttribute("href", r);
    return {
      href: n.href,
      protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
      host: n.host,
      search: n.search ? n.search.replace(/^\?/, "") : "",
      hash: n.hash ? n.hash.replace(/^#/, "") : "",
      hostname: n.hostname,
      port: n.port,
      pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
    };
  }
  t = o(window.location.href);
  return function (e) {
    var n = r.isString(e) ? o(e) : e;
    return n.protocol === t.protocol && n.host === t.host;
  };
}() : function () {
  return true;
};