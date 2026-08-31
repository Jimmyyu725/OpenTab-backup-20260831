var r = require("./54.js");
var o = require("./31.js");
module.exports = function (t) {
  if (!o(t)) {
    return false;
  }
  var e = r(t);
  return e == "[object Function]" || e == "[object GeneratorFunction]" || e == "[object AsyncFunction]" || e == "[object Proxy]";
};