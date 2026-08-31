var r = require("./152.js");
module.exports = function (t, e) {
  var n = e ? r(t.buffer) : t.buffer;
  return new t.constructor(n, t.byteOffset, t.length);
};