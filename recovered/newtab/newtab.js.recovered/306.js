var n = 1;
function r(t) {
  var e = [];
  for (var n in t) {
    e.push(encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
  }
  return e.join("&");
}
module.exports = function (t) {
  return new Promise(function (e, i) {
    var o = document.createElement("script");
    var a = t.url;
    if (t.params) {
      var s = r(t.params);
      if (s) {
        a += (a.indexOf("?") >= 0 ? "&" : "?") + s;
      }
    }
    function c() {
      if (o) {
        o.onload = o.onreadystatechange = o.onerror = null;
        if (o.parentNode) {
          o.parentNode.removeChild(o);
        }
        o = null;
      }
    }
    o.async = true;
    var u = "axiosJsonpCallback" + n++;
    var l = window[u];
    var f = false;
    window[u] = function (t) {
      if (!(window[u] = l, f)) {
        e({
          data: t,
          status: 200
        });
      }
    };
    var h = {
      _: new Date().getTime()
    };
    h[t.callbackParamName || "callback"] = u;
    a += (a.indexOf("?") >= 0 ? "&" : "?") + r(h);
    o.onload = o.onreadystatechange = function () {
      if (!o.readyState || !!/loaded|complete/.test(o.readyState)) {
        c();
      }
    };
    o.onerror = function () {
      c();
      i(new Error("Network Error"));
    };
    if (t.cancelToken) {
      t.cancelToken.promise.then(function (t) {
        if (o) {
          f = true;
          i(t);
        }
      });
    }
    o.src = a;
    document.head.appendChild(o);
  });
};