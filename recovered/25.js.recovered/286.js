var r = require("./148.js");
var o = require("./147.js");
module.exports = r ? {}.toString : function () {
  return "[object " + o(this) + "]";
};