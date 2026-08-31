var n = require(/*webcrack:missing*/"./6080.js");
var o = require(/*webcrack:missing*/"./9860.js");
export const Z = function (e) {
  if (!(0, o.Z)(e)) {
    return false;
  }
  var t = (0, n.Z)(e);
  return t == "[object Function]" || t == "[object GeneratorFunction]" || t == "[object AsyncFunction]" || t == "[object Proxy]";
};