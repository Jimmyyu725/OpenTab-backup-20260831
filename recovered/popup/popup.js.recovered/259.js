var r;
var i = require("./10.js");
var o = require("./260.js");
var s = require("./76.js");
var a = require("./55.js");
var c = require("./87.js");
var u = require("./53.js");
var l = require("./79.js");
var h = l("IE_PROTO");
function p() {}
function d(t) {
  return "<script>" + t + "</script>";
}
function f() {
  try {
    r = document.domain && new ActiveXObject("htmlfile");
  } catch (t) {}
  var t;
  var e;
  f = r ? function (t) {
    t.write(d(""));
    t.close();
    var e = t.parentWindow.Object;
    t = null;
    return e;
  }(r) : ((e = u("iframe")).style.display = "none", c.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write(d("document.F=Object")), t.close(), t.F);
  for (var n = s.length; n--;) {
    delete f.prototype[s[n]];
  }
  return f();
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
    n = f();
  }
  if (e === undefined) {
    return n;
  } else {
    return o(n, e);
  }
};