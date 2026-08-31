var r = require("./93.js");
var i = require("./70.js");
var o = require("./8.js")("iterator");
module.exports = function (t) {
  if (t != null) {
    return t[o] || t["@@iterator"] || i[r(t)];
  }
};