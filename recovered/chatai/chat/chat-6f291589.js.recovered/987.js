var i = require("./7871.js");
var s = require("./4351.js");
var r = require("./2992.js");
var a = i(Function.toString);
if (!s(r.inspectSource)) {
  r.inspectSource = function (e) {
    return a(e);
  };
}
module.exports = r.inspectSource;