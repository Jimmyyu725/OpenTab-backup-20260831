var r = require("./17.js");
var i = require("./63.js");
var o = r("iterator");
var s = Array.prototype;
module.exports = function (t) {
  return t !== undefined && (i.Array === t || s[o] === t);
};