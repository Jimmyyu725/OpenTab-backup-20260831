var n = require("./542.js");
module.exports = function (t) {
  var e = new t.constructor(t.byteLength);
  new n(e).set(new n(t));
  return e;
};