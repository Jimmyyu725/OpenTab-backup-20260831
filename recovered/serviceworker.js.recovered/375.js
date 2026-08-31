var r = require("./10.js");
var o = require("./211.js");
var i = require("./376.js");
var s = require("./217.js");
function a(t) {
  var e = new i(t);
  var n = o(i.prototype.request, e);
  r.extend(n, i.prototype, e);
  r.extend(n, e);
  return n;
}
var c = a(require("./214.js"));
c.Axios = i;
c.create = function (t) {
  return a(s(c.defaults, t));
};
c.Cancel = require("./218.js");
c.CancelToken = require("./389.js");
c.isCancel = require("./213.js");
c.all = function (t) {
  return Promise.all(t);
};
c.spread = require("./390.js");
module.exports = c;
module.exports.default = c;