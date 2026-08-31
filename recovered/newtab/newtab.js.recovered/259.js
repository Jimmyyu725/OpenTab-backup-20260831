var r;
var i = require("./10.js");
var o = require("./260.js");
var a = require("./76.js");
var s = require("./55.js");
var c = require("./87.js");
var u = require("./53.js");
var l = require("./79.js");
var f = l("IE_PROTO");
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
  }(r) : ((e = u("iframe")).style.display = "none", c.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write(p("document.F=Object")), t.close(), t.F);
  for (var n = a.length; n--;) {
    delete d.prototype[a[n]];
  }
  return d();
}
s[f] = true;
module.exports = Object.create || function (t, e) {
  var n;
  if (t !== null) {
    h.prototype = i(t);
    n = new h();
    h.prototype = null;
    n[f] = t;
  } else {
    n = d();
  }
  if (e === undefined) {
    return n;
  } else {
    return o(n, e);
  }
};