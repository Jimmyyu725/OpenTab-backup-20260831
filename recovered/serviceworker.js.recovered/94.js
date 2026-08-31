var r = require("./95.js");
var o = Function.toString;
if (typeof r.inspectSource != "function") {
  r.inspectSource = function (t) {
    return o.call(t);
  };
}
module.exports = r.inspectSource;