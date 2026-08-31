var i = require("./2334.js");
var s = require("./6807.js");
var r = i.RangeError;
module.exports = function (e, t) {
  var n = s(e);
  if (n % t) {
    throw r("Wrong offset");
  }
  return n;
};