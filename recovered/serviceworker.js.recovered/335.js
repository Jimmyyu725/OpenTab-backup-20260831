var r = require("./119.js");
var o = require("./45.js");
var i = require("./9.js")("iterator");
module.exports = function (t) {
  if (t != null) {
    return t[i] || t["@@iterator"] || o[r(t)];
  }
};