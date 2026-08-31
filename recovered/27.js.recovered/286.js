var e = require("./148.js");
var o = require("./147.js");
module.exports = e ? {}.toString : function () {
  return "[object " + o(this) + "]";
};