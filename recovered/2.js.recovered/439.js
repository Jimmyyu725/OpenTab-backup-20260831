var n = require(/*webcrack:missing*/"./249.js");
var o = require(/*webcrack:missing*/"./209.js");
module.exports = function (t) {
  if (!o(t)) {
    return false;
  }
  var e = n(t);
  return e == "[object Function]" || e == "[object GeneratorFunction]" || e == "[object AsyncFunction]" || e == "[object Proxy]";
};