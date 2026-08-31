var r = require("./17.js");
var i = require("./63.js");
var o = r("iterator");
var a = Array.prototype;
module.exports = function (t) {
  return t !== undefined && (i.Array === t || a[o] === t);
};