var r = require("./249.js");
var i = require("./209.js");
module.exports = function (t) {
  if (!i(t)) {
    return false;
  }
  var e = r(t);
  return e == "[object Function]" || e == "[object GeneratorFunction]" || e == "[object AsyncFunction]" || e == "[object Proxy]";
};