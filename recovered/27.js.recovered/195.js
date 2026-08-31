var e;
var o = require("./32.js");
var i = require("./274.js");
var c = require("./196.js");
var u = require("./145.js");
var a = require("./197.js");
var f = require("./138.js");
var s = require("./141.js");
var p = s("IE_PROTO");
function l() {}
function v(t) {
  return "<script>" + t + "</script>";
}
function h() {
  try {
    e = document.domain && new ActiveXObject("htmlfile");
  } catch (t) {}
  var t;
  var n;
  h = e ? function (t) {
    t.write(v(""));
    t.close();
    var n = t.parentWindow.Object;
    t = null;
    return n;
  }(e) : ((n = f("iframe")).style.display = "none", a.appendChild(n), n.src = String("javascript:"), (t = n.contentWindow.document).open(), t.write(v("document.F=Object")), t.close(), t.F);
  for (var r = c.length; r--;) {
    delete h.prototype[c[r]];
  }
  return h();
}
u[p] = true;
module.exports = Object.create || function (t, n) {
  var r;
  if (t !== null) {
    l.prototype = o(t);
    r = new l();
    l.prototype = null;
    r[p] = t;
  } else {
    r = h();
  }
  if (n === undefined) {
    return r;
  } else {
    return i(r, n);
  }
};