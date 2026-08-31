var n = 1;
function r(t) {
  var e = [];
  for (var n in t) {
    e.push(encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
  }
  return e.join("&");
}
module.exports = function (t) {
  return new Promise(function (e, o) {
    var i = document.createElement("script");
    var s = t.url;
    if (t.params) {
      var a = r(t.params);
      if (a) {
        s += (s.indexOf("?") >= 0 ? "&" : "?") + a;
      }
    }
    function c() {
      if (i) {
        i.onload = i.onreadystatechange = i.onerror = null;
        if (i.parentNode) {
          i.parentNode.removeChild(i);
        }
        i = null;
      }
    }
    i.async = true;
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
    i.onload = i.onreadystatechange = function () {
      if (!i.readyState || !!/loaded|complete/.test(i.readyState)) {
        c();
      }
    };
    i.onerror = function () {
      c();
      o(new Error("Network Error"));
    };
    if (t.cancelToken) {
      t.cancelToken.promise.then(function (t) {
        if (i) {
          h = true;
          o(t);
        }
      });
    }
    i.src = s;
    document.head.appendChild(i);
  });
};