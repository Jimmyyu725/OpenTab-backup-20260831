var r = require("./31.js");
var o = require("./226.js");
var i = require("./319.js");
var a = require("./232.js");
function u(e) {
  var t = new i(e);
  var n = o(i.prototype.request, t);
  r.extend(n, i.prototype, t);
  r.extend(n, t);
  return n;
}
var c = u(require("./229.js"));
c.Axios = i;
c.create = function (e) {
  return u(a(c.defaults, e));
};
c.Cancel = require("./233.js");
c.CancelToken = require("./332.js");
c.isCancel = require("./228.js");
c.all = function (e) {
  return Promise.all(e);
};
c.spread = require("./333.js");
module.exports = c;
module.exports.default = c;