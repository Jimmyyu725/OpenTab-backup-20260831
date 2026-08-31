var r = require("./236.js");
module.exports = function (t) {
  var e = new t.constructor(t.byteLength);
  new r(e).set(new r(t));
  return e;
};