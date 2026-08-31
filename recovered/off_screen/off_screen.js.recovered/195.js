var r;
var o = require("./32.js");
var i = require("./274.js");
var c = require("./196.js");
var u = require("./145.js");
var a = require("./197.js");
var s = require("./138.js");
var f = require("./141.js");
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