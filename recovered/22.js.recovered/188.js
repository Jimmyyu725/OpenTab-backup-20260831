var r = require("./61.js");
var i = require("./269.js");
var o = require("./95.js");
var s = require("./96.js");
var a = require("./189.js");
var c = require("./37.js");
var u = require("./191.js");
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