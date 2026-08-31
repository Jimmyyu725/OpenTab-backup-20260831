var r = require("./31.js");
var i = require("./226.js");
var o = require("./319.js");
var a = require("./232.js");
function s(t) {
  var e = new o(t);
  var n = i(o.prototype.request, e);
  r.extend(n, o.prototype, e);
  r.extend(n, e);
  return n;
}
var c = s(require("./229.js"));
c.Axios = o;
c.create = function (t) {
  return s(a(c.defaults, t));
};
c.Cancel = require("./233.js");
c.CancelToken = require("./332.js");
c.isCancel = require("./228.js");
c.all = function (t) {
  return Promise.all(t);
};
c.spread = require("./333.js");
module.exports = c;
module.exports.default = c;