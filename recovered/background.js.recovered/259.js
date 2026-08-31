var r;
var o = require("./10.js");
var i = require("./260.js");
var s = require("./76.js");
var a = require("./55.js");
var u = require("./87.js");
var c = require("./53.js");
var f = require("./79.js");
var l = f("IE_PROTO");
function h() {}
function p(t) {
  return "<script>" + t + "</script>";
}
function d() {
  try {
    r = document.domain && new ActiveXObject("htmlfile");
  } catch (t) {}
  var t;
  var e;
  d = r ? function (t) {
    t.write(p(""));
    t.close();
    var e = t.parentWindow.Object;
    t = null;
    return e;
  }(r) : ((e = c("iframe")).style.display = "none", u.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write(p("document.F=Object")), t.close(), t.F);
  for (var n = s.length; n--;) {
    delete d.prototype[s[n]];
  }
  return d();
}
a[l] = true;
module.exports = Object.create || function (t, e) {
  var n;
  if (t !== null) {
    h.prototype = o(t);
    n = new h();
    h.prototype = null;
    n[l] = t;
  } else {
    n = d();
  }
  if (e === undefined) {
    return n;
  } else {
    return i(n, e);
  }
};