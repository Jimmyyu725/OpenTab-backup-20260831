var r = require("./231.js");
module.exports = function (t, e, n) {
  var o = n.config.validateStatus;
  if (!o || o(n.status)) {
    t(n);
  } else {
    e(r("Request failed with status code " + n.status, n.config, null, n.request, n));
  }
};