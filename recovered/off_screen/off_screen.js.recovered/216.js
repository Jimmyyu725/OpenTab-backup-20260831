var r = require("./10.js");
module.exports = function () {
  var t = r(this);
  var n = "";
  if (t.global) {
    n += "g";
  }
  if (t.ignoreCase) {
    n += "i";
  }
  if (t.multiline) {
    n += "m";
  }
  if (t.dotAll) {
    n += "s";
  }
  if (t.unicode) {
    n += "u";
  }
  if (t.sticky) {
    n += "y";
  }
  return n;
};