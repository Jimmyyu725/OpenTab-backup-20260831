var r;
var o = require("./10.js");
var i = require("./260.js");
var c = require("./76.js");
var u = require("./55.js");
var a = require("./87.js");
var s = require("./53.js");
var f = require("./79.js");
var l = f("IE_PROTO");
function p() {}
function v(t) {
  return "<script>" + t + "</script>";
}
function d() {
  try {
    r = document.domain && new ActiveXObject("htmlfile");
  } catch (t) {}
  var t;
  var n;
  d = r ? function (t) {
    t.write(v(""));
    t.close();
    var n = t.parentWindow.Object;
    t = null;
    return n;
  }(r) : ((n = s("iframe")).style.display = "none", a.appendChild(n), n.src = String("javascript:"), (t = n.contentWindow.document).open(), t.write(v("document.F=Object")), t.close(), t.F);
  for (var e = c.length; e--;) {
    delete d.prototype[c[e]];
  }
  return d();
}
u[l] = true;
module.exports = Object.create || function (t, n) {
  var e;
  if (t !== null) {
    p.prototype = o(t);
    e = new p();
    p.prototype = null;
    e[l] = t;
  } else {
    e = d();
  }
  if (n === undefined) {
    return e;
  } else {
    return i(e, n);
  }
};