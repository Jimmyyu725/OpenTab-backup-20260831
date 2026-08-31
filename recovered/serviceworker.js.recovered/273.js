var r = require("./15.js");
module.exports = function () {
  var t = r(this);
  var e = "";
  if (t.global) {
    e += "g";
  }
  if (t.ignoreCase) {
    e += "i";
  }
  if (t.multiline) {
    e += "m";
  }
  if (t.dotAll) {
    e += "s";
  }
  if (t.unicode) {
    e += "u";
  }
  if (t.sticky) {
    e += "y";
  }
  return e;
};