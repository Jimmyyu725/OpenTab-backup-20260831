var r = require("./233.js");
function o(e) {
  if (typeof e != "function") {
    throw new TypeError("executor must be a function.");
  }
  var t;
  this.promise = new Promise(function (e) {
    t = e;
  });
  var n = this;
  e(function (e) {
    if (!n.reason) {
      n.reason = new r(e);
      t(n.reason);
    }
  });
}
o.prototype.throwIfRequested = function () {
  if (this.reason) {
    throw this.reason;
  }
};
o.source = function () {
  var e;
  return {
    token: new o(function (t) {
      e = t;
    }),
    cancel: e
  };
};
module.exports = o;