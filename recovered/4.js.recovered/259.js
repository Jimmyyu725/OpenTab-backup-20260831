var r;
var o = require(/*webcrack:missing*/"./10.js");
var i = require("./260.js");
var a = require(/*webcrack:missing*/"./76.js");
var u = require(/*webcrack:missing*/"./55.js");
var c = require(/*webcrack:missing*/"./87.js");
var s = require(/*webcrack:missing*/"./53.js");
var f = require(/*webcrack:missing*/"./79.js");
var l = f("IE_PROTO");
function d() {}
function h(e) {
  return "<script>" + e + "</script>";
}
function p() {
  try {
    r = document.domain && new ActiveXObject("htmlfile");
  } catch (e) {}
  var e;
  var t;
  p = r ? function (e) {
    e.write(h(""));
    e.close();
    var t = e.parentWindow.Object;
    e = null;
    return t;
  }(r) : ((t = s("iframe")).style.display = "none", c.appendChild(t), t.src = String("javascript:"), (e = t.contentWindow.document).open(), e.write(h("document.F=Object")), e.close(), e.F);
  for (var n = a.length; n--;) {
    delete p.prototype[a[n]];
  }
  return p();
}
u[l] = true;
module.exports = Object.create || function (e, t) {
  var n;
  if (e !== null) {
    d.prototype = o(e);
    n = new d();
    d.prototype = null;
    n[l] = e;
  } else {
    n = p();
  }
  if (t === undefined) {
    return n;
  } else {
    return i(n, t);
  }
};