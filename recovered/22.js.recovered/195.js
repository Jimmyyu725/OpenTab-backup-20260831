var r;
var i = require("./32.js");
var o = require("./274.js");
var s = require("./196.js");
var a = require("./145.js");
var c = require("./197.js");
var u = require("./138.js");
var l = require("./141.js");
var h = l("IE_PROTO");
function p() {}
function f(t) {
  return "<script>" + t + "</script>";
}
function d() {
  try {
    r = document.domain && new ActiveXObject("htmlfile");
  } catch (t) {}
  var t;
  var e;
  d = r ? function (t) {
    t.write(f(""));
    t.close();
    var e = t.parentWindow.Object;
    t = null;
    return e;
  }(r) : ((e = u("iframe")).style.display = "none", c.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write(f("document.F=Object")), t.close(), t.F);
  for (var n = s.length; n--;) {
    delete d.prototype[s[n]];
  }
  return d();
}
a[h] = true;
module.exports = Object.create || function (t, e) {
  var n;
  if (t !== null) {
    p.prototype = i(t);
    n = new p();
    p.prototype = null;
    n[h] = t;
  } else {
    n = d();
  }
  if (e === undefined) {
    return n;
  } else {
    return o(n, e);
  }
};