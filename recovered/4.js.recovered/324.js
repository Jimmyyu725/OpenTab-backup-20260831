var r = require("./231.js");
module.exports = function (e, t, n) {
  var o = n.config.validateStatus;
  if (!o || o(n.status)) {
    e(n);
  } else {
    t(r("Request failed with status code " + n.status, n.config, null, n.request, n));
  }
};