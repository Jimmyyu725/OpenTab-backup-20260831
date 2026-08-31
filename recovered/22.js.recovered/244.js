var t = require(/*webcrack:missing*/"./25.js");
var r = t !== undefined && t || typeof self != "undefined" && self || window;
var i = Function.prototype.apply;
function o(t, e) {
  this._id = t;
  this._clearFn = e;
}
exports.setTimeout = function () {
  return new o(i.call(setTimeout, r, arguments), clearTimeout);
};
exports.setInterval = function () {
  return new o(i.call(setInterval, r, arguments), clearInterval);
};
exports.clearTimeout = exports.clearInterval = function (t) {
  if (t) {
    t.close();
  }
};
o.prototype.unref = o.prototype.ref = function () {};
o.prototype.close = function () {
  this._clearFn.call(r, this._id);
};
exports.enroll = function (t, e) {
  clearTimeout(t._idleTimeoutId);
  t._idleTimeout = e;
};
exports.unenroll = function (t) {
  clearTimeout(t._idleTimeoutId);
  t._idleTimeout = -1;
};
exports._unrefActive = exports.active = function (t) {
  clearTimeout(t._idleTimeoutId);
  var e = t._idleTimeout;
  if (e >= 0) {
    t._idleTimeoutId = setTimeout(function () {
      if (t._onTimeout) {
        t._onTimeout();
      }
    }, e);
  }
};
require("./352.js");
exports.setImmediate = typeof self != "undefined" && self.setImmediate || t !== undefined && t.setImmediate || this && this.setImmediate;
exports.clearImmediate = typeof self != "undefined" && self.clearImmediate || t !== undefined && t.clearImmediate || this && this.clearImmediate;