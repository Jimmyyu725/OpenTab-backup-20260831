var r = require("./148.js");
var i = require("./147.js");
module.exports = r ? {}.toString : function () {
  return "[object " + i(this) + "]";
};