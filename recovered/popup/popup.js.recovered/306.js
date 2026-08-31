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
    var s = t.url;
    if (t.params) {
      var a = r(t.params);
      if (a) {
        s += (s.indexOf("?") >= 0 ? "&" : "?") + a;
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
    var h = false;
    window[u] = function (t) {
      if (!(window[u] = l, h)) {
        e({
          data: t,
          status: 200
        });
      }
    };
    var p = {
      _: new Date().getTime()
    };
    p[t.callbackParamName || "callback"] = u;
    s += (s.indexOf("?") >= 0 ? "&" : "?") + r(p);
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
          h = true;
          i(t);
        }
      });
    }
    o.src = s;
    document.head.appendChild(o);
  });
};