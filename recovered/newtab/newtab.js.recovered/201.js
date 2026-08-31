var r = require("./142.js");
var i = Function.toString;
if (typeof r.inspectSource != "function") {
  r.inspectSource = function (t) {
    return i.call(t);
  };
}
module.exports = r.inspectSource;