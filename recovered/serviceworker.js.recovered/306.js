(function () {
  var e;
  var r;
  var o;
  var i;
  var s;
  var a;
  var c;
  var u;
  var f;
  var l;
  l = require("./24.js");
  u = l.assign;
  f = l.isFunction;
  o = require("./189.js");
  i = require("./190.js");
  s = require("./312.js");
  c = require("./135.js");
  a = require("./313.js");
  e = require("./4.js");
  r = require("./67.js");
  module.exports.create = function (t, e, n, r) {
    var o;
    var s;
    if (t == null) {
      throw new Error("Root element needs a name.");
    }
    r = u({}, e, n, r);
    s = (o = new i(r)).element(t);
    if (!r.headless) {
      o.declaration(r);
      if (r.pubID != null || r.sysID != null) {
        o.dtd(r);
      }
    }
    return s;
  };
  module.exports.begin = function (t, e, n) {
    var r;
    if (f(t)) {
      e = (r = [t, e])[0];
      n = r[1];
      t = {};
    }
    if (e) {
      return new s(t, e, n);
    } else {
      return new i(t);
    }
  };
  module.exports.stringWriter = function (t) {
    return new c(t);
  };
  module.exports.streamWriter = function (t, e) {
    return new a(t, e);
  };
  module.exports.implementation = new o();
  module.exports.nodeType = e;
  module.exports.writerState = r;
}).call(this);