var r = require("./16.js");
var i = require("./110.js");
var o = require("./66.js");
var s = require("./39.js");
var a = require("./67.js");
var c = require("./11.js");
var u = require("./68.js");
var l = Object.getOwnPropertyDescriptor;
exports.f = r ? l : function (t, e) {
  t = s(t);
  e = a(e, true);
  if (u) {
    try {
      return l(t, e);
    } catch (t) {}
  }
  if (c(t, e)) {
    return o(!i.f.call(t, e), t[e]);
  }
};