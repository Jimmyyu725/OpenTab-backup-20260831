var i = require("./2334.js");
var s = require("./2896.js");
var r = i.RangeError;
module.exports = function (e) {
  var t = s(e);
  if (t < 0) {
    throw r("The argument can't be less than 0");
  }
  return t;
};