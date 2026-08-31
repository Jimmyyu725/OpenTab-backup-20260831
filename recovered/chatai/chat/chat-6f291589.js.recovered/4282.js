var i = require("./6080.js");
var s = require("./365.js");
export const Z = function (e) {
  return typeof e == "symbol" || (0, s.Z)(e) && (0, i.Z)(e) == "[object Symbol]";
};