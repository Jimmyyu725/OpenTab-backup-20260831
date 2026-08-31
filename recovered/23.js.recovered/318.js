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
var c = a(require("./229.js"));
c.Axios = i;
c.create = function (t) {
  return a(s(c.defaults, t));
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