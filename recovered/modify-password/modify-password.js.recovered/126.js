var r = require("./93.js");
var o = require("./70.js");
var i = require("./8.js")("iterator");
module.exports = function (t) {
  if (t != null) {
    return t[i] || t["@@iterator"] || o[r(t)];
  }
};