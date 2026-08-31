(function () {
  var e;
  var r;
  var i;
  var o;
  var a;
  var s;
  var c;
  var u;
  var l;
  var f;
  f = require("./57.js");
  u = f.assign;
  l = f.isFunction;
  i = require("./234.js");
  o = require("./235.js");
  a = require("./342.js");
  c = require("./182.js");
  s = require("./343.js");
  e = require("./15.js");
  r = require("./155.js");
  module.exports.create = function (t, e, n, r) {
    var i;
    var a;
    if (t == null) {
      throw new Error("Root element needs a name.");
    }
    r = u({}, e, n, r);
    a = (i = new o(r)).element(t);
    if (!r.headless) {
      i.declaration(r);
      if (r.pubID != null || r.sysID != null) {
        i.dtd(r);
      }
    }
    return a;
  };
  module.exports.begin = function (t, e, n) {
    var r;
    if (l(t)) {
      e = (r = [t, e])[0];
      n = r[1];
      t = {};
    }
    if (e) {
      return new a(t, e, n);
    } else {
      return new o(t);
    }
  };
  module.exports.stringWriter = function (t) {
    return new c(t);
  };
  module.exports.streamWriter = function (t, e) {
    return new s(t, e);
  };
  module.exports.implementation = new i();
  module.exports.nodeType = e;
  module.exports.writerState = r;
}).call(this);