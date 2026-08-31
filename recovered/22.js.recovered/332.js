var r = require("./233.js");
function i(t) {
  if (typeof t != "function") {
    throw new TypeError("executor must be a function.");
  }
  var e;
  this.promise = new Promise(function (t) {
    e = t;
  });
  var n = this;
  t(function (t) {
    if (!n.reason) {
      n.reason = new r(t);
      e(n.reason);
    }
  });
}
i.prototype.throwIfRequested = function () {
  if (this.reason) {
    throw this.reason;
  }
};
i.source = function () {
  var t;
  return {
    token: new i(function (e) {
      t = e;
    }),
    cancel: t
  };
};
module.exports = i;