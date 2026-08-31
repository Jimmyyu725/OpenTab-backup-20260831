var r = require("./31.js");
var o = require("./226.js");
var i = require("./319.js");
var s = require("./232.js");
function a(t) {
  var e = new i(t);
  var n = o(i.prototype.request, e);
  r.extend(n, i.prototype, e);
  r.extend(n, e);
  return n;
}
var u = a(require("./229.js"));
u.Axios = i;
u.create = function (t) {
  return a(s(u.defaults, t));
};
u.Cancel = require("./233.js");
u.CancelToken = require("./332.js");
u.isCancel = require("./228.js");
u.all = function (t) {
  return Promise.all(t);
};
u.spread = require("./333.js");
module.exports = u;
module.exports.default = u;