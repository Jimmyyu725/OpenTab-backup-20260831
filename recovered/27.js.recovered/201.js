var e = require("./142.js");
var o = Function.toString;
if (typeof e.inspectSource != "function") {
  e.inspectSource = function (t) {
    return o.call(t);
  };
}
module.exports = e.inspectSource;